import  {getProducts} from "../api/products"
import Link from "next/link";
import "../products/index.css"
export default function Description(props){
    const product = props.product
    return(
        <div className="mainContent">
            <div className="mainDesc">
            <div className="imageDesc">
                <img src={product.iconUrl}></img>
            </div>
            <div className="nameDesc">
                <h2>{product.name}</h2>
            </div>
            <div className="description">
                <p>{product.description}</p>
                <Link href="../"><button type="button">Wróć na stronę główną</button></Link>
            </div>
        </div>
        </div>
    );
}

export async function getServerSideProps(props) {
    const paramId = props.params?.id
  return { props: { product: getProducts().find(x=>x.id ===  paramId) } }
}