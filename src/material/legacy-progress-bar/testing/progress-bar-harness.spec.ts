import {MatLegacyProgressBarModule} from '@angular/material/legacy-progress-bar';
import {runHarnessTests} from '@angular/material/legacy-progress-bar/testing/shared.spec';
import {MatLegacyProgressBarHarness} from './progress-bar-harness';

describe('MatProgressBarHarness', () => {
  runHarnessTests(MatLegacyProgressBarModule, MatLegacyProgressBarHarness);
});
