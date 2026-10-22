---
id: ex-emg-fx-diagonal-harmonic-maps
kind: example
title: "A scalar diagonal sector of the positive matrix equation"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
deps:
  - def-emg-fx-matrix-harmonic-problem
  - lem-emg-fx-mazur-comparison
  - def-real-exponential-function-and-e
  - cor-exponential-reciprocal-and-positivity
  - thm-ck-euclidean-maps-closed-under-algebra-and-composition
  - thm-exponential-is-strictly-increasing
  - thm-derivative-of-exponential
  - thm-chain-rule-for-total-derivatives
dependency_roles:
  def-emg-fx-matrix-harmonic-problem: mathematical-premise
  lem-emg-fx-mazur-comparison: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
reference: research/plan-einstein-maxwell-models-frontier-expansion-track.md#reduced-stationary-uniqueness-and-explicit-research-boundaries
sources:
  references:
    - title: "P. T. Chruściel, J. Lopes Costa and M. Heusler, Stationary Black Holes: Uniqueness and Beyond, Living Reviews in Relativity 15 (2012), article 7, arXiv:1205.6112v1"
      url: https://arxiv.org/pdf/1205.6112
      locator: "Section 7.1, PDF pp. 36–37: positive-matrix harmonic-map comparison context; this scalar diagonal example is calculated directly from its stated definition."
    - title: "Markus Heusler, Black Hole Uniqueness Theorems, Cambridge Lecture Notes in Physics 6, Cambridge University Press (1996)"
      url: https://ru.djvu.online/file/ooXRsSuiVzYAO
      locator: "Chapter 10, §10.2, printed pp. 169–172: Hermitian matrix comparison context; the diagonal reduction is verified locally."
    - title: "Pawel O. Mazur, Black Hole Uniqueness Theorems, arXiv:hep-th/0101012v1 (2000; based on the 1986 GR11 plenary lecture)"
      url: https://arxiv.org/pdf/hep-th/0101012
      locator: "Section V, PDF pp. 18–20: sigma-model matrix formulation; the example makes no spacetime or electrovacuum claim."
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
proof_strategy: direct
---

## Example

Let $\Omega\subseteq\mathbb R^d$ be the nonempty bounded connected smooth Euclidean domain of the positive matrix boundary problem, with $d\ge1$. For a smooth real-valued function $u$ on $\overline\Omega$, define the Euclidean Laplacian by $\Delta u:=\sum_{a=1}^d\partial_a^2u$ and call $u$ **harmonic** on $\Omega$ when $\Delta u=0$ there. In matrix size $n=2$, define

$$\Phi_u(x):=\begin{pmatrix}e^{u(x)}&0\\0&e^{-u(x)}\end{pmatrix}.$$

Then $\Phi_u$ is a smooth map into the positive Hermitian determinant-one matrices, and it satisfies $\operatorname{div}(\Phi_u^{-1}d\Phi_u)=0$ exactly when $u$ is harmonic. Moreover, if $u,v\in C^\infty(\overline\Omega,\mathbb R)$ are harmonic and $\Phi_u=\Phi_v$ at every point of $\partial\Omega$, then $\Phi_u=\Phi_v$ on $\overline\Omega$ (and hence $u=v$ there).

## Example references

[[def-emg-fx-matrix-harmonic-problem]]

[[lem-emg-fx-mazur-comparison]]

## Facts & Assumptions

**Given:** The domain $\Omega$, a smooth real function $u$, and the matrix definitions above.

[F1] [[def-emg-fx-matrix-harmonic-problem]]: the matrix equation is $\operatorname{div}J=\sum_a\partial_aJ_a=0$ for $J=\Phi^{-1}d\Phi$, and the admissible matrices are positive Hermitian with determinant one.

[F2] [[lem-emg-fx-mazur-comparison]]: two smooth admissible matrix solutions with identical values on the entire boundary of the same bounded connected smooth Euclidean domain agree throughout its closure.

[F3] [[def-real-exponential-function-and-e]], [[thm-derivative-of-exponential]], [[cor-exponential-reciprocal-and-positivity]], [[thm-chain-rule-for-total-derivatives]], and [[thm-exponential-is-strictly-increasing]]: the real exponential is smooth with derivative itself, is positive, satisfies $\exp(-x)=1/\exp(x)$, and is strictly increasing; the chain rule differentiates its composition with $u$.

[F4] [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]: compositions of smooth Euclidean maps are smooth.

## Verification

1.1 By [F3], the diagonal entries are positive and $e^ue^{-u}=1$; by the chain rule their derivatives are $e^u\partial_au$ and $-e^{-u}\partial_au$. Since the exponential is smooth and compositions of smooth maps are smooth by [F4], $\Phi_u$ is a smooth admissible matrix field. Direct multiplication gives $\Phi_u^{-1}\partial_a\Phi_u=\operatorname{diag}(\partial_au,-\partial_au)$. [given, F3, F4, algebra]

2.1 Taking the componentwise divergence gives $\operatorname{div}(\Phi_u^{-1}d\Phi_u)=\operatorname{diag}(\sum_a\partial_a^2u,-\sum_a\partial_a^2u)=\operatorname{diag}(\Delta u,-\Delta u)$. This matrix vanishes exactly when $\Delta u=0$. [given, F1, step 1.1, algebra]

3.1 Let $u,v$ be harmonic and suppose $\Phi_u=\Phi_v$ at every point of $\partial\Omega$. Applying steps 1.1–2.1 to each function shows that both maps satisfy the positive matrix equation; they have the same full Dirichlet data, so [F2] gives $\Phi_u=\Phi_v$ on $\overline\Omega$. [given, F1, F2, step 1.1, step 2.1]

4.1 Equality of the first diagonal entries gives $e^{u(x)}=e^{v(x)}$ for every $x\in\overline\Omega$. Strict increase of the exponential in [F3] implies $u(x)=v(x)$ throughout $\overline\Omega$. [F3, step 3.1] ∎

