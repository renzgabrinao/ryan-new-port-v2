import React from "react";
import localFont from "next/font/local";

const melodrama = localFont({
  src: "../public/fonts/Melodrama-Variable.ttf",
  variable: "--font-melodrama",
});
const satoshi = localFont({
  src: [
    { path: "../public/fonts/Satoshi-Variable.ttf", style: "normal" },
    { path: "../public/fonts/Satoshi-VariableItalic.ttf", style: "italic" },
  ],
  variable: "--font-satoshi",
});
const neueHaas = localFont({
  src: [
    {
      path: "../public/fonts/NeueHaasDisplayBlack.ttf",
      style: "normal",
      weight: "900",
    },
    {
      path: "../public/fonts/NeueHaasDisplayBlackItalic.ttf",
      style: "italic",
      weight: "900",
    },
    {
      path: "../public/fonts/NeueHaasDisplayMedium.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../public/fonts/NeueHaasDisplayMediumItalic.ttf",
      style: "italic",
      weight: "400",
    },
  ],
  variable: "--font-neuehaas",
});

const FontProvider = ({ children }) => {
  return (
    <div
      className={`bg-primary ${melodrama.variable} ${satoshi.variable} ${neueHaas.variable}`}
    >
      {children}
    </div>
  );
};

export default FontProvider;
