"use client";
import { useState, useRef } from "react";
/** Components */
import SwiperCore, {
  Virtual,
  Navigation,
  Pagination,
  Autoplay,
  FreeMode,
  Thumbs,
} from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { ArticleCard, GreenCard } from "@/components";
/** Next Image */
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
/** Image */
import Logo from "@/assets/logo-and-text.svg";
import ExpertsOne from "@/assets/experts-1.png";
import ExpertsTwo from "@/assets/experts-2.png";
import ExpertsThree from "@/assets/experts-3.png";
import ExpertsFour from "@/assets/experts-4.png";
import ManagementOne from "@/assets/mgt-dummy-1.png";
import ManagementTwo from "@/assets/mgt-dummy-2.png";
import ManagementThree from "@/assets/mgt-dummy-3.png";
import UnitOne from "@/assets/unit-dummy-1.png";
import UnitTwo from "@/assets/unit-dummy-1.png";
import UnitThree from "@/assets/unit-dummy-1.png";
import ArrowRight from "@/assets/arrow-right.svg";
import ArrowUpWhite from "@/assets/arrow-up-white.svg";
import ArrowDownBlack from "@/assets/arrow-down-black.svg";
import ArrowRightBold from "@/assets/arrow-right-bold.svg";
import ArrowLeftBold from "@/assets/arrow-left-bold.svg";
/** Library */
import cx from "classnames";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

type Object = { [key: string]: any };

export default function About() {
  const [swiperRef, setSwiperRef] = useState<any>(null);

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const [companyValues, setCompanyValues] = useState<Object[]>([
    {
      title: "Visi",
      desc: "Alya Esthetic Center is a beauty clinic that prioritizing hospitality, cleanliness and trust in Alya’s Friend. Alya Esthetic will become “one-stop solutions” for Friends of Alya. Alya Esthetic Center will continue to improve service for Alya’s friends for comfort, satisfaction & Friends of Alya’s safety is maintained. Alya Esthetic Center will continue to innovate for improve services for Friends of Alya and become solutions for beauty and health problems in one place.",
      isActive: true,
      iconActive: ArrowUpWhite,
      iconDisactive: ArrowDownBlack,
    },
    {
      title: "Misi",
      desc: "Alya Esthetic Center is a beauty clinic that prioritizing hospitality, cleanliness and trust in Alya’s Friend. Alya Esthetic will become “one-stop solutions” for Friends of Alya. Alya Esthetic Center will continue to improve service for Alya’s friends for comfort, satisfaction & Friends of Alya’s safety is maintained. Alya Esthetic Center will continue to innovate for improve services for Friends of Alya and become solutions for beauty and health problems in one place.",
      isActive: false,
      iconActive: ArrowUpWhite,
      iconDisactive: ArrowDownBlack,
    },
    {
      title: "Value",
      desc: "Alya Esthetic Center is a beauty clinic that prioritizing hospitality, cleanliness and trust in Alya’s Friend. Alya Esthetic will become “one-stop solutions” for Friends of Alya. Alya Esthetic Center will continue to improve service for Alya’s friends for comfort, satisfaction & Friends of Alya’s safety is maintained. Alya Esthetic Center will continue to innovate for improve services for Friends of Alya and become solutions for beauty and health problems in one place.",
      isActive: false,
      iconActive: ArrowUpWhite,
      iconDisactive: ArrowDownBlack,
    },
  ]);

  const [doctors, setDoctors] = useState<Object[]>([
    {
      image: ExpertsOne,
      name: "Ahmad Workman",
      type: "Dokter Kecantikan",
      isActive: false,
      desc: `Lorem ipsum dolor sit amet consectetur. Sed facilisis id vitae facilisis proin ipsum vitae facilisi proin. Ipsum habitant etiam duis fusce nunc curabitur. Lorem facilisi sit cursus quam amet consectetur faucibus diam. Amet porttitor metus sed varius etiam eleifend diam magna.
Arcu mauris mauris cras pellentesque. Fermentum vitae arcu ultrices sed tellus aliquam sollicitudin amet. Massa condimentum pellentesque pharetra tortor facilisi eget diam mattis blandit. Euismod diam tempus urna dignissim rutrum. Habitant a vitae malesuada enim. Amet semper diam enim eleifend nisl sem sed leo amet. Scelerisque nec vel velit aenean senectus viverra a justo. Facilisi magnis blandit quis sem. Sit cras nibh potenti sed sagittis fermentum. In etiam suscipit consectetur scelerisque neque lectus velit enim. Sed lobortis id porttitor ante ullamcorper vitae imperdiet integer gravida. Viverra pharetra volutpat massa ipsum sagittis pharetra id nisi in. Id pulvinar posuere hac sed mattis. Cursus cras ut mi quis lacus aenean id in ullamcorper.
Est pellentesque tristique lobortis pharetra amet pretium est facilisis nullam. Non euismod scelerisque scelerisque vulputate potenti. Orci volutpat faucibus morbi fringilla gravida. Tincidunt sed ipsum euismod urna nam eget adipiscing ultrices fringilla. Eleifend risus morbi nullam feugiat condimentum urna cras sed. Aliquam et ullamcorper magna praesent. Luctus nec sem ornare in egestas adipiscing. Nunc faucibus id eget sagittis. Porta pharetra in orci vestibulum eget vel amet. Laoreet morbi nulla feugiat volutpat.
Purus in dui mi ullamcorper amet tristique nulla. Massa tempus non a aliquet et pellentesque ac. Orci sed tortor ante eu. Dictum consectetur amet tristique gravida id ac quis lectus. Blandit turpis cras eu facilisis senectus euismod pretium sed vulputate. Augue leo laoreet nunc aenean massa. Egestas pulvinar tempor dignissim nunc praesent iaculis. Laoreet mattis a dignissim in amet adipiscing. Sed commodo tellus aliquam euismod. Arcu eget commodo a vitae volutpat sit mauris.`,
    },
    {
      image: ExpertsTwo,
      name: "Angel Dorwart",
      type: "Dokter Kecantikan",
      isActive: false,
      desc: `Lorem ipsum dolor sit amet consectetur. Sed facilisis id vitae facilisis proin ipsum vitae facilisi proin. Ipsum habitant etiam duis fusce nunc curabitur. Lorem facilisi sit cursus quam amet consectetur faucibus diam. Amet porttitor metus sed varius etiam eleifend diam magna.
Arcu mauris mauris cras pellentesque. Fermentum vitae arcu ultrices sed tellus aliquam sollicitudin amet. Massa condimentum pellentesque pharetra tortor facilisi eget diam mattis blandit. Euismod diam tempus urna dignissim rutrum. Habitant a vitae malesuada enim. Amet semper diam enim eleifend nisl sem sed leo amet. Scelerisque nec vel velit aenean senectus viverra a justo. Facilisi magnis blandit quis sem. Sit cras nibh potenti sed sagittis fermentum. In etiam suscipit consectetur scelerisque neque lectus velit enim. Sed lobortis id porttitor ante ullamcorper vitae imperdiet integer gravida. Viverra pharetra volutpat massa ipsum sagittis pharetra id nisi in. Id pulvinar posuere hac sed mattis. Cursus cras ut mi quis lacus aenean id in ullamcorper.
Est pellentesque tristique lobortis pharetra amet pretium est facilisis nullam. Non euismod scelerisque scelerisque vulputate potenti. Orci volutpat faucibus morbi fringilla gravida. Tincidunt sed ipsum euismod urna nam eget adipiscing ultrices fringilla. Eleifend risus morbi nullam feugiat condimentum urna cras sed. Aliquam et ullamcorper magna praesent. Luctus nec sem ornare in egestas adipiscing. Nunc faucibus id eget sagittis. Porta pharetra in orci vestibulum eget vel amet. Laoreet morbi nulla feugiat volutpat.
Purus in dui mi ullamcorper amet tristique nulla. Massa tempus non a aliquet et pellentesque ac. Orci sed tortor ante eu. Dictum consectetur amet tristique gravida id ac quis lectus. Blandit turpis cras eu facilisis senectus euismod pretium sed vulputate. Augue leo laoreet nunc aenean massa. Egestas pulvinar tempor dignissim nunc praesent iaculis. Laoreet mattis a dignissim in amet adipiscing. Sed commodo tellus aliquam euismod. Arcu eget commodo a vitae volutpat sit mauris.`,
    },
    {
      image: ExpertsThree,
      name: "Makena Franci",
      type: "Dokter Kecantikan",
      isActive: false,
      desc: `Lorem ipsum dolor sit amet consectetur. Sed facilisis id vitae facilisis proin ipsum vitae facilisi proin. Ipsum habitant etiam duis fusce nunc curabitur. Lorem facilisi sit cursus quam amet consectetur faucibus diam. Amet porttitor metus sed varius etiam eleifend diam magna.
Arcu mauris mauris cras pellentesque. Fermentum vitae arcu ultrices sed tellus aliquam sollicitudin amet. Massa condimentum pellentesque pharetra tortor facilisi eget diam mattis blandit. Euismod diam tempus urna dignissim rutrum. Habitant a vitae malesuada enim. Amet semper diam enim eleifend nisl sem sed leo amet. Scelerisque nec vel velit aenean senectus viverra a justo. Facilisi magnis blandit quis sem. Sit cras nibh potenti sed sagittis fermentum. In etiam suscipit consectetur scelerisque neque lectus velit enim. Sed lobortis id porttitor ante ullamcorper vitae imperdiet integer gravida. Viverra pharetra volutpat massa ipsum sagittis pharetra id nisi in. Id pulvinar posuere hac sed mattis. Cursus cras ut mi quis lacus aenean id in ullamcorper.
Est pellentesque tristique lobortis pharetra amet pretium est facilisis nullam. Non euismod scelerisque scelerisque vulputate potenti. Orci volutpat faucibus morbi fringilla gravida. Tincidunt sed ipsum euismod urna nam eget adipiscing ultrices fringilla. Eleifend risus morbi nullam feugiat condimentum urna cras sed. Aliquam et ullamcorper magna praesent. Luctus nec sem ornare in egestas adipiscing. Nunc faucibus id eget sagittis. Porta pharetra in orci vestibulum eget vel amet. Laoreet morbi nulla feugiat volutpat.
Purus in dui mi ullamcorper amet tristique nulla. Massa tempus non a aliquet et pellentesque ac. Orci sed tortor ante eu. Dictum consectetur amet tristique gravida id ac quis lectus. Blandit turpis cras eu facilisis senectus euismod pretium sed vulputate. Augue leo laoreet nunc aenean massa. Egestas pulvinar tempor dignissim nunc praesent iaculis. Laoreet mattis a dignissim in amet adipiscing. Sed commodo tellus aliquam euismod. Arcu eget commodo a vitae volutpat sit mauris.`,
    },
    {
      image: ExpertsFour,
      name: "Emerson Vetrovs",
      type: "Dokter Kecantikan",
      isActive: false,
      desc: `Lorem ipsum dolor sit amet consectetur. Sed facilisis id vitae facilisis proin ipsum vitae facilisi proin. Ipsum habitant etiam duis fusce nunc curabitur. Lorem facilisi sit cursus quam amet consectetur faucibus diam. Amet porttitor metus sed varius etiam eleifend diam magna.
Arcu mauris mauris cras pellentesque. Fermentum vitae arcu ultrices sed tellus aliquam sollicitudin amet. Massa condimentum pellentesque pharetra tortor facilisi eget diam mattis blandit. Euismod diam tempus urna dignissim rutrum. Habitant a vitae malesuada enim. Amet semper diam enim eleifend nisl sem sed leo amet. Scelerisque nec vel velit aenean senectus viverra a justo. Facilisi magnis blandit quis sem. Sit cras nibh potenti sed sagittis fermentum. In etiam suscipit consectetur scelerisque neque lectus velit enim. Sed lobortis id porttitor ante ullamcorper vitae imperdiet integer gravida. Viverra pharetra volutpat massa ipsum sagittis pharetra id nisi in. Id pulvinar posuere hac sed mattis. Cursus cras ut mi quis lacus aenean id in ullamcorper.
Est pellentesque tristique lobortis pharetra amet pretium est facilisis nullam. Non euismod scelerisque scelerisque vulputate potenti. Orci volutpat faucibus morbi fringilla gravida. Tincidunt sed ipsum euismod urna nam eget adipiscing ultrices fringilla. Eleifend risus morbi nullam feugiat condimentum urna cras sed. Aliquam et ullamcorper magna praesent. Luctus nec sem ornare in egestas adipiscing. Nunc faucibus id eget sagittis. Porta pharetra in orci vestibulum eget vel amet. Laoreet morbi nulla feugiat volutpat.
Purus in dui mi ullamcorper amet tristique nulla. Massa tempus non a aliquet et pellentesque ac. Orci sed tortor ante eu. Dictum consectetur amet tristique gravida id ac quis lectus. Blandit turpis cras eu facilisis senectus euismod pretium sed vulputate. Augue leo laoreet nunc aenean massa. Egestas pulvinar tempor dignissim nunc praesent iaculis. Laoreet mattis a dignissim in amet adipiscing. Sed commodo tellus aliquam euismod. Arcu eget commodo a vitae volutpat sit mauris.`,
    },
    {
      image: ExpertsOne,
      name: "Ahmad Workman",
      type: "Dokter Kecantikan",
      isActive: false,
      desc: `Lorem ipsum dolor sit amet consectetur. Sed facilisis id vitae facilisis proin ipsum vitae facilisi proin. Ipsum habitant etiam duis fusce nunc curabitur. Lorem facilisi sit cursus quam amet consectetur faucibus diam. Amet porttitor metus sed varius etiam eleifend diam magna.
Arcu mauris mauris cras pellentesque. Fermentum vitae arcu ultrices sed tellus aliquam sollicitudin amet. Massa condimentum pellentesque pharetra tortor facilisi eget diam mattis blandit. Euismod diam tempus urna dignissim rutrum. Habitant a vitae malesuada enim. Amet semper diam enim eleifend nisl sem sed leo amet. Scelerisque nec vel velit aenean senectus viverra a justo. Facilisi magnis blandit quis sem. Sit cras nibh potenti sed sagittis fermentum. In etiam suscipit consectetur scelerisque neque lectus velit enim. Sed lobortis id porttitor ante ullamcorper vitae imperdiet integer gravida. Viverra pharetra volutpat massa ipsum sagittis pharetra id nisi in. Id pulvinar posuere hac sed mattis. Cursus cras ut mi quis lacus aenean id in ullamcorper.
Est pellentesque tristique lobortis pharetra amet pretium est facilisis nullam. Non euismod scelerisque scelerisque vulputate potenti. Orci volutpat faucibus morbi fringilla gravida. Tincidunt sed ipsum euismod urna nam eget adipiscing ultrices fringilla. Eleifend risus morbi nullam feugiat condimentum urna cras sed. Aliquam et ullamcorper magna praesent. Luctus nec sem ornare in egestas adipiscing. Nunc faucibus id eget sagittis. Porta pharetra in orci vestibulum eget vel amet. Laoreet morbi nulla feugiat volutpat.
Purus in dui mi ullamcorper amet tristique nulla. Massa tempus non a aliquet et pellentesque ac. Orci sed tortor ante eu. Dictum consectetur amet tristique gravida id ac quis lectus. Blandit turpis cras eu facilisis senectus euismod pretium sed vulputate. Augue leo laoreet nunc aenean massa. Egestas pulvinar tempor dignissim nunc praesent iaculis. Laoreet mattis a dignissim in amet adipiscing. Sed commodo tellus aliquam euismod. Arcu eget commodo a vitae volutpat sit mauris.`,
    },
    {
      image: ExpertsTwo,
      name: "Angel Dorwart",
      type: "Dokter Kecantikan",
      isActive: false,
      desc: `Lorem ipsum dolor sit amet consectetur. Sed facilisis id vitae facilisis proin ipsum vitae facilisi proin. Ipsum habitant etiam duis fusce nunc curabitur. Lorem facilisi sit cursus quam amet consectetur faucibus diam. Amet porttitor metus sed varius etiam eleifend diam magna.
Arcu mauris mauris cras pellentesque. Fermentum vitae arcu ultrices sed tellus aliquam sollicitudin amet. Massa condimentum pellentesque pharetra tortor facilisi eget diam mattis blandit. Euismod diam tempus urna dignissim rutrum. Habitant a vitae malesuada enim. Amet semper diam enim eleifend nisl sem sed leo amet. Scelerisque nec vel velit aenean senectus viverra a justo. Facilisi magnis blandit quis sem. Sit cras nibh potenti sed sagittis fermentum. In etiam suscipit consectetur scelerisque neque lectus velit enim. Sed lobortis id porttitor ante ullamcorper vitae imperdiet integer gravida. Viverra pharetra volutpat massa ipsum sagittis pharetra id nisi in. Id pulvinar posuere hac sed mattis. Cursus cras ut mi quis lacus aenean id in ullamcorper.
Est pellentesque tristique lobortis pharetra amet pretium est facilisis nullam. Non euismod scelerisque scelerisque vulputate potenti. Orci volutpat faucibus morbi fringilla gravida. Tincidunt sed ipsum euismod urna nam eget adipiscing ultrices fringilla. Eleifend risus morbi nullam feugiat condimentum urna cras sed. Aliquam et ullamcorper magna praesent. Luctus nec sem ornare in egestas adipiscing. Nunc faucibus id eget sagittis. Porta pharetra in orci vestibulum eget vel amet. Laoreet morbi nulla feugiat volutpat.
Purus in dui mi ullamcorper amet tristique nulla. Massa tempus non a aliquet et pellentesque ac. Orci sed tortor ante eu. Dictum consectetur amet tristique gravida id ac quis lectus. Blandit turpis cras eu facilisis senectus euismod pretium sed vulputate. Augue leo laoreet nunc aenean massa. Egestas pulvinar tempor dignissim nunc praesent iaculis. Laoreet mattis a dignissim in amet adipiscing. Sed commodo tellus aliquam euismod. Arcu eget commodo a vitae volutpat sit mauris.`,
    },
    {
      image: ExpertsThree,
      name: "Makena Franci",
      type: "Dokter Kecantikan",
      isActive: false,
      desc: `Lorem ipsum dolor sit amet consectetur. Sed facilisis id vitae facilisis proin ipsum vitae facilisi proin. Ipsum habitant etiam duis fusce nunc curabitur. Lorem facilisi sit cursus quam amet consectetur faucibus diam. Amet porttitor metus sed varius etiam eleifend diam magna.
Arcu mauris mauris cras pellentesque. Fermentum vitae arcu ultrices sed tellus aliquam sollicitudin amet. Massa condimentum pellentesque pharetra tortor facilisi eget diam mattis blandit. Euismod diam tempus urna dignissim rutrum. Habitant a vitae malesuada enim. Amet semper diam enim eleifend nisl sem sed leo amet. Scelerisque nec vel velit aenean senectus viverra a justo. Facilisi magnis blandit quis sem. Sit cras nibh potenti sed sagittis fermentum. In etiam suscipit consectetur scelerisque neque lectus velit enim. Sed lobortis id porttitor ante ullamcorper vitae imperdiet integer gravida. Viverra pharetra volutpat massa ipsum sagittis pharetra id nisi in. Id pulvinar posuere hac sed mattis. Cursus cras ut mi quis lacus aenean id in ullamcorper.
Est pellentesque tristique lobortis pharetra amet pretium est facilisis nullam. Non euismod scelerisque scelerisque vulputate potenti. Orci volutpat faucibus morbi fringilla gravida. Tincidunt sed ipsum euismod urna nam eget adipiscing ultrices fringilla. Eleifend risus morbi nullam feugiat condimentum urna cras sed. Aliquam et ullamcorper magna praesent. Luctus nec sem ornare in egestas adipiscing. Nunc faucibus id eget sagittis. Porta pharetra in orci vestibulum eget vel amet. Laoreet morbi nulla feugiat volutpat.
Purus in dui mi ullamcorper amet tristique nulla. Massa tempus non a aliquet et pellentesque ac. Orci sed tortor ante eu. Dictum consectetur amet tristique gravida id ac quis lectus. Blandit turpis cras eu facilisis senectus euismod pretium sed vulputate. Augue leo laoreet nunc aenean massa. Egestas pulvinar tempor dignissim nunc praesent iaculis. Laoreet mattis a dignissim in amet adipiscing. Sed commodo tellus aliquam euismod. Arcu eget commodo a vitae volutpat sit mauris.`,
    },
    {
      image: ExpertsFour,
      name: "Emerson Vetrovs",
      type: "Dokter Kecantikan",
      isActive: false,
      desc: `Lorem ipsum dolor sit amet consectetur. Sed facilisis id vitae facilisis proin ipsum vitae facilisi proin. Ipsum habitant etiam duis fusce nunc curabitur. Lorem facilisi sit cursus quam amet consectetur faucibus diam. Amet porttitor metus sed varius etiam eleifend diam magna.
Arcu mauris mauris cras pellentesque. Fermentum vitae arcu ultrices sed tellus aliquam sollicitudin amet. Massa condimentum pellentesque pharetra tortor facilisi eget diam mattis blandit. Euismod diam tempus urna dignissim rutrum. Habitant a vitae malesuada enim. Amet semper diam enim eleifend nisl sem sed leo amet. Scelerisque nec vel velit aenean senectus viverra a justo. Facilisi magnis blandit quis sem. Sit cras nibh potenti sed sagittis fermentum. In etiam suscipit consectetur scelerisque neque lectus velit enim. Sed lobortis id porttitor ante ullamcorper vitae imperdiet integer gravida. Viverra pharetra volutpat massa ipsum sagittis pharetra id nisi in. Id pulvinar posuere hac sed mattis. Cursus cras ut mi quis lacus aenean id in ullamcorper.
Est pellentesque tristique lobortis pharetra amet pretium est facilisis nullam. Non euismod scelerisque scelerisque vulputate potenti. Orci volutpat faucibus morbi fringilla gravida. Tincidunt sed ipsum euismod urna nam eget adipiscing ultrices fringilla. Eleifend risus morbi nullam feugiat condimentum urna cras sed. Aliquam et ullamcorper magna praesent. Luctus nec sem ornare in egestas adipiscing. Nunc faucibus id eget sagittis. Porta pharetra in orci vestibulum eget vel amet. Laoreet morbi nulla feugiat volutpat.
Purus in dui mi ullamcorper amet tristique nulla. Massa tempus non a aliquet et pellentesque ac. Orci sed tortor ante eu. Dictum consectetur amet tristique gravida id ac quis lectus. Blandit turpis cras eu facilisis senectus euismod pretium sed vulputate. Augue leo laoreet nunc aenean massa. Egestas pulvinar tempor dignissim nunc praesent iaculis. Laoreet mattis a dignissim in amet adipiscing. Sed commodo tellus aliquam euismod. Arcu eget commodo a vitae volutpat sit mauris.`,
    },
  ]);

  const [managements, setManagements] = useState<Object[]>([
    {
      image: ManagementOne,
      name: "Miracle Franci",
      text: "Manager Operational",
    },
    {
      image: ManagementTwo,
      name: "Kiera P. Arcand",
      text: "Manager Pemasaran",
    },
    {
      image: ManagementThree,
      name: "Allison Korsgaard",
      text: "Manager SDM",
    },
    {
      image: ManagementTwo,
      name: "Kiera P. Arcand",
      text: "Manager Pemasaran",
    },
  ]);

  const units: Object[] = [
    {
      image: UnitOne,
      name: "Miracle Franci",
      type: "Devisi Salon",
    },
    {
      image: UnitTwo,
      name: "Miracle Franci",
      type: "Devisi Salon",
    },
    {
      image: UnitThree,
      name: "Miracle Franci",
      type: "Devisi Salon",
    },
  ];

  const gallerys: string[] = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
    "https://swiperjs.com/demos/images/nature-6.jpg",
    "https://swiperjs.com/demos/images/nature-7.jpg",
    "https://swiperjs.com/demos/images/nature-8.jpg",
    "https://swiperjs.com/demos/images/nature-9.jpg",
    "https://swiperjs.com/demos/images/nature-10.jpg",
  ];

  return (
    <div className="w-full h-full">
      <div className="py-[2rem] lg:px-[5rem] px-[2rem] bg-neutral-ket">
        <h2 className="text-[2rem] font-semibold text-neutral-90">
          ALYA ESTETIC CENTER
        </h2>
        <div className="flex flex-wrap mt-[0.75rem] justify-between items-center">
          <p className="w-full text-xl/[2rem] text-neutral-90">
            Lorem ipsum dolor sit amet consectetur. Neque felis nisi vitae
            ornare est. Ornare cum luctus diam nisl ornare nunc in mattis
            aliquet. Eu faucibus nunc orci proin facilisis rhoncus et et sapien.
            At leo elit accumsan netus viverra sem orci. Malesuada in imperdiet
            etiam suspendisse consectetur non fermentum dui. Pellentesque ipsum
            bibendum velit turpis aliquet quis at.
          </p>
        </div>
      </div>
      <div className="py-[2.5rem] lg:px-[5rem] px-[2rem] lg:flex-row flex-col flex justify-center items-center">
        <Image
          src={Logo}
          alt="alya-estetic-logo"
          className="w-[436px] mr-[1.25rem]"
        />
        <div className="w-full lg:w-[calc(100%-436px)]">
          {companyValues.map((companyValue: Object, companyValueIdx) => (
            <div
              className={cx("w-full", {
                ["mb-[0.75rem]"]:
                  companyValueIdx === 0 && companyValue.isActive,
                ["my-[0.75rem]"]:
                  companyValueIdx === 1 && companyValue.isActive,
                ["mt-[0.75rem]"]:
                  companyValueIdx === 2 && companyValue.isActive,
                ["border-b-[1px]"]: !companyValue.isActive,
              })}
            >
              <div
                key={companyValueIdx}
                className={cx(
                  "p-[0.75rem] w-full bg-primary flex justify-between items-center rounded-tl-[0.75rem] rounded-tr-[0.75rem] drop-shadow-[0_4px_8px_0_rgba(0,0,0,0.10)]",
                  {
                    ["bg-white rounded-none"]: !companyValue.isActive,
                  }
                )}
              >
                <span
                  className={cx("text-[1.5rem]", {
                    ["text-neutral-80 font-normal"]: !companyValue.isActive,
                    ["text-white font-medium"]: companyValue.isActive,
                  })}
                >
                  {companyValue.title}
                </span>
                <Image
                  src={companyValue.isActive ? ArrowUpWhite : ArrowDownBlack}
                  alt=""
                  className="w-[24px] h-[24px] cursor-pointer"
                />
              </div>
              {companyValue.isActive && (
                <div className="p-[0.75rem] w-ful border-x-[1px] border-b-[1px] border-primary rounded-bl-[0.75rem] rounded-br-[0.75rem]">
                  <p className="text-neutral-90">{companyValue.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mt-[2.5rem] lg:px-[5rem] px-[2rem]">
        <h1 className="w-full text-[2rem] text-neutral-90 font-medium pb-[0.75rem] border-b-[4px] border-[#EEEEEE]">
          EXECUTIVE <br /> ALYA ESTHETIC CENTER
        </h1>
        <div className="mt-[2rem]">
          <h3 className="text-neutral-80 font-medium text-[1.625rem]">
            Line of Doctors
          </h3>
          <div className="w-full max-w-[1040px] mx-auto flex flex-wrap justify-center gap-x-[0.8rem] gap-y-[2rem] mt-[1.5rem] pb-[2rem] border-b-[2px] border-[#EEEEEE]">
            {doctors.map((doctor: Object, doctorIdx: number) => (
              <GreenCard
                key={doctorIdx}
                image={doctor.image}
                heading={doctor.name}
                text={doctor.type}
                from="about"
              />
            ))}
          </div>
        </div>
        <div className="mt-[2rem]">
          <h3 className="text-neutral-80 font-medium text-[1.625rem]">
            Management
          </h3>
          <div className="w-full max-w-[1040px] mx-auto flex flex-wrap justify-center gap-x-[0.8rem] gap-y-[2rem] mt-[1.5rem] pb-[2rem] border-b-[2px] border-[#EEEEEE]">
            {managements.map((management: Object, managementIdx: number) => (
              <GreenCard
                key={managementIdx}
                image={management.image}
                heading={management.name}
                text={management.type}
                from="about"
              />
            ))}
          </div>
        </div>
        <div className="mt-[2rem]">
          <h3 className="text-neutral-80 font-medium text-[1.625rem]">Unit</h3>
          <div className="w-full max-w-[1040px] mx-auto flex flex-wrap justify-center mt-[1.5rem] pb-[2rem] relative">
            {/* <div className="absolute top-[calc(50%-55px)] right-[68px] z-10 cursor-pointer swiper-unit-button-next rounded-full bg-primary-neutral p-[0.625rem]">
              <Image src={ArrowRight} alt="" className="w-[20px] h-[20px]" />
            </div>
            <div className="absolute top-[calc(50%-53px)] left-[1px] z-10 cursor-pointer swiper-unit-button-prev rounded-full bg-primary-neutral p-[0.625rem] rotate-180">
              <Image src={ArrowRight} alt="" className="w-[20px] h-[20px]" />
            </div> */}
            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={1}
              spaceBetween={32}
              loop={true}
              navigation={{
                nextEl: ".swiper-unit-button-next",
                prevEl: ".swiper-unit-button-prev",
              }}
              className="flex flex-nowrap"
              wrapperClass="w-[864px] h-[486px]"
            >
              {units.map((unit: Object, unitIdx: number) => (
                <SwiperSlide key={unitIdx} virtualIndex={unitIdx}>
                  <GreenCard
                    image={unit.image}
                    heading={unit.name}
                    text={unit.type}
                    key={unitIdx}
                    widthImage="w-full"
                    heightImage="h-full"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="relative w-full h-full">
        <div className="pt-[2rem] pb-[0.75rem] px-[5rem]">
          <span className="text-neutral-90 font-semibold text-[2rem]">
            MY GALLERY
          </span>
          <div className="absolute top-[calc(50%)] right-[14px] z-10 cursor-pointer swiper-gallery-button-next rounded-full bg-primary-neutral p-[0.625rem]">
            <Image src={ArrowRight} alt="" className="w-[20px] h-[20px]" />
          </div>
          <div className="absolute top-[calc(50%)] left-[14px] z-10 cursor-pointer swiper-gallery-button-prev rounded-full bg-primary-neutral p-[0.625rem] rotate-180">
            <Image src={ArrowRight} alt="" className="w-[20px] h-[20px]" />
          </div>
        </div>
        <Swiper
          spaceBetween={10}
          navigation={{
            nextEl: ".swiper-gallery-button-next",
            prevEl: ".swiper-gallery-button-prev",
          }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          wrapperClass="w-full h-[504px]"
        >
          {gallerys.map((gallery: string, galleryIdx: number) => (
            <SwiperSlide key={galleryIdx}>
              <img src={gallery} className="w-full h-[504px]" />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={(swiper: any) => setThumbsSwiper(swiper)}
          spaceBetween={1}
          slidesPerView={10.5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="w-full"
        >
          {gallerys.map((gallery: string, galleryIdx: number) => (
            <SwiperSlide key={galleryIdx}>
              <img src={gallery} className="cursor-pointer" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
