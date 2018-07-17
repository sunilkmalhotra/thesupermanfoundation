import { Component, OnInit } from '@angular/core';
import { ExternalLink } from './moreinfo.model';

@Component({
  selector: 'app-moreinfo',
  templateUrl: './moreinfo.component.html',
  styleUrls: ['./moreinfo.component.css']
})

export class MoreinfoComponent implements OnInit {


  private externalLinkList:string[]
  =
  [
    "http://www.nrofoundation.org/contact.html",
    "https://www.councilofnonprofits.org/tools-resources/how-start-nonprofit-step-1-research",
    "http://smallbusiness.chron.com/differences-between-501c3-other-nonprofit-organizations-60190.html",
    "https://www.thebalance.com/why-do-i-need-a-business-plan-for-nonprofit-2502272 ",
    "https://www.bizfilings.com/toolkit/research-topics/incorporating-your-business/best-state-to-incorporate",
    "http://nonprofithub.org/starting-a-nonprofit/how-to-write-a-nonprofit-mission-statement",
    "https://www.nolo.com/legal-encyclopedia/form-nonprofit-eight-steps-29484.html",
    "https://www.njportal.com/DOR/BusinessFormation/CompanyInformation/BusinessName",
  ];

  private extLinkList:ExternalLink[]
  =
  [
    {description:'Johns Hopkins - search ARVD/C',url:'https://www.hopkinsmedicine.org'},
    {description:'Sarver Heart Center at the University of Arizona - search ARVD/C',url:'https://heart.arizona.edu'},
    {description:'Organization in Colorado',url:'http://arvdheart.org/arvd'},
    {description:'ICD Information',url:'http://www.medtronic.com/us-en/index.html/'},
    {description:'Cleveland Clinic - Info about ARVD/C',url:'https://my.clevelandclinic.org/health/diseases/16752-arrhythmogenic-right-ventricular-dysplasia-arvd'},
    {description:'Cedars Sinai - Info about ARVD/C',url:'ttps://www.cedars-sinai.org/health-library/diseases-and-conditions/a/arrhythmogenic-right-ventricular-dysplasia.html'},
  ];


  constructor() { }

  ngOnInit() {
  }

}
