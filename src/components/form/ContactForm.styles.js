import styled from 'styled-components';

export const Section = styled.section`
  max-width: 600px;
`;

export const Form = styled.form`
  margin-top: 20px;
  margin-bottom: 20px;
  input {
    padding: 8px;
  }
`;

export const FormList = styled.ul`
  padding: 0;
  list-style-type: none;
`;

export const FormListItem = styled.li`
  margin-right: 10px;
  display: flex;
  align-items: center;
  p {
    margin-right: 10px;
    margin-bottom: 8px;
    font-size: 25px;
  }
`;

export const FormButton = styled.button`
  border-radius: 5px;
  height: 40px;
  border: none;
  font-size: 16px;
  display: flex;
  align-items: center;

  &:hover,
  &:focus {
    color: rgb(255, 255, 255);
    background-color: black;
    cursor: pointer;
  }
`;
