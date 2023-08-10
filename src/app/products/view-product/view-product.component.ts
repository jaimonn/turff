import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  showSuccess:boolean=false
  public payPalConfig?: IPayPalConfig;
  productId:string=""
  paymentStatus:boolean =false;
  proceedtoPay:boolean=false

  username:any
  place:any
  pincode:any
  phoneno:any
  slot:any

constructor(private viewRoute:ActivatedRoute,private api:ApiService,private fb:FormBuilder){}

// /address form
addressForm=this.fb.group({//group
  //arrays
  username:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  place:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  slot:['',[Validators.required,Validators.pattern('[a-z A-Z 0-9]*')]],
  pincode:['',[Validators.required,Validators.pattern('[0-9]*')]],
  mobilenumber:['',[Validators.required,Validators.pattern('[0-9]*')]]
})




product:any=[]
ngOnInit(): void {

  this.initConfig();

  this.viewRoute.params.subscribe((result:any)=>{
    console.log(result.productId)
    this.productId=result.productId

    this.api.viewProduct(this.productId).subscribe((result:any)=>{
      console.log(result);
      this.product=result
      
    },
    (result:any)=>{
      console.log(result.error);
      
    }
    )
  })
}
makepay(){
  this.proceedtoPay=true
}
modalclose(){
  this.addressForm.reset()
  this.showSuccess=false
  this.paymentStatus=false

}
submitForm(){
  // address Valida
  if(this.addressForm.valid){
  this.paymentStatus=true
  this.username=this.addressForm.value.username
  this.place=this.addressForm.value.place
  this.pincode=this.addressForm.value.pincode
  this.phoneno=this.addressForm.value.mobilenumber
  this.slot=this.addressForm.value.slot

  }
  else{
    alert('please enter valid ddetails')
  }
  }

  private initConfig(): void {
    this.payPalConfig = {
    currency: 'EUR',
    clientId: 'sb',
    createOrderOnClient: (data) => <ICreateOrderRequest>{
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'EUR',
            value: '9.99',
            breakdown: {
              item_total: {
                currency_code: 'EUR',
                value: '9.99'
              }
            }
          },
          items: [
            {
              name: 'Enterprise Subscription',
              quantity: '1',
              category: 'DIGITAL_GOODS',
              unit_amount: {
                currency_code: 'EUR',
                value: '9.99',
              },
            }
          ]
        }
      ]
    },
    advanced: {
      commit: 'true'
    },
    style: {
      label: 'paypal',
      layout: 'vertical'
    },
    onApprove: (data, actions) => {
      console.log('onApprove - transaction was approved, but not authorized', data, actions);
      actions.order.get().then((details:any) => {
        console.log('onApprove - you can get full order details inside onApprove: ', details);
      });
    },
    onClientAuthorization: (data) => {
      console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      this.showSuccess = true;
    },
    onCancel: (data, actions) => {
      console.log('OnCancel', data, actions);
    },
    onError: err => {
      console.log('OnError', err);
    },
    onClick: (data, actions) => {
      console.log('onClick', data, actions);
    },
  };
  }
}
