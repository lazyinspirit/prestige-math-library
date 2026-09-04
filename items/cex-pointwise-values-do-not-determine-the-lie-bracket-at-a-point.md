---
id: cex-pointwise-values-do-not-determine-the-lie-bracket-at-a-point
kind: counterexample
title: "Two pairs of vector fields can agree at a point and still have different bracket values there"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
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

## Statement refuted

**False claim:** the value of $[X,Y]_p$ is determined solely by the point values
$X_p$ and $Y_p$.

## Facts & Assumptions

**Given:** On $\mathbb R$, the pairs $(X,Y)=(d/dx,x\,d/dx)$ and $(X',Y')=(d/dx,0)$ at the point $p=0$.

[L1] The Lie bracket has the coordinate formula on $\mathbb R$ ([[prop-coordinate-formula-for-the-lie-bracket]]).

## Counterexample

**Proof technique:** direct.

1.1 At $0$, both pairs have the same point values: $X_0=X'_0=d/dx|_0$ and $Y_0=Y'_0=0$. [given]

1.2 Using [L1], one computes $[X,Y]=d/dx$ and $[X',Y']=0$. Therefore $$ [X,Y]_0=d/dx|_0\neq 0=[X',Y']_0. $$ [L1, given]

2.1 Hence equal point values do not determine the Lie bracket value at a point, giving the required counterexample. [step 1.1, step 1.2] ∎
