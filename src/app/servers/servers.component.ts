import { Component } from "@angular/core";
import { ServerComponent } from "../server/server.component";
import { UserService } from "../services/user.service";
import { interval,  Observable, of, Subject, Subscription } from "rxjs";
import {take} from "rxjs/operators";

@Component({
    selector:'app-servers',
    templateUrl:'./servers.component.html',
     styleUrls:['./servers.component.css']
})

export class ServersComponent{

 mySubject$ = new Subject();
   
  output = ""
    addServer= false
    serverId!:number;
     serverStatus!:string;
     private counterSubscription!:Subscription;
    // constructor(private userService:UserService){}


    constructor(private userService:UserService){
        this.serverId = Math.floor(Math.random()*100)
    }


    // getServerStatus(){

    // }

    ngOnInit(){

        console.log("Component is loaded or not!")

        console.log("User Service Data", this.userService.getUsers())
    //    this.counterSubscription  =  interval(1000).subscribe((count)=>{
    //         console.log("Counter", count)
    //     })

    // const myPromise = new Promise((resolve ,reject)=>{
    //     setTimeout(()=>{
    //         resolve('Promise resolved successfully')
    //     },2000)
    // })

    // myPromise.then((data)=>{
    //     console.log(data)       
    // })
//    const myObservable = new Observable(observer=>{
//         setTimeout(()=>{
//             observer.next('Observable emitted data after 2 seconds')
//         },2000)
//    })

//    myObservable.subscribe((data)=>{
//     console.log(data)
//    })

// of(1,2,3,4,5).pipe(take(3)).subscribe((data)=>{
//     console.log(data)
// })


// Custom Observable...


// const customObserbable = new Observable(observer=>{
//   let  count = 0;
//     setInterval(()=>{
//    observer.next(count);
//    count++;
//    },1000)


 
// })
//   customObserbable.subscribe((data)=>{
//     console.log("Custom Observable emitted:", data) 

// })    

  // const myPromise  = new Promise((resolve , reject)=>{

  //   let count = 0;
  //   setInterval(()=>{
  //     resolve(count);
  //     count++;
  //   },2000) 
  // })

  // myPromise.then((data)=>{
  //   console.log("Promise resolved with data:", data)
  // } )   
  

}

    // ngOnInit(){
    //     console.log("User Data", this.userService.getUsers())
    // }

    // handleCreateServer(){

    //     if(this.output.length>0){ 
    //         this.addServer = true
    //     }

    //     console.log("checking...")
    // }

    // createServer(){
    //     alert('Server created successfully')
    //     this.addServer = false
    // }
    ngOnDestroy(){
        // this.counterSubscription.unsubscribe()
    }
}