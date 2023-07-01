import styled from 'styled-components';

export const ContactsList = styled.ul`
  max-width: calc(100% - 20px);
  padding: 10px;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  font-weight: 500;
  margin-bottom: 4px;
`;

export const ContactText = styled.p`
  font-size: 20px;
`;

export const ContactDelete = styled.button`
  color: black;
  margin-left: 15px;
  border: none;
  border-radius: 5px;
  height: 35px;
  border: none;
  font-size: 10px;
  display: flex;
  align-items: center;

  svg {
    width: 25px;
    height: 25px;
  }

  &:hover,
  &:focus {
    color: rgb(255, 255, 255);
    background-color: black;
    cursor: pointer;
  }
`;
