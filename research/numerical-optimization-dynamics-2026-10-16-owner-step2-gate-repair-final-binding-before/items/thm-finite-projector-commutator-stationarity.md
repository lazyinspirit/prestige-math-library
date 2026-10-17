---
id: thm-finite-projector-commutator-stationarity
kind: theorem
title: "Projector-energy stationarity is equivalent to Fock commutation"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-finite-basis-projector-energy-model
  - prop-finite-projector-energy-reality-and-gradient
  - lem-complex-projector-tangent-commutator-curves
  - def-frobenius-matrix-norm
  - def-matrix-product-and-identity-matrix
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Eric Cancès and Claude Le Bris, On the convergence of SCF algorithms for the Hartree-Fock equations, ESAIM: Mathematical Modelling and Numerical Analysis 34 (2000), §2.1 and Lemma 2"
      url: https://numdam.org/item/M2AN_2000__34_4_749_0.pdf
    - title: "Alan Edelman, Tomás A. Arias, and Steven T. Smith, The Geometry of Algorithms with Orthogonality Constraints, SIAM Journal on Matrix Analysis and Applications 20 (1998), §§2.3.2 and 2.5"
      url: https://math.mit.edu/~edelman/publications/geometry_of_algorithms.pdf
verification: {}
---

## Statement

Let $E$ and $F(P)=\nabla E(P)$ be the finite-basis model and gradient of
[[def-finite-basis-projector-energy-model]]. A projector $P\in\mathcal P_r$
is stationary for $E$ restricted to $\mathcal P_r$ if and only if
$$[F(P),P]:=F(P)P-PF(P)=0.$$
Stationarity is only a first-order condition; it does not assert that $P$ is a
minimum.

## Facts & Assumptions

**Given:** A $C^2$ finite-basis projector energy, $P\in\mathcal P_r$, and the real Frobenius inner product on Hermitian matrices.

[F1] The Hermitian Frobenius gradient satisfies $DE(P)[H]=\operatorname{tr}(F(P)H)$ for Hermitian $H$ ([[prop-finite-projector-energy-reality-and-gradient]]).

[F2] The tangent directions at $P$ are exactly $[K,P]$ for skew-Hermitian $K$, and each is the velocity of a feasible unitary-conjugation curve ([[lem-complex-projector-tangent-commutator-curves]]).

## Proof

1.1 Let $K^*=-K$. By [F2], $H_K=[K,P]$ is the velocity at zero of a feasible curve through $P$. The gradient formula [F1] gives $DE(P)[H_K]=\operatorname{tr}(F(P)(KP-PK))$. Cyclicity of trace, which follows from $\operatorname{tr}(AB)=\sum_{i,j}A_{ij}B_{ji}=\operatorname{tr}(BA)$, rewrites this as $-\operatorname{tr}([F(P),P]K)$. [F1, F2, given, algebra]

2.1 Put $C=[F(P),P]$. Since $F(P)$ and $P$ are Hermitian, $C^*=-C$. If $P$ is stationary, step 1.1 vanishes for every skew-Hermitian $K$; choosing $K=C$ gives $0=-\operatorname{tr}(C^2)=\operatorname{tr}(C^*C)=\|C\|_F^2$, so $C=0$. Conversely, if $C=0$, step 1.1 vanishes for every $K$, and [F2] says these are all tangent directions, so $P$ is stationary. [F2, step 1.1, given, algebra] ∎

