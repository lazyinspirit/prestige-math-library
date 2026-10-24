---
id: lem-real-power-lebesgue-integrability
kind: lemma
title: A power above exponent minus one is Lebesgue integrable at zero
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [lem-real-power-improper-integral, def-countable-choice, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, thm-lebesgue-measure-is-a-complete-measure, thm-monotone-convergence-for-the-integral, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, prop-closure-properties-of-measurable-functions-used-by-the-integral, thm-riemann-criterion, thm-real-power-continuity-and-derivatives, thm-ftc-second-part, thm-borel-sets-are-lebesgue-measurable, thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]
proof_strategy: direct
axiom_use: Countable Choice is used only through the library construction of Lebesgue measure; monotone convergence and the power calculation use no further choice.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: J. Lebl, Basic Analysis I, §5.4.1–5.4.2, The logarithm and the exponential
      url: https://www.jirka.org/ra/html/sec_logandexp.html
      locator: §§5.4.1–5.4.2, positive-base real powers and logarithm/exponential identities.
---

## Statement

Assume the Axiom of Countable Choice. For $\gamma>-1$, define $g_\gamma(0)=0$ and $g_\gamma(x)=x^\gamma$ for $0<x\le1$. Then $g_\gamma$ is Lebesgue measurable and integrable on $[0,1]$, with
$$\int_{[0,1]}g_\gamma\,d\lambda=\frac{1}{\gamma+1}.$$

## Facts & Assumptions

**Given:** Countable Choice and a real exponent $\gamma>-1$.

[A1] [[def-countable-choice]]: every sequence of nonempty sets has a choice function; this is the assumption used by the construction of Lebesgue measure.

[F1] [[thm-lebesgue-measure-is-a-complete-measure]]: under [A1], Lebesgue measure is a measure and gives each interval its length.

[F2] [[thm-borel-sets-are-lebesgue-measurable]]: under [A1], Borel sets are Lebesgue measurable. A nonnegative measurable function multiplied by the indicator of a measurable set remains measurable, and increasing limits of measurable functions are measurable ([[prop-closure-properties-of-measurable-functions-used-by-the-integral]]).

[F3] [[lem-real-power-improper-integral]]: for every $\gamma>-1$, $\lim_{\varepsilon\downarrow0}\int_\varepsilon^1x^\gamma\,dx=1/(\gamma+1)$.

[F4] [[thm-real-power-continuity-and-derivatives]]: $x^\gamma$ is continuous on $(0,\infty)$ and has derivative $\gamma x^{\gamma-1}$ there.

[F5] [[thm-ftc-second-part]]: on a compact interval bounded away from zero, the integral of the derivative of a primitive equals its endpoint increment.

[F6] [[thm-riemann-criterion]]: a bounded function is Riemann integrable if Darboux upper and lower sums can be made arbitrarily close.

[F7] [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]: a bounded Riemann-integrable function is Lebesgue measurable and its Lebesgue integral equals its Riemann integral.

[F8] [[thm-monotone-convergence-for-the-integral]]: nonnegative measurable functions increasing pointwise to $g$ have integrals increasing to $\int g\,d\lambda$.

[F9] [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: $[1/n,1]$ is closed and bounded, hence compact, and the continuous power attains a finite maximum there.

## Proof

1.1 For each integer $n\ge2$, define $g_n(x)=x^\gamma$ on $[1/n,1]$ and $g_n(x)=0$ on $[0,1/n)$. For every real $c$, its strict superlevel is all of $[0,1]$ if $c<0$, and $[1/n,1]\cap\{x>0:x^\gamma>c\}$ if $c\ge0$. The latter is Borel because the power is continuous on $(0,\infty)$ by [F4]; hence [F2] makes $g_n$ measurable, and $g_n\ge0$. By [F9], $x^\gamma$ is bounded on $[1/n,1]$, so $g_n$ is bounded and continuous on each side of its only possible jump at $1/n$; isolating that point in an interval of arbitrarily small length and using uniform continuity on the two remaining compact pieces makes its Darboux gap arbitrarily small, so [F6] gives Riemann integrability. [given, A1, F2, F4, F6, F9, construct]

2.1 The equality of Riemann and Lebesgue integrals in [F7], followed by [F4] and [F5] on $[1/n,1]$, gives $\int g_n\,d\lambda=\int_{1/n}^1x^\gamma\,dx=(1-n^{-(\gamma+1)})/(\gamma+1)$. The sequence $g_n$ is nondecreasing and converges pointwise to $g_\gamma$. [F1, F4, F5, F7, step 1.1, algebra]

3.1 The increasing-limit clause of [F2] makes $g_\gamma$ measurable. Apply monotone convergence [F8] to the sequence $(g_{k+1})_{k\ge1}$ from step 2.1. Its integral limit is $1/(\gamma+1)$ by [F3], so $g_\gamma$ is integrable and the displayed value follows. The only choice assumption used is [A1], which supplies the underlying Lebesgue measure in [F1]. [A1, F1, F2, F3, F8, step 2.1] ∎

