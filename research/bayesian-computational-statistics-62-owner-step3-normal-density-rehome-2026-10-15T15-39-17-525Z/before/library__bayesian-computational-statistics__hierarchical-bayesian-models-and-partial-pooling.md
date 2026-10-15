---
page: hierarchical-bayesian-models-and-partial-pooling
title: "Hierarchical Bayes and partial pooling"
status: draft
items:
  - lem-finite-products-of-dominated-kernels-have-product-density
  - lem-normal-location-scale-density
  - def-hierarchical-bayesian-model
  - thm-hierarchical-latent-tuple-has-rcd-given-data
  - thm-hierarchical-posterior-normalization-on-positive-finite-evidence
  - thm-normal-normal-hierarchical-shrinkage
  - def-current-and-new-group-posterior-predictive-laws
  - thm-current-and-new-group-posterior-predictive-laws-are-probability-kernels
examples: []
---

This page develops a finite-group hierarchical Bayesian model from its
probability kernels. A proper hyperprior and conditionally independent group
parameters induce a joint prior and a product likelihood; the posterior is
normalized only on observation fibers with positive finite evidence. The
known-variance normal specialization gives conditional shrinkage toward the
population mean, while the full posterior continues to integrate uncertainty
in unknown hyperparameters. Current-group prediction uses that group's
posterior parameter; new-group prediction first draws from the population
kernel. The product-kernel structure is an explicit modeling assumption; no
finite de Finetti representation is asserted.
