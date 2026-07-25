---
id: lem-convergent-implies-cauchy
kind: lemma
title: "Every convergent sequence is Cauchy"
status: draft
origin: session
deps: [def-real-limit, def-sequence, lem-of-triangle-inequality, lem-of-abs-value, thm-rat-ordered-field, thm-nat-linear-order, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "convergent implies Cauchy"
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
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals converging to $x \in \mathbb{R}$
([[def-sequence]], [[def-real-limit]]). Then $(x_k)$ is Cauchy
([[def-real-limit]]).

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals converging to a real $x$ ([[def-sequence]], [[def-real-limit]]).

[L1] Convergence and the Cauchy condition, both quantified over rational $\varepsilon > 0$ ([[def-real-limit]]).

[L2] Triangle inequality: $|a + b| \le |a| + |b|$ in $\mathbb{R}$ ([[lem-of-triangle-inequality]], [[def-complete-ordered-field]]).

[L3] Absolute value: $|-u| = |u|$ for every real $u$ ([[lem-of-abs-value]]).

[L4] Rational arithmetic: if $\varepsilon$ is a rational $> 0$ then $\varepsilon/2$ is a rational $> 0$ and $\varepsilon/2 + \varepsilon/2 = \varepsilon$ ([[thm-rat-ordered-field]]).

[L5] The order on $\mathbb{N}$ is total and transitive, so a single threshold serves for both indices ([[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon > 0$ be rational; then $\varepsilon/2$ is a rational $> 0$. [L4]

2.1 By convergence there is $K \in \mathbb{N}$ with $|x_k - x| < \varepsilon/2$ for all $k \ge K$. [step 1.1, L1]

3.1 For all $k, l \ge K$ we get $|x_k - x_l| = |(x_k - x) + (x - x_l)| \le |x_k - x| + |x - x_l| = |x_k - x| + |x_l - x| < \varepsilon/2 + \varepsilon/2 = \varepsilon$. [step 2.1, L2, L3, L4, L5]

4.1 Since the rational $\varepsilon > 0$ was arbitrary and the single threshold $K$ works for both indices, $(x_k)$ is Cauchy. [step 3.1, L1] ∎

## Remarks

- The converse is a genuine theorem and is **not** proved here. "Every Cauchy sequence of reals converges" is the completeness of $\mathbb{R}$, and it is developed on the next page of this track, where it is the engine behind the monotone convergence theorem and Bolzano-Weierstrass.

- For the Cauchy-sequence model of $\mathbb{R}$ the converse is already available: [[thm-reals-cauchy-complete]] proves that every Cauchy sequence of reals converges to a real. Since any two complete ordered fields are uniquely isomorphic ([[thm-uniqueness-complete-ordered-field]]), that result transfers, but the next page proves it from the least-upper-bound property directly, which is the form the rest of analysis uses.

- The splitting $\varepsilon/2 + \varepsilon/2$ is the whole content. It is worth noticing that no property of $\mathbb{R}$ beyond the ordered-field axioms and the triangle inequality is used, so the same argument shows that a convergent sequence of rationals is Cauchy in $\mathbb{Q}$.
