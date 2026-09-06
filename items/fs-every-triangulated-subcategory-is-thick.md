---
id: fs-every-triangulated-subcategory-is-thick
kind: false-statement
title: "Every triangulated subcategory is thick"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-triangulated-subcategory, def-thick-subcategory, def-zero-and-stalk-complex]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Derived Categories, Section 13.4"
      url: "https://stacks.math.columbia.edu/tag/05QN"
---

## Statement

Every triangulated subcategory is closed under direct summands.

## Refutation

**Given:** The displayed data.

1.1 In $K^b(\mathsf{Free}^{\mathrm{fg}}_{\mathbb Z})$, let $\mathcal E$ be the full subcategory of bounded complexes of finitely generated free abelian groups with even Euler characteristic. Shifts negate Euler characteristic and a cone triangle makes Euler characteristics additive, so $\mathcal E$ is triangulated. [given]

2.1 The complex $\mathbb Z[0]\oplus\mathbb Z[0]$ lies in $\mathcal E$ but its direct summand $\mathbb Z[0]$ does not; hence $\mathcal E$ is not thick. [step 1.1, given] ∎
