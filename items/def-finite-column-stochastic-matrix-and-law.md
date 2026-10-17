---
id: def-finite-column-stochastic-matrix-and-law
kind: definition
title: "Finite column-stochastic matrices and probability vectors"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-transition-matrix-and-n-step-transition-probabilities]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Charles M. Grinstead and J. Laurie Snell, Introduction to Probability, Chapter 11"
      url: "https://math.dartmouth.edu/~prob/prob/OLD/prob.pdf"
      locator: "Chapter 11 §§11.1–11.4; the book's transition matrices act on row probability vectors."
    - title: "Ilse C. F. Ipsen and Teresa M. Selee, Ergodicity Coefficients Defined by Vector Norms"
      url: "https://ipsen.math.ncsu.edu/ps/simax75294.pdf"
      locator: "§3, Theorem 3.7; stochastic matrices and the ℓ1 coefficient, with the row convention made explicit."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
axiom_use: "No choice principle is used."
---

## Definition

Let $S=\{1,\ldots,n\}$ with $n\ge1$. A matrix $P=(P_{ij})_{i,j\in S}$ is **column-stochastic** when $P_{ij}\ge0$ and $\sum_{i\in S}P_{ij}=1$ for every source index $j$. A **column probability vector** is $x\in\mathbb R^n$ with $x_i\ge0$ and $\sum_i x_i=1$. A **stationary probability vector** for $P$ is a column probability vector $\pi$ satisfying $P\pi=\pi$. For $z\in\mathbb R^n$, write $\|z\|_1=\sum_i|z_i|$ and $H=\{z:\sum_i z_i=0\}$.

The published transition-matrix convention [[def-transition-matrix-and-n-step-transition-probabilities]] is row-stochastic: its row index is the source and its column index the destination. If $K$ is such a matrix, then $P=K^{\mathsf T}$ is column-stochastic; a row law $u$ updated by $uK$ corresponds to the column law $u^{\mathsf T}$ updated by $P u^{\mathsf T}$. All displays on this page that use $Px$ or $Qx$ use this column convention.
