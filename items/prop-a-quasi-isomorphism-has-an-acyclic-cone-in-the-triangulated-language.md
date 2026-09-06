---
id: prop-a-quasi-isomorphism-has-an-acyclic-cone-in-the-triangulated-language
kind: proposition
title: "A quasi-isomorphism has an acyclic cone in the triangulated language"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-standard-cone-triangle-in-the-homotopy-category, def-quasi-isomorphism, thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic, def-exactness-of-a-complex-at-a-degree-and-acyclic-complex]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Definition 13.9.1"
      url: "https://stacks.math.columbia.edu/tag/014D"
---

## Statement

If $f:C_\bullet\to D_\bullet$ is a quasi-isomorphism, its standard cone
triangle has an acyclic third object.

## Facts & Assumptions

**Given:** A quasi-isomorphism $f$ of complexes in an abelian category.

## Proof

1.1 The standard cone triangle has third object $\operatorname{Cone}(f)$. [given]

2.1 A chain map is a quasi-isomorphism exactly when its cone is acyclic, so this third object is acyclic. [step 1.1, given] ∎
