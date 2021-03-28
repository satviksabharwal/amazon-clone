import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import LocationOnIcon from '@material-ui/icons/LocationOn';

function Header() {
  return (
    <Container>
      <HeaderLogo>
        <img src={"https://i.imgur.com/7I9Was5.png"} alt="logo" />
      </HeaderLogo>
      
      <HeaderOptionAddress>
        <LocationOnIcon />
        <HeaderOption>
        <OptionLineOne>Hello</OptionLineOne>
        <OptionLineTwo>Select Your Address</OptionLineTwo>
        </HeaderOption>
      </HeaderOptionAddress>

      <HeaderSearch>
        <HeaderSearchInput type="text" />
        <HeaderSearchIconContainer>
          <HeaderSearchIcon>
            <SearchIcon />
          </HeaderSearchIcon>
        </HeaderSearchIconContainer>
      </HeaderSearch>
      
      <HeaderNavItems>
        <HeaderOption>
          <OptionLineOne>Hello, Satvik</OptionLineOne>
          <OptionLineTwo>Account & Lists</OptionLineTwo>
        </HeaderOption>
        <HeaderOption>
          <OptionLineOne>Returns</OptionLineOne>
          <OptionLineTwo>& Orders</OptionLineTwo>
        </HeaderOption>
        <HeaderOptionCart>
          <ShoppingBasketIcon />
          <ShoppingItemNumber>6</ShoppingItemNumber>
        </HeaderOptionCart>
      </HeaderNavItems>
    
    </Container>
  );
}

export default Header;

const Container = styled.div`
  height: 60px;
  background-color: #0f1111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;
const HeaderLogo = styled.div`
  img {
    width: 100px;
    margin: 5px 0 5px 12px;
    align-items: center;
    justify-content: center;
  }
`;
const HeaderOptionAddress = styled.div`
  display: flex;
  align-items: center;
  padding-left: 9px;
  
`;
const OptionLineOne = styled.div``;
const OptionLineTwo = styled.div`
    font-weight: 700;
`;
const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 1;
  height: 40px;
  border-radius: 5px;
  overflow: hidden;
  margin-left: 5px;
  background-color: white;
  :focus-within {
    box-shadow: 0 0 0 3px #F90;
  }
  `;
const HeaderSearchInput = styled.input`
flex-grow: 1;
border: none;
:focus {
    border: none;
}
`;
const HeaderSearchIconContainer = styled.div`
background-color: #febd69;
width: 45px;
color: black;
display: flex;
justify-content: center;
align-items: center;
`;
const HeaderSearchIcon = styled.div``;
const HeaderNavItems = styled.div`
  display: flex;
`;
const HeaderOption = styled.div`
  padding: 10px 9px 10px 9px;
`;
const HeaderOptionCart = styled.div`
  display: flex;
  align-items: center;
  padding-right: 9px;
`;

const ShoppingItemNumber = styled.div`
padding-left: 4px;
`;
