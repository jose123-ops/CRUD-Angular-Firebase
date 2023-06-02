import { Router, Routes } from "@angular/router"

export const appRoutes: Routes =[
    {
        path: '', redirectTo: 'Empleados', pathMatch: 'full',

    },
    {
        path: 'Empleados',
        loadChildren: ()=>  import('./Empleados/Empleados.routes').then(routes => routes.empleadosRoutes)
  
    }
]