import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LazyLoadedComponent } from "./lazy-loaded.component";

@NgModule({
  bootstrap: [LazyLoadedComponent],
  declarations: [LazyLoadedComponent],
  imports: [CommonModule]
})
export class LazyLoadedModule {}
