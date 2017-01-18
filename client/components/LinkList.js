import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import { Links } from '../../imports/collections/Links';

class LinkList extends Component {
    renderRows() {
        const {
            links
        } = this.props;

        console.log('rendering links: ', links);
        return links.map(link => {
            const {
                url,
                clicks,
                token
            } = link;
            const shortLink = `http://localhost:3000/${token}`;

            return (
                <tr key={token}>
                    <td>{url}</td>
                    <td>
                        <a
                            href={shortLink}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            {shortLink}
                        </a>
                    </td>
                    <td>{clicks}</td>
                </tr>
            );
        });
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>URL</th>
                        <th>Address</th>
                        <th>Clicks</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        );
    }
}

export default createContainer(() => {
    Meteor.subscribe('links');

    return { links: Links.find({}).fetch() };
}, LinkList);
