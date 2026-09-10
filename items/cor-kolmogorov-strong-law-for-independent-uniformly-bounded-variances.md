---
id: cor-kolmogorov-strong-law-for-independent-uniformly-bounded-variances
kind: corollary
title: Kolmogorov strong law for independent uniformly bounded variances
deps: ["thm-kolmogorov-strong-law-under-summable-normalized-variances", "def-strong-law-of-large-numbers-for-a-sequence", "thm-integral-test-for-series"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Durrett, §§2.4–2.5, pp. 76–87
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Independent square-integrable real $(X_n)_{n\ge1}$ with $C=\sup_n\operatorname{Var}(X_n)<\infty$ satisfy $(S_n-\mathbb ES_n)/n\to0$ almost surely.

## Facts & Assumptions

[F1] [[thm-kolmogorov-strong-law-under-summable-normalized-variances]]: Let $(X_n)_{n\ge1}$ be independent square-integrable real random variables. Let $0<b_n$ be deterministic and nondecreasing with $b_n\to\infty$. If
$$\sum_{n\ge1}\frac{\operatorname{Var}(X_n)}{b_n^2}<\infty,$$
then
$$\frac1{b_n}\sum_{k=1}^n(X_k-\mathbb EX_k)\longrightarrow0\quad\text{almost surely}.$$
In particular, for IID centered square-integrable variables and any $\varepsilon>0$, $S_n/[\sqrt n(\log n)^{1/2+\varepsilon}]\to0$ almost surely (the displayed normalization is used for $n\ge2$).

## Proof

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 For $n\ge2$, $n^{-2}\le(n-1)^{-1}-n^{-1}$. Therefore $\sum_{n=1}^N\operatorname{Var}(X_n)/n^2\le C(2-1/N)\le2C$; these nonnegative partial sums have a finite supremum, so the variance series converges. [given, algebra]

2.1 The normalizers $b_n=n$ are positive, nondecreasing and tend to infinity. The independence and square-integrability are given, and step 1.1 verifies the summability hypothesis of F1. Its almost-sure conclusion is exactly the stated centered law. [F1, step 1.1] ∎
