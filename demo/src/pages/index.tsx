import { motion } from "framer-motion";

import * as S from "framer-scroll-animation";

export default function Home() {
  return (
    <main className="flex gap-8 flex-col bg-black pt-8 pb-8 w-full max-w-3xl m-auto px-6">
      <div className="w-full fixed left-0 right-0 top-0 p-12 flex items-end">
        <S.Animation
          animate={{
            color: [
              "#fff",
              "#a053ff",
              "#FF69B4",
              "#FF8C00",
              "#ff78fb",
              "#00BFFF",
              "#FFD700",
              "#8471ff",
              "#be6aff",
              "#00FA9A",
            ],
          }}
        >
          <motion.a
            href="https://github.com/joelbqz/framer-scroll-animation"
            className="text-[10px] ml-auto uppercase tracking-[0.5px] font-medium"
          >
            Github
          </motion.a>
        </S.Animation>
      </div>
      <S.Target className="w-full h-screen flex items-center justify-center">
        <S.Animation
          offset={["start center", "end center"]}
          animate={{
            opacity: ["0%", "100%", "0%"],
          }}
        >
          <motion.h1 className="text-white text-4xl">
            Amidst the cosmic dance of the universe, the whispers of the ancient
            ones echo through the astral planes, revealing hidden truths and
            unlocking the secrets of creation.
          </motion.h1>
        </S.Animation>
      </S.Target>
      <S.Target className="w-full h-screen flex items-center justify-center">
        <S.Animation
          offset={["start center", "end center"]}
          animate={{
            opacity: ["0%", "100%", "0%"],
          }}
        >
          <motion.h1 className="text-white text-4xl">
            The mystic crystals pulse with arcane energy, illuminating the path
            towards enlightenment and transcendence.
          </motion.h1>
        </S.Animation>
      </S.Target>
      <S.Target className="w-full h-screen flex items-center justify-center">
        <S.Animation
          offset={["start center", "end center"]}
          animate={{
            opacity: ["0%", "100%", "0%"],
          }}
        >
          <motion.h1 className="text-white text-4xl">
            The infinite expanse of the cosmos stretches out before us, a
            tapestry of light and shadow woven by the hand of the divine.
          </motion.h1>
        </S.Animation>
      </S.Target>
      <S.Target className="w-full h-screen flex items-center justify-center">
        <S.Animation
          offset={["start center", "end center"]}
          animate={{
            opacity: ["0%", "100%", "0%"],
          }}
        >
          <motion.h1 className="text-white text-4xl">
            Through the veils of time and space, we journey towards the heart of
            the unknown, guided by the intuition of the soul.
          </motion.h1>
        </S.Animation>
      </S.Target>

      <S.Target className="w-full h-screen flex items-center justify-center">
        <S.Animation
          offset={["start center", "end center"]}
          animate={{
            opacity: ["0%", "100%", "0%"],
          }}
        >
          <motion.h1 className="text-white text-4xl">
            The winds of change blow through the multiverse, heralding a new age
            of cosmic consciousness and spiritual awakening.
          </motion.h1>
        </S.Animation>
      </S.Target>
      <div className="w-full fixed left-0 right-0 bottom-0 p-3">
        <S.Animation
          animate={{
            width: ["0%", "50%"],
          }}
        >
          <motion.div className="bg-gradient-to-r from-black to-transparent w-full h-[2px] absolute"></motion.div>
        </S.Animation>
        <S.Animation
          animate={{
            backgroundColor: [
              "#8B008B",
              "#FF69B4",
              "#FF8C00",
              "#DA70D6",
              "#00BFFF",
              "#FFD700",
              "#6A5ACD",
              "#8F00FF",
              "#00FA9A",
            ],
            width: ["0%", "100%"],
          }}
        >
          <motion.div className="w-full h-[2px] bg-gray-200"></motion.div>
        </S.Animation>
      </div>
    </main>
  );
}
