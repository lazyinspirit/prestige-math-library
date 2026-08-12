---
id: cex-the-same-trace-can-have-different-path-lengths
kind: counterexample
title: "Two paths can have the same trace and endpoints but different lengths: one traverses $[0,1]$ once and another traverses it forward, backward, and forward"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [cor-piecewise-c1-paths-have-additive-speed-integral-length, lem-integral-elementary-bounds]
justified_by: []
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Curve"
      url: "https://en.wikipedia.org/wiki/Curve"
pipeline_run: null
---

## Counterexample

Let $\gamma(t)=t$ on $[0,1]$. Let $\eta:[0,1]\to\mathbb R$ be the polygonal path with successive values $0,1,0,1$ at parameters $0,1/3,2/3,1$. Both traces are $[0,1]$, but

$$L(\gamma)=1,\qquad L(\eta)=3.$$

Thus length belongs to a parametrized path, not to its trace alone. The difference is caused by backtracking, which is excluded by monotone reparametrization invariance.

## Facts & Assumptions

**Given:** The paths $\gamma$ and $\eta$.

[L1] A continuous piecewise-$C^1$ path has length equal to the sum of the integrals of its speeds over the pieces ([[cor-piecewise-c1-paths-have-additive-speed-integral-length]]).

[L2] The integral of a constant $C$ on $[u,v]$ is $C(v-u)$ ([[lem-integral-elementary-bounds]]).

## Verification

**Proof technique:** computation.

1.1 The identity path has constant derivative and speed $1$, so [L1]--[L2] give $L(\gamma)=1$. [given, L1, L2, algebra]

1.2 On the three parameter thirds, $\eta$ has derivatives $3,-3,3$, hence speed $3$. Each speed integral is $3(1/3)=1$, so [L1]--[L2] give $L(\eta)=3$. [given, L1, L2, algebra]

2.1 Every value of either path lies in $[0,1]$, and each path traverses the whole segment, so their traces agree even though steps 1.1--1.2 give different lengths. [step 1.1, step 1.2] ∎
