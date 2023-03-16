import styled from 'styled-components';

export const ContactItem = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 6px;
    width: 350px; 
`;

export const Button = styled.button`
    font-weight: 700;
    border: 2px solid gray;
    border-radius: 4px;
    cursor: pointer;
    :hover {
        background-color: #7ea3e9;
    }
`;

export const Text = styled.p`
    margin: 0;
    padding:0px;
    font-size: 18px;
    font-weight: 500;
`;