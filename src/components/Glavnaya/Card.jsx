import { t } from "i18next";
import React from "react";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
function Card() {
  return (
    <div className="bg-[#017B65] shadow-lg rounded-xl">
      <div className="rounded-tr-[250px] rounded-xl space-y-5 bg-white px-5 py-10">
        <h1 className="font-bold lg:text-[30px] md:text-[20px]">{t("CardH1")}</h1>
        <p className="text-slate-400 text-[10px] md:text-[15px]">{t("CardP")}</p>
        <button className="hover:text-[#017B65]">
          <CloudOutlinedIcon /> {t("CardButton")} <NavigateNextOutlinedIcon />
        </button>
      </div>
    </div>
  );
}

export default Card;
