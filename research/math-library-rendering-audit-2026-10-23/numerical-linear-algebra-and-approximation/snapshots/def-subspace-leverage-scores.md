---
id: def-subspace-leverage-scores
kind: definition
title: Row leverage scores of a finite-dimensional subspace
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: sketched-least-squares-and-subspace-embeddings
dependency_level: 0
deps:
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
justified_by:
  - lem-subspace-leverage-score-identities
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "David P. Woodruff, Sketching as a Tool for Numerical Linear Algebra, §2.4, Definition 16"
      url: "https://arxiv.org/pdf/1411.4357"
    - title: "Michael W. Mahoney, Randomized Algorithms for Matrices and Data, §4.1"
      url: "https://www.math.ucdavis.edu/~strohmer/courses/270/RandLA.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $\mathbb K\in\{\mathbb R,\mathbb C\}$, and let $U\subseteq\mathbb K^n$
have dimension $d\ge1$. Choose a matrix $Q\in\mathbb K^{n\times d}$
whose columns are an orthonormal basis of $U$, so $Q^*Q=I_d$. For
$0\le i<n$, define the **$i$-th row leverage score of $U$** by
$$
\ell_i(U):=\|e_i^*Q\|_2^2,
$$
where $e_i$ is the $i$-th standard coordinate vector. The following item
proves that this value is independent of the chosen orthonormal basis, so the
definition is well-defined.

## Remarks

Such an orthonormal basis exists for every $U$ here by
[[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]].
