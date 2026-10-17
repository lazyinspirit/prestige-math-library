---
id: alg-dimension-adaptive-smolyak-surplus-selection
kind: algorithm
title: Finite-budget dimension-adaptive Smolyak surplus selection
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: sparse-grid-cubature-and-mixed-regularity
dependency_level: 4
deps: [def-smolyak-univariate-level-hierarchy, def-smolyak-cubature, alg-smolyak-node-deduplication, def-finite-sum]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "T. Gerstner and M. Griebel, Dimension-Adaptive Tensor-Product Quadrature, §§3.1–3.3"
      url: "https://ins.uni-bonn.de/media/public/publication-media/dimadapt.pdf?pk=177"
    - title: "T. Gerstner and M. Griebel, Sparse Grids, Encyclopedia of Quantitative Finance, §Extensions and Applications"
      url: "https://ins.uni-bonn.de/media/public/publication-media/sparsegrids_j8NLaMi.pdf?name=sparsegrids.pdf"
    - title: "N. Zabaras, Sparse Grid Collocation Methods, lecture notes, slides 17–26"
      url: "https://web.ics.purdue.edu/~ibilion/www.zabaras.com/Courses/UQ/Smolyak.pdf"
---

## Definition

**Input:** dimension $d\ge1$; a finite downward-closed cap
$\Gamma\subseteq\mathbb N_0^d$ containing $0$; for each coordinate, the
one-dimensional quadrature rules from a hierarchy as in
[[def-smolyak-univariate-level-hierarchy]] through every level used by
$\Gamma$, with canonical node keys that agree exactly if and only if the real
nodes agree and are totally ordered; a function $f$ evaluable at the nodes; and
an integer evaluation budget $B\ge0$. Admissible inputs supply all these rules
and keys at every level required by $\Gamma$.

**Output:** a current downward-closed index set $\Lambda\subseteq\Gamma$, its
Smolyak value when the initial rule fits the budget, the computed detail
surpluses, the distinct nodes actually sampled, and one status:
`budget-too-small`, `budget-exhausted`, or `frontier-exhausted`.

1. An index $\ell\in\Gamma\setminus\Lambda$ is **admissible** when every
   immediate predecessor $\ell-e_j$ with $\ell_j>0$ already belongs to
   $\Lambda$. Its **surplus** is the exact detail value $\delta_\ell(f)$ and
   its selection indicator is $|\delta_\ell(f)|$.
2. Form the baseline node set $X_0^d$. If its cardinality exceeds $B$, return
   `budget-too-small`, an empty $\Lambda$, no cubature value, and no sampled
   nodes. Otherwise set $\Lambda:=\{0\}$, initialize the active candidate set
   as empty, evaluate $f$ once at every baseline node, and set the current
   value to $Q_{\{0\}}(f)$. Then process every initially admissible index in
   $\Gamma\setminus\Lambda$ in lexicographic order using step 3.
3. Visit newly admissible indices in lexicographic order, skipping any index
   already recorded as active, accepted, or `uncomputed-budget`. To compute one
   surplus, form its finite tensor-detail node set and the new keys not already
   sampled. If adding them would exceed $B$, record this candidate as
   `uncomputed-budget` without evaluating those nodes. Otherwise evaluate each
   new key once, store the values, compute $\delta_\ell(f)$ from the finite
   signed weights, and add the index to the active candidate set.
4. If the active set is empty and an admissible `uncomputed-budget` candidate
   remains, return `budget-exhausted`. Otherwise, if the active set is empty,
   return `frontier-exhausted`.
5. Otherwise select the active index with largest absolute surplus, breaking
   ties lexicographically. Remove it from the active set, mark it accepted, add
   it to $\Lambda$, update the cubature value by adding its signed surplus, and
   inspect its finite forward neighbors for newly admissible indices; process
   them by step 3. Repeat from step 4.

The evaluation budget counts the union of distinct keys sampled while computing
both accepted and candidate surpluses. The indicator $|\delta_\ell(f)|$ is a
refinement heuristic only. A threshold on this indicator, or exhaustion of the
finite candidate cap, is not an error certificate unless a separate omitted-tail
bound applies.
