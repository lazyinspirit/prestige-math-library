---
page: random-fields-covariance-and-variograms-examples
title: "Random fields and variograms — Examples"
status: draft
items: []
examples:
  - ex-covariance-kernel-and-intrinsic-variogram-checks
---

The candidate covariance $C(h)=1+h^2$ fails the two-site positive-semidefinite
test. The quadratic variogram $\gamma(h)=h^2$ is realized by a random line
$X(t)=tZ$ with $\mathbb E[Z]=0$ and $\mathbb E[Z^2]=2$; its increment
calculation also gives the real zero-sum CND inequality. The witness has
stationary increments but nonconstant level variance, so it is not wide
stationary. No Schoenberg converse is used.
