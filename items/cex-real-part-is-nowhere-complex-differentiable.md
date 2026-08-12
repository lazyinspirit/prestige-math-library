---
id: cex-real-part-is-nowhere-complex-differentiable
kind: counterexample
title: "$z\\mapsto\\operatorname{Re}z$ is real differentiable but nowhere complex differentiable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Howell and Mathews, Complex Analysis, §3.1"
      url: "https://complexanalysis.org/web/sec_diff-analytic.html"
pipeline_run: frontier-12
---

## Statement refuted

A real-linear map from $\mathbb C$ to itself is complex differentiable.

## Facts & Assumptions
**Given:** $f(z)=\operatorname{Re}z$.

[L1] Complex differentiability is equivalent to real total differentiability together with $u_x=v_y$ and $u_y=-v_x$ ([[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]]).

## Counterexample

**Proof technique:** direct.

1.1 In real coordinates, $f(x+iy)=x+i0$, so it is the real-linear map $(x,y)\mapsto(x,0)$ and is real totally differentiable everywhere with that same linear map as derivative. [algebra]

2.1 Its components have $u_x=1$ and $v_y=0$. The first Cauchy–Riemann equation therefore fails everywhere, so [L1] makes $f$ nowhere complex differentiable. [step 1.1, L1]

3.1 Equivalently, at any $z$, the difference quotient is $1$ along nonzero real increments and $0$ along nonzero imaginary increments. These incompatible limits independently confirm step 2.1 and refute the claim. [step 2.1, given, algebra] ∎
