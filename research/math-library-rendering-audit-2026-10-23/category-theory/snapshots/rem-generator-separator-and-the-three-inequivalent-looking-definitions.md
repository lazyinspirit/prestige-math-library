---
id: rem-generator-separator-and-the-three-inequivalent-looking-definitions
kind: remark
title: "Generator, separator, and the three inequivalent-looking definitions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-generator-and-cogenerator-of-a-category, thm-the-cancellation-and-epimorphism-descriptions-of-a-generator-agree, thm-a-locally-small-abelian-category-with-a-generator-is-well-powered]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Adnan Hashim Abdulwahid, Definitions 1.38 and 1.39"
      url: "https://iro.uiowa.edu/view/pdfCoverPage?download=true&filePid=13730791840002771&instCode=01IOWA_INST"
    - title: "Alexandre Grothendieck, Sur quelques points d'algèbre homologique, Barr translation, Section 1.9"
      url: "https://ncatlab.org/nlab/files/BarrTranslOf-GrothedieckTohoku.pdf"
pipeline_run: frontier-22
---

The library defined a **separating set** on the adjoint-functor page and uses
**generator** here for the one-object version. Grothendieck and the Stacks
Project phrase the notion by canonical epimorphisms from coproducts of copies of
the object, while Freyd phrases it by faithfulness of $\mathcal A(G,-)$. Item
[[thm-the-cancellation-and-epimorphism-descriptions-of-a-generator-agree]]
shows that these are equivalent in the cocomplete abelian setting; the three
definitions are not the same sentence, which is why the page records the
terminology rather than silently treating one as notation for another.
