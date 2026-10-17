---
id: ex-minimum-intensity-coupling-reduces-one-step-variance
kind: example
title: "A minimum-intensity coupling reduces a Poisson count correction"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-scalar-poisson-count-law
  - lem-poisson-count-law-normalization-and-moments
  - lem-shared-minimum-poisson-count-coupling
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
sources:
  references:
    - title: "David F. Anderson and Desmond J. Higham, Multilevel Monte Carlo for continuous time Markov chains, with applications in biochemical kinetics"
      url: "https://strathprints.strath.ac.uk/36279/1/8509181.pdf"
      locator: "§6, construction coupling Poisson processes with rates 13.1 and 13, PDF pp. 11–12."
---

## Example

For one channel with jump $\nu=1$, compare a fine-step propensity $13.1$ and
a coarse-step propensity $13$ over a half interval of length $h>0$. Couple
the counts by a shared $\operatorname{Pois}(13h)$ variable and an independent
fine-only residual $\operatorname{Pois}(0.1h)$ variable.

## Facts & Assumptions

**Given:** Two Poisson marginal counts with parameters $13.1h$ and $13h$,
coupled by [[lem-shared-minimum-poisson-count-coupling]].

[F1] [[def-scalar-poisson-count-law]]: a Poisson count of parameter
$\theta\ge0$ has mass $e^{-\theta}\theta^k/k!$.

[F2] [[lem-poisson-count-law-normalization-and-moments]]: its mean and
variance are both $\theta$.

[F3] [[lem-shared-minimum-poisson-count-coupling]]: shared Poisson counts
plus independent rate-difference residuals have the required Poisson
marginals and correction variance.

## Verification

**Given:** The rates and step length in the Example.

1.1 By [F3], the fine count is $P_c+P_f$ and the coarse count is $P_c$, where the three count components have the independent laws in the Example. Their marginals have parameters $13.1h$ and $13h$ because independent Poisson counts add; this also follows by convolving the masses in [F1]. [F1, F3, algebra]

2.1 The coupled difference is exactly $P_f$, so its variance is $0.1h$ by [F2]. If the two counts were independent, their difference would have variance $13.1h+13h=26.1h$. Thus the shared minimum reduces the correction variance by a factor of $261$ in this one-step example. [F2, step 1.1, algebra] ∎

## Notes

This is a one-step count coupling example. It does not identify the
fixed-step construction with T16's continuous-time reaction-path coupling.
