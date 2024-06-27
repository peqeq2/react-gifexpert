import './GifExpertApp.css';
import { useState } from "react";
import { AddCategory } from "../Addcategory/AddCategory.jsx";
import { GifGrid } from "../Giffrid/GifGrid.jsx";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const addNewCategory = (AddCategory) =>{
    if (categories.includes(AddCategory)) return;
    setCategories([...categories, AddCategory])
  }

  return (
    <>
      <h1>Search your favorite Gif</h1>
      <AddCategory onNewCategory={ event => addNewCategory(event) } />
      {categories.map( (category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  )
}
