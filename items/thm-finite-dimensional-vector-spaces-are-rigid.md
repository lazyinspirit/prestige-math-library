---
id: thm-finite-dimensional-vector-spaces-are-rigid
kind: theorem
title: "Finite-dimensional vector spaces are rigid"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-rigid-object-and-rigid-monoidal-category, thm-modules-over-a-commutative-ring-form-a-monoidal-category, def-algebraic-dual-and-linear-functional, thm-dual-family-is-a-basis-in-finite-dimension, def-dimension]
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Example 2.10.12"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Michael Muger, Tensor Categories: A Selective Guided Tour, Section 1.5"
      url: "https://arxiv.org/pdf/0804.3587"
---

## Statement

For any field $k$, every finite-dimensional $k$-vector space is rigid in the
monoidal category $\mathbf{Vect}_k$.

## Facts & Assumptions

**Given:** A finite-dimensional $k$-vector space $V$.

[L1] The category $\mathbf{Vect}_k$ is monoidal under $\otimes_k$
([[thm-modules-over-a-commutative-ring-form-a-monoidal-category]]).

[L2] If $(v_1,\dots,v_n)$ is a basis of $V$, then the dual family
$(v_1^*,\dots,v_n^*)$ is a basis of $V^*$ and satisfies
$v_i^*(v_j)=\delta_{ij}$ ([[thm-dual-family-is-a-basis-in-finite-dimension]]).

[L3] Finite-dimensional means that $V$ has such a finite basis
([[def-dimension]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], choose a basis $(v_1,\dots,v_n)$ of $V$. Let $(v_1^*,\dots,v_n^*)$ be the dual basis from [L2], and define $$\operatorname{ev}:V^*\otimes V\to k,\qquad f\otimes v\mapsto f(v),$$ $$\operatorname{coev}:k\to V\otimes V^*,\qquad 1\mapsto\sum_{i=1}^n v_i\otimes v_i^*.$$ [given, L2, L3, construct]

2.1 For each basis vector $v_j$, the first zig-zag sends $v_j$ to $$\sum_{i=1}^n v_i^*(v_j)v_i=\sum_{i=1}^n\delta_{ij}v_i=v_j.$$ By linearity it is the identity on $V$. [step 1.1, L2, algebra]

2.2 For each dual basis vector $v_j^*$, the second zig-zag sends $v_j^*$ to $$\sum_{i=1}^n v_j^*(v_i)v_i^*=\sum_{i=1}^n\delta_{ji}v_i^*=v_j^*.$$ By linearity it is the identity on $V^*$. [step 1.1, L2, algebra]

3.1 Thus $V^*$ is a left dual of $V$. The same formulas, read in the mirrored order, make $V^*$ a right dual of $V$ as well, so $V$ is rigid. Since $V$ was arbitrary and [L1] supplies the monoidal structure, every finite-dimensional object of $\mathbf{Vect}_k$ is rigid. [step 2.1, step 2.2, L1] ∎
