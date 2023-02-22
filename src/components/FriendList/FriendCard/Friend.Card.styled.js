import styled from "styled-components";

export const StyledFriendList = styled.ul`
list-style: none;
padding:0;
`




export const StyledFriendCard = styled.div`

  width: 250px;
  margin-left: auto;
  margin-right: auto;

  margin-bottom:10px;
  padding:10px;
  
  text-align: center;
  display:flex;
  column-gap: 20px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);

  
}
  
`

export const Status = styled.span `

  background-color: ${props => {
    return props.isActive ? props.theme.colors.green : props.theme.colors.red;
  }};
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-top: auto;
  margin-bottom: auto;
}
`