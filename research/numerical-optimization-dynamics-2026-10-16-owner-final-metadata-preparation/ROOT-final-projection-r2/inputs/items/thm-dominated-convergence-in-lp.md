---
id: thm-dominated-convergence-in-lp
kind: theorem
title: "Dominated convergence in $L^p$"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-almost-sure-convergence-of-random-variables, def-convergence-in-lp-for-random-variables, thm-dominated-convergence]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Theorem 1.5.8"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Statement

Let $1\le p<\infty$. If $X_n\to X$ almost surely and $|X_n|\le Y$ almost
surely for every $n$, where $Y\in L^p(\mathbb P)$, then $X_n\to X$ in $L^p$.

## Facts & Assumptions

**Given:** $1\le p<\infty$, $X_n\to X$ almost surely, and $|X_n|\le Y$ almost surely with $Y\in L^p$.

[L1] Dominated convergence gives convergence of integrals under one integrable majorant ([[thm-dominated-convergence]]).

[L2] $L^p$ convergence is convergence of the $p$th absolute moments of the difference ([[def-convergence-in-lp-for-random-variables]]).

## Proof

**Proof technique:** direct.

1.1 Intersect the countably many full-measure events on which $|X_n|\le Y$ with the full-measure convergence event. Outside the resulting null set, $X_n\to X$ and $|X_n|\le Y$ for every $n$, so $|X|\le Y$ there. Since $Y\in L^p$, these bounds also show that every $X_n$ and $X$ belongs to $L^p$. Moreover, $|X_n-X|^p\to0$ almost everywhere and $|X_n-X|^p\le(2|Y|)^p$. [given, algebra]

2.1 Since $(2|Y|)^p$ is integrable, [L1] applied to step 1.1 yields $\mathbb E|X_n-X|^p\to0$. By [L2] and the established $L^p$ membership, this is $X_n\to X$ in $L^p$. [step 1.1, L1, L2] ∎
