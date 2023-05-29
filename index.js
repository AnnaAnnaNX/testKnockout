const obj = {
    id: 10000,
        mainCategory: true,
        title: 'Обязательные для всех',
        circles: ko.observableArray([{color: 'pink'}, {color: 'yellow'}, {color: 'orange'}]),
        required: false,
        comment: 'Документы, обязательные для всех сотрудников',
        open: true,
        children: ko.observableArray([
        {
            id: 1,
            mainCategory: true,
            title: 'Обязательные для всех',
            circles: ko.observableArray([{color: 'pink'}, {color: 'yellow'}, {color: 'orange'}]),
            required: false,
            comment: 'Документы, обязательные для всех сотрудников',
            open: true,
            children: ko.observableArray([
                {
                    id: 4,
                    mainCategory: false,
                    title: 'Паспорт',
                    circles: ko.observableArray([{color: 'blue'}]),
                    required: true,
                    comment: 'Для всех',
                },
                {
                    id: 5,
                    mainCategory: false,
                    title: 'ИНН',
                    circles: ko.observableArray([]),
                    required: true,
                    comment: 'Для всех',
                },
            ])
        },   
        {
            id: 2,
            mainCategory: true,
            title: 'Обязательные для трудоустройства',
            circles: ko.observableArray([]),
            required: false,
            comment: 'Документы, без которых невозможно трудоустройство человека на какую бы то ни было должность в компании вне зависимости от граж',
            children: ko.observableArray([])
        },    
        {
            id: 3,
            mainCategory: true,
            title: 'Специальные',
            circles: ko.observableArray([]),
            required: false,
            comment: '',
            children: ko.observableArray([])
        },  
    ])
}

function ViewModel() {
    var self = this;

    self.categories = obj.children;

    self.relocate = function(id, parentId, newParentId, newPrevId) {
        id = 1; parentId=null; newParentId=null; newPrevId = 3;
        var categoriesVal = self.categories();

        let obj = null;console.log(102)
        if (parentId) {
            //
        } else {
            categoriesVal.forEach(el => {
                if (el.id === id) {
                    obj = el
                }
                // return el.id !== id;
            });
        }

        if (parentId) {
            //
        } else {
            if (!newPrevId) throw new Error('newParentId and newPrevId are empty');
            let index = null;
            categoriesVal.forEach((el, i) => {
                if (el.id === newPrevId) {
                    index = i;
                }
            });
            
            if (index === null) {
                throw new Error('newParentId and newPrevId are empty');
            }
            categoriesVal = [
                ...categoriesVal.slice(0, index - 1),
                obj,
                ...categoriesVal.slice(index + 1, categoriesVal.length)
            ]            
        }

        self.categories(categoriesVal);
    };
}

ko.applyBindings(new ViewModel());

