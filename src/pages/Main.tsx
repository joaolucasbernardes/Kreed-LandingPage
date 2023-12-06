import Frontend from "../templates/Frontend"
import { Container } from "./styles"
import ProductInformation from "../organisms/ProductInformation"
import ProductStats from "../organisms/ProductStats"

function Main() {

  return (
    <Frontend>
      <Container>
        <ProductInformation />
        <ProductStats />
      </Container>
    </Frontend>
  )
}

export default Main