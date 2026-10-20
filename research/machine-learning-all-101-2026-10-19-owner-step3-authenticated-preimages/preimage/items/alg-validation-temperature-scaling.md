---
id: alg-validation-temperature-scaling
kind: algorithm
title: "Validation temperature scaling"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-proper-scoring-rule
  - thm-log-and-brier-strict-propriety
  - def-natural-logarithm
  - def-real-exponential-function-and-e
  - def-measurable-function-between-measurable-spaces
justified_by:
  - thm-positive-temperature-scaling-preserves-argmax
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Chuan Guo, Geoff Pleiss, Yu Sun, and Kilian Q. Weinberger, On Calibration of Modern Neural Networks, ICML 2017, Section 4.2"
      url: "https://proceedings.mlr.press/v70/guo17a/guo17a.pdf"
---

## Definition

Fix $K\ge2$. The input is a trained classifier with a measurable, finite-valued
logit map $z:\mathcal X\to\mathbb R^K$, a nonempty finite validation sample
$(x_i,y_i)_{i=1}^{n_v}$ with $n_v\ge1$ and $y_i\in\{1,\ldots,K\}$, and a
finite nonempty set of candidate temperatures $\mathcal T\subset(0,\infty)$.
The validation labels were not used to fit the logits. For $T\in\mathcal T$,
compute
$$p_T(j\mid x)=\frac{\exp(z_j(x)/T)}{\sum_{\ell=1}^K\exp(z_\ell(x)/T)}\quad (j=1,\ldots,K),\qquad L_{\mathrm{val}}(T)=-\frac1{n_v}\sum_{i=1}^{n_v}\log p_T(y_i\mid x_i).$$
Choose the smallest temperature among the minimizers,
$$T^*=\min\arg\min_{T\in\mathcal T}L_{\mathrm{val}}(T).$$
and return the forecasts $p_{T^*}(\cdot\mid x)$ and predicted label
$\min\arg\max_j p_{T^*}(j\mid x)$ for each input $x$. This is a
finite-candidate version of validation negative-log-likelihood temperature
scaling. It selects only by empirical validation loss; it makes no finite-sample
calibration guarantee for future data, particularly when the validation and
future data laws differ.

## Definition references

[[def-proper-scoring-rule]]: defines the finite-label logarithmic loss used by the validation objective.

[[thm-log-and-brier-strict-propriety]]: establishes that log loss is strictly proper; this does not itself give a finite-sample calibration guarantee.

[[def-natural-logarithm]]: fixes the logarithm and its domain on positive reals.

[[def-real-exponential-function-and-e]]: defines the exponential used in the softmax formula.

[[def-measurable-function-between-measurable-spaces]]: specifies the measurability condition on the logit map.

[[thm-positive-temperature-scaling-preserves-argmax]]: proves normalization, finite validation loss, existence of the finite-grid minimizer, and preservation of the maximizing class.

[Guo et al., full paper, Section 4.2](https://proceedings.mlr.press/v70/guo17a/guo17a.pdf): introduces multiclass temperature scaling, validation NLL selection, and preservation of the class prediction.
