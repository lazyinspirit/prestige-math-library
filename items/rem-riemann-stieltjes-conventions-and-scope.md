---
id: rem-riemann-stieltjes-conventions-and-scope
kind: remark
title: "Conventions and proved scope for bounded variation and Stieltjes integration"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-bounded-variation-and-total-variation,
       def-absolutely-continuous-function,
       def-riemann-stieltjes-sum-and-integral,
       thm-riemann-stieltjes-darboux-criterion,
       thm-riemann-stieltjes-existence-bv-no-common-discontinuities,
       thm-young-riemann-stieltjes-existence-rational]
justified_by: []
aliases: []
landmark: false
proof_strategy: n/a
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, Ch. 6"
      url: "https://archive.org/details/principlesofmath00rudi"
pipeline_run: null
---

## Statement

Total variation is zero on a singleton, and both ordinary and Riemann–Stieltjes integrals use the oriented convention when endpoints are reversed. Absolute continuity here is formulated with finite disjoint families of intervals.

The weighted Darboux criterion on this page is stated for nondecreasing integrators; a general BV integrator is handled through Jordan decomposition or tagged sums. The no-common-discontinuity theorem is sharp in view of the companion common-jump counterexample. Young's theorem is proved only for rational Hölder exponents because those are the powers presently developed in the library. No Lebesgue–Stieltjes measure, almost-everywhere differentiability theorem, or arbitrary-real-exponent Hölder theory is asserted.
