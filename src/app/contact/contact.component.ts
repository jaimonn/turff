import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  form:FormGroup=this.fb.group({
    from_name:'',
    // to_name:'',
    from_email:'',
    subject:'',
    message:''
  })

  constructor(private fb:FormBuilder){}
 async send(){
  emailjs.init('jLkQvVKNT77ALtin2')
    let response =await emailjs.send("service_c7tnqlz","template_mu0ofzc",{
      to_name: this.form.value.to_name,
      from_name: this.form.value.from_name,
      from_email: this.form.value.from_email,
      subject: this.form.value.subject,
      message: this.form.value.message,
      });
      alert('message has been sent')
      this.form.reset()
  }

}
