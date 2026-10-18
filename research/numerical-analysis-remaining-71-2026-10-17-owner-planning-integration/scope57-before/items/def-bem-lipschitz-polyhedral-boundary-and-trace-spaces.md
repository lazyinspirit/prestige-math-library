---
id: def-bem-lipschitz-polyhedral-boundary-and-trace-spaces
kind: definition
title: Lipschitz polyhedral boundary, orientation, and trace spaces
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-real-order-bessel-potential-sobolev-space, thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces, def-countable-choice]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Martin Costabel, Boundary Integral Operators on Lipschitz Domains: Elementary Results (1988)"
      url: https://costabel.perso.math.cnrs.fr/publis/Co88_Lip.pdf
      locator: "§2, printed pp. 614–616: Lipschitz graph charts, local Sobolev spaces, Gagliardo trace map and right inverse."
    - title: "Francisco-Javier Sayas, First Steps in the Boundary Element Method (2015 lecture notes)"
      url: https://team-pancho.github.io/teaching/math838/BEM.pdf
      locator: "Chapter 1 §§1.5–1.6, PDF pp. 12–15: Lipschitz graph charts, polyhedral examples, and the almost-everywhere outward normal."
---

## Definition

Assume [[def-countable-choice|Countable Choice]].

Let $\Omega^-$ be a nonempty bounded connected open subset of $\mathbb R^3$ whose boundary $\Gamma=\partial\Omega^-$ is a compact connected orientable Lipschitz surface. A **Lipschitz graph chart** is a rigid coordinate change in which $\Gamma$ is the graph $x_3=\psi(x_1,x_2)$ of a Lipschitz function on an open subset of $\mathbb R^2$, with $\Omega^-$ on one side of that graph. A **polyhedral boundary** is such a boundary made from finitely many planar polygonal faces meeting along edges and vertices; all surface-discretization claims below use this polyhedral subclass. Put $\Omega^+=\mathbb R^3\setminus\overline{\Omega^-}$ and assume $\Omega^+$ is connected. The unit normal $n$ points from $\Omega^-$ into $\Omega^+$ and is defined almost everywhere by the face normals (equivalently by the Lipschitz charts).

Fix a finite Lipschitz graph atlas $\{(U_j,\psi_j)\}_{j=1}^J$ and a subordinate finite Lipschitz partition of unity $\{\chi_j\}_{j=1}^J$ whose chartwise supports have positive distance from the chart edges. On $\mathbb R^2$, use the real-order Bessel-potential space $H^{1/2}(\mathbb R^2)$ of [[def-real-order-bessel-potential-sobolev-space]], with norm $\|g\|_{H^{1/2}}^2=\int_{\mathbb R^2}(1+4\pi^2|\xi|^2)^{1/2}|\widehat g(\xi)|^2d\xi$ under its negative-sign $2\pi$ Fourier convention ([[thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]]). Define $H^{1/2}(\Gamma)$ by requiring every localized chart pullback $(\chi_jg)\circ\psi_j$ (extended by zero outside its chart) to belong to this Euclidean space, with the finite sum of the chart norms as the fixed norm used on this page. Let $H^{-1/2}(\Gamma)$ be the continuous real dual of $H^{1/2}(\Gamma)$, with pairing $\langle\cdot,\cdot\rangle_\Gamma$. The interior and exterior traces of an $H^1$ function are denoted $\gamma^-u$ and $\gamma^+u$; their common chartwise trace space is $H^{1/2}(\Gamma)$ once the trace theorem below is proved.

No smoothness at edges or vertices is included in this definition. The normal is only used almost everywhere, and every boundary integral is with respect to the sum of planar face-area measures.
