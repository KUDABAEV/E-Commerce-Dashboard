import React from 'react';
import {Button, TextField, Typography} from "@mui/material";
import {IPropsRegister} from "../../../common/types/auth";

const RegisterPage: React.FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {

    const {setEmail, setPassword, setRepeatPassword, setFirstName, setUsername} = props;

    return (
        <>
            <Typography variant="h2" fontFamily='Poppins' textAlign='center'>
                Регистрация
            </Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Poppins' textAlign='center'>
                Введите данные для регистрации
            </Typography>
            <TextField
                onChange={(e) => setFirstName(e.target.value)}
                fullWidth={true}
                margin='normal'
                label="Имя"
                variant="outlined"
                placeholder="Введите ваше имя"
            />
            <TextField
                onChange={(e) => setUsername(e.target.value)}
                fullWidth={true}
                margin='normal'
                label="Username"
                variant="outlined"
                placeholder="Введите ваш username"
            />
            <TextField
                onChange={(e) => setEmail(e.target.value)}
                fullWidth={true}
                margin='normal'
                label="Email"
                variant="outlined"
                placeholder="Введите ваш email"
            />
            <TextField
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                fullWidth={true}
                margin='normal'
                label="Password"
                variant="outlined"
                placeholder="Введите ваш пароль"
            />
            <TextField
                onChange={(e) => setRepeatPassword(e.target.value)}
                type="password"
                fullWidth={true}
                margin='normal'
                label="Password"
                variant="outlined"
                placeholder="Повторите ваш пароль"
            />
            <Button type='submit' sx={{fontFamily:'Poppins', marginTop: 2, marginBottom: 2, width:'60%'}}  variant="contained">Регистрация</Button>
            <Typography
                variant="body1"
                sx={{fontFamily:'Poppins',}}
            >У вас есть аккаунт?<span className="incitingText">Авторизация</span></Typography>
        </>
    );
};

export default RegisterPage;