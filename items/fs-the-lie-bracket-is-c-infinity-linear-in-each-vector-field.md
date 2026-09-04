---
id: fs-the-lie-bracket-is-c-infinity-linear-in-each-vector-field
kind: false-statement
title: "FALSE: the Lie bracket is C^infty-linear in each vector-field entry"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-leibniz-rules-for-the-lie-bracket-with-function-multiples]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

**False claim:** the Lie bracket is $C^\infty(M)$-linear in each vector-field
entry.

## Facts & Assumptions

**Given:** On $M=\mathbb R$, the smooth vector fields $X=Y=d/dx$ and the smooth function $f(x)=x$.

[L1] The Lie bracket satisfies $$ [X,fY]=f[X,Y]+(Xf)Y $$ ([[prop-leibniz-rules-for-the-lie-bracket-with-function-multiples]]).

## Refutation

**Proof technique:** direct.

1.1 If the Lie bracket were $C^\infty(M)$-linear in the second entry, one would have $[X,fY]=f[X,Y]$ for every smooth function $f$. [given]

2.1 For the chosen $X$ and $Y$, one has $[X,Y]=0$, so step 1.1 would give $[X,fY]=0$. But [L1] gives $$ [X,fY]=f[X,Y]+(Xf)Y=0+1\cdot Y=Y\neq 0. $$ [L1, step 1.1, given]

3.1 This contradiction shows that the Lie bracket is not even $C^\infty(M)$-linear in its second vector-field entry, so the claim that it is $C^\infty(M)$-linear in each vector-field entry is false. [step 1.1, step 2.1, discharge-contradiction] ∎
