import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import {Product} from "../models/Product";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productCollection: AngularFirestoreCollection<Product>;
  productDoc: AngularFirestoreDocument<Product>;
  products: Observable<Product[]>;
  product: Observable<Product>;

  constructor(private afs: AngularFirestore) { 
    this.productCollection = this.afs.collection('products', ref=> ref.orderBy('name'));
  }
  
  getProducts():Observable<Product[]>{
    //get Members with id
    this.products = this.productCollection.snapshotChanges().map(changes=>{
      return changes.map(action=>{
        const data = action.payload.doc.data() as Product;
        data.id = action.payload.doc.id;
        return data;
      });
    });
    return this.products;

  }

//   newDist(discount: Discount){
//     this.discountCollection.add(discount);
//   }
  getProduct(id: string): Observable<Product>{
    this.productDoc = this.afs.doc<Product>(`products/${id}`);
    this.product = this.productDoc.snapshotChanges().map( action =>{
      if(action.payload.exists === false){
        return null;
      }
      else{
        const data = action.payload.data() as Product;
        data.id = action.payload.id;
        return data;
      }
    })
    return this.product;
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
