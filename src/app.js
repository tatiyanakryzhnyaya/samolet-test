import React from 'react';
import { Layout } from 'antd';
import { Redirect, Route, Switch } from 'react-router-dom'

import './app.css';
import Regions from './components/regions';
import Header from './components/header';
import Home from './pages/home';
import Region from './components/region';

export default function App() {
  return (
    <Layout>
      <Layout.Content>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} ></Route>
          <Route path="/regions/" exact render={() => <Regions />}></Route>
          <Route path="/regions/:id" component={Region} ></Route>
          <Redirect from="/" to="home"></Redirect>
        </Switch>
      </Layout.Content>
    </Layout>
  );
}
