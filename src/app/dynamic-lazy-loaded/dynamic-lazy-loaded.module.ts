import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DynamicLazyLoadedComponent } from "./dynamic-lazy-loaded.component";

@NgModule({
  bootstrap: [DynamicLazyLoadedComponent],
  declarations: [DynamicLazyLoadedComponent],
  imports: [CommonModule]
})
export class DynamicLazyLoadedModule {}
