import {Component, OnInit} from '@angular/core';
import {IMenuItem} from '../imenu-item';

@Component({
    selector: 'app-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

    item: IMenuItem = null;

    constructor() {
    }

    ngOnInit(): void {
    }

}
