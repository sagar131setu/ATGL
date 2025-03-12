import { Component, ElementRef, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss']
})
export class PermissionsComponent {
  reportUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private el: ElementRef, private renderer: Renderer2) {
    const powerBiUrl =
      'https://app.powerbi.com/reportEmbed?reportId=8369fdd5-4633-4ca1-9526-9a9072ef766b&autoAuth=true&ctid=04c72f56-1848-46a2-8167-8e5d36510cbc&filterPaneEnabled=false&navigationContentPanelEnabled=false&chrome=false&navContentPaneEnabled=false&hideNavBar=true';
    this.reportUrl = this.sanitizer.bypassSecurityTrustResourceUrl(powerBiUrl);
  }

}
