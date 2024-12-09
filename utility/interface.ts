import React from "react";

export interface BreadcrumbProps {
    pageName?: string;
    pageTitle?: string;
}

export type NextLayoutProps = {
    header?: number;
    footer?: React.ReactNode;
    children?: React.ReactNode;
    bgBlack?: boolean;
    single?: boolean;
    menu?: React.ReactNode;
};

interface NextSidebarMenuItem {
    id: number;
    href: string;
    title: string;
}

export interface NextHeaderProps {
    header?:number;
    single?: boolean | undefined;
    sidebarToggle?: boolean | undefined;
    close?:() => void | undefined;
    menu?:NextSidebarMenuItem[];
}

export interface FaqProps {
    id: number;
    title?: string;
    description?: string;
}

export const FaqData: FaqProps[] = [
    { id: 1, title: "Why Need Digital Marketing For Build Business?", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan tiueaque quae abillo inventore veritatis et quasi architecto beatae vitae dicta explicabo voluptatem voluptas aspernatur" },
    { id: 2, title: "How to Increase Web Traffic?", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan tiueaque quae abillo inventore veritatis et quasi architecto beatae vitae dicta explicabo voluptatem voluptas aspernatur" },
    { id: 3, title: "How to Development SEO Optimization?", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan tiueaque quae abillo inventore veritatis et quasi architecto beatae vitae dicta explicabo voluptatem voluptas aspernatur" },
    { id: 4, title: "Have Any Professional Team Member?", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan tiueaque quae abillo inventore veritatis et quasi architecto beatae vitae dicta explicabo voluptatem voluptas aspernatur" },
    { id: 5, title: "Have you any Global Customer?", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan tiueaque quae abillo inventore veritatis et quasi architecto beatae vitae dicta explicabo voluptatem voluptas aspernatur" },
]