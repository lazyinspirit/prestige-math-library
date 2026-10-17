---
id: alg-two-evaluation-spsa-gradient-estimator
kind: algorithm
title: "Two-evaluation simultaneous-perturbation gradient estimator"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-simulation-gradient-objective-and-payoff-oracle
provenance:
  statement: ai-altered
  proof: not-applicable
justified_by: []
verification:
  precheck: n/a
sources:
  references:
    - title: "J. C. Spall, An Overview of the Simultaneous Perturbation Method for Efficient Optimization, §§SPSA algorithm and perturbation conditions"
      url: "https://www.jhuapl.edu/spsa/PDF-SPSA/Spall_An_Overview.PDF"
    - title: "Michael C. Fu, Stochastic Gradient Estimation, preprint of Handbook of Simulation Optimization, §3.2"
      url: "https://drum.lib.umd.edu/bitstreams/87a3c71b-9eca-4d5d-9287-e1e432f68a69/download"
---

## Definition

Input a dimension $d\ge1$, $\theta\in\Theta\subseteq\mathbb R^d$, a scalar $c>0$, a payoff oracle from [[def-simulation-gradient-objective-and-payoff-oracle]], and a random vector $\Delta=(\Delta_1,\ldots,\Delta_d)$ whose coordinates are independent, symmetric about zero, and nonzero almost surely. Require $\theta+c\Delta,\theta-c\Delta\in\Theta$ almost surely. In the chosen joint probability space for the perturbation and oracle calls, require the two random-parameter outputs $Y^+$ and $Y^-$ in step 2 to be measurable real random variables on the valid-draw event, with measurable zero extensions to its complement. This is a separate admissibility condition on the chosen coupling; fixed-parameter unbiasedness alone does not imply it.

1. Draw one $\Delta$. If any $\Delta_i=0$ or either $\theta+c\Delta$ or $\theta-c\Delta$ is outside $\Theta$, return the zero vector in $\mathbb R^d$ without calling the oracle.

2. Call the oracle once at $\theta+c\Delta$ and once at $\theta-c\Delta$, obtaining $Y^+$ and $Y^-$.

3. Return
   $\widehat G_i(\theta):=\frac{Y^+-Y^-}{2c\Delta_i},\qquad i=1,\ldots,d.$

The same numerator supplies all $d$ coordinates. The zero-output branch has probability zero under the input assumptions, so one estimator uses exactly two oracle calls almost surely, independently of $d$. The definition does not assert unbiasedness, finite variance, or convergence of an update rule.
