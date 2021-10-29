import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  valor = "Angular";

  onKey(event: any) {
    this.valor = event.target.value;
  }
}
