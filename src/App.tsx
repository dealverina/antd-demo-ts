import { useEffect, useState } from "react";
import {
  Avatar,
  Breadcrumb,
  Divider,
  Dropdown,
  Layout,
  Menu,
  Space,
  theme,
} from "antd";
import {
  menuItems,
  dropdownItems as items,
  BreadcrumbInterface,
} from "./Items";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import type { FC } from "react";
import "./App.css";

const { Header, Content, Footer, Sider } = Layout;

const App: FC = () => {
  const package_json = require("../package.json");
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("dashboard");
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setCollapsed(isMobile ? true : false);
  }, [isMobile]);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const getActiveMenu = () => {
    let activeMenu = "";

    if (selectedMenu.includes("-")) {
      const splitKey = selectedMenu.split("-");
      if (splitKey.length > 0) {
        let tampItems = menuItems;
        let tampKey = splitKey[0];
        for (let i = 0; i < splitKey.length; i++) {
          // eslint-disable-next-line no-loop-func
          const item = tampItems.find((val) => val?.key === tampKey);
          if (item) {
            if (item.children) {
              tampItems = item.children;
              tampKey += `-${splitKey[i + 1]}`;
            } else {
              activeMenu = item.label;
            }
          }
        }
      }
    } else {
      const item = menuItems.find((val) => val?.key === selectedMenu);
      if (item) activeMenu = item.label;
    }

    return activeMenu;
  };

  const getBreadcrumbItems = () => {
    let breadcrumbItems: BreadcrumbInterface[] = [];

    if (selectedMenu.includes("-")) {
      const splitKey = selectedMenu.split("-");
      if (splitKey.length > 0) {
        let tampItems = menuItems;
        let tampKey = splitKey[0];
        for (let i = 0; i < splitKey.length; i++) {
          // eslint-disable-next-line no-loop-func
          const item = tampItems.find((val) => val?.key === tampKey);
          if (item) {
            breadcrumbItems.push({
              title: item.label,
            });

            if (item.children) {
              tampItems = item.children;
              tampKey += `-${splitKey[i + 1]}`;
            }
          }
        }
      }
    }

    return breadcrumbItems;
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
          items={menuItems}
          onClick={(e) => setSelectedMenu(e.key)}
        />
      </Sider>
      <Layout
        style={{ marginLeft: !collapsed ? 300 : 80 }}
        className={`${isMobile && !collapsed ? "hidden" : ""}`}
      >
        <Header style={{ background: colorBgContainer }} className="px-4">
          <div className="flex">
            <div className="flex-1 font-bold">
              {getActiveMenu().toUpperCase()}
            </div>
            <div>
              <Dropdown menu={{ items }} trigger={["click"]}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a onClick={(e) => e.preventDefault}>
                  <Space className="font-bold">
                    <Avatar icon={<UserOutlined />} />
                    {isMobile ? "" : "Nama Pengguna"}
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
          {selectedMenu.includes("-") ? (
            <>
              <Breadcrumb className="mt-3" items={getBreadcrumbItems()} />
              <Divider />
            </>
          ) : (
            <></>
          )}
          <div className="text-xl">Main Content</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Demo AntD ©2023 Created by Dea Alverina - ver.{package_json.version}
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
