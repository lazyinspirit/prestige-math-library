---
id: pthm-emx-stokes-positivity
kind: physics-theorem
title: Stokes cone and deterministic Jones transformations
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - def-emx-coherency-matrix
dependency_roles:
  cor-expectation-linearity-monotonicity-and-modulus-bound: mathematical-premise
  def-emx-coherency-matrix: formulation-prerequisite
proof_strategy: direct
physical_scope: >-
  Conditional algebra for the classical two-component coherency matrix defined
  in this library. For transverse electric components its four real coordinates
  are the stated Stokes parameters; for other classical two-channel amplitudes
  the same cone is an algebraic second-moment constraint, not a polarization
  interpretation. No quantum-state identification, apparatus model, empirical
  observation, or finite-sample claim is made.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "José J. Gil, Polarimetric Characterization of Light and Media, §2.1–2.6, author-revised 2020 version of Eur. Phys. J. Appl. Phys. 40 (2007)"
      url: "https://arxiv.org/pdf/2002.04105"
      locator: "§2.1–2.3, PDF pp. 6–10: Hermitian 2×2 coherency matrices, Pauli/Stokes coordinates, positivity cone and rank-one purity. The local proof derives each inequality directly and fixes its $S_3$ sign from the repository phasor convention."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Let $Z=(Z_1,Z_2)^{\mathsf T}$ be a measurable square-integrable complex
two-component vector on a probability space and define
$\Gamma:=\mathbb E[ZZ^\dagger]$, with
$\Gamma_{ij}:=\mathbb E[Z_i\overline{Z_j}]$. Put
$S_0:=\Gamma_{11}+\Gamma_{22}$,
$S_1:=\Gamma_{11}-\Gamma_{22}$,
$S_2:=2\operatorname{Re}\Gamma_{12}$, and
$S_3:=-2\operatorname{Im}\Gamma_{12}$; when $S_0>0$, put
$\mathcal P:=\sqrt{S_1^2+S_2^2+S_3^2}/S_0$. Then $\Gamma$ is positive
semidefinite, meaning
$v^\dagger\Gamma v\ge0$ for every $v\in\mathbb C^2$; its rank is the complex
dimension of its image. The Stokes coordinates satisfy
$$S_0\ge0,\qquad S_0^2\ge S_1^2+S_2^2+S_3^2.$$
Equality in the second relation holds exactly when $\Gamma=0$ or $\Gamma$ has
rank one. Consequently $\mathcal P\in[0,1]$ when $S_0>0$, and it is undefined
when $S_0=0$. If a fixed deterministic dimensionless complex-linear map
$M:\mathbb C^2\to\mathbb C^2$ (a Jones matrix in this model) sends each
realization $Z$ to $MZ$, then
$\Gamma$ transforms to $M\Gamma M^\dagger$.

## Statement references

[[def-emx-coherency-matrix]]

## Facts & Assumptions

**Given:** A measurable square-integrable $Z:\Xi\to\mathbb C^2$ and its
matrix $\Gamma=\mathbb E[ZZ^\dagger]$ and Stokes coordinates from the
Definition.

[F1] [[def-emx-coherency-matrix]]: $\Gamma_{ij}=\mathbb E[Z_i\overline{Z_j}]$,
$\Gamma^\dagger=\Gamma$, $S_0=\Gamma_{11}+\Gamma_{22}$,
$S_1=\Gamma_{11}-\Gamma_{22}$, $S_2=2\operatorname{Re}\Gamma_{12}$,
$S_3=-2\operatorname{Im}\Gamma_{12}$, and $\mathcal P$ is defined only when
$S_0>0$.

[F2] [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: expectation
of an integrable complex variable is linear.

[A1] $M$ is a fixed deterministic linear map, not a random matrix correlated
with $Z$; its entries are dimensionless and the output amplitudes use the same
component units as the input.

## Proof

1.1 For $v=(v_1,v_2)^{\mathsf T}$, the finite sum
$\overline{v_1}Z_1+\overline{v_2}Z_2$ has an integrable squared modulus,
because it is bounded by
$2(|v_1|^2|Z_1|^2+|v_2|^2|Z_2|^2)$. Expanding the finite matrix product
therefore gives $v^\dagger\Gamma v
=\mathbb E[|v^\dagger Z|^2]\ge0$. Hence $\Gamma$ is positive semidefinite.
[given, F1, algebra]

2.1 Write $\Gamma=\begin{pmatrix}a&c\\\overline c&b\end{pmatrix}$, where
$a,b\ge0$. If $a>0$, positivity applied to $v=(-c/a,1)^{\mathsf T}$ gives
$b-|c|^2/a\ge0$, hence $ab\ge|c|^2$. If $a=0$ and $c\ne0$, positivity at
$v=(-tc,1)^{\mathsf T}$ gives $b-2t|c|^2\ge0$ for every $t>0$, which fails
for sufficiently large $t$; thus $c=0$ and again $ab\ge|c|^2$.
[step 1.1, F1, algebra]

3.1 The definitions give
$S_0^2-S_1^2=4ab$ and $S_2^2+S_3^2=4|c|^2$. Step 2.1 therefore proves
$S_0^2\ge S_1^2+S_2^2+S_3^2$. Equality is equivalent to
$\det\Gamma=ab-|c|^2=0$, which for a positive-semidefinite $2\times2$ matrix
means rank below two; it is rank zero exactly when $\Gamma=0$, and otherwise
rank one. When $S_0>0$, taking nonnegative square roots gives
$0\le\mathcal P\le1$; when $S_0=0$ the quotient is undefined by its
Definition.
[step 2.1, F1, algebra]

4.1 Since $M$ is fixed, $(MZ)(MZ)^\dagger=MZZ^\dagger M^\dagger$ for every
realization. Taking the componentwise expectation and using [F2]'s linearity
gives $\Gamma'=\mathbb E[(MZ)(MZ)^\dagger]=M\Gamma M^\dagger$.
[given, F1, F2, A1, algebra] ∎

## Remarks

This is a conditional identity for an ensemble second-moment model. A
deterministic Jones transformation is not a model of a general random,
depolarizing, or statistically estimated optical device.
