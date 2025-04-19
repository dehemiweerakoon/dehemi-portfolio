/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { cn } from "../lib/utils";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { useEffect, useState } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{}}
                  key={`char-${index}`}
                  className={cn(
                    `dark:text-white text-black opacity-0 hidden`,
                    word.className
                  )}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </motion.div>
    );
  };
  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
}) => {
  const [currentLine, setCurrentLine] = useState(0); // index of current line
  const [currentCharIndex, setCurrentCharIndex] = useState(0); //how many characters visible now in current line

  useEffect(() => {
    const currentWord = words[currentLine];
    if (!currentWord) return;

    if (currentCharIndex < currentWord.text.length) {
      const timeout = setTimeout(() => {
        setCurrentCharIndex((prev) => prev + 1);
      }, 80); // typing speed
      return () => clearTimeout(timeout);
    } else if (currentLine < words.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, 50); // delay before typing the next line
      return () => clearTimeout(timeout);
    }
  }, [currentCharIndex, currentLine, words]);

  return (
    <div className={cn(" my-3 max-w-full text-2xl sm:text-2xl md:text-5xl lg:text-4xl xl:text-4xl font-bold", className)}>
 
      <div className="overflow-hidden pb-2">
        
        <div
          className=""
          style={{ whiteSpace: "pre-line" }}
        >
          {words.slice(0, currentLine + 1).map((word, wordIndex) => (
            <div key={`word-${wordIndex}`} className="inline-block">
              {word.text
                .slice(
                  0,
                  wordIndex === currentLine
                    ? currentCharIndex
                    : word.text.length
                )
                .split("")
                .map((char, charIndex) => (
                  <span
                    key={`char-${charIndex}`}
                    className={cn("dark:text-white text-black", word.className)}
                  >
                    {char}
                  </span>
                ))}
              &nbsp;
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
