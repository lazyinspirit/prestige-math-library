---
id: lem-limit-abs
kind: lemma
title: "The absolute value is compatible with limits"
status: draft
origin: session
deps: [def-real-limit, def-sequence, cor-of-reverse-triangle, lem-of-abs-value, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "$x_k\\to x$ gives $|x_k|\\to|x|$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals converging to $x \in \mathbb{R}$
([[def-sequence]], [[def-real-limit]]). Then $(|x_k|)$ converges to $|x|$.

In the single case $x = 0$ the implication reverses: $|x_k| \to 0$ if and only if
$x_k \to 0$. For $x \ne 0$ the converse fails.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals converging to a real $x$ ([[def-sequence]], [[def-real-limit]]).

[L1] Convergence, quantified over rational $\varepsilon > 0$ ([[def-real-limit]]).

[L2] Reverse triangle inequality: $\bigl||u| - |v|\bigr| \le |u - v|$ for all reals $u, v$ ([[cor-of-reverse-triangle]]).

[L3] Absolute value: $|u| \ge 0$, so $\bigl||u|\bigr| = |u|$; and $|u - 0| = |u|$ ([[lem-of-abs-value]]).

[L4] Order arithmetic in $\mathbb{R}$: $u \le v < w$ gives $u < w$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon > 0$ be rational. By convergence there is $K \in \mathbb{N}$ with $|x_k - x| < \varepsilon$ for all $k \ge K$. [L1]

2.1 For every $k \ge K$ the reverse triangle inequality gives $\bigl||x_k| - |x|\bigr| \le |x_k - x| < \varepsilon$. [step 1.1, L2, L4]

3.1 Since the rational $\varepsilon > 0$ was arbitrary, $(|x_k|)$ converges to $|x|$; and in the case $x = 0$ the two conditions coincide, because $\bigl||x_k| - 0\bigr| = \bigl||x_k|\bigr| = |x_k| = |x_k - 0|$ for every $k$, so $|x_k| \to 0$ if and only if $x_k \to 0$. [step 2.1, L1, L3] ∎

## Remarks

- **The converse fails in general.** Take the sequence with $x_k$ alternating between $1$ and $-1$, constructed in [[fs-bounded-implies-convergent]]. Then $|x_k| = 1$ for every $k$, so $(|x_k|)$ converges to $1$, while $(x_k)$ does not converge at all. Passing to absolute values destroys sign information, and only at $0$ is there no sign information to destroy.

- Combined with [[thm-algebra-of-limits]] this gives the usual companions: $\max\{x_k, y_k\} = \tfrac{1}{2}\bigl(x_k + y_k + |x_k - y_k|\bigr)$ and $\min\{x_k, y_k\} = \tfrac{1}{2}\bigl(x_k + y_k - |x_k - y_k|\bigr)$ converge to $\max\{x, y\}$ and $\min\{x, y\}$ ([[def-max-min]]).

- The lemma is the sequential form of the statement that $u \mapsto |u|$ is continuous, but continuity is not available yet and is not needed: the reverse triangle inequality does the work directly.
