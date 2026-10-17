---
page: proximal-gradient-and-accelerated-composite-optimization
title: Proximal gradient and accelerated composite optimization
status: published
requires:
  - constrained-variational-problems-and-variational-inequalities
  - convex-and-semicontinuous-functions-on-rn
  - inequality-kkt-duality-and-optimality-certificates
  - sparse-high-dimensional-estimation-and-covariance
items:
  - def-indicator-function-of-closed-convex-set
  - def-proper-closed-convex-function-on-rn
  - lem-l-smoothness-descent-inequality
  - def-extended-real-epsilon-subdifferential
  - def-proximal-mapping
  - def-strong-convex-composite-objective
  - lem-proper-closed-convex-function-affine-minorant
  - lem-smooth-composite-sum-preserves-proper-closed-convexity
  - lem-prox-indicator-is-euclidean-projection
  - thm-proximal-operator-existence-resolvent-firm-nonexpansive
  - def-proximal-gradient-mapping
  - lem-prox-l1-is-soft-thresholding
  - lem-proximal-three-point-inequality
  - alg-proximal-gradient-and-fista
  - lem-proximal-gradient-one-step-estimate
  - thm-projected-gradient-fixed-point-kkt-certificate
  - alg-certified-inexact-proximal-gradient-and-fista
  - lem-fista-energy-estimate-sequence
  - thm-proximal-gradient-o1k-objective-bound
  - lem-inexact-proximal-gradient-one-step-estimate
  - thm-fista-o1k2-objective-bound
  - lem-inexact-fista-energy-estimate
  - thm-inexact-proximal-gradient-summable-error-bound
  - thm-strong-convex-proximal-gradient-and-restarted-fista-rates
  - thm-inexact-fista-weighted-error-bound
examples: []
---

For the composite objective $F=f+g$, the page assumes a convex continuously differentiable $L$-smooth term $f$ and a proper closed convex extended-real term $g$. It develops the proximal map from an affine minorant and a finite-dimensional compactness argument, proves its resolvent and firm-nonexpansiveness properties, and obtains the projection and $\ell^1$ soft-threshold special cases. The exact proximal-gradient estimate yields an $O(1/k)$ bound; the FISTA energy sequence yields $O(1/k^2)$. A strong-convexity argument gives a linear proximal-gradient factor and a fixed restart period with a one-half contraction per block.

Inexact calls are accepted only with the displayed $\eta$-subgradient certificate at each update. The page derives the perturbed one-step and FISTA energy recurrences from that certificate, obtaining summable-error best-iterate convergence for proximal gradient and a weighted $\sum k^2\eta_k$ bound for FISTA. These statements do not grant rates from an unverified value-gap tolerance alone. The projected-gradient fixed-point theorem identifies the normal-cone certificate and applies the current convex KKT sufficiency interface without asserting a multiplier converse absent a constraint qualification.
