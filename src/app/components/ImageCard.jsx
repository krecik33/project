import Link from "next/link";

export const ImageCard = ({ id, iconUrl, name }) => {
  console.log(id);
  return (
    <Link href={`products/${id}`} className="link">
      <div className="product">
        <img src={iconUrl} alt={name} />
        <p>{name}</p>
      </div>
    </Link>
  );
};
