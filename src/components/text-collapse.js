import React from "react"
import * as S from "../pagesStyles/about.styles"
import ExpandMore from "@mui/icons-material/ExpandMore"
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material"

const TextCollapse = ({ title, children, startsExpanded }) => {
  return (
    <Accordion
      sx={{
        border: "none",
        boxShadow: "none",
      }}
      defaultExpanded={startsExpanded}
    >
      <AccordionSummary expandIcon={<ExpandMore />}>
        <S.FlexTitle>{title}</S.FlexTitle>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  )
}

export default TextCollapse
