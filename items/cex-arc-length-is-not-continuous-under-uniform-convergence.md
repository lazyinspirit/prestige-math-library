---
id: cex-arc-length-is-not-continuous-under-uniform-convergence
kind: counterexample
title: "Sawtooth paths converge uniformly to a line segment while every sawtooth has length $\\sqrt2$ and the limit has length $1$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-piecewise-c1-paths-have-additive-speed-integral-length, lem-integral-elementary-bounds, thm-arc-length-is-lower-semicontinuous-under-uniform-convergence, cor-archimedean-reciprocal]
justified_by: []
aliases: []
landmark: true
proof_strategy: construction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Denzler, Calculus of Variations, Section 4.7"
      url: "https://web.math.utk.edu/~denzler/M534-Sp2014/CalVar.pdf"
pipeline_run: null
---

## Counterexample

For each integer $k\ge1$, let $\gamma_k:[0,1]\to\mathbb R^2$ be the polygonal path through

$$p_{k,j}=\left(\frac{j}{2k},\frac{1-(-1)^j}{4k}\right),\qquad 0\le j\le2k,$$

at the corresponding parameters $j/(2k)$. Then $\gamma_k$ converges uniformly to $\gamma(t)=(t,0)$, but

$$L(\gamma_k)=\sqrt2\quad\text{for every }k,\qquad L(\gamma)=1.$$

## Facts & Assumptions

**Given:** The zigzag paths above.

[L1] A continuous piecewise-$C^1$ path has length equal to the sum of the integrals of its speeds over the pieces ([[cor-piecewise-c1-paths-have-additive-speed-integral-length]]).

[L2] The integral of a constant $C$ on $[u,v]$ is $C(v-u)$ ([[lem-integral-elementary-bounds]]).

[L3] The sequence $1/k$ of real numbers tends to zero ([[cor-archimedean-reciprocal]]).

[L4] Uniform convergence guarantees only $L(\gamma)\le\liminf L(\gamma_k)$ ([[thm-arc-length-is-lower-semicontinuous-under-uniform-convergence]]).

## Verification

**Proof technique:** construction.

1.1 Every $\gamma_k(t)$ has first coordinate $t$ and second coordinate between $0$ and $1/(2k)$, so $\sup_t\lVert\gamma_k(t)-\gamma(t)\rVert_2\le1/(2k)\to0$ by [L3]. [given, L3]

1.2 On each of the $2k$ parameter intervals, $\gamma_k$ has derivative $(1,1)$ or $(1,-1)$ and hence constant speed $\sqrt2$. By [L1]--[L2], each piece contributes $\sqrt2/(2k)$ and $L(\gamma_k)=\sqrt2$. [given, L1, L2, algebra]

1.3 The limit path has constant derivative $(1,0)$ and speed $1$, so [L1]--[L2] give $L(\gamma)=1$. [given, L1, L2, algebra]

2.1 Thus lengths do not converge to the length of the uniform limit. The valid inequality [L4] reads $1\le\sqrt2$, as expected. [step 1.1, step 1.2, step 1.3, L4] ∎
