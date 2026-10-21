---
id: lem-negative-root-power-is-convex
kind: lemma
title: "The negative reciprocal-power function is convex"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-real-power
  - thm-real-power-continuity-and-derivatives
  - thm-real-power-laws
  - thm-monotonicity-from-the-derivative
  - cor-second-derivative-characterises-convexity
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-20}}
sources:
  references:
    - title: "J. Lebl, Basic Analysis, Section 5.4, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
---

## Statement

For every real $s\ge1$, the function $\varphi_s:[0,\infty)\to\mathbb R$ defined by $\varphi_s(t)=-t^{1/s}$, with $0^{1/s}=0$, is convex.

## Statement references

[[def-real-power]]: defines positive-base real powers and the zero-power convention used here.

## Facts & Assumptions

**Given:** A real number $s\ge1$ and the stated real-power convention.

[F1] For $t>0$ and real $\alpha$, $t^\alpha$ is continuous and differentiable with derivative $\alpha t^{\alpha-1}$. [[thm-real-power-continuity-and-derivatives]]

[F2] A twice differentiable function on an open interval with nonnegative second derivative is convex there. [[cor-second-derivative-characterises-convexity]]

[F3] For positive real $t$ and $\alpha>0$, $t^\alpha=\exp(\alpha\log t)$, and $0^\alpha=0$. [[def-real-power]]

[F4] Positive-base real powers satisfy $(a^r)^s=a^{rs}$. [[thm-real-power-laws]]

[F5] A differentiable function with nonnegative derivative on an interval is nondecreasing there. [[thm-monotonicity-from-the-derivative]]

## Proof

1.1 Put $\alpha=1/s$, so $0<\alpha\le1$. If $\alpha=1$, then $\varphi_s(t)=-t$ is affine and hence convex. If $0<\alpha<1$, on $(0,\infty)$ the derivative formula [F1] gives $\varphi_s''(t)=\alpha(1-\alpha)t^{\alpha-2}\ge0$. Thus [F2] makes $\varphi_s$ convex on $(0,\infty)$. [F1, F2, given, algebra]

2.1 In the second case $t^\alpha\to0$ as $t\downarrow0$. Indeed, for $\varepsilon>0$ put $\delta=\varepsilon^{1/\alpha}$. The derivative $\alpha t^{\alpha-1}$ is positive on $(0,\infty)$, so [F5] makes $t\mapsto t^\alpha$ increasing there; if $0<t<\delta$, then $t^\alpha<\delta^\alpha=\varepsilon$ by [F4]. Thus $\varphi_s$ is continuous at zero with the stated value. For $a,b\ge0$ and $0\le\lambda\le1$, apply the convexity inequality on $(0,\infty)$ to $a+\varepsilon$ and $b+\varepsilon$, then let $\varepsilon\downarrow0$; continuity at zero and on positive inputs gives the inequality on $[0,\infty)$. In the affine case the same inequality holds directly. [F3, F4, F5, step 1.1, algebra] ∎

## Source notes

This elementary lemma is derived locally from the published positive-real-power derivative and second-derivative convexity suppliers cited in its facts; no external source claim is imported.
