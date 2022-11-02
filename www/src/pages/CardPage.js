import React, { useEffect, useState } from 'react';
import * as API from '../lib/api';

export default function CardPage () {
  const [hint, setHint] = useState("");
  const [answer, setAnswer] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    updateCard();
  }, []);

  async function updateCard () {
    const resp = await API.getNewCard();
    if (resp?.data) {
      setAnswer(resp.data.answer);
      setHint(resp.data.hint);
    }
  }

  return (
    <div>
    <h1>show card here</h1>
    <h1>{hint}</h1>
    <h1>{answer}</h1>
  </div>
  )
}
