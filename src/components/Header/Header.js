import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
//background-color : red;
//height : 80px;
overflow : hidden;
//margin-left : 25%;
/* box-shadow: 3px 5px 15px rgba(0, 0, 0, 0.1);
border-radius: 0px 20px 0px 0px; */
`
const List = styled.ul`
list-style-type : none;
display : flex;
justify-content : space-between;
width : 250px;
height : 50px;

li {
  font-family: Segoe UI;
font-size: 16px;
font-weight: 400;
line-height: 21px;
letter-spacing: 0em;

}
li:last-child{
  color : #713BDB;
}
span {
  width : 16px;
  height : 2px;
  color : #713BDB;
  background-color : #713BDB;
}
//background-color : green;
 
`
const Header = () => {
  return (
    <Container>
     <List>
         <li><p>Overview</p></li>
         <li><p>Policy</p></li>
         <li><p>Reports</p><span></span></li>
         
     </List>
    </Container>
  )
}

export default Header