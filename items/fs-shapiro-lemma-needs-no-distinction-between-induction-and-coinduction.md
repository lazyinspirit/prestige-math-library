---
id: fs-shapiro-lemma-needs-no-distinction-between-induction-and-coinduction
kind: false-statement
title: "Shapiro lemma needs no induction/coinduction distinction"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-shapiro-lemma-for-group-cohomology, thm-shapiro-lemma-for-group-homology]
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
    - title: "Weibel, Shapiro Lemma 6.3.2"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Statement

Shapiro's lemma uses the same change-of-groups functor in homology and cohomology.

## Refutation

**Given:** The two Shapiro isomorphisms.

1.1 Cohomology uses the right adjoint $\operatorname{Coind}_H^G$ through a Hom-complex comparison. [given]

2.1 Homology uses the left adjoint $\operatorname{Ind}_H^G$ through a tensor-complex comparison. The functors are not generally interchangeable. [step 1.1] ∎
