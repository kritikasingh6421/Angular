import { Component, OnInit } from '@angular/core';
import { ResultService } from '../service/result.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private service: ResultService) {
   }
  
  ngOnInit(): void {
  }

  /**
   * Logout Function
   */
  logout(){
    this.service.logout()
  }
  
}
