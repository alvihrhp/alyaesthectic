"use client";
/** React */
import { useState, useRef } from "react";
/** Components */
import SwiperCore, { Virtual, Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { ArticleCard } from "@/components";
/**Next Image */
import Image, { StaticImageData } from "next/image";
/** Router */
import { useRouter, useSearchParams } from "next/navigation";
/** Image */
import DummyArticle from "@/assets/dummy-article.png";
import ICalendar from "@/assets/calendar-icon.svg";
import IPencill from "@/assets/pencil-icon.svg";
import ArticleOne from "@/assets/article-1.png";
import ArticleTwo from "@/assets/article-2.png";
import ArticleThree from "@/assets/article-3.png";
import ArrowRight from "@/assets/arrow-right.svg";

type Article = {
  image: StaticImageData;
  title: string;
  date: string;
  author: string;
  desc: string;
  slug: string;
};

export default function Article() {
  const swiper = useSwiper();

  const [swiperRef, setSwiperRef] = useState<any>(null);

  const [articles, setArticles] = useState<Article[]>([
    {
      image: ArticleOne,
      title: "Ini judul tidak boleh lebih dari dua baris",
      date: "12 June 2022",
      author: "David Rhel",
      desc: "Lorem ipsum dolor sit amet consectetur. Pellentesque ornare mauris praesent donec ut quam.",
      slug: "ini-article-1",
    },
    {
      image: ArticleTwo,
      title: "Ini judul tidak boleh lebih dari dua baris",
      date: "12 June 2022",
      author: "David Rhel",
      desc: "Lorem ipsum dolor sit amet consectetur. Pellentesque ornare mauris praesent donec ut quam.",
      slug: "ini-article-2",
    },
    {
      image: ArticleThree,
      title: "Ini judul tidak boleh lebih dari dua baris",
      date: "12 June 2022",
      author: "David Rhel",
      desc: "Lorem ipsum dolor sit amet consectetur. Pellentesque ornare mauris praesent donec ut quam.",
      slug: "ini-article-3",
    },
    {
      image: ArticleOne,
      title: "Ini judul tidak boleh lebih dari dua baris",
      date: "12 June 2022",
      author: "David Rhel",
      desc: "Lorem ipsum dolor sit amet consectetur. Pellentesque ornare mauris praesent donec ut quam.",
      slug: "ini-article-4",
    },
  ]);

  const searchParams = useSearchParams();

  const title = searchParams.get("title");

  const desc = searchParams.get("desc");

  const date = searchParams.get("date");

  const author = searchParams.get("author");

  return (
    <div className="pt-[2.5rem] px-[7.4rem] pb-[3.125rem]">
      <Image src={DummyArticle} alt="" />
      <h1 className="mt-[1.5rem] font-bold text-[1.875rem]">{title}</h1>
      <div className="flex flex-wrap items-center mt-[0.75rem]">
        <div className="flex items-center">
          <Image src={ICalendar} alt="" className="w-[26px] h-[26px]" />
          <span className="ml-[0.5rem] text-neutral-70 text-[1.124]">
            {date}
          </span>
        </div>
        <div className="w-[4px] h-[4px] bg-neutral-70 mx-[0.5rem]"></div>
        <div className="flex items-center">
          <Image src={IPencill} alt="" className="w-[26px] h-[26px]" />
          <span className="ml-[0.5rem] text-neutral-70 text-[1.125]">
            {author}
          </span>
        </div>
      </div>
      <p className="mt-[1.5rem] text-neutral-80">
        Lorem ipsum dolor sit amet consectetur. Consectetur cursus tellus leo
        commodo volutpat lacus diam. In lacinia aliquam nec feugiat vel. Justo
        rhoncus tristique mauris ut at massa. Scelerisque amet scelerisque
        vulputate velit mi. Tincidunt eget et mattis integer vel ut neque vitae.
        Lorem laoreet aliquam venenatis praesent sapien egestas sit amet. Tellus
        at parturient viverra dolor est tortor felis. Eu pulvinar ut orci cursus
        consequat. Sit faucibus tempor sollicitudin sed. Ac vitae mattis
        maecenas vitae duis quam. Natoque congue morbi pharetra aliquam amet. Ut
        convallis mattis viverra sed dignissim in euismod accumsan. Dictum
        volutpat id leo amet. At amet tristique amet vestibulum dignissim arcu
        tellus cursus. Ipsum consequat in fringilla in neque. Ultrices non
        scelerisque velit sit neque ultrices. Lacinia scelerisque cursus eu
        netus ac id venenatis hendrerit. Vulputate proin mauris aliquet iaculis
        morbi. Lorem malesuada mi montes eget euismod sed tincidunt at. Sit
        netus magna purus nunc lectus quam neque pharetra. Fringilla nec donec
        porttitor nec magna duis. Aliquam at egestas urna scelerisque ac
        condimentum interdum leo lectus. Senectus scelerisque interdum feugiat
        turpis. Elit nulla malesuada viverra platea enim mi. Suscipit tortor sit
        tristique facilisis blandit tortor. Neque diam diam leo sed lacus nibh
        mauris. At ullamcorper eu ut lacus. Donec elit aliquam ac hendrerit ut
        ac ut tristique mauris. Adipiscing turpis ac et ultricies rhoncus. Quis
        nec purus aliquam dui tellus facilisi. Duis commodo ullamcorper hac
        molestie euismod orci est. In nec venenatis potenti quis vitae
        scelerisque. Tortor phasellus pretium et in egestas neque consectetur
        gravida porttitor. Orci elit risus bibendum pellentesque tortor. Gravida
        et proin sit amet. Tristique tincidunt hac nisl feugiat velit in sed
        nisi. Ac elementum sed imperdiet sed mauris nisl sed semper tempor.
        Vestibulum tempor a dictum dolor. Bibendum nullam sit quis dui leo magna
        tincidunt. Nulla dui laoreet quis dictum cras. Non elit quis scelerisque
        viverra quam praesent ac. Id amet arcu urna vel. Ut habitasse quis morbi
        venenatis. Tincidunt tellus vestibulum lorem donec nisi adipiscing
        habitasse at amet. A lorem vulputate pellentesque ultrices pharetra diam
        etiam. Aliquam vulputate sit nec ut enim. Auctor mi cras euismod blandit
        varius mauris. Leo a vel sit sagittis aliquet velit. Augue consequat
        donec etiam ullamcorper id scelerisque a leo amet. Quis vulputate
        commodo netus eu. At aliquam cras vitae mi mi libero vestibulum. Nunc
        neque habitant integer et eu id et porttitor. Egestas et pharetra nunc
        morbi ullamcorper hac mauris. Faucibus amet nisl tellus vulputate lectus
        commodo at est. Viverra nulla libero tempus nibh eu ridiculus sapien. A
        fermentum commodo sed risus. Ipsum nec ultrices aliquet amet accumsan
        ac. Massa iaculis odio libero pellentesque tempor sem. Mattis sed ut in
        urna suspendisse volutpat aenean varius felis. Sit risus magna vivamus
        integer nunc eget. Arcu non pellentesque ultrices at scelerisque feugiat
        consectetur risus vitae. Sed et diam et libero rhoncus facilisis. Tempor
        scelerisque ultrices neque magna nulla bibendum quis facilisis eu. Ipsum
        mattis laoreet eget at proin adipiscing vitae convallis. Nec eget
        adipiscing proin orci aliquam et aenean. Dolor arcu sit urna
        pellentesque porta. Nunc aliquet lacus congue scelerisque varius semper
        tortor tellus. At et nulla aenean nisl etiam viverra. Id sem convallis
        ultricies arcu urna vel tincidunt eget. Justo magna a est suspendisse
        pellentesque. Turpis sed nisi quis ipsum sed in aenean nam. Dui netus
        senectus lorem morbi odio. Eget etiam tellus vitae risus blandit enim.
        Netus eu porttitor donec ornare sit sit sed. Elementum interdum cras
        turpis pharetra. Id non fermentum ut fermentum nec. Eget diam egestas.
      </p>
      <div className="mt-[2rem]">
        <h1 className="font-semibold text-[1.5rem] text-neutral-90"></h1>
        <div className="mt-[5rem] relative min-width-[0px]">
          <div className="absolute top-[calc(50%-55px)] right-[68px] z-10 cursor-pointer swiper-button-next rounded-full bg-primary-neutral p-[0.625rem]">
            <Image src={ArrowRight} alt="" className="w-[20px] h-[20px]" />
          </div>
          <div className="absolute top-[calc(50%-53px)] left-[1px] z-10 cursor-pointer swiper-button-prev rounded-full bg-primary-neutral p-[0.625rem] rotate-180">
            <Image src={ArrowRight} alt="" className="w-[20px] h-[20px]" />
          </div>
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={3.2}
            spaceBetween={32}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            virtual
            className="flex flex-nowrap"
          >
            {articles.map((article: Article, articleIdx: number) => (
              <SwiperSlide key={articleIdx} virtualIndex={articleIdx}>
                <ArticleCard
                  image={article.image}
                  title={article.title}
                  desc={article.desc}
                  slug={article.slug}
                  date={article.date}
                  author={article.author}
                  key={articleIdx}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

// export async function getServerSiderProps(context: any) {
//   const data = JSON.parse(context.query.data);

//   return {
//     props: {
//       data,
//     },
//   };
// }
