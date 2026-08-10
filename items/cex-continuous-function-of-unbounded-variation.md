---
id: cex-continuous-function-of-unbounded-variation
kind: counterexample
title: "A continuous function on $[0,1]$ can have unbounded variation"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [def-metric-bounded-diameter, lem-distance-to-set-is-lipschitz,
       lem-real-line-is-a-metric-space, lem-real-and-metric-notions-agree,
       def-integers, lem-integer-part, thm-algebra-of-function-limits,
       def-continuity-real, lem-of-abs-value,
       def-bounded-variation-and-total-variation,
       def-partition-and-refinement, thm-p-series-rational]
justified_by: []
aliases: []
landmark: false
proof_strategy: construction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Section 3.2"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Example

Let $d(t,\mathbb Z)=\inf_{k\in\mathbb Z}|t-k|$ and define
$$f(0)=0,\qquad f(x)=x,d(1/x,\mathbb Z)\quad(0<x\le1).$$
Then $f$ is continuous on $[0,1]$ but has unbounded variation.

## Facts & Assumptions

**Given:** The displayed function $f$.

[L1] Distance to a nonempty set is $1$-Lipschitz ([[lem-distance-to-set-is-lipschitz]]).

[L2] The integer-part property implies $0\le d(t,\mathbb Z)\le1/2$, with value zero at integers and $1/2$ at half-integers ([[lem-integer-part]], [[def-integers]]).

[L3] The harmonic series diverges ([[thm-p-series-rational]] at exponent $1$).

## Verification

**Proof technique:** construction.

1.1 By [L1] and the algebra of limits, $f$ is continuous for $x>0$. By [L2], $|f(x)|\le x/2$, so $f(x)\to0=f(0)$ as $x\downarrow0$. Hence $f$ is continuous on $[0,1]$. [L1, L2]

1.2 For every integer $n\ge1$, $f(1/n)=0$, while [given]
$$f\left(\frac1{n+1/2}\right)=\frac1{2n+1}.$$
The ordered partition containing these alternating zeros and peaks for $1\le n\le N$ therefore has variation sum at least $2\sum_{n=1}^N(2n+1)^{-1}$, apart from at most one endpoint term. [L2]

2.1 Since $(2n+1)^{-1}\ge(3n)^{-1}$ and the harmonic partial sums are unbounded by [L3], the variation sums in step 1.2 are unbounded. Thus the continuous function $f$ is not BV. [L3, step 1.2] ∎
