import { useState } from "react";
import { Avatar, Dropdown, Layout, Menu, Space, theme } from "antd";
import { dropdownItems, items as menuItems } from "./Items";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import type { FC } from "react";
import "./App.css";

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
      const splitKey = selectedMenu.split("-");
      if(splitKey.length > 0) {
        let tampItems = items;
        let tampKey = splitKey[0];
        for(let i = 0; i < splitKey.length; i++) {
          // eslint-disable-next-line no-loop-func
          const item = tampItems.find((val) => val?.key === tampKey);
          if (item) {
            if(item.children) {
              tampItems = item.children;
              tampKey += `-${splitKey[i+1]}` 
            } else {
              activeMenu = item.label;
            }
          } 
        }
      }
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
          left: 0,
          top: 0,
          bottom: 0,
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
      <Layout style={{ marginLeft: !collapsed ? 300 : 80 }}>
        <Header style={{ background: colorBgContainer }} className="px-4">
          <div className="flex">
            <div className="flex-1 font-bold">
              {getActiveMenu().toUpperCase()}
            </div>
            <div>
              <Dropdown menu={{}} trigger={["click"]}>
                <a onClick={(e) => e.preventDefault}>
                  <Space className="font-bold">
                    <Avatar icon={<UserOutlined />} />
                    Nama Pengguna
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>
          </div>
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
