---
id: lem-cone-triangles-satisfy-tr-one
kind: lemma
title: "Cone triangles satisfy TR1"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-distinguished-cone-triangle-in-the-homotopy-category, def-standard-cone-triangle-in-the-homotopy-category, thm-the-cone-of-an-identity-map-is-contractible, def-triangulated-category-axiom-tr-one]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Amnon Yekutieli, A Course on Derived Categories, Theorem 9.2.2"
      url: "https://arxiv.org/pdf/1206.6632"
---

## Statement

The distinguished cone triangles in $K(\mathcal A)$ satisfy TR1.

## Facts & Assumptions

**Given:** An additive category $\mathcal A$ and a chain map $f$.

## Proof

1.1 The standard cone triangle of $f$ completes $f$, and the definition closes this class under isomorphism. [given]

2.1 The cone of $1_C$ is contractible and hence isomorphic to zero in $K(\mathcal A)$, so its standard triangle gives the TR1 identity triangle. [step 1.1, given] ∎
