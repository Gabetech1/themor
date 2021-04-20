import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
form;
  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  submitform(info){
    const data = {
      name: info.value.name,
      phone: info.value.phone,
      subject: info.value.subject,
      email: info.value.email,
      message: info.value.message
    }

  //  console.log(data)

    this.api.sendMail(data).subscribe(
      response => {
       //console.log(response,'Message sent');
       info.reset()
       alert('Message sent successfully')
      },err=>{
     //   console.log(err)
      if(err.error.text == "message sent"){
        info.reset()
        alert('Message sent successfully')
      }else{alert('Message sending failed')}
      }
    );
  }
}
