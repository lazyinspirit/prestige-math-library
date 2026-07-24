---
id: prop-of-reciprocal-order
kind: proposition
title: "Reciprocals and order: $1/r$ against $1$"
status: published
origin: session
deps: [lem-of-inverse-positive, cor-of-one-positive, def-field]
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

Let $F$ be an ordered field and let $r \in F$ with $r > 0$. Then:

$$0 < r < 1 \iff \tfrac{1}{r} > 1, \qquad r > 1 \iff 0 < \tfrac{1}{r} < 1, \qquad r = 1 \iff \tfrac{1}{r} = 1.$$

Here $\tfrac{1}{r}$ denotes the multiplicative inverse $r^{-1}$.

## Facts & Assumptions

**Given:** An element $r > 0$ of an ordered field $F$.

[L1] If $x > 0$ then $x^{-1} > 0$ ([[lem-of-inverse-positive]]).

[L2] If $0 < x < y$ then $0 < y^{-1} < x^{-1}$: the reciprocal reverses order on the positives ([[lem-of-inverse-positive]]).

[L3] $0 < 1$ ([[cor-of-one-positive]]).

[L4] In any field, $1^{-1} = 1$ and $(x^{-1})^{-1} = x$ for $x \ne 0$ ([[def-field]]).

## Proof

**Proof technique:** direct.

1.1 Since $r > 0$, [L1] gives $r^{-1} > 0$, so $\tfrac{1}{r}$ is positive throughout. [L1]

1.2 In particular $1^{-1} = 1$ and $(r^{-1})^{-1} = r$ by uniqueness of inverses. [L4]

2.1 If $0 < r < 1$, applying [L2] to $0 < r < 1$ gives $0 < 1^{-1} < r^{-1}$, that is $1 < \tfrac{1}{r}$. [L2, step 1.2]

2.2 Conversely, if $\tfrac{1}{r} > 1$, then $0 < 1 < \tfrac{1}{r}$ by [L3], and applying [L2] gives $0 < (r^{-1})^{-1} < 1^{-1}$, that is $0 < r < 1$. [L2, L3, step 1.2]

2.3 If $r > 1$, then $0 < 1 < r$ by [L3], and applying [L2] gives $0 < r^{-1} < 1^{-1}$, that is $0 < \tfrac{1}{r} < 1$. [L2, L3, step 1.2]

2.4 Conversely, if $0 < \tfrac{1}{r} < 1$, applying [L2] to $0 < r^{-1} < 1$ gives $0 < 1^{-1} < (r^{-1})^{-1}$, that is $1 < r$. [L2, step 1.2]

2.5 If $r = 1$ then $\tfrac{1}{r} = 1^{-1} = 1$; conversely if $\tfrac{1}{r} = 1$ then $r = (r^{-1})^{-1} = 1^{-1} = 1$. [step 1.2]

3.1 Combining the two directions in each case: $0 < r < 1 \iff \tfrac{1}{r} > 1$, and $r > 1 \iff 0 < \tfrac{1}{r} < 1$, and $r = 1 \iff \tfrac{1}{r} = 1$. [step 2.1, step 2.2, step 2.3, step 2.4, step 2.5] ∎
