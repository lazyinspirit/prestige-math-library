---
id: prop-of-product-sign
kind: proposition
title: "The sign of a product"
status: published
origin: session
deps: [def-ordered-field, lem-of-sign-rules, lem-of-no-zero-divisors, lem-of-zero-mult]
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
proof_strategy: cases
---

## Statement

Let $F$ be an ordered field and let $a, b \in F$. Then:

$$ab > 0 \iff a, b \text{ have the same sign}, \qquad ab < 0 \iff a, b \text{ have opposite signs},$$

$$ab = 0 \iff a = 0 \text{ or } b = 0.$$

Here "same sign" means both positive or both negative, and "opposite signs" means one positive and one negative.

## Facts & Assumptions

**Given:** Elements $a, b$ of an ordered field $F$.

[L1] Trichotomy: each $x \in F$ satisfies exactly one of $x > 0$, $x = 0$, $x < 0$ ([[def-ordered-field]]).

[L2] Sign rules: if $x, y > 0$ then $xy > 0$; if $x > 0$ and $y < 0$ then $xy < 0$; if $x, y < 0$ then $xy > 0$ ([[lem-of-sign-rules]]).

[L3] If $xy = 0$ then $x = 0$ or $y = 0$ ([[lem-of-no-zero-divisors]]).

[L4] $0 \cdot x = 0$ and $x \cdot 0 = 0$ ([[lem-of-zero-mult]]).

## Proof

**Proof technique:** cases.

1.1 If $a = 0$ or $b = 0$ then $ab = 0$ by [L4], and conversely if $ab = 0$ then $a = 0$ or $b = 0$ by [L3]; hence $ab = 0 \iff a = 0$ or $b = 0$, which is the third biconditional. [L3, L4]

1.2 For the first two biconditionals assume $a \ne 0$ and $b \ne 0$; by trichotomy [L1] each of $a, b$ is then either positive or negative, giving four sign combinations. [L1]

2.1 Case $a > 0$ and $b > 0$ (both positive, same sign): $ab > 0$ by [L2]. [assume-case pospos, L2, step 1.2]

2.2 Case $a < 0$ and $b < 0$ (both negative, same sign): $ab > 0$ by [L2]. [assume-case negneg, L2, step 1.2]

2.3 Case $a > 0$ and $b < 0$ (opposite signs): $ab < 0$ by [L2]. [assume-case posneg, L2, step 1.2]

2.4 Case $a < 0$ and $b > 0$ (opposite signs): $ab < 0$ by [L2]. [assume-case negpos, L2, step 1.2]

3.1 By trichotomy [L1] these four cases exhaust every sign combination of the nonzero $a, b$ and are mutually exclusive. [step 2.1, step 2.2, step 2.3, step 2.4, cases-exhaustive]

4.1 For nonzero $a, b$ we have $ab \ne 0$ by step 1.1, so by trichotomy $ab$ is either $> 0$ or $< 0$; from the cases, $ab > 0$ occurs exactly in the same-sign cases 2.1 and 2.2, and $ab < 0$ exactly in the opposite-sign cases 2.3 and 2.4. [step 1.1, step 3.1, L1]

5.1 Therefore $ab > 0 \iff a, b$ have the same sign, and $ab < 0 \iff a, b$ have opposite signs; with step 1.1 all three biconditionals hold. [step 1.1, step 4.1] ∎
