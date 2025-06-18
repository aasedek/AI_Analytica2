'use server';

/**
 * @fileOverview A project cost estimation AI agent.
 *
 * - projectCostEstimator - A function that handles the project cost estimation process.
 * - ProjectCostEstimatorInput - The input type for the projectCostEstimator function.
 * - ProjectCostEstimatorOutput - The return type for the projectCostEstimator function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProjectCostEstimatorInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('A detailed description of the project requirements.'),
  complexityLevel: z.enum(['low', 'medium', 'high']).describe('The complexity level of the project.'),
  timeline: z.string().describe('The desired project timeline (e.g., 2 months, 6 months).'),
});
export type ProjectCostEstimatorInput = z.infer<typeof ProjectCostEstimatorInputSchema>;

const ProjectCostEstimatorOutputSchema = z.object({
  estimatedCost: z.number().describe('The estimated cost of the project in USD.'),
  costBreakdown: z.string().describe('A breakdown of the cost estimation, including labor, resources, etc.'),
  timelineEstimate: z.string().describe('An estimated timeline for the project completion.'),
});
export type ProjectCostEstimatorOutput = z.infer<typeof ProjectCostEstimatorOutputSchema>;

export async function projectCostEstimator(input: ProjectCostEstimatorInput): Promise<ProjectCostEstimatorOutput> {
  return projectCostEstimatorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'projectCostEstimatorPrompt',
  input: {schema: ProjectCostEstimatorInputSchema},
  output: {schema: ProjectCostEstimatorOutputSchema},
  prompt: `You are an AI project cost estimator. Please provide an estimate based on the following project details:

Project Description: {{{projectDescription}}}
Complexity Level: {{{complexityLevel}}}
Timeline: {{{timeline}}}

Consider factors such as labor costs, resource requirements, and the complexity of the project.

Return the estimated cost in USD, a breakdown of the costs, and an estimated timeline for the project.`, config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const projectCostEstimatorFlow = ai.defineFlow(
  {
    name: 'projectCostEstimatorFlow',
    inputSchema: ProjectCostEstimatorInputSchema,
    outputSchema: ProjectCostEstimatorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
