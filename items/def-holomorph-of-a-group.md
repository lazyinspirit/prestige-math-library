---
id: def-holomorph-of-a-group
kind: definition
title: ' The holomorph $\operatorname{Hol}(G)=G\rtimes\operatorname{Aut}(G)$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-external-semidirect-product, thm-automorphisms-form-a-group]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Peter J. Cameron, The Holomorph of a Group"
      url: "https://webspace.maths.qmul.ac.uk/p.j.cameron/MTHM024/gn7.pdf"
pipeline_run: null
---

## Definition

The **holomorph** of a group $G$ is the external semidirect product ([[def-external-semidirect-product]])

$$\operatorname{Hol}(G)=G\rtimes\operatorname{Aut}(G),$$

where $\operatorname{Aut}(G)$ is the group supplied by [[thm-automorphisms-form-a-group]] and acts on $G$ by evaluation. Thus

$$(g,\alpha)(h,\beta)=\bigl(g\alpha(h),\alpha\beta\bigr).$$
