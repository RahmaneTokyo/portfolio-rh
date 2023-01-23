import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-home-landing-page',
  templateUrl: './home-landing-page.component.html',
  styleUrls: ['./home-landing-page.component.scss']
})
export class HomeLandingPageComponent implements OnInit{

  menu = false;
  dark = false;
  title: any;
  language = '';
  lang = true;

  constructor(private router: Router, private translate: TranslateService) {
    this.language = 'fr';
    translate.setDefaultLang(this.language);
  }

  innerWidth = window.innerWidth;

  ngOnInit(): void {
    if (this.router.url === '/home/about') {
      this.title = 'A Propos de Moi'
    }
    if (this.router.url === '/home/resume') {
      this.title = 'Parcours'
    }
    if (this.router.url === '/home/works') {
      this.title = 'Oeuvres Réalisées'
    }

    if (localStorage.getItem('color-theme') === 'light') {
      this.dark = false
    }
    if (localStorage.getItem('color-theme') === 'dark') {
      this.dark = true
    }
  }

  changeTheme() {
    this.dark = !this.dark;
    console.log(localStorage.getItem('color-theme'))

    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
        console.log(localStorage.getItem('color-theme'))
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
        console.log(localStorage.getItem('color-theme'))
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
        console.log(localStorage.getItem('color-theme'))
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
        console.log(localStorage.getItem('color-theme'))
      }
    }
  }

  translation() {
    if (this.language === 'fr') {
      this.language = 'en';
      this.lang = false;
      this.translate.use(this.language);
      console.log(this.lang);
    }else {
      this.language = 'fr';
      this.lang = true;
      this.translate.use(this.language);
      console.log(this.lang);
    }
  }

  // email validation regex function angular
}
