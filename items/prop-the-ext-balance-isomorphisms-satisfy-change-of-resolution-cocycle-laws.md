---
id: prop-the-ext-balance-isomorphisms-satisfy-change-of-resolution-cocycle-laws
kind: proposition
title: "Ext balance isomorphisms satisfy change-of-resolution cocycle laws"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-the-ext-balance-isomorphism-is-independent-of-resolution-comparison-data, prop-the-ext-balance-isomorphism-is-natural-in-both-variables]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2"
      url: https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf
pipeline_run: frontier-31a
---
## Statement

If $\beta_{P,I}$ denotes the balance map attached to supplied projective data $P$ and injective data $I$, then $\beta_{P,I}$ is the identity when the comparison data are unchanged, and comparison through any intermediate resolution gives the same map as direct comparison.

## Facts & Assumptions

**Given:** Two choices of resolution data and, where needed, a third intermediate choice.

## Proof

**Proof technique:** direct.

1.1 The direct comparison and the composite through the intermediate data are morphisms of the same Ext delta functors and both restrict to the identity on degree-zero $\operatorname{Hom}$. [given, construct]

2.1 [[lem-the-ext-balance-isomorphism-is-independent-of-resolution-comparison-data]] identifies these morphisms. The same argument with identical data gives the identity law, and [[prop-the-ext-balance-isomorphism-is-natural-in-both-variables]] makes the laws natural. [step 1.1, algebra] ∎
