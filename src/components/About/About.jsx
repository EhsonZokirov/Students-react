import { TextField } from "@mui/material";
import React from "react";
import about from "../../images/about.png";
import manzara from "../../images/manzara.png";
import { useTranslation } from "react-i18next";
import masterskaya from "../../images/masterskaya.png";
import img1 from "../../images/ценности1.png";
import img2 from "../../images/ценности2png.png";
import DoneIcon from "@mui/icons-material/Done";
function About() {
  // TRANSLATE
  const { t, i18n } = useTranslation();
  const changeLanguages = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <div className="grid md:grid-cols-2 md:py-20">
        <div className="">
          <img className="m-auto" src={about} alt="talpacha" />
        </div>
        <div className="text-center md:w-[60%] my-10 m-auto md:space-y-10 space-y-10">
          <h1 className="text-[20px] md:text-[35px] font-bold ">
            {t("About")}
          </h1>
          <p className="m-auto">{t("AboutP")}</p>
          <button className="bg-black text-white px-10 py-2 rounded-full">
            {t("ButtonBg")}
          </button>
          <p className="text-slate-400 text-[10px]">{t("GarantPGrey")}</p>
        </div>
      </div>
      {/* роцесс работы */}
      <div>
        <div>
          <h1 className="text-center font-bold text-[30px] my-20">
            {t("Process")}
          </h1>
        </div>
        <div className="flex justify-evenly m-auto md:flex-row-reverse md:w-[80%] md:flex-nowrap flex-wrap  my-20">
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
      </div>
      {/*  */}
      <div className="flex flex-wrap  justify-evenly">
        <div className=" md:w-[50%]">
          <img className="m-auto" src={img1} alt="cenn" />
        </div>
        <ul className="space-y-5 px-2 md:space-y-24 m-auto md:text-[20px]">
          <li>
            <DoneIcon color="success" /> {t("client")}
          </li>
          <li>
            <DoneIcon color="success" />
            {t("await")}
          </li>
          <li>
            <DoneIcon color="success" />
            {t("result")}
          </li>
        </ul>
      </div>
      {/*  */}
      <div className="flex flex-wrap flex-row-reverse my-20 justify-evenly">
        <div className=" md:w-[50%]">
          <img className="m-auto" src={img2} alt="cenn" />
        </div>
        <ul className="space-y-5 px-2 md:space-y-24 m-auto md:text-[20px]">
          <li>
            <DoneIcon color="success" /> {t("client")}
          </li>
          <li>
            <DoneIcon color="success" />
            {t("await")}
          </li>
          <li>
            <DoneIcon color="success" />
            {t("result")}
          </li>
        </ul>
      </div>
      <div className="grid md:grid-cols-2 my-20">
        <div className="">
          <img className="m-auto" src={manzara} alt="manzara" />
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

export default About;
