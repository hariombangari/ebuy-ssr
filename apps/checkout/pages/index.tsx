import { Container, Header as Text } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import ShoppingBasket from "../components/basket";
import { PRODUCT_LIST_MOCKS } from "../mocks/product-list-mocks";

export function App(): JSX.Element {
  return (
    <Container style={{ marginTop: "5rem" }}>
      <Text size="huge">Checkout</Text>
      <ShoppingBasket basketList={PRODUCT_LIST_MOCKS} />
    </Container>
  );
}
export default App;
