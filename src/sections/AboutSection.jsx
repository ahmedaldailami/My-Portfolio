// import { Briefcase, Code, User } from "lucide-react";
import { useTranslation } from "react-i18next";
import ScrollFloat from "../components/text/ScrollFloat";
import { motion } from "framer-motion";
import { HeadTitle } from "../components/HeadTitle";
import { Code, Layers, Monitor, Sparkles, User } from "lucide-react";

export const AboutSection = () => {
  const { t } = useTranslation();
  const lang = document.documentElement.lang;

  return (
    <section id="about" className="py-20 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        {/*           start Section Header         */}
        <HeadTitle Section="about" />
        {/*           End Section Header         */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {lang === "en" ? (
              <ScrollFloat
                animationDuration={"1.5"}
                ease="back.inOut(2)"
                scrollStart="center bottom+=50%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.03}
              >
                {t("about.subTitle")}
              </ScrollFloat>
            ) : (
              <h3 className="text-2xl font-bold">{t("about.subTitle")}</h3>
            )}

            <p className="text-muted-foreground">{t("about.subtitles2")}</p>

            {/* <p className="text-muted-foreground">{t("about.subtitles2")}</p> */}

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              {/* <a
                href="#contact"
                className="px-6 py-2 rounded-full border border-primarylw text-primarylw hover:scale-110 duration-500"
              ></a> */}
              <a
                href="https://wa.me/966539601938?text=Hello%20I%20want%20to%20contact%20you"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 text-center rounded-full border border-primarylw text-primarylw hover:scale-110 duration-500"
              >
                {t("about.contactBtn")}
              </a>

              <a
                href="/Ahmed_Aldailami_CV.pdf"
                download
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2 text-center rounded-full border border-primarylw hover:scale-110 duration-500"
              >
                {t("about.CVbtn")}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border custom-card p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className={lang === "en" ? "text-left" : "text-right"}>
                  <h4 className="font-semibold text-lg">
                    {t("about.card1.title")}
                  </h4>
                  <p className="text-muted-foreground">
                    {t("about.card1.sub")}
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border custom-card p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <div className={lang === "en" ? "text-left" : "text-right"}>
                  <h4 className="font-semibold text-lg">
                    {t("about.card2.title")}
                  </h4>
                  <p className="text-muted-foreground">
                    {t("about.card2.sub")}
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border custom-card p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>

                <div className={lang === "en" ? "text-left" : "text-right"}>
                  <h4 className="font-semibold text-lg">
                    {t("about.card3.title")}
                  </h4>
                  <p className="text-muted-foreground">
                    {t("about.card3.sub")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
