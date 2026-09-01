---
id: fs-every-braided-monoidal-category-is-equivalent-to-a-strict-commutative-one
kind: false-statement
title: "FALSE: every braided monoidal category is equivalent to a strict commutative one"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cex-the-braid-category-is-braided-but-not-symmetric, thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Michael Muger, Tensor Categories: A Selective Guided Tour, Section 4"
      url: "https://arxiv.org/pdf/0804.3587"
---

## Statement

**False claim:** every braided monoidal category is braided-monoidally
equivalent to a strict braided monoidal category whose braiding is the identity
on every tensor product.

## Facts & Assumptions

**Given:** The braid category and strict braided strictification.

[L1] The braid category is braided but not symmetric ([[cex-the-braid-category-is-braided-but-not-symmetric]]).

[L2] Every braided monoidal category is braided-monoidally equivalent to some strict braided monoidal category ([[thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one]]).

## Refutation

**Proof technique:** direct.

1.1 Apply the claim to the braid category from [L1]. Then there would exist a braided monoidal equivalence from $\mathcal B$ to a strict braided category $\mathcal D$ whose braiding is the identity. [L1, given, assume-contra]

2.1 A strict braided category with identity braiding is symmetric, because its braiding certainly squares to the identity. Transporting that symmetric structure back across the supposed braided equivalence would make $\mathcal B$ symmetric as well. [L2, step 1.1, algebra]

3.1 Step 2.1 contradicts [L1], which says the braid category is not symmetric. Therefore the claim is false. [L1, step 2.1, discharge-contradiction] ∎
