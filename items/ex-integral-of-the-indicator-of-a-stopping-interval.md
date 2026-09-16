---
id: ex-integral-of-the-indicator-of-a-stopping-interval
kind: example
title: "Indicator of a stopping interval"
status: draft
origin: pipeline
deps: [thm-stopping-an-ito-integral, def-ito-integral-of-an-elementary-predictable-process, def-elementary-predictable-brownian-integrand, def-locally-square-integrable-predictable-brownian-integrand, def-continuous-time-stopping-time, def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice]
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Section 3.2.3"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Example

Assume the Axiom of Choice and the standing hypothesis (H) of
[[def-elementary-predictable-brownian-integrand]]. For every stopping time
$\tau$ [[def-continuous-time-stopping-time]] and every $t\ge0$,
$$\int_0^t1_{[0,\tau]}(s)\,dB_s=B_{t\wedge\tau}-B_0\qquad\text{almost surely},$$
and the two sides are continuous processes over $t$, hence indistinguishable.
In particular for the deterministic stopping time $\tau\equiv t_0$ the integral
is $B_{t\wedge t_0}-B_0$, the Brownian path stopped at $t_0$.

## Facts & Assumptions

**Given:** AC, the standing hypothesis (H), a stopping time $\tau$ and $t\ge0$.

[F1] The constant process $1$ is elementary: with the partition $0<T$ and coefficient $1\in\mathcal F_0$, its integral is $I_t(1)=B_t-B_0$. [[def-elementary-predictable-brownian-integrand]] [[def-ito-integral-of-an-elementary-predictable-process]]

[F2] The process $H\equiv1$ is predictable and locally square-integrable, with energy $\int_0^t1^2ds=t<\infty$; for such an $H$ and any stopping time $\tau$ the stopping identity $(H\cdot B)_{t\wedge\tau}=\int_0^t1_{[0,\tau]}H\,dB$ holds up to indistinguishability, and both sides are continuous. [[def-locally-square-integrable-predictable-brownian-integrand]] [[thm-stopping-an-ito-integral]]

[F3] AC is declared for the ambient interfaces. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

## Verification

**Proof technique:** direct.

1.1 The process $H\equiv1$ is elementary, so its integral is the elementary sum $I_t(1)=B_t-B_0$, and the stopped quantity is $(1\cdot B)_{t\wedge\tau}=B_{t\wedge\tau}-B_0$. [F1, given]

2.1 By [F2] the stopping identity applies with $H\equiv1$: $(1\cdot B)_{t\wedge\tau}=\int_0^t1_{[0,\tau]}(s)\,dB_s$ up to indistinguishability, and substituting step 1.1 for the left-hand side gives the displayed identity; both sides are continuous in $t$ because $B$ is and $t\mapsto t\wedge\tau$ is. [F2, step 1.1]

3.1 The cases $\tau\equiv\infty$ (integral equals $B_t-B_0$), $\tau\equiv t_0$ (integral equals $B_{t\wedge t_0}-B_0$) and $\tau\equiv0$ (integral vanishes) are all instances; the identity is a statement about the localized integral of a bounded integrand, so no integrability of $\tau$ is required. AC enters only through [F3]. [F1, F3, step 2.1, given] ∎

## Source notes

Lawler, Section 3.2.3, records the stopped-integral identity for the constant integrand; the version here is the constant-$H$ case of the general stopping theorem of item 17.
