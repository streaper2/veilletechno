import { Technology } from './technology';


export interface Projet {
    
    id?: number;
    name: string;
    skills?: Technology[];
    finish: Number;
    todos: string[];

}