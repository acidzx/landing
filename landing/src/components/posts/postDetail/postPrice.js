export default function PostPrice(props) {
  const { price } = props;
  return (
    <div className="bg-white border-t-2">
      <div className="pt-16 pb-4 px-4 mx-auto max-w-screen-xl sm:pt-16 sm:pb-4 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="text-4xl  font-extrabold text-gray-600 ">
            Ora in offerta a soli
          </h2>
          <p className="my-6 font-extrabold text-gray-500 text-6xl">
            {price}&euro;
          </p>
        </div>
      </div>
    </div>
  );
}
