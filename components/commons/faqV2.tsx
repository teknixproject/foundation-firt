import _ from "lodash";
import { CSSProperties } from "react";
import { getDeviceType } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqV2Props {
  data?: any;
  style?: CSSProperties;
}

const faqCollape = [
  {
    question: "1. What is TON Booking Shareholders?",
    answer:
      "TON Booking Shareholders is an investment platform that allows users to earn daily rewards by investing in the ecosystem using cryptocurrencies like USDT, TBK, and WAB. The platform also offers referral bonuses for growing your community.",
  },
  {
    question: "2. How do I start investing?",
    answer: `Step-by-step Guide:<br>
      - Choose an investment package from the available options (100 TON, 500 - TON, 1000 TON, or custom).<br>
      - Connect your wallet.<br>
      - Select your preferred payment method (USDT, TBK, WAB) and confirm the transaction.`,
  },
  {
    question: "3. How can I invest in TON Booking Shareholders?",
    answer:
      "Visit the How to Invest section for detailed steps on connecting your wallet and selecting an investment package.",
  },
  {
    question: "4. What are daily rewards?",
    answer:
      "Daily rewards are calculated based on the total amount you have invested in TON Booking Shareholders. The more you invest, the higher your daily rewards. You can track your rewards and see your earnings grow in the Activity section.",
  },
  {
    question: "5. How are referral rewards calculated?",
    answer: `Referral rewards are calculated through two bonus structures:<br>
      - Direct Bonus: 10% of the investment made by someone you referred.<br>
      - Indirect Bonus: 5% of the investment made by a partner of your referred person.`,
  },
  {
    question: "6. How do I connect my wallet?",
    answer: `Step 1: Click on Settings.<br>
      Step 2: Click "Connect Wallet" to link your wallet.<br>
      Step 3: Click on the Tonkeeper Wallet icon and approve the connection.<br>
      Step 4: The system displays a pop-up notification confirming successful connection.`,
  },
  {
    question: "7. What payment methods are supported?",
    answer:
      "You can invest using USDT, TBK, and WAB. All payments are secured by blockchain technology.",
  },
  {
    question: "8. Is my payment secure?",
    answer:
      "Yes, all transactions are secured by the TON Blockchain, ensuring transparency and security for your investments.",
  },
  {
    question: "9. What should I do if my payment fails?",
    answer:
      "- Double-check the payment details and ensure your wallet has sufficient funds.<br> - If the issue persists, contact our support team for further assistance.",
  },
  {
    question: "10. How can I view my payment history?",
    answer:
      "Visit the Activities section in the bot to review your past transactions and track your investments.",
  },
];

const FaqV2 = ({ data, style }: FaqV2Props) => {
  const sizeScreen = getDeviceType();
  const isMobile = sizeScreen === "mobile";
  const title = _.get(data, "title", "Title Header");

  const newStyle: CSSProperties = {
    ...style,
  };

  return (
    <div className="flex flex-col w-full max-w-[960px] px-4 lg:px-0">
      <div className="flex flex-col gap-6 items-center">
        <h2 className="text-base lg:text-[42px] heading-1 text-center flex items-center gap-2 tracking-[-1.4px]">
          {isMobile ? "FAQ" : "Frequently Asked Questions"}
        </h2>
      </div>
      <div className="w-full">
        <Accordion
          type="single"
          collapsible
          className="w-full py-[36px] max-lg:py-[16px] flex flex-col gap-3 max-lg:gap-[24px]"
          defaultValue="0"
        >
          {faqCollape.map((item, index) => (
            <AccordionItem
              value={index.toString()}
              key={`faq-${index}`}
              className="bg-white/[0.08] rounded-md lg:rounded-3xl "
            >
              <AccordionTrigger className="px-[42px] max-lg:px-[16px]">
                <p className="text-heading3 max-lg:text-[12px]">
                  {item.question}
                </p>
              </AccordionTrigger>
              <AccordionContent className="px-[42px] pb-6 max-lg:pb-[12px] max-lg:px-[12px]">
                <div
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                  className="text-paragraph1 text-left text-description5 max-lg:text-[13px]"
                ></div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FaqV2;