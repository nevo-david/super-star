import dynamic from "next/dynamic";

export const SmartLookLazy = dynamic(() => import('./smartlook.component'), { ssr: false });
