import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DashboardPage } from "./dashboard/DashboardPage";

// const routes = [
//   {
//     path: "/",
//     Component: DashboardPage,
//     exact: true,
//   },
// ];

const RoutesUrl = () => {
  return (
    <Router>
      <Routes>
        {/* {routes.map((route, index) => { */}
        <Route path="/" element={<DashboardPage />}></Route>;{/* })} */}
      </Routes>
    </Router>
  );
};

export default RoutesUrl;
