import { NavComponent } from './nav/nav.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { Routes } from '@angular/router';
import { SkillComponent } from './skill/skill.component';

export const routes: Routes = [
    { path: '', component: NavComponent },
    { path: '', component: HeroSectionComponent },
    {path:'',component:SkillComponent}
];
