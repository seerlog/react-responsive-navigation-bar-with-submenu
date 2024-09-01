import {menuItems} from "./constants";

export const getFirstMenuItem = () => {
    const [firstMenuItem] = menuItems;
    return firstMenuItem;
}

export const getFirstSubMenuItem = () => {
    const [firstMenuItem] = menuItems;
    const [firstSubMenuItem] = firstMenuItem.subMenuItems;
    return firstSubMenuItem;
}

export const ifTrue = (condition, className, theOther) => {
    if(theOther === undefined) {
        return condition ? className : theOther;
    }
    return condition ? className : undefined;
}
