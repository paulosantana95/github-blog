import { PostContentContainer } from "./styled";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface PostContentProps {
  content: string;
}

export function PostContent({ content }: PostContentProps) {
  const linkProperties = {
    target: "_blank",
    rel: "nofollow noopener noreferrer",
  };

  return (
    <PostContentContainer>
      <Markdown
        children={content}
        components={{
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                {...rest}
                children={String(children).replace(/\n$/, "")}
                style={okaidia}
                language={match[1]}
                PreTag="div"
              />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }}
      />
    </PostContentContainer>
  );
}
