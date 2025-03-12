import { Component, ElementRef, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-project-progress',
  templateUrl: './project-progress.component.html',
  styleUrls: ['./project-progress.component.scss'],
})
export class ProjectProgressComponent {
  reportUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private el: ElementRef, private renderer: Renderer2) {
    const powerBiUrl =
      'https://app.powerbi.com/reportEmbed?reportId=8b0cd15e-9077-4cbf-8596-7bb8f7c64746&autoAuth=true&ctid=04c72f56-1848-46a2-8167-8e5d36510cbc&filterPaneEnabled=false&navigationContentPanelEnabled=false&chrome=false&navContentPaneEnabled=false&hideNavBar=true';
    this.reportUrl = this.sanitizer.bypassSecurityTrustResourceUrl(powerBiUrl);
  }
  // ngAfterViewInit() {
  //   setTimeout(() => {
  //     this.adjustPowerBiStyles();
  //     const observer = new MutationObserver(() => {
  //       this.adjustPowerBiStyles();
  //     });
  //     const targetNode =
  //       this.el.nativeElement.querySelector('.powerbi-container');
  //     if (targetNode) {
  //       observer.observe(targetNode, { childList: true, subtree: true });
  //     }
  //   }, 2000);
  // }
  // adjustPowerBiStyles() {
  //   const powerBiElement = document.querySelector(
  //     '.displayAreaContainer'
  //   ) as HTMLElement;
  //   if (powerBiElement) {
  //     this.renderer.setStyle(powerBiElement, 'width', '100%');
  //     this.renderer.setStyle(powerBiElement, 'height', '100vh');
  //     this.renderer.setStyle(powerBiElement, 'left', '0');
  //     this.renderer.setStyle(powerBiElement, 'top', '0');
  //     this.renderer.setStyle(powerBiElement, 'position', 'absolute');
  //   }
  // }
}
