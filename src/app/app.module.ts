import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { PanierComponent } from './panier/panier.component';
import { CategoryComponent } from './category/category.component';
import { TransactionComponent } from './transaction/transaction.component';


import { ArticleComponent } from './article/article.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { GestionArticlesComponent } from './gestion-articles/gestion-articles.component';
import { GestionCategorieComponent } from './gestion-categorie/gestion-categorie.component';
import { GestionProfilesComponent } from './gestion-profiles/gestion-profiles.component';
import { CreeNvCatgComponent } from './cree-nv-catg/cree-nv-catg.component';
import { CreeNvArticleComponent } from './cree-nv-article/cree-nv-article.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { NgChartsModule } from 'ng2-charts';
import { Chart } from 'chart.js';
import { JitEvaluator } from '@angular/compiler';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    PanierComponent,
    ArticleComponent,
    CategoryComponent,
    TransactionComponent,
    NavBarComponent,
    HomeComponent,
    GestionArticlesComponent,
    GestionCategorieComponent,
    GestionProfilesComponent,
    CreeNvCatgComponent,
    CreeNvArticleComponent,
    FooterComponent,
    ProfileComponent,
    DashboardComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgChartsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
