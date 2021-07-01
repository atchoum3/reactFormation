
export interface RecipeType {
  name: string,
  description: string,
  picture: string,
  id?: number,
  ingredients: Array<IngredientType>,
  instructions: Array<string>
}

export interface IngredientType {
  name: string,
  quantity: number,
  unit: string,
}