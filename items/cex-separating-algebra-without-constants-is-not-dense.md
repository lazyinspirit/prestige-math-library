---
id: cex-separating-algebra-without-constants-is-not-dense
kind: counterexample
title: "Polynomials vanishing at zero separate points of $[0,1]$ but are not dense in $C([0,1])$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-real-stone-weierstrass-for-compact-metric-spaces, def-unital-separating-real-function-algebra]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Stone-Weierstrass Theorem (University of Chicago)"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Gaddy.pdf"
pipeline_run: null
---

## Statement refuted

Refuted: point separation alone makes a real function algebra dense in $C([0,1])$.

## Facts & Assumptions
**Given:** $A=\{p\in\mathbb R[x]:p(0)=0\}$, restricted to $[0,1]$.

[L1] Point separation and the unital condition are distinct requirements in [[def-unital-separating-real-function-algebra]].

## Proof

**Proof technique:** direct.

1.1 The set $A$ is an algebra, and the function $x\mapsto x$ in $A$ separates every distinct pair of points of $[0,1]$. [given, L1, algebra]

1.2 Every $p\in A$ vanishes at $0$, so $A$ contains no constant-one function and is not unital. [given, L1, algebra]

2.1 For every $p\in A$, $\lVert p-\mathbf1\rVert_\infty\ge|p(0)-1|=1$. Thus $\mathbf1$ is not in the uniform closure of $A$. [step 1.2, algebra]

3.1 Therefore $A$ separates points but is not dense. [step 1.1, step 2.1, algebra] ∎
