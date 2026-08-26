import React from "react";
import { createRoot } from "react-dom/client";
import { motion, useReducedMotion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  Check,
  ChevronDown,
  HeartHandshake,
  Leaf,
  Menu,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  X
} from "lucide-react";
import "./styles.css";

const navLinks = [
  ["Why Feloklear", "#why"],
  ["Ingredients", "#ingredients"],
  ["60-Day Protocol", "#protocol"],
  ["Safety", "#safety"],
  ["FAQ", "#faq"]
];

const ingredients = [
  { name: "Azadirachta indica", dose: "200 mg", note: "Also known as neem." },
  { name: "Arctium lappa", dose: "150 mg", note: "Also known as burdock." },
  { name: "Allium sativum", dose: "150 mg", note: "Garlic." }
];

const concerns = [
  "Infection-associated vaginal discharge",
  "Concerns associated with PID or Candida",
  "Infection-related tubal blockage / hydrosalpinx",
  "Menstrual discomfort",
  "Vaginal odour",
  "Vaginal cleanliness",
  "General reproductive wellness and preparation for conception"
];

const journey = [
  ["01", "DIAGNOSE", "Get properly evaluated."],
  ["02", "UNDERSTAND", "Understand your diagnosis and circumstances."],
  ["03", "ACT", "Take informed and responsible steps."],
  ["04", "MONITOR", "Monitor your progress with appropriate professional guidance."]
];

const faqs = [
  ["What is Feloklear®?", "Feloklear® Capsule is an AfrOganiks formulation containing three botanical ingredients traditionally used in herbal health preparations."],
  ["How many capsules are in one pack?", "60 capsules."],
  ["How long is the recommended protocol?", "60 days."],
  ["How many packs are recommended?", "4 packs."],
  ["How should I take Feloklear®?", "2 capsules 10 minutes before breakfast and 2 capsules 10 minutes before dinner."],
  ["What should I take Feloklear® with?", "Warm or normal water."],
  ["Can I take it with soft drinks?", "No. The supplied document says not to take it with soft drinks or other carbonated drinks."],
  ["Can pregnant women use Feloklear®?", "No. Pregnant women should not use Feloklear®."],
  ["Can lactating mothers use Feloklear®?", "No. Lactating mothers should not use Feloklear®."],
  ["Does Feloklear® guarantee pregnancy?", "No. FELOKLEAR® is not a promise of a pregnancy."],
  ["What is the NAFDAC registration number?", "A7-2459L."],
  ["How much does the 60-day protocol cost?", "₦50,000 including consultation and shipping."],
  ["Can I speak to a consultant?", "Yes. Use the consultant CTA to ask questions before ordering."]
];

const orderFields = [
  { id: "name", label: "Full name", type: "text", autoComplete: "name", required: true },
  { id: "phone", label: "Phone number", type: "tel", autoComplete: "tel", required: true },
  { id: "whatsapp", label: "WhatsApp number", type: "tel", autoComplete: "tel" },
  { id: "email", label: "Email address", type: "email", autoComplete: "email" },
  { id: "address", label: "Delivery address", type: "textarea", autoComplete: "street-address", required: true },
  { id: "city", label: "City / town", type: "text", autoComplete: "address-level2", required: true },
  { id: "state", label: "State", type: "text", autoComplete: "address-level1", required: true },
  { id: "notes", label: "Delivery notes or questions for the consultant", type: "textarea" }
];

const ctaStyles = {
  primary: "border border-fern bg-fern text-white shadow-button hover:border-moss hover:bg-moss hover:text-white",
  secondary: "border border-moss/25 bg-white text-fern hover:border-moss hover:bg-linen hover:text-fern",
  light: "border border-white bg-white text-fern shadow-button hover:border-linen hover:bg-linen hover:text-fern",
  ghostLight: "border border-white/45 bg-transparent text-white hover:border-white hover:bg-white/10 hover:text-white"
};

const quickQuestions = [
  "How do I take Feloklear?",
  "How much is the 60-day protocol?",
  "Can pregnant women use it?",
  "Does it guarantee pregnancy?"
];

const botResponses = [
  {
    keywords: ["price", "cost", "how much", "pay", "payment", "₦", "naira"],
    answer:
      "The 60-day FELOKLEAR® protocol costs ₦50,000. The supplied offer says this covers the 2-month / 60-day protocol, consultation, and shipping."
  },
  {
    keywords: ["dose", "dosage", "take", "use", "drink", "morning", "evening", "breakfast", "dinner"],
    answer:
      "The supplied protocol is 2 capsules 10 minutes before breakfast plus 2 capsules 10 minutes before dinner for 60 days. Take with warm or normal water, and do not take Feloklear® with soft drinks or other carbonated drinks."
  },
  {
    keywords: ["pack", "packs", "capsule", "capsules", "quantity", "receive", "get", "course"],
    answer:
      "For the recommended course, the customer receives 4 × FELOKLEAR® 500 mg. Each pack contains 60 capsules, making 240 capsules total for the 60-day protocol."
  },
  {
    keywords: ["ingredient", "contains", "neem", "burdock", "garlic", "azadirachta", "arctium", "allium"],
    answer:
      "Each FELOKLEAR® capsule contains Azadirachta indica 200 mg, Arctium lappa 150 mg, and Allium sativum 150 mg. The supplied document describes these as botanical ingredients traditionally used in herbal health preparations."
  },
  {
    keywords: ["nafdac", "registration", "reg", "genuine", "authentic", "manufacturer", "company"],
    answer:
      "The supplied product details list NAFDAC REG. NO. A7-2459L, Product: Feloklear Capsule 500 mg, Pack size: 60 capsules, Manufacturer: AfrOganiks Industries. When purchasing, insist on genuine Feloklear® from an authorised source."
  },
  {
    keywords: ["pregnant", "pregnancy", "lactating", "breastfeeding", "confirmed pregnancy"],
    answer:
      "The supplied safety information says pregnant women should not use Feloklear®, and lactating mothers should not use Feloklear®. If trying to conceive while using Feloklear®, the supplied document advises careful monitoring and stopping once pregnancy is confirmed."
  },
  {
    keywords: ["medicine", "medication", "drug", "anti-malaria", "antimalaria", "anti fungal", "anti-fungal", "vitamin", "supplement"],
    answer:
      "The supplied medication warning says Feloklear® should not be taken with therapeutic medicines such as anti-malaria medicines and anti-fungal medicines, except vitamins and food supplements, because ingredients may interact with therapeutic drug ingredients. Please speak with a qualified healthcare professional if you are taking medication."
  },
  {
    keywords: ["side effect", "side effects", "reaction", "vomit", "vomiting", "heartburn", "flatulence", "gas"],
    answer:
      "The supplied document states that Feloklear® was reported to have been well tolerated in a clinical trial using the stated dosing regimen, with an overall adverse-reaction incidence of approximately 5%. Reported reactions included vomiting, heartburn, and increased flatulence. If an unexpected or severe reaction occurs, discontinue use and seek appropriate medical advice."
  },
  {
    keywords: ["blocked", "tube", "tubes", "hydrosalpinx", "pid", "hsg", "sonohysterography", "fertility", "infertility"],
    answer:
      "FELOKLEAR® is positioned as reproductive-health support, including concerns associated with infection-related tubal blockage and hydrosalpinx. Not every suspected blockage is the same, and the supplied material says HSG or sonohysterography are commonly used to evaluate tubal patency according to ASRM guidance. If a doctor has told you that you have blocked tubes, hydrosalpinx, or another tubal condition, speak with a qualified healthcare professional about your diagnosis and treatment options."
  },
  {
    keywords: ["guarantee", "cure", "unblock", "permanent", "ivf", "surgery", "pregnant in 60", "promise"],
    answer:
      "FELOKLEAR® is not a promise of a pregnancy. The page should not claim that it cures infertility, guarantees conception, permanently unblocks fallopian tubes, replaces surgery, or replaces fertility treatment. It can be considered as part of a broader reproductive-health approach with proper evaluation and professional guidance."
  },
  {
    keywords: ["delivery", "shipping", "address", "order", "buy", "purchase"],
    answer:
      "You can use the order page to submit your name, phone number, WhatsApp number, email, delivery address, city, state, and any delivery notes or questions. The ₦50,000 offer includes the 60-day protocol, consultation, and shipping."
  }
];

function getBotReply(question) {
  const text = question.toLowerCase();
  const match = botResponses.find((item) => item.keywords.some((keyword) => text.includes(keyword)));

  if (match) {
    return match.answer;
  }

  return "I can answer from the supplied FELOKLEAR® product brief: ingredients, dose, 60-day protocol, price, pack quantity, NAFDAC number, safety warnings, medication warning, side effects, and order details. For personal medical advice or diagnosis, please speak with a qualified healthcare professional.";
}

function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 26 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function CTAButton({ children, variant = "primary", href = "/order", className = "", ...props }) {
  const styles = ctaStyles[variant] || ctaStyles.primary;
  return (
    <a
      href={href}
      {...props}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.08em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

function ProductMockup({ compact = false }) {
  return (
    <div className={`relative mx-auto ${compact ? "max-w-xs" : "max-w-xl"}`} aria-label="Replaceable FELOKLEAR product mockup">
      <div className="absolute -left-8 top-8 h-28 w-28 rounded-full bg-rose/15 blur-2xl" />
      <div className="absolute -right-10 bottom-12 h-36 w-36 rounded-full bg-sage/20 blur-2xl" />
      <div className="relative rounded-[2rem] border border-white/70 bg-gradient-to-br from-white to-linen p-6 shadow-soft">
        <div className="grid items-center gap-5 sm:grid-cols-[0.85fr_1.15fr]">
          <div className="mx-auto flex min-h-[17rem] w-full max-w-[12.5rem] flex-col rounded-2xl bg-fern p-4 text-white shadow-2xl sm:min-h-[18rem]">
            <div className="h-2 rounded-full bg-clay" />
            <div className="mt-8 text-center text-xs uppercase tracking-[0.32em] text-linen">AfrOganiks</div>
            <div className="mt-7 text-center font-serif text-[2.35rem] leading-[0.9] sm:text-[2.65rem]">
              FELO
              <br />
              KLEAR
            </div>
            <div className="mt-3 text-center text-sm text-linen/85">Capsule 500 mg</div>
            <div className="mt-auto rounded-xl bg-white/95 p-3 text-center text-fern">
              <div className="text-xs font-bold uppercase tracking-[0.12em]">60 capsules</div>
              <div className="mt-1 text-[11px] leading-4">NAFDAC A7-2459L</div>
            </div>
          </div>
          <div className="space-y-3">
            {ingredients.map((item) => (
              <div key={item.name} className="flex items-center justify-between rounded-2xl border border-moss/10 bg-white/80 p-4">
                <div>
                  <p className="font-serif text-lg text-fern">{item.name}</p>
                  <p className="text-sm text-bark">{item.note}</p>
                </div>
                <span className="rounded-full bg-linen px-3 py-1 text-sm font-bold text-moss">{item.dose}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const homePrefix = window.location.pathname === "/" ? "" : "/";
  return (
    <header className="sticky top-0 z-50 border-b border-moss/10 bg-porcelain/88 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a href="/" className="font-serif text-2xl font-bold text-fern">FELOKLEAR®</a>
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map(([label, href]) => (
            <a key={label} href={`${homePrefix}${href}`} className="text-sm font-medium text-bark transition hover:text-fern">{label}</a>
          ))}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <CTAButton>Order Now — ₦50,000</CTAButton>
          <CTAButton href="/chat" variant="secondary">Chat With A Consultant</CTAButton>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-moss/15 text-fern lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-moss/10 bg-porcelain px-4 pb-5 pt-2 lg:hidden">
          <div className="grid gap-2">
            {navLinks.map(([label, href]) => (
              <a key={label} href={`${homePrefix}${href}`} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm font-semibold text-bark hover:bg-linen">{label}</a>
            ))}
            <CTAButton className="mt-2 w-full">Order — ₦50,000</CTAButton>
            <CTAButton className="w-full" href="/chat" variant="secondary">Chat</CTAButton>
          </div>
        </div>
      )}
    </header>
  );
}

function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} className={`px-4 py-16 sm:px-6 sm:py-20 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title) && (
          <Reveal className="mx-auto mb-10 max-w-3xl text-center">
            {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-rose">{eyebrow}</p>}
            {title && <h2 className="font-serif text-3xl font-semibold leading-tight text-fern sm:text-5xl">{title}</h2>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-linen px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
        <Reveal>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-rose">Women's Reproductive & Vaginal Health</p>
          <h1 className="font-serif text-4xl font-semibold leading-[1.05] text-fern sm:text-6xl lg:text-7xl">
            Were you told that your fallopian tubes are blocked?
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-bark">
            Hearing words like "blocked tubes," "hydrosalpinx," "PID," or "tubal factor infertility" can make the fertility journey feel frightening and uncertain.
          </p>
          <p className="mt-4 max-w-2xl text-xl font-medium leading-8 text-ink">
            A diagnosis is not the end of your fertility journey. Understanding the problem is the beginning of taking action.
          </p>
          <div className="mt-8 rounded-3xl border border-moss/10 bg-white/70 p-6">
            <p className="font-serif text-2xl text-fern">Meet FELOKLEAR® Capsule</p>
            <p className="mt-3 leading-7 text-bark">
              An AfrOganiks formulation developed for women's reproductive and vaginal health, including concerns associated with infection-related tubal blockage and hydrosalpinx.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton className="w-full sm:w-auto">Get Feloklear Now <ArrowRight size={16} /></CTAButton>
            <CTAButton className="w-full sm:w-auto" href="/chat" variant="secondary"><MessageCircle size={16} /> Speak To A Consultant</CTAButton>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <ProductMockup />
        </Reveal>
      </div>
    </section>
  );
}

function App() {
  const isOrderPage = window.location.pathname === "/order";
  const isChatPage = window.location.pathname === "/chat";

  if (isOrderPage) {
    return <OrderPage />;
  }

  if (isChatPage) {
    return <ChatPage />;
  }

  return (
    <div className="min-h-screen bg-porcelain text-ink">
      <Navbar />
      <main>
        <Hero />

        <Section title="Your fertility journey deserves more than fear and guesswork.">
          <Reveal className="mx-auto max-w-4xl rounded-[2rem] bg-white p-8 shadow-soft sm:p-12">
            <p className="text-xl leading-9 text-bark">
              Negative pregnancy tests, uncertainty, uncomfortable questions, and the words "your tubes are blocked" can feel heavy. A fertility diagnosis is information, not a verdict on your worth.
            </p>
            <p className="mt-5 text-lg leading-8 text-bark">The next step is not panic. It is understanding, proper evaluation, and responsible action.</p>
          </Reveal>
        </Section>

        <Section id="why" eyebrow="Education First" title="YOUR TUBES MATTER" className="bg-linen">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <Reveal className="space-y-5">
              <p className="text-lg leading-8 text-bark">Fallopian tubes play an important role in natural conception. When tubes are damaged or obstructed, conception can become more difficult.</p>
              <div className="rounded-3xl border border-moss/15 bg-white p-6">
                <BookOpenCheck className="mb-4 text-rose" />
                <p className="font-serif text-2xl text-fern">Tubal disease is a significant contributor to female-factor infertility.</p>
                <p className="mt-3 text-bark">The supplied material attributes to ASRM that tubal disease accounts for approximately 25-35% of female-factor infertility.</p>
              </div>
            </Reveal>
            <Reveal className="rounded-[2rem] bg-porcelain p-8 shadow-soft">
              <div className="mx-auto flex aspect-square max-w-md items-center justify-center rounded-full bg-gradient-to-br from-sage/20 to-rose/10">
                <div className="relative h-64 w-64">
                  <div className="absolute left-1/2 top-16 h-32 w-20 -translate-x-1/2 rounded-full border-[10px] border-rose/55" />
                  <div className="absolute left-6 top-10 h-28 w-28 rounded-full border-[10px] border-moss/50 border-r-transparent border-b-transparent" />
                  <div className="absolute right-6 top-10 h-28 w-28 rounded-full border-[10px] border-moss/50 border-l-transparent border-b-transparent" />
                  <div className="absolute bottom-8 left-1/2 h-24 w-16 -translate-x-1/2 rounded-b-full bg-clay/30" />
                </div>
              </div>
            </Reveal>
          </div>
        </Section>

        <Section title="What is tubal blockage?">
          <div className="grid gap-6 lg:grid-cols-3">
            {["Narrowed", "Damaged", "Obstructed"].map((item) => (
              <Reveal key={item} className="rounded-3xl border border-moss/10 bg-white p-7 shadow-soft">
                <Leaf className="mb-5 text-sage" />
                <h3 className="font-serif text-2xl text-fern">{item}</h3>
                <p className="mt-3 text-bark">A fallopian tube may become {item.toLowerCase()} due to factors that need proper evaluation.</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 rounded-[2rem] bg-fern p-8 text-white sm:p-10">
            <p className="text-lg leading-8 text-linen">Possible causes mentioned in the supplied material include previous pelvic infections, pelvic inflammatory disease, endometriosis, and previous pelvic surgery. Hydrosalpinx is a condition in which a fallopian tube becomes blocked and filled with fluid.</p>
            <p className="mt-5 font-serif text-2xl">Not every suspected blockage is the same.</p>
            <p className="mt-3 text-linen/90">HSG or sonohysterography are commonly used to evaluate tubal patency, according to the supplied ASRM guidance. Before you begin any fertility protocol: know what you are dealing with.</p>
          </Reveal>
        </Section>

        <Section id="ingredients" eyebrow="Introducing FELOKLEAR®" title="A formulation created with women's reproductive health in mind." className="bg-linen">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal><ProductMockup compact /></Reveal>
            <Reveal>
              <p className="text-lg leading-8 text-bark">Feloklear® Capsule is an AfrOganiks formulation containing three botanical ingredients traditionally used in herbal health preparations.</p>
              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                {ingredients.map((item) => <IngredientCard key={item.name} item={item} />)}
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Fact icon={PackageCheck} label="500 mg per capsule" />
                <Fact icon={BadgeCheck} label="60 capsules per pack" />
              </div>
            </Reveal>
          </div>
        </Section>

        <Section title="One formulation. Multiple women's health concerns.">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {concerns.map((concern, index) => (
              <Reveal key={concern} delay={index * 0.03} className="rounded-3xl border border-moss/10 bg-white p-6 shadow-soft">
                <Check className="mb-4 text-sage" />
                <p className="font-medium leading-7 text-fern">{concern}</p>
                <p className="mt-3 text-sm leading-6 text-bark">Presented as an area of support or concern, not a guaranteed medical cure.</p>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section title="Don't guess. Understand your reproductive health." className="bg-linen">
          <div className="grid gap-5 lg:grid-cols-4">
            {journey.map(([num, title, text], index) => (
              <Reveal key={title} delay={index * 0.05} className="relative rounded-3xl bg-white p-7 shadow-soft">
                <span className="text-sm font-bold text-rose">{num}</span>
                <h3 className="mt-4 font-serif text-2xl text-fern">{title}</h3>
                <p className="mt-3 leading-7 text-bark">{text}</p>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="protocol" eyebrow="The Recommended Course" title="The FELOKLEAR® 60-Day Protocol">
          <Reveal className="rounded-[2rem] bg-fern p-6 text-white shadow-soft sm:p-10">
            <div className="grid gap-5 lg:grid-cols-3">
              <ProtocolItem title="Morning" main="2 Capsules" text="10 minutes before breakfast" />
              <ProtocolItem title="Evening" main="2 Capsules" text="10 minutes before dinner" />
              <ProtocolItem title="Duration" main="60 Days" text="4 packs for two months" />
            </div>
            <div className="mt-8 grid gap-4 rounded-3xl bg-white/10 p-5 sm:grid-cols-2">
              <p><strong>Take with warm or normal water.</strong></p>
              <p><strong>Do not take Feloklear® with soft drinks or other carbonated drinks.</strong></p>
            </div>
            <CTAButton className="mt-8 w-full sm:w-auto" variant="light">Start My FELOKLEAR® Protocol</CTAButton>
          </Reveal>
        </Section>

        <Section title="Why a 60-day approach?" className="bg-linen">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="text-xl leading-9 text-bark">Reproductive health does not change overnight. A structured protocol encourages consistency rather than taking a product for a few days, stopping, changing products and starting again.</p>
            <p className="mt-7 font-serif text-4xl text-fern">CONSISTENCY MATTERS.</p>
            <p className="mt-4 text-bark">This does not imply that 60 days guarantees a medical result.</p>
          </Reveal>
        </Section>

        <Section title="Don't just buy a capsule. Know what you're putting into your body.">
          <div className="grid gap-6 lg:grid-cols-3">
            <Fact icon={ShieldCheck} label="NAFDAC REG. NO. A7-2459L" />
            <Fact icon={PackageCheck} label="Product: Feloklear Capsule 500 mg" />
            <Fact icon={BadgeCheck} label="Manufacturer: AfrOganiks Industries" />
          </div>
          <Reveal className="mt-7 rounded-3xl border border-rose/20 bg-rose/10 p-6 text-center text-lg font-semibold text-fern">
            When purchasing, insist on genuine Feloklear® from an authorised source.
          </Reveal>
        </Section>

        <Section id="safety" title="FELOKLEAR® IS NOT A PROMISE OF A PREGNANCY." className="bg-fern text-white">
          <Reveal className="mx-auto max-w-5xl">
            <p className="text-center text-2xl font-medium text-linen">It is a step toward taking your reproductive health seriously.</p>
            <p className="mt-6 text-center leading-8 text-linen/90">Blocked tubes can have different causes and degrees of severity. Some forms of tubal disease may require procedures or assisted reproductive treatment. Treatment decisions can depend on site and extent of disease, age, ovarian reserve, other infertility factors, and individual reproductive goals.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-5">
              {["Get properly evaluated.", "Understand your diagnosis.", "Take your reproductive health seriously.", "Use products responsibly.", "Monitor your progress with appropriate professional guidance."].map((item) => (
                <div key={item} className="rounded-2xl bg-white/10 p-4 text-sm font-semibold text-linen">{item}</div>
              ))}
            </div>
          </Reveal>
        </Section>

        <Section title="Who is Feloklear® for?">
          <Checklist items={["Infection-associated reproductive-health concerns", "Vaginal discharge or odour", "Menstrual discomfort", "Infection-related tubal-health concerns", "Hydrosalpinx-related concerns", "General reproductive wellness"]} />
        </Section>

        <Section title="Who should not use Feloklear®?" className="bg-linen">
          <div className="grid gap-5 lg:grid-cols-2">
            <Warning text="Pregnant women should not use Feloklear®." />
            <Warning text="Lactating mothers should not use Feloklear®." />
          </div>
          <Reveal className="mt-6 rounded-3xl bg-white p-6 text-bark shadow-soft">
            If trying to conceive while using Feloklear®, the supplied document advises careful monitoring and stopping once pregnancy is confirmed.
          </Reveal>
        </Section>

        <Section title="Important medication warning">
          <Reveal className="rounded-[2rem] border border-rose/25 bg-rose/10 p-8">
            <AlertTriangle className="mb-4 text-rose" />
            <p className="text-lg leading-8 text-bark">The supplied document states that Feloklear® should not be taken with therapeutic medicines such as anti-malaria medicines and anti-fungal medicines, except vitamins and food supplements, because ingredients may interact with therapeutic drug ingredients.</p>
            <p className="mt-4 font-semibold text-fern">Visitors with questions should speak with a qualified healthcare professional.</p>
          </Reveal>
        </Section>

        <Section title="What about side effects?" className="bg-linen">
          <Reveal className="mx-auto max-w-4xl rounded-[2rem] bg-white p-8 shadow-soft">
            <p className="text-lg leading-8 text-bark">The supplied document states that Feloklear® is reported to have been well tolerated in a clinical trial using the stated dosing regimen, with an overall adverse-reaction incidence of approximately 5%.</p>
            <Checklist items={["Vomiting", "Heartburn", "Increased flatulence"]} compact />
            <p className="mt-5 font-semibold text-fern">If an unexpected or severe reaction occurs: discontinue use and seek appropriate medical advice.</p>
          </Reveal>
        </Section>

        <Section title="A word for the woman who has almost given up.">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="text-xl leading-9 text-bark">Maybe you've cried after another negative pregnancy test. Maybe you've been asked uncomfortable questions. Maybe you've watched friends become mothers while you continue waiting.</p>
            <p className="mt-6 font-serif text-3xl text-fern">A fertility diagnosis is information, not a verdict on your worth.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-4">
              {["Understand your body.", "Get properly evaluated.", "Take informed steps.", "Keep hope alive."].map((item) => <span key={item} className="rounded-full bg-linen px-4 py-3 font-semibold text-fern">{item}</span>)}
            </div>
          </Reveal>
        </Section>

        <Section id="offer" title="Your next step starts here." className="bg-linen">
          <Reveal className="mx-auto max-w-5xl rounded-[2rem] bg-white p-6 shadow-soft sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
              <div>
                <p className="text-xl leading-8 text-bark">The recommended FELOKLEAR® course is 4 packs for 60 days.</p>
                <h3 className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-rose">You get</h3>
                <Checklist items={["4 × FELOKLEAR® 500 mg", "60 capsules per pack", "240 capsules total", "60-day recommended course", "NAFDAC A7-2459L"]} compact />
                <div className="mt-7 rounded-3xl bg-linen p-5">
                  {ingredients.map((item) => <p key={item.name} className="text-sm leading-7 text-bark">{item.name} — {item.dose}</p>)}
                </div>
              </div>
              <div className="rounded-[1.5rem] bg-fern p-7 text-white">
                <p className="text-sm uppercase tracking-[0.18em] text-linen">2-month protocol + consultation + shipping</p>
                <p className="mt-5 font-serif text-6xl">₦50,000</p>
                <div className="mt-8 grid gap-3">
                  <CTAButton className="w-full" variant="light">Order The 60-Day FELOKLEAR® Protocol</CTAButton>
                  <CTAButton className="w-full" href="/chat" variant="ghostLight">Chat With A Consultant</CTAButton>
                </div>
              </div>
            </div>
          </Reveal>
        </Section>

        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}

function OrderPage() {
  const [submitted, setSubmitted] = React.useState(false);
  const [accepted, setAccepted] = React.useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-linen text-ink">
      <Navbar />
      <main className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal className="lg:sticky lg:top-24 lg:self-start">
            <a href="/#offer" className="mb-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] text-fern hover:text-rose">
              <ArrowRight className="rotate-180" size={16} /> Back to product page
            </a>
            <div className="rounded-[2rem] bg-fern p-6 text-white shadow-soft sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">FELOKLEAR® order</p>
              <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
                Order the 60-day FELOKLEAR® protocol.
              </h1>
              <p className="mt-5 leading-8 text-linen/90">
                Fill in your delivery and contact details. A FELOKLEAR® consultant can use this information to confirm your order and answer product questions.
              </p>
              <div className="mt-8 rounded-3xl bg-white/10 p-5">
                <p className="text-sm uppercase tracking-[0.16em] text-linen/80">Package total</p>
                <p className="mt-3 font-serif text-6xl">₦50,000</p>
                <p className="mt-2 text-linen/85">2-month protocol + consultation + shipping</p>
              </div>
              <div className="mt-5 grid gap-3">
                {["4 × FELOKLEAR® 500 mg", "60 capsules per pack", "240 capsules total", "NAFDAC REG. NO. A7-2459L"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                    <Check size={18} className="shrink-0 text-clay" />
                    <span className="font-medium text-linen">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-[2rem] bg-white p-6 shadow-soft sm:p-8">
              {submitted ? (
                <div className="py-8 text-center">
                  <HeartHandshake className="mx-auto mb-5 text-sage" size={42} />
                  <h2 className="font-serif text-4xl text-fern">Your order details have been captured.</h2>
                  {/*<p className="mx-auto mt-4 max-w-xl leading-8 text-bark">
                    This frontend is ready for a real checkout or order-management connection. Once a payment link, WhatsApp number, email, or backend endpoint is supplied, this form can send the details there.
                  </p>*/}
                  <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <CTAButton>Place another order</CTAButton>
                    <CTAButton href="/chat" variant="secondary">Chat with a consultant</CTAButton>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="border-b border-moss/10 pb-6">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-rose">Customer details</p>
                    <h2 className="mt-3 font-serif text-3xl text-fern">Where should we send your FELOKLEAR® protocol?</h2>
                    <p className="mt-3 leading-7 text-bark">Required fields are marked with an asterisk.</p>
                  </div>

                  <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    {orderFields.map((field) => (
                      <FormField key={field.id} field={field} />
                    ))}
                  </div>

                  <div className="mt-8 rounded-3xl border border-rose/25 bg-rose/10 p-5">
                    <div className="flex gap-3">
                      <AlertTriangle className="mt-1 shrink-0 text-rose" />
                      <div>
                        <h3 className="font-serif text-2xl text-fern">Safety acknowledgement</h3>
                        <p className="mt-2 leading-7 text-bark">
                          Pregnant women and lactating mothers should not use Feloklear®. If trying to conceive while using Feloklear®, careful monitoring and stopping once pregnancy is confirmed is advised in the supplied material.
                        </p>
                      </div>
                    </div>
                    <label className="mt-5 flex cursor-pointer gap-3 rounded-2xl bg-white p-4">
                      <input
                        type="checkbox"
                        className="mt-1 h-5 w-5 rounded border-moss/30 text-fern focus:ring-rose"
                        checked={accepted}
                        onChange={(event) => setAccepted(event.target.checked)}
                        required
                      />
                      <span className="text-sm font-medium leading-6 text-bark">
                        I confirm I have read the pregnancy, lactation, medication, and side-effect warnings and want a consultant to confirm my order.
                      </span>
                    </label>
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
                    <p className="text-sm leading-6 text-bark">
                      Form destination placeholder: connect this to WhatsApp, email, payment, CRM, or a backend endpoint when those details are provided.
                    </p>
                    <button
                      type="submit"
                      disabled={!accepted}
                      className="inline-flex min-h-12 items-center justify-center rounded-full border border-fern bg-fern px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.08em] text-white shadow-button transition hover:border-moss hover:bg-moss disabled:cursor-not-allowed disabled:border-moss/20 disabled:bg-moss/25 disabled:text-fern/50"
                    >
                      Submit order request
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}

function FormField({ field }) {
  const shared =
    "mt-2 w-full rounded-2xl border border-moss/15 bg-porcelain px-4 py-3 text-base text-ink outline-none transition placeholder:text-bark/45 focus:border-rose focus:ring-4 focus:ring-rose/10";
  const isWide = field.type === "textarea" || field.id === "email";

  return (
    <label className={isWide ? "sm:col-span-2" : ""}>
      <span className="text-sm font-bold text-fern">
        {field.label}
        {field.required ? " *" : ""}
      </span>
      {field.type === "textarea" ? (
        <textarea
          id={field.id}
          name={field.id}
          rows={field.id === "address" ? 4 : 3}
          autoComplete={field.autoComplete}
          required={field.required}
          className={shared}
        />
      ) : (
        <input
          id={field.id}
          name={field.id}
          type={field.type}
          autoComplete={field.autoComplete}
          required={field.required}
          className={shared}
        />
      )}
    </label>
  );
}

function ChatPage() {
  const [messages, setMessages] = React.useState([
    {
      role: "consultant",
      text: "Hello, welcome to FELOKLEAR®. I can answer questions from the supplied product brief about the protocol, ingredients, order details, and safety information."
    }
  ]);
  const [draft, setDraft] = React.useState("");
  const [isThinking, setIsThinking] = React.useState(false);

  function sendMessage(value) {
    const messageText = (value || draft).trim();
    if (!messageText) return;
    setMessages((current) => [
      ...current,
      { role: "visitor", text: messageText }
    ]);
    setDraft("");
    setIsThinking(true);

    window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        { role: "consultant", text: getBotReply(messageText) }
      ]);
      setIsThinking(false);
    }, 450);
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendMessage();
  }

  function handleQuickQuestion(question) {
    setDraft(question);
    const messageText = question.trim();
    setMessages((current) => [...current, { role: "visitor", text: messageText }]);
    setIsThinking(true);

    window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        { role: "consultant", text: getBotReply(messageText) }
      ]);
      setIsThinking(false);
      setDraft("");
    }, 450);
  }

  return (
    <div className="min-h-screen bg-linen text-ink">
      <Navbar />
      <main className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <a href="/" className="mb-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] text-fern hover:text-rose">
              <ArrowRight className="rotate-180" size={16} /> Back to product page
            </a>
            <div className="rounded-[2rem] bg-fern p-6 text-white shadow-soft sm:p-8">
              <MessageCircle className="mb-5 text-clay" size={34} />
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">Consultant chat</p>
              <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
                Speak with a FELOKLEAR® consultant.
              </h1>
              <p className="mt-5 leading-8 text-linen/90">
                Ask questions about the product, the 60-day protocol, safety warnings, delivery, and next steps before ordering.
              </p>
              <div className="mt-7 rounded-3xl bg-white/10 p-5">
                <p className="font-semibold text-white">Brief-based assistant</p>
                <p className="mt-2 text-sm leading-6 text-linen/80">
                  The bot answers only from the supplied FELOKLEAR® document. It will not make pregnancy guarantees, cure claims, or personal medical decisions.
                </p>
              </div>
              <div className="mt-4 rounded-3xl bg-white/10 p-5">
                <p className="font-semibold text-white">WhatsApp-ready placeholder</p>
                <p className="mt-2 text-sm leading-6 text-linen/80">
                  If the owner decides to use WhatsApp, this page can be changed to redirect to a WhatsApp chat link or keep this page with a WhatsApp button. No phone number has been supplied yet.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <section className="overflow-hidden rounded-[2rem] bg-white shadow-soft" aria-label="FELOKLEAR consultant chat box">
              <div className="flex items-center justify-between gap-4 border-b border-moss/10 bg-porcelain p-5">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage/20 text-fern">
                    <HeartHandshake size={24} />
                  </div>
                  <div className="min-w-0">
                    <h2 className="truncate font-serif text-2xl text-fern">FELOKLEAR® Consultant</h2>
                    <p className="text-sm text-bark">Usually attends to product and protocol questions</p>
                  </div>
                </div>
                <span className="hidden rounded-full bg-sage/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-fern sm:inline-flex">
                  Placeholder
                </span>
              </div>

              <div className="flex min-h-[28rem] flex-col bg-gradient-to-b from-white to-linen/70">
                <div className="flex-1 space-y-4 overflow-y-auto p-4 sm:p-6">
                  {messages.map((message, index) => (
                    <div key={`${message.role}-${index}`} className={`flex ${message.role === "visitor" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[85%] rounded-3xl px-5 py-4 text-sm leading-6 shadow-soft sm:max-w-[72%] ${
                          message.role === "visitor"
                            ? "rounded-br-md bg-fern text-white"
                            : "rounded-bl-md border border-moss/10 bg-white text-bark"
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                  {isThinking && (
                    <div className="flex justify-start">
                      <div className="rounded-3xl rounded-bl-md border border-moss/10 bg-white px-5 py-4 text-sm leading-6 text-bark shadow-soft">
                        Checking the product brief...
                      </div>
                    </div>
                  )}
                </div>

                <form onSubmit={handleSubmit} className="border-t border-moss/10 bg-white p-4">
                  <label htmlFor="chat-message" className="sr-only">Message for FELOKLEAR consultant</label>
                  <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
                    {quickQuestions.map((question) => (
                      <button
                        key={question}
                        type="button"
                        onClick={() => handleQuickQuestion(question)}
                        className="shrink-0 rounded-full border border-moss/15 bg-linen px-4 py-2 text-sm font-semibold text-fern transition hover:border-moss hover:bg-white"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                  <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                    <textarea
                      id="chat-message"
                      value={draft}
                      onChange={(event) => setDraft(event.target.value)}
                      rows={2}
                      placeholder="Type your question here..."
                      className="max-h-36 min-h-12 w-full resize-y rounded-2xl border border-moss/15 bg-porcelain px-4 py-3 text-base text-ink outline-none transition placeholder:text-bark/45 focus:border-rose focus:ring-4 focus:ring-rose/10"
                    />
                    <button
                      type="submit"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-fern bg-fern px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-button transition hover:border-moss hover:bg-moss"
                    >
                      Send <ArrowRight size={16} />
                    </button>
                  </div>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    <CTAButton href="/order" className="w-full">Order instead</CTAButton>
                    <CTAButton href="#" variant="secondary" className="w-full" aria-disabled="true">
                      WhatsApp link pending
                    </CTAButton>
                  </div>
                </form>
              </div>
            </section>
          </Reveal>
        </div>
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}

function IngredientCard({ item }) {
  return (
    <div className="rounded-3xl border border-moss/10 bg-white p-5 shadow-soft">
      <p className="font-serif text-xl text-fern">{item.name}</p>
      <p className="mt-3 text-3xl font-bold text-rose">{item.dose}</p>
      <p className="mt-2 text-sm text-bark">{item.note}</p>
    </div>
  );
}

function Fact({ icon: Icon, label }) {
  return (
    <Reveal className="rounded-3xl border border-moss/10 bg-white p-6 shadow-soft">
      <Icon className="mb-4 text-sage" />
      <p className="font-semibold text-fern">{label}</p>
    </Reveal>
  );
}

function ProtocolItem({ title, main, text }) {
  return (
    <div className="rounded-3xl bg-white/10 p-6">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-clay">{title}</p>
      <p className="mt-4 font-serif text-4xl">{main}</p>
      <p className="mt-3 text-linen/90">{text}</p>
    </div>
  );
}

function Checklist({ items, compact = false }) {
  return (
    <Reveal className={`grid gap-3 ${compact ? "mt-5" : "mx-auto max-w-4xl sm:grid-cols-2"}`}>
      {items.map((item) => (
        <div key={item} className="flex gap-3 rounded-2xl bg-white p-4 shadow-soft">
          <Check className="mt-0.5 shrink-0 text-sage" size={18} />
          <p className="font-medium text-bark">{item}</p>
        </div>
      ))}
    </Reveal>
  );
}

function Warning({ text }) {
  return (
    <Reveal className="rounded-3xl border border-rose/25 bg-white p-7 shadow-soft">
      <AlertTriangle className="mb-4 text-rose" />
      <p className="font-serif text-2xl text-fern">{text}</p>
    </Reveal>
  );
}

function FAQ() {
  const [open, setOpen] = React.useState(0);
  return (
    <Section id="faq" title="Frequently asked questions">
      <div className="mx-auto max-w-4xl divide-y divide-moss/10 rounded-[2rem] border border-moss/10 bg-white shadow-soft">
        {faqs.map(([question, answer], index) => (
          <div key={question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-fern focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-rose"
              onClick={() => setOpen(open === index ? -1 : index)}
              aria-expanded={open === index}
            >
              {question}
              <ChevronDown className={`shrink-0 transition ${open === index ? "rotate-180" : ""}`} />
            </button>
            <motion.div
              initial={false}
              animate={{ height: open === index ? "auto" : 0, opacity: open === index ? 1 : 0 }}
              className="overflow-hidden"
            >
              <p className="px-6 pb-5 leading-7 text-bark">{answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function FinalCTA() {
  return (
    <section id="consultant" className="bg-fern px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
      <Reveal className="mx-auto max-w-5xl text-center">
        <Sparkles className="mx-auto mb-5 text-clay" size={34} />
        <h2 className="font-serif text-4xl font-semibold sm:text-6xl">YOUR BODY DESERVES ATTENTION.</h2>
        <p className="mt-3 font-serif text-3xl text-linen sm:text-5xl">YOUR FUTURE DESERVES HOPE.</p>
        <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-linen/90">You don't have to ignore the problem, live on internet rumours, buy every product someone recommends, or give up on your reproductive health.</p>
        <p className="mt-8 text-xl font-bold text-white">START WITH KNOWLEDGE. TAKE RESPONSIBLE ACTION. TAKE CARE OF YOUR BODY.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <CTAButton className="w-full sm:w-auto" variant="light">Order Now — ₦50,000</CTAButton>
          <CTAButton className="w-full sm:w-auto" href="/chat" variant="ghostLight">Chat With A Consultant</CTAButton>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  const homePrefix = window.location.pathname === "/" ? "" : "/";
  return (
    <footer className="bg-ink px-4 py-10 text-linen sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr_1fr]">
        <div>
          <p className="font-serif text-2xl">FELOKLEAR®</p>
          <p className="mt-3 text-sm text-linen/75">AfrOganiks Industries</p>
          <p className="mt-1 text-sm text-linen/75">NAFDAC REG. NO. A7-2459L</p>
        </div>
        <div className="grid gap-2 text-sm">
          {navLinks.map(([label, href]) => <a key={label} href={`${homePrefix}${href}`} className="text-linen/75 hover:text-white">{label}</a>)}
        </div>
        <div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <CTAButton variant="light">Order Now</CTAButton>
            <CTAButton href="/chat" variant="ghostLight">Chat with a Consultant</CTAButton>
          </div>
          <p className="mt-5 text-xs leading-6 text-linen/60">Safety and legal disclaimer: use Feloklear® responsibly and consult a qualified healthcare professional for diagnosis, treatment options, medication questions, pregnancy, lactation, unexpected reactions, or severe reactions.</p>
        </div>
      </div>
    </footer>
  );
}

function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-moss/10 bg-porcelain/95 p-3 shadow-2xl backdrop-blur lg:hidden">
      <div className="grid grid-cols-[1fr_auto] gap-2">
        <CTAButton className="w-full px-4">Order — ₦50,000</CTAButton>
        <CTAButton href="/chat" variant="secondary" className="px-4" aria-label="Chat with a consultant"><MessageCircle size={18} /></CTAButton>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
