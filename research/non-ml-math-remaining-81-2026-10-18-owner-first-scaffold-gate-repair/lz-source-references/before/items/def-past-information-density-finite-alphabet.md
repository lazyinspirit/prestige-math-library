---
id: def-past-information-density-finite-alphabet
kind: definition
title: "Finite-past information densities"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-finite-alphabet-stationary-source
  - def-finite-block-information-and-entropy
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; finite-alphabet sums and code constructions are explicit, and cited measure-theoretic results retain their stated hypotheses."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
---
## Definition

Consider a stationary finite-alphabet source $(X_i)_{i\in\mathbb Z}$ with law $P$ and alphabet $\mathcal A$.

For $k\ge0$, let $\mathcal F_k=\sigma(X_{-k},\ldots,X_{-1})$, with $\mathcal F_0$ trivial. For each $a\in\mathcal A$, define $p_k(a)=P(X_0=a\mid\mathcal F_k)$ by averaging over the finite atoms of $\mathcal F_k$, and put $g_k=-\log_2p_k(X_0)$ on the event $p_k(X_0)>0$, with arbitrary value on its null complement.

The selected probability is positive almost surely: on each atom $B\in\mathcal F_k$ with $P(B)>0$, $P(X_0=a\mid B)=0$ implies $P(B\cap\{X_0=a\})=0$. Thus $g_k$ is finite almost surely; [[def-finite-alphabet-stationary-source]] identifies the same distributions after shifting any finite window.

## Facts & Assumptions

**Given:** A stationary finite-alphabet source $(X_i)_{i\in\mathbb Z}$ with law $P$ and alphabet $\mathcal A$.

[F1] [[def-finite-alphabet-stationary-source]]: the shift on $\mathcal A^{\mathbb Z}$ preserves $P$.

## Proof

**Given:** The source and conventions [F1]–[F2].

1.1 For $k\ge0$, let $\mathcal F_k=\sigma(X_{-k},\ldots,X_{-1})$, with $\mathcal F_0$ trivial. For each $a\in\mathcal A$, define $p_k(a)=P(X_0=a\mid\mathcal F_k)$ by averaging over the finite atoms of $\mathcal F_k$, and put $g_k=-\log_2p_k(X_0)$ on the event $p_k(X_0)>0$, with arbitrary value on its null complement. [given, algebra]

2.1 The selected probability is positive almost surely: on each atom $B\in\mathcal F_k$ with $P(B)>0$, $P(X_0=a\mid B)=0$ implies $P(B\cap\{X_0=a\})=0$. Thus $g_k$ is finite almost surely; [F1] identifies the same distributions after shifting any finite window. [F1, step 1.1, algebra] ∎
