---
id: cex-decreasing-convergence-without-an-integrable-start-does-not-preserve-the-integral
kind: counterexample
title: "A decreasing sequence need not satisfy a monotone convergence theorem without an integrable start"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-monotone-convergence-for-the-integral]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., §2.2"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement refuted

If $f_n\downarrow f$ pointwise for nonnegative measurable functions, then
$$\int f_n\,d\mu\downarrow\int f\,d\mu.$$

## Facts & Assumptions

**Given:** The decreasing sequence $f_n:=\chi_{[n,\infty)}$ on $\mathbb R$.

[L1] The monotone convergence theorem is an increasing theorem, not a decreasing one ([[thm-monotone-convergence-for-the-integral]]).

## Counterexample

**Proof technique:** direct.

1.1 The functions $f_n$ decrease pointwise to $0$. [given]

2.1 But $\int f_n\,d\lambda=+\infty$ for every $n$, while $\int0\,d\lambda=0$. [step 1.1, L1, algebra] ∎
So the displayed conclusion fails, confirming the directionality recorded in
[L1].
