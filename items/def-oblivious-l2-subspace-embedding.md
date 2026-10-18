---
id: def-oblivious-l2-subspace-embedding
kind: definition
title: Oblivious squared-norm subspace embeddings
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: sketched-least-squares-and-subspace-embeddings
dependency_level: 0
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "David P. Woodruff, Sketching as a Tool for Numerical Linear Algebra, §2.1, Definitions 1–2"
      url: "https://arxiv.org/pdf/1411.4357"
    - title: "Michael W. Mahoney, Randomized Algorithms for Matrices and Data, §2.1"
      url: "https://www.math.ucdavis.edu/~strohmer/courses/270/RandLA.pdf"
verification:
  precheck: n/a
---

## Definition

Let $\mathbb K\in\{\mathbb R,\mathbb C\}$, let $n,m\ge1$, and use
$\|x\|_2^2=\sum_i|x_i|^2$ on $\mathbb K^n$. For a fixed subspace
$U\subseteq\mathbb K^n$ and $0<\varepsilon<1$, a matrix
$S\in\mathbb K^{m\times n}$ is an **$\varepsilon$-subspace embedding
for $U$** when
$$
(1-\varepsilon)\|x\|_2^2\le\|Sx\|_2^2\le(1+\varepsilon)\|x\|_2^2\quad\text{for every }x\in U.
$$

For an integer $d$ with $0\le d\le n$ and $0<\delta<1$,
a distribution $\mathcal D$ on $m\times n$
matrices is an **$(\varepsilon,\delta)$ oblivious $\ell_2$ subspace
embedding for dimension $d$** if, for every fixed $d$-dimensional
subspace $U\subseteq\mathbb K^n$ chosen independently of the draw,
$$
\Pr_{S\sim\mathcal D}\{S\text{ is an }\varepsilon\text{-subspace embedding for }U\}\ge1-\delta.
$$
The subspace is fixed before sampling, but the guarantee is stated separately
for each such $U$; it does not assert that one draw preserves all
$d$-dimensional subspaces simultaneously. For a matrix $A$, an embedding
of $\operatorname{Ran}(A)$ means the property on its column space. For
least-squares residuals $Ax-b$, the relevant subspace is
$\operatorname{span}(\operatorname{Ran}(A),b)$.
