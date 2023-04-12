import HText from "@/shared/HText";
import { BenefitsType, SelectedPage } from "@/shared/types"
import { 
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon 
} from "@heroicons/react/24/solid"
import { motion } from "framer-motion";

const benefits: Array<BenefitsType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to"
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to"
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to"
  },
];

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
  
  <section
    id="benefits"
    className="mx-auto min-h-full w-5/6 py-20"
  >
    <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}  
    >
      {/* HEADER */}
      <div className="md:my-5 md:w-3/5">
        <HText>
          MORE THAN JUST GYM.
        </HText>
        <p className="my-5 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit ultrices magna ac viverra. Etiam sed ex mi. Cras quis gravida elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed posuere ante pretium fringilla suscipit. Sed dictum diam elit, non sodales metus auctor eget. Nulla euismod est vel dolor mattis, quis viverra dui ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec non finibus lorem, vitae finibus turpis. In quis arcu quis ligula consectetur rutrum. Sed vel erat condimentum, tristique quam non, semper enim.
        </p>
      </div>

      {/* BENEFITS */}
      <div className="md:flex items-center justify-between gap-8 mt-5">
        {benefits.map((benefit: BenefitsType) => (
          <Benefit
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            setSelectedPage={setSelectedPage}
          />
        ))}

      </div>

    </motion.div> 

  </section>
  
  );
}

export default Benefits