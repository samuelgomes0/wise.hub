import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface HomeButtonProps {
  url: string;
  icon?: LucideIcon;
  content: string;
  className?: string;
}

function HomeButton({ icon: Icon, content, url, className }: HomeButtonProps) {
  return (
    <Button
      className={cn(
        "h-12 rounded-full bg-blue-500 text-white hover:bg-blue-600",
        className,
      )}
      asChild
    >
      <Link href={url}>
        {Icon && <Icon />}
        {content}
      </Link>
    </Button>
  );
}

export default HomeButton;
