import { PromptService } from "./core/prompt/prompt.service";

export class App {
    async run() {
        const result = await  new PromptService().input<number>('Число', 'number');
    }
}

const app = new App();
app.run();