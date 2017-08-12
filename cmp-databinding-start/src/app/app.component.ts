import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{ name: "Test", type: "server", content: "This is a test server" }];

  onServerAdded(serverData: {serverName: string, content: string }) {
    this.serverElements.push({
      type: "server",
      name: serverData.serverName,
      content: serverData.content
    });
  }

  onBlueprintAdded(blueprintData: {blueprintName: string, content: string}) {
    this.serverElements.push({
      type: "blueprint",
      name: blueprintData.blueprintName,
      content: blueprintData.content
    });
  }
}
