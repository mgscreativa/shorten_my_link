import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Links } from '../imports/collections/Links';
import Header from './components/Header';
import LinkCreate from './components/LinkCreate';
import LinkList from './components/LinkList';

const App = () => {
    return (
        <div>
            <Header />
            <LinkCreate />
            <LinkList />
        </div>
    );
};

Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.render-target'));
});
