import React from "react";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";


export default function FormInputText ({ name, control, label, placeholder }) {
  return (
    <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value = "" },}) => (
          <TextField
              required
              id="outlined-required"
              label={label}
              placeholder={placeholder ? placeholder || label : null}
              value={value}
              onChange={onChange}
              sx={{marginBottom: 5}}
            />
        )}
/>
  );
};
