---
id: thm-discriminant-square-criterion-for-an-alternating-galois-group
kind: theorem
title: "For a monic separable polynomial in characteristic not two, the Galois group lies in $A_n$ exactly when the discriminant is a square"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [prop-vandermonde-transforms-by-sign-under-the-galois-action, def-discriminant-of-a-monic-polynomial, thm-discriminant-root-formula-and-repeated-root-criterion, def-alternating-group, thm-fundamental-theorem-of-finite-galois-theory]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Corollary 4.2"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "K. Conrad, Galois Groups of Cubics and Quartics, Theorem 1.3"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cubicquartic.pdf"
pipeline_run: null
---

## Statement

Let $f\in F[x]$ be a monic separable polynomial of degree $n$, where $\operatorname{char}F\ne2$. The Galois group lies in $A_n$ exactly when the discriminant is a square in the base field.

## Facts & Assumptions

**Given:** A splitting field $L/F$, an ordered root list, the discriminant definition of [[def-discriminant-of-a-monic-polynomial]], the root formula $\operatorname{Disc}(f)=\delta^2$ and the fact that separability makes it nonzero ([[thm-discriminant-root-formula-and-repeated-root-criterion]]), the definition $A_n=\ker(\operatorname{sgn})$ ([[def-alternating-group]]), and the finite Galois correspondence, which gives $L^{\operatorname{Gal}(L/F)}=F$ ([[thm-fundamental-theorem-of-finite-galois-theory]]).

[L1] For the Vandermonde product, $\sigma(\delta)=\operatorname{sgn}(\sigma)\delta$ for every Galois automorphism ([[prop-vandermonde-transforms-by-sign-under-the-galois-action]]).

## Proof

**Proof technique:** direct.

1.1 For the forward direction, suppose the Galois group lies in $A_n$. Then every sign is $1$, so [L1] shows that every automorphism fixes $\delta$. The fixed field is $F$, hence $\delta\in F$ and $\operatorname{Disc}(f)=\delta^2$ is a square in $F$. This also covers $n=0$ and $n=1$, when $\delta=1$. [L1, given]

2.1 For the reverse direction, suppose $\operatorname{Disc}(f)=d^2$ for some $d\in F$. Since $\delta^2=d^2$, the field law gives $\delta=d$ or $\delta=-d$, so $\delta\in F$. Thus every automorphism fixes $\delta$, and [L1] gives $\operatorname{sgn}(\sigma)\delta=\delta$. Separability gives $\delta\ne0$, so cancellation and $1\ne-1$ in characteristic not two force $\operatorname{sgn}(\sigma)=1$. Therefore every Galois permutation lies in $A_n$. [L1, given, algebra] ∎

## Remarks

The characteristic hypothesis is essential to this argument: in characteristic two the two signs have the same scalar action, so the Vandermonde equation cannot detect parity.
