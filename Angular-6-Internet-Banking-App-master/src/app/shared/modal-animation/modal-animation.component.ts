import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-modal-animation',
  templateUrl: './modal-animation.component.html',
  styleUrls: ['./modal-animation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalAnimationComponent implements OnInit {

  @Input() modalClass: string;
  @Input() contentClass: string;
  @Input() modalID: string;
  @Input() backDrop = false;

  //  @Input() sessionCount: number;
  //  @Input() sessionCountMinutes: number;
  //  @Input() sessionCountSeconds: number;
  //  @Input() sessionProgressCount: number;
  //  @Input() sessionTimeOut: boolean;

  constructor() { }

  ngOnInit() {

  }

  close(event) {
    document.querySelector('#' + event).classList.remove('md-show');
  }
}
