import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactComponent } from './components/contact/contact.component';
import { ArdcComponent } from './components/ardc/ardc.component';
import { HowcanComponent } from './components/howcan/howcan.component';
import { StoryComponent } from './components/story/story.component';
import { MoreinfoComponent } from './components/moreinfo/moreinfo.component';
import { AboutheartComponent } from './components/aboutheart/aboutheart.component';
import { AboutarvdComponent } from './components/aboutarvd/aboutarvd.component';
import { SymptomsComponent } from './components/symptoms/symptoms.component';
import { TreatmentComponent } from './components/treatment/treatment.component';
import { LivingComponent } from './components/living/living.component';
import { JohnhopkinsComponent } from './components/johnhopkins/johnhopkins.component';
import { DonateComponent } from './components/donate/donate.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'howcan',
    component: HowcanComponent
  },
  {
    path: 'story',
    component: StoryComponent
  },
  {
    path: 'ardc',
    component: ArdcComponent
  },
  {
    path: 'moreinfo',
    component: MoreinfoComponent
  },
  {
    path: 'heart',
    component: AboutheartComponent
  },
  {
    path: 'arvd',
    component: AboutarvdComponent
  },
  {
    path: 'symptom',
    component: SymptomsComponent
  },
  {
    path: 'treatment',
    component: TreatmentComponent
  },
  {
    path: 'living',
    component: LivingComponent
  },
  {
    path: 'hopkins',
    component: JohnhopkinsComponent
  },
  {
    path: 'donate',
    component: DonateComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutusComponent,
    ContactComponent,
    ArdcComponent,
    HowcanComponent,
    StoryComponent,
    MoreinfoComponent,
    AboutheartComponent,
    AboutarvdComponent,
    SymptomsComponent,
    TreatmentComponent,
    LivingComponent,
    JohnhopkinsComponent,
    DonateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
          appRoutes,
          {
            enableTracing: true
          }
        ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
