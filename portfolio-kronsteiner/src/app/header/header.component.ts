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
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit velit, imperdiet eget tempor non, faucibus eget tortor. Sed eleifend sodales.", 
    button: {
      text: "Let's talk",
      action: ""
    }
  }

}
