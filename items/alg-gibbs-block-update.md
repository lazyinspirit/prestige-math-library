---
id: alg-gibbs-block-update
kind: algorithm
title: Exact Gibbs block update
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-gibbs-full-conditional-kernel
  - def-measure-kernel-and-probability-kernel
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-measurable-function-between-measurable-spaces
  - thm-measurability-of-integration-against-a-kernel
justified_by:
  - lem-gibbs-block-update-is-a-probability-kernel
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 12"
      url: "https://artowen.su.domains/mc/Ch-MCMC.pdf"
    - title: "Gareth O. Roberts and Jeffrey S. Rosenthal, General State Space Markov Chains and MCMC Algorithms"
      url: "https://www.probability.ca/jeff/ftpdir/probsurv.pdf"
axiom_use: "No choice principle is needed once the proper full conditional kernel is supplied."
---

## Definition

**Inputs:** The finite product state space and target law from [[def-gibbs-full-conditional-kernel]], a nonempty block $B$, its supplied proper full conditional kernel $K_B$, and a current state $x\in S$.

**Output:** A new state $x'\in S$ whose retained coordinates equal $x_{-B}$ and whose updated block is sampled from $K_B(x_{-B},\cdot)$.

The transition kernel is
$$P_B(x,C)=\int_{S_B}\mathbf1_C\!\left(\operatorname{splice}_B(x_{-B},u)\right)K_B(x_{-B},du),\qquad C\in\mathcal S.$$
Operationally, retain every coordinate outside $B$, draw $u$ from the full conditional kernel at the retained value, and replace the coordinates in $B$ by $u$. The finite product sigma-algebra makes the splice map measurable; the kernel-integral theorem makes the displayed evaluation measurable in $x$. The well-definedness result is [[lem-gibbs-block-update-is-a-probability-kernel]].

