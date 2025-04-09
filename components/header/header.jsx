import logoSrc from "./logo.svg";
import Image from "next/image";
import avatarSrc from "../game/images/avatar-1.png";
import { Profile } from "../profile/profile";
import { ArrowDownIcon } from "./icons/arrow-down-icon";
import { UiButton } from "../uikit/ui-button";

export function Header() {
  return (
    <header className="flex h-24 items-center px-8 bg-white shadow-lg leading-[1.2]">
      <Image src={logoSrc} alt="" />
      <div className="w-px h-8 bg-slate-200 mx-6"></div>
      <UiButton className="w-44" size="lg" variant="primary">
        Играть
      </UiButton>

      <button className="ml-auto flex items-center gap-2 text-teal-600">
        <Profile name="Ussehh" rating={1234} />
        <ArrowDownIcon />
      </button>
    </header>
  );
}
