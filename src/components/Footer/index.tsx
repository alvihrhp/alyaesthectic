/** Next Image */
import Image, { StaticImageData } from "next/image";
/** Image */
import Logo from "@/assets/logo-and-text.svg";
import IEmail from "@/assets/icon-email-grey.svg";
import IWhatsapp from "@/assets/icon-whatsapp-grey.svg";
import IInstagram from "@/assets/icon-instagram-grey.svg";
import ITiktok from "@/assets/icon-tiktok-grey.svg";
import ArrowUpperRight from "@/assets/arrow-upper-right.svg";
/* Fonts */
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type Link = {
  icon: StaticImageData;
  link: string;
};

export default function Footer() {
  const links: Link[] = [
    {
      icon: IEmail,
      link: "",
    },
    {
      icon: IWhatsapp,
      link: "",
    },
    {
      icon: IInstagram,
      link: "",
    },
    {
      icon: ITiktok,
      link: "",
    },
  ];

  return (
    <div className="w-full py-[3.125rem] px-[5rem] flex flex-wrap justify-between items-center" id="footer">
      <div className="w-[276px]">
        <Image
          src={Logo}
          alt="Logo Alya Estehetic"
          className="w-[206px] mb-[3.25rem]"
        />
        <span
          className={`${inter.className} text-neutral text-[1.25rem] font-normal tracking-[1.2%]`}
        >
          Contact Us
        </span>
        <div className="mt-[1rem] flex flex-wrap gap-[28px]">
          {links.map((link: Link, linkIdx: number) => (
            <Image
              key={linkIdx}
              src={link.icon}
              alt=""
              className="cursor-pointer"
            />
          ))}
        </div>
      </div>
      <div className="w-[350px] flex flex-col items-end">
        <span className="text-[1.25rem]">Our Location</span>
        <h2 className="font-semibold text-[1.75rem] mt-[0.25rem]">
          Visit Our Store
        </h2>
        <div className="flex items-center mt-[1.5rem] cursor-pointer">
          <h3 className="font-bold text-[1.25rem] text-primary mr-[0.5rem]">
            Indonesia, Jakarta
          </h3>
          <div className="rounded-full p-[0.625rem] bg-primary-lighter">
            <Image src={ArrowUpperRight} alt="" />
          </div>
        </div>
        <p className="text-[1.125rem] text-neutral-80 mt-[0.25rem] text-end">
          Jl. Raya Rw. Bambu No.7B, RT.1/RW.7, Ps. Minggu, Kota Jakarta Selatan,
          Daerah Khusus Ibukota Jakarta 12520
        </p>
      </div>
    </div>
  );
}
