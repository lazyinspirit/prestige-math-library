---
id: cex-the-underlying-bar-contraction-is-not-equivariant
kind: counterexample
title: "The underlying bar contraction is not equivariant"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-the-augmented-bar-complex-is-exact]
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
    - title: "Weibel, Theorem 6.5.3"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Statement refuted

The identity-insertion contraction of homogeneous bars is $G$-equivariant for every group $G$.

## Counterexample

**Given:** A group $G$ with $h\ne1$ and the bar generator $(1)$.

1.1 The contraction has $s(1)=(1,1)$, so $h s(1)=(h,h)$. [given]

2.1 But $s(h\cdot(1))=s(h)=(1,h)$, which differs from $(h,h)$. Thus equivariance fails. [step 1.1] ∎
