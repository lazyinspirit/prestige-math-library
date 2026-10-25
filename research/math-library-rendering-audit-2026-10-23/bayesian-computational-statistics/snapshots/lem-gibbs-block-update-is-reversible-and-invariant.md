---
id: lem-gibbs-block-update-is-reversible-and-invariant
kind: lemma
title: Each exact Gibbs block update is reversible and invariant
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - alg-gibbs-block-update
  - lem-gibbs-block-update-is-a-probability-kernel
  - def-gibbs-full-conditional-kernel
  - def-gibbs-reversibility-for-a-markov-kernel
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-probability-measure
  - lem-finite-products-of-probability-kernels
  - lem-prior-and-model-kernel-define-joint-law
  - thm-measure-uniqueness-on-a-sigma-finite-pi-system
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
axiom_use: "No choice principle is used. A proper full conditional kernel is supplied as part of the hypotheses."
---

## Statement

Let $\pi$ be a probability on a finite product state space and let $K_B$ be a supplied proper full conditional kernel for a nonempty block $B$. The exact block-update kernel $P_B$ of [[alg-gibbs-block-update]] is reversible with respect to $\pi$ and leaves $\pi$ invariant.

## Facts & Assumptions

**Given:** The target probability, block, and supplied proper full conditional kernel in the Statement.

[F1] A proper full conditional kernel is pointwise a probability kernel and satisfies the block event identities against $\pi_{-B}$. [[def-gibbs-full-conditional-kernel]].

[F2] The transition is $P_B(x,C)=\int\mathbf1_C(\operatorname{splice}_B(x_{-B},u))K_B(x_{-B},du)$. [[alg-gibbs-block-update]].

[F3] The update is a probability kernel. [[lem-gibbs-block-update-is-a-probability-kernel]].

[F4] A probability measure with a probability kernel defines a joint law with iterated-integral formula. [[lem-prior-and-model-kernel-define-joint-law]].

[F5] The product measure $K_B(z,\cdot)\otimes K_B(z,\cdot)$ exists and is characterized by its rectangle evaluations. [[lem-finite-products-of-probability-kernels]].

[F6] Reversibility is the identity $\int_A P(x,C)\pi(dx)=\int_C P(y,A)\pi(dy)$ for every pair of measurable events. [[def-gibbs-reversibility-for-a-markov-kernel]].

[F7] Invariance means $(\pi P)(A)=\int P(x,A)\pi(dx)=\pi(A)$ for every measurable $A$. [[def-invariant-and-stationary-distribution-for-a-markov-kernel]].

[F8] Finite measures agreeing on a generating rectangle pi-system agree on the product sigma-algebra. [[thm-measure-uniqueness-on-a-sigma-finite-pi-system]].

## Proof
**Given:** The hypotheses in the Statement and facts [F1]–[F8].

1.1 The full conditional identity [F1] says that the target law in coordinates $(z,u)$ and the iterated law $\pi_{-B}(dz)K_B(z,du)$ agree on coordinate rectangles. Both are probability measures, and rectangles generate the finite product sigma-algebra, so [F8] makes them equal on every product-measurable event. Integrating nonnegative simple functions and then increasing limits gives $\int h(x)\pi(dx)=\int\pi_{-B}(dz)\int h(\operatorname{splice}_B(z,u))K_B(z,du)$ for every nonnegative product-measurable $h$. [F1, F8, algebra]

2.1 Let $M$ be the joint law of the current and updated states under initial law $\pi$ and transition $P_B$, which exists by [F3]–[F4]. For arbitrary measurable $A,C\subseteq S$, the update formula and step 1.1 give $M(A\times C)=\int\pi_{-B}(dz)\int K_B(z,du)\mathbf1_A(\operatorname{splice}_B(z,u))\int K_B(z,dv)\mathbf1_C(\operatorname{splice}_B(z,v))$. All integrands are bounded measurable functions, so the iterated integrals are defined. [F2, F3, F4, step 1.1]

3.1 For each $z$, the product measure $K_B(z,\cdot)\otimes K_B(z,\cdot)$ is invariant under swapping its two coordinates: the product measure and its swapped image agree on every rectangle because $K_B(z,A)K_B(z,C)=K_B(z,C)K_B(z,A)$, hence agree on the generated product sigma-algebra by [F8]. Applying this symmetry to the two inner factors in step 2.1 yields $M(A\times C)=M(C\times A)$ for arbitrary $A,C$. By [F6], $P_B$ is reversible with respect to $\pi$. [F5, F6, F8, step 2.1, algebra]

4.1 Set $C=S$ in the detailed-balance identity of step 3.1. Since $P_B(x,S)=1$, its left side is $\pi(A)$ and its right side is $\int P_B(y,A)\pi(dy)=(\pi P_B)(A)$. This is invariance by [F7], for every measurable $A$. [F3, F6, F7, step 3.1] ∎
