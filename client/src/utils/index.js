import { prompts } from "../constants/prompts";

const generatePrompts = (prompt) => {
  const randomIndex = Math.floor(Math.random() * prompts.length);
  const randomPrompt = prompts[randomIndex];

  if (randomPrompt === prompt) return generatePrompts(prompt);

  return randomPrompt;
};
