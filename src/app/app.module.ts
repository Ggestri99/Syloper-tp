// Angular Imports
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
// This Module Imports
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ErrorPageComponent } from './shared/error-page/error-page.component';


@NgModule({
	declarations: [AppComponent, ErrorPageComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MatSlideToggleModule
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
