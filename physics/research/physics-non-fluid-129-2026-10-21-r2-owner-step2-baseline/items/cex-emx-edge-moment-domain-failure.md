---
id: cex-emx-edge-moment-domain-failure
kind: counterexample
title: Raw edge sampling is not defined on every H(curl) class
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 2
domain: physics
library: physics
proof_strategy: direct
deps:
  - def-emx-whitney-semidescretization
  - def-na-hcurl-space
  - def-na-lowest-order-whitney-de-rham-spaces
  - thm-na-uniformly-bounded-commuting-cochain-projection
dependency_roles:
  def-emx-whitney-semidescretization: formulation-prerequisite
  def-na-hcurl-space: mathematical-premise
  def-na-lowest-order-whitney-de-rham-spaces: mathematical-premise
  thm-na-uniformly-bounded-commuting-cochain-projection: mathematical-premise
aliases: []
verification:
  precheck: pending
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: A counterexample about representative-dependent line sampling of arbitrary real H(curl) equivalence classes along an interior segment, including interior tetrahedral-mesh edges. It does not deny the well-defined polynomial edge degrees of freedom of the Whitney space or the existence of separate smoothed projections under their mesh hypotheses. No measurement or continuum approximation claim is made.
sources:
  references:
    - title: "Long Chen, Finite Element Methods for Maxwell Equations, complete University of California, Irvine lecture notes, updated May 17 2024"
      url: https://www.math.uci.edu/~chenlong/226/FEMMaxwell.pdf
      locator: "Entire 10-page PDF inspected. Section 1.3, PDF pp. 4-5, Remark 1.4: canonical edge and face interpolation require more regularity than H(curl) alone because an edge trace need not be defined."
    - title: "Douglas N. Arnold, Richard S. Falk, and Ragnar Winther, Finite element exterior calculus: from Hodge theory to numerical stability, Bulletin of the American Mathematical Society 47 (2010), pp. 281-354"
      url: https://sites.math.rutgers.edu/~falk/papers/bulletin-orig.pdf
      locator: "Entire 70-page PDF inspected. Sections 5.2 and 5.4-5.5, PDF pp. 49-57: canonical moments use lower-dimensional traces, while bounded cochain projections require a separately smoothed construction."
---

## Statement refuted

Let Omega be a nonempty open subset of R3 and let e be a closed straight segment of positive length contained in Omega, with an orientation and unit tangent t_e. (This includes any mesh edge contained in the interior of a tetrahedral mesh.) The false claim is that for every real H(curl;Omega) equivalence class [u], the value integral_e u dot t_e ds is independent of the representative and therefore defines raw line sampling on all of H(curl;Omega).

## Statement references

[[def-emx-whitney-semidescretization]]

[[def-na-hcurl-space]]

[[def-na-lowest-order-whitney-de-rham-spaces]]

## Facts & Assumptions

**Given:** A closed straight segment e of positive length contained in a nonempty open subset Omega of R3, its chosen unit tangent t_e, and the real L^2-based graph-space convention.

[F1] [[def-na-hcurl-space]]: H(curl;Omega) consists of L^2 equivalence classes whose distributional curl is represented by an L^2 class; changing a representative on a three-dimensional null set changes neither the class nor its distributional curl.

[F2] [[def-emx-whitney-semidescretization]] and [[def-na-lowest-order-whitney-de-rham-spaces]]: the semidiscrete finite-element definition uses oriented edge circulations only on the cellwise polynomial Whitney space, where the local polynomial representatives define those moments; it does not extend the moment to arbitrary H(curl) classes.

[F3] [[thm-na-uniformly-bounded-commuting-cochain-projection]]: under its shape-regular refining mesh and Countable Choice hypotheses, a separate smoothed projection maps H_0(curl) boundedly into the relative Whitney edge space and converges in graph norm; this is not the raw edge-sampling rule refuted here.

## Counterexample

**Given:** The edge e and graph space above.

1.1 Let u_0 be zero everywhere. Define a second measurable representative u_1 to equal t_e on e and zero on Omega minus e. A line segment has three-dimensional Lebesgue measure zero, so u_0 and u_1 represent the same zero L^2 class. Their distributional curls are both the zero distribution by the integral definition in [F1]; hence they represent the same element of H(curl;Omega). [given, F1, construct]

2.1 Using the displayed representatives, the oriented edge integral of u_0 is zero, while that of u_1 is integral_e |t_e|^2 ds=length(e)>0. Therefore this integral is not a function of the H(curl) equivalence class, which refutes the universal raw edge-sampling claim. This does not affect the polynomial Whitney moments in [F2]. [given, F2, step 1.1, algebra]

3.1 The counterexample concerns only unregularized line restriction. Under the distinct hypotheses in [F3], a smoothed relative commuting projection is available; its construction is not an edge-by-edge evaluation of the arbitrary H(curl) representative. Thus it supplies no missing edge trace to the refuted map and is consistent with steps 1.1-2.1. [F3, step 1.1, step 2.1] ∎
