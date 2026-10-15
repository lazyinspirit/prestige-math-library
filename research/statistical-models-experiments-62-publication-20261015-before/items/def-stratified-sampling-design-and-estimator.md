---
id: def-stratified-sampling-design-and-estimator
kind: definition
title: Stratified sampling designs and the stratified total estimator
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-finite-population-and-sampling-design
  - def-simple-random-sampling-without-replacement
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Shalabh, Sampling Theory, MTH 417 lecture notes, Chapter 4: Stratified Sampling, Indian Institute of Technology Kanpur, complete 26-page chapter"
      url: "https://home.iitk.ac.in/~shalab/sampling/chapter4-sampling-stratified-sampling.pdf"
    - title: "Robin Arnold, STAT392 Sample Surveys, Chapter 8: Stratified Sampling, Victoria University of Wellington"
      url: "https://homepages.ecs.vuw.ac.nz/~rarnold/STAT392/SampleSurveysBook/_book/stratified-sampling"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Definition

Let $(U,y)$ be a finite population as in
[[def-finite-population-and-sampling-design]], and let
$U_1,\ldots,U_H$ be a finite partition of $U$ into nonempty strata. Write
$N_h=|U_h|$ and $N=\sum_{h=1}^H N_h$. Choose integers
$1\le n_h\le N_h$. In stratum $h$, draw $R_h$ by SRSWOR of size $n_h$ as in
[[def-simple-random-sampling-without-replacement]], independently across
strata. Thus the joint probability of a tuple $(r_1,\ldots,r_H)$ is
$$\prod_{h=1}^H\binom{N_h}{n_h}^{-1},$$
and its sample in $U$ is $R=\bigcup_{h=1}^H r_h$. This is the
**stratified SRSWOR design**. The union map is one-to-one because the strata
are disjoint; the support has $\prod_h\binom{N_h}{n_h}$ elements, so the
displayed mass function sums to one.

The fixed mean in stratum $h$ is
$$\bar y_h=\frac1{N_h}\sum_{i\in U_h}y_i.$$
For a noncertainty stratum ($n_h<N_h$), necessarily $N_h>1$, and its finite-
population variance is
$$S_h^2=\frac1{N_h-1}\sum_{i\in U_h}(y_i-\bar y_h)^2.$$
For every noncertainty stratum write $S_h=\sqrt{S_h^2}$ for its nonnegative
population standard deviation. For a realized sample, set
$$\bar y_{h,R}=\frac1{n_h}\sum_{i\in R_h}y_i,\qquad \widehat T_{st}=\sum_{h=1}^H N_h\bar y_{h,R}.$$
The quantity $\widehat T_{st}$ is the **stratified total estimator**. When
$n_h=N_h$, the stratum is a certainty stratum and its contribution is the
fixed total $N_h\bar y_h$; no $S_h^2$ is needed for that term. The population
values $y_i$ remain fixed: only the sample selections are random.
