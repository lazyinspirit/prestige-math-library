---
id: thm-convergence-in-distribution-to-a-constant-is-convergence-in-probability
kind: theorem
title: "Convergence in distribution to a constant is convergence in probability"
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

## Statement

If the real random variables $X_n$ are defined on one probability space and
$X_n\Rightarrow c$ for a real constant $c$, then $X_n\to c$ in probability
on that space.

## Facts & Assumptions

**Given:** Real random variables $X_n$ on one probability space,
$X_n\Rightarrow c$, and $\varepsilon>0$.

[L1] Distributional convergence gives CDF convergence at continuity points ([[def-convergence-in-distribution-for-real-random-variables]]).

## Proof

**Proof technique:** direct.

1.1 The constant-law CDF is continuous at $c-\varepsilon$ and $c+\varepsilon$, so [L1] gives [L1] $F_{X_n}(c-\varepsilon)\to0$ and $F_{X_n}(c+\varepsilon)\to1$. [L1]

2.1 The error event is contained in the following union. [step 1.1] $\{X_n\le c-\varepsilon\}\cup\{X_n>c+\varepsilon\}$, its probability is at most $F_{X_n}(c-\varepsilon)+1-F_{X_n}(c+\varepsilon)$, which tends to zero. [step 1.1] ∎
