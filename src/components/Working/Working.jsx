import React from "react";
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

import turism from "../../images/turism.png";
import setting from "../../images/setting.png";
import finance from "../../images/finance.png";
import learn from "../../images/learn.png";

import { useTranslation } from "react-i18next";

function Working() {
  // TRANSLATE
  const { t, i18n } = useTranslation();
  const changeLanguages = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="py-20">
      <div>
        <h1 className="text-center font-bold text-[50px]">{t("Наш опыт")}</h1>
      </div>
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
      {/*  */}
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
      {/*  */}
    </div>
  );
}

export default Working;
