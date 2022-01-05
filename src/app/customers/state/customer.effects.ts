import { Injectable } from "@angular/core";
import {CustomerService} from "../customer.service";
import * as CustomerActions from "../state/customer.actions";
import {Customer} from "../customer.model";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";



@Injectable()
export class CustomerEffect{
    constructor(
        private actions$: Actions,
        private customerService: CustomerService
    ){}

    @Effect()
    loadCustomers$: Observable<Action> = this.actions$.pipe(
        ofType<CustomerActions.LoadCustomers>(
            CustomerActions.CustomerActionTypes.LOAD_CUSTOMERS
        ),
        mergeMap((actions: CustomerActions.LoadCustomers) => 
        this.customerService.getCustomers().pipe(
            map((customers: Customer[]) => 
            new CustomerActions.LoadCustomersSuccess(customers)
            ),
            catchError(error => of(new CustomerActions.LoadCustomersFail(error)))
        ))
    )
}