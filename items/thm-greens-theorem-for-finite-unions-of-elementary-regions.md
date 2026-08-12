---
id: thm-greens-theorem-for-finite-unions-of-elementary-regions
kind: theorem
title: "Green's theorem for finite unions of elementary regions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-type-i-type-ii-and-elementary-green-regions, def-scalar-and-vector-line-integrals-along-piecewise-c1-paths, lem-green-type-i-boundary-identity, lem-green-type-ii-boundary-identity, lem-green-boundary-cancellation-under-finite-gluing]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, Theorem 10.6.1"
      url: "https://www.jirka.org/ra/html/sec_mvgreenstheorem.html"
pipeline_run: null
---

## Statement

Let $D=D_1\cup\cdots\cup D_N$ be a finite elementary Green region with its supplied decomposition, and orient $\partial D$ positively. If $P,Q$ are $C^1$ on an open neighbourhood of $D$, then

$$\int_{\partial D}P\,dx+Q\,dy=\iint_D\left(\partial_xQ-\partial_yP\right)dA.$$

## Facts & Assumptions
**Given:** The finite elementary Green region, decomposition, orientation, and functions in the Statement.

[L1] Every elementary piece has both a Type I and a Type II description ([[def-type-i-type-ii-and-elementary-green-regions]]).

[L2] On a Type I piece, $\int_{\partial D_\ell}P\,dx=-\iint_{D_\ell}\partial_yP\,dA$ ([[lem-green-type-i-boundary-identity]]).

[L3] On a Type II piece, $\int_{\partial D_\ell}Q\,dy=\iint_{D_\ell}\partial_xQ\,dA$ ([[lem-green-type-ii-boundary-identity]]).

[L4] Boundary integrals and integrals of a continuous scalar field add from the pieces to the union, with shared arcs cancelling ([[lem-green-boundary-cancellation-under-finite-gluing]]).

[L5] The vector line integral for the field $(P,Q)$ is $\int P\,dx+Q\,dy$ ([[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]]).



## Proof

**Proof technique:** direct.

1.1 Fix a piece $D_\ell$. By [L1], [L2], and [L3], adding its Type I and Type II identities gives $$\int_{\partial D_\ell}P\,dx+Q\,dy =\iint_{D_\ell}(\partial_xQ-\partial_yP)\,dA.$$ [given, L1, L2, L3, algebra]

2.1 Sum step 1.1 over the nonempty finite decomposition. Apply both clauses of [L4] to replace the sums by the boundary and region integrals over $D$; [L5] identifies the boundary integrand. This is the displayed Green identity. [step 1.1, L4, L5, algebra]

3.1 The case $N=1$ is included in step 2.1 with no internal cancellation. The proof uses the supplied elementary decomposition and makes no assertion for an arbitrary Jordan domain. [given, step 2.1, L1] ∎
