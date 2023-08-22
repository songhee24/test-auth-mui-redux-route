import React, { useState } from "react";
import { Paper, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Button } from "../../UI/Button";
import styles from "./Registration.module.css";
import { asyncRegister } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncAuth } from "../../redux/slices/auth/authService";

export const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  const submitHandler = async (userData) => {
    dispatch(asyncAuth(userData));
  };

  return (
    <Paper classes={{ root: styles.root }}>
      <Typography variant="h5" classes={{ root: styles.title }}>
        Создание Аккаунта
      </Typography>
      <form onSubmit={handleSubmit(submitHandler)}>
        <TextField
          {...register("firstName", { required: "Укажите имя!" })} // {valie, valie1, value2} = ...register()
          fullWidth
          error={Boolean(errors.firstName?.message)}
          helperText={errors.firstName?.message} // let errors = {} errors.undefined.message
          className={styles.field}
          type="text"
          label="First Name"
        />
        <TextField
          {...register("lastName", { required: "Укажите Фамилию!" })}
          fullWidth
          className={styles.field}
          type="text"
          label="Last Name"
        />
        <TextField
          {...register("phoneNumber", { required: "Укажите Номер телефона!" })}
          fullWidth
          className={styles.field}
          type="text"
          label="Phone Number"
        />
        <TextField
          {...register("email", { required: "Укажите почту!" })}
          fullWidth
          className={styles.field}
          type="email"
          label="Email"
        />
        <TextField
          fullWidth
          {...register("password", {
            required: "Укажите пароль!",
            minLength: {
              value: 8,
              message: "Пароль должен быть 8 символов!",
            },
            maxLength: 20,
          })}
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          className={styles.field}
          type="password"
          label="Password"
        />
        <Button type="submit">Зарегистрироаться</Button>
      </form>
    </Paper>
  );
};
