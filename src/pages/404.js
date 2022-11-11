import { Page404 } from "../components/pageNotFound";
import { PageTitle } from "../components/PageTitle";

export default function PageNotFound() {
  return (
    <>
      <PageTitle
        title="What If? | Página não encontrada"
        description="A página buscada não foi encontrada"
      />
      <Page404 />
    </>
  );
}
