---
id: prop-euler-characteristic-is-additive-for-finite-cw-pairs
kind: proposition
title: Euler characteristic is additive for finite CW pairs
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-euler-characteristic-of-a-finite-cw-complex, def-skeleta-cw-subcomplex-and-relative-cw-complex]
proof_strategy: direct
verification: {precheck: pass}
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology, Section 2.2
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
---

## Statement

For a finite CW pair $(X,A)$, $\chi(X)=\chi(A)+\sum_n(-1)^n\#\{n\text{-cells of }X\setminus A\}$. If $A\ne\varnothing$, then $\chi(X/A)=\chi(X)-\chi(A)+1$.

## Facts & Assumptions

**Given:** A finite CW subcomplex $A\subseteq X$.

## Proof

**Proof technique:** direct.

1.1 The cells of $X$ are the disjoint union of the cells of $A$ and those outside $A$, so the first equality follows by splitting the finite alternating sum. [given]

2.1 If $A$ is nonempty, $X/A$ has one new $0$-cell (the quotient point) and exactly the cells outside $A$ otherwise; its alternating count gives the second formula. [step 1.1] ∎
