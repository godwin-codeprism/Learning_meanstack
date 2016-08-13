import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {HTTP_PROVIDERS} from '@angular/http';

import {AppComponent} from './app.component';
enableProdMode();
bootstrap(AppComponent,[
    HTTP_PROVIDERS,
    disableDeprecatedForms(),
    provideForms(),
]);
