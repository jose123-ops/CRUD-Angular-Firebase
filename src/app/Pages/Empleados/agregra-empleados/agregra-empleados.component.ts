import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { PlayersService } from 'src/app/services/players.service';
import { Router } from '@angular/router';
import { player } from 'src/app/commons/interface/player.interface';


@Component({
  selector: 'app-agregra-empleados',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './agregra-empleados.component.html',
  styleUrls: ['./agregra-empleados.component.css']
})
export class AgregraEmpleadosComponent {
 
   _playerServices = inject(PlayersService);
   _router = inject(Router);
  


     form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      cedula: new FormControl('', Validators.required),
      salario: new FormControl('', Validators.required),
    });

  

  addplayer(){
    this._playerServices.addPlayer({
      id: new Date().getTime().toString(),
      ...this.form.getRawValue()
      
    } as player);
    this._router.navigate(['Empleados/lista'])
    }

    
    


  }

  




