import "solid-js";

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "iconify-icon": {
        icon?: string;
        width?: string | number;
        height?: string | number;
        class?: string;
        inline?: boolean;
        flip?: "horizontal" | "vertical";
        rotate?: "90deg" | "180deg" | "270deg";
      };
    }
  }
}
