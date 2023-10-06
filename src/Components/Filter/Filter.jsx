import { FilterWrap, FilterLabel, FilterInput } from './Filter.styled';
const Filter = ({ onChange, value }) => {
  return (
    <FilterWrap>
      <FilterLabel htmlFor="name">Find contact by number</FilterLabel>
      <FilterInput
        onChange={onChange}
        name="filter"
        type="filter"
        value={value}
      ></FilterInput>
    </FilterWrap>
  );
};

export default Filter;
