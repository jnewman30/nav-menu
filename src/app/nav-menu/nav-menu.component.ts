import {Component, Input, OnInit} from '@angular/core';
import {NavMenuItem} from './nav-menu-item';

@Component({
    selector: 'app-nav-menu',
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

    @Input() items: NavMenuItem[] = [];

    constructor() {
        this.items = [
            {
                label: 'Home',
                icon: 'home'
            },
            {
                label: 'Inbox',
                icon: 'inbox'
            },
            {
                label: 'Administration',
                icon: 'folder',
                expanded: false,
                items: [
                    {
                        label: 'Entity Settings',
                        icon: 'list',
                        expanded: false,
                        items: [
                            {
                                label: 'Properties',
                                icon: 'list'
                            },
                            {
                                label: 'Email Templates',
                                icon: 'list'
                            }
                        ]
                    },
                    {
                        label: 'Mobile Scan Settings',
                        icon: 'list'
                    },
                    {
                        label: 'Role Management',
                        icon: 'list'
                    },
                    {
                        label: 'Process Manager',
                        icon: 'list'
                    }
                ]
            },
            {
                label: 'Workflow',
                icon: 'folder',
                expanded: false,
                items: [
                    {
                        label: 'Accounting',
                        items: [
                            {label: 'Workflow 1', icon: 'list'},
                            {label: 'Workflow 2', icon: 'list'},
                            {label: 'Workflow 3', icon: 'list'},
                            {label: 'Workflow 4', icon: 'list'}
                        ]
                    },
                    {
                        label: 'Human Resources',
                        items: [
                            {label: 'Workflow 5', icon: 'list'},
                            {label: 'Workflow 6', icon: 'list'},
                            {label: 'Workflow 7', icon: 'list'},
                            {label: 'Workflow 8', icon: 'list'}
                        ]
                    },
                    {
                        label: 'Workflow 9',
                        icon: 'list'
                    },
                    {
                        label: 'Workflow 10',
                        icon: 'list'
                    }
                ]
            }
        ];
    }

    ngOnInit(): void {
    }

    toggleSubMenu(item: NavMenuItem): void {
        item.expanded = !item.expanded;
    }
}
