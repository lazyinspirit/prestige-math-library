---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-componentwise-shannon-mcmillan-breiman.json
  precheck: pass
id: thm-componentwise-shannon-mcmillan-breiman
kind: theorem
title: "Componentwise Shannon–McMillan–Breiman theorem"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-finite-alphabet-stationary-source
  - def-finite-block-information-and-entropy
  - lem-finite-block-entropy-chain-rule
  - thm-stationary-entropy-rate-limit
  - def-past-information-density-finite-alphabet
  - lem-finite-alphabet-past-information-convergence
  - lem-triangular-information-averages
  - thm-birkhoff-ergodic-theorem
  - lem-ergodic-averages-converge-in-l-p-on-finite-measure-spaces
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

For every stationary finite-alphabet source, proves $-n^{-1}\log_2 P(X_0^{n-1})$ converges almost surely and in L1 to the invariant Birkhoff limit of infinite-past information density, with mean equal to the entropy rate in bits.

## Facts & Assumptions

**Given:** A stationary finite-alphabet source $X$ over $\mathcal A$, entropy rate $h$, and $g_k,g_\infty$ from [[def-past-information-density-finite-alphabet]].

[F1] [[lem-finite-alphabet-past-information-convergence]]: $g_k\to g_\infty$ almost surely, $g_\infty\in L^1$, and $E g_\infty=h$.

[F2] [[lem-triangular-information-averages]]: under the integrable envelope, $n^{-1}\sum_{i<n}g_i(T^i x)$ and $n^{-1}\sum_{i<n}g_\infty(T^i x)$ have the same almost-sure limit.

[F3] [[thm-birkhoff-ergodic-theorem]]: time averages of $g_\infty$ converge almost surely to an invariant integrable limit.

[F4] [[lem-ergodic-averages-converge-in-l-p-on-finite-measure-spaces]]: those averages converge in $L^1$ on the probability space.

## Proof

**Given:** The source and [F1]–[F4].

1.1 The chain rule for finite block probabilities gives, almost surely, $$-\log_2P(X_0^{n-1})=\sum_{i=0}^{n-1}-\log_2P(X_i\mid X_0^{i-1})=\sum_{i=0}^{n-1}g_i(T^iX).$$ The equality holds on positive-probability blocks; their complement has probability zero. [F1, given, algebra]

2.1 By [F3]–[F4], $A_ng_\infty=n^{-1}\sum_{i<n}g_\infty(T^iX)$ converges almost surely and in $L^1$ to an invariant random variable $G^*$. By [F2] and step 1.1, the difference between $-n^{-1}\log_2P(X_0^{n-1})$ and $A_ng_\infty$ tends to zero almost surely and in $L^1$. This proves both asserted modes of convergence. [F1, F2, F3, F4, step 1.1]

3.1 The $L^1$ convergence [F4] implies $E G^*=E g_\infty=h$; the limit is therefore finite and has mean equal to the stationary entropy rate. It need not be constant without ergodicity. [F1, F4, step 2.1, algebra] ∎
