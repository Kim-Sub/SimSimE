import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
   position: relative; overflow: hidden; cursor: pointer;
   width: 250px; font-size: 15px; line-height: 15px; text-decoration: none;
   border: 1px solid #18181a; padding: 18px 18px 17px;
   color: #18181a; background: #fff;
   user-select: none; -webkit-user-select: none; touch-action: manipulation;
   

   span:first-child {
      position: relative; transition: color .6s cubic-bezier(0.48, 0, 0.12, 1); z-index: 10; }

   span:last-child {
      color: white;
      display: block;
      position: absolute;
      bottom: 0;
      transition: all 500ms cubic-bezier(0.48, 0, 0.12, 1);
      z-index: 100;
      opacity: 0;
      top: 50%;
      left: 50%;
      transform: translateY(225%) translateX(-50%);
      height: 14px;
      line-height: 13px;
   }

   &:after {
      content: '';
      position: absolute;
      bottom: -50%;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #20332ade;
      transform-origin: bottom center;
      transition: transform 600ms cubic-bezier(0.48, 0, 0.12, 1);
      transform: skewY(9.3deg) scaleY(0);
      z-index: 50;
   }

   &:hover:after {
      transform-origin: bottom center;
      transform: skewY(9.3deg) scaleY(2);
   }

   &:hover span:last-child {
      transform: translateX(-50%) translateY(-50%);
      opacity: 1;
      transition: all 900ms cubic-bezier(0.48, 0, 0.12, 1);
   }
`

const ButtonNormal = () => {
   return (
      <StyledButton role='button'>
         <span>자세히보기</span>
         <span>클릭 !</span>
      </StyledButton>
   )
}

export default ButtonNormal
