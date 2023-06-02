import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import {provideFirebaseApp,initializeApp} from '@angular/fire/app';
import { enviroments } from './enviroments/enviroments';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/Pages/app.routes';



bootstrapApplication(AppComponent,{
    providers:[
        provideRouter(appRoutes),
        importProvidersFrom(
            provideFirebaseApp(()=>initializeApp(enviroments.firebase)),
            provideFirestore(()=> getFirestore())
        )
    ]
}).catch((err) => console.log(err));