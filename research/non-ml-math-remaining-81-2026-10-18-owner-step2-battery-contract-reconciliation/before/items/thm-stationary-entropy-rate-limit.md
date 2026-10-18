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
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected edition"
      url: "https://ee.stanford.edu/~gray/it.pdf"
      locator: "Chapter 8 §§8.2–8.4, printed pp.153–164: finite-past information, stationary componentwise SMB, nonergodic and AMS entropy-transfer proofs."
---
## Statement

Proves that n^{-1}H(X_0,...,X_{n-1}) converges under stationarity and equals the limit of the finite-past conditional entropies.

## Facts & Assumptions

**Given:** A stationary finite-alphabet source $(X_i)_{i\in\mathbb Z}$ and $H_n=H(X_0^{n-1})$.

[F1] [[def-finite-alphabet-stationary-source]]: every shifted finite block has the same law as the original block.

[F2] [[def-finite-block-information-and-entropy]]: $H_n$ is the Shannon entropy of the length-$n$ block.

[F3] [[lem-finite-block-entropy-chain-rule]]: joint block entropy is the sum of successive conditional entropies, and conditioning on additional finite-valued variables cannot increase conditional entropy.
[F4] [[def-general-process-information-rate]]: for a finite-alphabet process, $0\le H_n/n\le\log_2|\mathcal A|$.

## Proof

**Given:** The source and [F1]–[F3].

1.1 By the chain rule, $H(X_0^{n+m-1})=H(X_0^{n-1})+H(X_n^{n+m-1}\mid X_0^{n-1})\le H_n+H_m$. The inequality follows because conditioning cannot increase entropy, and stationarity makes $H(X_n^{n+m-1})=H_m$. Thus $(H_n)$ is subadditive. [F1, F2, F3, given]

2.1 Fix $k\ge1$ and write $n=ak+r$ with $0\le r<k$. Repeated subadditivity gives $H_n\le aH_k+H_r$, where $H_0=0$ and the finitely many $H_r$ are bounded by $k\log_2|\mathcal A|$. Hence $\limsup_n H_n/n\le H_k/k$. Since $H_n/n\ge\inf_{j\ge1}H_j/j$, taking the infimum over $k$ proves the limit exists and equals $h=\inf_{k\ge1}H_k/k$. [F1, F2, F3, step 1.1, algebra]

3.1 For each $k\ge0$, put $a_k=H(X_0\mid X_{-k}^{-1})$, with $a_0=H(X_0)$ for the empty past. By the conditioning monotonicity in [F3], $(a_k)$ is nonincreasing; it is bounded below by zero, so it has a limit $a_\infty$. The chain rule gives $$H_n=\sum_{i=0}^{n-1}H(X_i\mid X_0^{i-1}).$$ By stationarity [F1], $H(X_i\mid X_0^{i-1})=H(X_0\mid X_{-i}^{-1})=a_i$. Therefore $H_n/n=n^{-1}\sum_{i=0}^{n-1}a_i\to a_\infty$ by Ces\`aro convergence. Comparing with the limit $h$ from step 2.1 yields $h=a_\infty$, the limit of finite-past conditional entropies. By [F4], $h$ is finite and lies in $[0,\log_2|\mathcal A|]$, including deterministic sources with $h=0$. [F1, F2, F3, F4, step 2.1, algebra] ∎
