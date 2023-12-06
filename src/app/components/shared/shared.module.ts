import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';

// import { NavBarComponent } from "./nav-bar/nav-bar.component";
// import { RouterModule } from "@angular/router";


@NgModule({
    declarations: [
        // NavBarComponent,
    ],
    imports : [
        CommonModule,
        HttpClientModule
        // RouterModule
    ],
    exports : [
        // NavBarComponent,
    ]
})
export class SharedModule{}