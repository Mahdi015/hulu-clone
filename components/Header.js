import Image from "next/image";
import HeaderItem from "./HeaderItem";
import logo from "./logoo.png";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 items-center justify-between">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem Title="HOME" Icon={HomeIcon} />
        <HeaderItem Title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem Title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem Title="COLLECTION" Icon={CollectionIcon} />
        <HeaderItem Title="SEARCH" Icon={SearchIcon} />
        <HeaderItem Title="ACCOUNT" Icon={UserIcon} />
      </div>

      <Image
        className="object-contain cursor-pointer"
        width={120}
        src={logo}
        height={90}
      />
    </header>
  );
}
