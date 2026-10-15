---
page: posterior-propriety-and-dominated-bayes-formula
title: Posterior propriety and dominated Bayes formula
status: draft
items:
  - def-posterior-evidence-normalizer-and-fiberwise-update
  - prop-fiberwise-posterior-propriety-iff-finite-positive-evidence
examples: []
---

For a fixed observation, the evidence is the integral of the nonnegative
likelihood section against the prior measure. The normalized fiberwise update
is a probability exactly when this evidence is finite and positive; neither
zero nor infinite evidence can be used as a denominator. A sigma-finite
improper prior can therefore give a proper posterior at a particular data
fiber, but that update does not define a prior-predictive probability. A
proper prior is a probability measure, as in
[[def-bayesian-model-as-prior-and-sampling-kernel]]. The posterior RCD and
data-indexed posterior-kernel distinction is stated in
[[def-bayesian-posterior-as-regular-conditional-law]]; a fiberwise update alone
does not assert either conditional-law identity.

For a proper prior, the general dominated-kernel formula is already proved in
[[thm-bayes-formula-for-dominated-kernels]]. Its hypotheses include a
sigma-finite data measure, a probability sampling kernel, and one specified
nonnegative density measurable jointly in parameter and data. Under these
hypotheses the normalizer is the prior-predictive density; the quotient formula
applies only on fibers with finite positive evidence, and the theorem fills the
complement with a probability version on a prior-predictive null set.

The density hypotheses are substantive. [[def-dominated-statistical-experiment]]
only gives domination of each sampling law by a fixed sigma-finite measure, and
[[def-likelihood-density]] supplies separate parameter-indexed versions without
asserting their joint measurability. Do not infer a product-measurable density
from those pointwise versions. Supply joint measurability explicitly when using
Tonelli for a prior-predictive statement.

