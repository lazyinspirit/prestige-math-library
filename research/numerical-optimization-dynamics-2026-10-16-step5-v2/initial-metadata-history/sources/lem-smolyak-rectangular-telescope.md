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

[F1] [[def-smolyak-univariate-level-hierarchy]]: $\Delta_0=Q_0$ and $\Delta_r=Q_r-Q_{r-1}$ for $r\ge1$, with $Q_{-1}=0$; tensor rules multiply coordinate weights.

[F2] [[def-smolyak-cubature]]: a cubature on a finite index set is the finite sum of the corresponding tensor details.

[F3] [[lem-finite-sum-laws]]: scalar finite sums satisfy additivity, scaling, and telescoping.

[F4] [[def-monoid-finite-product]]: a finite product is formed by recursively multiplying its coordinate factors.

## Proof

1.1 Fix any one-dimensional input $g$ and coordinate $j$, and put $c_r:=Q_r(g)$. By [F3], $\sum_{r=1}^{m_j}(c_r-c_{r-1})=c_{m_j}-c_0$; for $m_j=0$ this is the empty-sum identity. Adding $Q_0(g)$ and using [F1] yields $\sum_{r=0}^{m_j}\Delta_r(g)=Q_{m_j}(g)$. Since $g$ was arbitrary, this is equality of functionals. [given, F1, F3, algebra]

2.1 For each coordinate $j$, represent every $\Delta_r^{(j)}$, $0\le r\le m_j$, on the common finite node set $X_{m_j}^{(j)}$, inserting zero weights at absent nodes; this is possible by nestedness. Write its weight at $x$ as $a_{j,r}(x)$, so $\sum_{r=0}^{m_j}\Delta_r^{(j)}$ has weight $\sum_{r=0}^{m_j}a_{j,r}(x)$ by scalar additivity. By [F1], the tensor of these coordinate sums has weight $\prod_{j=1}^d\left(\sum_{r=0}^{m_j}a_{j,r}(x_j)\right)$ at each node tuple. Repeated scalar scaling and additivity [F3], applied to the recursively formed product [F4], expand this weight as $\sum_{\ell\in R_m}\prod_{j=1}^d a_{j,\ell_j}(x_j)$. Multiplying by any input value $f(x_1,\ldots,x_d)$ and summing over the finite node tuples gives $\sum_{\ell\in R_m}\Delta_\ell(f)$, since scalar additivity permits interchanging the finite sums. This is $Q_{R_m}(f)$ by [F2]. Step 1.1 identifies each coordinate sum with $Q_{m_j}^{(j)}$, proving the claimed equality of functionals for every $f$. [given, F1, F2, F3, F4, step 1.1, algebra] ∎
