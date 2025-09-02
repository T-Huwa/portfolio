// import "@/styles/globals.css";
// //import { Inter } from "next/font/google";
// import type React from "react";
// import "./globals.css";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className="dark">
//       <body>{children}</body>
//     </html>
//   );
// }

import "@/styles/globals.css";
import type React from "react";
import { Poppins } from "next/font/google";
import "./globals.css";

// Configure Poppins with fallbacks
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // pick what you need
  variable: "--font-poppins", // allows using it in Tailwind
  display: "swap", // prevents invisible text during load
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} dark`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
