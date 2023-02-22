import styled from "styled-components";

export const StyledStatistics = styled.section`

  width: 350px;
  outline: 1px solid black;
  margin-left: auto;
  margin-right: auto;
  margin-top:20px;
  margin-bottom:100px;
  padding-top: 20px;
  
  text-align: center;
 
    & .statList {
      display: flex;
      
      list-style: none;
      justify-content:space-around;
      padding:0px;
           
    }
   
    & .statList_item {
      border: 1px solid black;
      width:100%;
    }

`