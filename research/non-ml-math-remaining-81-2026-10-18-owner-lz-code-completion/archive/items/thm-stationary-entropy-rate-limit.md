---
id: thm-stationary-entropy-rate-limit
kind: theorem
title: "Entropy-rate limit for a stationary finite-alphabet source"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-finite-alphabet-stationary-source
  - def-finite-block-information-and-entropy
  - lem-finite-block-entropy-chain-rule
  - def-general-process-information-rate
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; finite-alphabet sums and code constructions are explicit, and cited measure-theoretic results retain their stated hypotheses."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
---
## Statement

Proves that n^{-1}H(X_0,...,X_{n-1}) converges under stationarity and equals the limit of the finite-past conditional entropies.

## Facts & Assumptions

**Given:** A stationary finite-alphabet source $(X_i)_{i\in\mathbb Z}$ and $H_n=H(X_0^{n-1})$.

[F1] [[def-finite-alphabet-stationary-source]]: every shifted finite block has the same law as the original block.

[F2] [[def-finite-block-information-and-entropy]]: $H_n$ is the Shannon entropy of the length-$n$ block.

[F3] [[lem-finite-block-entropy-chain-rule]]: joint block entropy is the sum of successive conditional entropies.

## Proof

**Given:** The source and [F1]–[F3].

1.1 By the chain rule, $H(X_0^{n+m-1})=H(X_0^{n-1})+H(X_n^{n+m-1}\mid X_0^{n-1})\le H_n+H_m$. The inequality follows because conditioning cannot increase entropy, and stationarity makes $H(X_n^{n+m-1})=H_m$. Thus $(H_n)$ is subadditive. [F1, F2, F3, given]

1.2 Fix $k\ge1$ and write $n=ak+r$ with $0\le r<k$. Repeated subadditivity gives $H_n\le aH_k+H_r$, where $H_0=0$ and the finitely many $H_r$ are bounded by $k\log_2|\mathcal A|$. Hence $\limsup_n H_n/n\le H_k/k$. Since $H_n/n\ge\inf_{j\ge1}H_j/j$, taking the infimum over $k$ proves the limit exists and equals $h=\inf_{k\ge1}H_k/k$. [F1, F2, F3, step 1.1, algebra]

1.3 The alphabet bound $0\le H_n\le n\log_2|\mathcal A|$ shows $h$ is finite and lies in $[0,\log_2|\mathcal A|]$, including deterministic sources with $h=0$. [F2, step 1.2, algebra] ∎
