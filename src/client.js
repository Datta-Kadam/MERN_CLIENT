
import React from 'react';
import {render} from 'react-dom';
import hoistNonReactStatic from 'hoist-non-react-statics';


//Import car actions
import {addToCart} from './actions/cartActions';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import {BrowserRouter,Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

import BooksList from './components/pages/booksList';
import BooksForm from './components/pages/booksForm';
import Cart from './components/pages/cart';
import Menu from './components/menu';
import Footer from './components/footer';


/*const Routes=(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={BooksList} />
                <Route path="/admin" component={BooksForm} />
                <Route path="/cart" component={Cart} />
            </Route>
        </Router>
    </Provider>
    );*/
const Routes=(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Menu />
                <Switch>
                    <Route exact path="/" component={BooksList} />
                    <Route exact path="/admin" component={BooksForm} />
                    <Route exact path="/cart" component={Cart} />
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    </Provider>
)

render(
       Routes, 
        document.getElementById('app')
    );
// POST A BOOK

