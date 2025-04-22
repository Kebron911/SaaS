
import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MessageSquare,
  Mail,
  Calendar,
  Play,
  Search,
  FileText,
  CheckCircle
} from "lucide-react";

const HelpSupport = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Help & Support</h2>
        <p className="text-gray-500 mt-1">Get assistance with your AI assistant or account.</p>
      </div>

      {/* Quick Start Guide Banner */}
      <Card className="shadow-sm mb-6 bg-gradient-to-r from-[#1A237E] to-[#3949AB] text-white">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">New to Professional AI Assistants?</h3>
              <p className="opacity-90">Set up your AI receptionist in under 10 minutes with our quick start guide.</p>
            </div>
            <Button className="bg-white text-[#1A237E] hover:bg-gray-100">
              <FileText className="w-4 h-4 mr-2" />
              View Quick Start Guide
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Search bar */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <Input 
          placeholder="Search for help articles, guides, or FAQs..." 
          className="pl-10 py-6 text-lg"
        />
      </div>
      
      {/* Main content grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* FAQs */}
        <div className="md:col-span-2">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Will this work with my phone system?</AccordionTrigger>
                  <AccordionContent>
                    Yes! Professional AI Assistants works with virtually any phone system. You can either forward your existing business line to our dedicated number, or we can provide a new phone number for your business that routes directly to our AI receptionist. The system can also integrate with VoIP services, traditional landlines, and mobile phones.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is setup hard?</AccordionTrigger>
                  <AccordionContent>
                    Not at all! Most users are up and running within 10 minutes. Our system guides you through selecting your AI personality, configuring basic settings, and connecting your phone system. For more complex configurations, our support team is available to help you through every step of the process.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>Can I cancel anytime?</AccordionTrigger>
                  <AccordionContent>
                    Absolutely. Our subscriptions are month-to-month with no long-term contracts. You can cancel at any time through your account settings. If you cancel, your service will continue until the end of your current billing period, and you won't be charged again.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>Does it work with multiple locations?</AccordionTrigger>
                  <AccordionContent>
                    Yes! Our Pro and Enterprise plans support multiple locations. You can configure different greetings, business hours, and call routing rules for each location. The AI receptionist will recognize which location the caller is trying to reach and respond appropriately.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger>Can I train it to answer specific questions?</AccordionTrigger>
                  <AccordionContent>
                    Definitely. You can upload your business documents, FAQs, service descriptions, or any text-based information to train your AI receptionist. The more information you provide, the better equipped your assistant will be to answer specific questions about your business, services, and policies.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6">
                  <AccordionTrigger>How do I change my assistant's voice or name?</AccordionTrigger>
                  <AccordionContent>
                    You can easily change your assistant's voice, name, and personality in the Receptionist Setup page. We offer multiple pre-configured personalities with different voices and conversation styles. You can customize the name your assistant uses when greeting callers and preview how they'll sound.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
        
        {/* Support Channels */}
        <div>
          <Card className="shadow-sm mb-6">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Live Chat</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-[#00B8D4] p-4 mb-4">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-medium mb-2">Chat with Support</h3>
                <p className="text-sm text-gray-500 mb-4">Connect with a support specialist right away.</p>
                <div className="flex items-center mb-4">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></span>
                  <span className="text-sm text-green-600 font-medium">Online Now</span>
                </div>
                <Button className="w-full bg-[#00B8D4] hover:bg-[#009cb8]">
                  Start Chat
                </Button>
                <p className="text-xs text-gray-500 mt-3">Usually replies in under 5 minutes</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm mb-6">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Submit a Ticket</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-gray-100 p-3">
                  <Mail className="h-6 w-6 text-[#1A237E]" />
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="ticket-subject">Subject</Label>
                  <Input id="ticket-subject" placeholder="What's your question about?" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="ticket-description">Description</Label>
                  <Textarea 
                    id="ticket-description" 
                    placeholder="Please describe your issue in detail..."
                    className="mt-1 h-[100px]"
                  />
                </div>
                
                <div>
                  <Label htmlFor="ticket-priority">Priority</Label>
                  <select id="ticket-priority" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-1">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
                
                <Button className="w-full bg-[#1A237E] hover:bg-[#0E1358]">
                  Submit Ticket
                </Button>
                
                <p className="text-xs text-center text-gray-500">We'll reply within 1 business day.</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Schedule a Support Call</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-gray-100 p-3 mb-4">
                  <Calendar className="h-6 w-6 text-[#1A237E]" />
                </div>
                <h3 className="text-lg font-medium mb-2">Book a 1-on-1 Session</h3>
                <p className="text-sm text-gray-500 mb-4">Get personalized help from our support team.</p>
                <Button className="w-full bg-[#1A237E] hover:bg-[#0E1358]">
                  Schedule a Call
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Tutorials & Videos */}
      <Card className="shadow-sm mb-8">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg font-semibold">Tutorials & Videos</CardTitle>
            <Button variant="outline" size="sm">View All</Button>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="relative">
                <div className="bg-gray-100 aspect-video flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="bg-white/90 rounded-full p-3">
                      <Play className="h-5 w-5 text-[#1A237E]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-medium mb-1">How to Configure Your Assistant</h4>
                <p className="text-sm text-gray-500 mb-2">Set up your perfect AI receptionist</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span className="flex h-2 w-2 rounded-full bg-[#00B8D4] mr-1"></span>
                  <span>2m 30s</span>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="relative">
                <div className="bg-gray-100 aspect-video flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="bg-white/90 rounded-full p-3">
                      <Play className="h-5 w-5 text-[#1A237E]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-medium mb-1">Connecting with Your Calendar</h4>
                <p className="text-sm text-gray-500 mb-2">Automate your booking process</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span className="flex h-2 w-2 rounded-full bg-[#00B8D4] mr-1"></span>
                  <span>4m 15s</span>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="relative">
                <div className="bg-gray-100 aspect-video flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="bg-white/90 rounded-full p-3">
                      <Play className="h-5 w-5 text-[#1A237E]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-medium mb-1">Advanced Call Routing</h4>
                <p className="text-sm text-gray-500 mb-2">Create smart rules for call handling</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span className="flex h-2 w-2 rounded-full bg-[#00B8D4] mr-1"></span>
                  <span>3m 45s</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Popular Help Articles */}
      <Card className="shadow-sm mb-8">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Popular Help Articles</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <a href="#" className="flex items-start hover:bg-gray-50 p-3 rounded-md transition-colors">
              <div className="rounded-full bg-blue-100 p-2 mr-3">
                <FileText className="h-5 w-5 text-[#1A237E]" />
              </div>
              <div>
                <h4 className="font-medium mb-1">How to route calls to your real number after hours</h4>
                <p className="text-sm text-gray-500">Learn to set up conditional call routing based on business hours</p>
              </div>
              <span className="text-[#00B8D4] ml-2">→</span>
            </a>
            
            <a href="#" className="flex items-start hover:bg-gray-50 p-3 rounded-md transition-colors">
              <div className="rounded-full bg-blue-100 p-2 mr-3">
                <FileText className="h-5 w-5 text-[#1A237E]" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Training your AI assistant with custom materials</h4>
                <p className="text-sm text-gray-500">Get better answers by providing business-specific information</p>
              </div>
              <span className="text-[#00B8D4] ml-2">→</span>
            </a>
            
            <a href="#" className="flex items-start hover:bg-gray-50 p-3 rounded-md transition-colors">
              <div className="rounded-full bg-blue-100 p-2 mr-3">
                <FileText className="h-5 w-5 text-[#1A237E]" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Setting up automated appointment confirmations</h4>
                <p className="text-sm text-gray-500">Reduce no-shows with automated reminders</p>
              </div>
              <span className="text-[#00B8D4] ml-2">→</span>
            </a>
            
            <a href="#" className="flex items-start hover:bg-gray-50 p-3 rounded-md transition-colors">
              <div className="rounded-full bg-blue-100 p-2 mr-3">
                <FileText className="h-5 w-5 text-[#1A237E]" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Integrating with your CRM system</h4>
                <p className="text-sm text-gray-500">Connect call data with your customer relationship management tool</p>
              </div>
              <span className="text-[#00B8D4] ml-2">→</span>
            </a>
          </div>
        </CardContent>
      </Card>
      
      {/* Emergency Support */}
      <Card className="shadow-sm border-orange-200 bg-orange-50">
        <CardContent className="p-6">
          <div className="flex items-center">
            <div className="rounded-full bg-orange-100 p-2 mr-3">
              <AlertCircle className="h-5 w-5 text-orange-600" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium">Urgent issue affecting call performance?</h4>
              <p className="text-sm text-gray-600">Our priority support team is available for urgent issues</p>
            </div>
            <Button variant="outline" className="text-orange-700 border-orange-300 hover:bg-orange-100">
              Contact Priority Support
            </Button>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default HelpSupport;
