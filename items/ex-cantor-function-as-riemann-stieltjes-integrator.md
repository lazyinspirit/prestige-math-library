---
id: ex-cantor-function-as-riemann-stieltjes-integrator
kind: example
title: "The Cantor function defines a nonclassical Stieltjes integrator and $\int_0^1 1\,dc=1$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-cantor-function-properties,
       thm-riemann-stieltjes-existence-continuous-bv,
       def-riemann-stieltjes-sum-and-integral, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Christopher Heil, Absolute Continuity and the Banach-Zaretsky Theorem, Example 3.3"
      url: "https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf"
pipeline_run: null
---

## Example

If $c$ is the Cantor function, then it is a continuous BV integrator and
$$\int_0^1 1\,dc=1.$$

## Facts & Assumptions

**Given:** The Cantor function $c$ on $[0,1]$.

[L1] The function $c$ is continuous and nondecreasing, with $c(0)=0$ and $c(1)=1$ ([[thm-cantor-function-properties]]).

[L2] A continuous integrand is integrable against a BV integrator ([[thm-riemann-stieltjes-existence-continuous-bv]]).

## Verification

**Proof technique:** computation.

1.1 Monotonicity and [L1] make $c$ BV, so existence follows from [L2]. Every tagged sum for the constant integrand telescopes: [L1, L2]
$$\sum_i1\,(c(t_{i+1})-c(t_i))=c(1)-c(0)=1.$$
Thus its common limit is one. This computation invokes neither a derivative of $c$ nor measure theory. ∎
