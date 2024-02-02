
import {Lato } from "next/font/google";
import "../globals.css";

// const lato = Lato({ subsets: ["latin"],weight:['400','700'] });   // changing font
import { headers } from "next/headers";
import AsideElement from "@/components/AsideDashboard/AsideEliment";



export default function AppTamplate({ children,...reat}) {
    // console.log(arguments)
    const headersList=headers();
    const url=headersList.get('next-url');
    console.log(url)


  return (
    <html lang="en">
      <body className="flex">
        <AsideElement className=""/>
        {children}
      </body>
    </html>
  );
}
