---
id: thm-depth-bounded-by-support-dimension
title: Depth is bounded by support dimension
kind: theorem
status: draft
origin: pipeline
deps: [cor-depth-of-a-finite-local-module-at-most-its-dimension]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---
## Statement

For every nonzero finite module $M$ over a Noetherian local ring $R$,
$$0\le\operatorname{depth}_R(M)\le\dim\operatorname{Supp}_R(M).$$
The nonzero hypothesis is essential for this formulation: under the adopted
convention $\operatorname{depth}_R(0)=+\infty$, whereas the empty support has
no nonnegative Krull dimension.

## Facts & Assumptions

**Given:** $M$ is nonzero and finite over the Noetherian local ring $R$.

## Proof

**Proof technique:** direct.

1.1 Depth is the length of a regular sequence and is therefore nonnegative. The upper bound is `cor-depth-of-a-finite-local-module-at-most-its-dimension`. [given]

2.1 These give the displayed double inequality. The last sentence follows directly from the separately declared zero-module depth convention. [step 1.1, algebra] ∎
