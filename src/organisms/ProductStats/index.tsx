import CardActivity from "../../molecules/CardActivity"
import { Container } from "./styles"
import ImageWomen from "../../assets/img1.png"
import CardChart from "../../molecules/CardChart"

const ProductStats = () => {

  return (
    <Container>
        <CardActivity />
        <CardChart />
        <img src={ImageWomen} alt="Mulher fazendo pesquisa"/>
    </Container>
  )
}

export default ProductStats