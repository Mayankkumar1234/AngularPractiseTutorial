import { Component, Output , EventEmitter} from "@angular/core";
import {  FormBuilder, FormGroup, Validators } from "@angular/forms";
 


@Component({
    selector:'app-cockpit',
    templateUrl:'./cockpit.Component.html',
    styleUrls:['./cockpit.component.css']
})

export class CockpitComponent{
 
   @Output() serverDataSend = new EventEmitter<any>()
  
    serverData  = []
      serverForm!:FormGroup;

      constructor(private fb:FormBuilder){}
    ngOnInit(){
     this.serverForm = this.fb.group({
        serverName:['', [Validators.required]],
        serverContent:['', [Validators.required]]
     })
    }
  
  sendServerData(type:string){

      let serverData = this.serverForm.getRawValue();
      console.log("Server Data", serverData)
    if(this.serverForm.invalid){
        alert("Please add all the details...");
        return;
    }
  
}
 

}