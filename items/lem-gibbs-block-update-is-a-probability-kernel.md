---
id: lem-gibbs-block-update-is-a-probability-kernel
kind: lemma
title: The Gibbs block update is a probability kernel
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - alg-gibbs-block-update
  - def-gibbs-full-conditional-kernel
  - def-measure-kernel-and-probability-kernel
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-measurability-of-integration-against-a-kernel
  - thm-monotone-convergence-for-the-integral
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

For every supplied proper full conditional kernel, the transition formula in [[alg-gibbs-block-update]] defines a probability kernel on the full product state space.

## Facts & Assumptions

**Given:** A finite product state space, target probability $\pi$, block $B$, and proper full conditional probability kernel $K_B$.

[F1] Each section of $K_B$ is a pointwise probability measure and each event evaluation is measurable. [[def-gibbs-full-conditional-kernel]].

[F2] The block-update formula integrates the indicator of the measurable splice map against $K_B(x_{-B},\cdot)$. [[alg-gibbs-block-update]].

[F3] For a probability kernel, integrating a nonnegative product-measurable function gives a measurable function of the source point. [[thm-measurability-of-integration-against-a-kernel]].

[F4] Increasing nonnegative functions pass through each integral by monotone convergence. [[thm-monotone-convergence-for-the-integral]].

## Proof
**Given:** The hypotheses in the Statement and facts [F1]–[F4].

1.1 For each fixed $x$, the map $u\mapsto\operatorname{splice}_B(x_{-B},u)$ is measurable by the finite product sigma-algebra. Thus $P_B(x,\varnothing)=0$, $P_B(x,S)=\int 1\,dK_B(x_{-B})=1$, and for pairwise disjoint $C_n$ the indicators of their inverse images sum increasingly to the indicator of the inverse image of $\bigcup_nC_n$. [F4] gives countable additivity, so $P_B(x,\cdot)$ is a probability measure. [F1, F2, F4, construct]

2.1 For fixed measurable $C\subseteq S$, the function $(x,u)\mapsto \mathbf1_C(\operatorname{splice}_B(x_{-B},u))$ is product-measurable because coordinate projection and splicing are measurable for the finite product sigma-algebra. The lifted kernel $x\mapsto K_B(x_{-B},\cdot)$ is a probability kernel by [F1] and measurability of the projection. Applying [F3] to this kernel gives measurability of $x\mapsto P_B(x,C)$. Thus every evaluation is measurable and every section is a probability measure. [F1, F2, F3, step 1.1] ∎
