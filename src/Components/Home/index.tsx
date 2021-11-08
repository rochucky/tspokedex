import { useState, useEffect } from "react";
import { useQuery } from "react-query";

import {
  Container,
  Main,
  Menu,
  MenuItem,
  Sidebar
} from './styles'

type Pokemon = {
  name: string;
  url: string;
  next: string;
}

const Home = () => {

  const [apiUrl, setApiUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=25");

  const { isLoading, error, data } = useQuery(['pokemons', apiUrl], () => {
    return fetch(apiUrl).then(res =>
      res.json()
    )
  });


  const handlePage = (next: string) => {
    setApiUrl(next);
  }


  if (isLoading) return <p>Loading...</p>

  if (error) return <p>Error :</p>

  return (
    <Container>
      <Sidebar>
        <Menu>
          {data.results.map(({ name, url }: Pokemon) => (
            <MenuItem key={name}>
              <a href={url}>{url.split('/')[6]} - {name}</a>
            </MenuItem>
          ))}
        </Menu>
        { data.previous && <button onClick={() => {handlePage(data.previous)}}>Previous</button> }
        { data.next && <button onClick={() => {handlePage(data.next)}}>Next</button>}
      </Sidebar>
      <Main>
        Teste
      </Main>
    </Container>
  )
}

export default Home;