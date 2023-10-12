import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { Footer, Header } from "./components";
import Routers from "./routes/Routers";

const App = () => {
  const [isDrawerVisible, setDrawerVisible] = useState<boolean>(false);

  const setSidebarDrawer = () => {
    setDrawerVisible((prevState) => !prevState);
  };

  return (
    <div>
      <BrowserRouter>
        <Header setDrawerVisible={setSidebarDrawer} />
        <Routers
          setDrawerVisible={setSidebarDrawer}
          isDrawerVisible={isDrawerVisible}
        />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
