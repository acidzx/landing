import Header from "@components/header";
import AltaFormazione from "@components/altaFormazione";
import MultiCarousel from "@components/multiCarousel";
import { getAllPosts } from "../../lib/posts-util";

export function getStaticProps() {
  const allCorsi = getAllPosts("corso");
  const allDiplomi = getAllPosts("diploma");

  return {
    props: {
      corsi: allCorsi,
      diplomi: allDiplomi,
    },
    // revalidate: 1800,
  };
}

export default function Home(props) {
  return (
    <>
      <Header />
      <AltaFormazione />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="container mx-auto p-4 mt-6">
        <h2 className="text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-600 md:text-3xl lg:text-4xl dark:text-white">
          DIPLOMI DI SPECIALIZZAZIONE
        </h2>
        <p className="text-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Il Diploma di Alta Formazione Professionale per massaggiatori è il
          percorso formativo più completo che puoi desiderare ed ottenere,
          garantendoti un sicuro inserimento nel mondo del lavoro.
        </p>
      </div>
      <MultiCarousel posts={props.diplomi} />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="container mx-auto p-4 mt-6">
        <h2 className="text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-600 md:text-3xl lg:text-4xl dark:text-white">
          CORSI INDIVIDUALI
        </h2>
        <p className="text-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Il Diploma di Alta Formazione Professionale per massaggiatori è il
          percorso formativo più completo che puoi desiderare ed ottenere,
          garantendoti un sicuro inserimento nel mondo del lavoro.
        </p>
      </div>
      <MultiCarousel posts={props.corsi} />
    </>
  );
}
