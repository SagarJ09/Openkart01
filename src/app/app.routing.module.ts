import { NgModule } from "@angular/core";
import { NgModelGroup } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";



const routs: Routes =[
    {path: '', redirectTo:'/products', pathMatch:'full'},
    {path: 'products', component:ProductListComponent,
    children:[
        {path: '',component:ProductStartComponent},
        {path: 'new',component: ProductEditComponent},
        {path: 'id',component: ProductDetailComponent},
        {path: 'id/edit',component: ProductEditComponent}
    ]
    
    },

    {path: 'Orders', component: OrderListComponent},
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}