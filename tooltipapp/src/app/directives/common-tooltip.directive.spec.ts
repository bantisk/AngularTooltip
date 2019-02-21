import { CommonTooltipDirective } from "./common-tooltip.directive";
import { Overlay} from '@angular/cdk/overlay';

describe('CommonTooltipDirective', () => {
  it('should create an instance', () => {
    const directive = new CommonTooltipDirective( );
    expect(directive).toBeTruthy();
  });
});
