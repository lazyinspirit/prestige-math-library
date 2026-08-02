---
id: lem-two-point-interpolation-in-a-separating-real-function-algebra
kind: lemma
title: "A unital separating real function algebra interpolates arbitrary values at two distinct points"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-unital-separating-real-function-algebra]
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "The Stone--Weierstrass Theorem and its Applications"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Gaddy.pdf"
pipeline_run: null
---

## Statement

If $A\subseteq C(K,\mathbb R)$ is unital and separates points, then for distinct $x,y\in K$ and reals $r,s$ there is $g\in A$ with $g(x)=r$ and $g(y)=s$.

## Facts & Assumptions

**Given:** Distinct $x,y\in K$ and $r,s\in\mathbb R$.

[L1] Separation gives $h\in A$ with $h(x)\ne h(y)$; constants and affine combinations of members of $A$ remain in $A$ ([[def-unital-separating-real-function-algebra]]).

## Proof

**Proof technique:** constructive.

1.1 Choose $h$ from [L1] and put $g(z)=r+(s-r)(h(z)-h(x))/(h(y)-h(x))$. [L1, construct]

2.1 The denominator is nonzero, $g\in A$, and direct substitution gives $g(x)=r$ and $g(y)=s$. [step 1.1, L1, algebra, discharge-construct] ∎
