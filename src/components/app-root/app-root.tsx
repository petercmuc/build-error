/** @format */

import { Component, h, Event, EventEmitter } from "@stencil/core";

/** Change the path of the import below to provoke an error */
import { MyType } from "./../types/myType";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css",
  shadow: true,
})
export class AppRoot {
  @Event({ eventName: "myTypeEvent" }) showMessage: EventEmitter<MyType>;

  render() {
    return <div> Build Error Test</div>;
  }
}
