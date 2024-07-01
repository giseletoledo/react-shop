//import { StyledHeader } from "./styles";
import { useState } from "react";
import * as S from "./styles";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import { Cart } from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { login, logout } from "../../redux/User/user-slice";

export const Header: React.FC = () => {
    const { user } = useSelector((rootReducer: RootReducer) => rootReducer.userReducer);

    console.log(user);

    const dispatch = useDispatch();

    const [showCart, setShowCart] = useState(false);
    const isLogged = user !== null;

    function handleUserAuth() {
        //usuário não está logado
        if (user === null) {
            //despachar a action de login
            dispatch(
               login({
                    name: "Gisele",
                    email: "gisele@email.com"
                })
            );
        } else {
            dispatch(
                logout({}));
        }
    }

    const toggleCart = () => {
        setShowCart(!showCart);
    };

    return (
        <S.StyledHeader>
            <S.Wrapper>
                <S.HeaderTitle>My Shop.</S.HeaderTitle>

                <S.ButtonWrapper>
                    <S.AuthButton $isLogged={isLogged} onClick={handleUserAuth}>
                        {isLogged ? "Logout" : "Login"}
                            {isLogged ? <FiLogOut /> : <FiLogIn />}        
                    </S.AuthButton>

                    <S.CartButton onClick={() => setShowCart(!showCart)}>
                        Carrinho
                            <FiShoppingCart />
                    </S.CartButton>
                </S.ButtonWrapper>
            </S.Wrapper>
            <Cart showCart={showCart} toggleCart={toggleCart}/>
        </S.StyledHeader>
    );
};