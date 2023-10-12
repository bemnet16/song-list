

import { configureStore, createSlice } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all, call, put, takeEvery } from 'redux-saga/effects';

// Create a Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Initial state for songs
const initialState = {
  songs: [],
  loading: false,
  error: null,
};

// Create a slice for managing songs
const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    getSongsStart: (state) => {
      state.loading = true;
    },
    getSongsSuccess: (state, action) => {
      state.loading = false;
      state.songs = action.payload;
      state.error = null;
    },
    getSongsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    createSongStart: (state) => {
      state.loading = true;
    },
    createSongSuccess: (state, action) => {
      state.loading = false;
      state.songs.push(action.payload);
      state.error = null;
    },
    createSongFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateSongStart: (state) => {
      state.loading = true;
    },
    updateSongSuccess: (state, action) => {
      state.loading = false;
      const updatedIndex = state.songs.findIndex((song) => song._id === action.payload._id);
      if (updatedIndex !== -1) {
        state.songs[updatedIndex] = action.payload;
      }
      state.error = null;
    },
    updateSongFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteSongStart: (state) => {
      state.loading = true;
    },
    deleteSongSuccess: (state, action) => {
      state.loading = false;
      state.songs = state.songs.filter((song) => song._id !== action.payload);
      state.error = null;
    },
    deleteSongFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Export actions
export const {
  getSongsStart,
  getSongsSuccess,
  getSongsFailure,
  createSongStart,
  createSongSuccess,
  createSongFailure,
  updateSongStart,
  updateSongSuccess,
  updateSongFailure,
  deleteSongStart,
  deleteSongSuccess,
  deleteSongFailure,
} = songsSlice.actions;

// Create a Saga function to fetch songs
function* fetchSongs() {
  try {
    const response = yield call(fetch, 'https://last-music.onrender.com/songs'); 
    const data = yield response.json();
    yield put(getSongsSuccess(data));
  } catch (error) {
    yield put(getSongsFailure(error.message));
  }
}

// Create a Saga function to create a song
function* createSong(action) {
  try {
    const response = yield call(fetch, 'https://last-music.onrender.com/songs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.payload),
    });
    const data = yield response.json();
    yield put(createSongSuccess(data));
  } catch (error) {
    yield put(createSongFailure(error.message));
  }
}

// Create a Saga function to update a song
function* updateSong(action) {
  try {
    const response = yield call(fetch, `https://last-music.onrender.com/songs/${action.payload.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.payload.song),
    });
    const data = yield response.json();
    yield put(updateSongSuccess(data));
  } catch (error) {
    yield put(updateSongFailure(error.message));
  }
}

// Create a Saga function to delete a song
function* deleteSong(action) {
  try {
    yield call(fetch, `https://last-music.onrender.com/songs/${action.payload}`, {
      method: 'DELETE',
    });
    yield put(deleteSongSuccess(action.payload));
  } catch (error) {
    yield put(deleteSongFailure(error.message));
  }
}

// Create a Saga watcher function
function* watchGetSongs() {
  yield takeEvery(getSongsStart.type, fetchSongs);
}

function* watchCreateSong() {
  yield takeEvery(createSongStart.type, createSong);
}

function* watchUpdateSong() {
  yield takeEvery(updateSongStart.type, updateSong);
}

function* watchDeleteSong() {
  yield takeEvery(deleteSongStart.type, deleteSong);
}

// Create the Redux store
const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
  },
  middleware: [sagaMiddleware],
});

// Run the Saga middleware
sagaMiddleware.run(function* () {
  yield all([watchGetSongs(), watchCreateSong(), watchUpdateSong(), watchDeleteSong()]);
});

export default store;
