---
id: ex-emx-unpolarized-nonzero-field
kind: example
title: Mixed classical polarization ensembles
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - def-emx-coherency-matrix
  - pthm-emx-stokes-positivity
dependency_roles:
  cor-expectation-linearity-monotonicity-and-modulus-bound: mathematical-premise
  def-emx-coherency-matrix: formulation-prerequisite
  pthm-emx-stokes-positivity: physical-result
proof_strategy: direct
physical_scope: >-
  A finite, ideal classical ensemble of two transverse electric phasors at a
  fixed paraxial detector point. The example distinguishes a vanishing
  ensemble polarization vector from nonzero field amplitude in every
  realization. It is a constructed model example, not a reported preparation,
  measurement, or observation and not a quantum density-operator
  interpretation.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "José J. Gil, Polarimetric Characterization of Light and Media, §2.1–2.6, author-revised 2020 version of Eur. Phys. J. Appl. Phys. 40 (2007)"
      url: "https://arxiv.org/pdf/2002.04105"
      locator: "§2.1–2.6, PDF pp. 6–11: classical second-moment coherency matrices, unpolarized states, and Stokes coordinates. The finite ensemble and its amplitudes are constructed and computed locally."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Example

At one fixed detector point, let a nonzero complex electric amplitude $a$,
with units V m$^{-1}$, occur with equal probability in the two realizations
$Z=(a,0)^{\mathsf T}$ and $Z=(0,a)^{\mathsf T}$. Then
$\Gamma=(|a|^2/2)I_2$, $S_0=|a|^2>0$, and $S_1=S_2=S_3=0$, so the ensemble is
unpolarized by the two-component definition even though each realization is
a definite nonzero classical field amplitude.

## Example references

[[def-emx-coherency-matrix]]

[[pthm-emx-stokes-positivity]]

## Facts & Assumptions

**Given:** The two-point probability space with probability $1/2$ at each
point, and $a\in\mathbb C\setminus\{0\}$ in V m$^{-1}$.

[F1] [[def-emx-coherency-matrix]]: $\Gamma=\mathbb E[ZZ^\dagger]$ and the
Stokes coordinates are the trace, diagonal difference, twice the real
off-diagonal part, and minus twice its imaginary part.

[F2] [[pthm-emx-stokes-positivity]]: a positive-intensity state with
$S_1=S_2=S_3=0$ has degree of polarization zero; the theorem's algebra is
conditional on this classical second-moment model.

[F3] [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: finite
expectations distribute over the two outcomes with their stated probabilities.

[A1] The ensemble consists exactly of the two stated realizations with
probability $1/2$ each; no physical preparation or observation is claimed.

## Verification

1.1 The two realization matrices are
$Z_1Z_1^\dagger=\begin{pmatrix}|a|^2&0\\0&0\end{pmatrix}$ and
$Z_2Z_2^\dagger=\begin{pmatrix}0&0\\0&|a|^2\end{pmatrix}$. Averaging them
with the probabilities in [A1] gives
$\Gamma=(|a|^2/2)I_2$.
[given, F1, F3, A1, algebra]

2.1 Substituting this matrix into [F1] gives
$S_0=|a|^2>0$ and $S_1=S_2=S_3=0$, hence $\mathcal P=0$; each of the two
sample values remains a specified nonzero classical amplitude because
$a\ne0$.
[given, step 1.1, F1, F2, algebra] ∎

## Remarks

The example is a finite mathematical ensemble, not a simulated or measured
dataset. It does not assert that the realizations occur with equal empirical
frequency in any laboratory.
