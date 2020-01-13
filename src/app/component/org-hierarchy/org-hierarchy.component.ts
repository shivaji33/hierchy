import { Component, OnInit } from '@angular/core';
import { NgOrganizationChartHelper } from '../../../ng-organization-chart/ng-organization-chart-helper';

@Component({
  selector: 'app-org-hierarchy',
  templateUrl: './org-hierarchy.component.html',
  styleUrls: ['./org-hierarchy.component.css']
})
export class OrgHierarchyComponent implements OnInit {

  constructor() { }
  toAdd = false;
  public user = {
    name: '',
    designation: ''
  };
  saveGetData: any = {};
  data = [
    {
      id: 'CEO',
      data: {
        name: 'Janis Martin',
        designation: 'CEO',
        avatar: 'https://image.flaticon.com/icons/png/512/115/115893.png',
        isChildrenVisible: true
      },
      children: [
        {
          id: 'VP1',
          data: {
            name: 'atricia Lyons',
            designation: 'VP',
            remove: 'Remove',
            avatar: 'https://image.flaticon.com/icons/png/512/115/115893.png',
            isChildrenVisible: false
          },
          children: [
            {
              id: 'Budget Analyst',
              data: {
                name: 'Johan Cena',
                designation: 'Budget Analyst',
                remove: 'Remove',
                avatar: 'https://image.flaticon.com/icons/png/512/115/115893.png',
                isChildrenVisible: false
              },
              children: []
            }
          ]
        },
        {
          id: 'VP2',
          data: {
            name: 'Larry Phung',
            designation: 'VP',
            remove: 'Remove',
            avatar: 'https://image.flaticon.com/icons/png/512/115/115893.png',
            isChildrenVisible: false
          },
          children: [
            {
              id: 'Web Manager',
              data: {
                name: 'Larry Hong',
                designation: 'Web Manager',
                remove: 'Remove',
                avatar: 'https://image.flaticon.com/icons/png/512/115/115893.png',
                isChildrenVisible: false
              }, children: []
            },
            {
              id: 'Art Director',
              data: {
                name: 'Larry Phung Chui',
                designation: 'Art Director',
                remove: 'Remove',
                avatar: 'https://image.flaticon.com/icons/png/512/115/115893.png',
                isChildrenVisible: false
              }, children: []
            }
          ]
        },
        {
          id: 'VP3',
          data: {
            name: 'Janis Martin Luther',
            designation: 'VP',
            remove: 'Remove',
            avatar: 'https://image.flaticon.com/icons/png/512/115/115893.png',
            isChildrenVisible: false
          },
          children: []
        },
        {
          id: 'VP4',
          data: {
            name: 'Janis Martin Luther',
            designation: 'VP',
            remove: 'Remove',
            avatar: 'https://image.flaticon.com/icons/png/512/115/115893.png',
            isChildrenVisible: false
          },
          children: []
        },
        {
          id: 'VP5',
          data: {
            name: 'Janis Martin Luther',
            designation: 'VP',
            remove: 'Remove',
            avatar: 'https://image.flaticon.com/icons/png/512/115/115893.png',
            isChildrenVisible: false
          },
          children: []
        },
        {
          id: 'VP6',
          data: {
            name: 'Janis Martin Luther',
            designation: 'VP',
            remove: 'Remove',
            avatar: 'https://image.flaticon.com/icons/png/512/115/115893.png',
            isChildrenVisible: false
          },
          children: []
        },
        {
          id: 'VP7',
          data: {
            name: 'Janis Martin Luther',
            designation: 'VP',
            remove: 'Remove',
            avatar: 'https://image.flaticon.com/icons/png/512/115/115893.png',
            isChildrenVisible: false
          },
          children: []
        },
        {
          id: 'VP8',
          data: {
            name: 'Janis Martin Luther',
            designation: 'VP',
            remove: 'Remove',
            avatar: 'https://image.flaticon.com/icons/png/512/115/115893.png',
            isChildrenVisible: false
          },
          children: []
        },
        {
          id: 'VP9',
          data: {
            name: 'Janis Martin Luther',
            designation: 'VP',
            remove: 'Remove',
            avatar: 'https://image.flaticon.com/icons/png/512/115/115893.png',
            isChildrenVisible: false
          },
          children: []
        },
        {
          id: 'VP10',
          data: {
            name: 'Janis Martin Luther',
            designation: 'VP',
            remove: 'Remove',
            avatar: 'https://image.flaticon.com/icons/png/512/115/115893.png',
            isChildrenVisible: false
          },
          children: []
        },
        {
          id: 'VP11',
          data: {
            name: 'Janis Martin Luther',
            designation: 'VP',
            remove: 'Remove',
            avatar: 'https://image.flaticon.com/icons/png/512/115/115893.png',
            isChildrenVisible: false
          },
          children: []
        },
        {
          id: 'VP12',
          data: {
            name: 'Janis Martin Luther',
            designation: 'VP',
            remove: 'Remove',
            avatar: 'https://image.flaticon.com/icons/png/512/115/115893.png',
            isChildrenVisible: false
          },
          children: []
        },
        {
          id: 'VP13',
          data: {
            name: 'Janis Martin Luther',
            designation: 'VP',
            remove: 'Remove',
            avatar: 'https://image.flaticon.com/icons/png/512/115/115893.png',
            isChildrenVisible: false
          },
          children: []
        },
        {
          id: 'VP14',
          data: {
            name: 'Janis Martin Luther',
            designation: 'VP',
            remove: 'Remove',
            avatar: 'https://image.flaticon.com/icons/png/512/115/115893.png',
            isChildrenVisible: false
          },
          children: []
        },
        {
          id: 'VP15',
          data: {
            name: 'Janis Martin Luther',
            designation: 'VP',
            remove: 'Remove',
            avatar: 'https://image.flaticon.com/icons/png/512/115/115893.png',
            isChildrenVisible: false
          },
          children: []
        }
      ]
    }
  ];

  ngOnInit() {
  }

  dragNode(transfer) {
    const helper = new NgOrganizationChartHelper(this.data);
    helper.moveNode(transfer.node.id, transfer.destination.id);
    const data = helper.getData();
    this.data = data;
  }

  clickNode(transfer) {
    const helper = new NgOrganizationChartHelper(this.data);
    helper.test(transfer.id);
    const data = helper.getData();
    this.data = data;
  }

  addNode(transfer) {
    this.saveGetData = transfer;
    this.toAdd = true;
  }

  reset = () => {
    this.user = {
      name: '',
      designation: ''
    };
  }

  add = () => {
    const helper = new NgOrganizationChartHelper(this.data);
    helper.testAdd(this.saveGetData.id, this.data, this.user);
    const data = helper.getUpdatedNode();
    this.data = data;
    this.reset();
    this.toAdd = false;
  }

}
