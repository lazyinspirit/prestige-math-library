---
id: def-smolyak-cubature
kind: definition
title: Smolyak cubature on a finite downward-closed index set
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: sparse-grid-cubature-and-mixed-regularity
dependency_level: 2
deps: [def-smolyak-univariate-level-hierarchy, def-finite-sum, def-monoid-finite-product]
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
    - title: "T. Gerstner and M. Griebel, Dimension-Adaptive Tensor-Product Quadrature, §§2–3.1"
      url: "https://ins.uni-bonn.de/media/public/publication-media/dimadapt.pdf?pk=177"
---

## Definition

Fix a dimension $d\ge1$. A finite set $\Lambda\subseteq\mathbb N_0^d$ is
**downward closed** if, whenever $\ell\in\Lambda$ and $\ell_j>0$, the index
$\ell-e_j$ also belongs to $\Lambda$; here $e_j$ is the $j$th coordinate unit
vector. In this pair an admissible Smolyak set is a nonempty finite downward-
closed $\Lambda$ that contains $0$.

For a level hierarchy from [[def-smolyak-univariate-level-hierarchy]], define
the scalar detail value
$$\delta_\ell(f):=(\Delta_{\ell_1}^{(1)}\otimes\cdots\otimes\Delta_{\ell_d}^{(d)})(f),$$
and the **Smolyak cubature functional**
$$Q_\Lambda(f):=\sum_{\ell\in\Lambda}\delta_\ell(f).$$
Each summand is a finite signed weighted sum. Expanding all differences and
adding coefficients at equal points gives one finite signed weight for each
distinct node in
$$\mathcal N_\Lambda:=\bigcup_{\ell\in\Lambda}X_{\ell_1}\times\cdots\times X_{\ell_d}.$$
The **node-union work count** for this direct evaluation convention is
$W(\Lambda):=|\mathcal N_\Lambda|$, so shared nodes are counted once. A
combined weight may be negative or zero; no positivity claim follows from the
definition.
