---
id: cex-convergence-in-distribution-need-not-be-in-probability
kind: counterexample
title: "Convergence in distribution need not be convergence in probability"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-convergence-in-distribution-for-real-random-variables, def-convergence-in-probability]
proof_strategy: direct
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 3.2"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement refuted

Convergence in distribution need not imply convergence in probability.

## Facts & Assumptions

**Given:** A random variable $X$ with $\mathbb P(X=1)=\mathbb P(X=-1)=1/2$, and $X_n=-X$.

[L1] Distributional convergence is convergence of the corresponding CDFs at continuity points ([[def-convergence-in-distribution-for-real-random-variables]]).

[L2] Probability convergence makes every positive error probability vanish ([[def-convergence-in-probability]]).

## Counterexample

**Proof technique:** direct.

1.1 The symmetric two-point law of $-X$ equals that of $X$, so $F_{X_n}=F_X$ for every $n$. Therefore $X_n\Rightarrow X$ by [L1]. [L1]

2.1 But $|X_n-X|=2$ almost surely, so $\mathbb P(|X_n-X|>1)=1$ for every $n$. By [L2], $X_n$ does not converge to $X$ in probability. [step 1.1, L2] ∎
