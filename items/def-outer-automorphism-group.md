---
id: def-outer-automorphism-group
kind: definition
title: ' The outer automorphism group $\operatorname{Out}(G)=\operatorname{Aut}(G)/\operatorname{Inn}(G)$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-inner-automorphism-group, thm-inner-automorphisms-normal-in-automorphism-group, def-quotient-group]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
pipeline_run: null
---

## Definition

The **outer automorphism group** of a group $G$ is

$$\operatorname{Out}(G)=\operatorname{Aut}(G)/\operatorname{Inn}(G).$$

Here $\operatorname{Inn}(G)$ is the inner automorphism group of [[def-inner-automorphism-group]]. This quotient group is the one of [[def-quotient-group]], and it is defined because [[thm-inner-automorphisms-normal-in-automorphism-group]] proves that $\operatorname{Inn}(G)$ is normal in $\operatorname{Aut}(G)$.
