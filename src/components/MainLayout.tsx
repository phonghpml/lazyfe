"use client";

import { useIsMobile } from "@/src/hooks/isMobile";
import {
  AppstoreOutlined,
  MailOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, Menu, MenuProps } from "antd";
import { redirect, useRouter } from "next/navigation";
import { ReactNode, useState } from "react";

type MenuItem = Required<MenuProps>["items"][number];
const items: MenuItem[] = [
  {
    key: "ratings",
    label: "Bảng xếp hạng",
    icon: <MailOutlined />,
    children: [
      {
        key: "/ratings/number-of-listens",
        label: "Lượt nghe",
      },
    ],
  },
  {
    key: "sub2",
    label: "Category",
    icon: <AppstoreOutlined />,
    children: [
      { key: "5", label: "Option 5" },
      { key: "6", label: "Option 6" },
      {
        key: "sub3",
        label: "Submenu",
        children: [
          { key: "7", label: "Option 7" },
          { key: "8", label: "Option 8" },
        ],
      },
    ],
  },
  {
    type: "divider",
  },
  {
    key: "sub4",
    label: "User",
    icon: <SettingOutlined />,
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
      { key: "11", label: "Option 11" },
      { key: "12", label: "Option 12" },
    ],
  },
];

const MainLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [showNav, setShowNav] = useState<boolean>(false);
  const isMobile = useIsMobile();
  const onClick: MenuProps["onClick"] = (e) => {
    console.log(e?.key, "run here");
    console.log(router);
    router.push(e?.key);
  };
  return (
    <div className="px-4">
      {isMobile ? (
        <div className="relative">
          <div className="text-center relative h-8 mb-2">
            <button
              onClick={() => {
                router.push("/");
              }}
            >
              Home
            </button>
            <div className="">
              <Button
                onClick={() => {
                  setShowNav(!showNav);
                }}
                className="absolute top-0 left-0 block md:hidden"
              >
                <MenuUnfoldOutlined />
              </Button>
            </div>
          </div>

          <div>{children}</div>
          <div
            className={`${
              !showNav ? "hidden" : undefined
            } h-screen fixed top-0 left-0 max-w-[300px] bg-white z-20`}
          >
            <Menu
              onClick={onClick}
              style={{ width: 256 }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              items={items}
            />
          </div>
          <div
            className={` ${
              !showNav ? "hidden" : undefined
            } h-screen w-screen fixed top-0 left-0 z-10 bg-black bg-opacity-5`}
            onClick={() => {
              setShowNav(!showNav);
            }}
          ></div>
        </div>
      ) : (
        <div>
          <div className="text-center relative mb-2">
            <button
              onClick={() => {
                router.push("/");
              }}
            >
              Home
            </button>
          </div>
          <div className="flex">
            <div className={`hidden md:block`}>
              <Menu
                onClick={onClick}
                style={{ width: 256 }}
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                items={items}
              />
            </div>
            <div className="w-full">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
};
export default MainLayout;
