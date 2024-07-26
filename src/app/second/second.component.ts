import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit{

  reactiveForm: FormGroup;
  secondReactiveForm: FormGroup;
  coordinates: FormGroup;
  details: FormGroup;
  isIndividu: boolean = false;
  isSociete: boolean = false;
  showFournisseur: boolean = true;
  showClient=false;
  mode:string= 'info';
  uploadedImage: string | ArrayBuffer | null = null;
  constructor(private router: Router) {
    
  }
  ngOnInit(){
    this.reactiveForm= new FormGroup({
      Type:new FormControl(null),
      civility:new FormControl(''),
      lastName:new FormControl(null),
      firstName:new FormControl(null),
      prospect:new FormControl(null),
      employe:new FormControl(null),
      client:new FormControl(null),
      fournisseur:new FormControl(null),
  })
  this.secondReactiveForm= new FormGroup({
    address:new FormControl(null),
  })
  this.coordinates=new FormGroup({
    fixphone:new FormControl(null),
    fax:new FormControl(null),
    mobile:new FormControl(null),
    email:new FormControl(null),
    website:new FormControl(null),
  })
  this.details=new FormGroup({
    categorieInput:new FormControl(null),
    secteurInput:new FormControl(null),
    provenanceInput:new FormControl(null),
  
  })

  }

 
  
  updateActiveTab(mode: string): void {
    this.mode = mode;
  }
  onTypeChange(event: Event) {
    const value=(event.target as HTMLSelectElement).value;
      if (value === 'Individu') {
        this.isIndividu = true;
        this.isSociete = false;
      } else if (value === 'Société') {
        this.isIndividu = false;
        this.isSociete = true;
       } else {
        this.isIndividu = false;
        this.isSociete = false;
       }
    }
    triggerFileInput(): void {
      const fileInput = document.getElementById('fileUpload') as HTMLInputElement;
      if (fileInput) {
        fileInput.click();
      }
    }
  
  
    onFileChange(event: any): void {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.uploadedImage = e.target?.result || null;
        };
        reader.readAsDataURL(file);
      }
    }
  
    removeImage(): void {
      this.uploadedImage = null;
      const fileInput = document.getElementById('fileUpload') as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
      }
    }
    cities = [
      { id: 1, name: 'MA, Boston' },
      { id: 2, name: 'FL, Miami' },
      { id: 3, name: 'NY, New York', disabled: true },
      { id: 4, name: 'CA, Los Angeles' },
      { id: 5, name: 'TX, Dallas' }
    ];
  
    selectedCity;
  
    customSearchFn(term: string, item) {
      item.name = item.name.replace(',', '');
      term = term.toLocaleLowerCase();
      return item.name.toLocaleLowerCase().indexOf(term) > -1;
    }
  navigateToFirst(isCardViewEnabled: boolean) {
    
    this.router.navigate(['/first'], { state: { isCardViewEnabled} });
  }
 
}

