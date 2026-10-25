---
id: prop-the-top-exterior-power-is-one-dimensional
kind: proposition
title: "The top exterior power is one-dimensional"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-exterior-power-duality-pairing,
       cor-dimension-of-the-kth-exterior-power-is-binomial]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2019).pdf"
---

## Statement

If $V$ is a finite-dimensional real vector space with $\dim V=n$, then
$\bigwedge^nV$ and $\bigwedge^nV^*$ are one-dimensional.

## Facts & Assumptions

**Given:** A finite-dimensional real vector space $V$ with $\dim V=n$.

[L1] The dimension formula gives $\dim\operatorname{Alt}^n(V)=\binom{n}{n}=1$ ([[cor-dimension-of-the-kth-exterior-power-is-binomial]]).

[L2] The pairing between $\bigwedge^nV^*$ and $\bigwedge^nV$ is nondegenerate ([[prop-exterior-power-duality-pairing]]).

## Proof
**Proof technique:** direct.

1.1 By [L1], the space $\bigwedge^nV^*=\operatorname{Alt}^n(V)$ is one-dimensional. [L1, given]

2.1 Since $\bigwedge^nV$ is the dual of $\bigwedge^nV^*$ by definition, or equivalently because [L2] identifies it with the dual through a nondegenerate pairing, it has the same dimension. Hence $\dim\bigwedge^nV=1$. [L2, step 1.1, algebra]

3.1 Therefore both top exterior powers are one-dimensional. [step 1.1, step 2.1] ∎
