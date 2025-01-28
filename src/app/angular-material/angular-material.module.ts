import { NgModule } from "@angular/core";

//Components Angular Material
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
    imports: [
        MatListModule,
        MatDividerModule
    ],
    exports: [
        MatListModule,
        MatDividerModule
    ]
})
export class AngularMaterialModule{}