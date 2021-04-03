import { Title } from '@material-ui/icons';
import React from 'react';
import styled from "styled-components";

function CartTotal() {
    return (
        <Container>
            Cart Total
        </Container>
    )
}

export default CartTotal;

const Container = styled.div`
    flex: .2;
    background-color: white;
    height: 200px;
    padding: 20px;
`;
