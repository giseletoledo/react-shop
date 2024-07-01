import React from 'react'
import * as S from './styles'// usa o S para identicar styled components
import { useSelector } from 'react-redux';
import { RootReducer, rootReducer } from '../../redux/root-reducer';

interface CartProps {
    showCart: boolean;
    toggleCart: () => void;
}

export const Cart: React.FC<CartProps> = ({ showCart, toggleCart }) => {

    const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer);

    //totalCart - acumulador começa em 0 e vai somando para cada product o valor - inicia 0 + product(valor)
    const total = cart.reduce((totalCart, product) => {
        return totalCart + product.price;
    },0)

    return (
        <S.Container $showCart={showCart} >
            <S.Title>Carrinho</S.Title>
            <S.CloseButton onClick={toggleCart}>×</S.CloseButton>
            <S.CartProductList>
                { cart.map(product => (
                    <S.CartProductItem key={product.id}>
                       <span className='bold-text'>{product.title}</span> - ${product.price}
                    </S.CartProductItem>
                )) }
            </S.CartProductList>
            <S.CartTotal>Total: ${total} </S.CartTotal>
        </S.Container>
    );
};