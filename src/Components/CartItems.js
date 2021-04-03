import React from 'react';
import styled from "styled-components";
import CartItem from "./CartItem";

function CartItems({cartItems}) {
    return (
        <Container>
        <Title>Shopping Cart</Title>
        <hr />
        <ItemsContainer>
        {
            cartItems.map((item) => (
                <CartItem 
                id= {item.id}
                item={item.product}
                />
            ))
        }
        </ItemsContainer>
        </Container>
    )
}

export default CartItems;

const Container = styled.div`
    flex: .8;
    background-color: white;
    margin-right: 18px;
    padding: 20px;
`;
const Title = styled.div`
    margin-bottom: 8px;
`;
const ItemsContainer = styled.div`

`;