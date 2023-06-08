import Image, { StaticImageData } from "next/image";
/** Image */
import ICalendar from "@/assets/calendar-icon.svg";
import IPencill from "@/assets/pencil-icon.svg";
/** Router */
import Link from "next/link";

interface Article {
  image: StaticImageData;
  title: string;
  desc: string;
  slug: string;
  date: string;
  author: string;
}

export default function ArticleCard({
  image,
  title,
  desc,
  slug,
  date,
  author,
}: Article) {
  const data: { [key: string]: string } = { title, desc, date, author };

  return (
    <Link
      href={{
        pathname: `/article/${slug}`,
        query: data,
      }}
    >
      <div className="relative rounded cursor-pointer">
        <Image
          src={image}
          alt={title}
          className="rounded-t-lg w-full relative z-0"
        />
        <div className="shadow-lg rounded-lg py-[1.25rem] px-[1rem] relative z-20 bottom-[40px] bg-white">
          <h5 className="font-medium text-[1.125rem] text-neutral-90">
            {title}
          </h5>
          <div className="flex flex-wrap items-center mt-[0.75rem]">
            <div className="flex items-center">
              <Image src={ICalendar} alt="" />
              <span className="ml-[0.5rem] text-neutral-70 text-[0.825rem]">
                12 June 2022
              </span>
            </div>
            <div className="w-[4px] h-[4px] bg-neutral-70 mx-[0.5rem]"></div>
            <div className="flex items-center">
              <Image src={IPencill} alt="" />
              <span className="ml-[0.5rem] text-neutral-70 text-[0.825rem]">
                Davis Rhiel
              </span>
            </div>
          </div>
          <p className="mt-[1rem] text-neutral-70">{desc}</p>
        </div>
      </div>
    </Link>
  );
}
