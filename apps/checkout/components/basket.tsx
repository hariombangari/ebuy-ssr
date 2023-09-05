import { Table, Image, Container } from "semantic-ui-react";
import type { ProductListItem } from "../mocks/product-list-mocks"

export default function ShoppingBasket(basketListData: {basketList: ProductListItem[]}): JSX.Element {
  const { basketList } = basketListData;
  return (
    <Container textAlign="center">
      <Table basic="very" rowed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Items</Table.HeaderCell>
            <Table.HeaderCell>Amount</Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {basketList.map((basketItem: ProductListItem) => (
            <Table.Row key={basketItem.id}>
              <Table.Cell>
                <Image rounded size="mini" src={basketItem.image} />
              </Table.Cell>
              <Table.Cell> {basketItem.title}</Table.Cell>
              <Table.Cell>{basketItem.quantity || 1}</Table.Cell>
              <Table.Cell>
                £{basketItem.price || Number(basketItem.quantity)}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  );
}
