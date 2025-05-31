import { Component } from '@angular/core';
import { SearchInputComponent } from '../search-input/search-input.component';
import { UsersCardComponent } from '../users-card/users-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [SearchInputComponent, UsersCardComponent, CommonModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  search: string = "";

  handleSearch(email: string) {
    this.search = email;
  }
}
