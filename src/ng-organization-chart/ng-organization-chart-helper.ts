export class NgOrganizationChartHelper {

    firstIds = [];
    nodesRelations = {};
    nodesData = {};
    ids = [];
    searchedNode = '';
    updatedNode = [];

    constructor(data) {
        this.firstIds = this.scanChildren(data);
    }

    private scanChildren(children) {
        const ids = [];
        // tslint:disable-next-line:forin
        for (const i in children) {
            const child = children[i];
            ids.push(child.id);
            this.ids.push(child.id);
            this.nodesRelations[child.id] = this.scanChildren(child.children);
            this.nodesData[child.id] = child.data;
            this.nodesData[child.id] = child.data;
        }
        return ids;
    }

    public moveNode(nodeId, destinationNodeId) {
        // tslint:disable-next-line:forin
        for (const i in this.ids) {
            const id = this.ids[i];
            this.nodesRelations[id] = this.removeValueFromArray(this.nodesRelations[id], nodeId);
        }
        this.nodesRelations[destinationNodeId].push(nodeId);
    }

    private removeValueFromArray(array, value) {
        const index = array.indexOf(value);
        if (index >= 0) {
            array.splice(index, 1);
        }
        return array;
    }

    public test = (nodeId) => {
        // tslint:disable-next-line:forin
        for (const i in this.ids) {
            const id = this.ids[i];
            this.nodesRelations[id] = this.removeValueFromArray(this.nodesRelations[id], nodeId);
        }
    }

    private addNode = (chilDren) => {
        const nodes = [];
        const data1 = {
            name: 'Satin',
            designation: 'SEO',
            remove: 'Remove',
            avatar: 'https://image.flaticon.com/icons/png/512/115/115893.png'
        };
        const obj = {
            id: 'NA1',
            data: data1,
            children: []
        };
        chilDren.push(obj);
        return chilDren;
    }

    private searchTree(element, matchingTitle) {
        if (element.id === matchingTitle) {
            return element;
        } else if (element.children != null) {
            let i;
            let result = null;
            for (i = 0; result == null && i < element.children.length; i++) {
                result = this.searchTree(element.children[i], matchingTitle);
            }
            return result;
        }
        return null;
    }

    public testAdd = (nodeID, data, user) => {
        const element = data[0];
        const result = this.searchTree(element, nodeID);
        const data1 = {
            name: user.name,
            designation: user.designation,
            remove: 'Remove',
            avatar: 'https://image.flaticon.com/icons/png/512/115/115893.png',
            isChildrenVisible: false
        };
        const obj = {
            id: user.designation + '' + Math.random().toString(36).substring(7),
            data: data1,
            children: []
        };
        result.children.push(obj);
        result.data.isChildrenVisible = true;
        this.searchedNode = nodeID;
        this.updatedNode = result.children;
    }

    public getUpdatedNode = () => {
        return this.updateSelectedNode(this.firstIds);
    }
    private updateSelectedNode = (ids) => {
        const nodes = [];
        // tslint:disable-next-line:forin
        for (const i in ids) {
            const ID = ids[i];
            let chilDren = this.updateSelectedNode(this.nodesRelations[ID]);
            if (ID === this.searchedNode) {
                chilDren = this.updatedNode;
            }
            nodes.push({
                id: ID,
                data: this.nodesData[ID],
                children: chilDren
            });
        }
        return nodes;
    }

    public getData() {
        return this.getNodes(this.firstIds);
    }

    private getNodes(ids) {
        const nodes = [];
        // tslint:disable-next-line:forin
        for (const i in ids) {
            const ID = ids[i];
            const chilDren = this.getNodes(this.nodesRelations[ID]);
            nodes.push({
                id: ID,
                data: this.nodesData[ID],
                children: chilDren
            });
        }
        return nodes;
    }

}
