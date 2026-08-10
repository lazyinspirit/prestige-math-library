---
id: ex-xk-abs-x-smoothness-threshold
kind: example
title: "For every $k\\ge0$, $x^k|x|$ is $C^k$ but not $C^{k+1}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-higher-derivatives-and-smoothness, lem-derivative-of-a-power, def-abs-value, def-integer-power, def-canonical-natural]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 lecture notes"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/"
pipeline_run: null
---

## Example

For $k\in\mathbb N$, the function $f_k(x)=x^k|x|$ is $C^k$ on $\mathbb R$ but not $C^{k+1}$.

## Facts & Assumptions

**Given:** $f_k(x)=x^k|x|$.

[L1] Absolute value is piecewise $x$ and $-x$ ([[def-abs-value]]), and powers differentiate by [[lem-derivative-of-a-power]].

## Verification

**Proof technique:** cases.

1.1 On $x>0$, $f_k=x^{k+1}$; on $x<0$, $f_k=-x^{k+1}$.  [assume-case positive, L1]

2.1 Differentiating $j\le k$ times gives constant multiples of $x^{k+1-j}$ with opposite signs, and both one-sided values tend to $0$. Defining the derivative value at $0$ by the difference quotient gives matching continuous derivatives through order $k$.  [step 1.1, assume-case throughk, L1]

2.2 The $(k+1)$-st one-sided derivatives are $(k+1)!$ and $-(k+1)!$, so that derivative does not exist at $0$.  [assume-case nextorder, step 1.1, L1]

3.1 Hence $f_k\in C^k\setminus C^{k+1}$ according to [[def-higher-derivatives-and-smoothness]].  [step 2.1, step 2.2, cases-exhaustive] ∎
