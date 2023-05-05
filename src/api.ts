const baseUrl = import.meta.env.VITE_BASE_URL;

export const getDataByDate = async (dateString: string | null) => {
  try {
    console.log(11, baseUrl);
    const dataStream = await fetch(`${baseUrl}/covid?d=${dateString}`);
    const data = await dataStream.json();
    console.log("data", data);
  } catch (e) {
    console.log(e);
  }
};
