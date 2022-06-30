import React from "react";
import FormSection from "./components/FormSection/FormSection";
import { apiData } from "./constants/apiData";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <FormSection apiData={apiData} />
    </div>
  );
};

export default App;
