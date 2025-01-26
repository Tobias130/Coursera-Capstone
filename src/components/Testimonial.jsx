function Testimonial(props) {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < props.stars; i++) {
      stars.push(
        <svg
          key={i}
          className={`ms-1 h-4 w-4`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>,
      );
    }
    return stars;
  };

  return (
    <div className="px-3 md:w-1/3">
      <div className="border-gray-200 text-gray-800 mx-auto mb-6 w-full rounded-2xl border bg-white p-5 font-light">
        <div className="mb-4 flex w-full items-center">
          <div className="bg-gray-50 border-gray-200 h-10 w-10 overflow-hidden rounded-full border">
            <img src={props.img} alt="profile" />
          </div>
          <div className="flex-grow pl-3">
            <h6 className="text-sm text-gray-600 font-bold uppercase">
              {props.name}.
            </h6>
          </div>
          <div className="flex items-center">{renderStars()}</div>
        </div>
        <div className="w-full">
          <blockquote className="mb-3">
            <p className="font-bold">" {props.text} "</p>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
