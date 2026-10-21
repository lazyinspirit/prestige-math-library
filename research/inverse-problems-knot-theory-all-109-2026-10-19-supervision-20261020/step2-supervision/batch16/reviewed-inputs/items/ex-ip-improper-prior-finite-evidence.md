---
id: ex-ip-improper-prior-finite-evidence
kind: example
title: An improper counting prior can have finite evidence at one datum
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - thm-ip-function-space-posterior-propriety
  - def-ip-forward-map-and-solution-classes
  - def-posterior-evidence-normalizer-and-fiberwise-update
  - prop-fiberwise-posterior-propriety-iff-finite-positive-evidence
  - def-counting-measure
  - prop-counting-measure-is-a-measure
  - def-finite-sigma-finite-and-semifinite-measures
  - thm-counting-measure-integral-is-nonnegative-series
  - def-measure-kernel-and-probability-kernel
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-standard-normal-and-normal-laws
  - lem-normal-location-scale-density
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - thm-geometric-series
  - cor-exponential-reciprocal-and-positivity
  - thm-exponential-is-strictly-increasing
  - def-real-exponential-function-and-e
  - def-bayesian-model-as-prior-and-sampling-kernel
  - def-measurable-function-between-measurable-spaces
  - def-countable
  - lem-pigeonhole
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: "AC is assumed for the normal law and its density; through AC implies countable choice, it supplies the change-of-variables hypothesis used by the density supplier. The counting prior and evidence-series comparison are choice-free."
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "M. Dashti and A. M. Stuart, The Bayesian Approach to Inverse Problems (full lecture notes, arXiv:1302.6989)"
      url: "https://arxiv.org/pdf/1302.6989"
      locator: "§3.2, Theorem 3.4 and proof for potential-weighted updates under a proper prior."
    - title: "J. Latz, On the Well-posedness of Bayesian Inverse Problems, SIAM/ASA Journal on Uncertainty Quantification 8 (2020)"
      url: "https://arxiv.org/pdf/1902.10257"
      locator: "§2.2, Theorem 2.5 and Appendix B.2; its proper-prior hypothesis is distinct from the local sigma-finite fixed-data update here."
---

## Example

Assume the Axiom of Choice. Let $X=\mathbb R$ with its usual real Banach norm, and let $\mathbb N=\{0,1,2,\ldots\}$ with its power-set sigma-algebra and counting measure $\mu$. Let $U=D=\mathbb N\subseteq X$ and take the forward map $F(n)=n$ into data space $\mathbb R$ with its usual metric and Borel sigma-algebra. The measure $\mu$ is sigma-finite and has $\mu(\mathbb N)=+\infty$. For parameter $n$, use the proper Gaussian observation law $Y\mid n\sim N(n,1)$, with Lebesgue density
$$
L_y(n)=\frac{1}{\sqrt{2\pi}}\exp\!\left(-\frac{(y-n)^2}{2}\right).
$$
At datum $y=0$ its evidence is
$$
Z(0)=\frac{1}{\sqrt{2\pi}}\sum_{n=0}^{\infty}e^{-n^2/2}\in(0,\infty),
$$
and the normalized fiberwise update is the probability
$$
\Pi^0(\{n\})=\frac{e^{-n^2/2}}{\sum_{j=0}^{\infty}e^{-j^2/2}}\quad(n\in\mathbb N).
$$
Because $\mu$ has infinite total mass, this is a fixed-data update only and does not define a prior-predictive probability.

## Example references

[[def-posterior-evidence-normalizer-and-fiberwise-update|A sigma-finite improper measure may have a fixed-data normalizer, but not a prior-predictive probability.]]

[[def-ip-forward-map-and-solution-classes|A forward map is a function on a nonempty admissible truth set between metric spaces.]]

[[prop-fiberwise-posterior-propriety-iff-finite-positive-evidence|A finite positive evidence normalizes a nonnegative likelihood section to a probability measure.]]

[[def-counting-measure|Counting measure assigns cardinality to finite sets and infinite mass to infinite sets.]]

[[thm-counting-measure-integral-is-nonnegative-series|Integration of a nonnegative function on the natural numbers against counting measure is its nonnegative series.]]

[[def-measure-kernel-and-probability-kernel|A sampling probability kernel has pointwise probability sections and measurable evaluations.]]

[[lem-normal-location-scale-density|A normal law has its location-scale density for positive variance.]]

[[thm-geometric-series|The geometric series with ratio of absolute value less than one converges.]]

[Latz, §2.2 and Appendix B.2, full paper](https://arxiv.org/pdf/1902.10257)

[Dashti and Stuart, §3.2, full lecture notes](https://arxiv.org/pdf/1302.6989)

## Facts & Assumptions

**Given:** The counting measure on $\mathbb N$, the Gaussian sampling likelihood $L_y(n)$, the fixed datum $y=0$, and AC for the repository's standard-normal definition.

[A1] AC selects from every family of nonempty sets. [[def-axiom-of-choice]]

[F1] Counting measure assigns finite sets their cardinality and infinite sets measure $+\infty$. [[def-counting-measure]]

[F2] The counting set function is a measure on the power-set sigma-algebra. [[prop-counting-measure-is-a-measure]]

[F3] Sigma-finiteness means a countable measurable cover by sets of finite measure. [[def-finite-sigma-finite-and-semifinite-measures]]

[F4] Under AC, $N(m,1)$ is the affine image of the standard normal law and has Lebesgue density $\frac1{\sqrt{2\pi}}e^{-(y-m)^2/2}$. [[def-standard-normal-and-normal-laws]], [[lem-normal-location-scale-density]]

[F5] AC implies countable choice. [[thm-choice-implies-dependent-implies-countable-choice]]

[F6] On $\mathbb N$ with counting measure, $\int f\,d\mu=\sum_{n=0}^{\infty}f(n)$ for nonnegative measurable $f$. [[thm-counting-measure-integral-is-nonnegative-series]]

[F7] For $0<r<1$, $\sum_{n=0}^{\infty}r^n$ is finite. [[thm-geometric-series]]

[F8] The exponential is positive, satisfies $e^{-x}=1/e^x$, is continuous and strictly increasing, and has $e^0=1$. [[cor-exponential-reciprocal-and-positivity]], [[thm-exponential-is-strictly-increasing]], [[def-real-exponential-function-and-e]]

[F9] For a sigma-finite measure and measurable likelihood section, evidence is the fixed-data normalizer; for an improper prior it does not define a prior-predictive probability or conditional law. [[def-posterior-evidence-normalizer-and-fiberwise-update]]

[F10] A finite positive evidence normalizes the likelihood section to a probability measure. [[prop-fiberwise-posterior-propriety-iff-finite-positive-evidence]]

[F11] A proper Bayesian model requires a probability prior; an infinite counting measure is not such a prior. [[def-bayesian-model-as-prior-and-sampling-kernel]]

[F12] The function-space propriety theorem assumes a Borel probability on a separable real Banach parameter space, so it does not apply to this infinite counting measure on $\mathbb N$. [[thm-ip-function-space-posterior-propriety]]

[F13] A probability kernel has probability sections at every parameter and measurable evaluations. [[def-measure-kernel-and-probability-kernel]]

[F14] A forward map is defined on a nonempty admissible truth set between metric parameter and data spaces. [[def-ip-forward-map-and-solution-classes]]

[F15] A function on $(\mathbb N,\mathcal P(\mathbb N))$ is measurable because every preimage is a subset of $\mathbb N$. [[def-measurable-function-between-measurable-spaces]]

[F16] $\mathbb N$ is countably infinite by its identity bijection, and no finite set is equinumerous with $\mathbb N$. [[def-countable]], [[lem-pigeonhole]]

## Verification

**Given:** The hypotheses and conventions in the Statement.

1.1 For each $m\in\mathbb N$, the initial set $E_m=\{0,1,\ldots,m\}$ has counting measure $m+1<\infty$ by [F1] and [F2], and $\bigcup_mE_m=\mathbb N$. Thus $\mu$ is sigma-finite by [F3]. By [F16], $\mathbb N$ is infinite, so [F1] gives $\mu(\mathbb N)=+\infty$. [F1, F2, F3, F16, given, construct]

1.2 The counting-integral formula [F6] gives $Z(0)=\int_{\mathbb N}\frac{e^{-n^2/2}}{\sqrt{2\pi}}\,\mu(dn)=\frac{1}{\sqrt{2\pi}}\sum_{n=0}^{\infty}e^{-n^2/2}$. Its $n=0$ term is $1/\sqrt{2\pi}>0$ by [F8]. [F4, F6, F8, F15, given, algebra]

2.1 AC implies countable choice by [F5], so the normal-density interface [F4] applies: for each $n$, $N(n,1)$ is a probability law with the displayed Gaussian density. Since the parameter sigma-algebra is $\mathcal P(\mathbb N)$, every evaluation $n\mapsto N(n,1)(B)$ is measurable, and the likelihood section $n\mapsto L_y(n)$ is measurable by [F15]; thus the sampling family satisfies [F13]. The map $F(n)=n$ on the nonempty admissible set $U=\mathbb N$ satisfies the forward-map interface [F14]. By [F11] this is not a proper Bayesian model with prior $\mu$, because [step 1.1] shows the prior mass is infinite. [A1, F4, F5, F11, F13, F14, F15, step 1.1, given]

2.2 For every $n\ge1$, $n^2\ge n$, so monotonicity of the exponential [F8] gives $e^{-n^2/2}\le e^{-n/2}$. Let $r=e^{-1/2}$. By [F8], $0<r<1$, and [F7] makes $\sum_{n=1}^{\infty}r^n$ finite. Comparison of nonnegative partial sums now bounds the evidence series in step 1.2 by $1+\sum_{n=1}^{\infty}r^n<\infty$. Hence $0<Z(0)<\infty$. [F7, F8, step 1.2, given, algebra]

3.1 Applying [F10] to $L_0$ and the sigma-finite measure $\mu$ gives the probability with singleton masses $L_0(n)/Z(0)=e^{-n^2/2}/\sum_je^{-j^2/2}$, as stated. Its fixed-data meaning and lack of a prior-predictive probability follow from [F9]; [F11] confirms that no proper Bayesian model is supplied by this prior. The function-space propriety theorem [F12] does not apply because its prior is a probability, whereas [step 1.1] gives $\mu(\mathbb N)=+\infty$. [F9, F10, F11, F12, step 1.1, step 1.2, step 2.1, step 2.2] ∎
