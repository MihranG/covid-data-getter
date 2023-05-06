import { ISingleDayData } from "./types.ts";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const getDataByDate = async (
  dateString: string | null
): Promise<ISingleDayData | undefined> => {
  try {
    const dataStream = await fetch(`${baseUrl}/covid?d=${dateString}`);
    return await dataStream.json();
  } catch (e) {
    console.log(e);
  }
};
