---
page: rpm-radiation-models
title: "Reduced-order LL local ODE and shell"
status: published
library: physics
items:
  - lem-rpm-ll-reduced-ode
  - lem-rpm-reduction-residual
  - post-rpm-lad-effective-equation
  - rem-rpm-self-force-status
examples: []
---

This page fixes a flat, prescribed-field Landau–Lifshitz reduction and proves local existence, uniqueness, and preservation of the future unit timelike shell for its explicit second-order ODE. It gives a uniform finite-interval residual estimate for LAD families that already satisfy specified small-defect and coefficient bounds, and a separate finite-time stability estimate for two specified Lipschitz second-order vector fields on a common compact phase region with the same initial data. Both results are conditional: neither constructs regular LAD families, compares an unrestricted third-order LAD solution to LL, or establishes global convergence.

The flat Lorentz–Abraham–Dirac equation is a separate adopted effective postulate. Neither equation is derived here from a coupled Maxwell point source, a finite-body limit, or an observation. The page does not evaluate a singular self-field at the particle worldline. Its SI tensor convention is inherited from [[rpm-external-charge]], and the finite-body moment convention is available on [[rpm-spin-finite-size]].

Prerequisite frameworks: [[rpm-spin-finite-size]] and [[rpm-external-charge]].
