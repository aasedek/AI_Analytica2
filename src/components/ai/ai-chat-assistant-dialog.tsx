
"use client";

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Paperclip, Send, Bot, User, DollarSign, Loader2, XCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { aiChatAssistant, AIChatAssistantInput, AIChatAssistantOutput } from '@/ai/flows/ai-chat-assistant';
import { projectCostEstimator, ProjectCostEstimatorInput, ProjectCostEstimatorOutput } from '@/ai/flows/project-cost-estimator';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Message {
  id: string;
  text: string | React.ReactNode;
  sender: 'user' | 'bot' | 'system';
  type?: 'text' | 'cost_estimator_form' | 'cost_estimate_result';
  payload?: any;
}

const costEstimatorFormSchema = z.object({
  projectDescription: z.string().min(10, "Please provide a detailed description (min 10 characters)."),
  complexityLevel: z.enum(['low', 'medium', 'high']),
  timeline: z.string().min(2, "Please provide an estimated timeline (e.g., '2 months')."),
});
type CostEstimatorFormValues = z.infer<typeof costEstimatorFormSchema>;

export default function AIChatAssistantDialog({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: "Hello! I'm Analytica AI's assistant. How can I help you today? You can ask about our services, or type '/estimate' to get a project cost estimate.", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showCostEstimator, setShowCostEstimator] = useState(false);
  const { toast } = useToast();

  const costForm = useForm<CostEstimatorFormValues>({
    resolver: zodResolver(costEstimatorFormSchema),
    defaultValues: {
      projectDescription: "",
      complexityLevel: "medium",
      timeline: "",
    },
  });

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;

    const newUserMessage: Message = { id: Date.now().toString(), text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');
    setIsLoading(true);

    if (inputValue.toLowerCase().startsWith('/estimate')) {
      setShowCostEstimator(true);
      setMessages(prev => [...prev, {
        id: Date.now().toString() + '-form',
        text: "Please fill out the form below to get a project cost estimate.",
        sender: 'bot',
        type: 'cost_estimator_form'
      }]);
      setIsLoading(false);
      return;
    }
    
    setShowCostEstimator(false); 

    try {
      const input: AIChatAssistantInput = { question: inputValue };
      const result: AIChatAssistantOutput = await aiChatAssistant(input);
      const newBotMessage: Message = { id: Date.now().toString() + '-bot', text: result.answer, sender: 'bot' };
      setMessages(prev => [...prev, newBotMessage]);
    } catch (error) {
      console.error("Error with AI Chat Assistant:", error);
      const errorMessage: Message = { id: Date.now().toString() + '-error', text: "Sorry, I encountered an error. Please try again.", sender: 'bot' };
      setMessages(prev => [...prev, errorMessage]);
      toast({ title: "Chat Error", description: "Could not get a response from the AI assistant.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleCostEstimateSubmit = async (values: CostEstimatorFormValues) => {
    setIsLoading(true);
    setShowCostEstimator(false); // Hide form after submission attempt

    // Add a message indicating the form was submitted
    const formSubmittedMessage: Message = {
      id: Date.now().toString() + '-form-submit',
      text: (
        <div>
          <p className="font-semibold">Project Cost Estimation Request:</p>
          <p><strong>Description:</strong> {values.projectDescription}</p>
          <p><strong>Complexity:</strong> {values.complexityLevel}</p>
          <p><strong>Timeline:</strong> {values.timeline}</p>
        </div>
      ),
      sender: 'user' // Displayed as if the user confirmed these details
    };
    setMessages(prev => [...prev, formSubmittedMessage]);


    try {
      const input: ProjectCostEstimatorInput = values;
      const result: ProjectCostEstimatorOutput = await projectCostEstimator(input);
      
      const estimateResultText = (
        <div className="p-3 my-2 rounded-md bg-accent/10 border border-accent text-accent-foreground">
          <h4 className="font-bold text-md mb-2 flex items-center"><DollarSign className="w-5 h-5 mr-2 text-accent"/>Project Cost Estimate</h4>
          <p><strong>Estimated Cost:</strong> ${result.estimatedCost.toLocaleString()}</p>
          <p><strong>Timeline Estimate:</strong> {result.timelineEstimate}</p>
          <p className="mt-2"><strong>Cost Breakdown:</strong></p>
          <p className="text-sm whitespace-pre-wrap">{result.costBreakdown}</p>
        </div>
      );
      
      const newBotMessage: Message = { 
        id: Date.now().toString() + '-estimate-result', 
        text: estimateResultText, 
        sender: 'bot', 
        type: 'cost_estimate_result' 
      };
      setMessages(prev => [...prev, newBotMessage]);
      costForm.reset();

    } catch (error) {
      console.error("Error with Project Cost Estimator:", error);
      const errorMessage: Message = { id: Date.now().toString() + '-error-estimate', text: "Sorry, I couldn't estimate the cost. Please ensure all fields are detailed.", sender: 'bot' };
      setMessages(prev => [...prev, errorMessage]);
      toast({ title: "Estimation Error", description: "Could not estimate project cost.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px] md:max-w-[650px] lg:max-w-[700px] p-0 flex flex-col h-[80vh] max-h-[700px]">
        <DialogHeader className="p-6 pb-2 border-b">
          <DialogTitle className="text-2xl font-headline flex items-center">
            <Bot className="w-7 h-7 mr-2 text-primary" /> Analytica AI Assistant
          </DialogTitle>
          <DialogDescription>
            Ask questions about our services or get a project cost estimate.
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="flex-grow p-6 overflow-y-auto">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[75%] p-3 rounded-lg shadow ${message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
                  {message.type === 'cost_estimator_form' && showCostEstimator ? (
                     <Form {...costForm}>
                      <form onSubmit={costForm.handleSubmit(handleCostEstimateSubmit)} className="space-y-4 bg-background p-4 rounded-md shadow-inner">
                        <h4 className="font-semibold text-lg text-primary mb-2">Project Cost Estimator</h4>
                        <FormField
                          control={costForm.control}
                          name="projectDescription"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground">Project Description</FormLabel>
                              <FormControl>
                                <Textarea placeholder="Describe your project requirements..." {...field} className="bg-white"/>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={costForm.control}
                          name="complexityLevel"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground">Complexity Level</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-white">
                                    <SelectValue placeholder="Select complexity" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="low">Low</SelectItem>
                                  <SelectItem value="medium">Medium</SelectItem>
                                  <SelectItem value="high">High</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={costForm.control}
                          name="timeline"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground">Desired Timeline</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g., 3 months, 1 year" {...field} className="bg-white"/>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="flex justify-end gap-2">
                            <Button type="button" variant="outline" size="sm" onClick={() => { setShowCostEstimator(false); costForm.reset(); }}>Cancel</Button>
                            <Button type="submit" size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isLoading}>
                              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <DollarSign className="mr-2 h-4 w-4" />}
                              Get Estimate
                            </Button>
                        </div>
                      </form>
                    </Form>
                  ) : typeof message.text === 'string' ? (
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  ) : (
                    message.text 
                  )}
                </div>
              </div>
            ))}
            {isLoading && !showCostEstimator && (
              <div className="flex justify-start">
                <div className="max-w-[75%] p-3 rounded-lg shadow bg-secondary text-secondary-foreground">
                  <Loader2 className="h-5 w-5 animate-spin text-primary" />
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        
        {!showCostEstimator && (
          <div className="p-4 border-t">
            <div className="flex items-center gap-2">
              <Input
                type="text"
                placeholder="Type your message or /estimate..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSendMessage()}
                className="flex-grow"
                disabled={isLoading || showCostEstimator}
              />
              <Button onClick={handleSendMessage} disabled={isLoading || inputValue.trim() === '' || showCostEstimator} className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
