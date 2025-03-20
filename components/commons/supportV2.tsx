'use client';

import axios from 'axios';

const options = [
  {
    label: 'Delete',
    value: 'delete',
  },
];

import _ from 'lodash';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const SupportV2Common = () => {
  const [state, setState] = useState('delete');
  const [form, setForm] = useState({
    user_name: '',
    reason: '',
    loading: false,
  });
  const isDelete = state === 'delete';

  const onSubmit = async () => {
    setForm((prev) => ({ ...prev, loading: true }));
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_GW}/api/v1/user/request-delete-user`,
        {
          user_name: form.user_name,
          reason: form.reason,
        }
      );
      if (res.status === 200) {
        toast.success('Submit successfully!');
      }
    } catch (error: any) {
      toast.error(`Submit failed!. ${_.get(error, 'response.data.message')}`);
    }
    setForm((prev) => ({ ...prev, loading: false }));
  };

  const onChange = (key: string) => (e: any) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  return (
    <div className="h-[100vh] pt-[160px] w-full flex flex-col items-center ">
      <div className="text-center text-white text-base lg:text-5xl font-semibold font-['Poppins'] capitalize leading-[67.20px] mb-[32px]">
        HỖ TRỢ
      </div>

      <div className="max-w-[600px] w-full px-4 lg:px-0 flex flex-col justify-start items-center gap-[24px]">
        <div className="w-full self-stretch  flex-col justify-start items-start gap-3 flex">
          <select
            onChange={(e) => setState(e.target.value)}
            className="appearance-none text-[13px] lg:text-[16px] w-full h-11 lg:h-14 px-[10px] lg:px-6 py-3 lg:py-4 bg-[#222222] rounded-[100px] border border-[#6d6d6d] justify-start items-center gap-2.5 inline-flex overflow-hidden"
          >
            {_.map(options, (o) => (
              <option value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
        {isDelete && (
          <>
            <div className="w-full flex flex-col gap-3">
              <div className="justify-start items-center gap-2.5 inline-flex">
                <div className="text-[13px] lg:text-[16px] text-white font-semibold font-['Poppins'] leading-normal">
                  Email
                </div>
              </div>
              <input
                className="text-[13px] lg:text-[16px] w-full h-11 lg:h-14 px-[10px] lg:py-3 lg:py-4 bg-[#222222] rounded-[100px] border border-[#6d6d6d] justify-start items-center gap-2.5 inline-flex overflow-hidden"
                type="email"
                onChange={onChange('email')}
              />
            </div>
            <div className="w-full flex-col flex gap-3">
              <div className="justify-start items-center gap-2.5 inline-flex">
                <div className="text-white text-[13px] lg:text-[16px] font-semibold font-['Poppins'] leading-normal">
                  Tên người dùng
                </div>
              </div>
              <input
                onChange={onChange('user_name')}
                className="text-[13px] lg:text-[16px] w-full h-11 lg:h-14 px-[10px] lg:px-6 py-3 lg:py-4 bg-[#222222] rounded-[100px] border border-[#6d6d6d] justify-start items-center gap-2.5 inline-flex overflow-hidden"
                type="text"
              />
            </div>
            <div className="w-full flex-col flex gap-3">
              <div className="justify-start items-center gap-2.5 inline-flex">
                <div className="text-white text-[13px] lg:text-[16px] font-semibold font-['Poppins'] leading-normal">
                  Lý do
                </div>
              </div>
              <textarea
                onChange={onChange('reason')}
                className="text-[13px] lg:text-[16px] w-full h-11 lg:h-14 px-[10px] lg:px-6 py-3 lg:py-4 bg-[#222222] rounded-[100px] border border-[#6d6d6d] justify-start items-center gap-2.5 inline-flex overflow-hidden"
              />
            </div>
          </>
        )}
        <div className="self-stretch h-[52px] flex-col justify-start items-center gap-2 flex">
          <button
            disabled={form.loading}
            className="h-[52px] px-6 py-3.5 bg-white rounded-[100px] justify-center items-center gap-3 inline-flex"
          >
            <div
              onClick={() => onSubmit()}
              className="text-center text-black text-base font-medium font-['Poppins'] leading-relaxed"
            >
              {form.loading ? <LoadingTailwind /> : 'Gửi yêu cầu'}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

const LoadingTailwind = () => {
  return (
    <div role="status">
      <svg
        aria-hidden="true"
        className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Đang tải...</span>
    </div>
  );
};

export default SupportV2Common;
