---
id: ex-group-cohomology-of-the-trivial-group
kind: example
title: "Group cohomology of the trivial group"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-normalized-cochains-compute-group-cohomology]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Weibel, Example 6.1.3"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Example

For every abelian group $M$, $H^0(1;M)=M$ and $H^n(1;M)=0$ for $n>0$.

## Verification

**Given:** The trivial group and normalized cochains.

1.1 Degree zero cochains are $M$, while every positive normalized bar is zero because its only group entry is $1$. [given]

2.1 The normalized complex is $M$ in degree zero and zero above it, proving the computation. [step 1.1] ∎
