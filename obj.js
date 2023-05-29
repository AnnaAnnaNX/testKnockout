const initObj = {
        id: 10000,
        mainCategory: true,
        title: '',
        circles: ko.observableArray([]),
        required: false,
        comment: '',
        open: true,
        draggable: false,
        draggableClass: '',
        children: ko.observableArray([
        {
            id: 1,
            mainCategory: true,
            title: 'Обязательные для всех',
            circles: ko.observableArray([{color: 'pink'}, {color: 'yellow'}, {color: 'orange'}]),
            required: false,
            comment: 'Документы, обязательные для всех сотрудников',
            open: true,
            draggable: true,
            draggableClass: 'draggable',
            children: ko.observableArray([
                {
                    id: 4,
                    mainCategory: false,
                    title: 'Паспорт',
                    circles: ko.observableArray([{color: 'blue'}]),
                    required: true,
                    comment: 'Для всех',
                    draggable: false,
                    draggableClass: '',
                    children: ko.observableArray([])
                },
                {
                    id: 5,
                    mainCategory: false,
                    title: 'ИНН',
                    circles: ko.observableArray([]),
                    required: true,
                    comment: 'Для всех',
                    draggable: false,
                    draggableClass: '',
                    children: ko.observableArray([])
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
            draggable: false,
            draggableClass: '',
            open: false,
            children: ko.observableArray([])
        },    
        {
            id: 3,
            mainCategory: true,
            title: 'Специальные',
            circles: ko.observableArray([]),
            required: false,
            comment: '',            
            draggable: false,
            draggableClass: '',
            open: false,
            children: ko.observableArray([])
        },  
    ]).extend({notify: 'always'})
}
