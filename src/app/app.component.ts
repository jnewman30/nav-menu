import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {IMenuItem} from './cat-menu';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        trigger('menuTrigger', [
            state('opened', style({
                overflow: 'auto',
                'overflow-y': 'hidden',
                'max-height': '200px',
            })),
            state('closed', style({
                overflow: 'auto',
                'overflow-y': 'hidden',
                'max-height': '0px'
            })),
            transition('void => closed', [
                animate('0s', style({height: '0px'}))
            ]),
            transition('opened => closed', [
                animate('300ms ease-in', style({'max-height': '0px'}))
            ]),
            transition('void => opened', [
                animate('0s', style({height: '200px'}))
            ]),
            transition('closed => opened', [
                animate('300ms ease-out', style({'max-height': '200px'}))
            ]),
        ])
    ]
})
export class AppComponent implements OnInit {
    workflowMenu: Observable<IMenuItem[]>;
    adminMenu: Observable<IMenuItem[]>;

    constructor() {
        this.setupMenuItems();
    }

    ngOnInit(): void {
    }

    setupMenuItems(): void {
        this.adminMenu = of([
            {
                label: 'Admin',
                state: 'closed',
                items: [
                    {
                        label: 'User / Role Management', action: () => {
                            console.log('Go User Management');
                        }
                    },
                    {
                        label: 'Mobile Scan', action: () => {
                            console.log('Go User Management');
                        }
                    },
                    {
                        label: 'Process Manager', action: () => {
                            console.log('Go Process Manager');
                        }
                    },
                    {
                        label: 'Property Maintenance', action: () => {
                            console.log('Go Property Manager');
                        }
                    },
                    {
                        label: 'DTS Maintenance', action: () => {
                            console.log('Go DTS Manager');
                        }
                    },
                ]
            }]);

        this.workflowMenu = of([
            {
                label: 'Human Resources',
                state: 'closed',
                items: [
                    {
                        label: 'PTO Request', action: () => {
                            console.log('GO PTO Request');
                        }
                    },
                    {
                        label: 'Termination', action: () => {
                            console.log('Let me go bitch');
                        }
                    },
                    {
                        label: 'Fuckening', action: () => {
                            console.log('Ahh there it is! The Fuckening!');
                        }
                    }
                ]
            },
            {
                label: 'Accounting',
                state: 'closed',
                items: [
                    {label: 'Pay some shit'},
                    {label: 'Take some moneyz'},
                    {label: 'Rob some people'}
                ]
            }
        ]);
    }
}
