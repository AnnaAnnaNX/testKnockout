console.log(1);

const arr = [
    {
        mainCategory: true,
        title: 'Обязательные для всех',
        circles: ko.observableArray([{color: 'pink'}, {color: 'yellow'}, {color: 'orange'}]),
        required: false,
        comment: 'Документы, обязательные для всех сотрудников',
        open: true,
        children: ko.observableArray([
            {
                mainCategory: false,
                title: 'Паспорт',
                circles: ko.observableArray([{color: 'blue'}]),
                required: true,
                comment: 'Для всех',
            },
            {
                mainCategory: false,
                title: 'ИНН',
                circles: [],
                required: true,
                comment: 'Для всех',
            },
        ])
    },   
    {
        mainCategory: true,
        title: 'Обязательные для трудоустройства',
        circles: ko.observableArray([]),
        required: false,
        comment: 'Документы, без которых невозможно трудоустройство человека на какую бы то ни было должность в компании вне зависимости от граж',
        children: ko.observableArray([])
    },    
    {
        mainCategory: true,
        title: 'Специальные',
        circles: ko.observableArray([]),
        required: false,
        comment: '',
        children: ko.observableArray([])
    },  
]

function ViewModel() {
    var self = this;

    self.categories = ko.observableArray(arr);
}

ko.applyBindings(new ViewModel());

