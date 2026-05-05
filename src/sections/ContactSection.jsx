// import {
//   Instagram,
//   Linkedin,
//   Mail,
//   MapPin,
//   Phone,
//   Send,
//   Twitter,
// } from "lucide-react";
// import {  } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { HeadTitle } from "../components/HeadTitle";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export const ContactSection = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-50 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/*           start Section Header         */}
        <HeadTitle Section="contact" />
        {/*           End Section Header         */}

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("contact.sub")}
        </p>

        <div className="grid gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              {t("contact.contactInfo")}
            </h3>

            <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{t("contact.email")}</h4>
                  <a
                    href="mailto:Eng.ahmedbenadnan@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    eng.ahmedbenadnan@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> {t("contact.phone")}</h4>
                  <a
                    dir="ltr"
                    href="tel:+966539601938"
                    className="text-muted-foreground text-center text-nowrap hover:text-primary transition-colors"
                  >
                    +966 539 601 938
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> {t("contact.location")}</h4>
                  <a className="text-muted-foreground text-nowrap hover:text-primary transition-colors">
                    {t("contact.locSub")}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 text-center">
              <h4 className="font-medium mb-4">{t("contact.socialTitle")}</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/ahmed-adnan-aldailami-9358383a6"
                  target="_blank"
                >
                  {/* LinkedIn */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.16h.05c.53-1 1.82-2.16 3.75-2.16 4.01 0 4.75 2.64 4.75 6.07V24h-4v-7.1c0-1.7-.03-3.88-2.36-3.88-2.36 0-2.72 1.84-2.72 3.75V24h-4V8z" />
                  </svg>{" "}
                </a>
                <a href="https://x.com/anas_sultan_" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.88 3.78-3.88 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/966539601938?text=Hello%20I%20want%20to%20contact%20you"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* WhatsApp */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.42 0 .04 5.38.04 12c0 2.12.56 4.19 1.62 6.02L0 24l6.17-1.61A11.94 11.94 0 0 0 12.04 24c6.62 0 12-5.38 12-12 0-3.2-1.25-6.22-3.52-8.52zM12.04 21.82c-1.8 0-3.56-.48-5.1-1.39l-.37-.22-3.66.95.98-3.57-.24-.37A9.8 9.8 0 0 1 2.22 12c0-5.42 4.4-9.82 9.82-9.82 2.62 0 5.08 1.02 6.93 2.87A9.74 9.74 0 0 1 21.82 12c0 5.42-4.4 9.82-9.78 9.82zm5.39-7.36c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.8-1.67-2.1-.17-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.08-.8.37s-1.05 1.02-1.05 2.5 1.08 2.92 1.23 3.12c.15.2 2.13 3.25 5.16 4.56.72.3 1.28.48 1.72.62.72.23 1.37.2 1.88.12.57-.08 1.76-.72 2-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* <div
            className="bg-card p-8 rounded-lg shadow-2xl"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              {t("contact.form.title")}
            </h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.form.name.title")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder={t("contact.form.name.PH")}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.form.email.title")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder={t("contact.form.email.PH")}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  {t("contact.form.message.title")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder={t("contact.form.message.PH")}
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 px-6 py-2 m-auto font-bold rounded-full border-[1.5px] border-primary text-primary hover:scale-110 duration-500"
                >
                  {isSubmitting
                    ? t("contact.form.btnSending")
                    : t("contact.form.btnSend")}
                  <Send size={16} />
                </button>
              </div>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
};
