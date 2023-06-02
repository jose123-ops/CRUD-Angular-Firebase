import { Injectable } from '@angular/core';
import { Firestore, addDoc, collectionData, doc, getDoc, getDocs, query, updateDoc, deleteDoc, where, } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { player } from '../commons/interface/player.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private firestore: Firestore) { }

  addPlayer(player: player) {

    const playerRef = collection(this.firestore, 'players');
    return addDoc(playerRef, player);
  }

  getplayer(filter = '') {
    const playerRef = collection(this.firestore, 'players');

    let q = query(playerRef);

    if (filter) {

      q = query(playerRef, where("name", '==', filter));
    }

    return collectionData(q) as unknown as Observable<player[]>;
  }


  async updateplayer(player: player) {
    const playerRef = collection(this.firestore, 'players');
    let q = query(playerRef, where('id', '==', player.id));
    const querySnapshot = await getDocs(q);


    querySnapshot.forEach(async document => {
      const docRef = doc(this.firestore, 'players', document.id);
      await updateDoc(docRef, { ...player })

    });
  }

  async deletedplayer(id: string) {
    const playerRef = collection(this.firestore, 'players');
    let q = query(playerRef, where('id', '==', id));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async document => {
      const docRef = doc(this.firestore, 'players', document.id);
      await deleteDoc(docRef);

    });
  }

}

