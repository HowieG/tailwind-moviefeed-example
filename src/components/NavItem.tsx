import { ReactNode } from "react";

export default function NavItem({
  href,
  isActive,
  children,
}: {
  href: string;
  isActive?: boolean;
  children: ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        className={`block px-3 py-2 rounded-md border-white border ${
          isActive ? "bg-sky-500 text-white" : "bg-transparent"
        }`}
      >
        {children}
      </a>
    </li>
  );
}
