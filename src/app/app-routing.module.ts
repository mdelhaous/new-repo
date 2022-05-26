import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { CategoryComponent } from './category/category.component';
import { CreeNvArticleComponent } from './cree-nv-article/cree-nv-article.component';
import { CreeNvCatgComponent } from './cree-nv-catg/cree-nv-catg.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { GestionArticlesComponent } from './gestion-articles/gestion-articles.component';
import { GestionCategorieComponent } from './gestion-categorie/gestion-categorie.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PanierComponent } from './panier/panier.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { TransactionComponent } from './transaction/transaction.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: UserComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'navbar', component: NavBarComponent },
  { path: '', component: HomeComponent },
  { path: 'transaction', component: TransactionComponent },
  { path: 'GestCatg', component: GestionCategorieComponent },
  { path: 'NouvCatg', component: CreeNvCatgComponent },
  { path: 'GestArt/:id', component: GestionArticlesComponent },
  { path: 'NouvArtc/:id', component: CreeNvArticleComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'error', component: ForbiddenComponent },
  { path: 'Profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
