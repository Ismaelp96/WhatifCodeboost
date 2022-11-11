import Image from "next/image";
import Link from "next/link";

import { HeaderStyle } from "./styles";
import { Container } from "../../styles/global";

import Logo from "../../assets/logo.svg";
import LogoCodeboost from "../../assets/logo-codeboost.svg";

export function Header() {
  return (
    <HeaderStyle>
      <Container>
        <div className="logo">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo Marvel Studios"
              title="Logo Marvel Studios"
            />
          </Link>
        </div>
        <div className="code">
          <Image
            src={LogoCodeboost}
            alt="Logo Codeboost"
            title="Logo Codeboost"
          />
        </div>
      </Container>
    </HeaderStyle>
  );
}
