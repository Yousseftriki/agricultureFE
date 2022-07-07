import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  public produitsData: any;
  constructor(private produitService:ProduitService) { }

  ngOnInit(): void {
    this.getAllProduits();
  }

  getAllProduits(){
    console.log("starting .....");
    this.produitService
      .getProduits()
      .subscribe(data => {
        this.produitsData=data;
        console.log(this.produitsData)});
}




}

