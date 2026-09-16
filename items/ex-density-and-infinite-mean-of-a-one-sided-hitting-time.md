---
id: ex-density-and-infinite-mean-of-a-one-sided-hitting-time
kind: example
title: "A Brownian hitting time has infinite mean"
status: draft
origin: pipeline
deps: [cor-distribution-of-a-one-sided-brownian-hitting-time, cor-one-dimensional-brownian-motion-hits-every-point-almost-surely, def-brownian-motion, def-expectation-of-a-nonnegative-or-integrable-random-variable, thm-integration-against-a-density, thm-monotone-convergence-for-the-integral, def-standard-normal-and-normal-laws, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Section 2.7"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, equation (7.4.6)"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Example

Assume the Axiom of Choice, let $B$ be a standard Brownian motion
[[def-brownian-motion]], let $a>0$ and $\tau_a=\inf\{t\ge0:B_t=a\}$. Then
$\tau_a<\infty$ almost surely, while
$$\mathbb E[\tau_a]=\int_0^\infty t\,g(t)\,dt=+\infty,\qquad g(t)=\frac{a}{(2\pi t^3)^{1/2}}e^{-a^2/(2t)} .$$
Thus almost-sure finiteness does not imply integrability for this random time.

## Facts & Assumptions

**Given:** AC, a standard Brownian motion $B$ and $a>0$.

[F1] $\tau_a<\infty$ almost surely, and on $t>0$ the law of $\tau_a$ has the displayed density $g$. [[cor-one-dimensional-brownian-motion-hits-every-point-almost-surely]] [[cor-distribution-of-a-one-sided-brownian-hitting-time]]

[F2] For a nonnegative random variable with a density, the expectation is the integral of $t$ against that density; integration against a density is integration of the product with the density. [[def-expectation-of-a-nonnegative-or-integrable-random-variable]] [[thm-integration-against-a-density]]

[F3] Monotone convergence for nonnegative integrands, and the divergence $\int_{a^2}^{\infty}t^{-1/2}dt=+\infty$. [[thm-monotone-convergence-for-the-integral]] [[def-standard-normal-and-normal-laws]]

[F4] AC is the ambient assumption of the Brownian construction. [[def-axiom-of-choice]]

## Verification

**Proof technique:** direct.

1.1 Since $\tau_a\ge0$ and its law has density $g$ by [F1], [F2] gives $\mathbb E[\tau_a]=\int_0^\infty t\,g(t)\,dt=a(2\pi)^{-1/2}\int_0^\infty t^{-1/2}e^{-a^2/(2t)}\,dt$, the last integrand being nonnegative. [F1, F2, given]

2.1 For $t\ge a^2$ the exponent satisfies $a^2/(2t)\le1/2$, so $e^{-a^2/(2t)}\ge e^{-1/2}$; hence the integrand in step 1.1 is bounded below on $[a^2,\infty)$ by $a(2\pi)^{-1/2}e^{-1/2}\,t^{-1/2}$. [algebra]

3.1 By [F3], $\int_{a^2}^{\infty}t^{-1/2}dt=\lim_{L\to\infty}2(\sqrt L-a)=+\infty$, and monotone convergence applied to the lower bound of step 2.1 gives $\int_0^\infty t^{-1/2}e^{-a^2/(2t)}dt\ge e^{-1/2}\int_{a^2}^\infty t^{-1/2}dt=+\infty$; hence $\mathbb E[\tau_a]=+\infty$. [F3, step 1.1, step 2.1]

4.1 The comparison with finite almost-sure values is the point of the example: [F1] gives $\tau_a<\infty$ almost surely, so the random variable is finite-valued almost surely while its expectation is infinite; the divergence comes from the polynomial tail $t^{-1/2}$ of the first-moment integrand and not from any exceptional path. The cases $a=0$ (where $\tau_0=0$) and $a<0$ are excluded by the hypothesis $a>0$. AC is used only through [F4]. [F1, F4, given, step 3.1] ∎

## Source notes

Lawler, Section 2.7, evaluates the first-passage density and records the divergent first moment; Durrett, equation (7.4.6), gives the same density. The example avoids any integration-by-parts argument and bounds the first-moment integrand directly.
