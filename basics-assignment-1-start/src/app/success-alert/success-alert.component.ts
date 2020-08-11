import { Component } from '@angular/core';

@Component({
    selector: 'app-success-alert',
    templateUrl: './success-alert.component.html',
    styles: [
        `
            p {
                font-size: 2rem;
                background-color: palegreen;
                border: 2px solid green;
                padding: 20px;
            }
        `
    ]
})
export class SuccessAlertComponent {}