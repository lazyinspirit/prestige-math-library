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
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-08-receipts.jsonl (thm-fatou-lemma). No independent judge or whole-closure certification.
    delegated_by: owner
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

1.1 For each $n$, define $g_n:=\inf_{k\ge n}f_k$. Then each $g_n$ is measurable by [L1], one has $g_n\le g_{n+1}$ and $g_n\uparrow\liminf_n f_n$ pointwise. Also $g_n\le f_n$ for every $n$. [L1, given, construct]

2.1 By [L2] and step 1.1, $\int\liminf_n f_n\,d\mu=\lim_n\int g_n\,d\mu$. For every fixed $n$ and all $k\ge n$, one has $g_n\le g_k\le f_k$. By [L3], $\int g_n\,d\mu\le\inf_{k\ge n}\int f_k\,d\mu$. Taking the supremum over $n$ and using monotone convergence on the left gives $\int\liminf_n f_n\,d\mu\le\liminf_n\int f_n\,d\mu$, including infinite values. [step 1.1, L2, L3] ∎
