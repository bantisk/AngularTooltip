import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { AppComponent } from './app.component';
import { CustomToolTipComponentComponent } from './components/custom-tool-tip-component/custom-tool-tip-component.component';
import { CommonTooltipDirective } from './directives/common-tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    CommonTooltipDirective,
    CustomToolTipComponentComponent
  ],
  imports: [
    BrowserModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CustomToolTipComponentComponent],
})
export class AppModule { }
