import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createSongStart } from '../store';

import styled from '@emotion/styled';

const CreateSongContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f8f8f8;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const CreateSongForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
`;

const CreateSong = () => {
  const dispatch = useDispatch();
  const [songData, setSongData] = useState({ title: '', artist: '', image: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSongData({ ...songData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createSongStart(songData));
    setSongData({ title: '', artist: '', image: '' });
  };

  return (
    <CreateSongContainer>
      <h2>Create Song</h2>
      <CreateSongForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Title:</Label>
          <Input
            type="text"
            name="title"
            value={songData.title}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Artist:</Label>
          <Input
            type="text"
            name="artist"
            value={songData.artist}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Image URL:</Label>
          <Input
            type="text"
            name="image"
            value={songData.image}
            onChange={handleInputChange}
          />
        </FormGroup>
        <SubmitButton type="submit">Create</SubmitButton>
      </CreateSongForm>
    </CreateSongContainer>
  );
};

export default CreateSong;
