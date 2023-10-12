import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateSongStart } from "../store";

import styled from "@emotion/styled";
import { space, color } from "styled-system";

const UpdateSongContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #f8f8f8;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
`;

const UpdateForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormGroup = styled.div`
  margin-bottom: 20px; /* Increase margin for better spacing */
  text-align: left; /* Align input fields to the left */
`;

const Label = styled.label`
  font-size: 18px; /* Increase font size for better readability */
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px; /* Increase padding for better input field appearance */
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: border-color 0.3s ease;
  &:focus {
    border-color: #007bff;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px; /* Increase margin for better spacing */
`;

const UpdateButton = styled.button`
  padding: 10px 20px; /* Increase padding for better button appearance */
  border: none;
  cursor: pointer;
  ${space}
  ${color}
`;

const UpdateSong = ({ song, onCancelEdit }) => {
  const dispatch = useDispatch();
  const [updatedSong, setUpdatedSong] = useState({
    title: song.title,
    artist: song.artist,
    image: song.image,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedSong({ ...updatedSong, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSongStart({ id: song._id, song: updatedSong }));
  };

  return (
    <UpdateSongContainer>
      <h2>Update Song</h2>
      <UpdateForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Title:</Label>
          <Input
            type="text"
            name="title"
            value={updatedSong.title}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Artist:</Label>
          <Input
            type="text"
            name="artist"
            value={updatedSong.artist}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Image URL:</Label>
          <Input
            type="text"
            name="image"
            value={updatedSong.image}
            onChange={handleInputChange}
          />
        </FormGroup>
        <ButtonContainer>
          <UpdateButton bg="green" color="white" onClick={handleSubmit} mr={2}>
            Update
          </UpdateButton>
          <UpdateButton bg="red" color="white" onClick={onCancelEdit}>
            Cancel
          </UpdateButton>
        </ButtonContainer>
      </UpdateForm>
    </UpdateSongContainer>
  );
};

export default UpdateSong;
