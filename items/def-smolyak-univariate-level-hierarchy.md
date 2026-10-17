---
id: def-smolyak-univariate-level-hierarchy
kind: definition
title: Nested one-dimensional quadrature levels and differences
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: sparse-grid-cubature-and-mixed-regularity
dependency_level: 1
deps: [alg-composite-simpson-rule, def-finite-sum, def-multidimensional-darboux-integral]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "T. Gerstner and M. Griebel, Sparse Grids, Encyclopedia of Quantitative Finance, §Numerical integration"
      url: "https://ins.uni-bonn.de/media/public/publication-media/sparsegrids_j8NLaMi.pdf?name=sparsegrids.pdf"
    - title: "N. Zabaras, Sparse Grid Collocation Methods, lecture notes, slides 17–21"
      url: "https://web.ics.purdue.edu/~ibilion/www.zabaras.com/Courses/UQ/Smolyak.pdf"
    - title: "T. Gerstner and M. Griebel, Dimension-Adaptive Tensor-Product Quadrature, §2"
      url: "https://ins.uni-bonn.de/media/public/publication-media/dimadapt.pdf?pk=177"
---

## Definition

Let $Q:\{g:[0,1]\to\mathbb R\}\to\mathbb R$ be a finite quadrature functional of the form
$$Q(g)=\sum_{i=1}^{m}w_i g(x_i),$$
where $m\ge1$, the nodes $x_i\in[0,1]$ are distinct, and $w_i\in\mathbb R$.
A one-dimensional **nested level hierarchy** is a sequence
$(Q_\ell)_{\ell\in\mathbb N_0}$ of such functionals, with node sets
$X_\ell=\{x_{\ell,i}:1\le i\le m_\ell\}$ satisfying
$X_{\ell-1}\subseteq X_\ell$ for every $\ell\ge1$.
Set $Q_{-1}:=0$, the zero functional, and define the **detail functional**
$$\Delta_0:=Q_0,\qquad \Delta_\ell:=Q_\ell-Q_{\ell-1}\quad(\ell\ge1).$$
Finite sums are as in [[def-finite-sum]]. For each $d\ge1$, the integration
functional used below is $I_d(f):=\int_{[0,1]^d}f$, with the multiple Riemann
integral convention of [[def-multidimensional-darboux-integral]].

The convergence and rate results in this pair use the **dyadic composite-
Simpson hierarchy**
$$Q_\ell(g):=Q_S(g;0,1,2^{\ell+1}),\qquad X_\ell=\{k/2^{\ell+1}:0\le k\le2^{\ell+1}\},$$
where $Q_S$ is the even-panel rule of [[alg-composite-simpson-rule]]. The
number of panels is even and at least two. The sets are nested because
$k/2^{\ell}=2k/2^{\ell+1}$, and their weights are nonnegative with total
weight one: each two-panel block has nonnegative weights $H(1,4,1)/6$
summing to its length $H$, and the blocks partition an interval of length one.
Level zero has nodes $0,1/2,1$ and weights $1/6,4/6,1/6$.

For a multi-index $\ell=(\ell_1,\ldots,\ell_d)\in\mathbb N_0^d$, any tensor
product $R_{\ell_1}^{(1)}\otimes\cdots\otimes R_{\ell_d}^{(d)}$ of these
finite functionals means the finite weighted functional obtained by multiplying
the coordinate weights and evaluating on the corresponding node tuples. In
particular, $\Delta_\ell:=\Delta_{\ell_1}^{(1)}\otimes\cdots\otimes
\Delta_{\ell_d}^{(d)}$. No exactness or error property is implied by the
notation alone.
