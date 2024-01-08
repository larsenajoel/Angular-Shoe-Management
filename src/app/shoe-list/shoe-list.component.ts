import { Component, OnInit } from '@angular/core';
import { Shoe } from '../shoe';
import { ShoeService } from '../shoe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'shoe-list',
  templateUrl: './shoe-list.component.html',
  styleUrls: ['./shoe-list.component.css']
})
export class ShoeListComponent implements OnInit {
    
    shoes: Shoe[];

    constructor(private shoeService: ShoeService, private router: Router) { }

    ngOnInit(): void {
        this.getShoes();
    }


    private getShoes(){
      this.shoeService.getShoesList().subscribe(data =>{
        this.shoes = data;
      }
        )
    }

    updateShoe(id: number){
      this.router.navigate(['update-shoe', id]);
    }

    deleteShoe(id: number){
      this.shoeService.deleteShoe(id).subscribe(data =>{
        this.getShoes();
      }
        )
    }

    viewShoe(id: number){
      this.router.navigate(['shoe-details', id]);
    }

}
