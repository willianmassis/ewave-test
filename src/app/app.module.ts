import { HttpAppInterceptor } from './shared/config/http-interceptor';
import { BreedModule } from './modules/breed/breed.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
	declarations: [AppComponent],
	imports: [
		RouterModule.forRoot([]),
    FormsModule,
    ReactiveFormsModule,
		HttpClientModule,
		BrowserModule,
		BreedModule
	],
	providers: [{
		provide: HTTP_INTERCEPTORS, useClass: HttpAppInterceptor, multi: true
	}],
	bootstrap: [AppComponent]
})
export class AppModule {}
