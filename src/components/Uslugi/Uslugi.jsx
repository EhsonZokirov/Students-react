import React from "react";
import Card from "../Glavnaya/Card";
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
import finance from "../../images/finance.png";
import learn from "../../images/learn.png";

import { useTranslation } from "react-i18next";

function Uslugi() {
  // TRANSLATE
  const { t, i18n } = useTranslation();
  const changeLanguages = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="py-28">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="m-auto  md:w-[40%] ">
          <img className="m-auto" src={finance} alt="finance" />
          <h1 className="font-bold md:m-0 text-center md:text-start text-[30px]">
            {t("Finance")}
          </h1>
          <p className="text-center md:text-start"> {t("FinanceP")}</p>
        </div>
        <div className="m-auto  md:w-[40%] ">
          <img className="m-auto" src={learn} alt="learn" />
          <h1 className="font-bold md:m-0 text-center md:text-start text-[30px]">
            {t("Education")}
          </h1>
          <p className="text-center md:text-start"> {t("EducationP")}</p>
        </div>
      </div>

      <div className="py-20">
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
      {/*  */}
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
    </div>
  );
}

export default Uslugi;
