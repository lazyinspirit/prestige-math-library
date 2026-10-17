---
id: cor-finite-basis-energy-model-has-c1-response
kind: corollary
title: The finite-basis projector energy model supplies a C1 Hermitian response map
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps: [def-self-consistent-projector-response-map, lem-gapped-projector-map-well-defined, def-finite-basis-projector-energy-model, def-real-frechet-derivative-on-real-and-complex-matrix-spaces, def-c-one-map-and-local-inverse, def-ck-and-multi-index-notation-in-several-variables, thm-continuous-partial-derivatives-imply-total-differentiability, lem-euclidean-linear-maps-have-matrices-and-are-bounded, lem-spectral-gap-persistence-and-uniform-resolvent-bound, def-operator-norm-on-a-finite-dimensional-inner-product-space, def-frobenius-matrix-norm, thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison, thm-block-projector-frechet-derivative-and-bound, thm-chain-rule-for-total-derivatives]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Eric Cancès and Claude Le Bris, On the convergence of SCF algorithms for the Hartree-Fock equations, §2.1
      url: https://www.numdam.org/item/M2AN_2000__34_4_749_0.pdf
verification:
  precheck: pending
---

## Statement

For the finite-basis data on the model's open Hermitian domain in
[[def-finite-basis-projector-energy-model]], the Hermitian response
$$F(P)=h+G(P)+\nabla E_{xc}(P)$$
is $C^1$ on the model's open domain. At every $P_0$ with an occupied/unoccupied
gap, the occupied-projector map $\Phi(P)=\Pi_r(F(P))$ is $C^1$ on a sufficiently
small neighborhood of $P_0$ where that gap persists.

## Facts & Assumptions

**Given:** A finite-basis model with Hermitian $h$, real-linear $G:\mathbb H_n\to\mathbb H_n$, and real $C^2$ functional $E_{xc}$ on an open neighborhood; a point $P_0$ at which $F(P_0)$ has a strict $r$-th spectral gap.

[F1] The model defines $F(P)=h+G(P)+\nabla E_{xc}(P)$, with $G$ real-linear and $E_{xc}$ of class $C^2$ ([[def-finite-basis-projector-energy-model]]).

[F2] The real Frechet derivative treats complex matrix spaces as real finite-dimensional spaces ([[def-real-frechet-derivative-on-real-and-complex-matrix-spaces]]).

[F3] A gapped block projector is $C^1$ on a neighborhood with a common separating contour ([[thm-block-projector-frechet-derivative-and-bound]]).

[F4] The derivative of a composition is the composition of the derivatives ([[thm-chain-rule-for-total-derivatives]]).

[F5] A computable operator-norm ball around a Hermitian matrix with a strict occupied gap retains that gap ([[lem-spectral-gap-persistence-and-uniform-resolvent-bound]]).

[F6] The operator norm is at most the Frobenius norm, and both are continuous finite-dimensional norms ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]], [[def-frobenius-matrix-norm]], [[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]).

[L1] The gapped response map is the unique rank-$r$ occupied projector ([[lem-gapped-projector-map-well-defined]]).

[F7] The $C^2$ convention in finite-dimensional real coordinates gives continuous partial derivatives through order two ([[def-ck-and-multi-index-notation-in-several-variables]]).

[F8] A map whose coordinate partial derivatives exist and are continuous is total differentiable with those derivatives ([[thm-continuous-partial-derivatives-imply-total-differentiability]]).

[F9] A real-linear map between finite-dimensional Euclidean spaces is bounded and continuous ([[lem-euclidean-linear-maps-have-matrices-and-are-bounded]]).

## Proof

1.1 Identify the real Hermitian space with its finite coordinate space. The constant map $P\mapsto h$ has derivative zero. The real-linear map $G$ is continuous by [F9] and has derivative $G$ at every point because $G(P+H)-G(P)-G(H)=0$. By [F7] the first partials of $E_{xc}$ are $C^1$: each has first partials given by the continuous second partials of $E_{xc}$, and [F8] makes each component of $\nabla E_{xc}$ total differentiable with continuous derivative. Thus all three summands in [F1] are $C^1$, so $F$ is $C^1$ and Hermitian-valued on the model's open domain. [given, F1, F2, F7, F8, F9, algebra]

2.1 Continuity of $F$ gives a neighborhood $V$ of $P_0$ on which $\|F(P)-F(P_0)\|_F<g/4$, where $g$ is the gap at $P_0$. By [F6], the operator-norm difference is also less than $g/4$. By [F5] this image lies in a common gap-preserving ball; [F3] makes its block projector $C^1$ there and [L1] identifies it with the defined occupied projector. By [F4], $\Phi=\Pi_r\circ F$ is $C^1$ on $V$. [step 1.1, F3, F4, F5, F6, L1, choose] ∎
