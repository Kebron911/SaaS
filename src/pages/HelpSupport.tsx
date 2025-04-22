import React from "react";
import { 
  AlertCircle,
  BookOpen, 
  FileQuestion, 
  HelpCircle, 
  Mail, 
  MessageSquare, 
  Phone, 
  PlayCircle, 
  PlusCircle, 
  Video 
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Label } from "@/components/ui/label";

const HelpSupport = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Help & Support</CardTitle>
            <CardDescription>
              Find answers to common questions and get support.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-4 rounded-md bg-gray-100 hover:bg-gray-200">
                <div className="flex items-center space-x-3">
                  <HelpCircle className="w-5 h-5 text-gray-500" />
                  <span>Frequently Asked Questions</span>
                </div>
                <PlusCircle className="w-5 h-5 text-gray-500" />
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4">
                <p>
                  Here you can find answers to common questions about our
                  services.
                </p>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-4 rounded-md bg-gray-100 hover:bg-gray-200">
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-5 h-5 text-gray-500" />
                  <span>Documentation</span>
                </div>
                <PlusCircle className="w-5 h-5 text-gray-500" />
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4">
                <p>
                  Explore our detailed documentation to understand how to use
                  our platform effectively.
                </p>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-4 rounded-md bg-gray-100 hover:bg-gray-200">
                <div className="flex items-center space-x-3">
                  <Video className="w-5 h-5 text-gray-500" />
                  <span>Video Tutorials</span>
                </div>
                <PlusCircle className="w-5 h-5 text-gray-500" />
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4">
                <p>
                  Watch our video tutorials for step-by-step guidance on using
                  our services.
                </p>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-4 rounded-md bg-gray-100 hover:bg-gray-200">
                <div className="flex items-center space-x-3">
                  <FileQuestion className="w-5 h-5 text-gray-500" />
                  <span>Troubleshooting</span>
                </div>
                <PlusCircle className="w-5 h-5 text-gray-500" />
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4">
                <p>
                  Find solutions to common issues and learn how to troubleshoot
                  problems.
                </p>
              </CollapsibleContent>
            </Collapsible>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Support</CardTitle>
            <CardDescription>
              Need further assistance? Contact our support team.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-gray-50">
                <CardContent className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-500" />
                  <div>
                    <CardTitle>Email Us</CardTitle>
                    <CardDescription>
                      Send us an email, and we'll get back to you as soon as
                      possible.
                    </CardDescription>
                    <Button variant="secondary">
                      <a href="mailto:support@example.com">Contact Support</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50">
                <CardContent className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-green-500" />
                  <div>
                    <CardTitle>Call Us</CardTitle>
                    <CardDescription>
                      Give us a call during our business hours for immediate
                      assistance.
                    </CardDescription>
                    <Button variant="secondary">
                      <a href="tel:+18001234567">Call Support</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default HelpSupport;
