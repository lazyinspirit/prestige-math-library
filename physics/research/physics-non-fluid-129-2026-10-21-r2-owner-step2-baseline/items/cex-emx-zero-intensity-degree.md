---
id: cex-emx-zero-intensity-degree
kind: counterexample
title: Normalized polarization is undefined at darkness
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - def-emx-coherency-matrix
dependency_roles:
  def-emx-coherency-matrix: formulation-prerequisite
proof_strategy: direct
physical_scope: >-
  A zero-amplitude classical ensemble in the two-component coherency-matrix
  model. It demonstrates a boundary of a normalization definition; it is not
  a reported dark-detector observation, a noise model, or an empirical claim.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "José J. Gil, Polarimetric Characterization of Light and Media, §2.1–2.6, author-revised 2020 version of Eur. Phys. J. Appl. Phys. 40 (2007)"
      url: "https://arxiv.org/pdf/2002.04105"
      locator: "§2.1–2.6, PDF pp. 6–11: coherency matrices, Stokes coordinates and intensity/purity normalization. The zero-field boundary case is computed locally."
verification:
  precheck: pending
---

## Statement refuted

For every square-integrable two-component classical ensemble, the quotient
$\mathcal P=\sqrt{S_1^2+S_2^2+S_3^2}/S_0$ defines a real degree of
polarization.

## Statement references

[[def-emx-coherency-matrix]]

## Facts & Assumptions

**Given:** The one-point probability space $\Xi=\{\sigma_0\}$ with
$\mathbb P(\{\sigma_0\})=1$, and the square-integrable two-component complex
amplitude $Z(\sigma_0)=0$.

[F1] [[def-emx-coherency-matrix]]: $\Gamma=\mathbb E[ZZ^\dagger]$,
$S_0=\Gamma_{11}+\Gamma_{22}$, and the normalized degree is defined only when
$S_0>0$.

[A1] $Z(\sigma_0)=0$ on the declared one-point probability space.

## Counterexample

1.1 From [A1], $ZZ^\dagger=0$ at the sole sample point, so [F1] gives
$\Gamma=0$ and $S_0=S_1=S_2=S_3=0$.
[given, F1, A1, algebra]

2.1 The proposed quotient therefore has denominator $S_0=0$ and is undefined;
the universal statement is false, even though the unnormalized cone
inequality holds as $0\ge0$.
[step 1.1, F1, algebra] ∎

## Remarks

This is a domain-of-definition counterexample. It makes no claim about a
real detector's dark counts, background, resolution, or uncertainty.
