import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsData: any;
  // data: any;

  constructor(
    private profile: ProfileService
  ) { }

  ngOnInit() {
    this.getSkills();
  }

  getSkills() {
    // this.profile.skills().subscribe(data => {
    //   this.skillsData = data.response;
    // });
    this.skillsData = this.profile.skills();
  }

}
