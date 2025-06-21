import { NextLogo } from "./next-logo";
import { SupabaseLogo } from "./supabase-logo";
import { Button } from "./ui/button";
import Link from "next/link";


export function Hero() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-8 justify-center items-center">
        <span className="border-l rotate-45 h-20" />
      </div>
      <h1 className="sr-only">,</h1>
      <p className="text-7xl lg:text-7xl !leading-tight mx-auto max-w text-center">
        <span className="main-color font-bold">Gestiona</span> bien tu carta y conquista paladares
      </p>
      <p className="max-w-90 text-center lg:text-base pt-10 -mt-5">
        No importa si eres un pequeño o grande negocio, estamos
        ser parte de tu equipo de innovación
      </p>
      <div className="pt-10">
        <Button asChild size="sm" className="rounded-full px-5" variant={"default"}>
          <Link href="/auth/sign-up">1 mes gratis</Link>
        </Button>
      </div>
       
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
