---
id: lem-triangle-inequality-finite
kind: lemma
title: "Triangle inequality for finite sums"
status: draft
origin: session
deps: [def-finite-sum, lem-of-triangle-inequality, thm-induction-principle, lem-of-abs-value, lem-of-add-order, def-abs-value, def-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Triangle inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Triangle_inequality"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $a : \mathbb{N} \to \mathbb{R}$ be a sequence of reals and $n \in \mathbb{N}$,
with finite sums as in [[def-finite-sum]] and the absolute value as in
[[def-abs-value]]. Then

$$\Big|\sum_{k<n} a_k\Big| \le \sum_{k<n} |a_k|.$$

## Facts & Assumptions

**Given:** A sequence $a : \mathbb{N} \to \mathbb{R}$ and a natural $n$.

[L1] Recursion clauses ([[def-finite-sum]]): $\sum_{k<0} a_k = 0$ and $\sum_{k<n+1} a_k = \sum_{k<n} a_k + a_n$.

[L2] Two-term triangle inequality: $|x + y| \le |x| + |y|$ ([[lem-of-triangle-inequality]]).

[L3] Basic absolute value facts: $|x| \ge 0$ and $|0| = 0$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L4] Adding a constant preserves the order: [[lem-of-add-order]] gives $x < y \Rightarrow x + c < y + c$ and states no nonstrict form, so the form used below, $x \le y \Rightarrow x + c \le y + c$, is that statement together with the case $x = y$, which trichotomy settles; and $\le$ is transitive ([[def-ordered-field]]).

[L5] Induction principle ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction.

1.1 Base case $n = 0$: both sides are $0$, since $\big|\sum_{k<0} a_k\big| = |0| = 0$ and $\sum_{k<0}|a_k| = 0$, so the inequality holds. [base, L1, L3]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume $\big|\sum_{k<n} a_k\big| \le \sum_{k<n} |a_k|$. [ih]

2.1 Splitting off the last term and applying the two-term triangle inequality: $\big|\sum_{k<n+1} a_k\big| = \big|\sum_{k<n} a_k + a_n\big| \le \big|\sum_{k<n} a_k\big| + |a_n|$. [step 1.2, L1, L2]

3.1 Adding $|a_n|$ to both sides of the inductive hypothesis gives $\big|\sum_{k<n} a_k\big| + |a_n| \le \sum_{k<n}|a_k| + |a_n| = \sum_{k<n+1}|a_k|$, so transitivity yields $\big|\sum_{k<n+1} a_k\big| \le \sum_{k<n+1}|a_k|$. [step 1.2, step 2.1, L1, L4]

4.1 By the induction principle the inequality holds for every $n \in \mathbb{N}$. [step 1.1, step 3.1, L5, discharge-induction] ∎
