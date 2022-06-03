//The Angular side models need to match the JSON data and NOT the C# Model

export class Movie {
    id: number;
    title: string;
    runTime: number;
    year: number;
    description: string;
    leadActor: string;

    constructor(id: number, title: string, runTime: number, year: number, description: string, leadActor: string) {
        this.id = id;
        this.title = title;
        this.runTime = runTime;
        this.year = year;
        this.description = description;
        this.leadActor = leadActor;
    }
}