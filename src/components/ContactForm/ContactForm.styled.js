import styled from 'styled-components';

export const Form = styled.form`
  background-color: #68e4c3;
  display: flex;
  gap: 15px;
  align-items: flex-end;
  flex-basis: 33%;
  justify-content: space-between;
  flex-wrap: wrap;
  border: 1px dashed #31615a;
  margin-bottom: 20px;
  border-radius: 4px;
  padding: 20px;
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 8px;
`;

export const Input = styled.input`
    display: block;
    height: 25px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #31615a;
    outline: none;
    &:focus {
      border: 1px solid #9a46aa;
    }
`;

export const Button = styled.button`
    margin-left: auto;
    display: block;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #31615a;
    background-color: #31615a;
    color: #ffffff;
    cursor: pointer;
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    transform: scale(1.02);
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;