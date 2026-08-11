---
id: rem-riemann-stieltjes-conventions-and-scope
kind: remark
title: "Conventions and proved scope for bounded variation and Stieltjes integration"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-bounded-variation-and-total-variation,
       def-absolutely-continuous-function,
       def-riemann-stieltjes-sum-and-integral,
       thm-riemann-stieltjes-darboux-criterion,
       thm-riemann-stieltjes-existence-bv-no-common-discontinuities,
       thm-young-riemann-stieltjes-existence-rational]
justified_by: []
forward_refs: [def-real-power]
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

On a nondegenerate interval $[a,b]$ with $a<b$, and for a nondecreasing
integrator, the weighted Darboux condition matches the all-fine-mesh definition
only together with continuity of the integrand at the integrator's
discontinuities; this extra compatibility is vacuous for a continuous
integrator. The hypothesis $a<b$ is part of the statement and not cosmetic: on
$[a,a]$ the integral is $0$ by convention, so every bounded integrand is
integrable there, while a singleton interval admits no partition at all and so
the Darboux condition fails; a consumer needing $a=b$ reads the value off the
definition instead. A general BV integrator is handled through Jordan
decomposition or tagged sums. Finite-step integrators turn the integral of a
continuous integrand into a weighted evaluation sum over the jumps, while
continuously differentiable integrators reduce the integral of a
Riemann-integrable integrand to an ordinary integral against the derivative. The no-common-discontinuity
theorem is sharp in view of the companion common-jump counterexample. Young's
theorem is proved here only for rational Hölder exponents because arbitrary real
exponents are not available at this point in the reading order; the later
[[def-real-power]] is what supplies them. No Lebesgue–Stieltjes measure,
almost-everywhere differentiability theorem, or arbitrary-real-exponent
Stieltjes theorem is asserted on this page.
