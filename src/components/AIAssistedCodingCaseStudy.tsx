import React from "react";
import CaseStudyPage from "./CaseStudyPage";
import { aiAssistedCodingCaseStudy } from "../data/caseStudies";

const AIAssistedCodingCaseStudy: React.FC = () => {
  return <CaseStudyPage caseStudy={aiAssistedCodingCaseStudy} />;
};

export default AIAssistedCodingCaseStudy;
