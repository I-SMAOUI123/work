import { Component , OnInit} from '@angular/core';
import { Router ,NavigationStart, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent implements OnInit {
  companies = [
    { name: 'Company One', email: 'contact@companyone.com', phone: '+123 456 7890', logo: 'assets/logo2.png',PME:'',Societes:'',Position_fiscale:'' },
    { name: 'Company One', email: 'contact@companyone.com', phone: '+123 456 7890', logo: 'assets/logo2.png',PME:'',Societes:'',Position_fiscale:'' },
    { name: 'Company One', email: 'contact@companyone.com', phone: '+123 456 7890', logo: 'assets/logo2.png',PME:'',Societes:'',Position_fiscale:'' },
    { name: 'Company One', email: 'contact@companyone.com', phone: '+123 456 7890', logo: 'assets/logo2.png',PME:'',Societes:'',Position_fiscale:'' },
    { name: 'Company One', email: 'contact@companyone.com', phone: '+123 456 7890', logo: 'assets/logo2.png',PME:'',Societes:'',Position_fiscale:'' },
    { name: 'Company One', email: 'contact@companyone.com', phone: '+123 456 7890', logo: 'assets/logo2.png',PME:'',Societes:'',Position_fiscale:'' },
    { name: 'Company One', email: 'contact@companyone.com', phone: '+123 456 7890', logo: 'assets/logo2.png',PME:'',Societes:'',Position_fiscale:'' },
    { name: 'Company One', email: 'contact@companyone.com', phone: '+123 456 7890', logo: 'assets/logo2.png',PME:'',Societes:'',Position_fiscale:''},
    { name: 'Company One', email: 'contact@companyone.com', phone: '+123 456 7890', logo: 'assets/logo2.png',PME:'',Societes:'',Position_fiscale:''},
    { name: 'Company One', email: 'contact@companyone.com', phone: '+123 456 7890', logo: 'assets/logo2.png',PME:'',Societes:'',Position_fiscale:'' },
    { name: 'Company One', email: 'contact@companyone.com', phone: '+123 456 7890', logo: 'assets/logo2.png',PME:'',Societes:'',Position_fiscale:'' },
    { name: 'Company One', email: 'contact@companyone.com', phone: '+123 456 7890', logo: 'assets/logo2.png',PME:'',Societes:'',Position_fiscale:'' },
    { name: 'Company One', email: 'contact@companyone.com', phone: '+123 456 7890', logo: 'assets/logo2.png',PME:'',Societes:'',Position_fiscale:'' },
    { name: 'Company One', email: 'contact@companyone.com', phone: '+123 456 7890', logo: 'assets/logo2.png',PME:'',Societes:'',Position_fiscale:'' },
    { name: 'Company One', email: 'contact@companyone.com', phone: '+123 456 7890', logo: 'assets/logo2.png',PME:'',Societes:'',Position_fiscale:'' },
    // Add more companies as needed
  ];

  showCardView = false;  // Initially showing the card view
  showListView = true;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const navigationState = history.state;
    console.log('Navigation State:', navigationState);
    if (navigationState && navigationState.isCardViewEnabled !== undefined) {
      this.showCardView = navigationState.isCardViewEnabled;
      this.showListView = !this.showCardView;
    }
  }
  
  toggleView(view: 'list' | 'card') {
    this.showListView = view === 'list';
    this.showCardView = view === 'card';
   
  }

  navigateToSecond() {
    this.router.navigate(['/second']);
  }

  
}
  


