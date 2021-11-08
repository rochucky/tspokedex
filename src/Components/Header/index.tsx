import {
  Container,
  Logo,
  Title
} from './styles';

import pokeball from "../../assets/pokeball_img.png";

const Header = () => {
  return (
    <Container>
      <Logo src={pokeball} alt="" />
      <Title>Pokédex</Title>
    </Container>
  )
}

export default Header;