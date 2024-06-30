//import { StyledHeader } from "./styles";
import { useState } from "react";
import * as S from "./styles";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import { Cart } from "../Cart/Cart";

export const Header: React.FC = () => {
    const [showCart, setShowCart] = useState(false);
    const isLogged = false;

    return (
        <S.StyledHeader>
            <S.Wrapper>
                <S.HeaderTitle>My Shop.</S.HeaderTitle>
                <S.ButtonWrapper>
                    <S.AuthButton $isLogged={isLogged}>
                        {isLogged ? "Logout" : "Login"}
                        <S.IconWrapper>
                            {isLogged ? <FiLogOut /> : <FiLogIn />}
                        </S.IconWrapper>
                    </S.AuthButton>
                    <S.CartButton onClick={() => setShowCart(!showCart)}>
                        Carrinho
                        <S.IconWrapper>
                            <FiShoppingCart />
                        </S.IconWrapper>
                    </S.CartButton>

                </S.ButtonWrapper>
            </S.Wrapper>
            <Cart $showCart={showCart} />
        </S.StyledHeader>
    );
};