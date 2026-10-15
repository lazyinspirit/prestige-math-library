---
id: thm-cost-optimal-stratified-allocation
kind: theorem
title: Continuous cost-optimal stratified allocation
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 7
deps:
  - def-stratified-sampling-design-and-estimator
  - thm-stratified-total-unbiasedness-and-variance
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Shalabh, Sampling Theory, MTH 417 lecture notes, Chapter 4: Stratified Sampling, PDF pp. 9–11"
      url: "https://home.iitk.ac.in/~shalab/sampling/chapter4-sampling-stratified-sampling.pdf"
    - title: "Robin Arnold, STAT392 Sample Surveys, Chapter 8: Stratified Sampling, §8.8 and Example 8.8.1"
      url: "https://homepages.ecs.vuw.ac.nz/~rarnold/STAT392/SampleSurveysBook/_book/stratified-sampling"
    - title: "Tommy Wright, A Simple Method of Exact Optimal Sample Allocation under Stratification with Any Mixed Constraint Patterns, U.S. Census Bureau, §2.1"
      url: "https://www.census.gov/content/dam/Census/library/working-papers/2014/adrm/rrs2014-07.pdf"
verification:
  precheck: pass
---

## Statement

Use the notation of [[def-stratified-sampling-design-and-estimator]] and
[[thm-stratified-total-unbiasedness-and-variance]]. Let $J$ be a nonempty set
of variable noncertainty strata with $S_h>0$, and hold all other allocations
fixed. Assign each $h\in J$ a positive per-unit cost $c_h$. For a fixed
positive residual cost budget $C^\star$, the uncapped continuous relaxation
of the stratified variance expression, minimized over positive real
allocations $x_h>0$ for every $h\in J$ subject to
$\sum_{h\in J}c_hx_h=C^\star$, has the unique minimizer
$$x_h=C^\star\frac{N_hS_h/\sqrt{c_h}}{\sum_{k\in J}N_kS_k\sqrt{c_k}}\qquad(h\in J).$$
Thus $x_h\propto N_hS_h/\sqrt{c_h}$. As in the fixed-size result, this
continuous formula does not enforce integer, capacity, lower-bound, or
minimum-sample constraints.

## Facts & Assumptions

**Given:** A finite stratified SRSWOR design, a nonempty set $J$ of variable
noncertainty strata with $S_h>0$, fixed allocations outside $J$, per-unit
costs $c_h>0$, and a positive residual cost budget $C^\star$.

[F1] [[def-stratified-sampling-design-and-estimator]]: For each
noncertainty stratum, $S_h^2$ is the finite-population variance and
$S_h=\sqrt{S_h^2}$ denotes its nonnegative standard deviation. The
hypothesis $S_h>0$ is imposed only for $h\in J$.

[F2] [[thm-stratified-total-unbiasedness-and-variance]]: The variable
variance term for stratum $h$ is
$N_h^2(1-n_h/N_h)S_h^2/n_h$; contributions from fixed strata do not depend
on the variable allocation.

## Proof

1.1 Put $a_h=N_hS_h>0$. Replacing $n_h$ by $x_h$ in [F2] gives $N_h^2(1-x_h/N_h)S_h^2/x_h=a_h^2/x_h-N_hS_h^2$. The subtracted and fixed-stratum terms do not vary with $x$, so it suffices to minimize $\sum_{h\in J}a_h^2/x_h$ subject to $\sum_{h\in J}c_hx_h=C^\star$. [given, F1, F2, algebra]

2.1 Set $p_h=a_h/\sqrt{x_h}$ and $q_h=\sqrt{c_hx_h}$. Expanding and grouping unordered pairs gives $(\sum_hp_h^2)(\sum_hq_h^2)-(\sum_hp_hq_h)^2=\sum_{h<k}(p_h^2q_k^2+p_k^2q_h^2-2p_hp_kq_hq_k)=\sum_{h<k}(p_hq_k-p_kq_h)^2\ge0$. Since $\sum_hq_h^2=C^\star$ and $\sum_hp_hq_h=\sum_ha_h\sqrt{c_h}$, the objective is at least $(\sum_ha_h\sqrt{c_h})^2/C^\star$, with equality exactly when $a_h/(x_h\sqrt{c_h})$ is constant. [given, step 1.1, algebra]

3.1 The allocation $x_h^\star=C^\star(a_h/\sqrt{c_h})/(\sum_{k\in J}a_k\sqrt{c_k})$ is positive and satisfies $\sum_hc_hx_h^\star=C^\star$. It makes $a_h/(x_h^\star\sqrt{c_h})$ constant and attains step 2.1's bound; the equality condition uniquely determines it. By step 1.1 it uniquely minimizes the relaxed variance and gives the stated formula. [given, step 1.1, step 2.1, algebra] ∎
