---
id: def-ideal-sheaf
kind: definition
title: "Ideal sheaves"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-scheme]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Schemes, Section 8"
      url: "https://stacks.math.columbia.edu/tag/01I6"
---
## Definition

An **ideal sheaf** on a scheme $X$ is a subsheaf $\mathcal I\subseteq
\mathcal O_X$ such that $\mathcal I(U)$ is an ideal of $\mathcal O_X(U)$ for
every open $U$, compatibly with restriction.
