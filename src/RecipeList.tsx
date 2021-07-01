import { RecipeType } from "./model/RecipeType";
import { RecipeCard } from "./RecipeCard";

interface MyProps {
  recipes: Array<RecipeType>;
  editRecipe: (recipe: RecipeType) => void;
  deleteRecipe: (recipe: RecipeType) => void;
}

export function RecipeList(props: MyProps) {
  return <>{
    props.recipes.map((recipe: RecipeType) => 
    <RecipeCard recipe={recipe} editRecipe={props.editRecipe} deleteRecipe={props.deleteRecipe}/>
  )
  }</>
}