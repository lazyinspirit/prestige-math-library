---
id: thm-reals-cauchy-complete
kind: theorem
title: "The reals are complete"
status: published
origin: session
deps: [def-real-limit, lem-rat-embeds-dense, lem-rat-archimedean, thm-reals-ordered-field, def-real-numbers]
aliases: []
landmark: true
proof_strategy: direct
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
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Every Cauchy sequence of real numbers ([[def-real-limit]]) converges to a real
number. Together with [[thm-reals-ordered-field]], this completes the
construction: $\mathbb{R}$ is a complete totally ordered field.

## Facts & Assumptions

**Given:** A Cauchy sequence $(x_k)_{k \ge 1}$ of reals.

[L1] Rational approximation: for any real $z$ and rational $\eta > 0$ there is $q$ with $|z - \hat q| < \hat\eta$ ([[lem-rat-embeds-dense]]).

[L2] Archimedean property: for rational $\varepsilon > 0$ there is $k$ with $1/k < \varepsilon$ ([[lem-rat-archimedean]]).

[L3] Cauchy definitions in $\mathbb{Q}$ and $\mathbb{R}$ ([[def-rational-cauchy-sequence]], [[def-real-limit]]).

[L4] The embedding preserves and reflects order and arithmetic; triangle inequality in $\mathbb{R}$ ([[lem-rat-embeds-dense]], [[thm-reals-ordered-field]], [[def-real-order]]).

[L5] Reals are classes of rational Cauchy sequences ([[def-real-numbers]]).

## Proof

**Proof technique:** direct.

1.1 For each $k \ge 1$ pick a rational $q_k$ with $|x_k - \hat q_k| < \widehat{1/k}$. [L1, choose]

2.1 $(q_k)$ is Cauchy in $\mathbb{Q}$: given rational $\varepsilon > 0$, pick $k_0$ with $1/k_0 < \varepsilon/3$ and $K$ with $|x_k - x_l| < \widehat{\varepsilon/3}$ for $k, l \ge K$; then for $k, l \ge \max(k_0, K)$, $\widehat{|q_k - q_l|} \le |\hat q_k - x_k| + |x_k - x_l| + |x_l - \hat q_l| < \widehat{1/k} + \widehat{\varepsilon/3} + \widehat{1/l} \le 3\,\widehat{\varepsilon/3} = \hat\varepsilon$, and the embedding reflects order, so $|q_k - q_l| < \varepsilon$. [step 1.1, L2, L3, L4]

3.1 Set $x := [(q_k)] \in \mathbb{R}$, the class of this rational Cauchy sequence. [step 2.1, L5]

4.1 $x_k \to x$: given rational $\varepsilon > 0$, pick $k_1$ with $1/k_1 < \varepsilon/3$ and $K_2$ with $|q_k - q_l| < \varepsilon/3$ for $k, l \ge K_2$; for $k \ge \max(k_1, K_2)$, the difference $\hat q_k - x$ has representative $(q_k - q_l)_l$, whose absolute values $|q_k - q_l|$ are eventually below $\varepsilon/3$, so $|\hat q_k - x| \le \widehat{\varepsilon/3}$, and $|x_k - x| \le |x_k - \hat q_k| + |\hat q_k - x| < \widehat{1/k} + \widehat{\varepsilon/3} \le 2\,\widehat{\varepsilon/3} < \hat\varepsilon$. [step 1.1, step 2.1, step 3.1, L4]

5.1 Every Cauchy sequence of reals converges in $\mathbb{R}$: the reals are complete. [step 4.1] ∎
