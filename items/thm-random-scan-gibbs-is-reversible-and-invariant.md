---
id: thm-random-scan-gibbs-is-reversible-and-invariant
kind: theorem
title: Random-scan Gibbs is reversible and invariant
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - alg-gibbs-scan-schemes
  - lem-gibbs-scan-schemes-are-probability-kernels
  - lem-gibbs-block-update-is-reversible-and-invariant
  - def-gibbs-reversibility-for-a-markov-kernel
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-probability-measure
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 12"
      url: "https://artowen.su.domains/mc/Ch-MCMC.pdf"
    - title: "Gareth O. Roberts and Jeffrey S. Rosenthal, General State Space Markov Chains and MCMC Algorithms"
      url: "https://www.probability.ca/jeff/ftpdir/probsurv.pdf"
axiom_use: "No choice principle is used."
---

## Statement

Let $m\ge1$, let $P_1,\ldots,P_m$ be exact block-update kernels for one target probability $\pi$, and let $w_j\ge0$ with $\sum_{j=1}^m w_j=1$. Then $P_{\rm rand}=\sum_{j=1}^m w_jP_j$ is reversible with respect to $\pi$ and leaves $\pi$ invariant. No irreducibility or convergence conclusion follows from this statement.

## Facts & Assumptions

**Given:** The target, exact block updates, and weights in the Statement.

[F1] Each exact block update is reversible and invariant for the target. [[lem-gibbs-block-update-is-reversible-and-invariant]].

[F2] Random scan uses the kernel $P_{\rm rand}(x,A)=\sum_jw_jP_j(x,A)$. [[alg-gibbs-scan-schemes]].

[F3] Reversibility is the two-event detailed-balance identity. [[def-gibbs-reversibility-for-a-markov-kernel]].

[F4] Invariance is equality $\pi P_{\rm rand}=\pi$. [[def-invariant-and-stationary-distribution-for-a-markov-kernel]].

[F5] The random-scan mixture has probability-measure sections and measurable evaluations. [[lem-gibbs-scan-schemes-are-probability-kernels]].

[F6] The nonnegative integral is additive for finite sums. [[cor-additivity-of-the-nonnegative-lebesgue-integral]].

[F7] The nonnegative integral is homogeneous for nonnegative scalar multiples. [[prop-order-and-scalar-rules-for-the-nonnegative-integral]].

## Proof
**Given:** The hypotheses in the Statement and facts [F1]–[F7].

1.1 By [F2] and nonnegativity of the weights, for every measurable $A,C$, $\int_A P_{\rm rand}(x,C)\pi(dx)=\sum_{j=1}^m w_j\int_A P_j(x,C)\pi(dx)$. This follows by applying [F7] to each scalar multiple and [F6] repeatedly to the finite sum. [F1, F2, F6, F7]

2.1 Reversibility of each $P_j$ in [F1] changes the last expression to $\sum_{j=1}^m w_j\int_C P_j(y,A)\pi(dy)=\int_C P_{\rm rand}(y,A)\pi(dy)$. Thus the detailed-balance identity [F3] holds for every $A,C$. [F1, F2, F3, step 1.1]

3.1 Set $C$ equal to the whole state space in step 2.1 and use $P_{\rm rand}(y,S)=1$ from [F5]. The resulting identity is $\int P_{\rm rand}(y,A)\pi(dy)=\pi(A)$, which is invariance by [F4]. The proof establishes stationarity only; it does not establish irreducibility, uniqueness, ergodicity, or a rate. [F3, F4, F5, step 2.1] ∎
