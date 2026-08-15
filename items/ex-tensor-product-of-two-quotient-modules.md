---
id: ex-tensor-product-of-two-quotient-modules
kind: example
title: "$(R/I)\\otimes_R(R/J)\\cong R/(I+J)$ for ideals of a commutative ring"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-tensor-product-with-a-quotient-ring, def-sum-and-product-of-ideals, thm-first-isomorphism-theorem-modules]
aliases: []
landmark: false
short: "Tensor product of two quotient modules"
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

Let $I,J$ be ideals of a commutative ring $R$. There is a canonical isomorphism

$$(R/I)\otimes_R(R/J)\cong R/(I+J).$$

This includes $I=0$, $J=0$, $I=R$, and $J=R$.

## Facts & Assumptions

**Given:** A commutative ring $R$ and ideals $I,J\subseteq R$.

[L1] For a right $R$-module $M$, $M\otimes_RR/J\cong M/JM$ ([[cor-tensor-product-with-a-quotient-ring]]).

[L2] $I+J=\{i+j:i\in I,\ j\in J\}$ is an ideal ([[def-sum-and-product-of-ideals]]).

[L3] A module homomorphism induces an isomorphism from its quotient by its kernel to its image ([[thm-first-isomorphism-theorem-modules]]).

## Verification

**Proof technique:** direct.

1.1 Apply [L1] with $M=R/I$ to obtain $(R/I)\otimes_R(R/J)\cong(R/I)/J(R/I)$. [given, L1]

1.2 The map $q:R/I\to R/(I+J)$ given by $q(r+I)=r+(I+J)$ is well-defined and surjective. Its kernel consists of the classes $i+j+I=j+I$ with $i\in I$ and $j\in J$, which is exactly $J(R/I)$. [given, L2, algebra]

2.1 By [L3], step 1.2 induces $(R/I)/J(R/I)\cong R/(I+J)$; composing with step 1.1 proves the displayed isomorphism. [step 1.1, step 1.2, L3]

3.1 If $I=0$ or $J=0$, the formula reduces to the appropriate tensor-unit isomorphism. If either ideal is $R$, then both sides are zero. Thus all stated boundary cases are included. [step 2.1, L2] ∎
