import { Meteor } from 'meteor/meteor';
import { Links } from '../imports/collections/Links';
import { WebApp } from 'meteor/webapp';
import ConnectRoute from 'connect-route';

Meteor.startup(() => {
    Meteor.publish('links', () => Links.find({}));
});

const onRoute = (req, res, next) => {
    const link = Links.findOne({ token: req.params.token });

    if (link) {
        Links.update(link, { $inc: { clicks: 1 } });
        res.writeHead(307, { location: link.url });
        res.end();
    } else {
        next();
    }
};

const middleware = ConnectRoute((router) => {
    router.get('/:token', onRoute);
});

WebApp.connectHandlers.use(middleware);
