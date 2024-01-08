import { Component } from '@angular/core';
import { ShoeService } from '../shoe.service';
import { Shoe } from '../shoe';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-shoe',
  templateUrl: './update-shoe.component.html',
  styleUrls: ['./update-shoe.component.css']
})
export class UpdateShoeComponent {
  id: number;
  shoe: Shoe = new Shoe();

  constructor(private shoeService: ShoeService,
     private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.shoeService.getShoeById(this.id).subscribe( data => {
      this.shoe = data;
    },
    error => console.log(error));
  }

  saveShoe(){
    this.router.config;
    this.shoeService.updateShoe(this.id, this.shoe).subscribe( data => {
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
    this.goToShoeList();
  }
}
