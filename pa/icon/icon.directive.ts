
import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Inject, Input, OnChanges, OnInit, Optional, Renderer2, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { iconType } from './types';

@Directive({
  selector: '[pIcon]',
  exportAs: 'pIcon',
  host: {
    '[class.p-icon]': 'true'
  }
})
export class IconDirective implements OnInit {
  private icon: iconType | undefined;
  private size: number = 24;
  private color: string = '';
  private spin: boolean = false;

  @Input()
  set pType(value: iconType) {
    this.icon = value
  }
  @Input()
  set pSize(value: number) {
    this.size = value || 24;
  }

  @Input()
  set pColor(value: string) {
    this.color = value;
  }

  @Input()
  set pSpin(value: boolean) {
    this.spin = value;
  }
  private readonly el: HTMLElement;
  constructor(
    element: ElementRef,
    protected _renderer: Renderer2,
    private http: HttpClient,
  ) {
    this.el = element.nativeElement;
  }

  ngOnInit(): void {
    this.http.get(`./assets/svg/${this.icon}.svg`, { responseType: 'text' }).subscribe((svg: string) => {
      if (svg) {
        this.el.innerHTML = svg;
        const svgElement = this.el.querySelector('svg');
        if (svgElement) {
          this._setIconStyle(svgElement);
        }
      } else {
        throw new Error(`Icon ${this.icon} not found`);
      }
    })
  }

  private _setIconStyle(svgElement: SVGSVGElement) {
    this._renderer.setAttribute(svgElement, 'width', `${this.size}px`);
    this._renderer.setAttribute(svgElement, 'height', `${this.size}px`);
    if (this.color) {
      this._renderer.setAttribute(svgElement, 'color', `${this.color}`);
      this._renderer.setAttribute(svgElement, 'fill', `${this.color}`);
    }

    if (this.spin) {
      this._renderer.addClass(svgElement, 'p-icon-spin');
    } else {
      this._renderer.removeClass(svgElement, 'p-icon-spin');
    }
  }
}
