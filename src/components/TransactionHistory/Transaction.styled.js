import styled from "styled-components";


export const StyledTransaction = styled.table`
  
  width: 800px;
  
  margin-left: auto;
  margin-right: auto;

   & .list-operation tr:nth-child(odd) {
    background-color: white;
  }

  
  & .title {
    height: 50px;
    background-color: rgb(0,188,213);
    color: white;

  }
  
`
export const StyledOperation = styled.tr`
  height: 50px;
  background-color: rgb(236,241,244);
  color: rgb(125,132,138);

 
 
`