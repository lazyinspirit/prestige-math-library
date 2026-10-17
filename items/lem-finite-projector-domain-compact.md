---
id: lem-finite-projector-domain-compact
kind: lemma
title: "The finite rank-r projector domain is nonempty and compact"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-rank-r-orthogonal-projector-domain
  - lem-hermitian-idempotent-trace-equals-rank
  - thm-heine-borel-rn
  - def-matrix-product-and-identity-matrix
  - def-trace-of-a-square-matrix
  - def-frobenius-matrix-norm
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Eric Cancès and Claude Le Bris, On the convergence of SCF algorithms for the Hartree-Fock equations, ESAIM: Mathematical Modelling and Numerical Analysis 34 (2000), §2.1"
      url: https://numdam.org/item/M2AN_2000__34_4_749_0.pdf
    - title: "Alan Edelman, Tomás A. Arias, and Steven T. Smith, The Geometry of Algorithms with Orthogonality Constraints, SIAM Journal on Matrix Analysis and Applications 20 (1998), §2.5"
      url: https://math.mit.edu/~edelman/publications/geometry_of_algorithms.pdf
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
---

## Statement

For integers $n\ge2$ and $1\le r<n$, $\mathcal P_r$ from
[[def-rank-r-orthogonal-projector-domain]] is a nonempty compact subset of the
real finite-dimensional space $\mathbb H_n$.

## Facts & Assumptions

**Given:** Integers $n\ge2$ and $1\le r<n$ and the Frobenius topology on $\mathbb H_n$.

[F1] $\mathcal P_r$ consists of Hermitian idempotents with trace $r$ ([[def-rank-r-orthogonal-projector-domain]]).

[F2] A Hermitian idempotent has rank equal to its trace ([[lem-hermitian-idempotent-trace-equals-rank]]).

[F3] In real coordinates, a subset of $\mathbb R^N$ is compact exactly when it is closed and bounded; this theorem uses no choice principle ([[thm-heine-borel-rn]]).

## Proof

1.1 The diagonal matrix $P_*:=\operatorname{diag}(I_r,0)$ satisfies $P_*^*=P_*$, $P_*^2=P_*$, and $\operatorname{tr}P_*=r$, so it belongs to $\mathcal P_r$ by [F1]. It has rank $r$ by [F2], making the domain nonempty. [F1, F2, given, construct]

1.2 The equations $P=P^*$, $P^2=P$, and $\operatorname{tr}P=r$ are closed conditions on the real coordinates of $\mathbb H_n$, since adjoint, multiplication, and trace are continuous finite-dimensional maps. Thus $\mathcal P_r$ is closed. For $P\in\mathcal P_r$, $\|P\|_F^2=\operatorname{tr}(P^*P)=\operatorname{tr}(P^2)=r$, so it is bounded. [F1, given, algebra]

2.1 The real dimension of $\mathbb H_n$ is $n^2$: there are $n$ real diagonal entries and two real coordinates for each of the $n(n-1)/2$ off-diagonal conjugate pairs. Therefore $\mathbb H_n$ is linearly homeomorphic to $\mathbb R^{n^2}$. By [F3], the closed bounded nonempty subset $\mathcal P_r$ is compact. [F3, step 1.1, step 1.2, algebra] ∎

