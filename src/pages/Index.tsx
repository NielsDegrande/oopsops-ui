import { ChatFlow } from "src/components/chat/ChatFlow";

const Index = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
        <ChatFlow />
      </div>
    </div>
  );
};

export default Index;
