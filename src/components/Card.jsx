function Card(props) {
  return (
    <div className="rounded-2xl bg-highlight1 shadow-xl transition-transform duration-300 hover:scale-105">
      <img
        src={`/src/assets/${props.img}`}
        alt={props.title}
        className="h-48 w-full rounded-t-2xl object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg text-titleCard font-semibold">
            {props.title}
          </h3>
          <strong className="text-base">$ {props.price}</strong>
        </div>
        <p className="text-gray-700 py-4 text-base">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
