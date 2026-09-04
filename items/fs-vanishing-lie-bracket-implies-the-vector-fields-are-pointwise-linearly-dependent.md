---
id: fs-vanishing-lie-bracket-implies-the-vector-fields-are-pointwise-linearly-dependent
kind: false-statement
title: "FALSE: a vanishing Lie bracket forces the vector fields to be pointwise linearly dependent"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-coordinate-vector-fields-commute]
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
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

**False claim:** if $[X,Y]=0$, then $X_p$ and $Y_p$ are linearly dependent for
every $p$.

## Facts & Assumptions

**Given:** On $\mathbb R^2$, the coordinate vector fields $X=\partial/\partial x$ and $Y=\partial/\partial y$.

[L1] Coordinate vector fields commute ([[prop-coordinate-vector-fields-commute]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], one has $[X,Y]=0$. [L1, given]

1.2 At every point of $\mathbb R^2$, the vectors $\partial/\partial x$ and $\partial/\partial y$ are linearly independent. [given]

2.1 Thus vanishing Lie bracket does not force pointwise linear dependence. [step 1.1, step 1.2] ∎
