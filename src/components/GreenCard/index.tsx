import Image, { StaticImageData } from "next/image";
/** Libraries */
import cx from "classnames";

interface Data {
  image: StaticImageData;
  heading: string;
  text?: string;
}

export default function GreenCard({ image, heading, text }: Data) {
  return (
    <div className="drop-shadow-md">
      <Image src={image} alt="" className="w-full rounded-t-lg" />
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
