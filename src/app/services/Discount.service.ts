import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import {Discount} from "../models/Discount";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable({
  providedIn: 'root'
})
export class DiscountService {
  discountCollection: AngularFirestoreCollection<Discount>;
  discountDoc: AngularFirestoreDocument<Discount>;
  discounts: Observable<Discount[]>;
  discount: Observable<Discount>;

  constructor(private afs: AngularFirestore) { 
    this.discountCollection = this.afs.collection('discounts', ref=> ref.orderBy('name'));
  }
  
  getDiscounts():Observable<Discount[]>{
    //get discounts with id
    this.discounts = this.discountCollection.snapshotChanges().map(changes=>{
      return changes.map(action=>{
        const data = action.payload.doc.data() as Discount;
        data.id = action.payload.doc.id;
        return data;
      });
    });
    return this.discounts;

  }

  newDist(discount: Discount){
    this.discountCollection.add(discount);
  }
  getDiscount(id: string): Observable<Discount>{
    this.discountDoc = this.afs.doc<Discount>(`discounts/${id}`);
    this.discount = this.discountDoc.snapshotChanges().map( action =>{
      if(action.payload.exists === false){
        return null;
      }
      else{
        const data = action.payload.data() as Discount;
        data.id = action.payload.id;
        return data;
      }
    })
    return this.discount;
  }

  //for updating discount
  updateDiscount(discount: Discount){
    this.discountDoc = this.afs.doc(`discounts/${discount.id}`);
    this.discountDoc.update(discount);
  }
  //delete discount
  deleteDiscount(discount: Discount){
    this.discountDoc = this.afs.doc(`discounts/${discount.id}`);
    this.discountDoc.delete();
  }
}
