import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit {

  public loaded = false;

  @Input() src = '';
  @Input() alt = '';
  @Input() width = 100;
  @Input() height = 100;

  @ViewChild('spinner') public spinner: ElementRef;

  constructor() { }

  ngOnInit() {
  }
/*
  @HostListener("window:scroll", [event]) onWindowScroll(event) {

    // already loaded?
    if (this.loaded) {
      return;
    }

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollBottom = scrollTop + document.documentElement.clientHeight;

    if (scrollBottom > this.spinner.nativeElement.offsetTop - 1000) {
        this.loaded = true;
    }

  }*/
}
