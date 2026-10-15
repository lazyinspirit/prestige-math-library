---
id: def-parametric-survival-and-reliability
kind: definition
title: Parametric survival and reliability models
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-cumulative-distribution-function-of-a-random-variable
  - def-event-time-observation-schemes
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-measure-with-density
  - def-parametric-statistical-model
justified_by:
  - thm-exponential-and-weibull-survival-laws
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "NIST/SEMATECH Engineering Statistics Handbook, Chapter 8, §§8.1.2.1–8.1.2.3, PDF pp. 12–17"
      url: "https://www.itl.nist.gov/div898/handbook/toolaids/pff/apr.pdf"
    - title: "Lu Tian, STAT331 Unit 2: Likelihood Construction, Inference for Parametric Survival Distributions, §§2.1–2.2, PDF pp. 1–7"
      url: "https://web.stanford.edu/~lutian/coursepdf/unit2.pdf"
    - title: "Qiqing Yu, Survival Analysis (Lecture Notes), §§2.1–2.2, PDF pp. 10–11"
      url: "https://people.math.binghamton.edu/qyu/ftp/surv5.pdf"
---

## Definition

Let $T$ be a nonnegative event time as in [[def-event-time-observation-schemes]],
with law $P_T$. Its cumulative distribution function is
$F_T(t)=P(T\le t)$ ([[def-cumulative-distribution-function-of-a-random-variable]]).
The **survival function** is
$$S_T(t):=P(T>t)=1-F_T(t),\qquad t\ge0.$$
Write $S_T(t^-):=P(T\ge t)$ for the pre-event survival. In particular,
$S_T(0)=1$ exactly when $P(T=0)=0$.

For a **nonrepairable** unit, meaning that a failed unit is permanently removed
from the population, its **reliability function** is
$R_T(t):=P(T>t)=S_T(t)$. This is a single first-failure lifetime model. A
repairable system can fail repeatedly; its cumulative failure count and rate of
occurrence of failures are not summarized by this one-lifetime survival
function.

When the law of $T$ has a specified density $f$ relative to Lebesgue measure,
meaning $P_T(A)=\int_A f(u)\,du$ for each Borel set $A$, and $S_T(t)>0$, its
**density hazard** is the chosen-version function
$$\lambda_T(t):=\frac{f(t)}{S_T(t)}.$$
Values can change on a Lebesgue-null set when the density representative
changes. Where this hazard is integrable, the **cumulative hazard** is
$$\Lambda_T(t):=\int_0^t\lambda_T(u)\,du.$$
For a law that may have an atom at $t$, its **jump hazard** is
$$q_T(t):=\frac{P(T=t)}{P(T\ge t)}$$
when $P(T\ge t)>0$. The jump hazard is a conditional event probability, rather
than a density per unit time.

For parameters $\lambda>0$, the **exponential survival specification** is
$S_T(t)=e^{-\lambda t}$ for $t\ge0$; the family of laws is denoted
$T\sim\mathrm{Exp}(\lambda)$. For shape $k>0$ and scale $\eta>0$, the
**Weibull survival specification** is
$S_T(t)=e^{-(t/\eta)^k}$ for $t\ge0$. These are parameter-indexed families of
sampling laws in the sense of [[def-parametric-statistical-model]]; their
existence and densities are established in
[[thm-exponential-and-weibull-survival-laws]].

The density-hazard identity for absolutely continuous event-time laws and the
jump relation for atoms are separate results. An empirical pattern such as a
decreasing-then-increasing “bathtub” hazard is not a consequence of these
definitions or of either parametric family.
