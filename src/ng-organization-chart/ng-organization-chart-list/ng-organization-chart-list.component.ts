import { NgOrganizationChartNodeModel } from './../ng-organization-chart-node-model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-ng-organization-chart-list',
  templateUrl: './ng-organization-chart-list.component.html',
  styleUrls: ['./ng-organization-chart-list.component.css']
})
export class NgOrganizationChartListComponent implements OnInit {

  @Input() nodeList: Array<NgOrganizationChartNodeModel> = [];
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onClickNode: EventEmitter<NgOrganizationChartNodeModel> = new EventEmitter();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onDragNode: EventEmitter<any> = new EventEmitter();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onClickAddNode: EventEmitter<NgOrganizationChartNodeModel> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClickDeepNode(node) {
    this.onClickNode.emit(node);
  }

  onDragDeepNode(transfer) {
    this.onDragNode.emit(transfer);
  }

  onAddDeepNode(node) {
    this.onClickAddNode.emit(node);
  }

}
