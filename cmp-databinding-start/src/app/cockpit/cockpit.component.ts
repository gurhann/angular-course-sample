import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output()
  serverCreated = new EventEmitter<{serverName: string, content: string}>();
  @Output()
  blueprintCreated = new EventEmitter<{blueprintName: string, content: string}>();

  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  constructor() { }

  ngOnInit() {
  }

   onAddServer(nameInput: HTMLInputElement) {
     this.serverCreated.emit({serverName: nameInput.value, content: this.serverContentInput.nativeElement.value});
   }

   onAddBlueprint(nameInput: HTMLInputElement) {
      this.blueprintCreated.emit({blueprintName: nameInput.value, content: this.serverContentInput.nativeElement.value});

   }
}
