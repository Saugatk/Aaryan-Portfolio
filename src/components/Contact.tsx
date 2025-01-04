import { useState } from "react";
    import { Button } from "./ui/button";
    import { Input } from "./ui/input";
    import { Textarea } from "./ui/textarea";
    import { useToast } from "@/hooks/use-toast";
    import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
    import { Calendar } from "./ui/calendar";
    import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
    import { format } from "date-fns";
    import { cn } from "@/lib/utils";

    const Contact = () => {
      const { toast } = useToast();
      const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        countryCode: "+977",
        service: "",
        subject: "",
        message: "",
        date: undefined,
      });

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
          title: "Message Sent",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        setFormData({ name: "", email: "", phone: "", countryCode: "+977", service: "", subject: "", message: "", date: undefined });
      };

      const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };

      const handleSelectChange = (value: string, name: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
      };

      const handleDateChange = (date: Date | undefined) => {
        setFormData((prev) => ({ ...prev, date }));
      };

      return (
        <section className="section-padding">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center fade-up">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6 fade-up">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label htmlFor="countryCode" className="text-sm font-medium">
                    Country Code
                  </label>
                  <Select onValueChange={(value) => handleSelectChange(value, "countryCode")}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Country Code" value={formData.countryCode} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="+977">+977 (Nepal)</SelectItem>
                      <SelectItem value="+1">+1 (USA)</SelectItem>
                      <SelectItem value="+44">+44 (UK)</SelectItem>
                      <SelectItem value="+91">+91 (India)</SelectItem>
                      <SelectItem value="+86">+86 (China)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number (Optional)
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium">
                  Service
                </label>
                <Select onValueChange={(value) => handleSelectChange(value, "service")}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" value={formData.service} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="SaaS Solutions">SaaS Solutions</SelectItem>
                    <SelectItem value="SEO Consulting">SEO Consulting</SelectItem>
                    <SelectItem value="Translation Services">Translation Services</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label htmlFor="date" className="text-sm font-medium">
                  Select a Date
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !formData.date && "text-muted-foreground"
                      )}
                    >
                      {formData.date ? format(formData.date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={formData.date}
                      onSelect={handleDateChange}
                      initialFocus
                      required
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px]"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </section>
      );
    };

    export default Contact;
