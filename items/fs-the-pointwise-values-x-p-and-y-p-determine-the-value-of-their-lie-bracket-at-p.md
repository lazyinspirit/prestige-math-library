---
id: fs-the-pointwise-values-x-p-and-y-p-determine-the-value-of-their-lie-bracket-at-p
kind: false-statement
title: "FALSE: the point values X_p and Y_p determine the bracket value [X,Y]_p"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-coordinate-formula-for-the-lie-bracket]
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

**False claim:** if two pairs of vector fields agree pointwise at $p$, then they
have the same Lie bracket value at $p$.

## Facts & Assumptions

**Given:** On $\mathbb R$, the pairs $(X,Y)=(d/dx,x\,d/dx)$ and $(X',Y')=(d/dx,0)$ at the point $p=0$.

[L1] The Lie bracket has the coordinate formula $$ [X,Y]^1=X^1\partial_xY^1-Y^1\partial_xX^1 $$ on $\mathbb R$ ([[prop-coordinate-formula-for-the-lie-bracket]]).

## Refutation

**Proof technique:** direct.

1.1 At $p=0$, both pairs have the same point values: $X_0=X'_0=d/dx|_0$ and $Y_0=Y'_0=0$. [given]

1.2 Applying [L1] to $(X,Y)$ gives $[X,Y]=d/dx$, while applying it to $(X',Y')$ gives $[X',Y']=0$. Thus $$ [X,Y]_0=d/dx|_0\neq 0=[X',Y']_0. $$ [L1, given]

2.1 Therefore the point values $X_p$ and $Y_p$ do not determine the bracket value at $p$. [step 1.1, step 1.2] ∎
