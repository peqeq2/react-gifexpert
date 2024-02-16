import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const addNewCategory = (AddCategory) =>{
    if (categories.includes(AddCategory)) return;
    setCategories([...categories, AddCategory])
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        onNewCategory={ event => addNewCategory(event) }
      />

      {categories.map( (category) =>
          (<GifGrid
              key={category}
              category={category}
            />)
        )
      }

    </>
  )
}
