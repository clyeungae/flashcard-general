import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { toast } from 'react-toastify';
import * as API from '../lib/api';

let fetching = false;

export default function CardPage () {
  const [hint, setHint] = useState("");
  const [answer, setAnswer] = useState("");
  const [show, setShow] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    updateCard();
  }, []);

  async function updateCard () {
    if (fetching === true) return;
    try {
      fetching = true;
      setButtonDisabled(true);
      const resp = await API.getNewCard();
      if (resp?.data) {
        setAnswer(resp.data.answer);
        setHint(resp.data.hint);
        return;
      }
      toast.error('Cannot get flashcard');
    } catch (error) {
      console.error(error);
      toast.error('Cannot get flashcard');
    } finally {
      fetching = false;
      setButtonDisabled(false);
    }
  }

  async function onClickNextCard () {
    setShow(false);
    await updateCard();
  }

  return (
    <div style={{padding: "5%"}}>
    <Card sx={{ minWidth: 275, minHeight: 200, display: 'flex', justifyContent: 'center', alignItems: 'center'}} variant="outlined">
      <CardContent >
      <Typography variant={show ? "h5" : "h3"} align="center" paragraph="true">
        {show ? answer : hint}
      </Typography>
      </CardContent>
    </Card>
    <div style={{justifyContent: 'center', display: 'flex', marginTop: 10}}>
      {
        show ? (
        <Button
          disabled={buttonDisabled}
          variant='contained'
          onClick={onClickNextCard}
        >
          Next
        </Button>) : (
        <Button
          disabled={buttonDisabled}
          variant='contained'
          onClick={() => { setShow(true);}}
        >
          Reveal
        </Button>)
      }
    </div>
  </div>
  )
}
