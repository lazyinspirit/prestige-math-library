---
id: fs-the-fibrewise-quotient-of-a-vector-bundle-by-arbitrary-varying-subspaces-is-a-vector-bundle
kind: false-statement
title: "The fibrewise quotient of a vector bundle by arbitrary varying subspaces is a vector bundle"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-vector-subbundle, thm-a-vector-bundle-quotient-by-a-subbundle-is-a-smooth-vector-bundle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---
## Statement

The fibrewise quotient of a vector bundle by arbitrary varying subspaces is
always a smooth vector bundle.

## Facts & Assumptions

**Given:** The displayed claim.

[L1] A quotient bundle theorem requires a smooth vector subbundle, in particular
constant fibre dimension and smooth local frames
([[thm-a-vector-bundle-quotient-by-a-subbundle-is-a-smooth-vector-bundle]],
[[def-vector-subbundle]]).

## Refutation

**Proof technique:** direct.

1.1 In the trivial line bundle $\mathbb R\times\mathbb R\to\mathbb R$, let $S_x=\{0\}$ for $x\neq0$ and let $S_0=\mathbb R$. Then the quotient fibre is one-dimensional for $x\neq0$ and zero-dimensional at $x=0$. [L1, given, construct]

2.1 A smooth vector bundle has locally constant fibre dimension, so this family of quotients cannot be a vector bundle. The missing hypothesis is exactly that the subspaces form a smooth subbundle as in [L1]. [L1, step 1.1, algebra] ∎