import ReactMarkdown from "react-markdown";

export default function PostPresentation(props) {
  const { longcontent, benefici, slug } = props;

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-600 dark:text-white">
            Presentazione
          </h2>
          <div className="mb-4 text-justify text-base">
            <ReactMarkdown>{longcontent}</ReactMarkdown>
          </div>
          <h3 className="mb-2 text-2xl tracking-tight font-extrabold text-gray-600 dark:text-white">
            I Benefici
          </h3>
          <div className="mb-4 text-justify text-base">
            <ReactMarkdown>{benefici}</ReactMarkdown>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src={`/assets/images/corso/${slug}/${slug}-vertical-1.png`}
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src={`/assets/images/corso/${slug}/${slug}-vertical-2.png`}
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
}
