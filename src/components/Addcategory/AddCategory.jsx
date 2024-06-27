import './AddCategory.css';
import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const InputChange = ({target}) => {
    setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim());
    setInputValue('');
  }

  return (
    <form onSubmit={onSubmit} className="form">
      <input
        type="text"
        placeholder="search gif"
        className="form-control form-control-lg"
        value={inputValue}
        onChange={InputChange}
      />
    </form>
  )
}
