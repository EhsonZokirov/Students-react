import React from "react";
import card1 from "../../images/фотка+квадрат.png";
import card2 from "../../images/фотка+квадрат-1.png";
import card3 from "../../images/фотка+квадрат-2.png";
import card4 from "../../images/фотка+квадрат-3.png";
import card5 from "../../images/фотка+квадрат-4.png";
import card6 from "../../images/фотка+квадрат-5.png";
import card7 from "../../images/фотка+квадрат-6.png";
import card8 from "../../images/фотка+квадрат-7.png";
import user from "../../images/user.png";
import stars from "../../images/stars.png";
import { TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

function Portfolio() {
  // TRANSLATE
  const { t, i18n } = useTranslation();
  const changeLanguages = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="self-center text-[40px] font-bold my-40">
          {t("Portfolio")}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:w-[80%] m-auto">
        <div className="m-auto flex flex-wrap md:flex-nowrap px-5 md:p-0 justify-center">
          <img className="md:w-[50%]" src={card1} alt="card" />
          <div className="bg-slate-300 sm:w-[65%] md:w-[80%] text-center md:text-start p-5 space-y-5">
            <h1 className="font-bold md:text-[20px]">{t("PortfolioCard1")}</h1>
            <p className="text-slate-500">{t("PortfolioCard1P")}</p>
            <button className="shadow-sm bg-white shadow-rose-50 rounded-full px-5 py-1">
              {t("buttonCard")}
            </button>
          </div>
        </div>
        <div className="m-auto flex flex-wrap md:flex-nowrap px-5 md:p-0 justify-center">
          <img className="md:w-[50%]" src={card2} alt="card" />
          <div className="bg-slate-300 sm:w-[65%] md:w-[80%] text-center md:text-start p-5 space-y-5">
            <h1 className="font-bold md:text-[20px]">{t("PortfolioCard2")}</h1>
            <p className="text-slate-500">{t("PortfolioCard1P")}</p>
            <button className="shadow-sm bg-white shadow-rose-50 rounded-full px-5 py-1">
              {t("buttonCard")}
            </button>
          </div>
        </div>
        <div className="m-auto flex flex-wrap md:flex-nowrap px-5 md:p-0 justify-center">
          <img className="md:w-[50%]" src={card3} alt="card" />
          <div className="bg-slate-300 sm:w-[65%] md:w-[80%] text-center md:text-start p-5 space-y-5">
            <h1 className="font-bold md:text-[20px]">{t("PortfolioCard3")}</h1>
            <p className="text-slate-500">{t("PortfolioCard1P")}</p>
            <button className="shadow-sm bg-white shadow-rose-50 rounded-full px-5 py-1">
              {t("buttonCard")}
            </button>
          </div>
        </div>
        <div className="m-auto flex flex-wrap md:flex-nowrap px-5 md:p-0 justify-center">
          <img className="md:w-[50%]" src={card4} alt="card" />
          <div className="bg-slate-300 sm:w-[65%] md:w-[80%] text-center md:text-start p-5 space-y-5">
            <h1 className="font-bold md:text-[20px]">{t("PortfolioCard4")}</h1>
            <p className="text-slate-500">{t("PortfolioCard1P")}</p>
            <button className="shadow-sm bg-white shadow-rose-50 rounded-full px-5 py-1">
              {t("buttonCard")}
            </button>
          </div>
        </div>
        <div className="m-auto flex flex-wrap md:flex-nowrap px-5 md:p-0 justify-center">
          <img className="md:w-[50%]" src={card5} alt="card" />
          <div className="bg-slate-300 sm:w-[65%] md:w-[80%] text-center md:text-start p-5 space-y-5">
            <h1 className="font-bold md:text-[20px]">{t("PortfolioCard5")}</h1>
            <p className="text-slate-500">{t("PortfolioCard1P")}</p>
            <button className="shadow-sm bg-white shadow-rose-50 rounded-full px-5 py-1">
              {t("buttonCard")}
            </button>
          </div>
        </div>
        <div className="m-auto flex flex-wrap md:flex-nowrap px-5 md:p-0 justify-center">
          <img className="md:w-[50%]" src={card6} alt="card" />
          <div className="bg-slate-300 sm:w-[65%] md:w-[80%] text-center md:text-start p-5 space-y-5">
            <h1 className="font-bold md:text-[20px]">{t("PortfolioCard6")}</h1>
            <p className="text-slate-500">{t("PortfolioCard1P")}</p>
            <button className="shadow-sm bg-white shadow-rose-50 rounded-full px-5 py-1">
              {t("buttonCard")}
            </button>
          </div>
        </div>
        <div className="m-auto flex flex-wrap md:flex-nowrap px-5 md:p-0 justify-center">
          <img className="md:w-[50%]" src={card7} alt="card" />
          <div className="bg-slate-300 sm:w-[65%] md:w-[80%] text-center md:text-start p-5 space-y-5">
            <h1 className="font-bold md:text-[20px]">{t("PortfolioCard7")}</h1>
            <p className="text-slate-500">{t("PortfolioCard1P")}</p>
            <button className="shadow-sm bg-white shadow-rose-50 rounded-full px-5 py-1">
              {t("buttonCard")}
            </button>
          </div>
        </div>
        <div className="m-auto flex flex-wrap md:flex-nowrap px-5 md:p-0 justify-center">
          <img className="md:w-[50%]" src={card8} alt="card" />
          <div className="bg-slate-300 sm:w-[65%] md:w-[80%] text-center md:text-start p-5 space-y-5">
            <h1 className="font-bold md:text-[20px]">{t("PortfolioCard8")}</h1>
            <p className="text-slate-500">{t("PortfolioCard1P")}</p>
            <button className="shadow-sm bg-white shadow-rose-50 rounded-full px-5 py-1">
              {t("buttonCard")}
            </button>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 my-20">
        <div className=" m-auto md:w-[80%]">
          <div className="  text-center bg-[#027B661A] p-10 space-y-5">
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
    </div>
  );
}

export default Portfolio;
