import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import './login.css'
import { registerUser } from "../../services/postLogin";



const Register = () =>{
    //*Esatdos
    const [user , setUser] = useState({})
    const nav = useNavigate()

    const {handleSubmit, register} = useForm()//! EL hook de useForm

    //? funcion que maneja el estado de la informacion pasada por el formulario
    const onSubmit = (data) => {
            setUser(data)
    };

    //?Efecto del usuario
    useEffect(() =>{
        if(user.email){
            registerUser(user).then(()=>{
                nav('/login')
                alert('Usuario creado Exitosamente')
            })
        }
        
    },[user, nav])
  
    return (
        <div className="container-form">
            <div className="container-flex">
                <h3>REGISTER</h3>
                <form onSubmit={handleSubmit(onSubmit)} className='form2'>
                    <div className="user">
                        <input type="text" placeholder="FIRST NAME"  {...register("first_name")}  />
                        <input type='text' placeholder="LAST NAME"  {...register("last_name")}  />
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input placeholder="EMAIl" id="email" type='email' {...register("email")} />
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input placeholder="PASSWORD" id="password" type='password'{...register("password", { required: true })} />
                    </div>
                    <input type="submit" className="submit" value="Register"/>
                </form>
                <div className="sing2">
                    <Link to='/login' className="link">  Login  </Link>
                </div>
            </div>
        </div>
    );
}
export default Register;