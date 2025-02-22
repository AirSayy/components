import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MatLegacyProgressBarModule} from '@angular/material/legacy-progress-bar';
import {MatLegacyProgressBarHarness} from './progress-bar-harness';

export function runHarnessTests(
  progressBarModule: typeof MatLegacyProgressBarModule,
  progressBarHarness: typeof MatLegacyProgressBarHarness,
) {
  let fixture: ComponentFixture<ProgressBarHarnessTest>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [progressBarModule],
      declarations: [ProgressBarHarnessTest],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressBarHarnessTest);
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should load all progress bar harnesses', async () => {
    const progressBars = await loader.getAllHarnesses(progressBarHarness);
    expect(progressBars.length).toBe(2);
  });

  it('should get the value', async () => {
    fixture.componentInstance.value = 50;
    const [determinate, indeterminate] = await loader.getAllHarnesses(progressBarHarness);
    expect(await determinate.getValue()).toBe(50);
    expect(await indeterminate.getValue()).toBe(null);
  });

  it('should get the mode', async () => {
    const [determinate, indeterminate] = await loader.getAllHarnesses(progressBarHarness);
    expect(await determinate.getMode()).toBe('determinate');
    expect(await indeterminate.getMode()).toBe('indeterminate');
  });
}

// TODO: Add and test progress bars with modes `buffer` and `query`.
@Component({
  template: `
    <mat-progress-bar mode="determinate" [value]="value"></mat-progress-bar>
    <mat-progress-bar mode="indeterminate"></mat-progress-bar>
  `,
})
class ProgressBarHarnessTest {
  value: number;
}
