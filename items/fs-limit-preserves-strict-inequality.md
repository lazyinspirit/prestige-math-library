---
id: fs-limit-preserves-strict-inequality
kind: false-statement
title: "FALSE: limits preserve strict inequalities"
status: draft
origin: session
deps: [lem-limit-preserves-order, def-real-limit, def-sequence, thm-of-archimedean, lem-of-naturals-positive, lem-of-inverse-positive, lem-of-abs-value, def-real-order, def-nat-order, thm-nat-linear-order, def-field, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
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

**False claim:** if $(x_k)$ and $(y_k)$ are convergent sequences of reals
([[def-sequence]], [[def-real-limit]]) with $x_k < y_k$ for every
$k \in \mathbb{N}$, then

$$\lim_{k} x_k \;<\; \lim_{k} y_k .$$

The correct statement replaces both strict inequalities by non-strict ones and is
[[lem-limit-preserves-order]]. The claim above is refuted by
$x_k = 0$ and $y_k = 1/(k+1)$, whose limits are both $0$.

## Facts & Assumptions

**Given:** The constant sequence $x_k := 0$ and the sequence $y_k := \bigl((k+1) \cdot 1_{\mathbb{R}}\bigr)^{-1}$, where $n \cdot 1_{\mathbb{R}}$ denotes the canonical natural of $\mathbb{R}$ ([[lem-of-naturals-positive]], [[def-sequence]]).

[L1] Convergence, quantified over rational $\varepsilon > 0$; a constant sequence converges to its value ([[def-real-limit]], [[def-sequence]]).

[L2] Archimedean property: for every $z \in \mathbb{R}$ there is a natural $N \ge 1$ with $z < N \cdot 1_{\mathbb{R}}$ ([[thm-of-archimedean]]).

[L3] Canonical naturals: $n \cdot 1_{\mathbb{R}} > 0$ for every $n \ge 1$, and $n \mapsto n \cdot 1_{\mathbb{R}}$ is strictly increasing on $\{1, 2, 3, \dots\}$ ([[lem-of-naturals-positive]]).

[L4] Inverses and order: $a > 0$ implies $a^{-1} > 0$; $0 < a < b$ implies $0 < b^{-1} < a^{-1}$; and $(u^{-1})^{-1} = u$ for $u \ne 0$ ([[lem-of-inverse-positive]], [[def-field]]).

[L5] Absolute value: $|u| = u$ when $u \ge 0$, and $|u - 0| = |u|$ ([[lem-of-abs-value]], [[def-real-order]]).

[L6] Order arithmetic: transitivity and trichotomy in $\mathbb{R}$, and in $\mathbb{N}$ the implication $k \ge N \Rightarrow k + 1 > N$ ([[def-complete-ordered-field]], [[def-ordered-field]], [[def-nat-order]], [[thm-nat-linear-order]]).

[L7] Limits preserve non-strict inequalities ([[lem-limit-preserves-order]]).

## Refutation

**Proof technique:** direct.

1.1 For every $k$ the canonical natural $(k+1) \cdot 1_{\mathbb{R}}$ is positive by [L3], hence invertible with positive inverse by [L4]; so $y_k > 0 = x_k$, that is $x_k < y_k$ for every $k \in \mathbb{N}$. [L3, L4]

1.2 The constant sequence $(x_k) = (0)$ converges to $0$. [L1]

2.1 The sequence $(y_k)$ converges to $0$. Let $\varepsilon > 0$ be rational; then $\varepsilon^{-1} > 0$ by [L4], so [L2] supplies a natural $N \ge 1$ with $\varepsilon^{-1} < N \cdot 1_{\mathbb{R}}$, and [L4] applied to $0 < \varepsilon^{-1} < N \cdot 1_{\mathbb{R}}$ gives $0 < (N \cdot 1_{\mathbb{R}})^{-1} < \varepsilon$. For $k \ge N$ we have $k + 1 > N$ by [L6], hence $(k+1) \cdot 1_{\mathbb{R}} > N \cdot 1_{\mathbb{R}} > 0$ by [L3], hence $0 < y_k < (N \cdot 1_{\mathbb{R}})^{-1} < \varepsilon$ by [L4], and therefore $|y_k - 0| = y_k < \varepsilon$ by [L5]. [step 1.1, L1, L2, L3, L4, L5, L6]

3.1 Both sequences converge and $\lim_k x_k = 0 = \lim_k y_k$, so the conclusion $\lim_k x_k < \lim_k y_k$ fails by trichotomy, although the hypothesis $x_k < y_k$ holds at every single index. The claim is therefore false. [step 1.1, step 1.2, step 2.1, L6]

4.1 What survives is the non-strict statement [L7]: from $x_k \le y_k$ eventually one may conclude $\lim_k x_k \le \lim_k y_k$, and here that conclusion holds with equality. [step 3.1, L7] ∎

## Remarks

- The reason is structural rather than accidental. A strict inequality between two sequences is a statement about each index separately, and a gap that is positive at every index may shrink towards $0$; the limit records only what is left after the shrinking. Non-strict inequalities survive precisely because "$\ge 0$" is stable under this shrinking, which is the content of [[lem-limit-preserves-order]].

- No hypothesis can be added to the sequences alone to rescue strictness. The witness above may be shifted, so for any two reals $a < b$ one may arrange convergent sequences with $x_k < y_k$ at every index and equal limits; only a hypothesis on the limits themselves, such as a fixed positive gap $y_k - x_k \ge c > 0$, restores a strict conclusion, and then it is [[lem-limit-preserves-order]] applied to $y_k - x_k$ and the constant $c$ that does the work.

- The sequence $1/(k+1)$ used here is the standard witness that the Archimedean property is what makes $\mathbb{R}$ have no infinitesimals ([[thm-of-archimedean]]); by [[lem-reciprocal-of-null-diverges]] its reciprocals diverge to $+\infty$.
