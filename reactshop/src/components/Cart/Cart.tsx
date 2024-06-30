import React from 'react'
import * as S from './styles'// usa o S para identicar styled components

interface CartProps {
    showCart: boolean;
    toggleCart: () => void;
}

export const Cart: React.FC<CartProps> = ({ showCart, toggleCart }) => {
    return (
        <S.Container $showCart={showCart} >
            <S.Title>Carrinho</S.Title>
            <S.CloseButton onClick={toggleCart}>×</S.CloseButton>
            {/* Conteúdo do carrinho */}
        </S.Container>
    );
};