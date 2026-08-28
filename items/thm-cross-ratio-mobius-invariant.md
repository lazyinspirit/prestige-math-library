---
id: thm-cross-ratio-mobius-invariant
kind: theorem
title: "The cross-ratio is invariant under Möbius transformations"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-cross-ratio-riemann-sphere, thm-three-point-transitivity-mobius-transformations, thm-mobius-transformations-biholomorphic-sphere]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 3 §§2.2-3.5"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "Matthias Weber, Complex Analysis, Ch. 1 §§1.3-1.4"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 8 §§1-2"
      url: "https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis"
pipeline_run: frontier-22
---

## Statement

If $M$ is a Möbius transformation and $z_1,z_2,z_3,z_4$ are distinct sphere
points, then
$$[M(z_1),M(z_2);M(z_3),M(z_4)]=[z_1,z_2;z_3,z_4].$$
Thus the cross-ratio is a Möbius invariant.

## Facts & Assumptions

**Given:** A Möbius transformation $M$ and distinct points $z_1,z_2,z_3,z_4\in\widehat{\mathbb C}$.

[L1] There is a unique Möbius transformation sending any ordered triple of distinct sphere points to any other such triple ([[thm-three-point-transitivity-mobius-transformations]]).

## Proof

**Proof technique:** direct.

1.1 Let $N$ be the unique Möbius transformation sending $(z_2,z_3,z_4)$ to $(1,0,\infty)$, and let $N_M$ be the unique Möbius transformation sending $(M(z_2),M(z_3),M(z_4))$ to $(1,0,\infty)$. The defining formulas for the cross-ratio in its first variable give a Möbius map that sends $(z_2,z_3,z_4)$ to $(1,0,\infty)$, so uniqueness gives $N(z)=[z,z_2;z_3,z_4]$ for all $z$. Likewise $N_M(w)=[w,M(z_2);M(z_3),M(z_4)]$ for all $w$. In particular $$N(z_1)=[z_1,z_2;z_3,z_4],\qquad N_M(M(z_1))=[M(z_1),M(z_2);M(z_3),M(z_4)].$$ [L1, given]

2.1 The maps $N\circ M^{-1}$ and $N_M$ have the same action on the triple $(M(z_2),M(z_3),M(z_4))$, so [L1] makes them equal. Evaluating at $M(z_1)$ yields $[M(z_1),M(z_2);M(z_3),M(z_4)]=[z_1,z_2;z_3,z_4]$. [L1, given] ∎
