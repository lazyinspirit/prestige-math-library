---
id: lem-metric-nonnegativity
kind: lemma
title: "Nonnegativity of a metric is a consequence of the other axioms, not an axiom"
status: draft
origin: session
deps: [def-metric-space, lem-of-add-order, def-real-order, def-complete-ordered-field,
       def-ordered-field, def-max-min, lem-finite-set-has-max]
justified_by: []
aliases: []
landmark: false
short: "$d \\ge 0$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis II, 3rd ed., Ch. 1"
      url: "https://terrytao.wordpress.com/books/analysis-ii/"
pipeline_run: null
---

## Statement

Let $X$ be a set and let $p : X \times X \to \mathbb{R}$ satisfy the reflexivity
axiom (M1') $p(x,x) = 0$ and the symmetry axiom (M2) $p(x,y) = p(y,x)$ of
[[def-metric-space]]. Then:

1. If $p$ satisfies the triangle inequality (M3), then $p(x,y) \ge 0$ for all
   $x, y \in X$.
2. If $p$ satisfies the strong triangle inequality (M3'), then
   $p(x,y) \ge 0$ for all $x, y \in X$.

In particular every metric, every pseudometric and every ultrametric
([[def-metric-space]]) takes only nonnegative values. Nonnegativity is therefore
a theorem about the axiom list this library uses, not a fourth axiom, and no
statement on this page needs to assume it separately.

## Facts & Assumptions

**Given:** A set $X$, points $x, y \in X$, and a function $p : X \times X \to \mathbb{R}$ satisfying (M1') $p(a,a) = 0$ for every $a \in X$ and (M2) $p(a,b) = p(b,a)$ for all $a, b \in X$ ([[def-metric-space]]).

[A1] (M3) The triangle inequality $p(a,c) \le p(a,b) + p(b,c)$ holds for all $a, b, c \in X$ ([[def-metric-space]]).

[A2] (M3') The strong triangle inequality $p(a,c) \le \max\{p(a,b), p(b,c)\}$ holds for all $a, b, c \in X$ ([[def-metric-space]]).

[L1] Trichotomy of the order of $\mathbb{R}$: for reals $a, b$ exactly one of $a < b$, $a = b$, $b < a$ holds, so $a \ge 0$ fails exactly when $a < 0$ ([[def-real-order]], [[def-complete-ordered-field]], [[def-ordered-field]]).

[L2] Adding two strict inequalities: if $a < b$ and $c < d$ then $a + c < b + d$ ([[lem-of-add-order]]).

[L3] A two-element subset $\{a,b\}$ of $\mathbb{R}$ has a maximum, and that maximum is $a$ or $b$; if $a = b$ it is $a$ ([[lem-finite-set-has-max]], [[def-max-min]]).

## Proof

**Proof technique:** direct.

1.1 Instantiate [A1] at $a = x$, $b = y$, $c = x$: $p(x,x) \le p(x,y) + p(y,x)$. [A1]

1.2 Instantiate [A2] at $a = x$, $b = y$, $c = x$: $p(x,x) \le \max\{p(x,y), p(y,x)\}$. [A2]

1.3 Suppose, towards ruling it out, that $p(x,y) < 0$. [assume-hyp]

2.1 By (M1') the left side of step 1.1 is $0$ and by (M2) the right side is $p(x,y) + p(x,y)$, so $0 \le p(x,y) + p(x,y)$. [step 1.1, given]

2.2 By (M2) the two entries of the maximum in step 1.2 are the same real number, so that maximum equals $p(x,y)$ by [L3], and (M1') turns step 1.2 into $0 \le p(x,y)$, which is claim 2. [step 1.2, given, L3]

2.3 Adding the supposed inequality of step 1.3 to itself gives $p(x,y) + p(x,y) < 0 + 0 = 0$. [step 1.3, L2]

3.1 Steps 2.1 and 2.3 assert $0 \le p(x,y) + p(x,y)$ and $p(x,y) + p(x,y) < 0$, which trichotomy forbids; so the supposition of step 1.3 is untenable and $p(x,y) \ge 0$, which is claim 1. [step 2.1, step 2.2, step 2.3, L1] ∎

## Remarks

- **What each claim uses.** Claim 1 is the familiar two-line argument
  $0 = p(x,x) \le p(x,y) + p(y,x) = 2p(x,y)$ followed by the observation that a
  negative real added to itself stays negative. Claim 2 does not need that second
  half at all: the strong triangle inequality delivers $0 \le p(x,y)$ in one
  step, because the maximum of a real number with itself is that number.
- **Symmetry is used in both claims and cannot be dropped.** Without (M2) the
  instantiation of step 1.1 only gives $0 \le p(x,y) + p(y,x)$, which leaves the
  possibility that one of the two values is negative and the other larger and
  positive. Dropping (M2) instead of weakening (M1) gives the notion usually
  called a quasimetric, which this library does not treat; for it the argument
  above is unavailable, so nonnegativity is not redundant there and is imposed
  as part of the definition ([[rem-metric-axiom-conventions]]).
