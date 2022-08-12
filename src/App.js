import React from "react";
import "./App.css";
import AuthContextProvider from "./contexts/authContext";
import CourseContextProvider from "./contexts/courseContext";
import Routing from "./Routing";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

function App() {
  return (
    <AuthContextProvider>
      <CourseContextProvider>
        <Routing />
      </CourseContextProvider>
    </AuthContextProvider>
  );
}

export default App;
