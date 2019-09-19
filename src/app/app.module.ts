import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HeroLoaderModule } from "@herodevs/hero-loader";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule, HeroLoaderModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
