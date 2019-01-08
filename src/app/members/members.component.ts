import { Component, OnInit } from '@angular/core';
import {Member} from '../models/Member';
import {MemberService} from '../services/member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members: Member[];

  constructor(private MemberService: MemberService) { }

  ngOnInit() {
    this.MemberService.getMembers().subscribe(members=>{
      this.members = members;
      // console.log(this.discounts.length);
    });
    
  }

}
