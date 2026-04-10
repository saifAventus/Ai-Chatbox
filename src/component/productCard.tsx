import type { SearchObject } from "../assets/dummyserachObject";
import { Heart } from "lucide-react";

function ProductCard(props: SearchObject) {
  return (
    <div className="bg-white rounded-4xl p-3 shadow-sm border border-gray-100 flex flex-col gap-3">
      <div className="bg-[#f0f2f5] rounded-3xl relative  flex flex-col items-center justify-center aspect-4/3">
        <img
          src={props.imageUrl}
          alt={props.title}
          className="w-full h-full object-contain mix-blend-multiply drop-shadow-lg rounded-3xl"
        />
      </div>

      <div className="px-2 pb-1 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="bg-emerald-50 text-emerald-700 px-3 py-1 text-[11px] font-semibold rounded-full tracking-wide">
            Best Seller
          </span>
          <Heart className="w-5 h-5 text-red-500 fill-red-500" />
        </div>

        <h2 className="text-lg font-bold text-gray-900 leading-snug line-clamp-2">
          {props.title}
        </h2>
        <div className="flex justify-between items-end text-sm">
          <div className="flex flex-col">
            <span className=" text-gray-500 font-medium">Price</span>
            <span className="text-xl font-bold text-emerald-700">
              ${props.price}
            </span>
          </div>
        </div>
        <button className="bg-[#2a2a2a] hover:bg-black text-white px-8 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-md">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
