---
page: stable-special-function-recurrences-and-certified-evaluation-examples
title: Stable special function recurrences and certified evaluation — Examples
status: draft
requires:
  - stable-special-function-recurrences-and-certified-evaluation
items: []
examples:
  - ex-hypergeometric-branch-cut-domain
  - ex-erfc-subtraction-cancellation
  - ex-erfcx-asymptotic-optimal-truncation
  - ex-forward-bessel-recurrence-loses-sign
  - ex-relative-error-near-an-airy-zero
  - ex-scaled-modified-bessel-overflow-avoidance
---

## Objective

These examples test the certified branches at the points where domain
restrictions, cancellation, scaling, or relative error matter. The proofs
include the Gauss series versus its logarithmic continuation, conditioning in
$1-operatorname{erf}(x)$, least-term truncation for the signed erfcx
asymptotic expansion, absolute versus relative accuracy near an Airy zero,
a Bessel recurrence sign error under an arbitrarily small seed perturbation,
and growth of unscaled $I_0(x)$ alongside the bounded scaled value.

Every example uses the exact branch and error contract from the A page. No
example turns a finite recurrence heuristic or a limiting asymptotic series
into an unproved convergence claim.
