import { Layout } from 'antd';
import React from 'react';
import type { FC } from 'react';
import 'antd/dist/reset.css';
import './App.css';

const App: FC = () => {
  const { Header, Content, Footer, Sider } = Layout;

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          color: 'white'
        }}
      >
        left sidebar
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header style={{ color: 'white' }}>header</Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>main content</Content>
        <Footer style={{ textAlign: 'center' }}>Demo AntD ©2023 Created by Dea Alverina</Footer>
      </Layout>
    </Layout>
  )
}

export default App;