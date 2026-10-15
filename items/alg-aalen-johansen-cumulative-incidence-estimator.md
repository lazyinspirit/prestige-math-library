---
id: alg-aalen-johansen-cumulative-incidence-estimator
kind: algorithm
title: "Aalen–Johansen cumulative-incidence estimator"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-competing-risk-data-cause-specific-hazards-and-cumulative-incidence
  - def-event-time-observation-schemes
  - def-independent-random-elements
  - def-identically-distributed-and-iid-random-variables
  - def-nelson-aalen-kaplan-meier-greenwood-estimators
  - def-statistic-and-estimator
justified_by:
  - lem-aalen-johansen-fixed-time-output-is-a-statistic
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Lu Tian and Richard Olshen, Competing Risk and Alternatives to Cox Model, Stanford University STAT331, slides 2–12"
      url: "https://web.stanford.edu/~lutian/coursepdf/survweek11.pdf"
    - title: "Janne Pitkäniemi and Esa Läärä, Survival analysis with competing risks, Statistical Practice in Epidemiology using R, University of Tartu, slides 13–24"
      url: "https://bendixcarstensen.com/SPE/2015/h3-allslides.pdf"
    - title: "Peter C. Austin, D. S. Lee, and Jason P. Fine, Introduction to the Analysis of Survival Data in the Presence of Competing Risks, Circulation 133(6) (2016), pp. 601–609"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4741409/"
---

## Definition

**Input:** A finite sample of $n\ge1$ right-censored records
$(U_i,\delta_i,D_i^{\mathrm{obs}})$ for $K$ causes, using
$U_i=\min(T_i,C_i)$ and $\delta_i=\mathbf 1\{T_i\le C_i\}$ from
[[def-event-time-observation-schemes]]. The observed cause label
$D_i^{\mathrm{obs}}\in\{1,\ldots,K\}$ is present only when $\delta_i=1$.
Fix a horizon $t\ge0$.

The pointwise population target is
$\psi_t:=(S(t),F_1(t),\ldots,F_K(t))\in\mathbb R^{K+1}$; the algorithm
returns its finite-sample estimate.

For each event time $u\in[0,t]$, define the risk count and cause-specific event
counts by
$$Y(u):=\sum_{i=1}^n\mathbf 1\{U_i\ge u\},\qquad \Delta N_k(u):=\sum_{i=1}^n\mathbf 1\{U_i=u,\delta_i=1,D_i^{\mathrm{obs}}=k\},\qquad \Delta N(u):=\sum_{k=1}^K\Delta N_k(u).$$
All subjects with an event at $u$ are included in $Y(u)$, so tied observed
failures are grouped before updating and $Y(u)\ge\Delta N(u)>0$ at every
event time. Censorings at $u$ do not contribute to $\Delta N(u)$; a subject
with $T_i=C_i=u$ is an event by the stated $T_i\le C_i$ convention.

**Procedure:**

1. List the distinct observed event times $u\le t$ in increasing order, with
   all causes at a common time grouped into the same counts $\Delta N_k(u)$.
2. Initialize $\widehat S(0-)=1$ and $\widehat F_k(0-)=0$ for each cause.
3. At each listed $u$, set
   $$\widehat F_k(u)=\widehat F_k(u-)+\widehat S(u-)\frac{\Delta N_k(u)}{Y(u)},\qquad \widehat S(u)=\widehat S(u-)\left(1-\frac{\Delta N(u)}{Y(u)}\right).$$
4. Keep the estimates constant between event times and return
   $(\widehat S(t),\widehat F_1(t),\ldots,\widehat F_K(t))$.

Equivalently,
$$\widehat S(t)=\prod_{0\le u\le t:\,\Delta N(u)>0}\left(1-\frac{\Delta N(u)}{Y(u)}\right),\qquad \widehat F_k(t)=\sum_{0\le u\le t:\,\Delta N(u)>0}\widehat S(u-)\frac{\Delta N_k(u)}{Y(u)}.$$
The convention at $u=0$ allows a baseline event; when there is none, these
formulas agree with the $(0,t]$ product-limit convention in
[[def-nelson-aalen-kaplan-meier-greenwood-estimators]].

This procedure is a finite-sample definition, not a consistency or variance
theorem. A common sampling setup for interpreting it as an estimator of a
population law has IID subject records ([[def-identically-distributed-and-iid-random-variables]]),
independent censoring $C\perp(T,D)$ ([[def-independent-random-elements]]), and
$\mathbb P(C\ge t)>0$, a positive censoring-support condition through $t$.
These are model assumptions, not consequences of the formula.
This item does not invoke a counting-process compensator, martingale bracket,
or process-limit result.

