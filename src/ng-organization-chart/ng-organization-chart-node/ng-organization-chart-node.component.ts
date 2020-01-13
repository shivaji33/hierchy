import { NgOrganizationChartNodeModel } from './../ng-organization-chart-node-model';
import { Component, OnInit, Input, ComponentFactoryResolver, ViewContainerRef, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ng-organization-chart-node',
  templateUrl: './ng-organization-chart-node.component.html',
  styleUrls: ['./ng-organization-chart-node.component.scss']
})
export class NgOrganizationChartNodeComponent implements OnInit {

  @Input() node: NgOrganizationChartNodeModel;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onClickNode: EventEmitter<NgOrganizationChartNodeModel> = new EventEmitter();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onDragNode: EventEmitter<any> = new EventEmitter();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onClickAddNode: EventEmitter<NgOrganizationChartNodeModel> = new EventEmitter();

  public childrenStyleClass = 'horizontal';
  public isChildrenVisible = true;

  constructor() { }

  ngOnInit() {
  }

  clickNode() {
    this.onClickNode.emit(this.node);
  }

  addNode() {
    this.onClickAddNode.emit(this.node);
  }

  onClickDeepNode(node) {
    this.onClickNode.emit(node);
  }

  onAddDeepNode(node) {
    this.onClickAddNode.emit(node);
  }

  changeChildrenStyleToVertical() {
    this.childrenStyleClass = 'vertical';
  }

  changeChildrenStyleToHorizontal() {
    this.childrenStyleClass = 'horizontal';
  }

  hideChildren() {
    this.isChildrenVisible = false;
  }

  showChildren() {
    this.isChildrenVisible = true;
  }
  // working on it
  testHide = (node) => {
    node.data.isChildrenVisible = !node.data.isChildrenVisible;
    return;
  };

  dropNode(event) {
    const transfer = {
      node: event.dragData,
      destination: this.node
    };
    this.onDragNode.emit(transfer);
  }

  onDragDeepNode(transfer) {
    this.onDragNode.emit(transfer);
  }
}
