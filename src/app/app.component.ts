import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public showDynamic: boolean = false;

  public toggleDynamic(): void {
    this.showDynamic = !this.showDynamic;
  }
}
