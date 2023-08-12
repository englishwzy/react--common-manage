import React,{lazy} from "react"
import {Navigate} from "react-router-dom"
const Layout = lazy(()=>import("@/views/Layout/index"));
const Login = lazy(()=>import("@/views/Login/index"));
const Notfound = lazy(()=>import("@/views/Notfound/index"));


const Routes  = [
    {
        path:"/",
        element:<Navigate to="/layout"></Navigate>
    },
    {
         path:"/layout",
        element:<Layout/>
    },
    {
        path:"*",
        element:<React.Suspense fallback={<div>loading...</div>}><Notfound/></React.Suspense>
    },
    {
        path:"/login",
        element:<React.Suspense fallback={<div>loading...</div>}><Login/></React.Suspense>
    }
]

export default Routes;