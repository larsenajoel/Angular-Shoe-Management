import { Component, OnInit } from '@angular/core';
import { Shoe } from '../shoe';
import { ShoeService } from '../shoe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-shoe',
  templateUrl: './create-shoe.component.html',
  styleUrls: ['./create-shoe.component.css']
})
export class CreateShoeComponent implements OnInit{
    shoe: Shoe = new Shoe();

    constructor(private shoeService: ShoeService, private router: Router) {}

    ngOnInit(): void {
        
    }

    saveShoe(){
      this.shoeService.createShoe(this.shoe).subscribe( data => {
        console.log(data);
      },
      error => console.log(error));
    }

    goToShoeList(){
      this.router.navigate(['/shoes'])
    }

    onSubmit(){
      console.log(this.shoe);
      this.saveShoe();
    }
}
