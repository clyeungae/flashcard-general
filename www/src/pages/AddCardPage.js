import React from 'react';
import { useForm } from "react-hook-form";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormInputText from '../component/form/FormTextInput';

export default function AddCardPage () {
  const {
    control,
    handleSubmit,
  } = useForm();

  async function addRecord (data) {
    console.log(data);
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
