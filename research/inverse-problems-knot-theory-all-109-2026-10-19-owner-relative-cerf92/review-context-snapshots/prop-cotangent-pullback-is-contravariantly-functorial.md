---
id: prop-cotangent-pullback-is-contravariantly-functorial
kind: proposition
title: "Cotangent pullback is contravariantly functorial"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pullback-of-a-cotangent-vector, thm-chain-rule-for-differentials-of-smooth-maps]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
---

## Statement

For smooth maps $F:M\to N$ and $G:N\to P$, one has $(G\circ F)_p^*=F_p^*\circ G_{F(p)}^*$ for every $p\in M$, and $(\operatorname{id}_M)_p^*=\operatorname{id}_{T_p^*M}$.

## Facts & Assumptions

**Given:** Smooth maps $F:M\to N$ and $G:N\to P$ and a point $p\in M$.

[F1] Pullback is defined by composition with the differential ([[def-pullback-of-a-cotangent-vector]]).

[L1] Differentials satisfy the chain rule ([[thm-chain-rule-for-differentials-of-smooth-maps]]).

## Proof

**Proof technique:** direct.

1.1 For $\omega\in T_{G(F(p))}^*P$, one has $(G\circ F)_p^*(\omega)=\omega\circ d(G\circ F)_p=\omega\circ dG_{F(p)}\circ dF_p=F_p^*(G_{F(p)}^*(\omega))$ by [F1] and [L1]. [F1, L1, given]

1.2 Applying the same formula to the identity map gives $(\operatorname{id}_M)_p^*=\operatorname{id}_{T_p^*M}$. [F1, L1, given]

2.1 Therefore cotangent pullback is contravariantly functorial. [step 1.1, step 1.2] ∎
