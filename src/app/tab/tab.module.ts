import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabTitleComponent } from './tab-title/tab-title.component';
import { TabContentComponent } from './tab-content/tab-content.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  declarations: [TabTitleComponent, TabContentComponent, TabsComponent, TabComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TabTitleComponent,
    TabContentComponent,
    TabsComponent,
    TabComponent
  ]
})
export class TabModule { }
