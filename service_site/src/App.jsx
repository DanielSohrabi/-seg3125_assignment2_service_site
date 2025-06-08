import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import PageFooter from "./components/PageFooter";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <PageFooter />
    </>
  );
}

export default App;
