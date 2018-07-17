import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private navbarItemList =
  [
    {name : "Home", path : "home"},
    {name : "About AC", path : "aboutus", dropdown:
      [
        {name : "About the Human Heart", path : "heart"},
        {name : "What is AC?", path : "arvd"},
        {name : "Symptoms and Diagnosis", path : "symptom"},
        {name : "Treatment", path : "treatment"},
        {name : "Living with AC", path : "living"},
      ]
    },
    {name: "About Johns Hopkins", path : "ardc", dropdown:
      [
        {name : "About Hopkins Research", path : "hopkins"},
        {name : "Donate", path : "donate"},
      ]
    },
  //{name : "Donate", path : "howcan"},
    {name : "Jack's Story", path : "story"},
    {name : "Contact Us", path : "contact"},
    {name : "Learn More", path : "moreinfo"}
  ];

  private currentDate :string;

  constructor() { }

  ngOnInit() {
    var now: Date = new Date();
    this.currentDate = now.toDateString();
    //this.navbarItemList[this.navbarItemList.length-1].name = this.currentDate;
    console.log(this.currentDate);
  }

}
