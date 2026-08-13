---
id: thm-bilinear-forms-correspond-to-linear-maps-into-the-dual
kind: theorem
title: 'Bilinear forms on $V$ correspond linearly and bijectively to linear maps $V\to V^*$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-bilinear-symmetric-skew-and-alternating-forms, def-algebraic-dual-and-linear-functional, def-vector-space-of-linear-maps]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'H. Pinkham, Linear Algebra, Chapters 6–7'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
pipeline_run: null
---

## Statement

The assignment

$$B\longmapsto B^\flat,\qquad B^\flat(v)(w)=B(v,w),$$

is a linear bijection from the vector space of bilinear forms on $V$ to $\mathcal L(V,V^*)$.

## Facts & Assumptions

**Given:** An $F$-vector space $V$.

[L1] A bilinear form is linear separately in both variables ([[def-bilinear-symmetric-skew-and-alternating-forms]]).

[L2] The algebraic dual $V^*$ consists of all linear maps $V\to F$ ([[def-algebraic-dual-and-linear-functional]]).

[L3] Linear maps form a vector space under pointwise addition and scalar multiplication ([[def-vector-space-of-linear-maps]]).

## Proof

**Proof technique:** explicit inverse.

1.1 For a bilinear $B$, fixing $v$ makes $w\mapsto B(v,w)$ a member of $V^*$ by [L1] and [L2], and linearity in $v$ makes $B^\flat:V\to V^*$ linear. [L1, L2]

1.2 Conversely, for $L\in\mathcal L(V,V^*)$, define $B_L(v,w)=L(v)(w)$. Linearity of $L$ gives linearity in $v$, and $L(v)\in V^*$ gives linearity in $w$, so $B_L$ is bilinear. [L1, L2, L3]

2.1 Pointwise, $B_{B^\flat}(v,w)=B(v,w)$ and $(B_L)^\flat(v)(w)=L(v)(w)$, so the constructions are inverse. They also preserve addition and scalar multiplication pointwise. [step 1.1, step 1.2, L3, algebra]

3.1 Therefore $B\mapsto B^\flat$ is a linear bijection. No finite-dimensionality assumption is used. [step 2.1] ∎
