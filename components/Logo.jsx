import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        className="max-w-[100px] md:max-w-[255px]"
        src="/logo.svg"
        alt="LWS Xstream Logo"
        height={100}
        width={175}
      />
    </Link>
  );
};

export default Logo;
