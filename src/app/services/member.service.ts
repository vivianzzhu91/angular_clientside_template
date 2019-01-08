import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Member } from "../models/Member";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable({
  providedIn: 'root'
})
export class MemberService {
  memberCollection: AngularFirestoreCollection<Member>;
  memberDoc: AngularFirestoreDocument<Member>;
  members: Observable<Member[]>;
  member: Observable<Member>;

  constructor(private afs: AngularFirestore) { 
    this.memberCollection = this.afs.collection('members', ref=> ref.orderBy('name'));
  }
  
  getMembers():Observable<Member[]>{
    //get Members with id
    this.members = this.memberCollection.snapshotChanges().map(changes=>{
      return changes.map(action=>{
        const data = action.payload.doc.data() as Member;
        data.id = action.payload.doc.id;
        return data;
      });
    });
    return this.members;

  }

//   newDist(discount: Discount){
//     this.discountCollection.add(discount);
//   
  getMember(id: string): Observable<Member>{
    this.memberDoc = this.afs.doc<Member>(`members/${id}`);
    this.member = this.memberDoc.snapshotChanges().map( action =>{
      if(action.payload.exists === false){
        return null;
      }
      else{
        const data = action.payload.data() as Member;
        data.id = action.payload.id;
        return data;
      }
    })
    return this.member;
  }

//   //for updating discount
//   updateDiscount(discount: Discount){
//     this.discountDoc = this.afs.doc(`discounts/${discount.id}`);
//     this.discountDoc.update(discount);
//   }
//   //delete discount
//   deleteDiscount(discount: Discount){
//     this.discountDoc = this.afs.doc(`discounts/${discount.id}`);
//     this.discountDoc.delete();
//   }
}
