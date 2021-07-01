import './App.css';
import { RecipeList } from './RecipeList';
import { Row, Button } from 'reactstrap';
import React from 'react';
import { RecipeType } from './model/RecipeType';
import { RecipeAdd } from './RecipeAdd';
import { axiosInstance } from './axiosInstance';
import { IngredientTable } from './IngredientTable';
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";

export function App() {

  const [recipeList, setRecipeList] = React.useState<RecipeType[]>([]);
  const [isFormAddVisible, setIsFormAddVisible] = React.useState<boolean>(false);

  async function deleteRecipe(recipe: RecipeType) {
    try {
      await axiosInstance.delete("recipes", {data: recipe})
      const responseGet = await axiosInstance.get<RecipeType[]>("recipes")
      setRecipeList(responseGet.data)
    } catch (e) {
      console.error(e)
    }
  }

  async function addRecipe(newRecipe: RecipeType) {
    try {
      await axiosInstance.post("recipes", newRecipe)
      const responseGet = await axiosInstance.get<RecipeType[]>("recipes")
      setRecipeList(responseGet.data)
    } catch (e) {
      console.error(e)
    }
  }

  async function editRecipe(recipe: RecipeType) {
    try {
      await axiosInstance.put("recipes", recipe)
      const responseGet = await axiosInstance.get<RecipeType[]>("recipes")
      setRecipeList(responseGet.data)
    } catch (e) {
      console.error(e)
    }
  }

  React.useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get<RecipeType[]>("recipes")
        setRecipeList(response.data)
      } catch (e) {
        console.error(e)
      }
    })()
  }, [])

  return (
    <Router>
      <div className="App">
        <ul>
          <li><Link to="/ingredients">Ingredient</Link></li>
          <li><Link to="/recipe">Recipe</Link></li>
        </ul>
        <hr />

        <Switch>
          <Route exact path="/ingredients">
            <IngredientTable />
          </Route>
          <Route exact path="/recipe">
            
            <Button onClick={() => setIsFormAddVisible(!isFormAddVisible)} className="btn">Edit Mode</Button>
            {isFormAddVisible &&
              <Row>
                <RecipeAdd addRecipe={addRecipe}/>
              </Row>
            }
            <Row>
              <RecipeList recipes={recipeList} editRecipe={editRecipe} deleteRecipe={deleteRecipe} />
            </Row>

          </Route>
        </Switch>
      </div>
    </Router>
  );
}
