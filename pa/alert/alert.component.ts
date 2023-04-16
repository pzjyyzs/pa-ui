import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export type AlertType = 'positive' | 'negative' | 'warning' | 'info';

@Component({
  selector: 'p-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.less']
})
export class AlertComponent implements OnInit {

  @Input() type: AlertType = 'info';
  // 是否显示图标，用于支持用户自定义图标
  @Input() showIcon = true;
  // 是否可关闭
  @Input() closeable = false;

  @Output() closeEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  hide = false;
  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.closeEvent.emit(true);
    this.hide = true;
  }
}
