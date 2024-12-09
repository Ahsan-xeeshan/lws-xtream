"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    {
      code: "en",
      language: "English",
    },
    {
      code: "bn",
      language: "বাংলা",
    },
  ];

  const found = languages.find((lang) => pathname.includes(lang.code));
  const [selectedLanguage, setSelectedLanguage] = useState(
    found ?? languages[0]
  );
  const [showManu, setShowManu] = useState(false);

  console.log(selectedLanguage);

  const handleLanguageChange = (lang) => {
    setSelectedLanguage({
      ...selectedLanguage,
      code: lang,
      language: lang === "en" ? "English" : "বাংলা",
    });
    setShowManu(false);
    router.push(`/${lang}`);
  };

  return (
    <div className="flex gap-4 items-center">
      <div className="relative">
        <button
          className="flex items-center gap-2"
          onClick={() => setShowManu(!showManu)}
        >
          <Image
            className="max-w-8"
            src={
              selectedLanguage.code === "en"
                ? "/images/usa.png"
                : "/images/bd.png"
            }
            alt={selectedLanguage.language}
            height={100}
            width={165}
          />
          {selectedLanguage.language}
        </button>

        {showManu && (
          <div classNameName="absolute right-0 top-full mt-2 w-40 rounded-md bg-black p-2 z-10 shadow-lg">
            {languages.map((entry) => (
              <li
                key={entry.code}
                onClick={() => handleLanguageChange(entry.code)}
                classNameName="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-400"
              >
                <Image
                  classNameName="max-w-8"
                  src={
                    entry.language === "English"
                      ? "/images/usa.png"
                      : "/images/bd.png"
                  }
                  alt="bangla"
                  height={100}
                  width={165}
                />
                {entry.language}
              </li>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
