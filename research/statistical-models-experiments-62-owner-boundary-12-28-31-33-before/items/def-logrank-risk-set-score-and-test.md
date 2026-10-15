---
id: def-logrank-risk-set-score-and-test
kind: definition
title: "Two-group logrank and weighted logrank scores"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-statistic-and-estimator
  - def-uniform-finite-probability-space
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Lu Tian, STAT331 Unit 6: Logrank Test, PDF pp. 1-13"
      url: "https://web.stanford.edu/~lutian/coursepdf/unit6.pdf"
    - title: "Lu Tian, STAT331 Unit 13: Large Sample Theory for 2-Sample Tests, PDF pp. 1-12"
      url: "https://web.stanford.edu/~lutian/coursepdf/stat331-twosample.pdf"
    - title: "Michal Kulich, NMST531 Censored Data Analysis: Extended Course Notes, §5.3-5.4, PDF pp. 59-62"
      url: "https://www.karlin.mff.cuni.cz/~kulich/vyuka/cens/doc/cens_notes_ext_220102.pdf"
---

## Definition

Fix a follow-up horizon $\tau>0$ and a finite set of subjects
$\mathcal I=\{1,\ldots,n\}$. A right-censored record for subject $i$ is a
pair $(U_i,\delta_i)\in[0,\tau]\times\{0,1\}$, where
$U_i=\min(T_i,C_i)$ is the observed time and
$\delta_i=1\{T_i\le C_i\}$ records an event, including an event-censoring tie;
$\delta_i=0$ records right censoring. A two-group assignment is a map
$z:\mathcal I\to\{0,1\}$. These conventions are the right-censoring
observation scheme; the score below uses the observed record and does not
infer event or censoring laws from it.

Let $t_1<\cdots<t_K$ be the distinct observed failure times in $[0,\tau]$.
For $g\in\{0,1\}$ define the risk count and event count at $t_j$ by
$$Y_{gj}(z):=\#\{i:z_i=g,\ U_i\ge t_j\},\qquad d_{gj}(z):=\#\{i:z_i=g,\ U_i=t_j,\ \delta_i=1\}.$$
Write $Y_j=Y_{0j}+Y_{1j}$, $d_j=d_{0j}+d_{1j}>0$, and
$O_j=d_{1j}$. Since $t_j$ is an observed failure time,
$1\le d_j\le Y_j$. The expected group-1 count under the conditional
hypergeometric model is
$$E_j:=d_j\frac{Y_{1j}}{Y_j}.$$
Under that model the $d_j$ failing subjects are a uniform $d_j$-subset of the
$Y_j$ subjects at risk, conditional on the risk-set and event-count margins.
The corresponding conditional variance is
$$V_j:= \begin{cases} \displaystyle\frac{Y_{1j}Y_{0j}d_j(Y_j-d_j)} {Y_j^2(Y_j-1)},&Y_j>1,\\[6pt] 0,&Y_j=1. \end{cases}$$
If the study has no observed failures, all sums below are empty and equal zero.
The conditional hypergeometric model is an explicit finite risk-set
assumption; equality of survival laws with arbitrary censoring or subject
heterogeneity does not by itself assert this conditional allocation law.
The uniform law on the finite set of $d_j$-subsets is the uniform finite
probability space of [[def-uniform-finite-probability-space]].

A **weight rule** assigns a real value $w_j$ using only the predeclared time
and information available strictly before the failures at $t_j$; deterministic
bounded time weights are a special case. If
$\sup_j|w_j|<\infty$, define the weighted logrank score and its conditional
variance estimate by
$$U_w(z;U,\delta):=\sum_{j=1}^K w_j(O_j-E_j),\qquad \widehat V_w(z;U,\delta):=\sum_{j=1}^K w_j^2V_j.$$
When $\widehat V_w>0$, set
$Z_w:=U_w/\sqrt{\widehat V_w}$. If $\widehat V_w=0$, this standardized
statistic is left undefined; the unstandardized score remains defined. The
normal calibration is only an approximation until the separate terminal
limit hypotheses are verified. It is not the finite-sample Fisher
randomization p-value.

For a fixed observed record, the displayed scores are statistics in the
measurable-map sense of [[def-statistic-and-estimator]]: each risk count is a
finite sum of Borel indicator functions, and every denominator is positive
at an observed event time. A weight rule is fixed before assignments or
outcomes are inspected and is recomputed by the same rule for any candidate
assignment.

The risk-set table concerns one predeclared event type. If simultaneous
records contain distinct event causes that are not exchangeable, form
separate cause-specific counts $O_{jc}$ and $d_{jc}$ using the same
pre-event risk set; use the displayed hypergeometric variance only for a
cause whose failures are conditionally exchangeable. This definition does
not pool different causes or add their variances without a specified
cross-cause covariance model.
