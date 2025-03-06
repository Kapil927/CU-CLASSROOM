import { Github } from "lucide-react";
import { Command } from 'lucide-react';

const App = () => {
  return (
    <Command />
  );
};

export default App;


import { Hint } from "@/components/hint";
import { links } from "@/config";

import { List } from "./list";
import { NewButton } from "./new-button";

export const Sidebar = () => {
  return (
    <aside className="fixed z-[1] left-0 bg-blue-950 h-full w-[60px] flex p-3 flex-col justify-between text-white">
      <div className="flex flex-col gap-y-4">
        <List />
        <NewButton />
      </div>

      <div className="aspect-square flex flex-col gap-1">
        <Hint label="Source Code" side="right" align="start" sideOffset={18}>
          <a
            href={links.sourceCode}
            target="_blank"
            rel="noreferrer noopener"
            className="bg-slate-600 h-full w-full flex items-center justify-center rounded-md opacity-60 hover:opacity-100 transition"
          >
            
            <Github className="text-white h-5 w-5" />
          </a>
        </Hint>
      </div>
    </aside>
  );
};
