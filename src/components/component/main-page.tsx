/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet, SheetClose } from "@/components/ui/sheet"
import ContactPage from "../contact/contact";
export function MainPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="w-[90%] p-[15px] rounded-[5px] fixed top-[5%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-90 z-10 px-4 lg:px-6 h-14 flex items-center bg-[#e8f5e9] ">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <BeefIcon className="h-6 w-6 text-[#4caf50] " />
          <span className="text-[#4caf50] p-2 font-bold text-xl">Sauvage Com</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center text-[#4caf50]">
          
          <div className="hidden lg:flex">
           
            <Link className="text-sm font-medium hover:underline underline-offset- mx-5" href="#about">
              À Propos
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4 mx-5" href="#services">
              Services
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset- mx-5" href="#projects">
              Projets
            </Link>
        
            <Link className="text-sm font-medium hover:underline underline-offset- mx-5" href="#contact">
              Contact
            </Link>
          </div>
        </nav>
        <Sheet>
            <SheetTrigger asChild>
              <Button className="md:hidden" size="icon" variant="ghost">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only  ">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full max-w-xs bg-gray-100  p-6" side="right">
              <div className="flex flex-col gap-6">
                <SheetClose asChild>
              <Link className="font-medium hover:text-gray-900 " href="#about">
                  À propos
                </Link>
                
                </SheetClose>
                <SheetClose asChild>
                <Link className="font-medium hover:text-gray-900 " href="#services">
                  Services
                </Link>
                </SheetClose>
                <SheetClose asChild>
                <Link className="font-medium hover:text-gray-900 " href="#projects">
                  Projets
                </Link>
                </SheetClose>
                <SheetClose asChild>
                <Link className="font-medium hover:text-gray-900 " href="#contact">
                  Contact
                </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
      </header>
      <main className="flex-1">
        <section className="flex justify-center pt-40 w-full py-12 md:py-24 lg:py-32 bg-[#e8f5e9] ">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#2e7d32]">
                    Sauvage Com, votre partenaire de décoration d&apos;intérieur
                  </h1>
                  <p className="max-w-[600px] text-[#388e3c] md:text-xl ">
                    Découvrez notre expertise en design d&apos;intérieur et laissez-nous transformer votre espace en un havre
                    de beauté et de confort.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#services"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#2e7d32] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#1b5e20] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2e7d32] disabled:pointer-events-none disabled:opacity-50  "
                    prefetch={false}
                  >
                    Nos services
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex h-10 items-center justify-center rounded-md border  border-[#2e7d32] bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[#c8e6c9] hover:text-[#2e7d32] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2e7d32] disabled:pointer-events-none disabled:opacity-50  "
                    prefetch={false}
                  >
                    Contactez-nous
                  </Link>
                </div>
              </div>
              <img
                src="/intro.webp"
                width="550"
                height="550"
                alt="Accueil"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section id="about" className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-[#ffffff] ">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#2e7d32]">
                    À propos de Sauvage Com
                  </h2>
                  <p className="max-w-[600px] text-[#388e3c] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                    Sauvage Com est une entreprise de décoration d&apos;intérieur passionnée par la création d&apos;espaces
                    uniques et harmonieux. Depuis plus de 10 ans, notre équipe d&apos;experts en design travaille avec soin
                    pour transformer les rêves de nos clients en réalité.
                  </p>
                </div>
               
              </div>
              <img
                src="/about.webp"
                width="550"
                height="310"
                alt="À propos"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-first"
              />
            </div>
          </div>
        </section>
        <section id="services" className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-[#e8f5e9] ">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#2e7d32]">Nos services</h2>
                <p className="max-w-[900px] text-[#388e3c] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                  Chez Sauvage Com, nous offrons une gamme complète de services de décoration d&apos;intérieur pour
                  transformer votre espace en un véritable havre de beauté et de confort.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/services.jpeg"
                width="550"
                height="310"
                alt="Services"
                className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-[#2e7d32]">Conception d&apos;intérieur</h3>
                      <p className="text-[#388e3c] ">
                        Nos designers créent des espaces uniques et fonctionnels qui reflètent votre style de vie.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-[#2e7d32]">Aménagement d&apos;espace</h3>
                      <p className="text-[#388e3c] ">
                        Nous optimisons l&apos;utilisation de votre espace pour maximiser le confort et la fonctionnalité.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-[#2e7d32]">Décoration sur-mesure</h3>
                      <p className="text-[#388e3c] ">
                        Nos experts en décoration créent des solutions personnalisées pour refléter votre style unique.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-[#ffffff] ">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#2e7d32]">Nos projets réalisés</h2>
                <p className="max-w-[900px] text-[#388e3c] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                  Découvrez une sélection de nos projets les plus inspirants, réalisés avec soin pour nos clients.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
               
                <img
                  src="/livingroom.jpeg"
                  alt="Projet 1"
                  width={500}
                  height={400}
                  className="object-cover w-full h-64"
                />
                <div className="bg-[#ffffff] p-4 ">
                  <h3 className="font-bold text-xl text-[#2e7d32]">Salon cocooning</h3>
                  <p className="text-sm text-[#388e3c] ">Espace de détente et de confort</p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              
                <img
                  src="/kitchen.jpeg"
                  alt="Projet 2"
                  width={500}
                  height={400}
                  className="object-cover w-full h-64"
                />
                <div className="bg-[#ffffff] p-4 ">
                  <h3 className="font-bold text-xl text-[#2e7d32]">Cuisine moderne</h3>
                  <p className="text-sm text-[#388e3c] ">Design épuré et fonctionnel</p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
               
                <img
                  src="/bedroom.jpeg"
                  alt="Projet 3"
                  width={500}
                  height={400}
                  className="object-cover w-full h-64"
                />
                <div className="bg-[#ffffff] p-4 ">
                  <h3 className="font-bold text-xl text-[#2e7d32]">Chambre d&apos;enfant</h3>
                  <p className="text-sm text-[#388e3c] ">Espace ludique et créatif</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-[#e8f5e9] border-t">
        <div className="container px-4 md:px-6 space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#388e3c]">Contactez-nous</h2>
            <p className="max-w-[700px] mx-auto text-[#388e3c] md:text-xl">
              Vous avez une question ou vous êtes intéressé par nos services ? Remplissez le formulaire ci-dessous et
              l&apos;un de nos experts vous recontactera.
            </p>
            <ContactPage />
          </div>
        </section>
      
      </main>
      <footer className=" flex items-center flex-col md:flex-row py-8  text-[#388e3c] bg-[#e8f5e9] font-bold text-xl">
          <div className=" mx-auto px-4 md:px-6 flex flex-col md:flex-column items-center justify-between">
          <p className="  mt-4 ">© 2024 SAUVAGE COM.</p>
          <p className="  "> Tous droits réservés.</p>
          </div>
          <div className=" mx-auto px-4 md:px-6 flex flex-col md:flex-column items-center justify-between">
          <p className="  mt-4 ">19 RUE GALLEAN</p>
          <p className="   ">06000 NICE</p>
          <p className="  mt-4 ">contact@sauvage-com.fr</p>

          <p className="  mt-4 ">TEL: 04 22 13 02 90 </p>
          </div>
       
      </footer>
    </div>
  )
}

function BeefIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12.5" cy="8.5" r="2.5" />
      <path d="M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z" />
      <path d="m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5" />
    </svg>
  )
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}