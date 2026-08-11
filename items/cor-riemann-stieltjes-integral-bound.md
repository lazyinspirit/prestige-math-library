---
id: cor-riemann-stieltjes-integral-bound
kind: corollary
title: "The total-variation bound for a Riemann–Stieltjes integral"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-riemann-stieltjes-sum-and-integral,
       def-bounded-variation-and-total-variation,
       lem-riemann-stieltjes-integral-unique, def-finite-sum,
       lem-finite-sum-laws, lem-limit-preserves-order,
       lem-of-triangle-inequality, lem-of-abs-value]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, Ch. 6"
      url: "https://archive.org/details/principlesofmath00rudi"
pipeline_run: null
---

## Statement

Suppose $\int_a^b f\,d\alpha$ exists, $\alpha$ has bounded variation, and
$|f(x)|\le M$ on $[a,b]$. Then

$$\left|\int_a^b f\,d\alpha\right|\le M\operatorname{Var}_{[a,b]}(\alpha).$$

## Facts & Assumptions

**Given:** An existing Stieltjes integral, a BV integrator $\alpha$, and a bound $|f|\le M$.

[L1] Stieltjes sums converge to the integral in the mesh sense ([[def-riemann-stieltjes-sum-and-integral]], [[lem-riemann-stieltjes-integral-unique]]).

[L2] Every sum of absolute integrator increments is bounded by total variation ([[def-bounded-variation-and-total-variation]]).

[L3] Finite sums and the triangle inequality give $|\sum u_i|\le\sum|u_i|$ ([[def-finite-sum]], [[lem-finite-sum-laws]], [[lem-of-triangle-inequality]], [[lem-of-abs-value]]).

[L4] Non-strict inequalities pass to limits ([[lem-limit-preserves-order]]).

## Proof

**Proof technique:** direct.

1.1 Every tagged sum satisfies $|S(f,\alpha;P,\xi)|\le\sum_{i<n}|f(\xi_i)||\Delta_i\alpha|\le M\sum_{i<n}|\Delta_i\alpha|\le M\operatorname{Var}_{[a,b]}(\alpha)$. [L2, L3]

2.1 Take a sequence of tagged partitions with mesh tending to $0$. Their sums converge to the integral by [L1], and [L4] passes the bound in step 1.1 to the limit. Orientation and the singleton case preserve the same absolute-value inequality. [step 1.1, L1, L4] ∎
