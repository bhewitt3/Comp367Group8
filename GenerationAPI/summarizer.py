from google import genai
import os

class TextSummarizer:
    def __init__(self):
        #get api from .env
        api_key = os.getenv("GEMINI_API_KEY")
        #raise error if no api key
        if not api_key:
            raise ValueError("GEMINI_API_KEY is missing. Set it in the .env file.")
        #initialize Gemini client
        self.client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))
        #specify which model to use
        self.model = "gemini-2.0-flash"

    def summarize_text(self, text):
        if not text.strip():
            raise ValueError("Text can not be empty.")
        
        #create prompt for model
        prompt = f"""
        Generate a relevant and concise summary based on the following text: 
        "{text}"
        The summary length should be approximately 50% of the initial text. Provide only the summary text in the output.
        """
        #generate summary using Gemini API
        try:
            response = self.client.models.generate_content(
                model =self.model,
                contents=[prompt]
            )
            response_text = response.text.strip()
            return response_text
        except Exception as e:
            raise RuntimeError(f"Failed to generate questions and answers: {str(e)}")
   