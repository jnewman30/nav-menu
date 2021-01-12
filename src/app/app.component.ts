import {Component, OnInit} from '@angular/core';
import {NavMenuItem} from './nav-menu/nav-menu-item';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    menuItems: NavMenuItem[] = [
        {
            label: 'Home',
            icon: 'home',
            action: this.testMenuAction
        },
        {
            label: 'Inbox',
            icon: 'inbox',
            action: this.testMenuAction
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
                            icon: 'list',
                            action: this.testMenuAction
                        },
                        {
                            label: 'Email Templates',
                            icon: 'list',
                            action: this.testMenuAction
                        }
                    ]
                },
                {
                    label: 'Mobile Scan Settings',
                    icon: 'list',
                    action: this.testMenuAction
                },
                {
                    label: 'Role Management',
                    icon: 'list',
                    action: this.testMenuAction
                },
                {
                    label: 'Process Manager',
                    icon: 'list',
                    action: this.testMenuAction
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
                        {
                            label: 'Workflow 1',
                            icon: 'list',
                            action: this.testMenuAction
                        },
                        {
                            label: 'Workflow 2',
                            icon: 'list',
                            action: this.testMenuAction
                        },
                        {
                            label: 'Workflow 3',
                            icon: 'list',
                            action: this.testMenuAction
                        },
                        {
                            label: 'Workflow 4',
                            icon: 'list',
                            action: this.testMenuAction
                        }
                    ]
                },
                {
                    label: 'Human Resources',
                    items: [
                        {
                            label: 'Workflow 5',
                            icon: 'list',
                            action: this.testMenuAction
                        },
                        {
                            label: 'Workflow 6',
                            icon: 'list',
                            action: this.testMenuAction
                        },
                        {
                            label: 'Workflow 7',
                            icon: 'list',
                            action: this.testMenuAction
                        },
                        {
                            label: 'Workflow 8',
                            icon: 'list',
                            action: this.testMenuAction
                        }
                    ]
                },
                {
                    label: 'Workflow 9',
                    icon: 'list',
                    action: this.testMenuAction
                },
                {
                    label: 'Workflow 10',
                    icon: 'list',
                    action: this.testMenuAction
                }
            ]
        }
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

    testMenuAction(item: NavMenuItem): void {
        console.log('action', item.label);
    }
}
