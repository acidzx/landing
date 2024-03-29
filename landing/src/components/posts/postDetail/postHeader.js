import Image from "next/image";

import {
  BuildingLibraryIcon,
  HandRaisedIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const supportLinks = [
  {
    name: "33 sedi nazionali",
    href: "#",
    icon: BuildingLibraryIcon,
    bgcolor: "bg-green-700",
    color: "text-white",
  },
  {
    name: "35 tecniche di massaggio",
    href: "#",
    icon: HandRaisedIcon,
    bgcolor: "bg-white",
    color: "text-gray-700",
  },
  {
    name: "4.000 allievi formati ogni anno",
    href: "#",
    icon: UserGroupIcon,
    bgcolor: "bg-red-700",
    color: "text-white",
  },
];

export default function PostHeader(props) {
  const { title, img, category, filteredDate, fineCorsoDate } = props;

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative bg-gray-500 pb-60">
        <div className="absolute inset-0">
          <Image
            className="h-full w-full object-cover"
            alt={title}
            src={img}
            width={1750}
            height={600}
            priority
          />
          <div
            className="absolute inset-0 bg-gray-800/0 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
          <p className="text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl drop-shadow-md">
            {category[0].toUpperCase() + category.slice(1)}
          </p>
          <h1 className="pb-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl border-white border-b-2 drop-shadow-md">
            {title}
          </h1>
          {/* <p className="mt-6 max-w-3xl text-xl text-white">{description}</p> */}
        </div>
      </div>

      {/* Overlapping cards */}
      {
        <div
          className="hidden lg:block relative z-10 mx-auto lg:-mt-[30px] max-w-7xl px-6 pb-5 lg:px-8"
          aria-labelledby="contact-heading"
        >
          <h2 className="sr-only" id="contact-heading">
            Features
          </h2>
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
            {supportLinks.map((link) => (
              <div
                key={link.name}
                className="flex flex-col rounded-2xl bg-white shadow-xl"
              >
                <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                  <div
                    className={`absolute top-0 inline-block -translate-y-1/2 transform rounded-xl ${link.bgcolor} p-5 shadow-lg`}
                  >
                    <link.icon
                      className={`h-9 w-9 ${link.color}`}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">
                    {link.name}
                  </h3>
                  {/*   <p className="mt-4 text-base text-gray-500">
                    {link.description}
                  </p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      }

      {category === "corso" ? (
        <div className="container flex flex-col text-center mx-auto mt-0 py-6 justify-center items-center">
          <div className="p-5 rounded-2xl bg-white shadow-2xl">
            <h3 className="card-title text-xl font-medium text-gray-900  border-b border-gray-400 justify-center">
              Prima data del corso:
            </h3>
            <p className="text-lg font-medium text-gray-600 tracking-tighter justify-center pt-2 pb-4">
              {filteredDate === fineCorsoDate
                ? filteredDate
                : `dal ${filteredDate} al ${fineCorsoDate}`}
            </p>

            <label
              htmlFor="modalForm"
              href="#"
              className="cursor-pointer"
              role="alert"
            >
              <a className="btn btn-primary bg-green-700 text-white hover:bg-green-800">
                Richiedi Informazioni
              </a>
            </label>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
