import React, { useEffect } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Loading from "./components/Loading/Loading";
import MessageBox from "./components/MessageBox/MessageBox";
import SignUp from "./pages/SignUp/signUp";
import Login from "./pages/Login/Login";
import AllSpacesPage from "./pages/AllSpacesPage";
import DetailsPage from "./pages/DetailsPage";
import MySpacePage from "./pages/MySpacePageFolder/MySpacePage";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Routes>
        <Route exact path="/" element={<AllSpacesPage />} />
        <Route path="/spaces/:id" element={<DetailsPage />} />
        <Route path="/MySpace" element={<MySpacePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
