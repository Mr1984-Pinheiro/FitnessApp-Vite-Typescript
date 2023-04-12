import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types"
import { 
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon 
} from "@heroicons/react/24/solid"
import { motion } from "framer-motion";

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

    </motion.div> 

  </section>
  
  );
}

export default Benefits