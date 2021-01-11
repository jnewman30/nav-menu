export interface IMenuItem {
    label: string;
    sequence?: number;
    state?: string;
    items?: IMenuItem[];
    data?: any;
    action?: () => void;
}

