import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const NavGame = () => {
   const [isActive, setIsActive] = useState(false)
   const [showText, setShowText] = useState(false)

   const navLinkStyle = {
      color: 'lavender',
      background: isActive ? '#9eb3a850' : 'transparent',
      visibility: isActive ? 'hidden' : 'visible'
   }

   // header id='NavGame' 에 대한 토글 효과
   const toggleActive = () => {
      setIsActive(!isActive)
      setShowText(!showText)
   }
   const headerStyle = {
      width: isActive ? '3vw' : '60vw',
      height: isActive ? '3vw' : '80vh',
      borderRadius: isActive ? '50%' : '0',
      background: isActive ? '#1e3ca0' : '#48588d',
      left: isActive ? '3%' : '50%',
      top : isActive ? '88%' : '50%',
      transform: isActive ? 'rotate(350deg)' : ''
   }

   return (
      <header id='NavGame' onClick={toggleActive} style={headerStyle}>
         <ul>
            <li>
               <NavLink to='/Game1' style={navLinkStyle} activeClassName='active'>
                  오늘의운세
               </NavLink>
            </li>
            <li>
               <NavLink to='/Game2' style={navLinkStyle} activeClassName='active'>
                  2
               </NavLink>
            </li>
            <li>
               <NavLink to='/Game3' style={navLinkStyle} activeClassName='active'>
                  3
               </NavLink>
            </li>
            <li>
               <NavLink to='/Game4' style={navLinkStyle} activeClassName='active'>
                  4
               </NavLink>
            </li>
            <li className='logo'>
               <NavLink to='/' style={navLinkStyle} activeClassName='active'>
                  미니게임천국
               </NavLink>
            </li>
            <li>
               <NavLink to='/Game5' style={navLinkStyle} activeClassName='active'>
                  5
               </NavLink>
            </li>
            <li>
               <NavLink to='/Game6' style={navLinkStyle} activeClassName='active'>
                  6
               </NavLink>
            </li>
            <li>
               <NavLink to='/Game7' style={navLinkStyle} activeClassName='active'>
                  7
               </NavLink>
            </li>
            <li>
               <NavLink to='/Game8' style={navLinkStyle} activeClassName='active'>
                  8
               </NavLink>
            </li>
         </ul>
         {showText && <p>Let's Game</p>}
      </header>
   )
}

export default NavGame
