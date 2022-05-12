import { Navigate, Outlet } from "react-router-dom"

const ProtectedPages = () => {
    //*
    const token = localStorage.getItem('token')

    //! condicion de renderizado rutas protegidas 
    if(token){
        return <Outlet/>
    } else {
        return <Navigate to='/login'/>
    }
}

export default ProtectedPages