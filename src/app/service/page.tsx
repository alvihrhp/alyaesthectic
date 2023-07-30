"use client";
import {  Fragment, useState, useRef } from "react";
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
import { Dialog, Transition } from '@headlessui/react'
import { ArticleCard, GreenCard } from "@/components";

/** Next Image */
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
/** Image */
import Logo from "@/assets/logo-and-text.svg";
import LogoOnly from "@/assets/logo-only.png";
import ExpertsOne from "@/assets/experts-1.png";
import ExpertsTwo from "@/assets/experts-2.png";
import ExpertsThree from "@/assets/experts-3.png";
import ExpertsFour from "@/assets/experts-4.png";
import DummyService from "@/assets/dummy-service.png";
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

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const [service, setService] = useState<Object[]>([
    {
      image: DummyService,
      name: "Peeling Series",
      isActive: false,
      desc: `Lorem ipsum dolor sit amet consectetur. Sed facilisis id vitae facilisis proin ipsum vitae facilisi proin. Ipsum habitant etiam duis fusce nunc curabitur. Lorem facilisi sit cursus quam amet consectetur faucibus diam. Amet porttitor metus sed varius etiam eleifend diam magna.
Arcu mauris mauris cras pellentesque. Fermentum vitae arcu ultrices sed tellus aliquam sollicitudin amet. Massa condimentum pellentesque pharetra tortor facilisi eget diam mattis blandit. Euismod diam tempus urna dignissim rutrum. Habitant a vitae malesuada enim. Amet semper diam enim eleifend nisl sem sed leo amet. Scelerisque nec vel velit aenean senectus viverra a justo. Facilisi magnis blandit quis sem. Sit cras nibh potenti sed sagittis fermentum. In etiam suscipit consectetur scelerisque neque lectus velit enim. Sed lobortis id porttitor ante ullamcorper vitae imperdiet integer gravida. Viverra pharetra volutpat massa ipsum sagittis pharetra id nisi in. Id pulvinar posuere hac sed mattis. Cursus cras ut mi quis lacus aenean id in ullamcorper.
Est pellentesque tristique lobortis pharetra amet pretium est facilisis nullam. Non euismod scelerisque scelerisque vulputate potenti. Orci volutpat faucibus morbi fringilla gravida. Tincidunt sed ipsum euismod urna nam eget adipiscing ultrices fringilla. Eleifend risus morbi nullam feugiat condimentum urna cras sed. Aliquam et ullamcorper magna praesent. Luctus nec sem ornare in egestas adipiscing. Nunc faucibus id eget sagittis. Porta pharetra in orci vestibulum eget vel amet. Laoreet morbi nulla feugiat volutpat.
Purus in dui mi ullamcorper amet tristique nulla. Massa tempus non a aliquet et pellentesque ac. Orci sed tortor ante eu. Dictum consectetur amet tristique gravida id ac quis lectus. Blandit turpis cras eu facilisis senectus euismod pretium sed vulputate. Augue leo laoreet nunc aenean massa. Egestas pulvinar tempor dignissim nunc praesent iaculis. Laoreet mattis a dignissim in amet adipiscing. Sed commodo tellus aliquam euismod. Arcu eget commodo a vitae volutpat sit mauris.`,
    },
    {
      image: DummyService,
      name: "Kill",
      isActive: false,
      desc: `Lorem ipsum dolor sit amet consectetur. Sed facilisis id vitae facilisis proin ipsum vitae facilisi proin. Ipsum habitant etiam duis fusce nunc curabitur. Lorem facilisi sit cursus quam amet consectetur faucibus diam. Amet porttitor metus sed varius etiam eleifend diam magna.
Arcu mauris mauris cras pellentesque. Fermentum vitae arcu ultrices sed tellus aliquam sollicitudin amet. Massa condimentum pellentesque pharetra tortor facilisi eget diam mattis blandit. Euismod diam tempus urna dignissim rutrum. Habitant a vitae malesuada enim. Amet semper diam enim eleifend nisl sem sed leo amet. Scelerisque nec vel velit aenean senectus viverra a justo. Facilisi magnis blandit quis sem. Sit cras nibh potenti sed sagittis fermentum. In etiam suscipit consectetur scelerisque neque lectus velit enim. Sed lobortis id porttitor ante ullamcorper vitae imperdiet integer gravida. Viverra pharetra volutpat massa ipsum sagittis pharetra id nisi in. Id pulvinar posuere hac sed mattis. Cursus cras ut mi quis lacus aenean id in ullamcorper.
Est pellentesque tristique lobortis pharetra amet pretium est facilisis nullam. Non euismod scelerisque scelerisque vulputate potenti. Orci volutpat faucibus morbi fringilla gravida. Tincidunt sed ipsum euismod urna nam eget adipiscing ultrices fringilla. Eleifend risus morbi nullam feugiat condimentum urna cras sed. Aliquam et ullamcorper magna praesent. Luctus nec sem ornare in egestas adipiscing. Nunc faucibus id eget sagittis. Porta pharetra in orci vestibulum eget vel amet. Laoreet morbi nulla feugiat volutpat.
Purus in dui mi ullamcorper amet tristique nulla. Massa tempus non a aliquet et pellentesque ac. Orci sed tortor ante eu. Dictum consectetur amet tristique gravida id ac quis lectus. Blandit turpis cras eu facilisis senectus euismod pretium sed vulputate. Augue leo laoreet nunc aenean massa. Egestas pulvinar tempor dignissim nunc praesent iaculis. Laoreet mattis a dignissim in amet adipiscing. Sed commodo tellus aliquam euismod. Arcu eget commodo a vitae volutpat sit mauris.`,
    },
    {
      image: DummyService,
      name: "Cauter",
      isActive: false,
      desc: `Lorem ipsum dolor sit amet consectetur. Sed facilisis id vitae facilisis proin ipsum vitae facilisi proin. Ipsum habitant etiam duis fusce nunc curabitur. Lorem facilisi sit cursus quam amet consectetur faucibus diam. Amet porttitor metus sed varius etiam eleifend diam magna.
Arcu mauris mauris cras pellentesque. Fermentum vitae arcu ultrices sed tellus aliquam sollicitudin amet. Massa condimentum pellentesque pharetra tortor facilisi eget diam mattis blandit. Euismod diam tempus urna dignissim rutrum. Habitant a vitae malesuada enim. Amet semper diam enim eleifend nisl sem sed leo amet. Scelerisque nec vel velit aenean senectus viverra a justo. Facilisi magnis blandit quis sem. Sit cras nibh potenti sed sagittis fermentum. In etiam suscipit consectetur scelerisque neque lectus velit enim. Sed lobortis id porttitor ante ullamcorper vitae imperdiet integer gravida. Viverra pharetra volutpat massa ipsum sagittis pharetra id nisi in. Id pulvinar posuere hac sed mattis. Cursus cras ut mi quis lacus aenean id in ullamcorper.
Est pellentesque tristique lobortis pharetra amet pretium est facilisis nullam. Non euismod scelerisque scelerisque vulputate potenti. Orci volutpat faucibus morbi fringilla gravida. Tincidunt sed ipsum euismod urna nam eget adipiscing ultrices fringilla. Eleifend risus morbi nullam feugiat condimentum urna cras sed. Aliquam et ullamcorper magna praesent. Luctus nec sem ornare in egestas adipiscing. Nunc faucibus id eget sagittis. Porta pharetra in orci vestibulum eget vel amet. Laoreet morbi nulla feugiat volutpat.
Purus in dui mi ullamcorper amet tristique nulla. Massa tempus non a aliquet et pellentesque ac. Orci sed tortor ante eu. Dictum consectetur amet tristique gravida id ac quis lectus. Blandit turpis cras eu facilisis senectus euismod pretium sed vulputate. Augue leo laoreet nunc aenean massa. Egestas pulvinar tempor dignissim nunc praesent iaculis. Laoreet mattis a dignissim in amet adipiscing. Sed commodo tellus aliquam euismod. Arcu eget commodo a vitae volutpat sit mauris.`,
    },
    {
      image: DummyService,
      name: "Dermal Filler / cc",
      isActive: false,
      desc: `Lorem ipsum dolor sit amet consectetur. Sed facilisis id vitae facilisis proin ipsum vitae facilisi proin. Ipsum habitant etiam duis fusce nunc curabitur. Lorem facilisi sit cursus quam amet consectetur faucibus diam. Amet porttitor metus sed varius etiam eleifend diam magna.
Arcu mauris mauris cras pellentesque. Fermentum vitae arcu ultrices sed tellus aliquam sollicitudin amet. Massa condimentum pellentesque pharetra tortor facilisi eget diam mattis blandit. Euismod diam tempus urna dignissim rutrum. Habitant a vitae malesuada enim. Amet semper diam enim eleifend nisl sem sed leo amet. Scelerisque nec vel velit aenean senectus viverra a justo. Facilisi magnis blandit quis sem. Sit cras nibh potenti sed sagittis fermentum. In etiam suscipit consectetur scelerisque neque lectus velit enim. Sed lobortis id porttitor ante ullamcorper vitae imperdiet integer gravida. Viverra pharetra volutpat massa ipsum sagittis pharetra id nisi in. Id pulvinar posuere hac sed mattis. Cursus cras ut mi quis lacus aenean id in ullamcorper.
Est pellentesque tristique lobortis pharetra amet pretium est facilisis nullam. Non euismod scelerisque scelerisque vulputate potenti. Orci volutpat faucibus morbi fringilla gravida. Tincidunt sed ipsum euismod urna nam eget adipiscing ultrices fringilla. Eleifend risus morbi nullam feugiat condimentum urna cras sed. Aliquam et ullamcorper magna praesent. Luctus nec sem ornare in egestas adipiscing. Nunc faucibus id eget sagittis. Porta pharetra in orci vestibulum eget vel amet. Laoreet morbi nulla feugiat volutpat.
Purus in dui mi ullamcorper amet tristique nulla. Massa tempus non a aliquet et pellentesque ac. Orci sed tortor ante eu. Dictum consectetur amet tristique gravida id ac quis lectus. Blandit turpis cras eu facilisis senectus euismod pretium sed vulputate. Augue leo laoreet nunc aenean massa. Egestas pulvinar tempor dignissim nunc praesent iaculis. Laoreet mattis a dignissim in amet adipiscing. Sed commodo tellus aliquam euismod. Arcu eget commodo a vitae volutpat sit mauris.`,
    },
    {
      image: DummyService,
      name: "Thread Lift - Nose / 10 Thread",
      isActive: false,
      desc: `Lorem ipsum dolor sit amet consectetur. Sed facilisis id vitae facilisis proin ipsum vitae facilisi proin. Ipsum habitant etiam duis fusce nunc curabitur. Lorem facilisi sit cursus quam amet consectetur faucibus diam. Amet porttitor metus sed varius etiam eleifend diam magna.
Arcu mauris mauris cras pellentesque. Fermentum vitae arcu ultrices sed tellus aliquam sollicitudin amet. Massa condimentum pellentesque pharetra tortor facilisi eget diam mattis blandit. Euismod diam tempus urna dignissim rutrum. Habitant a vitae malesuada enim. Amet semper diam enim eleifend nisl sem sed leo amet. Scelerisque nec vel velit aenean senectus viverra a justo. Facilisi magnis blandit quis sem. Sit cras nibh potenti sed sagittis fermentum. In etiam suscipit consectetur scelerisque neque lectus velit enim. Sed lobortis id porttitor ante ullamcorper vitae imperdiet integer gravida. Viverra pharetra volutpat massa ipsum sagittis pharetra id nisi in. Id pulvinar posuere hac sed mattis. Cursus cras ut mi quis lacus aenean id in ullamcorper.
Est pellentesque tristique lobortis pharetra amet pretium est facilisis nullam. Non euismod scelerisque scelerisque vulputate potenti. Orci volutpat faucibus morbi fringilla gravida. Tincidunt sed ipsum euismod urna nam eget adipiscing ultrices fringilla. Eleifend risus morbi nullam feugiat condimentum urna cras sed. Aliquam et ullamcorper magna praesent. Luctus nec sem ornare in egestas adipiscing. Nunc faucibus id eget sagittis. Porta pharetra in orci vestibulum eget vel amet. Laoreet morbi nulla feugiat volutpat.
Purus in dui mi ullamcorper amet tristique nulla. Massa tempus non a aliquet et pellentesque ac. Orci sed tortor ante eu. Dictum consectetur amet tristique gravida id ac quis lectus. Blandit turpis cras eu facilisis senectus euismod pretium sed vulputate. Augue leo laoreet nunc aenean massa. Egestas pulvinar tempor dignissim nunc praesent iaculis. Laoreet mattis a dignissim in amet adipiscing. Sed commodo tellus aliquam euismod. Arcu eget commodo a vitae volutpat sit mauris.`,
    },
    {
      image: DummyService,
      name: "Thread Lift - V Shape",
      isActive: false,
      desc: `Lorem ipsum dolor sit amet consectetur. Sed facilisis id vitae facilisis proin ipsum vitae facilisi proin. Ipsum habitant etiam duis fusce nunc curabitur. Lorem facilisi sit cursus quam amet consectetur faucibus diam. Amet porttitor metus sed varius etiam eleifend diam magna.
Arcu mauris mauris cras pellentesque. Fermentum vitae arcu ultrices sed tellus aliquam sollicitudin amet. Massa condimentum pellentesque pharetra tortor facilisi eget diam mattis blandit. Euismod diam tempus urna dignissim rutrum. Habitant a vitae malesuada enim. Amet semper diam enim eleifend nisl sem sed leo amet. Scelerisque nec vel velit aenean senectus viverra a justo. Facilisi magnis blandit quis sem. Sit cras nibh potenti sed sagittis fermentum. In etiam suscipit consectetur scelerisque neque lectus velit enim. Sed lobortis id porttitor ante ullamcorper vitae imperdiet integer gravida. Viverra pharetra volutpat massa ipsum sagittis pharetra id nisi in. Id pulvinar posuere hac sed mattis. Cursus cras ut mi quis lacus aenean id in ullamcorper.
Est pellentesque tristique lobortis pharetra amet pretium est facilisis nullam. Non euismod scelerisque scelerisque vulputate potenti. Orci volutpat faucibus morbi fringilla gravida. Tincidunt sed ipsum euismod urna nam eget adipiscing ultrices fringilla. Eleifend risus morbi nullam feugiat condimentum urna cras sed. Aliquam et ullamcorper magna praesent. Luctus nec sem ornare in egestas adipiscing. Nunc faucibus id eget sagittis. Porta pharetra in orci vestibulum eget vel amet. Laoreet morbi nulla feugiat volutpat.
Purus in dui mi ullamcorper amet tristique nulla. Massa tempus non a aliquet et pellentesque ac. Orci sed tortor ante eu. Dictum consectetur amet tristique gravida id ac quis lectus. Blandit turpis cras eu facilisis senectus euismod pretium sed vulputate. Augue leo laoreet nunc aenean massa. Egestas pulvinar tempor dignissim nunc praesent iaculis. Laoreet mattis a dignissim in amet adipiscing. Sed commodo tellus aliquam euismod. Arcu eget commodo a vitae volutpat sit mauris.`,
    },
    {
      image: DummyService,
      name: "Botox",
      isActive: false,
      desc: `Lorem ipsum dolor sit amet consectetur. Sed facilisis id vitae facilisis proin ipsum vitae facilisi proin. Ipsum habitant etiam duis fusce nunc curabitur. Lorem facilisi sit cursus quam amet consectetur faucibus diam. Amet porttitor metus sed varius etiam eleifend diam magna.
Arcu mauris mauris cras pellentesque. Fermentum vitae arcu ultrices sed tellus aliquam sollicitudin amet. Massa condimentum pellentesque pharetra tortor facilisi eget diam mattis blandit. Euismod diam tempus urna dignissim rutrum. Habitant a vitae malesuada enim. Amet semper diam enim eleifend nisl sem sed leo amet. Scelerisque nec vel velit aenean senectus viverra a justo. Facilisi magnis blandit quis sem. Sit cras nibh potenti sed sagittis fermentum. In etiam suscipit consectetur scelerisque neque lectus velit enim. Sed lobortis id porttitor ante ullamcorper vitae imperdiet integer gravida. Viverra pharetra volutpat massa ipsum sagittis pharetra id nisi in. Id pulvinar posuere hac sed mattis. Cursus cras ut mi quis lacus aenean id in ullamcorper.
Est pellentesque tristique lobortis pharetra amet pretium est facilisis nullam. Non euismod scelerisque scelerisque vulputate potenti. Orci volutpat faucibus morbi fringilla gravida. Tincidunt sed ipsum euismod urna nam eget adipiscing ultrices fringilla. Eleifend risus morbi nullam feugiat condimentum urna cras sed. Aliquam et ullamcorper magna praesent. Luctus nec sem ornare in egestas adipiscing. Nunc faucibus id eget sagittis. Porta pharetra in orci vestibulum eget vel amet. Laoreet morbi nulla feugiat volutpat.
Purus in dui mi ullamcorper amet tristique nulla. Massa tempus non a aliquet et pellentesque ac. Orci sed tortor ante eu. Dictum consectetur amet tristique gravida id ac quis lectus. Blandit turpis cras eu facilisis senectus euismod pretium sed vulputate. Augue leo laoreet nunc aenean massa. Egestas pulvinar tempor dignissim nunc praesent iaculis. Laoreet mattis a dignissim in amet adipiscing. Sed commodo tellus aliquam euismod. Arcu eget commodo a vitae volutpat sit mauris.`,
    },
    {
      image: DummyService,
      name: "Vampire Facial",
      isActive: false,
      desc: `Lorem ipsum dolor sit amet consectetur. Sed facilisis id vitae facilisis proin ipsum vitae facilisi proin. Ipsum habitant etiam duis fusce nunc curabitur. Lorem facilisi sit cursus quam amet consectetur faucibus diam. Amet porttitor metus sed varius etiam eleifend diam magna.
Arcu mauris mauris cras pellentesque. Fermentum vitae arcu ultrices sed tellus aliquam sollicitudin amet. Massa condimentum pellentesque pharetra tortor facilisi eget diam mattis blandit. Euismod diam tempus urna dignissim rutrum. Habitant a vitae malesuada enim. Amet semper diam enim eleifend nisl sem sed leo amet. Scelerisque nec vel velit aenean senectus viverra a justo. Facilisi magnis blandit quis sem. Sit cras nibh potenti sed sagittis fermentum. In etiam suscipit consectetur scelerisque neque lectus velit enim. Sed lobortis id porttitor ante ullamcorper vitae imperdiet integer gravida. Viverra pharetra volutpat massa ipsum sagittis pharetra id nisi in. Id pulvinar posuere hac sed mattis. Cursus cras ut mi quis lacus aenean id in ullamcorper.
Est pellentesque tristique lobortis pharetra amet pretium est facilisis nullam. Non euismod scelerisque scelerisque vulputate potenti. Orci volutpat faucibus morbi fringilla gravida. Tincidunt sed ipsum euismod urna nam eget adipiscing ultrices fringilla. Eleifend risus morbi nullam feugiat condimentum urna cras sed. Aliquam et ullamcorper magna praesent. Luctus nec sem ornare in egestas adipiscing. Nunc faucibus id eget sagittis. Porta pharetra in orci vestibulum eget vel amet. Laoreet morbi nulla feugiat volutpat.
Purus in dui mi ullamcorper amet tristique nulla. Massa tempus non a aliquet et pellentesque ac. Orci sed tortor ante eu. Dictum consectetur amet tristique gravida id ac quis lectus. Blandit turpis cras eu facilisis senectus euismod pretium sed vulputate. Augue leo laoreet nunc aenean massa. Egestas pulvinar tempor dignissim nunc praesent iaculis. Laoreet mattis a dignissim in amet adipiscing. Sed commodo tellus aliquam euismod. Arcu eget commodo a vitae volutpat sit mauris.`,
    },
    {
      image: DummyService,
      name: "Alya Derm Recovery",
      isActive: false,
      desc: `Lorem ipsum dolor sit amet consectetur. Sed facilisis id vitae facilisis proin ipsum vitae facilisi proin. Ipsum habitant etiam duis fusce nunc curabitur. Lorem facilisi sit cursus quam amet consectetur faucibus diam. Amet porttitor metus sed varius etiam eleifend diam magna.
Arcu mauris mauris cras pellentesque. Fermentum vitae arcu ultrices sed tellus aliquam sollicitudin amet. Massa condimentum pellentesque pharetra tortor facilisi eget diam mattis blandit. Euismod diam tempus urna dignissim rutrum. Habitant a vitae malesuada enim. Amet semper diam enim eleifend nisl sem sed leo amet. Scelerisque nec vel velit aenean senectus viverra a justo. Facilisi magnis blandit quis sem. Sit cras nibh potenti sed sagittis fermentum. In etiam suscipit consectetur scelerisque neque lectus velit enim. Sed lobortis id porttitor ante ullamcorper vitae imperdiet integer gravida. Viverra pharetra volutpat massa ipsum sagittis pharetra id nisi in. Id pulvinar posuere hac sed mattis. Cursus cras ut mi quis lacus aenean id in ullamcorper.
Est pellentesque tristique lobortis pharetra amet pretium est facilisis nullam. Non euismod scelerisque scelerisque vulputate potenti. Orci volutpat faucibus morbi fringilla gravida. Tincidunt sed ipsum euismod urna nam eget adipiscing ultrices fringilla. Eleifend risus morbi nullam feugiat condimentum urna cras sed. Aliquam et ullamcorper magna praesent. Luctus nec sem ornare in egestas adipiscing. Nunc faucibus id eget sagittis. Porta pharetra in orci vestibulum eget vel amet. Laoreet morbi nulla feugiat volutpat.
Purus in dui mi ullamcorper amet tristique nulla. Massa tempus non a aliquet et pellentesque ac. Orci sed tortor ante eu. Dictum consectetur amet tristique gravida id ac quis lectus. Blandit turpis cras eu facilisis senectus euismod pretium sed vulputate. Augue leo laoreet nunc aenean massa. Egestas pulvinar tempor dignissim nunc praesent iaculis. Laoreet mattis a dignissim in amet adipiscing. Sed commodo tellus aliquam euismod. Arcu eget commodo a vitae volutpat sit mauris.`,
    },
    {
      image: DummyService,
      name: "Skin Booster",
      isActive: false,
      desc: `Lorem ipsum dolor sit amet consectetur. Sed facilisis id vitae facilisis proin ipsum vitae facilisi proin. Ipsum habitant etiam duis fusce nunc curabitur. Lorem facilisi sit cursus quam amet consectetur faucibus diam. Amet porttitor metus sed varius etiam eleifend diam magna.
Arcu mauris mauris cras pellentesque. Fermentum vitae arcu ultrices sed tellus aliquam sollicitudin amet. Massa condimentum pellentesque pharetra tortor facilisi eget diam mattis blandit. Euismod diam tempus urna dignissim rutrum. Habitant a vitae malesuada enim. Amet semper diam enim eleifend nisl sem sed leo amet. Scelerisque nec vel velit aenean senectus viverra a justo. Facilisi magnis blandit quis sem. Sit cras nibh potenti sed sagittis fermentum. In etiam suscipit consectetur scelerisque neque lectus velit enim. Sed lobortis id porttitor ante ullamcorper vitae imperdiet integer gravida. Viverra pharetra volutpat massa ipsum sagittis pharetra id nisi in. Id pulvinar posuere hac sed mattis. Cursus cras ut mi quis lacus aenean id in ullamcorper.
Est pellentesque tristique lobortis pharetra amet pretium est facilisis nullam. Non euismod scelerisque scelerisque vulputate potenti. Orci volutpat faucibus morbi fringilla gravida. Tincidunt sed ipsum euismod urna nam eget adipiscing ultrices fringilla. Eleifend risus morbi nullam feugiat condimentum urna cras sed. Aliquam et ullamcorper magna praesent. Luctus nec sem ornare in egestas adipiscing. Nunc faucibus id eget sagittis. Porta pharetra in orci vestibulum eget vel amet. Laoreet morbi nulla feugiat volutpat.
Purus in dui mi ullamcorper amet tristique nulla. Massa tempus non a aliquet et pellentesque ac. Orci sed tortor ante eu. Dictum consectetur amet tristique gravida id ac quis lectus. Blandit turpis cras eu facilisis senectus euismod pretium sed vulputate. Augue leo laoreet nunc aenean massa. Egestas pulvinar tempor dignissim nunc praesent iaculis. Laoreet mattis a dignissim in amet adipiscing. Sed commodo tellus aliquam euismod. Arcu eget commodo a vitae volutpat sit mauris.`,
    },
    {
      image: DummyService,
      name: "Cristal Skin Booste",
      isActive: false,
      desc: `Lorem ipsum dolor sit amet consectetur. Sed facilisis id vitae facilisis proin ipsum vitae facilisi proin. Ipsum habitant etiam duis fusce nunc curabitur. Lorem facilisi sit cursus quam amet consectetur faucibus diam. Amet porttitor metus sed varius etiam eleifend diam magna.
Arcu mauris mauris cras pellentesque. Fermentum vitae arcu ultrices sed tellus aliquam sollicitudin amet. Massa condimentum pellentesque pharetra tortor facilisi eget diam mattis blandit. Euismod diam tempus urna dignissim rutrum. Habitant a vitae malesuada enim. Amet semper diam enim eleifend nisl sem sed leo amet. Scelerisque nec vel velit aenean senectus viverra a justo. Facilisi magnis blandit quis sem. Sit cras nibh potenti sed sagittis fermentum. In etiam suscipit consectetur scelerisque neque lectus velit enim. Sed lobortis id porttitor ante ullamcorper vitae imperdiet integer gravida. Viverra pharetra volutpat massa ipsum sagittis pharetra id nisi in. Id pulvinar posuere hac sed mattis. Cursus cras ut mi quis lacus aenean id in ullamcorper.
Est pellentesque tristique lobortis pharetra amet pretium est facilisis nullam. Non euismod scelerisque scelerisque vulputate potenti. Orci volutpat faucibus morbi fringilla gravida. Tincidunt sed ipsum euismod urna nam eget adipiscing ultrices fringilla. Eleifend risus morbi nullam feugiat condimentum urna cras sed. Aliquam et ullamcorper magna praesent. Luctus nec sem ornare in egestas adipiscing. Nunc faucibus id eget sagittis. Porta pharetra in orci vestibulum eget vel amet. Laoreet morbi nulla feugiat volutpat.
Purus in dui mi ullamcorper amet tristique nulla. Massa tempus non a aliquet et pellentesque ac. Orci sed tortor ante eu. Dictum consectetur amet tristique gravida id ac quis lectus. Blandit turpis cras eu facilisis senectus euismod pretium sed vulputate. Augue leo laoreet nunc aenean massa. Egestas pulvinar tempor dignissim nunc praesent iaculis. Laoreet mattis a dignissim in amet adipiscing. Sed commodo tellus aliquam euismod. Arcu eget commodo a vitae volutpat sit mauris.`,
    },
    {
      image: DummyService,
      name: "Hybrid",
      isActive: false,
      desc: `Lorem ipsum dolor sit amet consectetur. Sed facilisis id vitae facilisis proin ipsum vitae facilisi proin. Ipsum habitant etiam duis fusce nunc curabitur. Lorem facilisi sit cursus quam amet consectetur faucibus diam. Amet porttitor metus sed varius etiam eleifend diam magna.
Arcu mauris mauris cras pellentesque. Fermentum vitae arcu ultrices sed tellus aliquam sollicitudin amet. Massa condimentum pellentesque pharetra tortor facilisi eget diam mattis blandit. Euismod diam tempus urna dignissim rutrum. Habitant a vitae malesuada enim. Amet semper diam enim eleifend nisl sem sed leo amet. Scelerisque nec vel velit aenean senectus viverra a justo. Facilisi magnis blandit quis sem. Sit cras nibh potenti sed sagittis fermentum. In etiam suscipit consectetur scelerisque neque lectus velit enim. Sed lobortis id porttitor ante ullamcorper vitae imperdiet integer gravida. Viverra pharetra volutpat massa ipsum sagittis pharetra id nisi in. Id pulvinar posuere hac sed mattis. Cursus cras ut mi quis lacus aenean id in ullamcorper.
Est pellentesque tristique lobortis pharetra amet pretium est facilisis nullam. Non euismod scelerisque scelerisque vulputate potenti. Orci volutpat faucibus morbi fringilla gravida. Tincidunt sed ipsum euismod urna nam eget adipiscing ultrices fringilla. Eleifend risus morbi nullam feugiat condimentum urna cras sed. Aliquam et ullamcorper magna praesent. Luctus nec sem ornare in egestas adipiscing. Nunc faucibus id eget sagittis. Porta pharetra in orci vestibulum eget vel amet. Laoreet morbi nulla feugiat volutpat.
Purus in dui mi ullamcorper amet tristique nulla. Massa tempus non a aliquet et pellentesque ac. Orci sed tortor ante eu. Dictum consectetur amet tristique gravida id ac quis lectus. Blandit turpis cras eu facilisis senectus euismod pretium sed vulputate. Augue leo laoreet nunc aenean massa. Egestas pulvinar tempor dignissim nunc praesent iaculis. Laoreet mattis a dignissim in amet adipiscing. Sed commodo tellus aliquam euismod. Arcu eget commodo a vitae volutpat sit mauris.`,
    },
    {
      image: DummyService,
      name: "HIFU - Chin",
      isActive: false,
      desc: `Lorem ipsum dolor sit amet consectetur. Sed facilisis id vitae facilisis proin ipsum vitae facilisi proin. Ipsum habitant etiam duis fusce nunc curabitur. Lorem facilisi sit cursus quam amet consectetur faucibus diam. Amet porttitor metus sed varius etiam eleifend diam magna.
Arcu mauris mauris cras pellentesque. Fermentum vitae arcu ultrices sed tellus aliquam sollicitudin amet. Massa condimentum pellentesque pharetra tortor facilisi eget diam mattis blandit. Euismod diam tempus urna dignissim rutrum. Habitant a vitae malesuada enim. Amet semper diam enim eleifend nisl sem sed leo amet. Scelerisque nec vel velit aenean senectus viverra a justo. Facilisi magnis blandit quis sem. Sit cras nibh potenti sed sagittis fermentum. In etiam suscipit consectetur scelerisque neque lectus velit enim. Sed lobortis id porttitor ante ullamcorper vitae imperdiet integer gravida. Viverra pharetra volutpat massa ipsum sagittis pharetra id nisi in. Id pulvinar posuere hac sed mattis. Cursus cras ut mi quis lacus aenean id in ullamcorper.
Est pellentesque tristique lobortis pharetra amet pretium est facilisis nullam. Non euismod scelerisque scelerisque vulputate potenti. Orci volutpat faucibus morbi fringilla gravida. Tincidunt sed ipsum euismod urna nam eget adipiscing ultrices fringilla. Eleifend risus morbi nullam feugiat condimentum urna cras sed. Aliquam et ullamcorper magna praesent. Luctus nec sem ornare in egestas adipiscing. Nunc faucibus id eget sagittis. Porta pharetra in orci vestibulum eget vel amet. Laoreet morbi nulla feugiat volutpat.
Purus in dui mi ullamcorper amet tristique nulla. Massa tempus non a aliquet et pellentesque ac. Orci sed tortor ante eu. Dictum consectetur amet tristique gravida id ac quis lectus. Blandit turpis cras eu facilisis senectus euismod pretium sed vulputate. Augue leo laoreet nunc aenean massa. Egestas pulvinar tempor dignissim nunc praesent iaculis. Laoreet mattis a dignissim in amet adipiscing. Sed commodo tellus aliquam euismod. Arcu eget commodo a vitae volutpat sit mauris.`,
    },
    {
      image: DummyService,
      name: "HIFU - Full Face",
      isActive: false,
      desc: `Lorem ipsum dolor sit amet consectetur. Sed facilisis id vitae facilisis proin ipsum vitae facilisi proin. Ipsum habitant etiam duis fusce nunc curabitur. Lorem facilisi sit cursus quam amet consectetur faucibus diam. Amet porttitor metus sed varius etiam eleifend diam magna.
Arcu mauris mauris cras pellentesque. Fermentum vitae arcu ultrices sed tellus aliquam sollicitudin amet. Massa condimentum pellentesque pharetra tortor facilisi eget diam mattis blandit. Euismod diam tempus urna dignissim rutrum. Habitant a vitae malesuada enim. Amet semper diam enim eleifend nisl sem sed leo amet. Scelerisque nec vel velit aenean senectus viverra a justo. Facilisi magnis blandit quis sem. Sit cras nibh potenti sed sagittis fermentum. In etiam suscipit consectetur scelerisque neque lectus velit enim. Sed lobortis id porttitor ante ullamcorper vitae imperdiet integer gravida. Viverra pharetra volutpat massa ipsum sagittis pharetra id nisi in. Id pulvinar posuere hac sed mattis. Cursus cras ut mi quis lacus aenean id in ullamcorper.
Est pellentesque tristique lobortis pharetra amet pretium est facilisis nullam. Non euismod scelerisque scelerisque vulputate potenti. Orci volutpat faucibus morbi fringilla gravida. Tincidunt sed ipsum euismod urna nam eget adipiscing ultrices fringilla. Eleifend risus morbi nullam feugiat condimentum urna cras sed. Aliquam et ullamcorper magna praesent. Luctus nec sem ornare in egestas adipiscing. Nunc faucibus id eget sagittis. Porta pharetra in orci vestibulum eget vel amet. Laoreet morbi nulla feugiat volutpat.
Purus in dui mi ullamcorper amet tristique nulla. Massa tempus non a aliquet et pellentesque ac. Orci sed tortor ante eu. Dictum consectetur amet tristique gravida id ac quis lectus. Blandit turpis cras eu facilisis senectus euismod pretium sed vulputate. Augue leo laoreet nunc aenean massa. Egestas pulvinar tempor dignissim nunc praesent iaculis. Laoreet mattis a dignissim in amet adipiscing. Sed commodo tellus aliquam euismod. Arcu eget commodo a vitae volutpat sit mauris.`,
    },
    {
      image: DummyService,
      name: "HIFU - Full Face & Chin",
      isActive: false,
      desc: `Lorem ipsum dolor sit amet consectetur. Sed facilisis id vitae facilisis proin ipsum vitae facilisi proin. Ipsum habitant etiam duis fusce nunc curabitur. Lorem facilisi sit cursus quam amet consectetur faucibus diam. Amet porttitor metus sed varius etiam eleifend diam magna.
Arcu mauris mauris cras pellentesque. Fermentum vitae arcu ultrices sed tellus aliquam sollicitudin amet. Massa condimentum pellentesque pharetra tortor facilisi eget diam mattis blandit. Euismod diam tempus urna dignissim rutrum. Habitant a vitae malesuada enim. Amet semper diam enim eleifend nisl sem sed leo amet. Scelerisque nec vel velit aenean senectus viverra a justo. Facilisi magnis blandit quis sem. Sit cras nibh potenti sed sagittis fermentum. In etiam suscipit consectetur scelerisque neque lectus velit enim. Sed lobortis id porttitor ante ullamcorper vitae imperdiet integer gravida. Viverra pharetra volutpat massa ipsum sagittis pharetra id nisi in. Id pulvinar posuere hac sed mattis. Cursus cras ut mi quis lacus aenean id in ullamcorper.
Est pellentesque tristique lobortis pharetra amet pretium est facilisis nullam. Non euismod scelerisque scelerisque vulputate potenti. Orci volutpat faucibus morbi fringilla gravida. Tincidunt sed ipsum euismod urna nam eget adipiscing ultrices fringilla. Eleifend risus morbi nullam feugiat condimentum urna cras sed. Aliquam et ullamcorper magna praesent. Luctus nec sem ornare in egestas adipiscing. Nunc faucibus id eget sagittis. Porta pharetra in orci vestibulum eget vel amet. Laoreet morbi nulla feugiat volutpat.
Purus in dui mi ullamcorper amet tristique nulla. Massa tempus non a aliquet et pellentesque ac. Orci sed tortor ante eu. Dictum consectetur amet tristique gravida id ac quis lectus. Blandit turpis cras eu facilisis senectus euismod pretium sed vulputate. Augue leo laoreet nunc aenean massa. Egestas pulvinar tempor dignissim nunc praesent iaculis. Laoreet mattis a dignissim in amet adipiscing. Sed commodo tellus aliquam euismod. Arcu eget commodo a vitae volutpat sit mauris.`,
    },
  ]);

  return (
    <div className="w-full h-full">
      <div className="py-[2rem] px-8 lg:px-[5rem] flex justify-between items-center">
        <div className="flex flex-col">
          <h2 className="text-[2rem] font-semibold text-neutral-90">
            Beauty Advance Treatment
          </h2>
          <p className="text-xl/[2rem] text-neutral-90">
            Alya Esthetic have a special various treatment for rejuvenation. We will helps to get the preferable skin for every skin. We provide with high maintenance tools and our products to use daily.
          </p>
        </div>
        <Image
          src={LogoOnly}
          alt="alya-estetic-logo"
          className="hidden w-40 md:block"
        />
      </div>
      <div className="w-full mt-[2.5rem] px-8 lg:px-[5rem]">
        <div className="mt-[2rem]">
          <div className="w-full max-w-[1040px] mx-auto flex flex-wrap justify-center gap-x-[0.8rem] gap-y-[2rem] mt-[1.5rem] pb-[2rem] border-b-[2px]">
            {/* <div className="fixed inset-0 flex items-center justify-center">
              <button
                type="button"
                onClick={openModal}
                className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                Open dialog
              </button>
            </div> */}

            {service.map((service: Object, serviceIdx: number) => (
              <div key={serviceIdx}>
                <a href="#" onClick={openModal}>
                  <GreenCard
                    image={service.image}
                    heading={service.name}
                    text={service.type}
                    from="about"
                  />
                </a>
                <Transition appear show={isOpen} as={Fragment}>
                  <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-80"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-80"
                      leaveTo="opacity-0"
                    >
                      <div className="fixed inset-0 bg-black bg-opacity-80" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                      <div className="flex items-center justify-center min-h-full p-4 text-center">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                        <div className="fixed inset-0 overflow-y-auto">
                          {/* Container to center the panel */}
                          <div className="flex items-center justify-center min-h-full p-6">
                            <Dialog.Panel className="flex w-full max-w-3xl overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl max-h-[50vh] rounded-2xl">
                              <div className="w-[40%] bg-white p-3">
                                <div>
                                  <Image
                                    src={service.image}
                                    alt=""
                                    className="rounded-t-lg border-[1px] h-48 border-[#DCDCDC] object-cover mb-4"
                                  />
                                    <p className="text-sm text-[#8E8E8E]">Jenis Treatment</p>
                                    <p className="text-lg bold">Peeling Series</p>
                                </div>
                                <div className="mt-4">
                                <button
                                  type="button"
                                  className="py-[1rem] px-[1.5rem] bg-primary rounded-full w-full text-white text-lg/[1.5rem] font-semibold"
                                >
                                  Booking
                                </button>
                                </div>
                              </div>
                              <Dialog.Description className="text-base bg-neutral-ket w-[60%] p-8 overflow-auto">
                                {service.desc}
                              </Dialog.Description>
                            </Dialog.Panel>
                          </div>
                        </div>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}
