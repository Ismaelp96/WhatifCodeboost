import Image from "next/image";

import { StyleListCharacters, StyleSectionCharacters } from "./styles";
import { Container } from "../../../styles/global";
import { CardCharacter } from "../../cardCharacter";

import LogoMarvel from "../../../assets/logo.svg";

export function ListCharacters({ data }) {
  return (
    <StyleSectionCharacters>
      <Container>
        <div className="title">
          <span>What if</span>
          <h2>Personagens Marvel</h2>
        </div>
        <StyleListCharacters>
          {data.map((character) => {
            return (
              <CardCharacter
                key={character.id}
                image={character.data.image_character.url}
                name={character.data.name_character}
                slug={character.data.slug}
              />
            );
          })}
          <div className="marvel">
            <Image src={LogoMarvel} alt="Logo Marvel" title="Logo Marvel" />
          </div>
        </StyleListCharacters>
      </Container>
    </StyleSectionCharacters>
  );
}
