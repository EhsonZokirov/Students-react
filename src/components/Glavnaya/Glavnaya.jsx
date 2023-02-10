import React from "react";
import "./glavnaya.css";
import talpacha from "../../images/talpacha1.png";
import cardUslugi from "../../images/услуги кард.png";
import book3 from "../../images/book3.png";
import masterskaya from "../../images/masterskaya.png";
import react from "../../images/React.png";
import X from "../../images/X.png";
import java from "../../images/JAVA.png";
import c from "../../images/c#.png";
import python from "../../images/python.png";
import lastochka from "../../images/lastochka.png";
import sql from "../../images/SQL.png";
import js from "../../images/JS.png";
import com from "../../images/COM.png";
import vue from "../../images/VUE.png";
import html from "../../images/HTML.png";
import css from "../../images/CSS.png";
import obj from "../../images/OBJ-c.png";
import filSql from "../../images/PostgreSQL.png";
import wpf from "../../images/WPF.png";
import mySql from "../../images/mySQL.png";
import turism from "../../images/turism.png";
import setting from "../../images/setting.png";
import finance from "../../images/finance.png";
import learn from "../../images/learn.png";
import brand1 from "../../images/brand 1.png";
import brand2 from "../../images/brand 2.png";
import brand3 from "../../images/brand 3.png";
import brand4 from "../../images/brand 4.png";
import brand5 from "../../images/brand 5.png";
import brand6 from "../../images/brand 6.png";
import brand7 from "../../images/brand 7.png";
import brand8 from "../../images/brand 8.png";
import brand9 from "../../images/brand 9.png";
import brand10 from "../../images/brand 10.png";
import brand11 from "../../images/brand 11.png";
import brand12 from "../../images/brand 12.png";
import user from "../../images/user.png";
import stars from "../../images/stars.png";
import { TextField } from "@mui/material";
import Card from "./Card";

import { useTranslation } from "react-i18next";
function Glavnaya() {
  // TRANSLATE
  const { t, i18n } = useTranslation();
  const changeLanguages = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <div className="bg1 md:grid">
        <div className="grid pt-40 md:p-0 ">
          <h1 className="text-white md:w-[50%] text-[20px]  my-20 md:text-[50px] font-extralight md:m-auto m-auto text-center ">
            {t("bgH1")}
          </h1>
          <div className="m-auto">
            <button className=" flex justify-center bg-[#00997d6e] text-white px-5 py-2 rounded-full">
              {t("ButtonBg")}
            </button>
          </div>
        </div>
      </div>
      {/* section 1 */}
      <div className="grid gap-5 md:my-28 grid-cols-2 md:grid-cols-4 m-auto md:w-[80%] text-center">
        <div className=" border-r-4 pr-5  border-green-500 m-auto ">
          <h1 className="font-bold text-[40px]">98%</h1>
          <h1>{t("Foizs")}</h1>
        </div>
        <div className=" md:border-r-4 pr-5  border-green-500 m-auto ">
          <h1 className="font-bold text-[40px]">30</h1>
          <h1>{t("Foizs")}</h1>
        </div>
        <div className=" border-r-4 pr-5  border-green-500 m-auto ">
          <h1 className="font-bold text-[40px]">5+</h1>
          <h1>{t("Foizs")}</h1>
        </div>
        <div className=" border-green-500 m-auto ">
          <h1 className="font-bold text-[40px]">+20%</h1>
          <h1>{t("Foizs")}</h1>
        </div>
      </div>
      <div className="grid md:grid-cols-2 ">
        <div className="">
          <img className="m-auto" src={talpacha} alt="talpacha" />
        </div>
        <div className="text-center md:w-[60%] my-10 m-auto md:space-y-20 space-y-10">
          <h1 className="text-[20px] md:text-[35px] font-bold ">
            {t("Garant")}
          </h1>
          <p className="w-[60%] m-auto">{t("GarantP")}</p>
          <button className="bg-black text-white px-10 py-2 rounded-full">
            {t("ButtonBg")}
          </button>
          <p className="text-slate-400 text-[10px]">{t("GarantPGrey")}</p>
        </div>
      </div>
      {/* section 1 */}
      {/* section 2 */}
      <div className="my-20">
        <h1 className="text-center font-bold text-[30px]">{t("H1uslugi")}</h1>
        <div className="grid md:grid-cols-3 my-20 gap-10">
          <div className="m-auto w-[90%] md:w-[80%]">
            <Card />
          </div>
          <div className="m-auto w-[90%] md:w-[80%]">
            <Card />
          </div>
          <div className="m-auto w-[90%] md:w-[80%]">
            <Card />
          </div>
        </div>
      </div>
      {/* section 2 */}
      {/* section 3 */}
      <div>
        <h1 className="text-center font-bold text-[30px] my-20">
          {t("Projects")}
        </h1>
      </div>
      <div className="grid md:grid-cols-2 my-20">
        <div className="">
          <img className="m-auto" src={book3} alt="book3" />
        </div>
        <div className="text-center md:w-[60%] my-10 m-auto md:space-y-10 space-y-10">
          <h1 className="text-[20px] md:text-[30px] font-bold ">
            {t("ProjectsPhotoBook")}
          </h1>
          <p className="w-[60%] m-auto">{t("ProjectsPhotoBookP")}</p>
          <button className="bg-black text-white px-10 py-2 rounded-full">
            {t("ButtonBg")}
          </button>
          <p className="text-slate-400 text-[10px]">{t("GarantPGrey")}</p>
        </div>
      </div>
      {/* section 3 */}
      {/* section 4 */}
      <div>
        <h1 className="text-center font-bold text-[30px] my-20">
          {t("Process")}
        </h1>
      </div>
      <div className="grid md:grid-cols-2 my-20">
        <div className="">
          <img className="m-auto" src={masterskaya} alt="masterskaya" />
        </div>
        <div className="text-center md:w-[60%] my-10 m-auto md:space-y-10 space-y-10">
          <h1 className="text-[20px] md:text-[30px] font-bold ">
            {t("Masterskaya")}
          </h1>
          <p className="w-[60%] m-auto">{t("MasterskayaP")}</p>
          <button className="bg-black text-white px-10 py-2 rounded-full">
            {t("ButtonBg")}
          </button>
          <p className="text-slate-400 text-[10px]">{t("GarantPGrey")}</p>
        </div>
      </div>
      {/* section 4 */}
      {/* section 5 */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 md:grid-cols-9">
        <div className="m-auto">
          <img src={react} alt="react" />
        </div>
        <div className="m-auto">
          <img src={X} alt="X" />
        </div>
        <div className="m-auto">
          <img src={java} alt="java" />
        </div>
        <div className="m-auto">
          <img src={c} alt="c#" />
        </div>
        <div className="m-auto">
          <img src={python} alt="python" />
        </div>
        <div className="m-auto">
          <img src={lastochka} alt="lastochka" />
        </div>
        <div className="m-auto">
          <img src={sql} alt="sql" />
        </div>
        <div className="m-auto">
          <img src={js} alt="js" />
        </div>
        <div className="m-auto">
          <img src={com} alt="com" />
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 md:grid-cols-7">
        <div className="m-auto">
          <img src={vue} alt="vue" />
        </div>
        <div className="m-auto">
          <img src={html} alt="html" />
        </div>
        <div className="m-auto">
          <img src={css} alt="css" />
        </div>
        <div className="m-auto">
          <img src={obj} alt="obj" />
        </div>
        <div className="m-auto">
          <img src={filSql} alt="fil Sql" />
        </div>
        <div className="m-auto">
          <img src={wpf} alt="wpf" />
        </div>
        <div className="m-auto">
          <img src={mySql} alt="mySql" />
        </div>
      </div>
      {/* section 5 */}
      {/* section 6 */}
      <div className="grid gap-10 md:grid-cols-4 my-20">
        <div className="m-auto w-[80%]">
          <img src={turism} alt="turism" />
          <h1 className="font-bold text-[30px]">{t("Tourism")}</h1>
          <p>{t("TourismP")}</p>
        </div>
        <div className="m-auto w-[80%]">
          <img src={setting} alt="setting" />
          <h1 className="font-bold text-[30px]">{t("Building")}</h1>
          <p>{t("BuildingP")}</p>
        </div>
        <div className="m-auto w-[80%]">
          <img src={finance} alt="finance" />
          <h1 className="font-bold text-[30px]">{t("Finance")}</h1>
          <p>{t("FinanceP")}</p>
        </div>
        <div className="m-auto w-[80%]">
          <img src={learn} alt="learn" />
          <h1 className="font-bold text-[30px]">{t("Education")}</h1>
          <p>{t("EducationP")}</p>
        </div>
      </div>
      {/* section 6 */}
      {/* section 7 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
        <div className="m-auto">
          <img src={brand1} alt="" />
        </div>
        <div className="m-auto">
          <img src={brand2} alt="" />
        </div>
        <div className="m-auto">
          <img src={brand3} alt="" />
        </div>
        <div className="m-auto">
          <img src={brand4} alt="" />
        </div>
        <div className="m-auto">
          <img src={brand5} alt="" />
        </div>
        <div className="m-auto">
          <img src={brand6} alt="" />
        </div>
        <div className="m-auto">
          <img src={brand7} alt="" />
        </div>
        <div className="m-auto">
          <img src={brand8} alt="" />
        </div>
        <div className="m-auto">
          <img src={brand9} alt="" />
        </div>
        <div className="m-auto">
          <img src={brand10} alt="" />
        </div>
        <div className="m-auto">
          <img src={brand11} alt="" />
        </div>
        <div className="m-auto">
          <img src={brand12} alt="" />
        </div>
      </div>
      {/* section 7 */}
      {/* section 8 */}
      <div className="grid md:grid-cols-2 gap-5 my-20">
        <div className=" m-auto md:w-[80%]">
          <div className=" text-center bg-[#027B661A] p-10 space-y-5">
            <img className="m-auto" src={user} alt="user" />
            <h1 className="font-bold text-[25px]">{t("User")}</h1>
            <h3>{t("Director")}</h3>
            <p className="text-slate-400 md:w-[50%] m-auto ">
              {t("DirectorP")}
            </p>
            <img className="m-auto" src={stars} alt="stars" />
            <p>21.06.20</p>
          </div>
        </div>
        <div className="px-10 py-5 text-white grid grid-cols-1  m-auto bg-gradient-to-r from-[#1B7F6D] to-[#25BA9F] space-y-10">
          <h1 className="font-bold text-[30px] md:text-[50px] text-center ">
            {t("Ask")}
          </h1>
          <TextField variant="standard" label={t("Name")} />
          <TextField variant="standard" label={t("Email")} />
          <TextField variant="standard" label={t("Phone")} />
          <TextField multiline label={t("Message")} />
        </div>
      </div>
      {/* section 8 */}
    </div>
  );
}

export default Glavnaya;
