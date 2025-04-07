import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import Button from "./Button"

const Form = () => {
    return (
        <form className="flex flex-col">
            <div className="flex flex-col gap-[20px] mb-[20px]" >
                <Input type="fullname" placeholder="Full Name" />
                <Input type="email" placeholder="Email Adress" />
                <div className="flex flex-col xl:flex-row gap-[20px]">
                    <Input type="phone" placeholder='Phone Number' />
                    <Select className="">
                        <SelectTrigger className="w-full rounded-none h-[54px] text-secondary outline-none">
                            <SelectValue placeholder='Select a service'></SelectValue>
                        </SelectTrigger>
                        <SelectContent >
                            <SelectGroup>
                                <SelectLabel>Select a service</SelectLabel>
                                <SelectItem value="constrution">Construction</SelectItem>
                                <SelectItem value="renovation">Renovation</SelectItem>
                                <SelectItem value="restoration">Restoration</SelectItem>
                                <SelectItem value="consultig">Consulting</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <Textarea className="h-[180px] resize-none rounded-none" placeholder="Enter your message" />
                <Button  text="Send message">
                    Send message
                </Button>
            </div>
        </form>
    )
}

export default Form