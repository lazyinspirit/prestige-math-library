---
id: prop-adjoint-algebra
kind: proposition
title: "Adjoints satisfy $(S+T)^*=S^*+T^*$, $(\\lambda T)^*=\\overline\\lambda T^*$, $(ST)^*=T^*S^*$, and $T^{**}=T$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-adjoint-of-a-linear-map-between-inner-product-spaces, thm-adjoint-exists-and-is-unique-in-finite-dimension, lem-inner-product-pairing-is-nondegenerate-and-norm-is-homogeneous]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., result 7.5'
      url: 'https://linear.axler.net/LADR4e.pdf'
    - title: 'Sergei Treil, Linear Algebra Done Wrong, §5.5.1, useful formulas for adjoints'
      url: 'https://www.math.brown.edu/streil/papers/LADW/HTML_2026_04-30/Ch5.html'
pipeline_run: null
---

## Statement

For compatible linear maps between finite-dimensional real or complex inner product spaces,

$$(S+T)^*=S^*+T^*,\qquad (\lambda T)^*=\overline\lambda T^*,\qquad (ST)^*=T^*S^*,\qquad T^{**}=T.$$

Also $I^*=I$ and $0^*=0$.

## Facts & Assumptions

**Given:** Compatible finite-dimensional linear maps $S,T$ and a scalar $\lambda$.

[L1] An adjoint is characterised by $\langle Tv,w\rangle=\langle v,T^*w\rangle$ ([[def-adjoint-of-a-linear-map-between-inner-product-spaces]]).

[L2] Finite-dimensional adjoints exist and are unique ([[thm-adjoint-exists-and-is-unique-in-finite-dimension]]).

[L3] Equality of pairings with every vector forces equality of the paired vectors ([[lem-inner-product-pairing-is-nondegenerate-and-norm-is-homogeneous]]).

## Proof

**Proof technique:** direct.

1.1 For all $v,w$, linearity in the first argument and [L1] give $\langle(S+T)v,w\rangle=\langle v,(S^*+T^*)w\rangle$. Uniqueness in [L2] proves the sum formula. The same calculation gives $I^*=I$ and $0^*=0$. [L1, L2]

1.2 Likewise $\langle\lambda Tv,w\rangle=\lambda\langle v,T^*w\rangle=\langle v,\overline\lambda T^*w\rangle$, because the second argument is conjugate-linear. Thus $(\lambda T)^*=\overline\lambda T^*$. [L1, L2, algebra]

1.3 For a composite, $\langle STv,w\rangle=\langle Tv,S^*w\rangle=\langle v,T^*S^*w\rangle$, so uniqueness gives $(ST)^*=T^*S^*$. [L1, L2]

2.1 Conjugate symmetry rewrites [L1] as $\langle T^*w,v\rangle=\langle w,Tv\rangle$, so $T$ is an adjoint of $T^*$. By [L2], $T^{**}=T$. [L1, L2, L3] ∎
