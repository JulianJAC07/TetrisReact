import React from 'react';
import { StyledDisplay } from './Styles/StyleDisplay';

export default function Display({gameOver,text}) {
  return (
    <StyledDisplay gameover={gameOver}>{text}</StyledDisplay>
  )
}
