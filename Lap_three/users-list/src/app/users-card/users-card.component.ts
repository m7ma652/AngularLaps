import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-card',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './users-card.component.html',
  styleUrl: './users-card.component.css'
})
export class UsersCardComponent implements OnChanges {
  @Input() searchEmail: string = "";
  users = [
    { id: 1, username: "Mohamed", email: "mohamed@gmail.com", phone: "01228103984", image: 'assets/images/team1.png' },
    { id: 2, username: "Ahmed", email: "ahmed@gmail.com", phone: "01228904095", image: 'assets/images/team2.png' },
    { id: 2, username: "Ahmed", email: "ahmed@gmail.com", phone: "01228904075", image: 'assets/images/team3.png' },
    { id: 3, username: "Ramadan", email: "ramadan@gmail.com", phone: "01225094569", image: 'assets/images/team3.png' },
    { id: 4, username: "Abdulla", email: "abdulla@gmail.com", phone: "01221382587", image: 'assets/images/team4.jpg' },
    { id: 5, username: "Islam", email: "islam@gmail.com", phone: "01221033974", image: 'assets/images/team5.jpg' },
    { id: 6, username: "Ali", email: "ali@gmail.com", phone: "01221065987", image: 'assets/images/team6.jpg' },
    { id: 7, username: "Sayed", email: "sayed@gmail.com", phone: "01221025876", image: 'assets/images/team7.jpg' },
  ];
  filteredUsers = [...this.users];
  ngOnChanges(changes: SimpleChanges) {
    if (changes['searchEmail']) {
      const keyword = this.searchEmail.toLowerCase().trim();
      if (keyword === "") {
        this.filteredUsers = [...this.users];
      } else {
        this.filteredUsers = this.users.filter(user =>
          user.email.toLowerCase().includes(keyword)
        );
      }
    }
  }

}
