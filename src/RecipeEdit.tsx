import React from "react";
import { Button, Col, Input, Label } from "reactstrap";
import { RecipeType } from "./model/RecipeType";

interface myProps {
  recipe: RecipeType,
  editRecipe: (newRecipe: RecipeType) => void,
}

export function RecipeEdit(props: myProps) {
  const [newRecipe, changeNewRecipe] = React.useState<RecipeType>(props.recipe);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>, key: string) {
    changeNewRecipe({
      ...newRecipe,
      [key]: event.target.value
    })
  }

  return (
    <div>
      <div className="form-group">
        <Label htmlFor="name">Name: </Label>
        <Input type="text" name="name"
          value={newRecipe.name ? newRecipe.name : ""}
          onChange={(e) => handleChange(e, "name")} />
      </div>
      <div className="form-group">
        <Label htmlFor="picture">Picture: </Label>
        <Input type="text" name="picture"
          value={newRecipe.picture ? newRecipe.picture : ""}
          onChange={(e) => handleChange(e, "picture")} />
      </div>
      <div className="form-group">
        <Label htmlFor="description">Description: </Label>
        <Input type="text" name="description"
          value={newRecipe.description ? newRecipe.description : ""}
          onChange={(e) => handleChange(e, "description")} />
      </div>

      <Button type="button" className="btn btn-primary" onClick={() => props.editRecipe(newRecipe)}>Edit</Button>
    </div>

  );
}