import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { ServiceComponent } from './service/service.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ObjectifComponent } from './objectif/objectif.component';
import { TeamComponent } from './team/team.component';
import { BlogComponent } from './blog/blog.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FooterComponent } from './footer/footer.component';
import { ClientAreaComponent } from './client-area/client-area.component';
import { BlogsComponent } from './blogs/blogs.component';
import { HomeComponent } from './home/home.component';
import { SinglePostComponent } from './single-post/single-post.component';

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
