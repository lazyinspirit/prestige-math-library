---
id: cor-uniform-integrability-characterizes-l1-convergence-under-probability-convergence
kind: corollary
title: "Uniform integrability characterizes $L^1$ convergence under probability convergence"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-l1-convergence-implies-uniform-integrability, thm-uniform-integrability-plus-probability-convergence-implies-l1-convergence]
proof_strategy: direct
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Theorem 4.6.3"
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

Suppose $X_n\to X$ in probability. Then $X_n\to X$ in $L^1$ if and only if
$\{X_n:n\in\mathbb N\}$ is uniformly integrable.

## Facts & Assumptions

**Given:** $X_n\to X$ in probability and each $X_n$ is integrable.

[L1] $L^1$ convergence makes the sequence together with its limit uniformly integrable ([[thm-l1-convergence-implies-uniform-integrability]]).

[L2] Uniform integrability plus probability convergence gives $L^1$ convergence ([[thm-uniform-integrability-plus-probability-convergence-implies-l1-convergence]]).

## Proof

**Proof technique:** direct.

1.1 If $X_n\to X$ in $L^1$, [L1] makes the larger family uniformly integrable. [L1] Thus its subfamily $\{X_n:n\in\mathbb N\}$ is uniformly integrable. [L1]

2.1 Conversely, if $(X_n)$ is uniformly integrable, [L2] applies to the given probability convergence. [L2] It yields $X\in L^1$ and $X_n\to X$ in $L^1$. [L2] ∎
