import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  headerContent={
    subHeading: "UX Designer", 
    heading: "Sarah Kronsteiner", 
    text: "Welcome to my online portfolio! My name is Sarah, and I'm a  passionate UX designer with a strong background in crafting intuitive  and engaging user experiences.", 
    button: {
      text: "Let's talk",
      action: ""
    }
  }

}
