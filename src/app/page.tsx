"use client";
import { useState, useRef } from "react";
/** Components */
import SwiperCore, { Virtual, Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { ArticleCard, GreenCard } from "@/components";
/** Next Image */
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
/** Image */
import SlideDummyOne from "@/assets/slide-1.jpg";
import SlideDummyTwo from "@/assets/slide-2.jpg";
import SlideDummyThree from "@/assets/slide-3.jpg";
import Logo from "@/assets/logo-and-text.svg";
// import ExpertsOne from "@/assets/experts-1.png";
// import ExpertsTwo from "@/assets/experts-2.png";
// import ExpertsThree from "@/assets/experts-3.png";
// import ExpertsFour from "@/assets/experts-4.png";
import ArrowRight from "@/assets/arrow-right.svg";
import IAdvance from "@/assets/icon-advance.svg";
import IHabits from "@/assets/icon-habits.svg";
import ISlimming from "@/assets/icon-slimming.png";
import IBar from "@/assets/icon-bar.jpg";
import IDental from "@/assets/icon-dental.svg";
import IWellness from "@/assets/icon-wellness.svg";
import DummyService from "@/assets/dummy-service.png";
import ArticleOne from "@/assets/article-1.png";
import ArticleTwo from "@/assets/article-2.png";
import ArticleThree from "@/assets/article-3.png";
import TestimonyBg from "@/assets/testimony_bg.png";
import ArrowRightBold from "@/assets/arrow-right-bold.svg";
import ArrowLeftBold from "@/assets/arrow-left-bold.svg";
import DrAlya from "@/assets/dr_alya.jpg";
import DrMaggie from "@/assets/dr_maggie.jpg";
import DrgPrilla from "@/assets/drg_prilla.jpg";
import DrVidayani from "@/assets/dr_vidayani.jpg";
import DrNadiya from "@/assets/dr_nadiya.jpg";
import DrMarissa from "@/assets/dr_marissa.jpg";
// import CertificateOne from "@/assets/certificate-1.png";
// import CertificateTwo from "@/assets/certificate-2.png";
// import CertificateThree from "@/assets/certificate-3.png";
// import CertificateFour from "@/assets/certificate-4.png";
// import CertificateFive from "@/assets/certificate-5.png";

/** Libraries */
import cx from "classnames";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Virtual, Navigation, Pagination]);

import { Tab } from "@headlessui/react";

type Expert = {
  image: StaticImageData;
  name: string;
  type: string;
};

type Service = {
  icon: StaticImageData;
  title: string;
  link: string;
  id: string;
};

type Article = {
  image: StaticImageData;
  title: string;
  date: string;
  author: string;
  desc: string;
  slug: string;
};

type Review = {
  text: string;
  user: string;
};

export default function Home() {
  const swiper = useSwiper();

  const [activeReview, setActiveReview] = useState<number>(0);

  const [swiperRef, setSwiperRef] = useState<any>(null);

  // const [verticalActive, setVerticalActive] = useState("ba");

  // const handleVerticalClick = (value: string) => {
  //   if (value === verticalActive) {
  //     return;
  //   }
  //   setVerticalActive(value);
  // };

  const experts: Expert[] = [
    {
      image: DrAlya,
      name: "dr. Fadhilah Aliyah Saptogino (dr. Alya)",
      type: "Dokter Kecantikan",
    },
    {
      image: DrMaggie,
      name: "dr. Margareth Yosephine (dr. Maggie)",
      type: "Dokter Kecantikan",
    },
    {
      image: DrgPrilla,
      name: "drg. Prilla",
      type: "Dokter Kecantikan",
    },
    {
      image: DrVidayani,
      name: "dr. Vidyani Adiningtyas, Sp. DV (dr. Tyas)",
      type: "Dokter Kecantikan",
    },
    {
      image: DrAlya,
      name: "dr. Sarah Hutapea, Sp.KK (dr. Sarah)",
      type: "Dokter Kecantikan",
    },
    {
      image: DrNadiya,
      name: "dr. Nadiya",
      type: "Dokter Kecantikan",
    },
    {
      image: DrMarissa,
      name: "dr. Marissa",
      type: "Dokter Kecantikan",
    },
  ];

  const services: Service[] = [
    {
      icon: IAdvance,
      title: "Beauty Advance",
      link: "",
      id: "ba",
    },
    {
      icon: IHabits,
      title: "Beauty Habits",
      link: "",
      id: "bh",
    },
    {
      icon: ISlimming,
      title: "Slimming",
      link: "",
      id: "bb",
    },
    {
      icon: IBar,
      title: "Beauty Bar",
      link: "",
      id: "bb",
    },
    {
      icon: IDental,
      title: "Dental",
      link: "",
      id: "den",
    },
    {
      icon: IWellness,
      title: "Wellness",
      link: "",
      id: "well",
    },
  ];

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
        <div className="absolute lg:top-[528px] top-[530px] lg:left-[200px] left-[170px] z-10 cursor-pointer swiper-banner-button-next">
          <Image src={ArrowRightBold} alt="" className="w-[20px] h-[20px]" />
        </div>
        <div className="absolute lg:top-[528px] top-[530px] lg:left-[117px] left-[77px] z-10 cursor-pointer swiper-banner-button-prev">
          <Image src={ArrowLeftBold} alt="" className="w-[20px] h-[20px]" />
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          className="h-full"
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
          <SwiperSlide className="relative px-[3rem] py-[8rem] lg:pt-[11.5rem] lg:pl-[5.75rem]">
            <Image
              src={SlideDummyOne}
              alt=""
              className="absolute top-0 left-0 object-cover w-full h-full"
            />
            <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-black/[0.22] to-black/[0.22] z-10"></div>
            <div className="lg:w-[560px] ml-8 lg:ml-[34px]">
              <h1 className="relative z-10 font-bold text-[2rem] lg:text-[3.25rem] text-white drop-shadow-lg mb-[0.5]">
                ALYA ESTETIC <br></br> CENTER{" "}
              </h1>
              <p className="text-[1.25rem] relative z-10 drop-shadow text-white mb-[2rem] lg:mb-[3.8rem]">
                Alya Esthetic is a beauty clinic that promotes and values
                hospitality, health and one-stop solution for everyone. Alya
                Esthetic helps clients to reveal their hidden layers of beauty
                underneath.
              </p>
              <div className="flex items-center gap-4">
                <span className="font-semibold text-[1.25rem] text-white relative z-10 ml-[2.3rem] lg:mx-[1.5rem]">
                  1 / 3
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative px-[3rem] py-[8rem] lg:pt-[11.5rem] lg:pl-[5.75rem]">
            <Image
              src={SlideDummyTwo}
              alt=""
              className="absolute top-0 left-0 object-cover w-full h-full"
            />
            <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-black/[0.22] to-black/[0.22] z-10"></div>
            <div className="lg:w-[560px] ml-8 lg:ml-[34px]">
              <h1 className="relative z-10 font-bold text-[2rem] lg:text-[3.25rem] text-white drop-shadow-lg mb-[0.5]">
                ONE STOP SOLUTIONS
              </h1>
              <p className="text-[1.25rem] relative z-10 drop-shadow text-white mb-[2rem] lg:mb-[3.8rem]">
                By using European & USA standard machines as well as Medical
                equipment with FDA-approved grade-A, Friends of Alya will
                certainly get the best quality treatment at the Alya Esthetic
                Center.
              </p>
              <div className="flex items-center gap-4">
                <span className="font-semibold text-[1.25rem] text-white relative z-10 ml-[2.3rem] lg:mx-[1.5rem]">
                  2 / 3
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative px-[3rem] py-[8rem] lg:pt-[11.5rem] lg:pl-[5.75rem]">
            <Image
              src={SlideDummyThree}
              alt=""
              className="absolute top-0 left-0 object-cover w-full h-full"
            />
            <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-black/[0.22] to-black/[0.22] z-10"></div>
            <div className="lg:w-[560px] ml-8 lg:ml-[34px]">
              <h1 className="relative z-10 font-bold text-[2rem] lg:text-[3.25rem] text-white drop-shadow-lg mb-[0.5]">
                WE ARE FAMILY
                <br></br> FRIENDLY
              </h1>
              <p className="text-[1.25rem] relative z-10 drop-shadow text-white mb-[2rem] lg:mb-[3.8rem]">
                Patient comfort and satisfaction is our main goal. We committed
                to providing the most effective service as needed Alya’s friend
                and maintain the confidentiality of patients who run treatment
                at Alya Esthetic Center.
              </p>
              <div className="flex items-center gap-4">
                <span className="font-semibold text-[1.25rem] text-white relative z-10 ml-[2.3rem] lg:mx-[1.5rem]">
                  3 / 3
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div
        className="py-[1.25rem] px-8 lg:px-[5rem] bg-neutral-ket scroll-pt-16"
        id="about"
      >
        <h2 className="text-[2rem] font-semibold text-neutral-90">
          ALYA ESTHETIC CENTER
        </h2>
        <div className="flex flex-wrap mt-[0.75rem] justify-between items-center flex-col lg:flex-row">
          <Image src={Logo} alt="" className="w-[255px]" />
          <p className="w-full lg:w-[calc(100%-267px)] text-xl/[2rem] text-neutral-90">
            Our mission is to help everyone optimize Beauty that looks good and
            feels comfortable for Friends of Alya by formulating aesthetic
            treatments that are effective and meet the needs of Friends of Alya.
            As the best skin specialist beauty clinic in Jakarta, the Alya
            Esthetic Center clinic, located in Pasar Minggu, South Jakarta, has
            a team of experienced, professional doctors.
          </p>
        </div>
        <h2 className="text-[2rem] font-semibold text-neutral-90 mt-[1.25rem]">
          OUR EXPERT
        </h2>
        <p className="text-xl/[2rem] text-neutral-90 mt-[1.25rem]">
          The Alya Esthetic Center clinic has people who are experienced in
          their respective fields, so there is no need to doubt the quality
          results from our clinic. We provide professional, friendly and careful
          service. See for more detail :
        </p>
        <div className="flex gap-[2rem] mt-[0.75rem] relative">
          <div className="absolute top-[calc(50%-55px)] right-4 z-10 cursor-pointer swiper-doctor-button-next rounded-full bg-primary-neutral p-[0.625rem]">
            <Image src={ArrowRight} alt="" className="w-[20px] h-[20px]" />
          </div>
          <div className="absolute top-[calc(50%-53px)] left-4 z-10 cursor-pointer swiper-doctor-button-prev rounded-full bg-primary-neutral p-[0.625rem] rotate-180">
            <Image src={ArrowRight} alt="" className="w-[20px] h-[20px]" />
          </div>
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={2}
            spaceBetween={8}
            navigation={{
              nextEl: ".swiper-doctor-button-next",
              prevEl: ".swiper-doctor-button-prev",
            }}
            virtual
            wrapperClass="mb-[2.75rem]"
            className="flex flex-nowrap"
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
          >
            {experts.map((expert: Expert, expertIdx: number) => (
              <SwiperSlide key={expertIdx} virtualIndex={expertIdx}>
                <div className="w-[250px]">
                  <GreenCard
                    image={expert.image}
                    heading={expert.name}
                    text={expert.type}
                    key={expertIdx}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Link href={"/about"}>
          <div className="flex flex-wrap items-center justify-center">
            <span className="text-primary font-semibold text-2xl mr-[0.875rem]">
              See More Details
            </span>
            <Image src={ArrowRight} alt="" />
          </div>
        </Link>
      </div>

      <div
        className="flex flex-col flex-wrap items-center justify-between w-full lg:flex-row"
        id="service"
      >
        <Tab.Group vertical>
          <div className="flex flex-col p-8 lg:hidden">
            <h2 className="text-neutral-80 font-bold text-[2rem]">
              OUR SERVICE
            </h2>
            <p className="text-neutral-70">
              Alya Esthetic is a beauty clinic that promotes and values
              hospitality, health and one-stop solution for everyone. Alya
              Esthetic helps clients to reveal their hidden layers of beauty
              underneath.
            </p>
          </div>
          <div className="lg:w-[40%] w-full pl-8 lg:pl-[5rem]">
            <h2 className="text-neutral-80 font-bold text-[2rem] hidden lg:block">
              OUR SERVICE
            </h2>
            <p className="hidden text-neutral-70 lg:block">
              Alya Esthetic is a beauty clinic that promotes and values
              hospitality, health and one-stop solution for everyone. Alya
              Esthetic helps clients to reveal their hidden layers of beauty
              underneath.
            </p>

            <div className="flex flex-row overflow-auto lg:flex-col">
              {services.map((service: Service, serviceIdx: number) => (
                <Tab.List className="mt-2">
                  <Tab
                    key={serviceIdx}
                    className="pl-0 w-max lg:mr-0 mr-4 lg:pl-[1rem] py-[0.75rem] flex flex-col lg:flex-row flex-wrap items-center border-b cursor-pointer justify-center"
                  >
                    <Image
                      src={service.icon}
                      alt={service.title}
                      className="w-5 h-5 lg:w-16 lg:h-16"
                    />
                    <span className="pl-[0.75rem] lg:text-[1.5rem] text-neutral-80 text-base">
                      {service.title}
                    </span>
                  </Tab>
                </Tab.List>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[60%] p-[2rem] bg-neutral-ket">
            <Tab.Panels>
              <Tab.Panel>
                <h2 className="text-neutral-90 text-[2.25rem] font-bold mb-[1rem]">
                  Beauty Advance Treatment
                </h2>
                <Image src={DummyService} alt="" className="w-full" />
                <p className="mt-[1rem] text-neutral-80 text-[1.25rem]">
                  Alya Esthetic have a special various treatment for
                  rejuvenation. We will helps to get the preferable skin for
                  every skin. We provide with high maintenance tools and our
                  products to use daily.
                </p>
                <div className="mt-[1rem]">
                  <span className="font-semibold text-[1.25rem]">
                    This package includes
                  </span>
                  <ul className="mt-[0.25rem] list-disc ml-[2rem]">
                    <li className="text-neutral-80 text-[1.25rem]">
                      Basic Peeling
                    </li>
                    <li className="text-neutral-80 text-[1.25rem]">
                      Premium Peeling
                    </li>
                    <li className="text-neutral-80 text-[1.25rem]">
                      Combined Peeling
                    </li>
                    <li className="text-neutral-80 text-[1.25rem]">
                      Luxury Peeling
                    </li>
                  </ul>
                </div>
                <div className="mt-[1rem]">
                  <Link
                    href="service"
                    className="w-full block rounded-full py-[1rem] bg-primary/[0.4] text-center border border-primary shadow shadow-primary text-primary font-semibold text-[1.25rem]"
                  >
                    See More
                  </Link>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <h2 className="text-neutral-90 text-[2.25rem] font-bold mb-[1rem]">
                  Beauty Advance Treatment
                </h2>
                <Image src={DummyService} alt="" className="w-full" />
                <p className="mt-[1rem] text-neutral-80 text-[1.25rem]">
                  Alya Esthetic will take care of your skin. Our various
                  treatment will give the best solutions for every skin. We
                  provide you the latest technology to protect & maintain your
                  skin at its best condition. Do our habits treatment regularly
                  to get your perfect skin.
                </p>
                <div className="mt-[1rem]">
                  <span className="font-semibold text-[1.25rem]">
                    This package includes
                  </span>
                  <ul className="mt-[0.25rem] list-disc ml-[2rem]">
                    <li className="text-neutral-80 text-[1.25rem]">
                      Hydra Facial
                    </li>
                    <li className="text-neutral-80 text-[1.25rem]">
                      Glowing Skin Facial
                    </li>
                    <li className="text-neutral-80 text-[1.25rem]">
                      Hollywood Oxy Peel
                    </li>
                    <li className="text-neutral-80 text-[1.25rem]">
                      Double Caviar Facial
                    </li>
                    <li className="text-neutral-80 text-[1.25rem]">
                      PDT Therapy
                    </li>
                    <li className="text-neutral-80 text-[1.25rem]">
                      Whitening Infusion Series
                    </li>
                  </ul>
                </div>
                <div className="mt-[1rem]">
                  <Link
                    href="service"
                    className="w-full block rounded-full py-[1rem] bg-primary/[0.4] text-center border border-primary shadow shadow-primary text-primary font-semibold text-[1.25rem]"
                  >
                    See More
                  </Link>
                </div>
              </Tab.Panel>
              <Tab.Panel>Content 3</Tab.Panel>
              <Tab.Panel>
                <h2 className="text-neutral-90 text-[2.25rem] font-bold mb-[1rem]">
                  Beauty Advance Treatment
                </h2>
                <Image src={DummyService} alt="" className="w-full" />
                <p className="mt-[1rem] text-neutral-80 text-[1.25rem]">
                  Not only the perfect smile, our customer will get the
                  treatment of personalized health of dental section at Alya
                  Esthetic Center.
                </p>
                <div className="mt-[1rem]">
                  <span className="font-semibold text-[1.25rem]">
                    This package includes
                  </span>
                  <ul className="mt-[0.25rem] list-disc ml-[2rem]">
                    <li className="text-neutral-80 text-[1.25rem]">
                      Pedodonti (Perawatan Gigi Anak)
                    </li>
                    <li className="text-neutral-80 text-[1.25rem]">
                      Endodontic (Perawatan Akar Gigi)
                    </li>
                    <li className="text-neutral-80 text-[1.25rem]">
                      Prostodonti (Perawatan / Pengobatan Gigi terlepas/ rusak)
                    </li>
                    <li className="text-neutral-80 text-[1.25rem]">
                      Bedah Mulut
                    </li>
                    <li className="text-neutral-80 text-[1.25rem]">
                      Periodonti (Perawatan struktur mulut yang berbeda gusi,
                      gigi & tulang)
                    </li>
                  </ul>
                </div>
                <div className="mt-[1rem]">
                  <Link
                    href="service"
                    className="w-full block rounded-full py-[1rem] bg-primary/[0.4] text-center border border-primary shadow shadow-primary text-primary font-semibold text-[1.25rem]"
                  >
                    See More
                  </Link>
                </div>
              </Tab.Panel>
              <Tab.Panel>Content 5</Tab.Panel>
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>

      <div
        className="pl-8 lg:pl-[5rem] pt-[3.125rem] pb-[6.75rem]"
        id="article"
      >
        <h1 className="font-bold text-[2rem] text-neutral-90">ARTICLE</h1>
        <div className="mt-[5rem] relative min-width-[0px]">
          <div className="absolute top-[calc(50%-55px)] right-[64px] z-10 cursor-pointer swiper-button-next rounded-full bg-primary-neutral p-[0.625rem]">
            <Image src={ArrowRight} alt="" className="w-[20px] h-[20px]" />
          </div>
          <div className="absolute top-[calc(50%-53px)] left-4 z-10 cursor-pointer swiper-button-prev rounded-full bg-primary-neutral p-[0.625rem] rotate-180">
            <Image src={ArrowRight} alt="" className="w-[20px] h-[20px]" />
          </div>
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={3}
            spaceBetween={32}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            virtual
            className="flex flex-nowrap"
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
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

      <div className="w-full mt-[1rem] relative pl-8 lg:pl-[5rem] pt-[5.75rem] h-[500px] z-[-1]">
        <Image
          src={TestimonyBg}
          alt=""
          className="absolute top-0 left-0 w-full h-[70vh] md:h-auto object-cover"
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
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: -40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: -50,
            },
          }}
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
                <p className=" md:text-[1.25rem] text-sm color-neutral-70 font-thin mb-[1rem]">
                  {review.text}
                </p>
                <span className="italic font-medium md:text-[1.125rem] text-sm text-neutral-80">
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
