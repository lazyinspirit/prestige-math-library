---
id: alg-leverage-score-row-sampling-sketch
kind: algorithm
title: With-replacement leverage-score row sampling and rescaling
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: sketched-least-squares-and-subspace-embeddings
dependency_level: 2
deps:
  - def-subspace-leverage-scores
  - lem-subspace-leverage-score-identities
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "David P. Woodruff, Sketching as a Tool for Numerical Linear Algebra, §2.4, Definition 16"
      url: "https://arxiv.org/pdf/1411.4357"
    - title: "Michael W. Mahoney, Randomized Algorithms for Matrices and Data, §4.2"
      url: "https://www.math.ucdavis.edu/~strohmer/courses/270/RandLA.pdf"
---

## Definition

Input an orthonormal basis matrix $Q\in\mathbb K^{n\times d}$ with
$d\ge1$, a sample count $m\ge1$, a parameter $0<\beta\le1$, and a
probability vector $\pi=(\pi_0,\ldots,\pi_{n-1})$ satisfying
$\pi_i\ge\beta\ell_i(U)/d$, where $U=\operatorname{Ran}(Q)$ and
$\ell_i(U)$ is from [[def-subspace-leverage-scores]]. If the input checks
fail, return `invalid-input`. Otherwise draw indices $J_1,\ldots,J_m$
independently with replacement from $\pi$. Form $S\in\mathbb K^{m\times n}$
by setting row $j$ to $e_{J_j}^*/\sqrt{m\pi_{J_j}}$, and return `success`,
the selected indices, and $S$.

Because $\beta>0$, $\pi_i=0$ implies $\ell_i(U)=0$; such a row is
never sampled, so the scaling never divides by zero. One canonical choice is
$\pi_i=\ell_i(U)/d$, which sets every zero-leverage row's probability to
zero. Other admissible distributions may assign positive probability to a
zero-leverage row, but that choice wastes samples. Repeated indices are
allowed and are distinct rows of $S$.
