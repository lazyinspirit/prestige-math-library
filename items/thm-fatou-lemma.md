---
id: thm-fatou-lemma
kind: theorem
title: "Fatou's lemma"
status: published
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-monotone-convergence-for-the-integral, prop-order-and-scalar-rules-for-the-nonnegative-integral, prop-closure-properties-of-measurable-functions-used-by-the-integral]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Theorem 7.8"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "John K. Hunter, Measure Theory Notes, Theorem 4.22"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch4.pdf"
---

## Statement

Let $(f_n)$ be nonnegative measurable functions. Then
$$\int \liminf_{n\to\infty}f_n\,d\mu\le\liminf_{n\to\infty}\int f_n\,d\mu.$$

## Facts & Assumptions

**Given:** A sequence $(f_n)$ of nonnegative measurable functions.

[L1] Countable infima of measurable extended-real-valued functions are measurable, and monotone pointwise suprema are measurable ([[prop-closure-properties-of-measurable-functions-used-by-the-integral]]).

[L2] Monotone convergence holds for the nonnegative integral ([[thm-monotone-convergence-for-the-integral]]).

[L3] The nonnegative integral is monotone ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

## Proof

**Proof technique:** direct.

1.1 For each $n$, define [L1, given, construct]
$$g_n:=\inf_{k\ge n}f_k.$$
Then each $g_n$ is measurable by [L1], one has $g_n\le g_{n+1}$ and
$g_n\uparrow\liminf_n f_n$ pointwise. Also $g_n\le f_n$ for every $n$.

2.1 By [L2], [step 1.1, L2, L3] ∎
$$\int \liminf_n f_n\,d\mu=\lim_n\int g_n\,d\mu.$$
Since $g_n\le f_n$, [L3] gives $\int g_n\,d\mu\le\int f_n\,d\mu$ for every $n$.
Taking the limit in $n$ yields the claimed inequality.
