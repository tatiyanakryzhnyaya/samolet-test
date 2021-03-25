import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import './app.css';
import Regions from 'pages/regions';

export default function App() {
  return (
    <Layout>
      <Layout.Content>
        <Regions />
      </Layout.Content>
    </Layout>
  );
}
