---
id: thm-systematic-gibbs-sweep-preserves-target
kind: theorem
title: A systematic Gibbs sweep preserves the target
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - alg-gibbs-scan-schemes
  - lem-gibbs-scan-schemes-are-probability-kernels
  - lem-gibbs-block-update-is-reversible-and-invariant
  - def-composition-of-probability-kernels
  - lem-kernel-composition-is-well-defined-and-associative
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-probability-measure
  - lem-prior-and-model-kernel-define-joint-law
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

Let $m\ge1$ and let $P_1,\ldots,P_m$ be exact block-update kernels for the same target probability $\pi$. Under the chronological composition convention of [[def-composition-of-probability-kernels]], the systematic full-sweep kernel $P_1\cdots P_m$ leaves $\pi$ invariant. It need not be reversible.

## Facts & Assumptions

**Given:** The target probability and finite list of exact block updates in the Statement.

[F1] Each exact block update leaves $\pi$ invariant. [[lem-gibbs-block-update-is-reversible-and-invariant]].

[F2] The systematic sweep is the chronological composition $P_1\cdots P_m$. [[alg-gibbs-scan-schemes]].

[F3] Kernel composition is defined by $(KL)(x,A)=\int L(y,A)K(x,dy)$ and is associative. [[def-composition-of-probability-kernels]], [[lem-kernel-composition-is-well-defined-and-associative]].

[F4] Invariance means equality of the measure-kernel product with $\pi$. [[def-invariant-and-stationary-distribution-for-a-markov-kernel]].

[F5] A probability measure and probability kernel have the iterated joint-law integral identity. [[lem-prior-and-model-kernel-define-joint-law]].

## Proof
**Given:** The hypotheses in the Statement and facts [F1]–[F5].

1.1 For two probability kernels $P,Q$, the iterated-kernel identity [F5] gives $\int (PQ)(x,A)\,\pi(dx)=\int Q(y,A)\,(\pi P)(dy)$. This follows by expanding $(PQ)(x,A)=\int Q(y,A)P(x,dy)$ and applying the joint-law iterated-integral identity to the bounded nonnegative function $Q(y,A)$. [F3, F5]

2.1 Define $\mu_0=\pi$ and $\mu_k=\mu_{k-1}P_k$ for $1\le k\le m$. If $\mu_{k-1}=\pi$, then [F1] gives $\mu_k=\pi P_k=\pi$. Induction from $\mu_0=\pi$ yields $\mu_m=\pi$; associativity in [F3] identifies $\mu_m=\pi(P_1\cdots P_m)$, and [F4] calls this invariance. This argument makes no claim that the composition is reversible. [F1, F2, F3, F4, step 1.1] ∎
