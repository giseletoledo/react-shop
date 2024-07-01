import styled from "styled-components";

interface ContainerProps {
    $showCart: boolean;
}

export const Container = styled.aside<ContainerProps>`
    position: fixed;
    top: 0;
    right: ${(props)=> (props.$showCart ? "0px" : "-350px")};

    width: 350px;
    height: 100vh;
    background-color: white;
    z-index: 100;
    overflow-y: auto;

    padding: 2rem;
    box-shadow: -5 0 15px rgba(0,0,0, 0.25);
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    background: none;
    font-size: 1.2rem;
    cursor: pointer;
`;

export const Title = styled.h1``;

export const CartProductList = styled.ul`
    padding: 2rem 0;
    list-style: none;

    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const CartProductItem = styled.li`
    .bold-text {
    font-weight: bold;
  }
`;

export const CartTotal = styled.strong``;
