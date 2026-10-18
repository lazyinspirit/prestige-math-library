---
id: lem-of-square-monotone
kind: lemma
title: "Squaring is monotone on the nonnegatives"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ordered-field, lem-of-sign-rules, lem-of-zero-mult, lem-of-abs-value]
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

Let $F$ be an ordered field. For $a, b \ge 0$:

$$a < b \iff a^2 < b^2, \qquad a \le b \iff a^2 \le b^2.$$

More generally, for arbitrary $a, b \in F$, $a^2 < b^2 \iff |a| < |b|$.

## Facts & Assumptions

**Given:** Elements $a, b$ of an ordered field $F$.

[L1] For a positive factor $s > 0$ and any $t$: $t > 0 \iff st > 0$; this is [[lem-of-sign-rules]] (the rule $c > 0 \Rightarrow (x < y \iff xc < yc)$ taken at $x = 0$, $y = t$, $c = s$, using $0 \cdot s = 0$, [[lem-of-zero-mult]]).

[L2] Trichotomy: for $a, b$ exactly one of $a < b$, $a = b$, $a > b$ holds; and a sum of two nonnegatives with at least one positive is positive ([[def-ordered-field]]).

[L3] $|x| \ge 0$ and $|x|^2 = x^2$ for every $x$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 The difference factors as $b^2 - a^2 = (b - a)(b + a)$. [algebra]

2.1 If $a, b \ge 0$ and $a < b$, then $b > 0$, so $b + a > 0$ by [L2], and $b - a > 0$; by [L1] with $s = b + a$ and $t = b - a$, $(b - a)(b + a) > 0$, i.e. $a^2 < b^2$. [L1, L2, step 1.1]

2.2 If $a, b \ge 0$ and $a^2 < b^2$, then $b^2 - a^2 > 0$, so $a, b$ are not both zero and $b + a > 0$ by [L2]; by [L1] with $s = b + a$, from $(b - a)(b + a) = b^2 - a^2 > 0$ we get $b - a > 0$, i.e. $a < b$. [L1, L2, step 1.1]

3.1 Hence for $a, b \ge 0$, $a < b \iff a^2 < b^2$. [step 2.1, step 2.2]

4.1 The $\le$ form follows by trichotomy: for $a, b \ge 0$, applying step 3.1 to the nonnegatives $b, a$ gives $a \le b \iff \lnot(b < a) \iff \lnot(b^2 < a^2) \iff a^2 \le b^2$. [step 3.1, L2]

5.1 For arbitrary $a, b$, [L3] gives $|a|, |b| \ge 0$ with $|a|^2 = a^2$ and $|b|^2 = b^2$; applying step 3.1 to $|a|, |b|$ yields $a^2 < b^2 \iff |a|^2 < |b|^2 \iff |a| < |b|$. [step 3.1, L3] ∎
