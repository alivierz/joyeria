import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { postUser } from "../../services/postLogin";
import './login.css'


const Login = () =>{
    //*Esatdos
    const [user , setUser] = useState({})

    const {handleSubmit, register} = useForm()//! EL hook de useForm

    const nav = useNavigate()

    //? funcion que maneja el estado de la informacion pasada por el formulario
    const onSubmit = (data) => {
        setUser(data)
    };

    //?Efecto del usuario
    useEffect(() =>{
        if(user.email){
            postUser(user).then((res) =>{
                localStorage.setItem('token', res.access)
            }).then(() =>{
                nav('/shop')
            })
        }
        
    }, [user, nav])
  
    return (
        <div className="container-form">
            <div className="container-flex">
                <h3>Login</h3>
                <form onSubmit={handleSubmit(onSubmit)} className='form'>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input placeholder="admin@admin.com" id="email" type='email' {...register("email")} />
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input placeholder="root" id="password" type='password'{...register("password", { required: true })} />
                    </div>
                    <input type="submit" className="submit" value='Login'/>
                </form>
                <div className="sing">
                    <p>Don't have a acount?</p> <Link to='/singUp'>Create Acount</Link>
                </div>
            </div>
        </div>
    );
}
export default Login;