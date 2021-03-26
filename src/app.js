import React from 'react';
import { Layout } from 'antd';
import './app.css';
import Regions from './components/regions';
import { Redirect, Route, Switch } from 'react-router-dom'
import { Header } from './components/header/header';
import { Home } from 'pages/home/home';

export default function App() {
  return (
    <Layout>
      <Layout.Content>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} ></Route>
          <Route path="/regions/" render={() => <Regions />}></Route>
          <Redirect from="/" to="home"></Redirect>
        </Switch>
      </Layout.Content>
    </Layout>
  );
}
