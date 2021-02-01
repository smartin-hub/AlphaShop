import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCopyright]'
})
export class CopyrightDirective {

  constructor(el: ElementRef, renderer: Renderer2) {
    
    renderer.addClass(el.nativeElement, 'copyright');

    renderer.setProperty(
      el.nativeElement,
      'textContent',
      `&copy; ${new Date().getFullYear()} by Xantrix Inc.` 
    );
  }

}
