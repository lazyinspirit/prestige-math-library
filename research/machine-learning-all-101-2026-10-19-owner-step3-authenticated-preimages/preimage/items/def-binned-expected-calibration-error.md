---
id: def-binned-expected-calibration-error
kind: definition
title: "Binned expected and maximum calibration error"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-top-label-calibration
  - def-probability-calibration
  - def-borel-sigma-algebra
  - def-proper-scoring-rule
  - thm-log-and-brier-strict-propriety
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Chuan Guo, Geoff Pleiss, Yu Sun, and Kilian Q. Weinberger, On Calibration of Modern Neural Networks, ICML 2017, Section 2"
      url: "https://proceedings.mlr.press/v70/guo17a/guo17a.pdf"
---

## Definition

Let $K\ge2$ and let $(\widehat p_i,y_i)_{i=1}^n$ be a nonempty finite
evaluation sample, where $\widehat p_i\in\Delta_K$ and
$y_i\in\{1,\ldots,K\}$. For each $i$, let
$\widehat y_i=\min\arg\max_j\widehat p_{ij}$,
$c_i=\max_j\widehat p_{ij}$, and
$a_i=\mathbf 1_{\{\widehat y_i=y_i\}}$. Fix before evaluating the sample a
finite Borel partition $(B_1,\ldots,B_M)$ of $[0,1]$. For
$I_b=\{i:c_i\in B_b\}$ and $n_b=|I_b|>0$, define
$$\operatorname{acc}(B_b)=\frac1{n_b}\sum_{i\in I_b}a_i,\qquad \operatorname{conf}(B_b)=\frac1{n_b}\sum_{i\in I_b}c_i.$$
The **binned expected calibration error** and **binned maximum calibration
error** for this sample and partition are
$$\operatorname{ECE}_{(B_b)}=\sum_{b:n_b>0}\frac{n_b}{n}\left|\operatorname{acc}(B_b)-\operatorname{conf}(B_b)\right|,\qquad \operatorname{MCE}_{(B_b)}=\max_{b:n_b>0}\left|\operatorname{acc}(B_b)-\operatorname{conf}(B_b)\right|.$$
These are finite-sample, bin-dependent summaries, not the population expected
calibration error. They compare observed top-label accuracy with average
confidence within bins; log loss and Brier loss instead score probability
forecasts directly and are strictly proper.

## Definition references

[[def-top-label-calibration]]: fixes the top-confidence and smallest-index tie conventions used for each sample prediction.

[[def-borel-sigma-algebra]]: specifies the measurable sets used in the fixed partition of $[0,1]$.

[[def-probability-calibration]]: defines a population expected calibration error using a supplied calibration function and discrepancy, distinct from the empirical binned statistic here.

[[def-proper-scoring-rule]]: defines proper scoring rules and the finite-label log and Brier losses.

[[thm-log-and-brier-strict-propriety]]: proves strict propriety of the log and Brier losses.

[Guo et al., full paper, Section 2](https://proceedings.mlr.press/v70/guo17a/guo17a.pdf): defines binned ECE and MCE from within-bin accuracy and confidence.
