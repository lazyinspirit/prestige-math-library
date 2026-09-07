---
id: cor-independent-nonidentical-finite-variance-strong-law
title: "Strong law for independent nonidentical variables"
kind: corollary
status: draft
origin: pipeline
deps: ["thm-kolmogorov-strong-law-under-summable-normalized-variances"]
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Theorems 2.5.6 and 2.5.9, pp. 84\u201386"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
proof_strategy: "Specialize the normalizer to n; no common law or common mean is needed."
---

## Statement

For independent square-integrable real random variables $(X_n)_{n\ge1}$, the condition $\sum_{n\ge1}\operatorname{Var}(X_n)/n^2<\infty$ implies
$$\frac{S_n-\mathbb ES_n}{n}\longrightarrow0\quad\text{almost surely},\qquad S_n=\sum_{k=1}^nX_k.$$
The variables need not have a common law or a common mean.

## Facts & Assumptions

[F1] [[thm-kolmogorov-strong-law-under-summable-normalized-variances]]: Let $(X_n)_{n\ge1}$ be independent square-integrable real random variables. Let $0<b_n$ be deterministic and nondecreasing with $b_n\to\infty$. If $\sum_{n\ge1}\frac{\operatorname{Var}(X_n)}{b_n^2}<\infty,$ then $\frac1{b_n}\sum_{k=1}^n(X_k-\mathbb EX_k)\longrightarrow0\quad\text{almost surely}.$ In particular, for IID centered square-integrable variables and any $\varepsilon>0$, $S_n/[\sqrt n(\log n)^{1/2+\varepsilon}]\to0$ almost surely (the displayed normalization is used for $n\ge2$).

## Proof

**Given:** The objects and hypotheses of the statement.

1.1 Take $b_n=n$ for $n\ge1$. This sequence is positive, increasing, and tends to infinity, and the required normalized variance series is exactly the one in the hypothesis. [given, algebra]

2.1 The normalized-variance strong law gives $n^{-1}\sum_{k=1}^n(X_k-\mathbb EX_k)\to0$ almost surely. Finite linearity identifies the numerator with $S_n-\mathbb ES_n$. This includes zero variance and deterministic variables and requires no relation between different means. [F1, step 1.1, algebra] ∎
