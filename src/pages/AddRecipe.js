import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { recipesStore } from '../store/recipesStore';

const AddRecipe = () => {
  // const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const data = {
      id: Math.random(),
      title,
      description,
    };
    // dispatch(AddRecipe(data));

    // recipesStore.set((state) => ({
    //   recipes: [...state.recipes, data],
    // }));
    console.log(data);
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const descChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div>
      AddRecipe
      <form onSubmit={formSubmitHandler}>
        <div>
          <label>Titre</label>
        </div>
        <div>
          <input value={title} onChange={titleChangeHandler} type="text" />
        </div>

        <div>
          <label>Description</label>
        </div>
        <div>
          <input value={description} onChange={descChangeHandler} type="text" />
        </div>

        <button type="submit">Ajouter un objectif</button>
      </form>
    </div>
  );
};

export default AddRecipe;
