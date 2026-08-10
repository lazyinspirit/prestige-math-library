---
id: ex-finite-step-integrator-weighted-jump-sum
kind: example
title: "A finite-step integrator gives a weighted sum over its jumps"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-riemann-stieltjes-sum-and-integral,
       thm-riemann-stieltjes-linearity-and-additivity,
       ex-step-integrator-evaluates-at-the-jump,
       def-finite-sum, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, Ch. 6, Theorem 6.15"
      url: "https://archive.org/details/principlesofmath00rudi"
pipeline_run: null
---

## Example

Let $c_1<\cdots<c_m$ be points of $[a,b]$ with the endpoint conventions of the one-jump example, and let
$$\alpha=C+\sum_{j=1}^m w_jH_{c_j}.$$
For every continuous $f$,
$$\int_a^b f\,d\alpha=\sum_{j=1}^m w_jf(c_j).$$

## Facts & Assumptions

**Given:** The displayed finite-step integrator and a continuous $f$.

[L1] A single jump of weight one evaluates $f$ at its jump point ([[ex-step-integrator-evaluates-at-the-jump]]).

[L2] The Stieltjes integral is linear in its integrator ([[thm-riemann-stieltjes-linearity-and-additivity]]).

## Verification

**Proof technique:** computation.

1.1 The constant term has every increment equal to zero. By [L1], each $H_{c_j}$ contributes $f(c_j)$, and finite linearity [L2] gives the displayed sum.

2.1 Ordering the distinct jump points prevents double counting. A jump at an endpoint is included exactly when it is encoded by the one-sided convention in [L1]; a constant endpoint assignment has increment zero. ∎
