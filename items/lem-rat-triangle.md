---
id: lem-rat-triangle
kind: lemma
title: "Absolute value and the triangle inequality"
status: published
origin: session
deps: [thm-rat-ordered-field]
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-24
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

For $x \in \mathbb{Q}$ set $|x| = x$ if $x \ge 0$ and $|x| = -x$
otherwise. Then $|xy| = |x|\,|y|$, $|x + y| \le |x| + |y|$, and
$\bigl||x| - |y|\bigr| \le |x - y|$.

The proof uses only the axioms of a totally ordered field, so it applies
verbatim to any such field (in particular to $\mathbb{R}$ once constructed).

## Facts & Assumptions

**Given:** Elements $x, y$ of the totally ordered field $\mathbb{Q}$.

[L1] Ordered-field arithmetic: trichotomy, compatibility of the order with addition, products of positives are positive, $(-u)v = -(uv)$ ([[thm-rat-ordered-field]]).

## Proof

**Proof technique:** cases.

1.1 For every $u$: $u \le |u|$, $-u \le |u|$, $|u| \ge 0$, and $|-u| = |u|$, directly from the definition and trichotomy. [L1]

1.2 Case $x$ and $y$ have the same sign (both $\ge 0$ or both $< 0$): $xy \ge 0$ and $xy = |x||y|$ (for both negative, $xy = (-x)(-y)$). [assume-case same, L1]

1.3 Case $x, y$ have mixed signs, say $x \ge 0 > y$ (the other order is identical): $xy \le 0$, so $|xy| = -(xy) = x(-y) = |x||y|$. [assume-case mixed, L1]

2.1 In all cases $|xy| = |x|\,|y|$. [step 1.2, step 1.3, cases-exhaustive]

2.2 Adding $x \le |x|$ and $y \le |y|$ gives $x + y \le |x| + |y|$; adding $-x \le |x|$ and $-y \le |y|$ gives $-(x+y) \le |x| + |y|$; since $|x+y|$ is one of $\pm(x+y)$, $|x+y| \le |x| + |y|$. [step 1.1, L1]

3.1 From $x = (x - y) + y$: $|x| \le |x-y| + |y|$, so $|x| - |y| \le |x-y|$; symmetrically $|y| - |x| \le |y-x| = |x-y|$; hence $\bigl||x|-|y|\bigr| \le |x-y|$. [step 2.2, L1] ∎
