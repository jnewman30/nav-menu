import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {CatMenuComponent} from './cat-menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';

@NgModule({
    declarations: [CatMenuComponent, MenuItemComponent],
    imports: [
        CommonModule,
        RouterModule,
        MatIconModule,
        MatButtonModule
    ],
    exports: [CatMenuComponent]
})
export class CatMenuModule {
}
