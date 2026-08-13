---
id: def-characteristic-subgroup
kind: definition
title: "Characteristic subgroups"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group-isomorphism-and-automorphism, def-subgroup]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Subgroup Series I"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/subgpseries1.pdf"
    - title: "K. Igusa, Notes on Jordan-Hölder, section 5"
      url: "https://people.brandeis.edu/~igusa/Math131b/JH.pdf"
pipeline_run: null
---

## Definition

A subgroup $H\le G$ is **characteristic** in $G$, written $H\operatorname{char}G$, if $\alpha(H)=H$ for every automorphism $\alpha\in\operatorname{Aut}(G)$ ([[def-group-isomorphism-and-automorphism]], [[def-subgroup]]).

Equivalently, every automorphism of $G$ restricts to an automorphism of $H$. Characteristicity requires invariance under all automorphisms, not only under inner automorphisms.
