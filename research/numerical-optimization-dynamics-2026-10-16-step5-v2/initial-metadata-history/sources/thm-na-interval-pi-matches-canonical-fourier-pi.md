---
id: thm-na-interval-pi-matches-canonical-fourier-pi
kind: theorem
title: "The interval evaluator's arctangent definition uses the canonical Fourier pi"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: computed-fast-transforms-and-convolution
dependency_level: 9
deps: [def-real-elementary-functions-and-domains, thm-principal-inverse-tangent-calculus, thm-abel-limit-theorem, cor-differentiable-implies-continuous, def-pi-via-first-positive-cosine-zero, lem-trigonometric-identities-machin-and-range-reduction]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, §4.23 Inverse Trigonometric Functions"
      url: https://dlmf.nist.gov/4.23
---

## Statement

The value $4\arctan(1)$ stipulated for $\pi$ by [[def-real-elementary-functions-and-domains]] equals the canonical circle constant $\pi$ used in the finite Fourier conventions, including [[def-pi-via-first-positive-cosine-zero]]. Thus the Machin enclosure of $\pi$ used by the interval evaluator encloses the same constant as the DFT and Bluestein formulas.

## Facts & Assumptions

**Given:** The interval-evaluator definition of $\arctan$ and $\pi$, and the published principal inverse tangent.

[F1] The interval-evaluator definition sets $\arctan x=\int_0^x(1+t^2)^{-1}\,dt$ and $\pi=4\arctan(1)$ ([[def-real-elementary-functions-and-domains]]).

[F2] The principal arctangent equals the same integral for every real input; for $|x|<1$ it equals its alternating power series, and the endpoint alternating series has sum $\pi/4$ ([[thm-principal-inverse-tangent-calculus]]).

[F3] If an ordinary real series converges to $s$, its power series tends to $s$ as its argument increases to $1$ ([[thm-abel-limit-theorem]]).

[F4] A function differentiable at a limit point is continuous there ([[cor-differentiable-implies-continuous]]).

[F5] The canonical Fourier constant is the positive constant $\pi=2\gamma$ where $\gamma$ is the smallest positive zero of cosine ([[def-pi-via-first-positive-cosine-zero]]).

[F6] For the integral-defined arctangent $A$ and $\pi_A=4A(1)$, $16A(1/5)-4A(1/239)=\pi_A$ ([[lem-trigonometric-identities-machin-and-range-reduction]], Proof step 3.1).

## Proof

1.1 By [F1] and the integral identity in [F2], the interval-evaluator arctangent and the principal arctangent have the same value at $1$. [given, F1, F2]

1.2 Let $a_n=(-1)^n/(2n+1)$. The endpoint statement in [F2] says $\sum_{n\ge0}a_n=\pi/4$; [F3] gives $\lim_{x\uparrow1}\sum_{n\ge0}a_n(x^2)^n=\pi/4$. Multiplication by $x$ and the interior power-series identity in [F2] show $\lim_{x\uparrow1}\arctan x=\pi/4$, where [F5] fixes this as the canonical Fourier constant. [F2, F3, F5, algebra]

2.1 The principal arctangent is differentiable at $1$ by [F2], hence continuous there by [F4]. Therefore step 1.2 gives $\arctan(1)=\pi/4$. Step 1.1 and [F1] now give $4\arctan(1)=\pi$, proving that the interval evaluator and the Fourier formulas use the same constant. Finally [F6] identifies $16\arctan(1/5)-4\arctan(1/239)$ with $4\arctan(1)$, so its Machin enclosure contains this canonical $\pi$. [F1, F2, F4, F6, step 1.1, step 1.2, algebra] ∎
