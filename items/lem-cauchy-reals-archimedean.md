---
id: lem-cauchy-reals-archimedean
kind: lemma
title: "The Cauchy-sequence reals are Archimedean"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-archimedean-field, lem-rat-embeds-dense, lem-rat-archimedean, thm-reals-ordered-field, def-real-order]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §5.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "California State University San Marcos notes: Construction of the real numbers"
      url: "https://public.csusm.edu/aitken_html/m378_summer2019/Ch10RealNumbers.pdf"
pipeline_run: null
---

## Statement

The Cauchy-sequence reals $\mathbb{R}_C$ ([[thm-reals-ordered-field]]) are
**Archimedean** ([[def-archimedean-field]]): for every $x \in \mathbb{R}_C$
there is a natural number $n$ with $x < n \cdot 1$, where the canonical natural
$n \cdot 1$ is the class $\hat n$ of the constant rational sequence $n$.
Equivalently, the canonical naturals $(\hat n)_{n \ge 1}$ are cofinal.

## Facts & Assumptions

**Given:** A real $x \in \mathbb{R}_C$.

[L1] Rational approximation: for any real $z$ and rational $\varepsilon > 0$ there is $q \in \mathbb{Q}$ with $|z - \hat q| < \hat\varepsilon$, and the embedding $q \mapsto \hat q$ preserves and reflects order and arithmetic ([[lem-rat-embeds-dense]]).

[L2] The rationals are Archimedean: for every rational $y$ there is a natural $n$ with $y < n$ ([[lem-rat-archimedean]]).

[L3] $\mathbb{R}_C$ is a totally ordered field, and $\hat q + \hat r = \widehat{q + r}$, $\hat 1 = 1$ ([[thm-reals-ordered-field]], [[def-real-order]]).

[L4] $\mathbb{R}_C$ is Archimedean iff for every real there is a natural $n$ with the real below the canonical natural $n \cdot 1 = \hat n$ ([[def-archimedean-field]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] with $\varepsilon = 1$ choose a rational $q$ with $|x - \hat q| < \hat 1$. [L1, choose]

1.2 By [L2] applied to the rational $q + 1$ choose a natural $n$ with $q + 1 < n$. [L2, choose]

2.1 From step 1.1, $x - \hat q < \hat 1$, so $x < \hat q + \hat 1 = \widehat{q + 1}$. [step 1.1, L3]

2.2 From step 1.2, since the embedding preserves order, $\widehat{q + 1} < \hat n = n \cdot 1$. [step 1.2, L1, L3, L4]

3.1 Combining, $x < \widehat{q + 1} < n \cdot 1$, so $x < n \cdot 1$ for this canonical natural. [step 2.1, step 2.2, L3]

4.1 As $x \in \mathbb{R}_C$ was arbitrary, every real lies below some canonical natural: $\mathbb{R}_C$ is Archimedean. [step 3.1, L4] ∎
