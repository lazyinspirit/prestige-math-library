---
page: marginal-likelihoods-bayes-factors-and-empirical-bayes
title: "Marginal likelihoods, Bayes factors, and empirical Bayes"
status: published
items:
  - thm-balanced-one-way-random-effects-expected-mean-squares
  - def-marginal-likelihood-and-bayes-factor
  - thm-finite-model-posterior-odds-from-marginal-evidence
  - def-type-ii-marginal-likelihood-and-empirical-bayes-posterior
examples: []
---

For a finite set of dominated models with proper parameter priors and
specified jointly measurable likelihood densities against a common
sigma-finite data measure, each marginal likelihood is the prior-predictive
density. With positive model weights and all model evidences finite and
positive, the model posterior is obtained
by normalizing prior model weight times evidence, and posterior odds equal
prior odds times the Bayes factor. At a finite positive evidence fiber, a point
null can have positive posterior mass only if it has positive prior mass.
Improper priors with arbitrary
normalization constants do not define generic model evidence. Within a
finite-group hierarchy, Type-II maximum marginal likelihood selects a
hyperparameter only when the conditional evidence is finite-valued and attains
a positive finite maximum; a data-indexed rule requires a measurable maximizing
selection. Its plug-in posterior fixes the selected hyperparameter. Under a
proper hyperprior and finite positive joint evidence, full Bayes retains a
posterior distribution on hyperparameters. The plug-in procedure comes with
no generic risk or coverage guarantee. The
balanced one-way normal random-effects model has expected between and within
mean squares $\sigma^2+r\tau^2$ and $\sigma^2$, so its raw moment estimate of
$\tau^2$ can be negative.
