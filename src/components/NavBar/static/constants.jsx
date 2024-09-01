import { AiFillEdit } from "react-icons/ai";
import { AiFillBoxPlot } from "react-icons/ai";
import { AiFillProduct } from "react-icons/ai";

export const menuItems = [
    {
        "ko": "스터디",
        "en": "study",
        "icon": <AiFillEdit />,
        subMenuItems: [
            { "ko": "자바스크립트", "en": "javascript" },
            { "ko": "리액트", "en": "react" },
            { "ko": "자바", "en": "java" },
            { "ko": "스프링", "en": "spring" },
        ]
    },
    {
        "ko": "개발로그",
        "en": "devlog",
        "icon": <AiFillProduct />,
        subMenuItems: [
            { "ko": "프론트엔드", "en": "frontend" },
            { "ko": "백엔드", "en": "backend" },
            { "ko": "클라우드", "en": "cloud" },
        ]
    },
    {
        "ko": "개발규칙",
        "en": "convention",
        "icon": <AiFillBoxPlot />,
        subMenuItems: [
            { "ko": "자바스크립트", "en": "javascript" },
            { "ko": "리액트", "en": "react" },
            { "ko": "자바", "en": "java" },
            { "ko": "SQL", "en": "sql" },
        ]
    },
]

export const getFirstMenuItem = () => {
    const [firstMenuItem] = menuItems;
    return firstMenuItem;
}

export const getFirstSubMenuItem = () => {
    const [firstMenuItem] = menuItems;
    const [firstSubMenuItem] = firstMenuItem.subMenuItems;
    return firstSubMenuItem;
}