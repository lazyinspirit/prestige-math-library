---
id: fs-limit-preserves-strict-inequality
kind: false-statement
title: "FALSE: limits preserve strict inequalities"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-limit-preserves-order, lem-limit-unique, thm-algebra-of-limits, def-real-limit, def-sequence, thm-of-archimedean, lem-of-naturals-positive, lem-of-inverse-positive, lem-of-abs-value, def-real-order, lem-nat-discrete, thm-nat-linear-order, def-field, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-05
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis, Ch. 3"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch3.pdf"
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

[L1] $(x_k)$ converges to $x$ when for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$ with $|x_k - x| < \hat\varepsilon$ for all $k \ge K$ ([[def-real-limit]]); a sequence of reals is a function $\mathbb{N} \to \mathbb{R}$ ([[def-sequence]]), so a constant sequence converges to its value, $|x - x| = 0 < \hat\varepsilon$ holding at every index.

[L2] Archimedean property: for every $z \in \mathbb{R}$ there is a natural $N \ge 1$ with $z < N \cdot 1_{\mathbb{R}}$ ([[thm-of-archimedean]]).

[L3] Canonical naturals: $n \cdot 1_{\mathbb{R}} > 0$ for every $n \ge 1$, and $n \mapsto n \cdot 1_{\mathbb{R}}$ is strictly increasing on $\{1, 2, 3, \dots\}$ ([[lem-of-naturals-positive]]).

[L4] Inverses and order: $a > 0$ implies $a^{-1} > 0$; $0 < a < b$ implies $0 < b^{-1} < a^{-1}$; and $(u^{-1})^{-1} = u$ for $u \ne 0$ ([[lem-of-inverse-positive]], [[def-field]]).

[L5] Absolute value: $|u| = u$ when $u \ge 0$, and $|u - 0| = |u|$ ([[lem-of-abs-value]], [[def-real-order]]).

[L6] Order arithmetic: transitivity and trichotomy in $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]). On $\mathbb{N}$, $m < n$ if and only if $\sigma(m) \le n$, so $\sigma(k) = k + 1$ is the immediate successor of $k$ ([[lem-nat-discrete]]); transitivity of the linear order therefore gives $k \ge N \Rightarrow k + 1 > N$ ([[thm-nat-linear-order]]).

[L7] If sequences of reals $(x_k)$ and $(y_k)$ converge to $x$ and $y$ and $x_k \le y_k$ eventually, then $x \le y$ ([[lem-limit-preserves-order]]).

[L8] A sequence of reals has at most one limit ([[lem-limit-unique]]), so the symbols $\lim_k x_k$ and $\lim_k y_k$ appearing in the false claim and below denote.

## Refutation

**Proof technique:** direct.

1.1 For every $k$ the canonical natural $(k+1) \cdot 1_{\mathbb{R}}$ is positive by [L3], hence invertible with positive inverse by [L4]; so $y_k > 0 = x_k$, that is $x_k < y_k$ for every $k \in \mathbb{N}$. [L3, L4]

1.2 The constant sequence $(x_k) = (0)$ converges to $0$. [L1]

2.1 The sequence $(y_k)$ converges to $0$. Let $\varepsilon > 0$ be rational; then $\varepsilon^{-1} > 0$ by [L4], so [L2] supplies a natural $N \ge 1$ with $\varepsilon^{-1} < N \cdot 1_{\mathbb{R}}$, and [L4] applied to $0 < \varepsilon^{-1} < N \cdot 1_{\mathbb{R}}$ gives $0 < (N \cdot 1_{\mathbb{R}})^{-1} < \varepsilon$. For $k \ge N$ we have $k + 1 > N$ by [L6], hence $(k+1) \cdot 1_{\mathbb{R}} > N \cdot 1_{\mathbb{R}} > 0$ by [L3], hence $0 < y_k < (N \cdot 1_{\mathbb{R}})^{-1} < \varepsilon$ by [L4], and therefore $|y_k - 0| = y_k < \varepsilon$ by [L5]. [step 1.1, L1, L2, L3, L4, L5, L6]

3.1 Both sequences converge, and their limits are unique by [L8], so $\lim_k x_k = 0 = \lim_k y_k$; the conclusion $\lim_k x_k < \lim_k y_k$ therefore fails by trichotomy, although the hypothesis $x_k < y_k$ holds at every single index. The claim is therefore false. [step 1.1, step 1.2, step 2.1, L6, L8]

4.1 What survives is the non-strict statement [L7]: from $x_k \le y_k$ eventually one may conclude $\lim_k x_k \le \lim_k y_k$, and here that conclusion holds with equality. [step 3.1, L7] ∎

## Remarks

- The reason is structural rather than accidental. A strict inequality between two sequences is a statement about each index separately, and a gap that is positive at every index may shrink towards $0$; the limit records only what is left after the shrinking. Non-strict inequalities survive precisely because "$\ge 0$" is stable under this shrinking, which is the content of [[lem-limit-preserves-order]].

- **Strictness at every index is never enough by itself, and the failure has nothing to do with the limit being $0$.** The witness may be shifted: for any real $a$, the sequences $x_k := a$ and $y_k := a + 1/(k+1)$ again satisfy $x_k < y_k$ at every index, and both converge to $a$ by the sum rule applied to a constant sequence and a null sequence ([[thm-algebra-of-limits]]), so no value of the common limit is exceptional. What does repair the claim is a *quantitative* strengthening of the hypothesis, for instance a uniform gap $y_k - x_k \ge c$ for a fixed real $c > 0$: then $(y_k - x_k)$ converges to $\lim_k y_k - \lim_k x_k$ ([[thm-algebra-of-limits]]) and [[lem-limit-preserves-order]], applied to the constant sequence $c$ and to $(y_k - x_k)$, gives $\lim_k y_k - \lim_k x_k \ge c > 0$. The moral is that $x_k < y_k$ carries no lower bound on the gap, not that hypotheses on the sequences are powerless.

- The sequence $1/(k+1)$ used here is the standard witness that the Archimedean property is what makes $\mathbb{R}$ have no infinitesimals ([[thm-of-archimedean]]); by [[lem-reciprocal-of-null-diverges]] its reciprocals diverge to $+\infty$.
