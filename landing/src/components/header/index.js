import CtaActionsButtons from "@components/cta/ctaActionsButtons";
import { scrollIntoTheView } from "@/pages/_app";

export default function Header() {
  return (
    <div className="bg-white my-8">
      <div className="mx-auto max-w-screen-xl text-center py-6 px-4 md:px-20">
        <label
          htmlFor="modalForm"
          href="#"
          className="cursor-pointer inline-flex justify-between items-center py-1 px-1 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full  hover:bg-gray-200 "
          role="alert"
        >
          <span className="text-xs bg-primary-700 rounded-full text-white px-4 py-1.5 mr-3">
            Richiedi Informazioni
          </span>
          <span className="text-sm font-medium">Una sorpresa per te</span>
          <svg
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </label>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-600 md:text-5xl lg:text-6xl">
          Investi nel tuo futuro
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">
          Se desideri dare una svolta alla tua vita, sei nel posto giusto.
        </p>
      </div>
      <div className="inline-flex items-center justify-center w-full text-center mb-5 mt-1">
        <span className="absolute px-3 font-2xl text-gray-600 font-extrabold -translate-x-1/2 bg-white left-1/2 uppercase">
          Scopri i nostri corsi e diplomi!
        </span>
      </div>
      <div className="flex justify-center my-7">
        <button onClick={() => scrollIntoTheView("altaformazione")}>
          <div className="animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-slate-900/5 shadow-lg rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-green-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </button>
      </div>
      <CtaActionsButtons />
      <div className="container mx-auto text-center py-6">
        <h2 className="text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-600 md:text-3xl lg:text-4xl ">
          Finalmente libero di scegliere la strada più giusta per te
        </h2>
      </div>
      <div className="">
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 text-center">
          È il momento di raggiungere nuovi traguardi e successi lavorativi. È
          il momento di scegliere per te la strada che hai sempre desiderato. È
          il momento di iniziare un nuovo cammino nel mondo del benessere
          diventando massaggiatore. Insieme scegliamo il percorso più giusto per
          te che sia:
        </p>
      </div>
      <div className="container mx-auto flex flex-row text-center items-center justify-center">
        <ul>
          <li>
            Diploma di alta formazione professionale per massaggiatori (500
            ore);
          </li>
          <li>Diplomi di specializzazione;</li>
          <li>Corsi di massaggio.</li>
        </ul>
      </div>
    </div>
  );
}
