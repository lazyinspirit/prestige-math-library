---
id: thm-neyman-allocation-minimizes-stratified-variance
kind: theorem
title: Continuous fixed-size Neyman allocation minimizes stratified variance
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
    - title: "Shalabh, Sampling Theory, MTH 417 lecture notes, Chapter 4: Stratified Sampling, PDF pp. 8–9 and 12–14"
      url: "https://home.iitk.ac.in/~shalab/sampling/chapter4-sampling-stratified-sampling.pdf"
    - title: "Robin Arnold, STAT392 Sample Surveys, Chapter 8: Stratified Sampling, §8.8"
      url: "https://homepages.ecs.vuw.ac.nz/~rarnold/STAT392/SampleSurveysBook/_book/stratified-sampling"
    - title: "Tommy Wright, A Simple Method of Exact Optimal Sample Allocation under Stratification with Any Mixed Constraint Patterns, U.S. Census Bureau, §2.1"
      url: "https://www.census.gov/content/dam/Census/library/working-papers/2014/adrm/rrs2014-07.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Statement

Use the notation of [[def-stratified-sampling-design-and-estimator]] and
[[thm-stratified-total-unbiasedness-and-variance]]. Let $J$ be a nonempty set
of noncertainty strata whose allocations vary, and suppose $S_h>0$ for each
$h\in J$, where $S_h:=\sqrt{S_h^2}$ is the positive population standard
deviation. Hold all other stratum allocations fixed. For real $x_h>0$ with
$\sum_{h\in J}x_h=n^\star>0$, consider the uncapped continuous relaxation
of the variance expression
$$V_0+\sum_{h\in J}N_h^2\left(1-\frac{x_h}{N_h}\right)\frac{S_h^2}{x_h},$$
where $V_0$ collects the fixed strata's variance terms. Its unique minimum
over this positive simplex is attained at
$$x_h=n^\star\frac{N_hS_h}{\sum_{k\in J}N_kS_k}\qquad(h\in J).$$
This is the continuous Neyman allocation. The relaxation imposes no integer,
capacity, lower-bound, or minimum-sample constraints; if the displayed
allocation violates a design constraint, it is not itself an admissible
stratified SRSWOR design.

## Facts & Assumptions

**Given:** A stratified SRSWOR finite-population design; a nonempty set $J$
of variable noncertainty strata with $S_h>0$; fixed allocations outside $J$;
and a positive real budget $n^\star$ for $J$.

[F1] [[def-stratified-sampling-design-and-estimator]]: For a
noncertainty stratum, $N_h>1$ and
$S_h^2=(N_h-1)^{-1}\sum_{i\in U_h}(y_i-\bar y_h)^2$.

[F2] [[thm-stratified-total-unbiasedness-and-variance]]: A noncertainty
stratum's variance contribution is
$N_h^2(1-n_h/N_h)S_h^2/n_h$; certainty and fixed strata contribute terms
that do not vary with $x_h$.

## Proof

1.1 Put $a_h=N_hS_h>0$. For $h\in J$, [F2]'s variable term with $n_h=x_h$ is $N_h^2(1-x_h/N_h)S_h^2/x_h=a_h^2/x_h-N_hS_h^2$. The subtracted term is constant, so the relaxed objective is minimized by minimizing $\sum_{h\in J}a_h^2/x_h$ subject to $\sum_{h\in J}x_h=n^\star$. [given, F1, F2, algebra]

2.1 Set $p_h=a_h/\sqrt{x_h}$ and $q_h=\sqrt{x_h}$. Expanding and grouping unordered pairs gives $(\sum_hp_h^2)(\sum_hq_h^2)-(\sum_hp_hq_h)^2=\sum_{h<k}(p_h^2q_k^2+p_k^2q_h^2-2p_hp_kq_hq_k)=\sum_{h<k}(p_hq_k-p_kq_h)^2\ge0$. Since $\sum_hq_h^2=n^\star$ and $\sum_hp_hq_h=\sum_ha_h$, we get $\sum_ha_h^2/x_h\ge(\sum_ha_h)^2/n^\star$, with equality exactly when $a_h/x_h$ is constant over $J$. [given, step 1.1, algebra]

3.1 Define $x_h^\star=n^\star a_h/(\sum_{k\in J}a_k)$. Positivity gives $x_h^\star>0$, and summing gives $\sum_hx_h^\star=n^\star$. This allocation satisfies step 2.1's equality condition and attains its lower bound; the equality condition uniquely fixes this normalization. By step 1.1 it uniquely minimizes the relaxed variance. [given, step 1.1, step 2.1, algebra] ∎