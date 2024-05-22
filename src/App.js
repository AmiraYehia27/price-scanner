import "./App.css";
// import Item from './Item';
// import logo from './assets/website logo.svg';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchContent } from './store/lookupSlice';
// import { useEffect, useState } from 'react';
// import useScanDetection from 'use-scan-detection';
// import { useRef } from 'react';
import BranchSetting from "./BranchSetting";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/price-scanner" element={<BranchSetting />}></Route>
        <Route path="/price-scanner/main" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
