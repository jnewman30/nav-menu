import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {animate, state, style, transition, trigger} from '@angular/animations';

export interface IMenuItem {
    label: string;
    sequence?: number;
    state?: string;
    items?: IMenuItem[];
    data?: any;
    action?: () => void;
}

@Component({
    selector: 'app-cat-menu',
    templateUrl: './cat-menu.component.html',
    styleUrls: ['./cat-menu.component.scss'],
    animations: [
        trigger('menuToggle', [
            state('opened', style({
                overflow: 'auto',
                'overflow-y': 'hidden',
                'max-height': '200px'
            })),
            state('closed', style({
                overflow: 'auto',
                'overflow-y': 'hidden',
                'max-height': 0,
            })),
            transition('opened => closed', [
                animate('1ms ease-in', style({'max-height': '0px'}))
            ]),
            transition('closed => opened', [
                animate('300ms ease-out', style({'max-height': '200px'}))
            ]),
        ])
    ]
})
export class CatMenuComponent implements OnInit {

    @Input() items: Observable<IMenuItem[]>;

    constructor() {
    }

    ngOnInit(): void {
    }

    ready(): boolean {
        return this.items !== null &&
            this.items !== undefined;
    }

    handleMenuItem(item: IMenuItem): void {
        if (!item.items) {
            // perform menu action...
            return;
        }

        // perform menu expansion
        this.items = this.items.pipe(
            tap(menu => {
                for (const menuItem of menu) {
                    if (menuItem === item) {
                        menuItem.state = menuItem.state === 'opened' ? 'closed' : 'opened';
                    } else {
                        if (menuItem.items !== undefined) {
                            menuItem.state = 'closed';
                        }
                    }
                }
            })
        );
    }
}
