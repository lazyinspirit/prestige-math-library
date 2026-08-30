---
id: prop-the-tangent-bundle-construction-is-functorial
kind: proposition
title: "The tangent-bundle construction is functorial"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-global-differential-or-tangent-map, thm-chain-rule-for-differentials-of-smooth-maps]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
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

The assignments $M\mapsto TM$ and $F\mapsto dF$ define a functor on smooth manifolds: $d\operatorname{id}_M=\operatorname{id}_{TM}$ and $d(G\circ F)=dG\circ dF$.

## Facts & Assumptions

**Given:** Smooth maps $F:M\to N$ and $G:N\to P$.

[F1] The global differential is assembled pointwise from the differentials $dF_p$ ([[def-global-differential-or-tangent-map]]).

[L1] Differentials satisfy the pointwise chain rule ([[thm-chain-rule-for-differentials-of-smooth-maps]]).

## Proof

**Proof technique:** direct.

1.1 For every $v\in T_pM$, one has $d\operatorname{id}_M(v)=d(\operatorname{id}_M)_p(v)=v$ by [L1], so $d\operatorname{id}_M=\operatorname{id}_{TM}$. [F1, L1, given]

1.2 For every $v\in T_pM$, one has $d(G\circ F)(v)=d(G\circ F)_p(v)=dG_{F(p)}(dF_p(v))=(dG\circ dF)(v)$ by [L1] and [F1]. [F1, L1, given]

2.1 Therefore the tangent-bundle construction is functorial. [step 1.1, step 1.2] ∎
