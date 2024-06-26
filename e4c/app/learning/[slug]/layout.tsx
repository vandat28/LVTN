import Sidebar from "@/components/ui/learning-and-playing/learning/slidebar";

interface LearningLayoutProps {
  children: React.ReactNode;
  params: {
    slug: string;
  };
}

export default function LearningLayout(props: LearningLayoutProps) {
  return (
    <>
      <Sidebar
        slug={props.params.slug}
        id={
          props.params.slug === "beginners"
            ? 1
            : props.params.slug === "intermediate"
            ? 2
            : 3
        }
      />
      {props.children}
    </>
  );
}
