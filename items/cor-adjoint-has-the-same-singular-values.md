---
id: cor-adjoint-has-the-same-singular-values
kind: corollary
title: "An endomorphism and its adjoint have the same singular values"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-singular-value-decomposition, prop-adjoint-algebra]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Statement

Let $T:V\to V$ be an endomorphism of a finite-dimensional real or complex inner
product space. Then $T$ and $T^*$ have the same singular values.

## Facts & Assumptions

**Given:** An endomorphism $T:V\to V$ of a finite-dimensional real or complex inner product space.

[L1] The singular value decomposition of $T$ has the form $Tv=\sum_{j=1}^n s_j\langle v,e_j\rangle f_j$ for orthonormal bases $(e_j)$ and $(f_j)$ and singular values $s_j\ge0$ ([[thm-singular-value-decomposition]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], define $S:V\to V$ by $Sw=\sum_{j=1}^n s_j\langle w,f_j\rangle e_j$. For all $v,w\in V$, orthonormality gives $\langle Tv,w\rangle=\sum_j s_j\langle v,e_j\rangle \langle f_j,w\rangle=\langle v,Sw\rangle$, so $S=T^*$. [L1, algebra]

2.1 The formula in step 1.1 is itself a singular value decomposition of $T^*$, with the same diagonal coefficients $s_j$. Therefore $T^*$ has the same singular values as $T$. [L1, step 1.1] ∎
