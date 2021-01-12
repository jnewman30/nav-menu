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
    }

    ngOnInit(): void {
    }

    public toggleSubMenu(item: NavMenuItem): void {
        item.expanded = !item.expanded;
    }

    public expandAllItems(): void {
        this.iterateAllItems(this.items, item => item.expanded = true);
    }

    public collapseAllItems(): void {
        this.iterateAllItems(this.items, item => item.expanded = false);
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
