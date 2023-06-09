import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {selectCars} from '../features/car/carSlice';
import { useSelector } from 'react-redux/es/exports';
function Header() {
  const [BurgerStatus, SetBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);
  return (
    <Container>
      <a><img src="images/logo.svg" alt="" /></a>
      <Menu>
        {cars && cars.map((car, index)=>(
               <a key={index} href="#">{car}</a>

        ))}
      
      <a href="#">Solar Roof</a>
      <a href="#">Solar Pannels</a>
      <a href="#">Powerwall</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#"> Account</a>
        <a href="#">Menu</a>
        <CustomMenu onClick={()=>SetBurgerStatus(true)}/>
      </RightMenu>
      <BurgerNav show={BurgerStatus}>
        <CloseWrapper>
        <CustomClose onClick={()=>SetBurgerStatus(false)}/>
        </CloseWrapper>
        {cars && cars.map((car, index)=>(
                  <li key={index}><a href="#">{car}</a></li>
        ))}
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Demo Drive</a></li>
        <li><a href="#">Insurance</a></li>
        <li><a href="#">Fleet</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadster</a></li>
        <li><a href="#">Semi</a></li>
        <li><a href="#">Charging</a></li>
        <li><a href="#">Commercial Energy</a></li>
        <li><a href="#">Utilities</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Find Us</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Investor Relations</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header
const Container = styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
padding:0 20px;
top:0;
left:0;
right:0;
z-index:1;
`
const Menu = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
a{
  font-weight:600;
  text-decoration:uppercase;
  padding:0 10px;
  font-size:medium;
  flex-wrap:no-wrap;
}
@media(max-width:768px){
  display:none;
}
`
const RightMenu = styled.div`
display:flex;
align-items:center;
a{
  font-weight:600;
  text-decoration:uppercase;
  padding:0 10px;
  font-size:medium;
  margin-right:10px;
}
`
const CustomMenu = styled(MenuIcon)`
cursor:pointer;

`
const BurgerNav = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:100;
list-style:none;
padding:25px;
text-align:start;
display:flex;
flex-direction:column;
li{
  padding:15px 0;
  border-bottom:1px solid rgba(0,0,0, .2);
  a{
    font-weight:600;
  }
}
transform: ${props => props.show ? `translateX(0)`:`translateX(100%)`};
transition:transform 0.2s;
`
const CustomClose = styled(CloseIcon)`
cursor:pointer;
`
const CloseWrapper = styled.div`
 display:flex;
 justify-content:end;
`