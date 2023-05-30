import { useState } from "react";
import { Layout, Menu, theme } from "antd";
import type { FC } from "react";
import "./App.css";
import { items as menuItems } from "./Items";

const { Header, Content, Footer, Sider } = Layout;

const App: FC = () => {
  const items = menuItems;
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("dashboard");
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const getActiveMenu = () => {
    let activeMenu = "";

    if (selectedMenu.includes("-")) {
      console.log(selectedMenu);
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
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
        }}
      >
        <div className="demo-logo-vertical flex items-center justify-center">
          LOGO
        </div>
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
