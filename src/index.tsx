import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeProvider} from "styled-components";
import {theme} from "./theme";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import {RecoilRoot} from "recoil";

const queryClient = new QueryClient();

ReactDOM.render(
    <React.StrictMode>
	  <RecoilRoot>
	  <QueryClientProvider client={queryClient}>
		  <ThemeProvider theme={theme}>
			<ReactQueryDevtools initialIsOpen={true}/>
			<App />
		  </ThemeProvider>
	  </QueryClientProvider>
	  </RecoilRoot>
     </React.StrictMode>,
  document.getElementById('root')
);