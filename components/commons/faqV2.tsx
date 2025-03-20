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
    question: '1. Lalala Cafe là gì?',
    answer:
      'Lalala Cafe là ứng dụng giúp bạn đặt món ăn và đồ uống dễ dàng ngay từ điện thoại. Chỉ cần quét mã QR, xem thực đơn, đặt hàng và thanh toán – tất cả trong vài thao tác, không cần xếp hàng hay gọi nhân viên.',
  },
  {
    question: '2. Làm sao để bắt đầu dùng Lalala Cafe?',
    answer: `Hướng dẫn từng bước:<br>
              - Tải ứng dụng Lalala Cafe từ App Store hoặc CH Play.
              - Mở app, đăng ký bằng số điện thoại hoặc email.
              - Quét mã QR tại bàn khi đến quán hoặc chọn giao hàng nếu muốn nhận tại nhà.
            `,
  },
  {
    question: '3. Làm sao để xem thực đơn và đặt hàng?',
    answer:
      'Quét mã QR tại bàn để mở thực đơn. Xem danh sách món ăn, đồ uống kèm mô tả và giá, rồi nhấn "Thêm vào giỏ hàng". Sau đó, xác nhận đơn hàng trong mục "Giỏ hàng".',
  },
  {
    question: '4. Lalala Cafe có những tính năng gì?',
    answer: `Lalala Cafe mang đến:<br>
              - Quét mã QR để truy cập thực đơn ngay lập tức.<br>
              - Xem chi tiết các món ăn và đồ uống yêu thích.<br>
              - Đặt hàng trực tiếp từ điện thoại mà không cần đợi.<br>
              - Thanh toán nhanh chóng và an toàn.<br>
              - Cập nhật trạng thái đơn hàng theo thời gian thực.
      `,
  },
  {
    question: '5. Làm sao để thanh toán đơn hàng?',
    answer: `Sau khi đặt món, vào mục "Thanh toán" trong app. Chọn phương thức như thẻ tín dụng, ví điện tử (Momo, ZaloPay), hoặc tiền mặt (nếu có). Xác nhận để hoàn tất.`,
  },
  {
    question: '6. Phải làm gì nếu không quét được mã QR?',
    answer: `- Đảm bảo camera điện thoại hoạt động tốt và có đủ ánh sáng.<br>
            - Kiểm tra kết nối internet của bạn.<br>
            - Nếu vẫn không được, báo nhân viên quán hoặc liên hệ hỗ trợ qua email support@lalalacafe.vn.
            `,
  },
  {
    question: '7. Dữ liệu của tôi có an toàn không?',
    answer:
      'Có, Lalala Cafe dùng công nghệ mã hóa để bảo vệ thông tin cá nhân và giao dịch của bạn, đảm bảo an toàn tuyệt đối.',
  },
  {
    question: '8. Làm sao để theo dõi trạng thái đơn hàng?',
    answer: `Vào mục "Đơn hàng" trong app để xem cập nhật thời gian thực, từ lúc đặt món đến khi món được mang ra bàn hoặc giao đến bạn.`,
  },
  {
    question: '9. Tôi có thể đặt giao hàng qua Lalala Cafe không?',
    answer:
      '- Có, chọn tùy chọn "Giao hàng" khi đặt món, nhập địa chỉ và xác nhận. Thời gian giao sẽ được thông báo trong app.',
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
            Lalala Cafe
          </h2>
          <h4 className="text-base lg:text-[24px]">Cần hỗ trợ hoặc có thắc mắc?</h4>
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
