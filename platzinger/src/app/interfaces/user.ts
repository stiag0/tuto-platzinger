import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';

export interface User{
    nick: string;
    subnick?: string;
    age?: number;
    email: string;
    friend?: boolean;
    uid: any;
}