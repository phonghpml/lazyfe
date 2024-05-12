import MainLayout from "@/src/components/MainLayout";
import { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return <MainLayout>{children}</MainLayout>;
};
export default HomeLayout;
