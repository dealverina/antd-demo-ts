import React from "react";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  HomeOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import type { MenuProps } from 'antd';

export interface MenuItemInterface {
  key: string;
  icon?: any;
  label: string;
  children?: MenuItemInterface[];
}

export const menuItems: MenuItemInterface[] = [
  {
    key: "dashboard",
    icon: React.createElement(HomeOutlined),
    label: "Dashboard",
  },
  {
    key: "1",
    icon: React.createElement(UserOutlined),
    label: "Menu 1",
    children: [
      {
        key: "1-1",
        label: "Children 1-1",
        children: [
          {
            key: "1-1-1",
            label: "Children 1-1-1",
            children: [
              {
                key: "1-1-1-1",
                label: "Children 1-1-1-1",
              },
              {
                key: "1-1-1-2",
                label: "Children 1-1-1-2",
                children: [
                  {
                    key: "1-1-1-2-1",
                    label: "Children 1-1-1-2-1",
                  },
                  {
                    key: "1-1-1-2-2",
                    label: "Children 1-1-1-2-2",
                  },
                ],
              },
            ],
          },
          {
            key: "1-1-2",
            label: "Children 1-1-2",
          },
        ],
      },
      {
        key: "1-2",
        label: "Children 1-2",
      },
    ],
  },
  {
    key: "2",
    icon: React.createElement(VideoCameraOutlined),
    label: "Menu 2",
  },
  {
    key: "3",
    icon: React.createElement(UploadOutlined),
    label: "Menu 3",
  },
  { key: "4", icon: React.createElement(BarChartOutlined), label: "Menu 4" },
  { key: "5", icon: React.createElement(CloudOutlined), label: "Menu 5" },
  { key: "6", icon: React.createElement(AppstoreOutlined), label: "Menu 6" },
  { key: "7", icon: React.createElement(TeamOutlined), label: "Menu 7" },
  { key: "8", icon: React.createElement(ShopOutlined), label: "Menu 8" },
];

export const dropdownItems: MenuProps['items'] = [
  {
    key: '1',
    label: <a href="https://github.com/dealverina">Github</a>
  },
  {
    key: '2',
    label: <a href="https://instagram.com/dealverinaaa">Instagram</a>
  },
  {
    type: 'divider'
  },
  {
    key: '3',
    label: "Keluar"
  }
]

export interface BreadcrumbInterface {
  title?: string;
}