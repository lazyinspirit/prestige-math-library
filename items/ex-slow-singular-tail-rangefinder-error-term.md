---
id: ex-slow-singular-tail-rangefinder-error-term
kind: example
title: A slowly decaying singular tail makes the Frobenius term dominate
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps: [thm-real-gaussian-rangefinder-expected-spectral-error, thm-singular-value-decomposition, thm-operator-norm-is-the-largest-singular-value]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Halko, Martinsson, and Tropp, Theorem 10.6 and discussion after it"
      url: "https://users.oden.utexas.edu/~pgm/Pubs/2010_HMT_random_review.pdf"
    - title: "Martinsson and Tropp, Theorem 11.5 and discussion after it"
      url: "https://arxiv.org/pdf/2002.01387"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

Fix integers $k\ge2$ and $p\ge2$. For every $n\ge k+p$, let
$A_n=\operatorname{diag}(1,2^{-1/2},\ldots,n^{-1/2})$. In the real Gaussian
range-finder bound, the second term involving
$\left(\sum_{j>k}\sigma_j^2\right)^{1/2}$ eventually exceeds the term
involving $\sigma_{k+1}$ by an arbitrarily large factor as $n\to\infty$.

## Facts & Assumptions

**Given:** Fixed $k,p$ as above and the family of finite diagonal matrices $A_n$.

[F1] The expected error bound has first term $(1+\sqrt{k/(p-1)})\sigma_{k+1}$ and second term $(e\sqrt{k+p}/p)(\sum_{j>k}\sigma_j^2)^{1/2}$ ([[thm-real-gaussian-rangefinder-expected-spectral-error]]).

## Verification

1.1 The diagonal entries are decreasing, so they are the singular values of $A_n$, and $\sigma_{k+1}=(k+1)^{-1/2}$ while $\sum_{j>k}\sigma_j^2=\sum_{j=k+1}^n1/j$. [given, F1, algebra]

2.1 Since $x\mapsto1/x$ is decreasing, $\sum_{j=k+1}^n1/j\ge\int_{k+1}^{n+1}dx/x=\log((n+1)/(k+1))$, which diverges with $n$. The coefficient $e\sqrt{k+p}/p$ is positive and fixed, while the first-term coefficient and $\sigma_{k+1}$ are fixed. Therefore the ratio of the second term to the first tends to infinity; choosing $n$ large makes the tail-Frobenius contribution dominate by any prescribed factor. [step 1.1, algebra] ∎
