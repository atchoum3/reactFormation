import { IngredientType } from './model/RecipeType';

export function IngredientList(props: { ingredients: Array<IngredientType> }) {
  return <ul className="list-group">{
    props.ingredients.map((ingredient: IngredientType) =>
      <IngredientCard ingredient={ingredient} />
    )
  }</ul>
}

function IngredientCard(props: { ingredient: IngredientType }) {
  return <li className="list-group-item">{props.ingredient.name} {props.ingredient.quantity} {props.ingredient.unit}</li>
}