---
id: thm-cyclic-subspace-power-basis-and-companion-matrix
kind: theorem
title: "A vector annihilator gives a power basis and its companion matrix"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-vector-annihilator-is-well-defined, thm-polynomial-division-algorithm-over-a-field, def-coordinate-column-and-matrix-of-a-linear-map, def-cyclic-subspace-vector-and-vector-annihilator]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "K. Hoffman and R. Kunze, Linear Algebra, 2nd ed., Theorems 1-2 in Section 7.1"
      url: "https://math.ucr.edu/~mpierce/teaching/linear-algebra/docs/Hoffman%2CKunze-LinearAlgebra.pdf"
pipeline_run: null
---

## Statement

Let $m_{T,v}=x^d+a_{d-1}x^{d-1}+\cdots+a_0$. Then
$$(v,Tv,\ldots,T^{d-1}v)$$
is an ordered basis of $Z(v;T)$. In this basis the restriction $T|_{Z(v;T)}$ has the companion matrix with ones on the subdiagonal and last column $(-a_0,-a_1,\ldots,-a_{d-1})^{\mathsf T}$. If $d=0$, then $v=0$, $Z(v;T)=0$, and both the basis and matrix are empty.

## Facts & Assumptions

**Given:** An endomorphism $T$, a vector $v$, and its monic vector annihilator $m=m_{T,v}$ of degree $d$.

[L1] For an endomorphism of a **finite-dimensional** vector space, $\operatorname{Ann}_T(v)$ has a unique monic generator $m_{T,v}$ and $p(T)v=0$ exactly when $m_{T,v}\mid p$ ([[prop-vector-annihilator-is-well-defined]]).

[L2] Division by monic $m$ writes each $p\in F[x]$ uniquely as $p=qm+r$ with $\deg r<d$ or $r=0$ ([[thm-polynomial-division-algorithm-over-a-field]]).

[L3] The cyclic subspace is $Z(v;T)=\{p(T)v:p\in F[x]\}$ ([[def-cyclic-subspace-vector-and-vector-annihilator]]).

[L4] Matrix columns are the coordinates of the images of ordered basis vectors ([[def-coordinate-column-and-matrix-of-a-linear-map]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], $p(T)v=r(T)v$ because $m(T)v=0$; [L3] therefore shows that $v,Tv,\ldots,T^{d-1}v$ span $Z(v;T)$. [L1, L2, L3]

1.2 A linear relation among those powers gives a polynomial $r$ of degree below $d$ with $r(T)v=0$; [L1] says $m\mid r$, so $r=0$. Thus the list is independent and hence a basis. [L1, algebra]

1.3 The first $d-1$ basis vectors shift to the next ones, while $m(T)v=0$ gives $T^dv=-a_0v-\cdots-a_{d-1}T^{d-1}v$; [L4] yields the stated companion matrix. [L1, L4, algebra]

2.1 If $d=0$, monicity makes $m=1$, so [L1] gives $v=0$ and [L3] gives the zero cyclic subspace; the empty basis and matrix then establish the endpoint case. [L1, L3] ∎
