---
id: ex-noise-induced-instability-in-explicit-em
kind: example
title: "Noise destabilizes explicit Euler while drift-implicit Euler contracts"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-drift-implicit-euler-sde
  - alg-euler-maruyama-autonomous
  - def-ito-sde-and-strong-solution
  - def-d-dimensional-brownian-motion
  - def-axiom-of-choice
  - thm-multidimensional-ito-formula-for-brownian-driven-processes
  - def-standard-normal-and-normal-laws
  - thm-global-strong-well-posedness-for-lipschitz-ito-sdes
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Desmond J. Higham, Xuerong Mao and Andrew M. Stuart, Strong convergence of Euler-type methods for nonlinear stochastic differential equations, §5"
      url: "https://www.maths.ed.ac.uk/~dhigham/Publications/P44.pdf"
---

## Statement

Consider the mean-square stable scalar SDE
$$dX_t=-2X_tdt+\sqrt3X_t\,dW_t,\qquad X_0=1.$$
Its exact second moment is $\mathbb E|X_t|^2=e^{-t}$. On a grid with
$h=1/2$, explicit Euler–Maruyama has one-step mean-square amplification
$3/2>1$, even though the deterministic Euler multiplier is zero. The
drift-implicit Euler–Maruyama update has one-step mean-square factor
$5/8<1$.

## Facts & Assumptions

**Given:** AC; a one-dimensional Brownian motion; the scalar SDE and $h=1/2$ grid in the Statement.

[F1] Under globally Lipschitz coefficients and square-integrable initial state, the stated filtered SDE has a unique strong solution. [[def-ito-sde-and-strong-solution]] [[thm-global-strong-well-posedness-for-lipschitz-ito-sdes]]

[F2] Itô's formula applies to the exponential candidate and to the square of a continuous Brownian Itô process. [[thm-multidimensional-ito-formula-for-brownian-driven-processes]]

[F3] Brownian increments are independent, centered normal with variance $h$; in particular $\mathbb E e^{uW_t}=e^{u^2t/2}$. [[def-d-dimensional-brownian-motion]] [[def-standard-normal-and-normal-laws]]

[F4] Explicit Euler uses $Y_{n+1}=Y_n+hb(Y_n)+\sigma(Y_n)\Delta W_n$. [[alg-euler-maruyama-autonomous]]

[F5] Drift-implicit Euler applies the backward resolvent to $Y_n+\sigma(Y_n)\Delta W_n$ and is well-defined for the dissipative linear drift $b(x)=-2x$. [[alg-drift-implicit-euler-sde]]

[A1] AC is inherited through the Brownian, SDE, and algorithm interfaces. [[def-axiom-of-choice]]

## Proof

**Given:** The hypotheses and supplier statements above.

1.1 Define $X_t=\exp(-7t/2+\sqrt3W_t)$. Itô's formula [F2] gives $dX_t=(-7/2+3/2)X_tdt+\sqrt3X_t\,dW_t=-2X_tdt+\sqrt3X_t\,dW_t$ and $X_0=1$. The coefficients are globally Lipschitz, so [F1] identifies this with the unique strong solution. For $t>0$, completing the square in the $N(0,t)$ density gives $\mathbb E e^{uW_t}=e^{u^2t/2}$; at $t=0$ both sides are $1$. Hence $\mathbb E|X_t|^2=e^{-7t}\mathbb E e^{2\sqrt3W_t}=e^{-7t}e^{6t}=e^{-t}$. [F1, F2, F3, given, algebra]

1.2 Let $Y_n$ be explicit Euler with $h=1/2$. Since $b(x)=-2x$ and $\sigma(x)=\sqrt3x$, [F4] gives $Y_{n+1}=\sqrt3Y_n\Delta W_n$. Conditional on $\mathcal F_{t_n}$, independence and variance $h$ imply $\mathbb E(|Y_{n+1}|^2\mid\mathcal F_{t_n}) =3h|Y_n|^2=\tfrac32|Y_n|^2.$ Without the noise term, the deterministic multiplier is $1-2h=0$, so the factor greater than one here is caused by the stochastic increment. [F3, F4, given, algebra]

2.1 For drift-implicit Euler, the resolvent equation is $Y_{n+1}+2hY_{n+1}=Y_n+\sqrt3Y_n\Delta W_n$. At $h=1/2$ this gives $Y_{n+1}=\tfrac12(1+\sqrt3\Delta W_n)Y_n$. Hence $\mathbb E(|Y_{n+1}|^2\mid\mathcal F_{t_n}) =\tfrac14(1+3h)|Y_n|^2=\tfrac58|Y_n|^2.$ The factor is strictly below one, so iteration gives $\mathbb E|Y_n|^2\le(5/8)^n|Y_0|^2$. The implicit resolvent exists because $x\mapsto x+2hx$ is bijective. AC is exactly [A1]. [A1, F3, F5, given, algebra] ∎
