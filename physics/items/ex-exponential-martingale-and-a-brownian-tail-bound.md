---
id: ex-exponential-martingale-and-a-brownian-tail-bound
kind: example
title: "Exponential martingale Brownian tail bound"
status: published
origin: pipeline
deps: [cor-exponential-brownian-martingale, def-brownian-motion, def-elementary-predictable-brownian-integrand, def-continuous-time-filtration-and-all-pairs-martingale, thm-optional-sampling-for-bounded-stopping-times, lem-brownian-motion-has-a-jointly-measurable-continuous-version, thm-continuity-from-below-for-measures, def-axiom-of-choice]
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Sections 3.3 and 3.5"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
verification:
  audited: 2026-09-22
---

## Example

Assume AC and hypothesis (H) of
[[def-elementary-predictable-brownian-integrand]]. Let $B$ be standard
Brownian motion. Fix a measurable probability-one event of continuous paths
and zero start, and replace the whole path by zero outside it, obtaining
$\widehat B$. The supremum below means the supremum of this continuous
representative; its distribution is independent of that normalization.
For $a>0$ and $T>0$,
$$P\left(\sup_{0\le t\le T}\widehat B_t\ge a\right) \le \exp\left(-\frac{a^2}{2T}\right).$$

## Facts & Assumptions

**Given:** AC, (H), $B$, its normalized representative $\widehat B$, and $a,T>0$ as in the Example.

[F1] The positive process $Z_t=\exp(\theta B_t-\theta^2t/2)$ is a unit-mean martingale for each real $\theta$. Only the direct Gaussian conditioning argument in the cited corollary (steps 1.2 and 2.1), not its stochastic integral representation, is used: the normal exponential moment gives $EZ_t=1$ and the independent increment multiplier has conditional mean one. [[cor-exponential-brownian-martingale]] [[def-elementary-predictable-brownian-integrand]] [[def-continuous-time-filtration-and-all-pairs-martingale]]

[F2] A martingale sampled on a deterministic finite grid is a discrete martingale, and its expectation at a bounded discrete stopping index is unchanged. [[thm-optional-sampling-for-bounded-stopping-times]]

[F3] The normalized Brownian process has measurable time coordinates, continuous paths and zero initial value everywhere, and agrees with the original process on one measurable full event. No claim of adaptation of the normalized process to the original filtration is needed. [[def-brownian-motion]] [[lem-brownian-motion-has-a-jointly-measurable-continuous-version]]

[F4] For increasing measurable events, the measure of their union is the supremum of their measures. [[thm-continuity-from-below-for-measures]]

[F5] Full AC is assumed for the Brownian and conditional-expectation interfaces and the discrete optional-sampling theorem. [[def-axiom-of-choice]]

## Verification

**Proof technique:** direct.

1.1 Fix $0<b<a$, $\theta>0$ and an integer $n\ge1$. Set $m=2^n$, $t_j=jT/m$, and use the original adapted process on this grid. Define $J$ as the first index $j\in\{0,\ldots,m\}$ with $B_{t_j}>b$, or $m$ if there is no such index. For $j<m$, the event $\{J\le j\}$ is the finite union $\bigcup_{k\le j}\{B_{t_k}>b\}$ and is in $\mathcal F_{t_j}$; the event for $j=m$ is the whole space. Thus $J$ is a bounded discrete stopping index for the grid filtration. By [F1] and [F2], $EZ_{t_J}=1$. This variable is measurable and integrable, being a finite sum of integrable grid values times indicators. [F1, F2, given]

2.1 Let $E_n=\{\max_{0\le j\le m}B_{t_j}>b\}$. On $E_n$ the selected value satisfies $B_{t_J}>b$ and $t_J\le T$, whence $Z_{t_J}\ge\exp(\theta b-\theta^2T/2)$. Positivity therefore gives $$P(E_n)\le\exp(\theta^2T/2-\theta b).$$ No continuous-time hitting time or finiteness of an unbounded hitting time has entered. [F1, step 1.1]

3.1 Write $M_T=\sup_{t\le T}\widehat B_t$. This is the supremum over the countable union of the nested dyadic grids: for any $t$ in the interval there are grid times tending to it, and continuity gives convergence of the path values. The supremum is finite, since a continuous function on a compact interval is bounded. Measurability also follows from the countable supremum. The normalized grid events $\widehat E_n=\{\max_j\widehat B_{t_j}>b\}$ increase to $\{M_T>b\}$ and have the same probabilities as $E_n$, since the original and normalized paths agree on the common full event. Consequently [F4] and step 2.1 give $P(M_T>b)\le\exp(\theta^2T/2-\theta b)$. Normalizing on another full event gives the same $M_T$ on their full intersection, so its distribution is independent of the choice. [F3, F4, step 2.1]

4.1 Choose $\theta=b/T$ in step 3.1, the positive minimizer of the quadratic, to get $P(M_T>b)\le e^{-b^2/(2T)}$. Since $\{M_T\ge a\}\subseteq\{M_T>b\}$ for every $0<b<a$, take the explicit sequence $b_k=a(1-1/k)$, $k\ge2$, and let $k$ tend to infinity in the numerical upper bounds. Continuity of the exponential gives $P(M_T\ge a)\le e^{-a^2/(2T)}$. This last argument does not assume that a dyadic grid attains the continuous maximum or that $M_T$ has no atoms. [step 3.1]

5.1 The parameter range is $a,T>0$. At $a=0$ the probability is one and the limiting bound is one; for $a<0$ the probability is also one, but the displayed formula would be less than one and is not asserted. At $T=0$ and $a>0$ the probability is zero and division by $T$ is not used. With $T$ fixed, the bound tends to zero as $a\to\infty$; with $a>0$ fixed, it tends to one as $T\to\infty$ and to zero as $T\downarrow0$. The real exponential martingale has random magnitude; its integrability follows from its Gaussian unit mean, not a deterministic modulus. Only finite-grid optional sampling is used, so no uniform-integrability assertion for an unbounded stopped family is needed. AC has exactly the interface uses in [F5]. [F1, F3, F5, step 1.1, step 4.1] ∎

## Source notes

The exponential-martingale method is the one indicated by the cited Lawler
reference. This proof uses the corollary's direct Gaussian conditioning
calculation, finite-grid optional sampling, and a countable dense-grid limit.
