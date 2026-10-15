---
page: marginal-likelihoods-bayes-factors-and-empirical-bayes
title: "Marginal likelihoods, Bayes factors, and empirical Bayes"
status: draft
items:
  - thm-balanced-one-way-random-effects-expected-mean-squares
  - def-marginal-likelihood-and-bayes-factor
  - thm-finite-model-posterior-odds-from-marginal-evidence
  - def-type-ii-marginal-likelihood-and-empirical-bayes-posterior
examples: []
---

For a finite set of dominated models with proper parameter priors and a common
data measure, each marginal likelihood is the prior-predictive density. When
all model evidences are finite and positive, the model posterior is obtained
by normalizing prior model weight times evidence, and posterior odds equal
prior odds times the Bayes factor. A point null therefore needs an explicit
model atom with positive prior weight. Improper priors with arbitrary
normalization constants do not define generic model evidence. Type-II
maximum marginal likelihood uses a hyperparameter maximizer only where one
exists; its plug-in posterior replaces the full posterior distribution on
hyperparameters and comes with no generic risk or coverage guarantee. The
balanced one-way normal random-effects model has expected between and within
mean squares $\sigma^2+r\tau^2$ and $\sigma^2$, so its raw moment estimate of
$\tau^2$ can be negative.
