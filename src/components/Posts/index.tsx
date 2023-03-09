import React from 'react';
import { Box, Button, TextareaAutosize, TextField } from '@mui/material';
import './Posts.module.css';

const Posts = () => {
  const [inputName, setInputName] = React.useState('');
  const [inputText, setInputText] = React.useState('');

  const onClickPublish = () => {
    alert()
  };

  return (
    <div className="posts">
      <Box sx={{ width: 500, height: 400, backgroundColor: 'white', mt: -40}}>
        <TextField
          sx={{ ml: 16, mt: 5 }}
          id="name"
          value={inputName}
          onChange={(e) => {
            setInputName(e.target.value);
          }}
          label="Имя"
          variant="outlined"
        />
        <TextareaAutosize
          className="textArea"
          placeholder="Введите текст"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          style={{ resize: 'none', width: 300, height: 200, marginLeft: 85, marginTop: 10 }}
        />
        <Button onClick={() => onClickPublish()} variant="contained" sx={{ mt: 2.5, ml: 20 }}>
          Опубликовать
        </Button>
      </Box>
    </div>
  );
};

export default Posts;
