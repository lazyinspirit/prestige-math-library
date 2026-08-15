---
id: ex-rationals-tensor-a-finite-cyclic-group-is-zero
kind: example
title: "$\\mathbb Q\\otimes_{\\mathbb Z}\\mathbb Z/n=0$ for every positive $n$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-tensor-product-with-a-quotient-ring, thm-rat-field]
aliases: []
landmark: false
short: "Rationals tensor finite cyclic groups to zero"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Wenqi Li, Commutative Algebra, Lecture 10"
      url: "https://www.math.columbia.edu/~wenqili/commalg_notes.pdf"
pipeline_run: null
---

## Example

For every positive integer $n$,

$$\mathbb Q\otimes_{\mathbb Z}\mathbb Z/n=0.$$

The positivity hypothesis matters: $\mathbb Z/0\cong\mathbb Z$, so the tensor product at $n=0$ is $\mathbb Q$, not zero.

## Facts & Assumptions

**Given:** A positive integer $n$.

[L1] For a right module $M$ and an ideal $I$ of a commutative ring $R$, $M\otimes_RR/I\cong M/IM$ ([[cor-tensor-product-with-a-quotient-ring]]).

[L2] $\mathbb Q$ is a field, so the nonzero integer $n$ has an inverse in $\mathbb Q$ ([[thm-rat-field]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], $\mathbb Q\otimes_{\mathbb Z}\mathbb Z/n\cong\mathbb Q/n\mathbb Q$. [given, L1]

1.2 For every $q\in\mathbb Q$, the element $q/n$ belongs to $\mathbb Q$ by [L2] and $q=n(q/n)$, so $n\mathbb Q=\mathbb Q$. [given, L2]

2.1 Hence $\mathbb Q/n\mathbb Q=0$, and step 1.1 proves the claim. [step 1.1, step 1.2] ∎
