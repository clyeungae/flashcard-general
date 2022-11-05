import React from 'react';
import { useForm } from "react-hook-form";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { toast } from 'react-toastify';
import FormInputText from '../component/form/FormTextInput';
import * as API from '../lib/api';
import "react-toastify/dist/ReactToastify.css";

let loading = false;

export default function AddCardPage () {
  const {
    control,
    handleSubmit,
    reset,
  } = useForm();

  async function addRecord (data) {
    if (loading === true) return;
    try {
      loading = true;
      const rs = await API.addNewCard(data);
      if (rs?.success === 1) {
        toast.success('New Card added successfully');
        reset();
        return;
      }
      toast.error('Failed to add card');
    }  catch (error) {
      console.error(error);
      toast.error('Failed to add card');
    } finally {
      loading = false;
    }
  }
  return (
    <Container sx={{padding: "5%"}}>
      <form
        onSubmit={handleSubmit(addRecord)}
        style={{display: 'flex', flexDirection: 'column'}}
      >
        <FormInputText
          control={control}
          name="hint"
          label="Hint"
        />
        <FormInputText
          control={control}
          name="answer"
          label="Answer"
        />
        <div style={{alignSelf: 'center'}}>
        <Button type="submit" variant="contained">submit</Button>
        </div>
      </form>
    </Container>
  )
}
