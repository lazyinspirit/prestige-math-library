---
id: thm-euler-gamma-function-is-holomorphic
kind: theorem
title: "Euler's Gamma function is holomorphic on the right half-plane"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-gamma-integral-converges-locally-uniformly,
       thm-holomorphic-parameter-riemann-integral,
       thm-weierstrass-convergence-holomorphic-functions]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 6 §1(iii)"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
    - title: "M. Weber, Complex Analysis, §3.7"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Statement

Euler's Gamma function is holomorphic on the half-plane
$\operatorname{Re}z>0$.

## Facts & Assumptions

**Given:** The Gamma integral on the right half-plane.

[L1] The Gamma integral converges locally uniformly on the right half-plane ([[lem-gamma-integral-converges-locally-uniformly]]).

[L2] A jointly continuous finite-interval parameter integral of holomorphic functions is holomorphic ([[thm-holomorphic-parameter-riemann-integral]]).

[L3] A locally uniform limit of holomorphic functions is holomorphic ([[thm-weierstrass-convergence-holomorphic-functions]]).

## Proof

**Proof technique:** direct.

1.1 For $n\ge1$, define $$\Gamma_n(z):=\int_{1/n}^{n} t^{z-1}e^{-t}\,dt.$$ The integrand is jointly continuous in $(t,z)$ on $[1/n,n]\times\{z:\operatorname{Re}z>0\}$ and holomorphic in $z$ for each fixed $t>0$, so [L2] makes $\Gamma_n$ holomorphic on the right half-plane. [given, L2]

2.1 By [L1], on every compact subset of the right half-plane the functions $\Gamma_n$ converge uniformly to $\Gamma$. Therefore [L3] makes $\Gamma$ holomorphic on $\operatorname{Re}z>0$. [step 1.1, L1, L3] ∎
