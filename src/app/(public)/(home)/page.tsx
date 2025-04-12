import DefaultButton from "@/components/DefaultButton";
import SearchBar from "@/components/SearchBar";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import UserAvatar from "@/components/UserAvatar";
import { CompassIcon } from "lucide-react";
import Home from "./_components";

function HomePage() {
  const isAuthenticated = false;

  return (
    <main className="mx-auto flex max-w-sm flex-1 flex-col items-center justify-center gap-8 text-center">
      <div className="absolute top-4 right-4 flex items-center gap-4">
        <ThemeSwitcher />
        {isAuthenticated ? (
          <UserAvatar userName="SG" />
        ) : (
          <DefaultButton
            content="Login"
            url="/login"
            className="hover:bg-primary/90 bg-primary text-secondary h-10"
          />
        )}
      </div>
      <section className="flex flex-col gap-2">
        <Home.Title content="InfoHub" />
        <Home.Description content="Explore curious facts from around the world" />
      </section>
      <SearchBar placeholder="Search for knowledge..." />
      <span className="text-muted-foreground">or</span>
      <DefaultButton
        icon={CompassIcon}
        content="Discover something new!"
        url="/discovery"
      />
    </main>
  );
}

export default HomePage;
