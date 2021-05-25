import React from "react";
import image from "../img/awp05_alltolls_blogspot092-1280x1024.jpg";

export default function Home() {
    return (
        <main>
            <img src={image} alt="Keyboard grass" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-made">Halo!!!</h1>
            </section>
        </main>
    )
}