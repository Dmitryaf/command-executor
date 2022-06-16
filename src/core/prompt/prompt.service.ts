import inquirer from 'inquirer'
import { PromptType } from './prompt.types'

export class PromptService {
  public async input<T>(message: String, type: PromptType) {
      const { result } = await inquirer.prompt<{result: T}>([
          {
              type,
              message,
              name: 'result'
           
        }
      ])
      return result;
  }
}
