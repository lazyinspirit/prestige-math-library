---
page: brownian-motion-construction-and-continuity-examples
title: Brownian Motion Construction and Continuity — Examples
status: draft
items: []
examples:
  - ex-brownian-finite-dimensional-density
  - ex-covariance-of-overlapping-brownian-increments
  - ex-linear-combinations-of-brownian-values-are-gaussian
  - ex-brownian-bridge-from-brownian-motion
  - ex-deterministic-integral-construction-of-a-gaussian-process
  - ex-multidimensional-brownian-radial-second-moment
  - cex-kolmogorov-extension-alone-does-not-give-a-continuous-version
  - cex-modifying-a-process-at-each-time-can-destroy-path-continuity-on-an-uncountable-index-set
---

These examples accompany
[[brownian-motion-construction-and-continuity]]. The finite-dimensional density
is obtained from independent normal increments by an explicit triangular
change of variables. Covariances of two increments become the length of their
interval overlap, and arbitrary finite linear combinations retain the full
possibly degenerate normal law, including empty sums, repeated times, and zero
variance.

The Brownian bridge $B_t-tB_1$ is checked for joint Gaussianity, covariance,
one common continuity event, and both endpoint identities. Integrating a
Brownian path against time gives a second Gaussian process only after the
exceptional paths are repaired and the Riemann-sum limit is justified through
characteristic functions; its covariance is evaluated explicitly. In finite
dimension, $\lVert B_t\rVert_2^2-dt$ is proved to be a martingale relative to
the uncompleted natural filtration, with independence from the whole past
established by a finite-cylinder and pi-lambda argument.

The final counterexamples separate finite-dimensional information from path
regularity. Independent fair-bit coordinates have consistent finite laws and
a Kolmogorov extension but no continuous modification: along one deterministic
sequence approaching zero, both bit values recur almost surely. Conversely,
the zero process and a moving singleton spike are modifications at every fixed
time but have completely different path continuity; their simultaneous-
equality event is empty. The first construction declares AC for arbitrary-index
extension, while the Lebesgue spike example declares exactly countable choice.
