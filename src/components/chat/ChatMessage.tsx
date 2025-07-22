import { format } from "date-fns";
import { Bot, User } from "lucide-react";

import { Avatar, AvatarFallback } from "src/components/ui/avatar";
import { Card, CardContent } from "src/components/ui/card";
import { ChatMessage as ChatMessageType } from "src/types/chat";

interface ChatMessageProps {
  message: ChatMessageType;
}

export function ChatMessage({ message }: ChatMessageProps): JSX.Element {
  const isAgent = message.role === "assistant";
  const avatarColor = isAgent
    ? "hsl(var(--primary))"
    : "hsl(var(--accent-foreground))";
  const displayName = isAgent ? "Agent" : "User";
  const Icon = isAgent ? Bot : User;

  return (
    <div className="flex gap-3 mb-4">
      <Avatar className="h-8 w-8 border" style={{ borderColor: avatarColor }}>
        <AvatarFallback
          style={{ backgroundColor: `${avatarColor}20`, color: avatarColor }}
        >
          <Icon className="h-4 w-4" />
        </AvatarFallback>
      </Avatar>

      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-2">
          <span className="font-medium text-sm" style={{ color: avatarColor }}>
            {displayName}
          </span>
          <span className="text-xs text-muted-foreground">
            {format(message.timestamp, "HH:mm:ss")}
          </span>
        </div>

        <Card className="max-w-md">
          <CardContent className="p-3">
            <div className="space-y-2">
              <p className="text-sm leading-relaxed">{message.content}</p>
              {message.screenshotUrl && (
                <img
                  src={message.screenshotUrl}
                  alt="Screenshot"
                  className="rounded border max-w-full h-auto"
                />
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
