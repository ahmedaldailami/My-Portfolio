import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        navbar: {
          langEN: "English",
          langAR: "Arabic",
          logoW: "Ahmed",
          logoP: "Aldailami",
          home: "Home",
          about: "About",
          skills: "Skills",
          projects: "Projects",
          gallary: "gallary",
          contact: "Contact",
        },
        hero: {
          welcome: "Hi, I'm",
          fName: "Ahmed ",
          lName: "Aldailami",
          subtitle: "Front-End Developer & Graphic Designer",
          subtitles:
            "I design interfaces, experiences, and visual identities that combine creativity with precision, transforming ideas into intelligent and engaging designs that balance aesthetics and functionality, creating strong user experiences and giving every project a distinct and memorable visual identity.",
          heroBtn: "View My Work",
          scroll: "Scroll",
        },
        about: {
          title1: "About ",
          title2: "Me",
          subTitle: "Web Developer & Graphic Designer",
          subtitles1: "",
          subtitles2:
            "Creative digital professional specializing in Front-End Development, UI/UX Design, and Graphic Design, focused on building modern user experiences that combine clean visuals, smooth functionality, and strong visual identity. Passionate about transforming ideas into interactive and impactful designs through creativity, attention to detail, and a deep understanding of both aesthetics and user experience.",
          contactBtn: "Get In Touch",
          CVbtn: " Download CV",
          card1: {
            title: "Web Development",
            sub: "As a Front-End Developer, I transform ideas and designs into fast, responsive, and interactive web experiences with a strong focus on performance, usability, and modern visual details.",
          },
          card2: {
            title: "UI/UX Design",
            sub: "As a UI/UX Designer, I create intuitive and user-centered digital experiences that combine clean aesthetics with functional design to deliver smooth and engaging interactions.",
          },
          card3: {
            title: "Graphic Design",
            sub: "As a Graphic Designer, I craft creative visual identities and impactful designs that help brands stand out, communicate their message clearly, and leave a lasting impression.",
          },
        },
        skills: {
          title1: "My ",
          title2: "Skills",
          all: "All",
          tools: "Tools",
        },
        gallary: {
          title1: " My ",
          title2: "Gallary",
        },
        projects: {
          title1: "Featured ",
          title2: "Projects",
          all: "All",
          sub: "Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.",
          project1: {
            title: "Mohamed Ali Club",
            sub: "A multi-page introductory website using Bootstrap.",
          },
          project2: {
            title: "Interno Furniture",
            sub: "A beautiful landing page app using  Tailwind.",
          },
          project3: {
            title: "Movies Recommendation",
            sub: "A Movies Recommendation page using React and Tailwind.",
          },
          btn: "Check My Github →",
        },
        contact: {
          title1: "Get In ",
          title2: "Touch",
          sub: "Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.",
          contactInfo: "Contact Information",
          email: "Email",
          phone: "Phone",
          location: "Location",
          locSub: "sana'a , Yemen",
          socialTitle: "Connect With Me",
          form: {
            title: "Send a Message",
            name: {
              title: "Your Name",
              PH: "Inter your name...",
            },
            email: {
              title: "Your Email",
              PH: "Inter your Email...",
            },
            message: {
              title: "Your Message",
              PH: "Inter your Message...",
            },
            btnSend: "Send Message",
            btnSending: "Sending...",
          },
        },
      },
    },
    ar: {
      translation: {
        navbar: {
          langEN: "أنجليزي",
          langAR: "عربي",
          logoW: "أنس",
          logoP: "سلطان",
          home: "الرئيسية",
          about: "عني",
          skills: "المهارات",
          projects: "أعمالي",
          gallary: "المعرض",
          contact: "للتواصل",
        },
        hero: {
          welcome: "مرحباً، أنا",
          fName: " أحمد",
          lName: " الديلمي ",
          subtitle: `مطوّر واجهات أمامية و مصمم جرافيك`,
          subtitles:
            "أصمم واجهات وتجارب وهوية بصرية تنبض بالإبداع والدقة، أحوّل الأفكار إلى تصميم ذكي وجذاب يجمع بين الجمال والوظيفة ليصنع تجربة مستخدم قوية لا تُنسى ويمنح كل مشروع شخصية بصرية مميزة وواضحة.",
          heroBtn: "عرض أعمالي",
          scroll: "اكتشف المزيد",
        },
        about: {
          title1: "نبذة ",
          title2: "عني",
          subTitle: "مطور مواقع إلكترونية ومصمم جرافيك ",
          subtitles1: "",
          subtitles2:
            "مبدع رقمي متخصص في تطوير الواجهات الأمامية Front-End وتصميم UI/UX والجرافيك ديزاين، أعمل على تحويل الأفكار إلى تجارب رقمية حديثة تجمع بين الجمال البصري وسهولة الاستخدام والأداء الاحترافي، مع اهتمام دقيق بالتفاصيل وصناعة هويات وتصاميم تترك أثرًا قويًا وتجربة مميزة للمستخدم.",
          contactBtn: "تواصل معنا",
          CVbtn: " تحميل السيرة الذاتية",
          card1: {
            title: "تطوير الويب",
            sub: "كمطور Front-End أعمل على تحويل التصاميم والأفكار إلى واجهات تفاعلية سريعة وعصرية تجمع بين الأداء القوي وتجربة الاستخدام السلسة مع اهتمام دقيق بكل تفصيلة بصرية وتقنية.",
          },
          card2: {
            title: "تصميم UI/UX",
            sub: "كمصمم UI/UX أركز على بناء تجارب رقمية مريحة وذكية تجعل المستخدم يتفاعل بسهولة مع المنتج من خلال تصميم واجهات واضحة وعملية تجمع بين الجمال والوظيفة.",
          },
          card3: {
            title: "مصمم جرافيك",
            sub: "كمصمم جرافيك أبتكر تصاميم وهويات بصرية تعكس قوة الفكرة وتلفت الانتباه بأسلوب احترافي يساعد العلامات التجارية على الظهور بشكل مميز وترك انطباع قوي.",
          },
        },
        skills: {
          title1: "المهارات & ",
          title2: "التفنيات",
          all: "الكل",
          tools: "التفنيات",
        },
        gallary: {
          title1: " معرض  ",
          title2: "الصور",
        },
        projects: {
          title1: " المشاريع ",
          title2: "المميزية",
          all: "All",
          sub: "إليكم بعض مشاريعي الأخيرة. تم تصميم كل مشروع بعناية فائقة مع الاهتمام بالتفاصيل والأداء وتجربة المستخدم.",
          project1: {
            title: "نادي محمد علي",
            sub: "موقع تعريفي متعدد الصفحات باستخدام  Bootstrap.",
          },
          project2: {
            title: "Interno للأثاث",
            sub: "صفحة تعريفية باستخدام Tailwind",
          },
          project3: {
            title: "توصيات الأفلام",
            sub: "صفحة توصيات أفلام باستخدام React و Tailwind.",
          },
          btn: "راجع حسابي على Github ←",
        },
        contact: {
          title1: "تواصل  ",
          title2: "معنا",
          sub: "هل لديك مشروع في ذهنك أو ترغب في التعاون؟ لا تتردد في التواصل معي. أنا منفتح دائمًا على مناقشة الفرص الجديدة.",
          contactInfo: "معلومات للتواصل",
          email: "بريد إلكتروني",
          phone: "هاتف",
          location: "الموقع",
          locSub: "صنعاء، اليمن",
          socialTitle: "تواصل معي عبر...",
          form: {
            title: "أرسل لي رسالة",
            name: {
              title: "أسمك",
              PH: "أدخل أسمك...",
            },
            email: {
              title: "البريد الألكتروني",
              PH: "أدخل بريدك الألكتروني...",
            },
            message: {
              title: "رسالتك",
              PH: "أدخل رسالتك هنا...",
            },
            btnSend: "أرسال",
            btnSending: "جاري الأرسال...",
          },
        },
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escspeValue: false },
});

export default i18n;
