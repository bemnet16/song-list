import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongsStart, deleteSongStart } from "../store";
import UpdateSong from "./UpdateSong";

import styled from "@emotion/styled";
import { space, typography, color } from "styled-system";

const SongListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -10px;
  padding-bottom: 80px;
`;

const SongCard = styled.div`
  flex-basis: calc(
    25% - 20px
  ); /* Set flex-basis to create four cards in one row */
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px; /* Decrease card padding */
  margin: 10px; /* Add margin to create space between cards */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
  position: relative;
  height: 70%; /* Decrease the card height */
  box-sizing: border-box; /* Include padding and border in the box size */
`;

const SongImage = styled.img`
  width: 100%;
  height: 250px; /* Decrease image height */
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

// ...

const SongInfo = styled.div`
  text-align: center;
  margin: 10px 0;
  ${typography}
`;

const SongButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;

const SongButton = styled.button`
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  ${space}
  ${color}
`;

const SongList = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.songs);
  const loading = useSelector((state) => state.songs.loading);
  const error = useSelector((state) => state.songs.error);

  useEffect(() => {
    dispatch(getSongsStart());
  }, [dispatch]);

  const [editedSong, setEditedSong] = useState(null);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this song?")) {
      dispatch(deleteSongStart(id));
    }
  };

  const handleEdit = (song) => {
    setEditedSong(song);
  };

  const handleCancelEdit = () => {
    setEditedSong(null);
  };

  return (
    <div>
      <h1>List of Avaliable Songs</h1>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <SongListContainer>
        {songs.map((song) => (
          <SongCard key={song._id}>
            <SongImage src={song.image} alt={`${song.title} Image`} />
            {editedSong === song ? (
              <div>
                <UpdateSong song={song} onCancelEdit={handleCancelEdit} />
              </div>
            ) : (
              <div>
                <SongInfo fontSize={3}>
                  Title: <b>{song.title}</b> <br />
                  <br />
                  Artist:<b> {song.artist}</b>
                </SongInfo>
                <SongButtons>
                  <SongButton
                    bg="red"
                    color="white"
                    mr={2}
                    onClick={() => handleDelete(song._id)}
                  >
                    Delete
                  </SongButton>
                  <SongButton
                    bg="green"
                    color="white"
                    onClick={() => handleEdit(song)}
                  >
                    Update
                  </SongButton>
                </SongButtons>
              </div>
            )}
          </SongCard>
        ))}
      </SongListContainer>
    </div>
  );
};

export default SongList;
