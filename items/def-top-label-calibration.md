---
id: def-top-label-calibration
kind: definition
title: "Top-label calibration"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-probability-calibration
  - def-probability-measure
  - def-borel-sigma-algebra
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

Let $(\Omega,\mathcal F,\mathbb P)$ be a probability space, let $K\ge2$, let
$Y:\Omega\to\{1,\ldots,K\}$ be a random variable, with the label set carrying
the full power-set sigma-algebra, and let
$G=(G_1,\ldots,G_K):\Omega\to\Delta_K$ be a measurable random forecast, where
the probability simplex is
$\Delta_K=\{p\in[0,1]^K:\sum_{j=1}^Kp_j=1\}$. Define the predicted label and
top confidence by
$$\widehat Y=\min\{j:G_j=\max_{\ell\in\{1,\ldots,K\}}G_\ell\},\qquad C=\max_{\ell\in\{1,\ldots,K\}}G_\ell.$$
The smallest-index rule resolves ties. The forecast is **top-label calibrated**
if for every Borel set $B\subseteq[0,1]$,
$$\mathbb P(Y=\widehat Y,\ C\in B)=\mathbb E[\mathbf 1_{\{C\in B\}}C].$$
Thus, among predictions whose top confidence lies in any specified set of
confidence values, the frequency of a correct top label equals the average
reported top confidence.

## Definition references

[[def-probability-calibration]]: its top-confidence condition is the same event-integral identity, with the same smallest-index tie rule.

[[def-probability-measure]]: fixes the probability law and expectation used in the event-integral identity.

[[def-borel-sigma-algebra]]: specifies the Borel sets quantified over in the definition.

[Guo et al., full paper, Section 2](https://proceedings.mlr.press/v70/guo17a/guo17a.pdf): defines confidence as the probability attached to the predicted label and motivates calibration by correctness frequency.
