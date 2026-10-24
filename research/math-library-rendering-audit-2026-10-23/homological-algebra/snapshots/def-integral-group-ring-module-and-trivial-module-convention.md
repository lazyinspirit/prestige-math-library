---
id: def-integral-group-ring-module-and-trivial-module-convention
kind: definition
title: "Integral group modules and the trivial module"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group-ring, def-augmentation-map-and-augmentation-ideal-of-a-group-ring, thm-group-actions-and-group-ring-modules-correspond]
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Weibel, Group Homology and Cohomology, §6.1"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Definition

Throughout this page a $G$-module is a left $\mathbb Z[G]$-module. The abelian group $\mathbb Z$ is a left trivial module by $g\cdot z=z$, equivalently through the augmentation $\mathbb Z[G]\to\mathbb Z$. When it occurs on the left of $\otimes_{\mathbb Z[G]}$, the same underlying group is instead the right trivial module $z\cdot g=z$.
