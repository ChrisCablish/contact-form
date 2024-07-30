"use client";

import Head from "next/head";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Roboto:wght@400;700&display=swap');
        </style>
      </Head>
      <main className="page">
        <ContactForm />
      </main>
    </>
  );
}
