import Application from 'shopping-cart-application/app';
import config from 'shopping-cart-application/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
