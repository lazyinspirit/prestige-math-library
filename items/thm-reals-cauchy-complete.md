---
id: thm-reals-cauchy-complete
kind: theorem
title: "The reals are complete"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-real-limit, lem-rat-embeds-dense, lem-rat-archimedean, thm-reals-ordered-field, def-real-numbers, def-rational-cauchy-sequence, def-real-order, thm-well-ordering-principle, lem-rat-positive-denominator, lem-nat-embeds-int, thm-int-ordered-ring, def-axiom-schema-of-separation, def-cartesian-product]
aliases: []
landmark: true
short: "ℝ complete"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-astra
    verdict: pass
    date: 2026-09-09
    scope: "Owner-authorized local choice-free selection repair and direct prerequisite-interface review; precheck/rendercheck passed. No independent judgment or whole transitive certification."
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "L. S. Krapp, Constructions of the real numbers: a set theoretical approach (Oxford, 2014)"
      url: "https://www.math.uni-konstanz.de/~krapp/research/Constructions_of_the_real_numbers.pdf"
    - title: "W. Aitken, Constructing the Real Numbers, Section 8, Lemma 30 and footnote 3"
      url: "https://public.csusm.edu/aitken_html/m378_S2016/Ch9RealNumbers.pdf"
pipeline_run: null
---

## Statement

Every Cauchy sequence of real numbers ([[def-real-limit]]) converges to a real
number. Together with [[thm-reals-ordered-field]], this completes the
construction: $\mathbb{R}$ is a complete totally ordered field.
The proof uses no form of the axiom of choice.

## Facts & Assumptions

**Given:** A Cauchy sequence $(x_k)_{k \ge 1}$ of reals.

[L1] Rational approximation: for any real $z$ and rational $\eta > 0$ there is $q$ with $|z - \hat q| < \hat\eta$ ([[lem-rat-embeds-dense]]).

[L2] Archimedean property: for rational $\varepsilon > 0$ there is $k$ with $1/k < \varepsilon$ ([[lem-rat-archimedean]]).

[L3] Cauchy definitions in $\mathbb{Q}$ and $\mathbb{R}$ ([[def-rational-cauchy-sequence]], [[def-real-limit]]).

[L4] The embedding preserves and reflects order and arithmetic; triangle inequality in $\mathbb{R}$ ([[lem-rat-embeds-dense]], [[thm-reals-ordered-field]], [[def-real-order]]).

[L5] Reals are classes of rational Cauchy sequences ([[def-real-numbers]]).

[L6] Every rational has a positive-denominator integer representative; the nonnegative integers are the embedded naturals, with compatible arithmetic and order ([[lem-rat-positive-denominator]], [[lem-nat-embeds-int]], [[thm-int-ordered-ring]]).

[L7] Every nonempty subset of $\mathbb{N}$ has a unique least element ([[thm-well-ordering-principle]]). Cartesian products are sets ([[def-cartesian-product]]), and a uniquely specified subset of an existing set is formed by Separation ([[def-axiom-schema-of-separation]]).

## Proof

**Proof technique:** direct.

1.1 For a fixed $k\ge1$, call a triple $(h,b,j)$ of naturals admissible when $h\ge1$, $1\le b\le h$, $0\le j\le2h$, and $|x_k-\widehat{(j-h)/b}|<\widehat{1/k}$. Here $j-h$ is an integer. Such a triple exists: [L1] supplies one approximating rational $a/b$; [L6] makes $b$ a positive natural, and either $a$ or $-a$ is a nonnegative integer. Thus some natural $h$ satisfies $h\ge b$ and $-h\le a\le h$. Then $j=a+h$ is a natural with $j\le2h$ and $(j-h)/b=a/b$. This proves nonemptiness separately for each $k$; it does not choose a family of witnesses. [L1, L6, construct]

2.1 Let $h_k$ be the least first coordinate of an admissible triple; with $h_k$ fixed, let $b_k$ be the least admissible second coordinate; with both fixed, let $j_k$ be the least admissible third coordinate. Each minimum exists and is unique by [L7]. Define $q_k=(j_k-h_k)/b_k$. This unique rule defines the graph of $(q_k)$ as a subset of $\mathbb{N}_{\ge1}\times\mathbb{Q}$ by Separation. Consequently $|x_k-\hat q_k|<\widehat{1/k}$ for every $k$, without choosing representatives of all the $x_k$ or invoking any choice axiom. [step 1.1, L6, L7, construct]

3.1 $(q_k)$ is Cauchy in $\mathbb{Q}$: given rational $\varepsilon > 0$, pick $k_0$ with $1/k_0 < \varepsilon/3$ and $K$ with $|x_k - x_l| < \widehat{\varepsilon/3}$ for $k, l \ge K$; then for $k, l \ge \max(k_0, K)$, $\widehat{|q_k - q_l|} \le |\hat q_k - x_k| + |x_k - x_l| + |x_l - \hat q_l| < \widehat{1/k} + \widehat{\varepsilon/3} + \widehat{1/l} \le 3\,\widehat{\varepsilon/3} = \hat\varepsilon$, and the embedding reflects order, so $|q_k - q_l| < \varepsilon$. [step 2.1, L2, L3, L4]

4.1 Set $x := [(q_k)] \in \mathbb{R}$, the class of this rational Cauchy sequence. [step 3.1, L5]

5.1 $x_k \to x$: given rational $\varepsilon > 0$, pick $k_1$ with $1/k_1 < \varepsilon/3$ and $K_2$ with $|q_k - q_l| < \varepsilon/3$ for $k, l \ge K_2$; for $k \ge \max(k_1, K_2)$, the difference $\hat q_k - x$ has representative $(q_k - q_l)_l$, whose absolute values $|q_k - q_l|$ are eventually below $\varepsilon/3$, so $|\hat q_k - x| \le \widehat{\varepsilon/3}$, and $|x_k - x| \le |x_k - \hat q_k| + |\hat q_k - x| < \widehat{1/k} + \widehat{\varepsilon/3} \le 2\,\widehat{\varepsilon/3} < \hat\varepsilon$. [step 2.1, step 3.1, step 4.1, L4]

6.1 Every Cauchy sequence of reals converges in $\mathbb{R}$: the reals are complete. [step 5.1] ∎
