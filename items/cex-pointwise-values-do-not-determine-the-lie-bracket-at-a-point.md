---
id: cex-pointwise-values-do-not-determine-the-lie-bracket-at-a-point
kind: counterexample
title: "Two pairs of vector fields can agree at a point and still have different bracket values there"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
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
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-10-maintenance-receipts.jsonl (cex-pointwise-values-do-not-determine-the-lie-bracket-at-a-point). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement refuted

**False claim:** the value of $[X,Y]_p$ is determined solely by the point values
$X_p$ and $Y_p$.

## Facts & Assumptions

**Given:** On $\mathbb R$, the pairs $(X,Y)=(d/dx,x\,d/dx)$ and $(X',Y')=(d/dx,0)$ at the point $p=0$.

[L1] The Lie bracket is the commutator of vector-field actions on smooth functions ([[def-lie-bracket-of-smooth-vector-fields]]).

## Counterexample

**Proof technique:** direct.

1.1 At $0$, both pairs have the same point values: $X_0=X'_0=d/dx|_0$ and $Y_0=Y'_0=0$. [given]

1.2 For every smooth $h:\mathbb R\to\mathbb R$, [L1] gives $[X,Y]h=(xh')'-x h''=h'$ and $[X',Y']h=0$. Thus $[X,Y]=d/dx$ and $[X',Y']=0$, whence $$ [X,Y]_0=d/dx|_0\neq 0=[X',Y']_0. $$ [L1, given, algebra]

2.1 Hence equal point values do not determine the Lie bracket value at a point, giving the required counterexample. [step 1.1, step 1.2] ∎
