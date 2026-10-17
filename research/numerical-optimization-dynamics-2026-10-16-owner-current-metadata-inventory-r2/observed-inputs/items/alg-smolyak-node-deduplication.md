---
id: alg-smolyak-node-deduplication
kind: algorithm
title: Deterministic node merging for Smolyak cubature
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: sparse-grid-cubature-and-mixed-regularity
dependency_level: 3
deps: [def-smolyak-univariate-level-hierarchy, def-smolyak-cubature, def-finite-sum]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "T. Gerstner and M. Griebel, Sparse Grids, Encyclopedia of Quantitative Finance, §Numerical integration"
      url: "https://ins.uni-bonn.de/media/public/publication-media/sparsegrids_j8NLaMi.pdf?name=sparsegrids.pdf"
    - title: "N. Zabaras, Sparse Grid Collocation Methods, lecture notes, slides 17–21"
      url: "https://web.ics.purdue.edu/~ibilion/www.zabaras.com/Courses/UQ/Smolyak.pdf"
    - title: "T. Gerstner and M. Griebel, Dimension-Adaptive Tensor-Product Quadrature, §3"
      url: "https://ins.uni-bonn.de/media/public/publication-media/dimadapt.pdf?pk=177"
---

## Definition

**Input:** dimension $d\ge1$, a finite downward-closed $\Lambda\subseteq\mathbb
N_0^d$ containing $0$, the finitely many levels required by $\Lambda$, a
function $f$ evaluable at their nodes, and for each exact node a canonical key
in a totally ordered set. Keys must agree exactly if and only if the real node
tuples agree. If any required rule or key is missing, return `invalid-input`.

**Output:** the sorted list of distinct node tuples with their combined signed
weights, the value $Q_\Lambda(f)$, and the actual evaluation count
$W(\Lambda)$.

1. Expand each detail $\Delta_\ell$ in the finite Smolyak sum of
   [[def-smolyak-cubature]] by replacing each coordinate factor
   $\Delta_0$ with $Q_0$ and each $\Delta_r$ ($r\ge1$) with
   $Q_r-Q_{r-1}$. Enumerate the resulting finite signed tensor rules in
   lexicographic multi-index order.
2. For each tensor rule, enumerate its finite node tuples in lexicographic
   coordinate-key order. Add its signed coefficient to a finite map indexed by
   the exact tuple key; initialize an unseen key with coefficient $0$.
3. Form $\mathcal N_\Lambda=\bigcup_{\ell\in\Lambda}
   X_{\ell_1}\times\cdots\times X_{\ell_d}$, sort its distinct exact keys, and
   evaluate $f$ once at each of these keys. Return the map of combined
   coefficients and the finite sum of coefficient times function value. Set
   $W(\Lambda):=|\mathcal N_\Lambda|$, including any node whose combined
   coefficient is zero; this is the work convention used in this pair.

This is an exact-real finite procedure. Approximate floating-point node
comparisons, arithmetic, and function-evaluation error are outside its claims.
