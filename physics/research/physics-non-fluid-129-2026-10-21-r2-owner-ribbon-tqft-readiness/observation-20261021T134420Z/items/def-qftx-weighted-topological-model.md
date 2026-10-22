---
id: def-qftx-weighted-topological-model
kind: definition
title: "Weighted modular TQFT model and physical interpretation boundary"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: "Pure mathematics; no physical premises or physical claim."
dependency_level: 0
deps:
  - def-modular-ribbon-category-and-hopf-link-data
  - def-weighted-lagrangian-ribbon-bordism
  - def-rt-state-spaces
  - thm-weighted-rt-tqft-and-factorization
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  def-modular-ribbon-category-and-hopf-link-data: mathematical-premise
  def-weighted-lagrangian-ribbon-bordism: mathematical-premise
  def-rt-state-spaces: mathematical-premise
  thm-weighted-rt-tqft-and-factorization: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Kevin Walker, On Witten's 3-manifold Invariants"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/walker3.pdf"
      locator: "Introduction pp. 2–4 and §§1–2: extended bordism data, framing phase, and TQFT gluing conventions."
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik, Tensor Categories"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§§8.14–8.16: modular category S-data and the central-charge scalar in the projective modular-group action."
verification:
  precheck: pending
---

## Definition

Assume full AC and its inherited countable-choice consequences. Let $\mathcal C$ be a complex modular ribbon fusion category with finite simple-label set $I$, unit label $0$, simple pivotal dimensions $d_i$, twists $\theta_i$, and Hopf-link matrix $s$. Choose a square root $D\in\mathbb C\setminus\{0\}$ of $\sum_{i\in I}d_i^2$ and set $S=s/D$, $p_+=\sum_{i\in I}\theta_i d_i^2$, and $\kappa=p_+/D$. Modularity means that $s$ is invertible; no positivity of $d_i$ or $D$ is assumed.

Use the weighted Lagrangian ribbon-bordism category whose objects are closed oriented marked surfaces with a Lagrangian in real first homology and whose morphisms are compact oriented three-bordisms with colored ribbon graphs and integer weights. Composition adds the Walker Maslov index computed from the two individual bordism relations and the specified middle Lagrangian. For a genus-$g$ surface with ordered labels $W_1,\ldots,W_n$, write $H=\bigoplus_{i\in I}i\otimes i^*$ and

$$V(\Sigma;W_1,\ldots,W_n)=\operatorname{Hom}_{\mathcal C}(\mathbf 1,W_1\otimes\cdots\otimes W_n\otimes H^{\otimes g}).$$

The weighted RT model is this category, these finite-dimensional complex state spaces, and the exact surgery-defined symmetric monoidal functor $Z$ of the supplied theorem. It includes actual coupon morphisms, disconnected bordisms and empty ends; increasing an integer weight by one multiplies the map by $\kappa$. The model retains the full anomaly and asserts no ordinary anomaly-free functor unless cancellation data are supplied separately.

## Definition references

[[def-modular-ribbon-category-and-hopf-link-data]]

[[def-weighted-lagrangian-ribbon-bordism]]

[[def-rt-state-spaces]]

[[thm-weighted-rt-tqft-and-factorization]]

[[def-axiom-of-choice]]

[[def-countable-choice]]

## Interpretation boundary

This is a mathematical definition of an algebraic model. Modularity alone does not supply a positive Hermitian form or a unitary physical theory, and no Chern–Simons path integral is asserted or used.
