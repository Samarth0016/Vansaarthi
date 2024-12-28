import Navigation from "@/app/components/Navigation"
import VolunteerForm from "@/app/components/Volunteer-form"
import { auth } from "@clerk/nextjs/server"
const page = () => {
    
  return (
    <div>
      <Navigation></Navigation>
      <VolunteerForm></VolunteerForm>
    </div>
  )
}

export default page
