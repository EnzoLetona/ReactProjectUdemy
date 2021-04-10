import styled from 'styled-components'


const StyledButton2 = styled.button`
  background-color: ${props => props.altt ? 'red' : 'rgb(236, 145, 40)'};
  color:white;
  font: inherit;
  border: 1px solid Black;
  padding: 8px;
  cursor: pointer;
  border-radius: 30px;
  &:hover{
    background-color:${props => props.altt ? 'salmon' : 'rgb(238, 179, 111)'};
    color: black;
  }
`;


export default StyledButton2;