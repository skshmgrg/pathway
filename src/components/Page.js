
import { useState, useContext } from "react";
import { Chat } from "./Chat.js";
import { functionsContext, messagesContext } from "../context/context.js";
import Navbar from "./Navbar.js";
import Previoussearch from "./Previoussearch.js";

function Page() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false); // New loader state

  // Function to handle user input change
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // Function to handle "Enter" key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  // Function to handle click
  const handleClick = () => {
    if (input.trim()) {
      // Add the user prompt to messages immediately
      setMessages((prev) => [
        ...prev,
        { type: "prompt", text: input },
      ]);

      // Clear the input field
      setInput("");

      // Set loading to true
      setLoading(true);

      // Simulate a delayed response after 5 seconds
      setTimeout(() => {
        const response = getResponseForInput(input);

        // Add the response to messages
        setMessages((prev) => [
          ...prev,
          { type: "response", text: response },
        ]);

        // Set loading to false
        setLoading(false);
      }, 5000); // 5000ms = 5 seconds delay
    }
  };

  // Function to determine response based on user input
  const getResponseForInput = (input) => {
    // Define fixed responses for common inputs
    const responses = {
      "how does alphabet maintain functionality and user privacy?": "Alphabet Inc., as the parent holding company of Google, focuses on maintaining both functionality and user privacy through a strategic approach embedded in its operations. At the core of Alphabet's strategy is the prioritization of user privacy and information security across its vast array of products. Alphabet's approach involves a commitment to protecting user information and respecting privacy by integrating robust security measures in all its services. Key to this process is ensuring transparency and user control over data. For example, in services like Google Drive, Alphabet employs world-class security infrastructure to safeguard data stored in its data centers. Users have the ability to manage their privacy settings through their Google Account, empowering them to dictate how their data is handled. Additionally, the restructuring of Google into Alphabet allows for a specialized focus on ensuring that privacy and functionality are balanced. It provides greater autonomy to individual subsidiaries, which allows for innovation while keeping core business operations accountable. Overall, Alphabet maintains functionality and privacy by implementing strong security measures, promoting user control over personal data, and structuring its business to support accountability and focus in its services, ensuring the safety and privacy of its users in all digital interactions.",

      "how does google cloud cater to enterprise needs in ai and data analysis?": "Google Cloud caters to enterprise needs in AI and data analysis by providing a comprehensive suite of cloud services tailored for enterprise use. The Google Cloud Platform (GCP) offers cutting-edge technologies in AI, machine learning, data analytics, and cybersecurity, which empower enterprises to develop AI-powered applications for processing documents, images, translation, and more. These tools help organizations efficiently understand, analyze, and leverage data to enhance their operations and decision-making. GCP’s robust data cloud integrates data lakes, data warehouses, data governance, and machine learning into a unified platform, facilitating seamless data analysis across various environments. This unified approach allows businesses to generate insights from data stored in multiple locations, including edge and on-premises data centers. Furthermore, Google Workspace supports enterprise collaboration and productivity with secure, user-friendly applications such as Gmail, Docs, and Meet, enabling effective hybrid work environments. Google’s commitment to privacy and security ensures that enterprises can trust the integrity of their data and communications while using these services. In summary, Google Cloud meets enterprise AI and data analysis needs by offering scalable, secure, and innovative cloud solutions that enhance productivity, security, and data utilization.",

      "how does google's product portfolio impact everyday life?": "Google’s product portfolio significantly impacts everyday life by providing a wide array of services and technologies that enhance convenience, security, and accessibility. Google Services, encompassing core products such as Search, YouTube, Android, Gmail, and Google Maps, are integral to millions of users globally, facilitating daily tasks like finding information, navigating locations, and communicating. These services have evolved to offer direct answers and personalized content, making interactions quicker and more intuitive. Google emphasizes security and privacy, constantly innovating to protect user data and provide control through features like My Ad Center and advanced security tools. By investing in new platforms and hardware, including devices like the Pixel series and Chrome OS, Google combines AI, software, and hardware to make life more seamless and efficient. Moreover, Google aims to democratize access to information, aiding in knowledge acquisition, productivity, and creativity, notably through platforms like Google Cloud, which supports businesses in overcoming challenges and unlocking growth. YouTube complements this by offering educational and entertainment content, while Google Assistant provides intelligent assistance across devices, integrating further into daily life. This comprehensive approach underscores Google's commitment to enhancing user experience and contributing positively to daily living.",
    };

    // Return a response for known inputs or a default response
    return responses[input.toLowerCase()] || "Sorry, I don't understand that.";
  };

  return (
    <>
      <functionsContext.Provider
        value={{
          handleClick,
          handleChange,
          handleKeyDown,
          input,
          messages,
          loading, // Provide loading state to Chat component
        }}
      >
        <Navbar />
        <Chat />
        {/* <Previoussearch /> */}
      </functionsContext.Provider>
    </>
  );
}

export default Page;


