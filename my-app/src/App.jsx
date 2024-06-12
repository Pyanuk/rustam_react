import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import CardItem from "./components/CardItem";

export const AppContext = React.createContext({});

function App() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    async function axiosData() {
      const cardData = await axios.get('http://localhost:3001/card');
      setCard(cardData.data);
    }
    axiosData();
  }, []);

  return (
    <AppContext.Provider value={{ card, setCard }}>
      <div>
        <Header />
        <Routes>
          <Route
            path='/card'
            element={<CardItem item={card} />}
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
