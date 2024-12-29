import {
  Facebook,
  Github,
  Linkedin,
  Twitter,
  Youtube,
} from "@/components/icons";
import Link from "next/link";

export default function SocialMedia() {
  return (

    // TODO: If you activate 3 or more social icons, make sure to update the Navbar styling accordingly.

    // Social Icons
    <nav className="md:flex gap-2 hidden">
     
      <Link href={"https://www.linkedin.com/in/muzaffar-ahmed-b8652b2a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} target="_blank">
        <Linkedin className={`w-6 h-6`} />
      </Link>
     
      <Link href={"https://github.com/muzaffar401"} target="_blank">
        <Github className={`w-6 h-6 fill-dark dark:fill-light`} />
      </Link>
    </nav>
  );
}
