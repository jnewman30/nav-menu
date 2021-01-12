
export interface NavMenuItem {
    label: string;
    icon?: string;
    data?: any;
    expanded?: boolean;
    items?: NavMenuItem[];
}
