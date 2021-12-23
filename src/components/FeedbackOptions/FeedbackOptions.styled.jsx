import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  list-style: none;
  width: 400px;
  margin: 0 auto;
  justify-content: space-around;
  padding: 0;
`;

export const Item = styled.li`
  button {
    background-color: white;
    border: 1px solid blue;
    border-radius: 4px;
    width: 100px;
    height: 30px;
    cursor: pointer;

    &:hover {
      background-color: yellow;
    }
  }
`;
