---
page: parametric-bernstein-von-mises-and-misspecification
title: "Parametric Bernstein–von Mises limits and misspecification"
status: draft
items:
  - lem-local-lipschitz-class-empirical-process-bound
  - thm-lan-implies-total-variation-bvm
  - cor-qmd-ac-component-lan-to-bvm
  - thm-misspecified-iid-lan-under-kv-smoothness
  - cor-misspecified-iid-bvm-under-kv-regularity
  - thm-misspecified-mle-sandwich-expansion
examples: []
---

## Objective

This page proves a finite-dimensional total-variation Bernstein–von Mises theorem from compact-uniform LAN, a continuous positive prior density at an interior point, and posterior contraction at the LAN parameter rate. It separately proves the iid misspecified LAN route under differentiability in $P_0$-probability, a square-integrable local log-likelihood Lipschitz envelope, and a positive-definite second-order KL-contrast expansion. The resulting BvM corollary keeps the every-diverging-radius parameter-contraction premise explicit.

The MLE result separately assumes consistency and $o_{P_0}(n^{-1})$ approximate maximization and derives the sandwich covariance. It does not claim those MLE hypotheses follow from posterior consistency. For a QMD path with supplied jointly measurable density versions, the normalized absolutely continuous likelihood component is used and the singular product-law mass is controlled in total variation. That corollary states the BvM prior, positive-finite-evidence, and parameter-rate-contraction conditions explicitly. The existing QMD-to-LAN supplier is only fixed-sequence; compact-uniform proxy LAN remains an additional premise in that branch. The source-specific iid smoothness route is proved independently.

The page requires the misspecified-consistency and LAN/contiguity prerequisites named in the scaffold manifest. The consistency prerequisite supplies a sufficient almost-sure test criterion and an explicit counterexample to its unrestricted weak-test version. Ordinary consistency does not discharge this page's root-n parameter-contraction premise. The fixed-sequence QMD interface likewise leaves compact-uniform proxy LAN as an explicit additional premise.
