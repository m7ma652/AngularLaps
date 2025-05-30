import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { SkillComponent } from "./skill/skill.component";
import { ProjectComponent } from './project/project.component';
import { FooterComponent } from "./footer/footer.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, HeroSectionComponent, SkillComponent, ProjectComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myPortfolio';
  showScrollButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Show button when page is scrolled more than 300px
    this.showScrollButton = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
