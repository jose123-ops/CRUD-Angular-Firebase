import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersService } from 'src/app/services/players.service';
import { Observable, Subscription } from 'rxjs';
import { player } from 'src/app/commons/interface/player.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-empleados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent  {
  // subPlayers: Subscription
  _playerservices = inject(PlayersService);
  players$!: Observable<player[]>;
  _router = inject(Router);
    

  ngOnInit(){
    // console.log("la pagina inicio")
   // this._playerservices.getplayer().subscribe((res: any)=> console.log(res))
     
    this.players$ =this._playerservices.getplayer();
  }
  editplayer(player:player){

    console.log(player)
    this._router.navigateByUrl('Empleados/editar',{state:{player}});
  }


  deletedPlayer(player:player){
    if(confirm('seguro de borrar a ${player.nombre}')){
  this._playerservices.deletedplayer(player.id);
    }
  }


// ngOnDestroy(){
//   this.subPlayers?.unsubscribe()
//   console.log("la pagina se destruyo")
// }

}
