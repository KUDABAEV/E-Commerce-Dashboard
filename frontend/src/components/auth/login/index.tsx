import React from 'react';
import {TextField, Button, Typography} from "@mui/material";
import {IPropsLogin} from "../../../common/types/auth";

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {

    const {setEmail, setPassword} = props;

    return (
        <>
            <Typography variant="h2" fontFamily='Poppins' textAlign='center'>
                Авторизация
            </Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Poppins' textAlign='center'>
                Введите ваш логин и пароль
            </Typography>
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
            <Button type="submit" sx={{fontFamily:'Poppins', marginTop: 2, marginBottom: 2, width:'60%'}}  variant="contained">Войти</Button>
            <Typography
                variant="body1"
                sx={{fontFamily:'Poppins',}}
            >У вас нет аккаунта?<span className="incitingText">Регистрация</span></Typography>
        </>
    );
}

export default LoginPage;