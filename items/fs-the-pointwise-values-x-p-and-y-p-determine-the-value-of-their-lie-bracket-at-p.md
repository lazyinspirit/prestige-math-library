---
id: fs-the-pointwise-values-x-p-and-y-p-determine-the-value-of-their-lie-bracket-at-p
kind: false-statement
title: "FALSE: the point values X_p and Y_p determine the bracket value [X,Y]_p"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-lie-bracket-of-smooth-vector-fields]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-10-maintenance-receipts.jsonl (fs-the-pointwise-values-x-p-and-y-p-determine-the-value-of-their-lie-bracket-at-p). No independent judge or whole-closure certification.
    delegated_by: owner
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

[L1] The Lie bracket acts on smooth functions by the commutator $[X,Y]h=X(Yh)-Y(Xh)$ ([[def-lie-bracket-of-smooth-vector-fields]]).

## Refutation

**Proof technique:** direct.

1.1 At $p=0$, both pairs have the same point values: $X_0=X'_0=d/dx|_0$ and $Y_0=Y'_0=0$. [given]

1.2 For every smooth $h:\mathbb R\to\mathbb R$, [L1] gives $[X,Y]h=(xh')'-xh''=h'$, while $[X',Y']h=0$. Thus $$ [X,Y]_0=d/dx|_0\neq 0=[X',Y']_0. $$ [L1, given, algebra]

2.1 Therefore the point values $X_p$ and $Y_p$ do not determine the bracket value at $p$. [step 1.1, step 1.2] ∎
