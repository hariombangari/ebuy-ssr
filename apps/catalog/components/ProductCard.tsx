import { Button, Card, Image } from "semantic-ui-react";
import type { ProductListItem } from "../mocks/product-list-mocks"

export function ProductCard(productData: {product: ProductListItem}): JSX.Element {
  const { product } = productData;
  return (
    <Card>
      <Card.Content>
        <Image src={product.image} />
        <Card.Header>{product.title}</Card.Header>
        <Card.Description>{product.description}</Card.Description>
        <Card.Header>${product.price}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <div className="ui three buttons">
          <Button basic color="red">
            Remove
          </Button>
          <Button basic color="blue" />
          <Button basic color="green">
            Add
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}
export default ProductCard;
