import styled from '@emotion/styled';
export const FilterWrap = styled.div`
  display: flex;
`;
export const FilterLabel = styled.label`
  display: flex;
`;
export const FilterInput = styled.input`
  display: block;
  padding-left: 10px;
  height: 30px;
  font-size: 15px;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  height: 30px;
  border-radius: 5px;
  border: 2px solid grey;
  &:hover,
  &:focus {
    border-color: #d8bfd8;
  }
`;
