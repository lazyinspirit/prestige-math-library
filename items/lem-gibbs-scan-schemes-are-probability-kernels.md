---
id: lem-gibbs-scan-schemes-are-probability-kernels
kind: lemma
title: Random and systematic scan kernels are well-defined
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - alg-gibbs-scan-schemes
  - lem-gibbs-block-update-is-a-probability-kernel
  - def-composition-of-probability-kernels
  - lem-kernel-composition-is-well-defined-and-associative
  - def-probability-measure
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

Let $m\ge1$, let $(S,\mathcal S)$ be one finite-product state space with target probability $\pi$, and let $P_1,\ldots,P_m:S\to S$ be exact Gibbs block-update probability kernels for that same $\pi$, as in [[alg-gibbs-scan-schemes]]. If weights $w_j\ge0$ with $\sum_{j=1}^m w_j=1$ are supplied, the random-scan branch defines a probability kernel on $S$. Independently of any weights, the systematic-scan branch defines a probability kernel on $S$.

## Facts & Assumptions

**Given:** The common finite-product state space, target probability, and finite list of exact block-update probability kernels in the Statement; weights are additionally supplied only for the random-scan branch.

[F1] Each block update is a probability kernel. [[lem-gibbs-block-update-is-a-probability-kernel]].

[F2] The random-scan evaluation is the finite weighted sum $\sum_jw_jP_j(x,A)$. [[alg-gibbs-scan-schemes]].

[F3] Composition in chronological order is $(KL)(x,A)=\int L(y,A)K(x,dy)$ and finite composition of probability kernels is well-defined. [[def-composition-of-probability-kernels]], [[lem-kernel-composition-is-well-defined-and-associative]].

## Proof
**Given:** The hypotheses in the Statement and facts [F1]–[F3].

1.1 For each measurable $A$, the finite weighted sum in [F2] is measurable in $x$ by [F1], and it is nonnegative. For pairwise disjoint $A_n$, countable additivity of each $P_j(x,\cdot)$ gives $\sum_jw_jP_j(x,\bigcup_nA_n)=\sum_jw_j\sum_nP_j(x,A_n)=\sum_n\sum_jw_jP_j(x,A_n)$; the interchange is valid because the sum over $j$ is finite and every term is nonnegative. Its total mass is $\sum_jw_jP_j(x,S)=\sum_jw_j=1$. Hence the random-scan kernel is a probability kernel. [F1, F2, algebra]

2.1 Each $P_j$ is a probability kernel by [F1]. Repeated application of the composition result in [F3] shows that $P_1\cdots P_m$ is a probability kernel; associativity makes this finite product independent of parenthesization. This is the full-sweep transition kernel. [F1, F3, construct] ∎
