import {Component, Input, OnInit} from '@angular/core';
import {NavMenuItem} from './nav-menu-item';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-nav-menu',
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.scss'],
    animations: [
        trigger('menuToggle', [
            state('true', style({
                'max-height': '3000px'
            })),
            state('false', style({
                'max-height': '0px'
            })),
            transition('* => true', [
                animate('1s')
            ]),
            transition('* => false', [
                animate('1s')
            ])
        ])
    ]
})
export class NavMenuComponent implements OnInit {

    @Input() items: NavMenuItem[] = [];

    constructor() {
    }

    ngOnInit(): void {
    }

    menuAction(item: NavMenuItem): void {
        if (item.items) {
            this.toggleSubMenu(item);
        }
        if (item.action) {
            item.action(item);
        }
    }

    public toggleSubMenu(item: NavMenuItem): void {
        item.expanded = !item.expanded;
    }

    public expandAllItems(): void {
        this.iterateAllItems(this.items, item => {
            item.expanded = true;
        });
    }

    public collapseAllItems(): void {
        this.iterateAllItems(this.items, item => {
            item.expanded = false;
        });
    }

    public iterateAllItems(items: NavMenuItem[], action: (item: NavMenuItem) => void): void {
        for (const item of items) {
            action(item);
            if (item.items) {
                this.iterateAllItems(item.items, action);
            }
        }
    }
}
