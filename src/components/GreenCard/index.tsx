import Image, { StaticImageData } from "next/image";
/** Libraries */
import cx from "classnames";

interface Data {
  image: StaticImageData;
  heading: string;
  text?: string;
  from?: string;
  widthImage?: string;
  heightImage?: string;
}

export default function GreenCard({
  image,
  heading,
  text,
  from,
  widthImage,
  heightImage,
}: Data) {
  return (
    <div className="drop-shadow-md">
      <Image
        src={image}
        alt=""
        className={cx("rounded-t-lg border-[1px] border-[#DCDCDC]", {
          ["cursor-pointer"]: from,
          ["w-[250px] h-[250px]"]: !widthImage && !heightImage,
          [`${widthImage} ${heightImage}`]: widthImage && heightImage,
        })}
      />
      <div className="py-[0.5rem] bg-primary-light text-center rounded-b-lg">
        <p className="mb-[0.25rem] font-medium">{heading}</p>
        <p
          className={cx({
            ["block"]: text,
            ["hidden"]: !text,
          })}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
