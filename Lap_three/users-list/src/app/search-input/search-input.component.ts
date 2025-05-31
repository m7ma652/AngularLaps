import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { UsersCardComponent } from '../users-card/users-card.component';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [FormsModule, CommonModule, ButtonModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export class SearchInputComponent {
  searchedEmail: string = "";
  @Input() users: UsersCardComponent[] = [];
  @Output() onSearch = new EventEmitter<string>;
  applySearch() {
    this.onSearch.emit(this.searchedEmail);
  }
  searchfn(event: any) {
    this.searchedEmail = event.target.value;
  }
}
