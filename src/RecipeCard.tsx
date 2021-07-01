import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col,
} from 'reactstrap';
import { RecipeType } from './model/RecipeType';
import { IngredientList } from './IngredientList';
import { InstructionList } from './InstructionList';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { RecipeEdit } from './RecipeEdit';

interface MyProps {
  recipe: RecipeType;
  editRecipe: (recipe: RecipeType) => void;
  deleteRecipe: (recipe: RecipeType) => void;
}

export const RecipeCard = (props: MyProps) => {
  const [isListVisible, setIsListVisible] = React.useState<boolean>(false);
  const [isEditMode, setEditMode] = React.useState<boolean>(false);

  function editRecipe(recipe: RecipeType) {
    props.editRecipe(recipe)
    setEditMode(false)
  }

  function displayIngredients() {
    setIsListVisible(!isListVisible)
  }
  const buttonText = isListVisible ? "hide ingredients" : "Display ingredients";

  return (
    <Col sm="4">
      <Card>
        {isEditMode ? <RecipeEdit recipe={props.recipe} editRecipe={editRecipe} /> :
          <>
            <CardImg top width="100%" src={props.recipe.picture} alt={props.recipe.name} />
            <CardBody>
              <CardTitle tag="h5">{props.recipe.name}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">{props.recipe.id}</CardSubtitle>
              <CardText>{props.recipe.description}</CardText>

              {isListVisible &&
                <>
                  <IngredientList ingredients={props.recipe.ingredients} />
                  <InstructionList instructions={props.recipe.instructions} />
                </>
              }
              <div className="btn-group">
                <Button onClick={displayIngredients} className="btn" outline>{buttonText}</Button>
                <Button onClick={() => setEditMode(!isEditMode)} color="info" outline>
                  <FontAwesomeIcon icon={faPen} />
                </Button>
                <Button onClick={() => props.deleteRecipe(props.recipe)} color="danger" outline>
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </div>
            </CardBody>
          </>
        }
      </Card>
    </Col>
  );
};