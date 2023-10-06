const { default: styled } = require('@emotion/styled');

export const FormWrap = styled.div`
  border: 2px solid black;
  padding: 30px;
  background-color: white;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const FormLabel = styled.label``;
export const FormInput = styled.input`
  font-size: 13px;
  padding-left: 10px;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  height: 30px;
  border-radius: 5px;
  border: 2px solid grey;
  &:hover,
  &:focus {
    border-color: green;
  }
`;
export const FormButton = styled.button`
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
