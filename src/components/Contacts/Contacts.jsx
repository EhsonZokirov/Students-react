import { TextField } from "@mui/material";
import React from "react";
import manzara from "../../images/manzara.png";
import karta from "../../images/karta.png";
import { EmailOutlined, Phone, Telegram, WhatsApp } from "@mui/icons-material";
import { useTranslation } from "react-i18next";


function Contacts() {
  const { t, i18n } = useTranslation();
  const changeLanguages = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="">
      <div className="py-20 ">
        <div className="m-auto grid md:grid-cols-2">
          <div>
            <img className="m-auto" src={karta} alt="" />
          </div>
          <div className="m-auto">
            <div className="m-auto space-y-5">
              <div className="flex gap-5 items-center">
                <div>
                  <Phone />
                </div>
                <div>
                  <h1> +7 (707) 998-93-90</h1>
                  <h1> ​+7 (727) 334-21-45​</h1>
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                  <EmailOutlined />
                </div>
                <div>info@devcloud.kz</div>
              </div>
              <div className="flex gap-5">
                <div className="flex gap-2">
                  <div>
                    <WhatsApp />
                  </div>
                  <div>Whatsapp</div>
                </div>
                <div className="flex gap-2">
                  <div>
                    <Telegram />
                  </div>
                  <div> Telegram </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="grid md:grid-cols-2 py-20">
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

export default Contacts;
