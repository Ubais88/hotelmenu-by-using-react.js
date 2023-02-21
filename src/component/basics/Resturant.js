import React, {useState} from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./navbar";

const uniquelist = [
  ...new Set(
  Menu.map((curElem) => {
       return curElem.category;
})),"All"];

console.log(uniquelist);

const Resturant = () => {
     const [menuData, setMenuData] = useState(Menu);
     const [menuList, setMenuList] = useState(uniquelist)

     const filterItem = (category) => {
             if(category === "All"){
              setMenuData(Menu);
              return;
             }

             const updatelist = Menu.filter((curElem) => {
              return curElem.category === category;
             });
             setMenuData(updatelist);
     };

  return (
  <>
     <Navbar filterItem={filterItem} menuList ={menuList}/>
    <MenuCard menuData={menuData}/>;
  </>
  );
}

export default Resturant;