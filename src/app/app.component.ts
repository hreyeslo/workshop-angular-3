import { Component, OnInit, Inject } from "@angular/core";
import { } from "./ejercicio/example.model";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  config = {};

  constructor(
    // Injectar el token
  ) {}

  ngOnInit() {
    // Asignar la configuración a la varaiable config
  }
}
