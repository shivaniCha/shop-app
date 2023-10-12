import Rating from "../Rating/Rating";
import { ProductItemProps } from "./Product.types";

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div key={product.id} className="group gap-[2px] rounded-[5px] border-[#AFB5CC] bg-white border  p-4 flex items-start flex-col">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-white xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={product.image}
          alt={product.title}
          className="h-[225px] w-full object-contain object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="text-[#4E5BD1] leading-[19px] text-base font-normal whitespace-nowrap text-ellipsis overflow-hidden w-[90%] text-justify mt-2">{product.title}</h3>
      <p className="text-base font-normal">
        Cat : {product.category}
      </p>
      <div className="flex w-full justify-between">
        <div className="text-base font-normal flex items-center">
          Rating: <Rating rate={product.rating.rate} />
        </div>
        <div className="text-base font-normal">${product.price}</div>
      </div>
    </div>
  );
};

export default ProductItem;
