import React, { useState } from "react";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  HomeOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import type { FC } from "react";
import "./App.css";

const { Header, Content, Footer, Sider } = Layout;

export interface ItemInterface {
  key: string;
  icon?: any;
  label: string;
  children?: ItemInterface[];
}

const items: ItemInterface[] = [
  {
    key: "dashboard",
    icon: React.createElement(HomeOutlined),
    label: "Dashboard"
  },
  {
    key: "1",
    icon: React.createElement(UserOutlined),
    label: "Menu 1",
    children: [
      {
        key: "1-1",
        label: "Children 1-1",
        children: [
          {
            key: "1-1-1",
            label: "Children 1-1-1",
          },
          {
            key: "1-1-2",
            label: "Children 1-1-2",
          },
        ],
      },
      {
        key: "1-2",
        label: "Children 1-2",
      },
    ],
  },
  { key: "2", icon: React.createElement(VideoCameraOutlined), label: "Menu 2" },
  { key: "3", icon: React.createElement(UploadOutlined), label: "Menu 3" },
  { key: "4", icon: React.createElement(BarChartOutlined), label: "Menu 4" },
  { key: "5", icon: React.createElement(CloudOutlined), label: "Menu 5" },
  { key: "6", icon: React.createElement(AppstoreOutlined), label: "Menu 6" },
  { key: "7", icon: React.createElement(TeamOutlined), label: "Menu 7" },
  { key: "8", icon: React.createElement(ShopOutlined), label: "Menu 8" },
];

const App: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("dashboard");
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const getActiveMenu = () => {
    let activeMenu = "";

    if (selectedMenu.includes("-")) {
      console.log(selectedMenu)
    } else {
      const item = items.find((val) => val?.key === selectedMenu);
      if (item) activeMenu = item.label;
    }

    return activeMenu;
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={300}
      >
        <div className="demo-logo-vertical">LOGO</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[selectedMenu]}
          items={items}
          onClick={(e) => setSelectedMenu(e.key)}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: "0 0 0 1em", background: colorBgContainer }}>
          <b>{getActiveMenu().toUpperCase()}</b>
        </Header>
        <Content
          style={{
            margin: "1em",
            padding: "1em",
            background: colorBgContainer,
          }}
        >
          main content
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Demo AntD ©2023 Created by Dea Alverina
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
