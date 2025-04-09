import Image from "next/image";
import avatarSrc from "../game/images/avatar-1.png";
import clsx from "clsx";

export function Profile({ className, name, rating, avatar = avatarSrc }) {
  return (
    <div
      className={clsx(
        className,
        "ml-auto flex items-center gap-2 text-start text-teal-600",
      )}
    >
      <Image src={avatar} width={48} height={48} alt="" unoptimized />
      <div className="overflow-hidden">
        <div className="text-lg leading-7 truncate">{name ?? "Ussehh"}</div>
        <div className="text-xs leading-7 text-slate-400">
          Рейтинг: {rating}
        </div>
      </div>
    </div>
  );
}
