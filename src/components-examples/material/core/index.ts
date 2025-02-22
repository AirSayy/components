import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRippleModule} from '@angular/material/core';
import {MatLegacyInputModule} from '@angular/material/legacy-input';
import {ElevationOverviewExample} from './elevation-overview/elevation-overview-example';
import {RippleOverviewExample} from './ripple-overview/ripple-overview-example';

export {ElevationOverviewExample, RippleOverviewExample};

const EXAMPLES = [ElevationOverviewExample, RippleOverviewExample];

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatLegacyInputModule, MatRippleModule, FormsModule],
  declarations: EXAMPLES,
  exports: EXAMPLES,
})
export class CoreExamplesModule {}
