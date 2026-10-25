---
id: def-gibbs-full-conditional-kernel
kind: definition
title: Proper full conditional kernel
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-measure-kernel-and-probability-kernel
  - def-probability-measure
  - def-regular-conditional-distribution
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-measurability-of-integration-against-a-kernel
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 12"
      url: "https://artowen.su.domains/mc/Ch-MCMC.pdf"
    - title: "Gareth O. Roberts and Jeffrey S. Rosenthal, General State Space Markov Chains and MCMC Algorithms"
      url: "https://www.probability.ca/jeff/ftpdir/probsurv.pdf"
verification:
  precheck: n/a
axiom_use: "No choice principle is used to define a supplied kernel. This definition asserts no existence."
---

## Definition

Let $I$ be a finite nonempty index set, let $(S_i,\mathcal S_i)_{i\in I}$ be measurable spaces, set $S=\prod_{i\in I}S_i$ with its finite product sigma-algebra, and let $\pi$ be a probability measure on $S$. For a nonempty block $B\subseteq I$, write $S_B=\prod_{i\in B}S_i$, $S_{-B}=\prod_{i\in I\setminus B}S_i$, let $p_{-B}:S\to S_{-B}$ be the coordinate projection, and define $\pi_{-B}(D):=\pi(p_{-B}^{-1}(D))$ for measurable $D\subseteq S_{-B}$.

Products and product sigma-algebras use the empty-product convention in [[def-product-sigma-algebra-and-finite-product-sigma-algebras]]: if $B=I$, then $S_{-B}$ is the one-point space $\{()\}$ with its trivial sigma-algebra.

A **proper full conditional kernel** for block $B$ is a supplied probability kernel $K_B:S_{-B}\to S_B$ such that for every product-measurable $C\subseteq S$ and every measurable $D\subseteq S_{-B}$,
$$\pi\bigl(C\cap p_{-B}^{-1}(D)\bigr)=\int_D K_B(z,C_z)\,\pi_{-B}(dz),\qquad C_z:=\{u\in S_B:\operatorname{splice}_B(z,u)\in C\}.$$
Here $\operatorname{splice}_B(z,u)$ is the unique state whose coordinates on $I\setminus B$ are $z$ and whose coordinates on $B$ are $u$. This is the event-identity definition of a regular conditional distribution of the block given the retained coordinates, with every kernel section a probability measure at every $z$. It makes no existence claim; the A-page density corollary gives one sufficient case.

