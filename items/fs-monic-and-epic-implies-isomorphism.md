---
id: fs-monic-and-epic-implies-isomorphism
kind: false-statement
title: "Every morphism that is both monic and epic is an isomorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-inclusion-of-integers-in-rationals-is-monic-epic-not-iso-in-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Example 1.1.10"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

**FALSE.** Every morphism that is both monic and epic is an isomorphism.

## Facts & Assumptions

**Given:** The unit-preserving ring inclusion $j:\mathbb Z\hookrightarrow\mathbb Q$.

[L1] The map $j$ is monic and epic in $\mathbf{Ring}$ but is not an isomorphism ([[thm-inclusion-of-integers-in-rationals-is-monic-epic-not-iso-in-ring]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], $j$ satisfies both cancellation properties required of a monomorphism and an epimorphism. [L1]

1.2 The same result proves that $j$ has no inverse ring homomorphism and hence is not an isomorphism. [L1]

2.1 Thus $j$ is a morphism that is simultaneously monic and epic but not invertible, directly refuting the statement. [step 1.1, step 1.2] ∎
