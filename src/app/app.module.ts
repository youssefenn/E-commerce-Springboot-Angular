import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componenets/navbar/navbar.component';
import { SliderComponent } from './componenets/slider/slider.component';
import { ServiceComponent } from './componenets/service/service.component';
import { AboutUsComponent } from './componenets/about-us/about-us.component';
import { PortfolioComponent } from './componenets/portfolio/portfolio.component';
import { ObjectifComponent } from './componenets/objectif/objectif.component';
import { TeamComponent } from './componenets/team/team.component';
import { BlogComponent } from './componenets/blog/blog.component';
import { ContactsComponent } from './componenets/contacts/contacts.component';
import { FooterComponent } from './componenets/footer/footer.component';
import { ClientAreaComponent } from './componenets/client-area/client-area.component';
import { BlogsComponent } from './componenets/blogs/blogs.component';
import { HomeComponent } from './componenets/home/home.component';
import { SinglePostComponent } from './componenets/single-post/single-post.component';

const routes: Routes = [
  { path: "blogs", component: BlogsComponent},
  { path: "", component: HomeComponent},
  { path: "single-post", component: SinglePostComponent},


]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    ServiceComponent,
    AboutUsComponent,
    PortfolioComponent,
    ObjectifComponent,
    TeamComponent,
    BlogComponent,
    ContactsComponent,
    FooterComponent,
    ClientAreaComponent,
    BlogsComponent,
    HomeComponent,
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
