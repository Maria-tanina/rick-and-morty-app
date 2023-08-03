import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {Provider} from "react-redux";
import store from "./store";
import {lightTheme} from "./utils/themes/lightTheme";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <ThemeProvider theme={lightTheme}>
              <CssBaseline/>
              <App />
          </ThemeProvider>
      </Provider>
  </React.StrictMode>
);
