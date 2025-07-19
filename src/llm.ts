import { zodFunction } from 'openai/helpers/zod'
import { z } from 'zod'
import type { AIMessage } from '../types'
import { openai } from './ai'
import { prompts } from './prompts'

export const runLLM = async ({userMessage} : {userMessage :string}) => {

const response = await openai.chat.completions.create({
  model: 'gpt-4o-mini',
  temperature: 0.1,
  messages: [
    {
      role: 'user',
      content: userMessage,
    }]
  })

  return response.choices[0].message.content
}
