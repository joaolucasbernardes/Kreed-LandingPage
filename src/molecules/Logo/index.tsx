import LogoPage from "../../assets/logo.svg"
import { TextoLogo } from "../../organisms/Header/styles"

const Logo = () => {

  return (
    <>
    
    <TextoLogo>
      <img src={LogoPage}/> 
      <div>Kreed</div>
    </TextoLogo>
    </>
  )
}

export default Logo