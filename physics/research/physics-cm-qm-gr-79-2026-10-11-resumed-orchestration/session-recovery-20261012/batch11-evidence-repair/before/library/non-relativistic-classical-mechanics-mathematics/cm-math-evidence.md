---
page: cm-math-evidence
title: Cm Math Evidence
status: draft
library: mathematics
items: [def-cm-measurement-model, def-cm-calibration-rule, def-cm-iid-sampling-model, def-cm-covariance-matrix-of-a-random-vector, lem-cm-linearized-propagation-of-covariance, lem-cm-uniform-second-order-remainder-bound, cor-cm-linearization-error-bounds, def-cm-statistical-test-and-size, def-cm-confidence-set-and-coverage, def-cm-likelihood-function, rem-cm-inference-and-uncertainty-scope]
examples: []
requires: ["measures-and-their-basic-properties","the-lebesgue-integral-and-the-convergence-theorems","hilbert-space-geometry-and-riesz-representation","mixed-partials-taylor-and-extrema","probability-spaces-random-variables-and-expectation","rn-as-a-normed-space","sigma-algebras-and-borel-sets","the-inverse-function-theorem-completed","the-spectral-theorem-and-singular-value-decomposition","the-total-derivative","vector-spaces-and-subspaces","foundations-of-the-real-numbers","matrices-and-the-matrix-of-a-linear-map","measurable-functions-and-simple-approximation","suprema-and-infima","weak-laws-and-series-of-independent-random-variables","independence-borel-cantelli-and-zero-one-laws","construction-of-r-via-cauchy-sequences"]
---

The measurement, sampling and elementary-inference mathematics used by the
classical mechanics collection when it states how a model-conditional
prediction is compared with recorded data. Every item here is mathematics: it
carries `domain: mathematics`, depends only on mathematical suppliers, and is
excluded from physical conclusions by itself. The probability, expectation,
variance, independence, identical-distribution and IID notions are the
published root-library items cited in the definitions; they are reused, not
re-authored.

A measurement model is defined in [[def-cm-measurement-model]]: an open input
domain, a Borel model function, an input random element with values in that
domain, and the output quantity formed by composition; its additive-error
specialization $Y_{\theta,z}=h(\theta,z)+\varepsilon$ records the parameter,
apparatus and error slots, with mean-zero, moment, boundedness or distribution
hypotheses left as explicitly stated additional assumptions.
[[def-cm-calibration-rule]] records a calibration family $h_c$, reference
inputs, admissible reference observations and a calibration rule $\Gamma$, and
notes that consistency or accuracy properties of a calibrated map are
hypotheses, not consequences of the definition.

[[def-cm-iid-sampling-model]] packages a repeated-observation model as real
random variables together with the adopted IID and second-moment hypotheses,
and defines the sample mean; the model-conditional quantification of that
model is the published corollary [[cor-iid-finite-variance-weak-law]], whose
identity $E\lvert\overline Y-\mu\rvert^2=\sigma^2/n$ and Chebyshev bound
$\mathbb P(\lvert\overline Y-\mu\rvert\ge a)\le\sigma^2/(na^2)$ are recorded
with their hypotheses in [[rem-cm-inference-and-uncertainty-scope]]. For
vector-valued observations, [[def-cm-covariance-matrix-of-a-random-vector]]
defines the mean vector and the covariance matrix $\Sigma$, with symmetry and
positive semidefiniteness proved from the definitions, and
[[lem-cm-linearized-propagation-of-covariance]] computes the mean and
covariance of the linearization $T(x)=h(\mu)+Dh(\mu)(x-\mu)$ as $h(\mu)$ and
$Dh(\mu)\Sigma Dh(\mu)^{\mathsf T}$.

The nonlinear remainder is separated from the exact linearization. On an open
convex domain with a uniform Hessian bound $B$,
[[lem-cm-uniform-second-order-remainder-bound]] proves
$\lvert h(y)-h(\mu)-\nabla h(\mu)\cdot(y-\mu)\rvert\le\frac B2\lvert y-\mu\rvert^2$,
and [[cor-cm-linearization-error-bounds]] integrates that pointwise bound to
$\lvert E[R]\rvert\le E\lvert R\rvert\le\frac B2E\lvert X-\mu\rvert^2$ and
$E[R^2]\le\frac{B^2}{4}E\lvert X-\mu\rvert^4$ under the stated second- and
fourth-moment hypotheses. These bounds quantify the difference between the
propagated covariance and the covariance of the observation map; the tests and
examples on the companion page show that the two are not equal in general even
when the hypotheses hold.

The inferential vocabulary is definitional:
[[def-cm-statistical-test-and-size]] defines a test by a rejection region
within a specified family $(\mathbb P_\theta)_{\theta\in\Theta}$, its power
function and its size $\sup_{\theta\in\Theta_0}\mathbb P_\theta(R)$;
[[def-cm-confidence-set-and-coverage]] defines a confidence set with its
measurability condition and coverage level
$\inf_\theta\mathbb P_\theta(\theta\in C)$; and
[[def-cm-likelihood-function]] defines the likelihood of a dominated family
relative to a fixed dominating measure. [[rem-cm-inference-and-uncertainty-scope]]
records what these definitions do and do not contain: no prior over the
parameter set, no empirical claim, no Gaussian model, and no measured
apparatus or sampling protocol. Physical consumers — in particular the
measurement and uncertainty page of the classical mechanics track — must
supply their own preparation, apparatus, calibration, sampling and
uncertainty qualifications.
