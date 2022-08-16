import { useState } from "react";
import "./style.css";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (
      !categories.findIndex(
        (cat) => cat.toLowerCase() === newCategory.toLowerCase()
      )
    )
      return alert("Recien Lo Buscaste");
    setCategories([newCategory, ...categories]);
  };
  

  return (
    <>
      {/* input */}
      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/* Gif Item */}
    </>
  );
};
