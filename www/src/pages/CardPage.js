import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as API from '../lib/api';

let fetching = false;

export default function CardPage () {
  const [hint, setHint] = useState("");
  const [answer, setAnswer] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    updateCard();
  }, []);

  async function updateCard () {
    if (fetching === true) return;
    try {
      fetching = true;
      const resp = await API.getNewCard();
      if (resp?.data) {
        setAnswer(resp.data.answer);
        setHint(resp.data.hint);
      }
    } catch (error) {
      console.log(error);
    } finally {
      fetching = false;
    }
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
          variant='contained'
          onClick={() => { setShow(false);}}
        >
          Next
        </Button>) : (
        <Button
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
