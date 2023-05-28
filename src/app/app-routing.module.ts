// Angular Imports
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HeroesModule } from './heroes/heroes.module'
import { ErrorPageComponent } from './shared/error-page/error-page.component'

const routes: Routes = [
	{
	  path: 'heroes',
	  loadChildren: () => import('./heroes/heroes.module').then( m => m.HeroesModule ),
	},
	{
	  path: '',
	  redirectTo: 'heroes/listado', // Redirige a 'heroes/listado' en lugar de 'heroes'
	  pathMatch: 'full'
	},
	{
	  path: '404',
	  component: ErrorPageComponent,
	},
	{
	  path: '**',
	  redirectTo: '404',
	}
  ];
  

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
