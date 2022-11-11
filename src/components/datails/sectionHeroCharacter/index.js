import Image from "next/image";

import { SectionCharactersStyle } from "./styles";
import { Container } from "../../../styles/global";

export function SectionHeroCharacter({ data }) {
  console.log(data);
  return (
    <>
      <SectionCharactersStyle>
        <Container>
          <div className="image">
            <Image
              src={data.image_character.url}
              width={data.image_character.dimensions.width}
              height={data.image_character.dimensions.height}
              alt="Imagem do personagem"
              title="Imagem do personagem"
            />
          </div>
          <div className="info">
            <span>A História</span>
            <div>
              <h1>{data.name_character}</h1>
              <p>{data.description_character[0].text}</p>
            </div>
          </div>
        </Container>
      </SectionCharactersStyle>
    </>
  );
}
