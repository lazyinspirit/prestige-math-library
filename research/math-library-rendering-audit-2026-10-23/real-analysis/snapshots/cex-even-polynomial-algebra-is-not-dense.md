---
id: cex-even-polynomial-algebra-is-not-dense
kind: counterexample
title: "Even polynomials on $[-1,1]$ form a unital algebra but are not dense because they do not separate $-1$ and $1$"
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

Refuted: a unital real function algebra on a compact space is dense without the point-separation hypothesis.

## Facts & Assumptions
**Given:** $A$ is the algebra of even polynomials restricted to $[-1,1]$.

[L1] A unital separating real function algebra has the properties in [[def-unital-separating-real-function-algebra]].

## Proof

**Proof technique:** direct.

1.1 The constants belong to $A$, and sums and products of even polynomials are even, so $A$ is a unital algebra. [given, L1, algebra]

1.2 Every $p\in A$ has $p(-1)=p(1)$; therefore $A$ does not separate these two points. [given, L1, algebra]

2.1 If $p\in A$, then $\max\{|p(-1)+1|,|p(1)-1|\}\ge1$, so $\lVert p-\operatorname{id}\rVert_\infty\ge1$. [step 1.2, algebra]

3.1 Hence the identity function is not in the closure of $A$, and $A$ is not dense. [step 2.1, algebra] ∎
