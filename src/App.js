import React, { Component } from 'react';
import "primereact/resources/primereact.min.css";
import './App';
import Header from './components/header';
import Footer from './components/footer';
import { Menubar } from 'primereact/menubar';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

const DivMain = styled.h1`
color: black;
font-size: 10px
`;

class App extends Component {
  render() {
    const menuitems = [
      {
        label: 'Home',
        comand: () => this.props.history.push('/')
      },
      {
        label: 'Sobre',
        comand: () => this.props.history.push('/sobre')
      },
      {
        label: 'Contato',
        comand: () => this.props.history.push('/contato')
      },
    ];
    return (
      <div className='App'>
        <Menubar model={menuitems} />
        <Header />
        <DivMain>
          <main>
            <div className='content' id='content'>
              {this.props.children}
            </div>
          </main>
        </DivMain>
        <Footer />
      </div>
    );
  }
}
export default BrowserRouter(App);
