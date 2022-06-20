import React from "react";
import styled, { createGlobalStyle } from "styled-components";
// import { shuffle } from "lodash";
import { init } from "./spacial-navigation";
import Menu from "./components/Menu";
import "./App.css";
import Content from "./components/Content";
init({
  debug: false,
  visualDebug: false,
});

const AppContainer = styled.div`
  background-color: #221c35;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Menu focusKey="MENU" />
      <Content />
    </AppContainer>
  );
}

export default App;
