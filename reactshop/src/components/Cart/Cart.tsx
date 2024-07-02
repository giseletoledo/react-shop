import React from 'react'
import * as S from './styles'// usa o S para identicar styled components
//import { useSelector } from 'react-redux';
//import { RootReducer, rootReducer } from '../../redux/root-reducer';
import { Product } from '../../data/products';
import { useDispatch } from 'react-redux';
import { removeProduct } from './cart-slice';

interface CartProps {
    showCart: boolean;
    cart: Product[];
    toggleCart: () => void;
}

export const Cart: React.FC<CartProps> = ({ showCart, cart, toggleCart }) => {

    const dispatch = useDispatch();

    //totalCart - acumulador começa em 0 e vai somando para cada product o valor - inicia 0 + product(valor)
    const total = cart.reduce((totalCart, product) => {
        return totalCart + product.price;
    },0)

    const totalFormatted = total.toFixed(2);

    return (
        <S.Container $showCart={showCart} >
            <S.Title>Carrinho</S.Title>
            <S.CloseButton onClick={toggleCart}>×</S.CloseButton>
            <S.CartProductList>
                { cart.map(product => (
                    <S.CartProductItem key={product.id}>
                       <span className='bold-text'>{product.title}</span> - ${product.price}
                       <button onClick={() => dispatch(removeProduct(product))}>
                        Remover
                       </button>
                    </S.CartProductItem>
                )) }
            </S.CartProductList>
            <S.CartTotal data-testid="total">Total: ${totalFormatted} </S.CartTotal>
        </S.Container>
    );
};