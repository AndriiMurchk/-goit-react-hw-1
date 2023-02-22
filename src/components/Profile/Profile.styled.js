import styled from "styled-components";


export const StyledProfile = styled.div`

  width: 350px;
  outline: 1px solid black;
  margin-left: auto;
  margin-right: auto;
  margin-top:20px;
  margin-bottom:100px;
  padding-top: 20px;
  
  text-align: center;


  & .profileImg {
    display:block;
    border: 1px solid black;
    border-radius: 50%;
    margin-left: auto;
    margin-right: auto;
    
    
  }

  & .userName {
    font-size: x-large;
    
    color: rgb(89, 86, 92);
    margin-bottom: 20px;
    }


    & .contact {
      margin-bottom: 5px;
      margin-top:0;
      color: rgb(100, 100, 99);
    }

    & .profileList {
      display: flex;
      column-gap: 10px;
      list-style: none;
      justify-content:space-around;
      padding:0;
      background-color: rgb(243, 243, 243);
      
}
    }

    & .profileList_item {
      
      color: rgb(100, 100, 99);
      padding-bottom: 20px;
    }
`