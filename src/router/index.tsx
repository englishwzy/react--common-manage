import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
const Layout = lazy(() => import("@/views/Layout/index"));
const Login = lazy(() => import("@/views/Login/index"));
const Notfound = lazy(() => import("@/views/Notfound/index"));
const Page1 = lazy(() => import("@/views/Content/Page1"));
const Page2 = lazy(() => import("@/views/Content/Page2"));


const ModelPage1 = lazy(()=>import("@/views/Content/ModelManage/modelConfig"))
const ModelPage2 = lazy(()=>import("@/views/Content/ModelManage/modelOrder"))


// 抽取loading函数
function loading(reactDom: JSX.Element) {
  return (
    <React.Suspense fallback={<div>loading...</div>}>{reactDom}</React.Suspense>
  );
}

const Routes = [
  {
    path: "/",
    element: <Navigate to="/layout/page1"></Navigate>,
  },
  {
    path: "/layout",
    element: <Layout/>,
    children: [
      {
        path: "page1",
        element: loading(<Page1 />),
      },
      {
        path: "page2",
        element: loading(<Page2 />),
      },
      {
        path:"model",
        element:loading(<ModelPage1/>),
        children:[
            {
                path:"page1",
                element:loading(<ModelPage1/>),
            },
            {
                path:"page2",
                element:loading(<ModelPage2/>),
            }
        ]
      },
    //   设置默认子路由
    //   {
    //     path:"",
    //     element:<Navigate to="page1"></Navigate>
    //   },
      {
        path:"*",
        element:<Navigate to="page1"></Navigate>
      }
    ],
  },
  {
    path: "*",
    element: loading(<Notfound />),
  },
  {
    path: "/login",
    element: loading(<Login />),
  },
];

export default Routes;
