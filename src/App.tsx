import GlobalStyle from "./GlobalStyle";
import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
      <ReactQueryDevtools initialIsOpen />
    </>
  );
}

export default App;
