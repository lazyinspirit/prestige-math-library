---
id: cex-one-subdivision-depth-does-not-make-all-singular-simplices-cover-small
kind: counterexample
title: "No uniform subdivision depth for all singular simplices"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cover-small-singular-chain-subcomplex, lem-every-finite-singular-chain-becomes-cover-small-after-enough-subdivision]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Proposition 2.21"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
pipeline_run: frontier-31a
---

## Statement refuted

For a fixed nontrivial two-open cover of $[0,1]$ and integer coefficients, no
single integer $r$ makes $S^r\sigma$ cover-small for every singular
$1$-simplex $\sigma$ taken with coefficient $1$.

## Counterexample

**Given:** A proposed depth $r$ and overlapping proper open intervals $U,V$ covering $[0,1]$.

**Proof technique:** direct.

1.1 Choose $a\in U\setminus V$ and $b\in V\setminus U$. On each of the $2^r$ dyadic subintervals of the parameter interval, define $\sigma$ linearly from $a$ to $b$ or from $b$ to $a$, alternating orientations so the pieces join continuously. [given, construct]

2.1 Every singular $1$-simplex occurring in $S^r\sigma$ has image containing both $a$ and $b$, hence lies in neither $U$ nor $V$. In degree one all these subdivision summands have coefficient $+1$ over $\mathbb Z$; coincident summands add rather than cancel. Thus a non-small term survives and $S^r\sigma$ is not cover-small, disproving uniformity. [step 1.1, algebra] ∎
