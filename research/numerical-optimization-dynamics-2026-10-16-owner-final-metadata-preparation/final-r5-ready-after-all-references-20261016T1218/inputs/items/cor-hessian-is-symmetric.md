---
id: cor-hessian-is-symmetric
kind: corollary
title: "The Hessian of a $C^2$ scalar field is symmetric"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-clairaut-schwarz-mixed-partials, def-hessian-and-euclidean-critical-point]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Mixed partial derivatives (Eremenko)"
      url: "https://www.math.purdue.edu/~eremenko/dvi/mixedpartial.pdf"
pipeline_run: null
---

## Statement

For a $C^2$ scalar field $f$, $H_f(a)^T=H_f(a)$ at every point $a$.

## Facts & Assumptions

**Given:** A $C^2$ scalar field $f$ and a point $a$.

[L1] The $(i,j)$ entry of the Hessian is $\partial_i\partial_j f(a)$ ([[def-hessian-and-euclidean-critical-point]]).

[L2] Continuous second partial derivatives commute ([[thm-clairaut-schwarz-mixed-partials]]).

## Proof

**Proof technique:** direct.

1.1 For every $i,j$, [L1] and [L2] give $(H_f(a))_{ij}=\partial_j\partial_i f(a)=(H_f(a))_{ji}$. [L1, L2]

2.1 Entrywise equality with the transpose proves symmetry. [step 1.1, algebra] ∎
