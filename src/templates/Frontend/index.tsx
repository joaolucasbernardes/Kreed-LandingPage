import Header from "../../organisms/Header";
import { Container } from "./styles";

type FrontendProps = {
  children: React.ReactNode;
}

const Frontend = ({ children }: FrontendProps) => {
  return (
    <Container>
      <Header></Header>
      <main>{children}</main>
    </Container>
  )
}

export default Frontend