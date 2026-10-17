---
id: lem-smolyak-rectangular-telescope
kind: lemma
title: Rectangular telescoping of tensor details
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: sparse-grid-cubature-and-mixed-regularity
dependency_level: 3
deps: [def-smolyak-univariate-level-hierarchy, def-smolyak-cubature, lem-finite-sum-laws, def-monoid-finite-product]
justified_by: []
proof_strategy: direct
axiom_use: None. The identity uses only finite sums and products.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "T. Gerstner and M. Griebel, Sparse Grids, Encyclopedia of Quantitative Finance, §Numerical integration"
      url: "https://ins.uni-bonn.de/media/public/publication-media/sparsegrids_j8NLaMi.pdf?name=sparsegrids.pdf"
    - title: "T. Gerstner and M. Griebel, Dimension-Adaptive Tensor-Product Quadrature, §2"
      url: "https://ins.uni-bonn.de/media/public/publication-media/dimadapt.pdf?pk=177"
---

## Statement

Let $d\ge1$ and $m=(m_1,\ldots,m_d)\in\mathbb N_0^d$. For
$R_m:=\{\ell\in\mathbb N_0^d:0\le\ell_j\le m_j\text{ for every }j\}$ and
the details of [[def-smolyak-univariate-level-hierarchy]],
$$\sum_{\ell\in R_m}\Delta_\ell=Q_{m_1}^{(1)}\otimes\cdots\otimes Q_{m_d}^{(d)}.$$

## Facts & Assumptions

**Given:** A dimension $d\ge1$, terminal levels $m_j\in\mathbb N_0$, and the nested one-dimensional level hierarchies.

[F1] [[def-smolyak-univariate-level-hierarchy]]: $\Delta_0=Q_0$ and $\Delta_r=Q_r-Q_{r-1}$ for $r\ge1$, with $Q_{-1}=0$.

[F2] [[def-smolyak-cubature]]: a cubature on a finite index set is the finite sum of the corresponding tensor details.

[F3] [[lem-finite-sum-laws]]: finite sums of successive differences telescope, and finite sums distribute over finite products.

[F4] [[def-monoid-finite-product]]: a finite product is formed by recursively multiplying its coordinate factors.

## Proof

1.1 Fix any one-dimensional input $g$ and coordinate $j$, and put $c_r:=Q_r(g)$. By [F3], $\sum_{r=1}^{m_j}(c_r-c_{r-1})=c_{m_j}-c_0$; for $m_j=0$ this is the empty-sum identity. Adding $Q_0(g)$ and using [F1] yields $\sum_{r=0}^{m_j}\Delta_r(g)=Q_{m_j}(g)$. Since $g$ was arbitrary, this is equality of functionals. [given, F1, F3, algebra]

2.1 Expand $\bigotimes_{j=1}^d\left(\sum_{r=0}^{m_j}\Delta_r^{(j)}\right)$ by distributing each finite coordinate sum. By [F3]–[F4] the resulting terms are exactly the tensor details indexed once by $R_m$, which is the Smolyak sum $Q_{R_m}$ by [F2]. Applying step 1.1 in every coordinate identifies this expansion with $Q_{m_1}^{(1)}\otimes\cdots\otimes Q_{m_d}^{(d)}$, as claimed. [given, F2, F3, F4, step 1.1, algebra] ∎
