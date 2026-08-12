---
id: fs-vector-line-integrals-are-invariant-under-reversal
kind: false-statement
title: "False: vector line integrals are invariant under reversing a path"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-line-integrals-under-oriented-reparametrization, def-scalar-and-vector-line-integrals-along-piecewise-c1-paths, lem-integral-elementary-bounds]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, Proposition 9.2.15"
      url: "https://www.jirka.org/ra/html/sec_pathintegral.html"
pipeline_run: null
---

## Statement

For every continuous vector field $F$ and piecewise-$C^1$ path $\gamma$ on whose trace it is defined,
$$\int_{\gamma^-}F\cdot d\mathbf r=\int_\gamma F\cdot d\mathbf r.$$

## Facts & Assumptions
**Given:** The constant field $F=(1,0)$ and the segment $\gamma(t)=(t,0)$ on $[0,1]$.

[L1] On a $C^1$ path $\eta$, the vector line integral is the integral of $\langle F(\eta(t)),\eta'(t)\rangle$ ([[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]]).

[L2] An orientation-reversing reparametrization negates a vector line integral but leaves a scalar $ds$ integral unchanged ([[thm-line-integrals-under-oriented-reparametrization]]).

[L3] The integral of a constant $q$ on $[a,b]$ is $q(b-a)$ ([[lem-integral-elementary-bounds]]).



## Refutation

**Proof technique:** direct.

1.1 Since $\gamma'(t)=(1,0)$, [L1] and [L3] give $\int_\gamma F\cdot d\mathbf r=\int_0^1 1\,dt=1$. [given, L1, L3, algebra]

2.1 The reversal is orientation-reversing, so [L2] gives $\int_{\gamma^-}F\cdot d\mathbf r=-1$. [given, step 1.1, L2, algebra]

3.1 Since $-1\ne1$, the statement is false. The scalar analogue is true because [L2] says that $ds$ removes the orientation sign. [step 1.1, step 2.1, L2] ∎
