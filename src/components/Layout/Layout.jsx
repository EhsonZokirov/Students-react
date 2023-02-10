import React from "react";
import logo from "../../images/ЛОГО.png";
import logo2 from "../../images/ЛОГО ФУТЕРА.png";
import { Link, Outlet } from "react-router-dom";
import {
  EmailOutlined,
  Menu,
  Phone,
  Telegram,
  WhatsApp,
} from "@mui/icons-material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import Ru from "../../images/Russia.png";
import Brit from "../../images/Britannia.png";

import { useTranslation } from "react-i18next";
import { IconButton } from "@mui/material";

function Layout() {
  // TRANSLATE
  const { t, i18n } = useTranslation();
  const changeLanguages = (language) => {
    i18n.changeLanguage(language);
  };
  
  // MenuBAR
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Главная ", "Услуги ", "Как мы работаем", "Портфолио "].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List>
        {["О нас", "Контакты"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  // MenuBAR
  return (
    <div>
      <header className="">
        <nav className="flex justify-between px-5 md:grid md:grid-cols-2 w-[100%] gap-5 items-center bg-[#29a28c46] py-2  fixed backdrop-blur-[3px] container ">
          <div className="">
            <img className="m-auto" src={logo} alt="logo" />
          </div>
          <ul className="sm:flex items-center flex-wrap justify-evenly gap-5 text-white hidden ">
            <li className="hover:text-slate-900 cursor-pointer">
              <Link to="/Glavnaya">{t("Home")}</Link>
            </li>
            <li className="hover:text-slate-900 cursor-pointer">
              <Link to="/Uslugi"> {t("Uslugi")} </Link>
            </li>
            <li className="hover:text-slate-900 cursor-pointer">
              <Link to="/Working"> {t("Work")} </Link>
            </li>
            <li className="hover:text-slate-900 cursor-pointer">
              <Link to="/Portfolio"> {t("Portfolio")} </Link>
            </li>
            <li className="hover:text-slate-900 cursor-pointer">
              <Link to="/About"> {t("About")}</Link>
            </li>
            <li className="hover:text-slate-900 cursor-pointer">
              <Link to="/Contacts"> {t("Contacts")}</Link>
            </li>
            <div className="flex items-center">
              <IconButton
                sx={{ width: "40px" }}
                color="inherit"
                onClick={() => {
                  changeLanguages("En");
                }}
              >
                <img src={Brit} alt="Brit" />
              </IconButton>
              <IconButton
                sx={{ width: "40px" }}
                color="inherit"
                onClick={() => {
                  changeLanguages("Ru");
                }}
              >
                <img src={Ru} alt="Ru" />
              </IconButton>
            </div>
          </ul>
          <div className="flex text-white sm:hidden">
            <div>
              {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button onClick={toggleDrawer(anchor, true)}>
                    <Menu sx={{ color: "white" }} />
                  </Button>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <Outlet />

      <footer className="grid md:grid-cols-4 p-10">
        <div className="m-auto space-y-5">
          <img src={logo2} alt="logoFOOTER" />
          <p className="text-center">{t("Almaty")}</p>
        </div>
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
        <div className="m-auto space-y-5">
          <h1 className="hover:text-slate-400">
            <Link to="/Glavnaya"> {t("Home")}</Link>
          </h1>
          <h1 className="hover:text-slate-400">
            <Link to="/Portfolio"> {t("Portfolio")} </Link>
          </h1>
          <h1 className="hover:text-slate-400">
            <Link to="/Uslugi"> {t("Uslugi")}</Link>
          </h1>
        </div>
        <div className="m-auto space-y-5">
          <h1 className="hover:text-slate-400">
            <Link to="/Working"> {t("Process")} </Link>
          </h1>
          <h1 className="hover:text-slate-400">
            <Link to="/About"> {t("About")} </Link>
          </h1>
          <h1 className="hover:text-slate-400">
            <Link to="/Contacts"> {t("Contacts")} </Link>
          </h1>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
