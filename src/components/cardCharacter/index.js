import Link from "next/link";
import { StyleCard } from "./styles";
import Image from "next/image";

export function CardCharacter({ image, name, slug }) {
  return (
    <StyleCard>
      <Link href={`/character/${slug}`}>
        <div className="image">
          <Image
            src={image}
            alt="Imagem do personagem"
            title="Imagem do personagem"
            width={283}
            height={368}
          />
        </div>
        <div className="info">
          <div>
            <h3>{name}</h3>
            <span>Marvel Studios</span>
          </div>
          <span>What if</span>
        </div>
      </Link>
    </StyleCard>
  );
}
