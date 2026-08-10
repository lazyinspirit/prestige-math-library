---
id: cex-common-jump-prevents-riemann-stieltjes-integrability
kind: counterexample
title: "A common jump can destroy Riemann–Stieltjes integrability"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-riemann-stieltjes-sum-and-integral,
       def-bounded-variation-and-total-variation,
       def-partition-and-refinement, def-finite-sum, lem-finite-sum-laws,
       lem-riemann-stieltjes-integral-unique]
justified_by: []
aliases: []
landmark: false
proof_strategy: counterexample
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, Ch. 6, discussion following Theorem 6.10"
      url: "https://archive.org/details/principlesofmath00rudi"
pipeline_run: null
---

## Example

Let $a<c<b$ and put $f=\alpha=H_c$, the unit step that is zero left of $c$ and one at and right of $c$. Both functions are BV, but $\int_a^b f\,d\alpha$ does not exist.

## Facts & Assumptions

**Given:** The two identical unit-step functions.

[L1] A Stieltjes integral must be the same limit for every sufficiently fine choice of partition and tags ([[def-riemann-stieltjes-sum-and-integral]], [[lem-riemann-stieltjes-integral-unique]]).

[L2] For a nondecreasing function every partition increment is nonnegative, so the absolute values in the variation sum may be removed and the finite sum telescopes to the endpoint increment ([[def-bounded-variation-and-total-variation]], [[def-finite-sum]], [[lem-finite-sum-laws]]).

## Verification

**Proof technique:** counterexample.

1.1 By [L2], both $f$ and $\alpha$ have total variation one. For every $h>0$ small enough, choose a partition containing $c-h$ and $c$. The only nonzero integrator increment occurs on $[c-h,c]$. [L2]

2.1 Tag that interval first at $c-h$ and then at $c$. The corresponding sums are respectively $f(c-h)=0$ and $f(c)=1$, although both partitions have mesh tending to zero after the other intervals are refined. Thus no common mesh limit exists, contradicting the necessary condition [L1]. [L1] ∎
