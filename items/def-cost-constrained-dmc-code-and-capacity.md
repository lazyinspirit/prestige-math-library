---
id: def-cost-constrained-dmc-code-and-capacity
kind: definition
title: Average-cost fixed-length codes and operational DMC capacity
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps: [def-finite-dmc-cost-model, def-fixed-length-channel-code, def-fixed-length-channel-code-errors, def-discrete-memoryless-channel-information-capacity, def-natural-logarithm]
justified_by: []
aliases: []
axiom_use: No choice axiom is used; all code alphabets and probability vectors are finite.
verification:
  precheck: n/a
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 20 §20.1"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
    - title: "Yury Polyanskiy, MIT 6.441 Information Theory, Chapter 17 §§17.1–17.2"
      url: https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/24fb44b6a101e847c32ffe38bbeeea6e_MIT6_441S16_chapter_17.pdf
---

## Definition

Fix a finite DMC and cost model from [[def-finite-dmc-cost-model]], with feasible budget $\Gamma$. A length-$n$, $M$-message code from [[def-fixed-length-channel-code]] is **average-cost feasible** if
$$\frac1{nM}\sum_{m=1}^M\sum_{t=1}^n c(x_t(m))\le\Gamma.$$
A rate $R\ge0$ is **average-error achievable under budget $\Gamma$** if there is a sequence of such codes, for all sufficiently large $n$, whose average errors from [[def-fixed-length-channel-code-errors]] tend to zero and satisfy $\liminf_{n\to\infty}n^{-1}\ln M_n\ge R$. The **operational cost-constrained capacity** $C(\Gamma)$ is the supremum of these rates.

For an input probability vector $P_X$, define its expected cost $\bar c(P_X)$ as in [[def-finite-dmc-cost-model]]. The **cost-constrained information capacity** is
$$C_I(\Gamma):=\sup_{P_X:\,\bar c(P_X)\le\Gamma} I(P_X;W),$$
where $I(P_X;W)$ and the unconstrained DMC information capacity use natural-log nats as in [[def-discrete-memoryless-channel-information-capacity]] and [[def-natural-logarithm]]. All rates use natural-log nats ([[def-natural-logarithm]]). This definition uses a supremum; attainment is proved separately.
