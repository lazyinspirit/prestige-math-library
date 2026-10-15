---
page: posterior-prediction-and-bayesian-decision
title: "Posterior Prediction, Credible Sets, and Bayes Actions"
status: draft
items:
  - def-posterior-predictive-law
  - thm-posterior-predictive-mixture-is-a-kernel
  - thm-posterior-predictive-moment-decomposition
  - def-posterior-credible-set
  - lem-measurable-posterior-quantile-and-cdf-bracketing
  - thm-central-posterior-quantile-interval-is-credible
  - def-posterior-median
  - lem-lower-posterior-median-is-measurable
  - def-posterior-risk-and-bayes-action
  - thm-posterior-mean-is-squared-error-bayes-action
  - thm-posterior-median-minimizes-absolute-risk
  - thm-finite-class-maximal-mass-is-zero-one-bayes-action
examples: []
---

Fix a supplied measurable posterior probability kernel and a future probability kernel. A data-indexed posterior kernel can be supplied by the standard-Borel construction on [[bayesian-models-priors-and-posterior-laws]] under the Axiom of Choice ([[def-axiom-of-choice]]) when both parameter and data spaces are standard Borel; the construction of a sample-point-indexed posterior regular conditional distribution needs only a standard-Borel parameter space. Standard-Borel spaces are defined in [[def-standard-borel-space]]. Alternatively, the dominated formula on [[posterior-propriety-and-dominated-bayes-formula]] applies to a proper prior and a probability sampling kernel represented by a specified nonnegative jointly measurable density with respect to a sigma-finite data measure. Null-data values remain version-dependent. The posterior/future-kernel mixture is the posterior-predictive law; when its second moment is finite, its variance separates future sampling variance from posterior uncertainty in the conditional mean. A graph-measurable set has posterior credibility when its posterior mass reaches the stated level. Equal-tailed quantile intervals are one construction; highest-posterior-density regions require a density relative to a specified measure and can be disconnected or nonunique. Posterior risk is recorded only when its loss integral is finite, and a Bayes action rule must be measurable, have finite risk, and attain the minimum. The squared-loss posterior-mean result assumes a finite posterior second moment and AC through the L²-projection theorem; the median result assumes a finite first absolute moment, and the finite-class maximizer result uses zero-one loss on a nonempty finite class. Posterior credibility is not a repeated-sampling coverage guarantee.
