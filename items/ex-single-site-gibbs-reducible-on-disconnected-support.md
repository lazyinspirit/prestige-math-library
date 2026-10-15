---
id: ex-single-site-gibbs-reducible-on-disconnected-support
kind: example
title: A constrained support can make single-site Gibbs reducible
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - alg-gibbs-block-update
  - def-gibbs-full-conditional-kernel
  - def-finite-markov-chain-reducible
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
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
axiom_use: "No choice principle is used; all state and transition calculations are finite."
---

## Example

Let the ambient product state space be $S=\{0,1\}\times\{0,1\}$ with its full product sigma-algebra, and let $\pi=\tfrac12\delta_{(0,0)}+\tfrac12\delta_{(1,1)}$. Its support is the constrained diagonal set $E=\{(0,0),(1,1)\}$. Each single-site full conditional is the point mass at the retained coordinate, so either coordinate-update kernel restricts to the identity transition matrix on $E$. The chain on $E$ is reducible under [[def-finite-markov-chain-reducible]].

## Facts & Assumptions

**Given:** The finite state space and target law in the Example.

[F1] A Gibbs block update retains the other coordinate and draws the updated coordinate from its full conditional. [[alg-gibbs-block-update]].

[F2] A finite chain is reducible when it has a nonempty proper closed subset. [[def-finite-markov-chain-reducible]].

[F3] A proper full conditional kernel is an everywhere probability kernel satisfying the conditional event identities. [[def-gibbs-full-conditional-kernel]].

[F4] Measurable rectangles generate the finite product sigma-algebra. [[def-product-sigma-algebra-and-finite-product-sigma-algebras]].

## Verification
**Given:** The hypotheses in the Example and facts [F1]–[F3].

1.1 The coordinate marginals are uniform on $\{0,1\}$. For coordinate 1 set $K_{\{1\}}(t,\cdot)=\delta_t$; for any measurable $C\subseteq S$ and $D\subseteq\{0,1\}$, $\pi(C\cap p_2^{-1}(D))=\tfrac12\sum_{t\in D}\mathbf1_C(t,t)=\int_D K_{\{1\}}(t,C_t)\,\pi_2(dt)$, where $C_t=\{s:(s,t)\in C\}$. Exchanging the coordinates gives the same identity for $K_{\{2\}}(t,\cdot)=\delta_t$. Each section is a probability measure at every conditioning value, and the identities for all $C,D$ prove that these are proper full conditional kernels by [F3]. [F3, F4, given, construct]

2.1 Starting from either state $(t,t)\in E$, updating coordinate 1 draws $t$ from $K_{\{1\}}(t,\cdot)$, and updating coordinate 2 draws $t$ from $K_{\{2\}}(t,\cdot)$. Thus both component transition matrices restricted to $E$ are the identity. Each singleton $\{(0,0)\}$ and $\{(1,1)\}$ is nonempty, proper, and closed, so [F2] makes the restricted finite chain reducible. [F1, F2, step 1.1] ∎
