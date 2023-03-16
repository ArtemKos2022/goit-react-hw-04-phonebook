import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 350px;
  padding: 10px;
  border: 2px solid black;
`;

export const Text = styled.p`
  margin: 0 0 4px 0;
  font-size: 20px;
  font-weight: 700;
`;

export const Input = styled.input`
  margin-bottom: 18px;
`;

export const Button = styled.button`
  height: 24px;
  width: 100px;
  font-weight: 700;
  border: 2px solid gray;
  border-radius: 4px;
  cursor: pointer;

  :hover {
    background-color: #7ea3e9;
  }
`;
