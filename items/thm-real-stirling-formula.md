---
id: thm-real-stirling-formula
kind: theorem
title: 'Stirling''s formula for factorials'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-stirling-formula-up-to-a-positive-constant, lem-stirling-constant-from-wallis]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 7 §6"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
pipeline_run: null
---

## Statement

$n!\sim\sqrt{2\pi n}(n/e)^n$ as the positive integer $n$ tends to infinity.

Equivalently,

$$\frac{n!}{\sqrt{2\pi n}(n/e)^n}\longrightarrow1\qquad(n\to\infty,\ n\ge1).$$

## Facts & Assumptions

**Given:** Positive integer $n$ tending to infinity.

[F1] There is a constant $C>0$ such that $n!\sim C\sqrt n(n/e)^n$ ([[lem-stirling-formula-up-to-a-positive-constant]]).

[F2] The constant $C$ in that asymptotic is $\sqrt{2\pi}$ ([[lem-stirling-constant-from-wallis]]).

## Proof

**Proof technique:** direct.

1.1 Insert [F2] into [F1] and combine $\sqrt{2\pi}\sqrt n=\sqrt{2\pi n}$. [F1, F2, algebra]

2.1 By the definition of asymptotic equivalence, step 1.1 is exactly the displayed ratio limit. The restriction $n\ge1$ keeps its denominator positive. [step 1.1] ∎
