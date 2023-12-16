import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import LoginPage from "./login";
import RegisterPage from "./register";
import {Box} from "@mui/material";
import {instance} from "../../utils/axios";
import {useAppDispatch} from "../../utils/hook";
import {login} from "../../store/slice/auth";
import './style.scss';



const AuthRootComponent: React.FC = (): JSX.Element => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [repeatPassword, setRepeatPassword] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [username, setUsername] = React.useState('');
    const location = useLocation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        if (location.pathname === '/login') {
            try {
                const userData = {
                    email,
                    password,
                }
                const user = await instance.post('auth/login', userData)
                await dispatch(login(user.data))
                navigate('/')
            } catch (e) {
                return e
            }
        } else {
            if (password === repeatPassword) {
                const userData = {
                    firstName,
                    username,
                    email,
                    password: "qwerty1234"
                }
                const newUser = await instance.post('auth/register', userData)
                console.log(newUser)
            }else {
                throw new Error('У вас не совпадает пароли')
            }
        }
    }

    return (
        <div className='root'>
            <form className="form" onSubmit={handleSubmit}>
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    flexDirection='column'
                    maxWidth={640}
                    margin='auto'
                    padding={5}
                    borderRadius={5}
                    boxShadow={'5px 5px 10px #ccc'}
                >
                    {location.pathname === '/login'
                        ? <LoginPage
                            setEmail={setEmail}
                            setPassword={setPassword}
                        />
                        : location.pathname === '/register'
                            ? <RegisterPage
                                setEmail={setEmail}
                                setPassword={setPassword}
                                setRepeatPassword={setRepeatPassword}
                                setFirstName={setFirstName}
                                setUsername={setUsername}
                            />
                            : null
                    }
                </Box>
            </form>
        </div>
    )

    // if (location.pathname === '/login') {
    //     return <LoginPage/>
    // }
    //
    // if (location.pathname === '/register') {
    //     return <RegisterPage/>
    // }
    //
    // return null;

};

export default AuthRootComponent;