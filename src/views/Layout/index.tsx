import React,{useState} from "react";
import {Outlet,useLocation,useNavigate} from "react-router-dom"
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import layoutCss from "./index.module.scss"
const { Header, Content, Sider } = Layout;

// menu配置
const items2: MenuProps["items"] = [
  {
    key:"/layout/page1",
    label:"栏目1",
    icon:<LaptopOutlined/>,
  },
  {
    key:"/layout/page2",
    label:"栏目2",
    icon:<LaptopOutlined/>
  },
  {
    key:"/layout/model",
    label:"栏目三",
    icon:<LaptopOutlined/>,
    children:[
      {
        key:"/layout/model/page1",
        label:"子页面1",
      },
      {
        key:"/layout/model/page2",
        label:"子页面2",
      }
    ]
  }
]







const App: React.FC = () => {
  const [openkeys,setOpenkeys] = useState(['']);
  const navigateTo  = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const currentRoute = useLocation();
  console.log("route",currentRoute)

  const navigateClick = ({key}:{key:string})=>{
    navigateTo(key);
  }

  const openChange = (openKeys:string[])=>{
    console.log(openKeys,"openchange")
    setOpenkeys([...openKeys])
  }
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className={layoutCss.logo} />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={[currentRoute.pathname==="/layout"?+currentRoute.pathname+"/page1":currentRoute.pathname]}
            openKeys={openkeys}
            style={{ height: "100%", borderRight: 0 }}
            items={items2}
            onClick={navigateClick}
            onOpenChange={openChange}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Breadcrumb style={{ margin: "0 0 20px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
            </Breadcrumb>
            {/* 占位 */}
            <Outlet/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
