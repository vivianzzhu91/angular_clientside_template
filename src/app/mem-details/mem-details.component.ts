import { Component, OnInit } from '@angular/core';
import { MemberService } from '../services/member.service';
import { Member } from '../models/Member';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-mem-details',
  templateUrl: './mem-details.component.html',
  styleUrls: ['./mem-details.component.css']
})
export class MemDetailsComponent implements OnInit {

  id: string;
  member: Member;

  constructor(
    private memberService: MemberService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    // get id from url
    this.id = this.route.snapshot.params['id'];
    // get discount
    this.memberService.getMember(this.id).subscribe(member => {
      this.member = member;
      console.log(this.member);
    });
  }

}
