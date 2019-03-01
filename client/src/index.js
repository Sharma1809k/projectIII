import React from 'react';
import {render} from 'react-dom';
//import './index.css';
import App from './App'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import {indigo, blueGrey} from '@material-ui/core/colors';
import { dark, light } from '@material-ui/core/styles/createPalette';
//import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: indigo[900],
            light: indigo[300],
            dark: indigo[800]
        },
        secondary: {
            main:blueGrey[500],
            light:blueGrey[100],
            dark:blueGrey[600]
        }
    }
    
});



render(
<MuiThemeProvider theme={theme}>
<App />
</MuiThemeProvider>,
document.getElementById('root'));
//registerServiceWorker();