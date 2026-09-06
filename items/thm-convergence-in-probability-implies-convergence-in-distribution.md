---
id: thm-convergence-in-probability-implies-convergence-in-distribution
kind: theorem
title: "Convergence in probability implies convergence in distribution"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-atom-and-continuity-point-of-a-law, def-convergence-in-distribution-for-real-random-variables, def-convergence-in-probability]
proof_strategy: direct
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 3.2"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

If $X_n\to X$ in probability, then $X_n\Rightarrow X$.

## Facts & Assumptions

**Given:** $X_n\to X$ in probability.

[L1] Distributional convergence is CDF convergence at every continuity point
of the limit CDF ([[def-convergence-in-distribution-for-real-random-variables]]).

[L2] Convergence in probability controls every fixed error threshold
([[def-convergence-in-probability]]).

## Proof

**Proof technique:** direct.

1.1 Fix a continuity point $x$ of $F_X$ and $\delta>0$. The following inclusions give a CDF squeeze. [given]
$\{X\le x-\delta\}\setminus\{|X_n-X|>\delta\}\subseteq\{X_n\le x\}
\subseteq\{X\le x+\delta\}\cup\{|X_n-X|>\delta\}$ give
$$F_X(x-\delta)-p_n\le F_{X_n}(x)\le F_X(x+\delta)+p_n,$$
where $p_n=\mathbb P(|X_n-X|>\delta)$. [given]

2.1 By [L2], $p_n\to0$; taking liminf and limsup in step 1.1 gives the required limiting bounds. [step 1.1, L1, L2]
$\delta\downarrow0$ uses continuity at $x$ to give $F_{X_n}(x)\to F_X(x)$.
By [L1], this is $X_n\Rightarrow X$. [step 1.1, L1, L2] ∎
