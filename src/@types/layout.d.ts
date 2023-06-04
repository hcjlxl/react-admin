import type { AvatarProps } from "antd";
import type React from "react";

export type WithFalse<T> = T | false;

export type LayoutAvatarProps = WithFalse<
  AvatarProps & {
    title?: React.ReactNode;
    render?: (
      props: AvatarProps,
      defaultDom: React.ReactNode
    ) => React.ReactNode;
  }
>;
