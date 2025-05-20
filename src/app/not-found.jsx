"use client"; // Error components must be Client Components

import { ArrowBack } from "@/components/icons/ArrowBack";
import Image from "next/image";
import Link from "next/link";
import { Heading } from "@/components/Heading";
import banner from "./not-found/404.png";
import style from './not-found/not-found.module.css'

export default function NotFound () {
    return (
        <>
      <div className={style.container}>
        <Image src={banner} alt="robo olhando para um poça d'água com o número 404 nela"/>
        <Heading>OPS! Página não encontrada.</Heading>
        <p className={style.text}>
          Você pode voltar ao feed e continuar buscando projetos incríveis!
        </p>
        <Link href="/">
          Voltar ao feed <ArrowBack color="#81FE88" />
        </Link>
      </div>
    </>
    )
}