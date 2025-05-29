import { LS, LSKeys } from '../ls';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (e: 'event', v: string, data?: Record<string, string>) => void;
  }
}

type Payload = {
  autopayments: 1 | 0;
  limit: 1 | 0;
  limit_sum: number;
  insurance: 1 | 0;
  email: 1 | 0;
};

export const sendDataToGA = async (payload: Payload) => {
  try {
    const now = new Date();
    const date = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    await fetch(
      'https://script.google.com/macros/s/AKfycbxcHgrbrpJDGqapkLM5baYBX40Q4CotD5cxxU-4_mdpm86bxbBXSESz1AkW_G-ubZWb/exec',
      {
        redirect: 'follow',
        method: 'POST',
        body: JSON.stringify({ date, ...payload, variant: 'variant1', id: LS.getItem(LSKeys.UserId, 0) }),
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
      },
    );
  } catch (error) {
    console.error('Error!', error);
  }
};

type CalcPayload = {
  calc: string;
};

export const sendDataToGACalc = async (payload: CalcPayload) => {
  try {
    const now = new Date();
    const date = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    await fetch(
      'https://script.google.com/macros/s/AKfycbxf9TLvjovmFRTF9h_43sjUDCEBhuHysW7djPoSh0Kzt_AqMYw1YqDKRITQ37mOfsyETg/exec',
      {
        redirect: 'follow',
        method: 'POST',
        body: JSON.stringify({ date, ...payload, id: LS.getItem(LSKeys.UserId, 0), vari: 'var4' }),
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
      },
    );
  } catch (error) {
    console.error('Error!', error);
  }
};
