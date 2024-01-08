import { Component, OnInit } from '@angular/core';
import { Shoe } from '../shoe';
import { ActivatedRoute } from '@angular/router';
import { ShoeService } from '../shoe.service';

@Component({
  selector: 'app-shoe-details',
  templateUrl: './shoe-details.component.html',
  styleUrls: ['./shoe-details.component.css']
})
export class ShoeDetailsComponent {
    id: number
    shoe: Shoe
    constructor(private route: ActivatedRoute, private shoeService: ShoeService){}

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];

      this.shoe = new Shoe();
      this.shoeService.getShoeById(this.id).subscribe( data => {
        this.shoe = data;
      })
    }
}
