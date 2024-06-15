import React from 'react';
import styled from "styled-components"
import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './components/Header/Header';
import { ProductCard } from './components/ProductCard/ProductCard';
import { ProductsList } from './components/ProductsList/ProductsList';

function App() {
  return (
    <>
    <Header/>
    <ProductsList />
   <GlobalStyles />
   </>
  );
}

export default App;
