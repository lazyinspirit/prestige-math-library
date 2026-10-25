---
page: "multivariate-normal-wishart-hotelling"
title: "Multivariate normal, Wishart, and Hotelling $T^2$"
status: published
items:
  - def-wishart-law
  - lem-standard-normal-matrix-has-full-row-rank-almost-surely
  - def-multivariate-normal-sample-model-and-statistics
  - lem-standard-wishart-independent-normal-quadratic-form-is-f
  - thm-multivariate-normal-sample-mean-scatter-independence-and-wishart
  - thm-covariance-likelihood-ratio-asymptotic-chi-square
  - thm-hotelling-t2-exact-f-distribution
  - thm-wishart-trace-statistic-is-chi-square
  - cor-exact-hotelling-one-sample-test
examples: []
---

This page fixes the vector sampling unit, the $n-1$ sample covariance convention, and the Wishart law as a Gaussian outer-product sum, including singular-support cases. It proves the Gaussian mean/scatter decomposition and its exact Wishart degrees of freedom, then derives the exact one-sample Hotelling $T^2$ to $F$ pivot. For covariance testing it distinguishes the exact Wishart trace statistic, with $p(n-1)$ degrees of freedom, from the Gaussian covariance likelihood ratio, whose fixed-$p$ chi-square calibration is asymptotic with $p(p+1)/2$ degrees of freedom. No finite-sample chi-square calibration for that likelihood ratio is asserted.

The model contract and general testing interfaces come from [[scientific-statistical-model-contracts]], [[exact-gaussian-linear-regression-inference]], [[dominated-experiments-likelihood-and-sufficiency]], [[finite-sample-tests-neyman-pearson-and-valid-p-values]], and [[confidence-sets-pivots-and-test-inversion]]. The Gaussian orthogonal decomposition, fixed-dimensional CLT, probability, independence, and inner-product conventions are supplied by [[gaussian-orthogonal-decomposition-and-quadratic-forms]], [[central-limit-theorems]], [[probability-spaces-random-variables-and-expectation]], [[independence-borel-cantelli-and-zero-one-laws]], and [[inner-product-spaces-and-orthogonality]]. The general likelihood-asymptotics page is context only; the covariance likelihood result is proved directly under its explicit Gaussian assumptions.
