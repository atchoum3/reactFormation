import React from 'react';
import {
  Button, Col, Table,
} from 'reactstrap';
import { IngredientType } from './model/RecipeType';
import axios from 'axios';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function IngredientTable(props: any) {
  const ingredientWordUrl = "/ingredients";
  const ingredientUrl = `http://localhost:8080/api/v1${ingredientWordUrl}`;

  const [ingredientList, setIngredientList] = React.useState<IngredientType[]>([]);
  React.useEffect(() => {getIngredient()}, [])

  async function getIngredient() {
    try {
      const response = await axios.get<IngredientType[]>(ingredientUrl)
      setIngredientList(response.data)
    } catch (e) {
      console.error(e)
    }
  }

  async function deleteIngredient(ingredient: IngredientType) {
    try {
      await axios.delete(ingredientUrl, {data: ingredient});
      await getIngredient()
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="row justify-content-md-center">
      <Col sm="10">
        <Table hover className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {ingredientList.map((ingredient: IngredientType) =>
              <tr>
                <td>{ingredient.name}</td>
                <td>
                  <Button onClick={() => deleteIngredient(ingredient)} className="btn">
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Col>
    </div>
  )
}

