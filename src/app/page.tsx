"use client";
import { useState, useRef } from "react";
/** Components */
import SwiperCore, { Virtual, Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
/** Next Image */
import Image, { StaticImageData } from "next/image";
/** Image */
import SlideDummyOne from "@/assets/slide-dummy-1.png";
import SlideDummyTwo from "@/assets/slide-dummy-2.jpg";
import SlideDummyThree from "@/assets/slide-dummy-3.jpg";
import Logo from "@/assets/logo-and-text.svg";
import ExpertsOne from "@/assets/experts-1.png";
import ExpertsTwo from "@/assets/experts-2.png";
import ExpertsThree from "@/assets/experts-3.png";
import ExpertsFour from "@/assets/experts-4.png";
import ArrowRight from "@/assets/arrow-right.svg";
import IAdvance from "@/assets/icon-advance.svg";
import IHabits from "@/assets/icon-habits.svg";
import IBar from "@/assets/icon-bar.svg";
import IDental from "@/assets/icon-dental.svg";
import IWellness from "@/assets/icon-wellness.svg";
import DummyService from "@/assets/dummy-service.png";
import ArticleOne from "@/assets/article-1.png";
import ArticleTwo from "@/assets/article-2.png";
import ArticleThree from "@/assets/article-3.png";
import ICalendar from "@/assets/calendar-icon.svg";
import IPencill from "@/assets/pencil-icon.svg";
import TestimonyBg from "@/assets/testimony_bg.png";
import ArrowRightBold from "@/assets/arrow-right-bold.svg";
import ArrowLeftBold from "@/assets/arrow-left-bold.svg";
import CertificateOne from "@/assets/certificate-1.png";
import CertificateTwo from "@/assets/certificate-2.png";
import CertificateThree from "@/assets/certificate-3.png";
import CertificateFour from "@/assets/certificate-4.png";
import CertificateFive from "@/assets/certificate-5.png";

/** Libraries */
import cx from "classnames";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Virtual, Navigation, Pagination]);

type Expert = {
  image: StaticImageData;
  name: string;
  type: string;
};

type Service = {
  icon: StaticImageData;
  title: string;
  link: string;
};

type Article = {
  image: StaticImageData;
  title: string;
  date: string;
  author: string;
  desc: string;
};

type Review = {
  text: string;
  user: string;
};

export default function Home() {
  const swiper = useSwiper();

  const [activeReview, setActiveReview] = useState<number>(0);

  const [swiperRef, setSwiperRef] = useState<any>(null);

  const experts: Expert[] = [
    {
      image: ExpertsOne,
      name: "Ahmad Workman",
      type: "Dokter Kecantikan",
    },
    {
      image: ExpertsTwo,
      name: "Angel Dorwart",
      type: "Dokter Kecantikan",
    },
    {
      image: ExpertsThree,
      name: "Makena Franci",
      type: "Dokter Kecantikan",
    },
    {
      image: ExpertsFour,
      name: "Emerson Vetrovs",
      type: "Dokter Kecantikan",
    },
  ];

  const services: Service[] = [
    {
      icon: IAdvance,
      title: "Beauty Advance",
      link: "",
    },
    {
      icon: IHabits,
      title: "Beauty Habits",
      link: "",
    },
    {
      icon: IBar,
      title: "Beauty Bar",
      link: "",
    },
    {
      icon: IDental,
      title: "Dental",
      link: "",
    },
    {
      icon: IWellness,
      title: "Wellness",
      link: "",
    },
  ];

  const [articles, setArticles] = useState<Article[]>([
    {
      image: ArticleOne,
      title: "Ini judul tidak boleh lebih dari dua baris",
      date: "12 June 2022",
      author: "David Rhel",
      desc: "Lorem ipsum dolor sit amet consectetur. Pellentesque ornare mauris praesent donec ut quam.",
    },
    {
      image: ArticleTwo,
      title: "Ini judul tidak boleh lebih dari dua baris",
      date: "12 June 2022",
      author: "David Rhel",
      desc: "Lorem ipsum dolor sit amet consectetur. Pellentesque ornare mauris praesent donec ut quam.",
    },
    {
      image: ArticleThree,
      title: "Ini judul tidak boleh lebih dari dua baris",
      date: "12 June 2022",
      author: "David Rhel",
      desc: "Lorem ipsum dolor sit amet consectetur. Pellentesque ornare mauris praesent donec ut quam.",
    },
    {
      image: ArticleOne,
      title: "Ini judul tidak boleh lebih dari dua baris",
      date: "12 June 2022",
      author: "David Rhel",
      desc: "Lorem ipsum dolor sit amet consectetur. Pellentesque ornare mauris praesent donec ut quam.",
    },
  ]);

  const reviews: Review[] = [
    {
      text: `Lorem ipsum dolor sit amet consectetur. Feugiat eget id arcu sem. Libero libero molestie urna eget. Id mauris egestas risus at eu tortor non dolor. Lacus et sed est faucibus lacus morbi libero elit risus. Mauris est id sit cursus senectus a viverra. In vel sed ut metus vitae. Arcu lectus mauris sit nec posuere lacus augue sodales morbi. Amet quis pellentesque at suspendisse neque sed tincidunt cras. Porttitor augue aenean maecenas nec euismod at lectus tincidunt risus. 0`,
      user: "test123",
    },
    {
      text: `Lorem ipsum dolor sit amet consectetur. Feugiat eget id arcu sem. Libero libero molestie urna eget. Id mauris egestas risus at eu tortor non dolor. Lacus et sed est faucibus lacus morbi libero elit risus. Mauris est id sit cursus senectus a viverra. In vel sed ut metus vitae. Arcu lectus mauris sit nec posuere lacus augue sodales morbi. Amet quis pellentesque at suspendisse neque sed tincidunt cras. Porttitor augue aenean maecenas nec euismod at lectus tincidunt risus. 1`,
      user: "test123",
    },
    {
      text: `Lorem ipsum dolor sit amet consectetur. Feugiat eget id arcu sem. Libero libero molestie urna eget. Id mauris egestas risus at eu tortor non dolor. Lacus et sed est faucibus lacus morbi libero elit risus. Mauris est id sit cursus senectus a viverra. In vel sed ut metus vitae. Arcu lectus mauris sit nec posuere lacus augue sodales morbi. Amet quis pellentesque at suspendisse neque sed tincidunt cras. Porttitor augue aenean maecenas nec euismod at lectus tincidunt risus. 2`,
      user: "test123",
    },
    {
      text: `Lorem ipsum dolor sit amet consectetur. Feugiat eget id arcu sem. Libero libero molestie urna eget. Id mauris egestas risus at eu tortor non dolor. Lacus et sed est faucibus lacus morbi libero elit risus. Mauris est id sit cursus senectus a viverra. In vel sed ut metus vitae. Arcu lectus mauris sit nec posuere lacus augue sodales morbi. Amet quis pellentesque at suspendisse neque sed tincidunt cras. Porttitor augue aenean maecenas nec euismod at lectus tincidunt risus. 3`,
      user: "test123",
    },
    {
      text: `Lorem ipsum dolor sit amet consectetur. Feugiat eget id arcu sem. Libero libero molestie urna eget. Id mauris egestas risus at eu tortor non dolor. Lacus et sed est faucibus lacus morbi libero elit risus. Mauris est id sit cursus senectus a viverra. In vel sed ut metus vitae. Arcu lectus mauris sit nec posuere lacus augue sodales morbi. Amet quis pellentesque at suspendisse neque sed tincidunt cras. Porttitor augue aenean maecenas nec euismod at lectus tincidunt risus. 4`,
      user: "test123",
    },
    {
      text: `Lorem ipsum dolor sit amet consectetur. Feugiat eget id arcu sem. Libero libero molestie urna eget. Id mauris egestas risus at eu tortor non dolor. Lacus et sed est faucibus lacus morbi libero elit risus. Mauris est id sit cursus senectus a viverra. In vel sed ut metus vitae. Arcu lectus mauris sit nec posuere lacus augue sodales morbi. Amet quis pellentesque at suspendisse neque sed tincidunt cras. Porttitor augue aenean maecenas nec euismod at lectus tincidunt risus. 5`,
      user: "test123",
    },
  ];

  return (
    <main className="w-full h-full">
      <div className="w-full h-[728px] relative">
        <div className="absolute top-[528px] left-[160px] z-10 cursor-pointer swiper-banner-button-next">
          <Image src={ArrowRightBold} alt="" className="w-[20px] h-[20px]" />
        </div>
        <div className="absolute top-[528px] left-[87px] z-10 cursor-pointer swiper-banner-button-prev">
          <Image src={ArrowLeftBold} alt="" className="w-[20px] h-[20px]" />
        </div>
        <div className="absolute bottom-[50px] left-0 w-full z-10">
          <div className="w-full flex flex-col items-center">
            <p className="italic text-white text-[1.125rem] mb-[0.5rem]">
              Our Best Certificate
            </p>
            <div className="flex flex-wrap gap-[20px]">
              <Image src={CertificateOne} alt="" />
              <Image src={CertificateTwo} alt="" />
              <Image src={CertificateThree} alt="" />
              <Image src={CertificateFour} alt="" />
              <Image src={CertificateFive} alt="" />
            </div>
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          className="h-full "
          pagination={{
            type: "progressbar",
            progressbarFillClass: "swiper-pagination-progressbar-fill",
          }}
          loop={true}
          navigation={{
            nextEl: ".swiper-banner-button-next",
            prevEl: ".swiper-banner-button-prev",
          }}
        >
          <SwiperSlide className="relative pt-[11.5rem] pl-[5.75rem]">
            <Image
              src={SlideDummyOne}
              alt=""
              className="w-full h-full absolute top-0 left-0"
            />
            <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-black/[0.22] to-black/[0.22] z-10"></div>
            <div className="w-[560px]">
              <h1 className="relative z-10 font-bold text-[3.25rem] text-white drop-shadow-lg mb-[0.5]">
                ALYA ESTETIC <br></br> CENTER{" "}
              </h1>
              <p className="text-[1.25rem] relative z-10 drop-shadow text-white mb-[4rem]">
                Berisi penjelasan secara singkat tentang “Alya Estetic Center”
                kalau bisa diisi dengan maksimal 3 baris atau 4 baris saja
                secara singkat, untuh penjelasan awal. Atau bisa diisi hilight
                promo - promo
              </p>
              <span className="font-semibold text-[1.25rem] text-white relative z-10 mx-[1.5rem]">
                1 / 3
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <Image
              src={SlideDummyTwo}
              alt=""
              className="w-full h-full absolute top-0 left-0"
            />
            <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-black/[0.22] to-black/[0.22] z-10"></div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <Image
              src={SlideDummyThree}
              alt=""
              className="w-full h-full absolute top-0 left-0"
            />
            <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-black/[0.22] to-black/[0.22] z-10"></div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="py-[1.25rem] px-[5rem] bg-neutral-ket">
        <h2 className="text-[2rem] font-semibold text-neutral-90">
          ALYA ESTETIC CENTER
        </h2>
        <div className="flex flex-wrap mt-[0.75rem] justify-between items-center">
          <Image src={Logo} alt="" className="w-[255px]" />
          <p className="w-[calc(100%-267px)] text-xl/[2rem] text-neutral-90">
            Lorem ipsum dolor sit amet consectetur. Neque felis nisi vitae
            ornare est. Ornare cum luctus diam nisl ornare nunc in mattis
            aliquet. Eu faucibus nunc orci proin facilisis rhoncus et et sapien.
            At leo elit accumsan netus viverra sem orci. Malesuada in imperdiet
            etiam suspendisse consectetur non fermentum dui. Pellentesque ipsum
            bibendum velit turpis aliquet quis at.
          </p>
        </div>
        <h2 className="text-[2rem] font-semibold text-neutral-90 mt-[1.25rem]">
          OUR EXPERT
        </h2>
        <p className="text-xl/[2rem] text-neutral-90 mt-[1.25rem]">
          The Alya Esthetic clinic has people who are experienced in their
          respective fields, so there is no need to doubt the quality results
          from our clinic. We provide professional, friendly and careful
          service. See for more detail
        </p>
        <div className="flex gap-[2rem] mt-[0.75rem] relative">
          <div className="absolute top-[calc(50%-55px)] right-[68px] z-10 cursor-pointer swiper-doctor-button-next rounded-full bg-primary-neutral p-[0.625rem]">
            <Image src={ArrowRight} alt="" className="w-[20px] h-[20px]" />
          </div>
          <div className="absolute top-[calc(50%-53px)] left-[1px] z-10 cursor-pointer swiper-doctor-button-prev rounded-full bg-primary-neutral p-[0.625rem] rotate-180">
            <Image src={ArrowRight} alt="" className="w-[20px] h-[20px]" />
          </div>
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={3.2}
            spaceBetween={32}
            navigation={{
              nextEl: ".swiper-doctor-button-next",
              prevEl: ".swiper-doctor-button-prev",
            }}
            virtual
            className="flex flex-nowrap"
          >
            {experts.map((expert: Expert, expertIdx: number) => (
              <SwiperSlide key={expertIdx} virtualIndex={expertIdx}>
                <div className="drop-shadow-md rounded-xl" key={expertIdx}>
                  <Image
                    src={expert.image}
                    alt=""
                    className="w-full rounded-tl-xl rounded-tr-xl"
                  />
                  <div className="py-[0.5rem] bg-primary-light text-center">
                    <p className="mb-[0.25rem] font-medium">{expert.name}</p>
                    <p>{expert.type}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex flex-wrap mt-[2.75rem] justify-center items-center">
          <span className="text-primary font-semibold text-2xl mr-[0.875rem]">
            See More Details
          </span>
          <Image src={ArrowRight} alt="" />
        </div>
      </div>
      <div className="w-full flex flex-wrap items-center justify-between">
        <div className="w-[40%] pl-[5rem]">
          <h2 className="text-neutral-80 font-bold text-[2rem]">OUR SERVICE</h2>
          <p className="text-neutral-70">
            Alya Esthetic is a beauty clinic that promotes and values
            hospitality, health and one-stop solution for everyone. Alya
            Esthetic helps clients to reveal their hidden layers of beauty
            underneath.
          </p>
          <div className="mt-[2rem]">
            {services.map((service: Service, serviceIdx: number) => (
              <div
                className="pl-[1rem] py-[0.75rem] flex flex-wrap items-center border-b cursor-pointer"
                key={serviceIdx}
              >
                <Image src={service.icon} alt={service.title} />
                <span className="pl-[0.75rem] text-[1.5rem] text-neutral-80">
                  {service.title}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[60%] p-[2rem] bg-neutral-ket">
          <h2 className="text-neutral-90 text-[2.25rem] font-bold mb-[1rem]">
            Beauty Advance Treatment
          </h2>
          <Image src={DummyService} alt="" className="w-full" />
          <p className="mt-[1rem] text-neutral-80 text-[1.25rem]">
            Alya Esthetic have a special various treatment for rejuvenation. We
            will helps to get the preferable skin for every skin. We provide
            with high maintenance tools and our products to use daily.
          </p>
          <div className="mt-[1rem]">
            <span className="font-semibold text-[1.25rem]">
              This package includes
            </span>
            <ul className="mt-[0.25rem] list-disc ml-[2rem]">
              <li className="text-neutral-80 text-[1.25rem]">Peeling Series</li>
              <li className="text-neutral-80 text-[1.25rem]">HIFU Series</li>
              <li className="text-neutral-80 text-[1.25rem]">
                Hair Fall Treatment Series
              </li>
              <li className="text-neutral-80 text-[1.25rem]">
                Laser Treatment Series
              </li>
              <li className="text-neutral-80 text-[1.25rem]">
                Laser Soprano Ice Platinum Series Slimming Series
              </li>
            </ul>
          </div>
          <div className="mt-[1rem]">
            <button
              type="button"
              className="w-full rounded-full py-[1rem] bg-primary/[0.4] text-center border border-primary shadow shadow-primary text-primary font-semibold text-[1.25rem]"
            >
              See More
            </button>
          </div>
        </div>
      </div>
      <div className="pl-[5rem] pt-[3.125rem] pb-[6.75rem]">
        <h1 className="font-bold text-[2rem] text-neutral-90">ARTICLE</h1>
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
                <div className="relative rounded">
                  <Image
                    src={article.image}
                    alt={article.title}
                    className="rounded-t-lg w-full relative z-0"
                  />
                  <div className="shadow-lg rounded-lg py-[1.25rem] px-[1rem] relative z-20 bottom-[40px] bg-white">
                    <h5 className="font-medium text-[1.125rem] text-neutral-90">
                      {article.title}
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
                    <p className="mt-[1rem] text-neutral-70">{article.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="w-full mt-[1rem] relative pl-[5rem] pt-[5.75rem] h-[500px] z-[-1]">
        <Image
          src={TestimonyBg}
          alt=""
          className="absolute top-0 left-0 w-full"
        />
        <h2 className="text-white relative font-bold text-[3rem]">
          WHAT THEY <br></br> THOUGHT <br></br> ABOUT US
        </h2>
      </div>
      <div className="relative bottom-[120px]">
        <div className="absolute top-[calc(50%-55px)] right-[68px] z-10 cursor-pointer swiper-review-button-next rounded-full bg-primary-neutral p-[0.625rem]">
          <Image src={ArrowRight} alt="" className="w-[30px] h-[30px]" />
        </div>
        <div className="absolute top-[calc(50%-55px)] left-[68px] z-10 cursor-pointer swiper-review-button-prev rounded-full bg-primary-neutral p-[0.625rem] rotate-180">
          <Image src={ArrowRight} alt="" className="w-[30px] h-[30px]" />
        </div>
        <Swiper
          onSlideChange={(e) => setActiveReview(e.realIndex)}
          slidesPerView={2}
          spaceBetween={-50}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            stopOnLastSlide: false,
            waitForTransition: true,
          }}
          navigation={{
            nextEl: ".swiper-review-button-next",
            prevEl: ".swiper-review-button-prev",
          }}
          modules={[Pagination, Navigation, Autoplay]}
          centeredSlides={true}
          wrapperClass="pb-[2rem]"
        >
          {reviews.map((review: Review, reviewIdx: number) => (
            <SwiperSlide key={reviewIdx}>
              <div
                className={cx("bg-white p-[1.75rem] rounded-lg", {
                  ["shadow scale-75"]: reviewIdx !== activeReview,
                  ["shadow-lg scale-100"]: reviewIdx === activeReview,
                })}
              >
                <p className="text-[1.25rem] color-neutral-70 font-thin mb-[1rem]">
                  {review.text}
                </p>
                <span className="italic font-medium text-[1.125rem] text-neutral-80">
                  Talan Bator -{" "}
                  <span className="font-normal">Jenis Perawatan 4</span>
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}
