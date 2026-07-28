import Link from "next/link";

type UnderlinedButtonProps = {
  text: string;
  link: string;
  className?: string;
};

export default function UnderlinedButton({
  text,
  link,
  className,
}: UnderlinedButtonProps) {
  return (
    <button
      className={`flex font-satoshi font-medium w-full text-[26px] text-white tracking-[8%] underline ${className}`}
    >
      <Link href={link} className="max-[1200px]:ml-0!">
        {text}
      </Link>
    </button>
  );
}
