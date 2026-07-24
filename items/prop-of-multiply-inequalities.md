---
id: prop-of-multiply-inequalities
kind: proposition
title: "Multiplying inequalities of positives"
status: published
origin: session
deps: [def-ordered-field, lem-of-sign-rules]
aliases: []
landmark: false
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Calculus_(Spivak)"
pipeline_run: null
proof_strategy: direct
---

## Statement

Let $F$ be an ordered field. If $0 < a < b$ and $0 < c < d$ then $ac < bd$. If $0 \le a \le b$ and $0 \le c \le d$ then $ac \le bd$.

## Facts & Assumptions

**Given:** Elements $a, b, c, d$ of an ordered field $F$.

[L1] For a positive multiplier $c > 0$: $x < y \iff xc < yc$; multiplying a strict inequality by a positive element preserves it ([[lem-of-sign-rules]]).

[L2] For $c \ge 0$: $x \le y \Rightarrow xc \le yc$; the case $c > 0$ is [L1] and the case $c = 0$ gives $0 \le 0$ ([[lem-of-sign-rules]]).

[L3] The order is transitive: if $x < y$ and $y < z$ then $x < z$, and likewise for $\le$, since the positive cone is closed under addition ([[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Assume $0 < a < b$ and $0 < c < d$; since $c > 0$, scaling $a < b$ by $c$ gives $ac < bc$. [L1]

1.2 Since $b > 0$ (from $0 < a < b$), scaling $c < d$ by $b$ gives $bc < bd$. [L1]

1.3 Assume instead $0 \le a \le b$ and $0 \le c \le d$; since $c \ge 0$, from $a \le b$ we get $ac \le bc$. [L2]

1.4 Since $b \ge 0$ (from $0 \le a \le b$), from $c \le d$ we get $bc \le bd$. [L2]

2.1 By transitivity, $ac < bc < bd$, hence $ac < bd$, proving the strict claim. [L3, step 1.1, step 1.2]

2.2 By transitivity of $\le$, $ac \le bc \le bd$, hence $ac \le bd$, proving the nonstrict claim. [L3, step 1.3, step 1.4]

3.1 Both the strict and the nonstrict inequalities hold. [step 2.1, step 2.2] ∎
