import React from "react";
import * as S from "./styles";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Product } from "../../data/products";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../Cart/cart-slice";
import { RootReducer } from "../../redux/root-reducer";

interface ProductCardProps {
    product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    //conteudo do carrinho
    const { cart } = useSelector(
        (rootReducer: RootReducer) => rootReducer.cartReducer
      );

    const dispatch = useDispatch();

    //verifica se o produto está no carrinho
    const isProductOnCart =
    cart.find((productOnCart) => product.id === productOnCart.id) !== undefined;

    //adiciona um produto com dispatch no carrinho
    function handleAddProductToCart(): void {
       /*  reducer forma usando createStore
       dispatch({
            type: "cart/add-product",
            payload: product,
          }); */
        dispatch(addProduct(product));
    }

    function handleRemoveProductFromCart(): void {
      /*  reducer forma usando createStore
       dispatch({
            type: "cart/remove-product",
            payload: product,
          }); */
        dispatch(removeProduct(product));
    }

    return (
        <S.Card>
            <S.ProductImage src={product.image} alt={product.description} />
            <S.ProductTitle>{product.title}</S.ProductTitle>
            <S.ReviewPriceContainer>
                <S.Review>
                    {Array.from({ length: 5 }).map(
                        (_, index) => index < Math.round(product.rating.rate) ? (
                            <AiFillStar key={index} />
                        ) : (
                            <AiOutlineStar key={index} />
                        )
                        )}
                    ({product.rating.rate})
                </S.Review>

                <S.Price>${product.price}</S.Price>
            </S.ReviewPriceContainer>

            <S.AddToCartButtonWrapper>
        {isProductOnCart ? (
          <S.RemoveFromCartButton onClick={handleRemoveProductFromCart}>
            Remover do carrinho
            <FiShoppingCart />
          </S.RemoveFromCartButton>
        ) : (
          <S.AddToCartButton onClick={handleAddProductToCart}>
            Adicionar ao carrinho
            <FiShoppingCart />
          </S.AddToCartButton>
        )}
      </S.AddToCartButtonWrapper>
        </S.Card>
    )
}