import Link from "next/link";
import { FC, ReactNode } from "react";
import FooterComponent from "@github20k/components/home/footer.component";
import {SmartLookLazy} from "@github20k/helpers/smartlook.lazy.component";
import ExitComponent from "@github20k/helpers/use.exit";

export const BlogLayout: FC<{
  stargazers_count: number;
  image: string;
  children: ReactNode;
}> = (props) => {
  const { stargazers_count, image, children } = props;
  return (
    <>
      <ExitComponent />
      <SmartLookLazy />
      <div className="container mx-auto max-w-[728px] px-4 pb-10">
        <nav className="text-white flex">
          <div className="container pb-4 pt-4 mx-auto flex-1">
            <ul className="flex items-center">
              <li className="mr-4">
                <Link href="/" className="font-semibold">
                  Home
                </Link>
              </li>
              <li className="mr-4">
                <Link href="/blog" className="font-semibold">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                    href="https://calendly.com/github20k/30min?utm_source=blog"
                    target="_blank"
                    className="font-semibold"
                >
                  Need help? let{"'"}s talk!
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {!!image && (
          <div className="relative mb-10">
            <img
              className="w-full object-cover"
              src={image} // Replace with actual path to header image
              alt="Blog Header"
            />
          </div>
        )}
        {children}
      </div>
      <FooterComponent newsletter={true} hidePurchase={true} />
    </>
  );
};
