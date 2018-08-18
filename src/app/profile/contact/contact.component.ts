import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  model: any = {};

  constructor(
    private profile: ProfileService
  ) { }

  ngOnInit() {
  }

  contact() {
    this.profile.contactus(this.model).subscribe(data => {
    });
  }

}
