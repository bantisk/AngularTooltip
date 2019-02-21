import { ComponentRef, Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { CustomToolTipComponentComponent } from '../components/custom-tool-tip-component/custom-tool-tip-component.component';

@Directive({
  selector: '[appCommonTooltip]'
})
export class CommonTooltipDirective implements OnInit {

  private overlayRef: OverlayRef;

  @Input('customTooltipText') text = '';

  constructor(private overlay: Overlay,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef, ) { }

  @HostListener('mouseenter')
  showToolTip() {
    const tooltipPortal = new ComponentPortal(CustomToolTipComponentComponent);
    const tooltipRef: ComponentRef<CustomToolTipComponentComponent> = this.overlayRef.attach(tooltipPortal);
    tooltipRef.instance.text = this.text;
  }

  @HostListener('mouseout')
  hideToolTip() {
    this.overlayRef.detach();
  }

  ngOnInit() {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([{
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom',
      }]);
      this.overlayRef = this.overlay.create({ positionStrategy });
  }

}
