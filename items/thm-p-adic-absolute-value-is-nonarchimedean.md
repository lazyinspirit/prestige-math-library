---
id: thm-p-adic-absolute-value-is-nonarchimedean
kind: theorem
title: "The p-adic absolute value is nonarchimedean"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-p-adic-absolute-value-on-the-rationals, lem-p-adic-valuation-on-q]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Andrew V. Sutherland, 18.782 Lecture 5"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes5.pdf"
    - title: "J. S. Milne, Algebraic Number Theory, Chapter 7"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
pipeline_run: null
---

## Statement

Let $p$ be a prime and let $|\cdot|_p$ be the absolute value of
[[def-p-adic-absolute-value-on-the-rationals]]. Then for all $x,y \in \mathbb Q$
one has

$$|xy|_p = |x|_p |y|_p,\qquad |x+y|_p \le \max\{|x|_p,|y|_p\}.$$

So $|\cdot|_p$ is a nonarchimedean absolute value on $\mathbb Q$.

## Facts & Assumptions

**Given:** A prime $p$ and rational numbers $x,y$.

[L1] On $\mathbb Q^\times$, the valuation $v_p$ is well defined, additive under
multiplication, and satisfies
$v_p(x+y) \ge \min\{v_p(x),v_p(y)\}$ whenever $x,y,x+y$ are nonzero
([[lem-p-adic-valuation-on-q]]).

[L2] The $p$-adic absolute value is defined by $|x|_p = p^{-v_p(x)}$ for
nonzero $x$, with $|0|_p = 0$ ([[def-p-adic-absolute-value-on-the-rationals]]).

## Proof

**Proof technique:** direct.

1.1 If one of $x$ or $y$ is zero then $|xy|_p = 0 = |x|_p|y|_p$. If both are nonzero, [L1] and [L2] give $$|xy|_p = p^{-v_p(xy)} = p^{-v_p(x)-v_p(y)} = |x|_p |y|_p.$$ [L1, L2, given, algebra]

1.2 If $x+y = 0$, then $|x+y|_p = 0 \le \max\{|x|_p,|y|_p\}$. If $x,y,x+y$ are nonzero, [L1] gives $$v_p(x+y) \ge \min\{v_p(x),v_p(y)\},$$ so exponentiating by $p^{-t}$, which reverses order, yields $$|x+y|_p \le \max\{|x|_p,|y|_p\}.$$ [L1, L2, given, algebra]

2.1 The multiplicative law is step 1.1 and the strong triangle inequality is step 1.2, so $|\cdot|_p$ is nonarchimedean. [step 1.1, step 1.2] ∎
