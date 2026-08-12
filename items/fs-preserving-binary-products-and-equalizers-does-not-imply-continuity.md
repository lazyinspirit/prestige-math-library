---
id: fs-preserving-binary-products-and-equalizers-does-not-imply-continuity
kind: false-statement
title: "FALSE: a functor preserving binary products and equalizers must preserve all finite limits"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-finite-limit-and-colimit-criteria, def-preservation-reflection-creation-continuity-and-cocontinuity, prop-sets-and-functions-form-category-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: constant-empty-functor
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Theorem 3.5.17"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Statement refuted

Every functor that preserves binary products and equalizers preserves all
finite limits.

## Facts & Assumptions

**Given:** The terminal category $\mathbf1$ and the functor
$F:\mathbf1\to\mathbf{Set}$ sending its sole object to $\varnothing$.

[L1] Finite-limit criteria require nullary product data, equivalently a
terminal object, in addition to binary products and equalizers
([[thm-finite-limit-and-colimit-criteria]]).

[F1] Continuous means preserving all small limits
([[def-preservation-reflection-creation-continuity-and-cocontinuity]]).

[F2] Morphisms of $\mathbf{Set}$ are functions
([[prop-sets-and-functions-form-category-set]]).

## Refutation

**Proof technique:** constant-empty functor.

1.1 The binary product of the sole object of $\mathbf1$ with itself is that object, and $\varnothing\times\varnothing=\varnothing$. The image product cone consists of identity functions on $\varnothing$, so $F$ preserves the binary product. [F2]

1.2 Every parallel pair in $\mathbf1$ is $(1,1)$ and has identity equalizer. Its image is $(1_\varnothing,1_\varnothing)$, whose identity is also an equalizer. Thus $F$ preserves equalizers. [F2]

1.3 The sole object of $\mathbf1$ is terminal, but $\varnothing$ is not terminal in $\mathbf{Set}$ because no function $\{*\}\to\varnothing$ exists. So $F$ does not preserve the empty product, hence does not preserve all finite limits and is not continuous by [F1]. [F1, F2]

2.1 This refutes the statement and exhibits exactly the missing nullary case in [L1]. [L1, step 1.1, step 1.2, step 1.3] ∎
