// Angular Imports
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HeroesModule } from './heroes/heroes.module'
import { ErrorPageComponent } from './shared/error-page/error-page.component'

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./heroes/heroes.module').then(m =>HeroesModule)
	},
	{
		path: '404',
		component: ErrorPageComponent
	},
	{
		path: '**',
		redirectTo: '404',
	}
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
