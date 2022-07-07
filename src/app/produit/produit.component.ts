import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  constructor(private produitService:ProduitService) { }

  ngOnInit(): void {
    this.getAllProduits();
  }

  getAllProduits(){
    console.log("starting .....");
    this.produitService
      .getProduits()
      .subscribe(data => console.log(data));
}

}

/*
import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  constructor(private produitService:ProduitService, 
    private router:Router) { }

  ngOnInit(): void {
    //this.getAllProduits();
  }

  getAllProduits(){
    console.log("starting .....");
    this.produitService
      .getProduits()
      .subscribe(data => console.log(data));
}

}

*/