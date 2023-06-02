import { Component, inject } from '@angular/core';
import { CommonModule,Location } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PlayersService } from 'src/app/services/players.service';
import { Observable } from 'rxjs';
import { player } from 'src/app/commons/interface/player.interface';
import { Router } from '@angular/router';
import { collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-editar-empleados',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './editar-empleados.component.html',
  styleUrls: ['./editar-empleados.component.css']
})
export class EditarEmpleadosComponent {
  _PlayerService =inject(PlayersService);
  _router = inject(Router);
  _location =inject(Location);
  player!: player;

  form = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    cedula: new FormControl('', Validators.required),
    salario: new FormControl('', Validators.required),
  });

  ngOnInit() {
console.log(this._location.getState());
this.player = (this._location.getState() as any).player;

this.form.patchValue(this.player as any)
  }

  editplayer(player: player) {
    this._router.navigateByUrl('Empleados/editar')
  }



  updateplayer(){
    this._PlayerService.updateplayer({
      id: this.player.id,
      ...this.form.getRawValue(),
    } as player);
    this._router.navigate(['Empleados/lista']);
  }

}
