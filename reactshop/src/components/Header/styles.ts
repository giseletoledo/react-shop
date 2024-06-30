import styled from "styled-components";


interface ContainerProps {
    $showCart: boolean;
}

export const Container = styled.aside<ContainerProps>`
    position: fixed;
    top: 0;
    right: ${(props) => (props.$showCart ? "0px" : "-350px")};

    width: 350px;
    height: 100vh;
    background-color: white;

    padding: 2rem;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);

    transition: right 0.3s ease;
`;

export const Title = styled.h1``;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    background: none;
    font-size: 1.2rem;
    cursor: pointer;
`;

// Restante dos estilos
export const StyledHeader = styled.header`
  background-color: navy;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 60px;
`;

export const HeaderTitle = styled.h1`
  color: #fff;
  font-size: 1.6rem;
  font-weight: 500;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

interface AuthButtonProps {
  $isLogged: boolean;
}

export const AuthButton = styled.button<AuthButtonProps>`
  border: none;
  border-radius: 5px;
  height: 30px;
  padding: 0 1rem;
  background-color: ${(props) => (props.$isLogged ? 'red' : 'green')};
  color: #fff;
  font-size: 0.75rem;

  display: flex;
  align-items: center;
  gap: 0.3rem;

  svg {
    font-size: 0.7rem;
  }
`;

export const CartButton = styled.button`
  border: none;
  border-radius: 5px;
  height: 30px;
  padding: 0 1rem;
  background-color: violet;
  color: #000;
  font-size: 0.75rem;

  display: flex;
  align-items: center;
  gap: 0.3rem;

  svg {
    font-size: 0.7rem;
  }
`;