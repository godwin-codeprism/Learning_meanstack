import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {disableDeprecatedForms, provideForms} from '@angular/forms'

import {AppComponent} from './app.component';
enableProdMode();
bootstrap(AppComponent,[
    disableDeprecatedForms(),
    provideForms(),
]);
