import styled from '@emotion/styled';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
`;
export const Name = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-right: 15px;
  display: flex;
  align-items: center;
`;

export const Number = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
export const DeleteButton = styled.button`
  cursor: pointer;
  display: block;
  font-size: 15px;
  width: 120px;
  height: 30px;
  margin: 0 auto;
  border-radius: 5px;
  border: 1px solid;
  &:hover,
  &:focus {
    background-color: #d8bfd8;
  }
`;
