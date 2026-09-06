---
id: def-invariants-functor-of-a-group-module
kind: definition
title: "The invariants functor"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-integral-group-ring-module-and-trivial-module-convention]
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Weibel, §6.1"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Definition

For a left $G$-module $M$, put $M^G=\{m\in M:g m=m\text{ for every }g\in G\}$. A $G$-linear map restricts to fixed points, so $M\mapsto M^G$ is a functor from left $G$-modules to abelian groups.
