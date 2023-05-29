function ViewModel() {
    var self = this;

    self.obj = initObj;

    self.categories = initObj.children;

    self.graggableEl = null;

    self.setDraggable = function(el) {
        let objVal = self.obj;
        const prevDraggableId = self.graggableEl?.id;
        if (prevDraggableId) {
            const prevDraggable = findElementById(prevDraggableId, self.obj);
            draggable.draggable = false;
            draggable.draggableClass = '';
        }
        if (el?.id) {
            const draggable = findElementById(el?.id, self.obj);
            self.graggableEl = draggable;
            draggable.draggable = true;
            draggable.draggableClass = 'draggable';
        }              
        self.categories(objVal.children());
        self.categories.valueHasMutated();
    }
}

ko.applyBindings(new ViewModel());

