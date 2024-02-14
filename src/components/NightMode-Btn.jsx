import React, { useState } from 'react';
import styled from 'styled-components';


// Styled-component
const StyledCheckboxWrapper = styled.div`
  .check {
    --size: 40px;
    position: relative;
    background: linear-gradient(90deg, #f19af3, #f099b5);
    line-height: 0;
    perspective: 400px;
    font-size: var(--size);
  }

  .check input[type="checkbox"],
  .check label,
  .check label::before,
  .check label::after,
  .check {
    appearance: none;
    display: inline-block;
    border-radius: var(--size);
    border: 0;
    transition: .35s ease-in-out;
    box-sizing: border-box;
    cursor: pointer;
  }

  .check label {
    width: calc(2.2 * var(--size));
    height: var(--size);
    background: #d7d7d7;
    overflow: hidden;
  }

  .check input[type="checkbox"] {
    position: absolute;
    z-index: 1;
    width: calc(.8 * var(--size));
    height: calc(.8 * var(--size));
    top: calc(.1 * var(--size));
    left: calc(.1 * var(--size));
    background: linear-gradient(45deg, #dedede, #ffffff);
    box-shadow: 0 6px 7px rgba(0,0,0,0.3);
    outline: none;
    margin: 0;
  }

  .check input[type="checkbox"]:checked {
    left: calc(1.3 * var(--size));
  }

  .check input[type="checkbox"]:checked + label {
    background: transparent;
  }

  .check label::before,
  .check label::after {
    content: "· ·";
    position: absolute;
    overflow: hidden;
    left: calc(.15 * var(--size));
    top: calc(.5 * var(--size));
    height: var(--size);
    letter-spacing: calc(-0.04 * var(--size));
    color: #9b9b9b;
    font-family: "Times New Roman", serif;
    z-index: 2;
    font-size: calc(.6 * var(--size));
    border-radius: 0;
    transform-origin: 0 0 calc(-0.5 * var(--size));
    backface-visibility: hidden;
  }

  .check label::after {
    content: "●";
    top: calc(.65 * var(--size));
    left: calc(.2 * var(--size));
    height: calc(.1 * var(--size));
    width: calc(.35 * var(--size));
    font-size: calc(.2 * var(--size));
    transform-origin: 0 0 calc(-0.4 * var(--size));
  }

  .check input[type="checkbox"]:checked + label::before,
  .check input[type="checkbox"]:checked + label::after {
    left: calc(1.55 * var(--size));
    top: calc(.4 * var(--size));
    line-height: calc(.1 * var(--size));
    transform: rotateY(360deg);
  }

  .check input[type="checkbox"]:checked + label::after {
    height: calc(.16 * var(--size));
    top: calc(.55 * var(--size));
    left: calc(1.6 * var(--size));
    font-size: calc(.6 * var(--size));
    line-height: 0;
  }
`;
StyledCheckboxWrapper.shouldForwardProp = (prop) => !['isActive'].includes(prop);

const NightModeBtn = () => {

  const [nightMode, setNightMode] = useState(false);

  const toggleNightMode = () => {
    setNightMode(prevMode => !prevMode);

    if (!nightMode) {
      document.body.style.background = '#181a18';
      document.body.style.color = 'whitesmoke';
    } else {
      document.body.style.background = 'whitesmoke';
      document.body.style.color = 'black';
    }
  };
  return (
    <StyledCheckboxWrapper id='SmileButton'>
      <div className="check">
        <input id="check-5" type="checkbox" onClick={toggleNightMode} />
        <label htmlFor="check-5"></label>
      </div>
    </StyledCheckboxWrapper>
  );
};

export default NightModeBtn;
