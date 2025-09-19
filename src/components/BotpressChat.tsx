// import { useEffect } from "react";

// Declare window.botpressWebChat for TypeScript
declare global {
  interface Window {
    botpressWebChat: {
      init: (config: any) => void;
    };
  }
}

const BotpressChat = () => {
  // COMMENTED OUT - Botpress chatbot temporarily disabled
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
  //   script.async = true;
  //   script.onload = () => {
  //     const botId = import.meta.env.VITE_BOTPRESS_BOT_ID;
  //     const clientId = import.meta.env.VITE_BOTPRESS_CLIENT_ID;
      
  //     console.log("Botpress Config:", { botId, clientId });
      
  //     window.botpressWebChat.init({
  //       botId: botId,
  //       clientId: clientId,
  //       hostUrl: "https://cdn.botpress.cloud/webchat/v1",
  //       messagingUrl: "https://messaging.botpress.cloud",
  //       botName: "AI HCM Assistant",
  //       showCloseButton: true,
  //       theme: "light",
  //       stylesheet: "https://webchat-styler-css.botpress.app/prod/code/style.css",
  //       enableConversationDeletion: true,
  //       showPoweredBy: false,
  //       className: "botpress-chat-widget"
  //     });
  //   };
  //   document.body.appendChild(script);

  //   // Cleanup function
  //   return () => {
  //     const existingScript = document.querySelector('script[src="https://cdn.botpress.cloud/webchat/v1/inject.js"]');
  //     if (existingScript) {
  //       existingScript.remove();
  //     }
  //   };
  // }, []);

  return null;
};

export default BotpressChat;
