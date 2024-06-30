import styled from "styled-components";

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
    color: white;
    font-size: 1.6rem;
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
    background-color: ${(props) => (props.$isLogged ? "red" : "green")};
    color: white;
    display: flex;
    align-items: center;
    gap: 0.4rem;
`;

export const CartButton = styled.button`
    border: none;
    border-radius: 5px;
    height: 30px;
    padding: 0 10px;
    background-color: violet;
    color: white;
    display: flex;
    align-items: center;
    gap: 0.3rem;
`;

export const IconWrapper = styled.span`
    display: flex;
    align-items: center;

    svg {
        font-size: 0.8rem;
    }
`;

interface ContainerProps {
    $showCart: boolean;
}

export const Container = styled.aside<ContainerProps>`
    position: fixed;
    top: 0;
    right: ${(props) => (props.$showCart ? "0" : "-350px")};
    width: 350px;
    height: 100vh;
    background-color: white;
    padding: 2rem;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.h1``;
