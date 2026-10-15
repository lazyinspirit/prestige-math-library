---
page: cross-validation-risk-and-model-comparison
title: "Cross-validation risk, model selection, and comparison uncertainty"
status: published
items:
  - def-cross-validation-split-and-risk-target
  - def-risk-estimation-versus-model-identification
  - alg-holdout-loo-lpo-v-fold-and-repeated-cv
  - thm-cross-validation-risk-bias-at-training-size
  - lem-kfold-cv-variance-covariance-decomposition
  - thm-no-universal-unbiased-k-fold-cv-variance-estimator
examples: []
---

## Summary

For IID observations, a fixed weighted split schedule estimates the weighted risks at its training sizes; an independent randomized schedule averages those targets over its randomization law. In particular, a holdout estimate targets its smaller training sample, and equal-fold K-fold CV targets $R_{n-m}$. The expectation identity does not make fold losses independent: a fixed balanced K-fold score has diagonal, within-fold, and between-fold covariance terms. We define common holdout and leave-out schedules, distinguish risk minimization from true-model identification, and prove the training-size target. Under a fixed, balanced K-fold design and symmetric learning rules, a finite-support argument shows that no variance estimator based on one observed sample is unbiased for every IID law where that variance is finite. The theorem leaves model-specific, asymptotic, and biased methods open and does not apply to dependent data without a design-matched split.

## Items

- [[def-cross-validation-split-and-risk-target]] defines split, risk, and training-size target conventions.
- [[def-risk-estimation-versus-model-identification]] separates predictive-risk selection from recovering a true model label.
- [[alg-holdout-loo-lpo-v-fold-and-repeated-cv]] specifies holdout, LOO, LPO, V-fold, repeated, and paired procedures.
- [[thm-cross-validation-risk-bias-at-training-size]] proves the expected score is the schedule-weighted risk at its training sizes, including holdout and fixed K-fold special cases.
- [[lem-kfold-cv-variance-covariance-decomposition]] derives the three covariance components for fixed balanced folds.
- [[thm-no-universal-unbiased-k-fold-cv-variance-estimator]] proves a universal unbiased variance estimator cannot exist under its stated setup.
