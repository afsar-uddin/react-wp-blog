import Head from "next/head";
import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
// import Image from "next/image";


export default function Home() {
  return (
    <>
      <Head>
        <title key="pagetitle">Afsar.me</title>
        <meta name="description" content="afsar.me blog site" key="metadescription" />
      </Head>
      <div className="min-h-screen relative">
        <div className="min-h-screen relative bg-cover bg-center" style={{ backgroundImage: "url('/bg.jpg')" }}>
          <div className="absolute bg-slate-900 inset-0 z-0 opacity-40">
            <SiteHeader className="z-10 relative" />
            <main>
              <div className="min-h-[50vh] flex flex-col items-center justify-center z-10 relative">
                <h1 className="text-6xl text-center text-slate-100">Welcome to afsar.me <span className="text-yellow-400">Blog</span></h1>
                <div className="mt-8">
                  <Link href="/blog" className="text-3xl text-slate-100 border py-2 px-3 hover:bg-yellow-300 transition relative">Read Blog</Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
