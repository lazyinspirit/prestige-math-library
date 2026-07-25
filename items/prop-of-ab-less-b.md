---
id: prop-of-ab-less-b
kind: proposition
title: "When $ab < b$ for positive $a, b$"
status: published
origin: session
deps: [def-ordered-field, lem-of-sign-rules, lem-of-mult-neg]
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
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
pipeline_run: null
proof_strategy: direct
---

## Statement

Let $F$ be an ordered field and let $a, b \in F$ with $a > 0$ and $b > 0$. Then:

$$0 < ab < b \iff 0 < a < 1.$$

## Facts & Assumptions

**Given:** Elements $a, b$ of an ordered field $F$ with $a > 0$ and $b > 0$.

[L1] If $x > 0$ and $y > 0$ then $xy > 0$: the positive cone is closed under multiplication ([[def-ordered-field]]).

[L2] $x < y \iff x - y < 0 \iff y - x > 0$ ([[def-ordered-field]]).

[L3] For $b > 0$: $bz < 0 \iff z < 0$; the sign of $bz$ equals the sign of $z$ ([[lem-of-sign-rules]]).

[L4] By distributivity and $b \cdot (-1) = -b$, one has $ab - b = b(a - 1)$ ([[lem-of-mult-neg]]).

## Proof

**Proof technique:** direct.

1.1 Since $a > 0$ and $b > 0$, [L1] gives $ab > 0$. [L1]

1.2 By [L4], $ab - b = b(a - 1)$. [L4]

2.1 By [L2], $ab < b \iff ab - b < 0$, and by step 1.2 this is $b(a - 1) < 0$. [L2, step 1.2]

2.2 By [L3] with $z = a - 1$, we have $b(a - 1) < 0 \iff a - 1 < 0$, and by [L2] this is $a < 1$. [L3, L2, step 1.2]

3.1 Chaining, $ab < b \iff a < 1$; since $a > 0$ is given and $ab > 0$ by step 1.1, this is exactly $0 < ab < b \iff 0 < a < 1$. [given, step 1.1, step 2.1, step 2.2] ∎
