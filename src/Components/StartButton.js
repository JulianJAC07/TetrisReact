import React from 'react';
import { StyledStartButton } from './Styles/StyleStartButton';

export default function StartButton({callback}) {
  return (
    <StyledStartButton  onClick={callback}>Start Game</StyledStartButton>
  )
}
