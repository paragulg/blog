import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  TextareaAutosize,
  TextField,
  Typography,
} from '@mui/material';

const Posts = () => {
  const [inputName, setInputName] = React.useState('');
  const [inputText, setInputText] = React.useState('');

  const [cards, setCards] = React.useState([{ name: '', text: '' }]);

  const publish = () => {
    if (inputName !== '' && inputText !== '') {
      if (cards[0].name == '' && cards[0].text == '') {
        setCards([{ name: inputName, text: inputText }]);
      } else setCards([...cards, { name: inputName, text: inputText }]);
    }
  };

  return (
    <div className="posts">
      <Box sx={{ width: 500, height: 400, backgroundColor: 'white', mt: -40 }}>
        <center>
          <TextField
            sx={{ m: 3 }}
            id="name"
            value={inputName}
            onChange={(e) => {
              setInputName(e.target.value);
            }}
            label="Имя"
            variant="outlined"
          />
        </center>
        <center>
          <TextareaAutosize
            className="textArea"
            placeholder="Контент"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            style={{ resize: 'none', width: 300, height: 200 }}
          />
        </center>
        <center>
          <Button sx={{ m: 2.5 }} onClick={() => publish()} variant="contained">
            Опубликовать
          </Button>
        </center>
      </Box>
      <div className="cards">
        {cards.length > 0 && cards[0].name !== '' && cards[0].text !== '' ? (
          cards.map((entry, index) => (
            <Card key={index} sx={{ width: 500, height: 400, mt: 5, mb: 5 }}>
              <CardContent>
                <CardActions sx={{ width: 'max-content' }}>
                  <Button className="deleteButton" size="small" variant="outlined">
                    Удалить
                  </Button>
                  <Button className="editButton" size="small" variant="outlined">
                    Редактировать
                  </Button>
                </CardActions>
                <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                  {entry.name}
                </Typography>
                <Typography variant="h6">{entry.text}</Typography>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="empty">Нет постов</div>
        )}
      </div>
    </div>
  );
};

export default Posts;
