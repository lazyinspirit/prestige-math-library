---
id: thm-cyclic-vector-criterion-by-minimal-and-characteristic-polynomials
kind: theorem
title: "A cyclic vector exists exactly when the minimal and characteristic polynomials agree"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cyclic-subspace-power-basis-and-companion-matrix, lem-a-vector-realises-the-minimal-polynomial, lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients, thm-minimal-polynomial-is-well-defined-and-controls-annihilators, thm-cayley-hamilton, thm-dimension-of-a-linear-subspace]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "K. Hoffman and R. Kunze, Linear Algebra, 2nd ed., Section 7.1"
      url: "https://math.ucr.edu/~mpierce/teaching/linear-algebra/docs/Hoffman%2CKunze-LinearAlgebra.pdf"
pipeline_run: null
---

## Statement

An endomorphism $T$ of a finite-dimensional vector space has a cyclic vector if and only if $\mu_T=\chi_T$. On the zero space, $v=0$ is cyclic and $\mu_T=\chi_T=1$.

## Facts & Assumptions

**Given:** An endomorphism $T$ of an $n$-dimensional vector space $V$.

[L1] If $m_{T,v}$ has degree $d$, then $v,Tv,\ldots,T^{d-1}v$ is a basis of $Z(v;T)$ ([[thm-cyclic-subspace-power-basis-and-companion-matrix]]).

[L2] Some vector $v$ satisfies $m_{T,v}=\mu_T$ ([[lem-a-vector-realises-the-minimal-polynomial]]).

[L3] The characteristic polynomial is monic of degree $n$, and is $1$ for $n=0$ ([[lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients]]).

[L4] A polynomial annihilates $T$ exactly when it is divisible by $\mu_T$ ([[thm-minimal-polynomial-is-well-defined-and-controls-annihilators]]), and $\chi_T(T)=0$ ([[thm-cayley-hamilton]]).

[L5] A finite-dimensional subspace with the same dimension as its ambient space equals that space ([[thm-dimension-of-a-linear-subspace]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $v$ is cyclic. A polynomial annihilates $v$ exactly when it annihilates every $q(T)v$, because polynomial evaluations commute and these vectors span $V$; hence $m_{T,v}=\mu_T$. By [L1], $\deg\mu_T=\dim Z(v;T)=n$. [L1, L4, algebra]

1.2 Conversely, suppose $\mu_T=\chi_T$ and choose $v$ as in [L2]. Then [L1] gives $\dim Z(v;T)=\deg m_{T,v}=\deg\chi_T=n$; since $Z(v;T)$ is a subspace of $V$, [L5] gives $Z(v;T)=V$, so $v$ is cyclic. [L1, L2, L3, L5, choose]

2.1 Fact [L4] gives $\mu_T\mid\chi_T$, while [L3] makes both monic and step 1.1 gives equal degree; therefore $\mu_T=\chi_T$. [step 1.1, L3, L4]

3.1 When $V=0$, [L2] chooses $v=0$, [L3] and [L4] give both polynomials as $1$, and its cyclic subspace is $V$; thus steps 1.1-2.1 cover every case and both directions. [step 1.1, step 2.1, step 1.2, L2, L3, L4] ∎
