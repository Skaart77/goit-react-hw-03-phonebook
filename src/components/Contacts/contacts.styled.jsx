import styled from 'styled-components';

export const Li = styled.li`
  display: flex;
  padding-left: 5px;
  gap: 10px;
  font-size: 18px;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background-color: teal;
  border: none;
  color: white;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  border-radius: 5px;
  margin-left: auto;
  cursor: pointer;
  width: 120px;
  height: 35px;
  &:hover,
  :focus {
    background-color: #035f5f;
  }
`;
