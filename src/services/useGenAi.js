import { GoogleGenerativeAI } from "@google/generative-ai";


const apikey = import.meta.env.VITE_GOOGILE_API_KEY

const genAI = new GoogleGenerativeAI(apikey);

export const getAIOutput = async (prompt, file, setResult, setLoading) => {
  setLoading(true);

  if (file) {
    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64data = reader.result.split(",")[1];
      const image = {
        inlineData: {
          data: base64data,
          mimeType: file.type,
        },
      };

      try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const response = await model.generateContent([prompt, image]);
        setResult(response.response.text());
      } catch (error) {
        console.error("Error generating content:", error);
        setResult("Error generating content");
      } finally {
        setLoading(false);
      }
    };
    reader.readAsDataURL(file);
  } else {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const response = await model.generateContent([prompt]);
      setResult(response.response.text());
    } catch (error) {
      console.error("Error generating content:", error);
      setResult("Error generating content");
    } finally {
      setLoading(false); // Stop loading
    }
  }
};
