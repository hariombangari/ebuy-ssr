import { Card } from "semantic-ui-react";
import ProductCard from "../components/product-card";
import { PRODUCT_LIST_MOCKS } from "../mocks/product-list-mocks";

export function ProductList(): JSX.Element {
  return (
    <Card.Group>
      {PRODUCT_LIST_MOCKS.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Card.Group>
  );
}
export default ProductList;
