import { useEffect, useState } from "react";

import { ScrollArea } from "src/components/ui/scroll-area";
import { Separator } from "src/components/ui/separator";
import { chatDataService } from "src/services/chatDataService";
import { ChatMessage as ChatMessageType } from "src/types/chat";

import { ChatMessage } from "./ChatMessage";

export function ChatFlow(): JSX.Element {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);

  useEffect(() => {
    // Listen for new messages
    chatDataService.onMessage((message) => {
      setMessages((prev) => [...prev, message]);
    });
  }, []);

  return (
    <div className="flex h-screen flex-col p-6">
      <div className="mb-4">
        <h2 className="text-2xl font-bold">OopsOps</h2>
        <p className="text-muted-foreground">
          Multi agent incident handling with voice and computer use.
        </p>
      </div>

      <Separator className="mb-4" />

      <ScrollArea className="flex-1 pr-4">
        <div className="space-y-2">
          {messages
            .filter((message) => message.content)
            .map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
        </div>
      </ScrollArea>
    </div>
  );
}
