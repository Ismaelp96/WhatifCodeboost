import Link from "next/link";
import Image from "next/image";

import { StylePageNotFound } from "./styles";
import { Container } from "../../styles/global";

import ImageNotFound from "../../assets/image-not-found.png";

export function Page404() {
  return (
    <StylePageNotFound>
      <Container>
        <div className="text">
          <h1>Whoops, essa página sumiu.</h1>
          <p>
            OHHH, parece que não conseguimos encontrar a página que você está
            procurando. Tente voltar à página anterior ou consulte nossa Central
            de Ajuda para obter mais informações.
          </p>
          <Link href="/" title="Voltar para home">
            Voltar
          </Link>
        </div>
        <Image
          src={ImageNotFound}
          alt="Imagem para não encontardo"
          title="Imagem para não encontardo"
        />
      </Container>
    </StylePageNotFound>
  );
}
