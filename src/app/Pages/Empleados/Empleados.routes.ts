import { Routes } from "@angular/router"
import { ListaEmpleadosComponent } from "./lista-empleados/lista-empleados.component"
import { AgregraEmpleadosComponent } from "./agregra-empleados/agregra-empleados.component"
import { EditarEmpleadosComponent } from "./editar-empleados/editar-empleados.component"


export const empleadosRoutes: Routes = [
    { path:'',title:'lista de empleado', component:ListaEmpleadosComponent},
    { path:'agregar',title:'agregar empleados', component:AgregraEmpleadosComponent},
    { path:'editar',title:'Editar Empleados', component:EditarEmpleadosComponent},
    { path:'lista',title:'lista de empleado', component:ListaEmpleadosComponent}
]