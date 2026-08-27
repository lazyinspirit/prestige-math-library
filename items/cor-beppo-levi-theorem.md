---
id: cor-beppo-levi-theorem
kind: corollary
title: "Beppo Levi's theorem for nonnegative series"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-monotone-convergence-for-the-integral, cor-additivity-of-the-nonnegative-lebesgue-integral, prop-closure-properties-of-measurable-functions-used-by-the-integral]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Proposition 7.6"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 2.15"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Let $(f_k)$ be nonnegative measurable functions and let
$$S_n:=\sum_{k<n}f_k,\qquad S:=\sum_{k=0}^\infty f_k.$$
Then
$$\int S\,d\mu=\sum_{k=0}^\infty \int f_k\,d\mu.$$

## Facts & Assumptions

**Given:** A sequence $(f_k)$ of nonnegative measurable functions.

[L1] Measurable nonnegative functions are closed under finite sums and increasing pointwise suprema ([[prop-closure-properties-of-measurable-functions-used-by-the-integral]]).

[L2] The nonnegative integral is additive ([[cor-additivity-of-the-nonnegative-lebesgue-integral]]).

[L3] Monotone convergence holds for the nonnegative integral ([[thm-monotone-convergence-for-the-integral]]).

## Proof

**Proof technique:** direct.

1.1 Each partial sum $S_n$ is measurable by [L1], the sequence $(S_n)$ is [L1, given]
increasing, and $S_n\uparrow S$ pointwise.

2.1 By [L2], $\int S_n\,d\mu=\sum_{k<n}\int f_k\,d\mu$ for every $n$. Applying [step 1.1, L2, L3, algebra] ∎
[L3] to step 1.1 gives
$$\int S\,d\mu=\lim_n\int S_n\,d\mu=\lim_n\sum_{k<n}\int f_k\,d\mu,$$
which is exactly the displayed series identity.
