import { Directive, HostBinding, HostListener } from "@angular/core";


@Directive({
    selector:'[appManage]'  // It's an Attributes Directive
})
export class ManageDirective{

    constructor(){

    }

    @HostBinding('class.open') isOpen: Boolean = false; //what to do 

    @HostListener('click') manageButtonOpen(){  // when to do 
        this.isOpen= ! this.isOpen;
    }
}