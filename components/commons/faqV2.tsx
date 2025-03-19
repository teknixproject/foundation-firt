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