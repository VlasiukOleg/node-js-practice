const books = require('./books');



const invokeActions = async ({action, id, title, author }) => {
    switch (action) {
        case 'read':
            const allBooks = await books.getAll()
            return console.log(allBooks);
        case 'getById': 
            const oneBook = await books.getById(id)
            return console.log(oneBook);
        case 'add': 
            const newBook = await books.add({title, author})
            return console.log(newBook);
        case 'updateById' :
            const update = await books.updateById(id, {title, author})
            return console.log(update);
        case 'deleteById':
            const deleteBook = await books.deleteById(id)
            return console.log(deleteBook);
    }
}

invokeActions({action: 'read' });
invokeActions({action: 'getById', id: 2})
// invokeActions({action: 'add', title: 'The Hobbit', author: "J.R.R. Tolkien"})
// invokeActions({action: 'updateById', id: 'L2b9BG2ev05BQm5F1sHDv',  title: 'The Hobbit2', author: "J.R.R. Tolkien"})
invokeActions({action: 'deleteById', id: "cjrWxknMXRBNJQnoEKvNn"})




