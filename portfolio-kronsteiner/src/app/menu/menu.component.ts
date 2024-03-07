import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  menuItems= [
    {
      name: "Home",
      link: ""
    },
    {
      name: "About me",
      link: ""
    },
    {
      name: "My Portfolio",
      link: ""
    },
    {
      name: "Contact",
      link: ""
    },
  ]
}
