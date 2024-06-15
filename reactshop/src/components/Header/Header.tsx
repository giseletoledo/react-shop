//import { StyledHeader } from "./styles";
import * as S from "./styles";
import { FiLogIn, FiShoppingCart } from "react-icons/fi";

export const Header: React.FC = () => {
    return (
        <S.StyledHeader>
            <S.Wrapper>
                <S.HeaderTitle>My Shop.</S.HeaderTitle>
                <S.ButtonWrapper>
                    <S.AuthButton>
                        
                        Login
                        <FiLogIn/>
                        </S.AuthButton>
                    <S.CartButton>Carrinho
                        <FiShoppingCart/>
                    </S.CartButton>
                </S.ButtonWrapper>
            </S.Wrapper>
        </S.StyledHeader>
    );
};