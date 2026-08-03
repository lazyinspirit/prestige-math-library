---
id: cor-of-reverse-triangle
kind: corollary
title: "The reverse triangle inequality"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-of-triangle-inequality, lem-of-abs-value, def-ordered-field]
aliases: []
landmark: false
short: "Reverse triangle ineq."
proof_strategy: direct
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
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Purdue University analysis notes: Ordered fields and absolute value"
      url: "https://www.math.purdue.edu/~gcavigli/Swanson.pdf"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \in F$. Then

$$\bigl| |x| - |y| \bigr| \le |x - y|.$$

## Facts & Assumptions

**Given:** An ordered field $F$ and elements $x, y \in F$.

[L1] Triangle inequality: $|a + b| \le |a| + |b|$ for all $a, b \in F$ ([[lem-of-triangle-inequality]]).

[L2] For every $u \in F$, $|-u| = |u|$, and $|w|$ equals $w$ or $-w$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 Applying [L1] with $a = x - y$ and $b = y$ gives $|x| = |(x - y) + y| \le |x - y| + |y|$, so $|x| - |y| \le |x - y|$. [L1]

1.2 Applying [L1] with $a = y - x$ and $b = x$, and using $|y - x| = |x - y|$ from [L2], gives $|y| \le |y - x| + |x| = |x - y| + |x|$, so $|y| - |x| \le |x - y|$. [L1, L2]

2.1 By [L2] the value $\bigl| |x| - |y| \bigr|$ equals $|x| - |y|$ or $-(|x| - |y|) = |y| - |x|$, and each of these is $\le |x - y|$ by steps 1.1 and 1.2, so $\bigl| |x| - |y| \bigr| \le |x - y|$. [step 1.1, step 1.2, L2, algebra] ∎
