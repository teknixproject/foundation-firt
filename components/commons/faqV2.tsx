/* eslint-disable @typescript-eslint/no-unused-vars */
import _ from 'lodash';
import { CSSProperties } from 'react';
import { getDeviceType } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FaqV2Props {
  data?: any;
  style?: CSSProperties;
}

const faqCollape = [
  {
    question: '1. What is ChainCap Market?',
    answer:
      'ChainCap Market is a cryptocurrency tracking app that provides real-time prices, market capitalization, trading volumes, and insights for thousands of cryptocurrencies. It’s designed to help users stay informed and manage their crypto portfolios.',
  },
  {
    question: '2. How do I get started with ChainCap Market?',
    answer: `Step-by-Step Guide:<br>
      - Download ChainCap Market from the App Store or Google Play.<br>
      - Open the app and sign up with your email or log in using Google/Apple accounts.<br>
      - Start exploring crypto prices or setting up your portfolio.`,
  },
  {
    question: '3. How can I track cryptocurrency prices?',
    answer:
      'On the home screen, you’ll see a live list of cryptocurrencies ranked by market cap. Tap any coin to view detailed info like price charts, 24-hour volume, and circulating supply.',
  },
  {
    question: '4. What features does ChainCap Market offer?',
    answer: `ChainCap Market lets you:<br>
        - Track prices and market data for over 10,000 cryptocurrencies.<br>
        - Create a personalized watchlist and portfolio.<br>
        - Stay updated with the latest crypto news and market trends.<br>
        - Compare exchange rankings based on trading volume.
      `,
  },
  {
    question: '5. How do I add coins to my portfolio?',
    answer: `Step-by-Step:<br>
        - Step 1: Go to the "Portfolio" tab.<br>
        - Step 2: Tap "Add Transaction.<br>
        - Step 3: Select a cryptocurrency, enter the amount you own, purchase price, and date.<br>
        - Step 4: Save it, and your portfolio will update with real-time values.`,
  },
  {
    question: '6. What currencies are supported for price display?',
    answer: `ChainCap Market supports multiple fiat currencies like USD, EUR, VND, and more, plus crypto-to-crypto conversions (e.g., BTC to ETH). Adjust your preferred currency in "Settings.`,
  },
  {
    question: '7. Is my data secure?',
    answer:
      'Yes, we use advanced encryption to protect your personal and portfolio data. ChainCap Market does not store your funds—only the data you input.',
  },
  {
    question: '8. What should I do if the app fails to update prices?',
    answer: `- Check your internet connection.<br>
    - Go to "Settings" and tap "Refresh Data".<br>
    - If the issue persists, email us at <strong style={{ fontWeight: '400', color: '#F87171' }}>support@chaincapmarket.com</strong> for assistance.`,
  },
  {
    question: '9. How can I view my watchlist?',
    answer:
      '- Go to the "Watchlist" tab to see all the coins you’ve starred. Tap any coin for quick access to its price and stats.',
  },
];

const FaqV2 = ({ data, style }: FaqV2Props) => {
  const sizeScreen = getDeviceType();
  const isMobile = sizeScreen === 'mobile';
  const title = _.get(data, 'title', 'Title Header');

  const newStyle: CSSProperties = {
    ...style,
  };

  return (
    <div className=" h-[100vh] flex w-full items-center justify-center">
      <div className="flex flex-col w-full max-w-[960px] px-4 lg:px-0">
        <div className="flex flex-col gap-2 2xl:gap-6 items-center">
          <h2 className="text-base lg:text-[42px] heading-1 text-center flex items-center gap-2 tracking-[-1.4px]">
            {isMobile ? 'FAQ' : 'Help & FAQs - ChainCap Market'}
          </h2>
          <h4 className="text-base lg:text-[24px]">Need assistance or have questions?</h4>
        </div>
        <div className="w-full">
          <Accordion
            type="single"
            collapsible
            className="w-full py-[36px] max-lg:py-[16px] flex flex-col gap-3 max-lg:gap-[24px]"
            defaultValue="0"
          >
            {faqCollape.map((item, index) => {
              const updatedAnswer = item.answer.replace(
                /support@chaincapmarket.com/g,
                `<span style="font-weight: 400; color: #eb2a2a;">support@chaincapmarket.com</span>`
              );

              return (
                <AccordionItem
                  value={index.toString()}
                  key={`faq-${index}`}
                  className="bg-white/[0.08] rounded-md lg:rounded-3xl "
                >
                  <AccordionTrigger className="px-[42px] max-lg:px-[16px]">
                    <p className="text-heading3 max-lg:text-[12px]">{item.question}</p>
                  </AccordionTrigger>
                  <AccordionContent className="px-[42px] pb-6 max-lg:pb-[12px] max-lg:px-[12px]">
                    <div
                      dangerouslySetInnerHTML={{ __html: updatedAnswer }}
                      className="text-paragraph1 text-left text-description5 max-lg:text-[13px]"
                    ></div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FaqV2;
