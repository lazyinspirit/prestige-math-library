---
page: fisher-information-and-finite-sample-information-bounds
title: "Scores and Information Bounds"
status: published
items: [def-score-and-fisher-information,
        thm-score-mean-zero-and-information-identity,
        thm-cramer-rao-lower-bound,
        thm-multivariate-cramer-rao-bound]
examples: []
---

This page defines the score and Fisher information for a dominated
parameterized model, then proves the mean-zero score and expected
log-likelihood Hessian identities under explicit common-support and
integrable-envelope conditions. Those conditions give one sufficient
differentiation-under-the-integral route; they are not a claim that all valid
information bounds require common support.

The scalar bound applies to estimators with the stated local mean, finite
second moment at the chosen parameter, and score-covariance derivative
identity. The vector bound states its pointwise mean and score-derivative
conditions separately, then proves the covariance inequality by expanding a
residual vector's covariance. These hypotheses include globally
finite-variance unbiased estimators when the required score identities hold;
neither theorem asserts that an estimator attaining a bound exists.
