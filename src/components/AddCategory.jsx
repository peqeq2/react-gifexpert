import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const InputChange = ({target}) => {
    setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim());
    // setCategories( categories => [ ...categories, inputValue ]);
    setInputValue('');
  }
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="search gif"
        value={inputValue}
        onChange={(event) => InputChange(event)}/>
    </form>
  )
}
