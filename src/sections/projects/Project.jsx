import { ExternalLink, GitCommit, Link } from "lucide-react";
import TiltedCard from "./TiltedCard";
import { motion } from "framer-motion";

const Project = ({ project }) => {
  return (
    <motion.div
      className="rounded-lg  shadow-xs mb-20"
      initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
      animate={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{ delay: 0.1, duration: 1.2, ease: "easeOut" }}
    >
      <TiltedCard
        imageSrc={project.image}
        altText={project.title}
        captionText={project.title}
        containerHeight="100%"
        containerWidth="100%"
        imageHeight="190px"
        imageWidth="100%"
        rotateAmplitude={12}
        scaleOnHover={1.1}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
      />
      <div className="bg-background border border-border rounded-xl p-4 -mt-15 shadow-sm hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold mb-1 line-clamp-1">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* links */}
        <div className="flex justify-between items-center mb-3">
          <div className="flex gap-3">
            <a
              href={project.demoUrl}
              target="_blank"
              className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <ExternalLink size={18} />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-white transition-all duration-300"
            >
              {/* GitHub */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2.02c-3.2.7-3.88-1.38-3.88-1.38-.52-1.3-1.27-1.65-1.27-1.65-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.27 1.18-3.07-.12-.3-.51-1.5.11-3.13 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.63.23 2.83.11 3.13.73.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.39-5.25 5.67.41.36.77 1.06.77 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
              </svg>
            </a>
          </div>
        </div>

        {/* tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
export default Project;
