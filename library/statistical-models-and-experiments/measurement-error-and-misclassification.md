---
page: measurement-error-and-misclassification
title: "Measurement error and misclassification"
status: published
items:
  - def-measurement-error-models
  - def-nondifferential-measurement-error-relative-to-named-variables
  - thm-classical-error-attenuation-in-simple-linear-regression
  - thm-berkson-error-slope-in-simple-linear-model
  - prop-observed-law-does-not-identify-latent-error-variance-split
examples: []
---

This page distinguishes a latent value from its measured value and fixes the
direction of the classical and Berkson additive error equations. It also
defines categorical misclassification with a finite row-stochastic matrix and
defines nondifferential error only relative to named variables.

The regression results are limited to a single linear predictor and explicit
independence and moment assumptions. Classical error multiplies the slope by a
factor in $[0,1]$; when both variances are positive, this strictly reduces the
absolute slope for a nonzero true slope, while a zero true slope remains zero.
The separately specified Berkson model preserves the slope. Neither result is
a general direction-of-bias rule for nonlinear, adjusted, or multivariable
analysis. A finite two-point construction shows that the marginal law of a
measured value alone need not determine how its variance splits between latent
variation and measurement error.
