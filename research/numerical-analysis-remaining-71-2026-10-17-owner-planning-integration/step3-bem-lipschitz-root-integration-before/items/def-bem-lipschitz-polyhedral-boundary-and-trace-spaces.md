---
id: def-bem-lipschitz-polyhedral-boundary-and-trace-spaces
kind: definition
title: Lipschitz polyhedral boundary, orientation, and trace spaces
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-real-order-bessel-potential-sobolev-space, thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces, def-countable-choice, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, thm-riesz-representation-for-hilbert-space, lem-l-two-with-the-integral-pairing-is-a-hilbert-space]
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

Let $\Omega^-$ be a nonempty bounded connected open subset of $\mathbb R^3$ whose boundary $\Gamma=\partial\Omega^-$ is a compact connected orientable Lipschitz surface. A **Lipschitz graph chart** is a rigid coordinate change in which $\Gamma$ is the graph $x_3=\psi(x_1,x_2)$ of a Lipschitz function on an open subset of $\mathbb R^2$, with $\Omega^-$ on one side of that graph. A **polyhedral boundary** is such a boundary made from finitely many planar polygonal faces meeting along edges and vertices; all surface-discretization claims below use this polyhedral subclass. Put $\Omega^+=\mathbb R^3\setminus\overline{\Omega^-}$ and assume $\Omega^+$ is connected. For the fixed-atlas space conventions below, the boundary data include a compatible Borel surface measure $dS$ and an almost-everywhere unit outward normal $n$, with the following graph realizations and bounded positive graph area densities on every chosen chart. These compatible realizations are supplied data for the Countable-Choice space assertions, not conclusions from bare Lipschitzness under Countable Choice. Under the Axiom of Choice, [[lem-bem-lipschitz-graph-sobolev-and-green-interface]] constructs them for every compact Lipschitz boundary and proves their compatibility; the general analytical trace and layer theorems state that axiom. On polyhedral charts the data are directly the finite face areas and face normals. The normal points from $\Omega^-$ into $\Omega^+$. In a rigid chart with $\Omega^-$ above the graph $x_3=\psi(x_1,x_2)$ it is $n=(\partial_1\psi,\partial_2\psi,-1)/\sqrt{1+|\nabla\psi|^2}$ almost everywhere; reverse the sign when the domain is below the graph. Rigid coordinates transform this vector to physical coordinates. The graph surface measure is $dS=\sqrt{1+|\nabla\psi|^2}\,dx_1dx_2$. Compatibility on overlaps is part of the fixed boundary data; the cited AC graph theorem proves it for arbitrary Lipschitz charts. On a polyhedron these are the face-area measure and outward face normals.

Fix a finite Lipschitz graph atlas $\{(U_j,\psi_j)\}_{j=1}^J$, with surface parametrizations $\Phi_j(z)=(z,\psi_j(z))$ in the rigid chart coordinates, and a subordinate finite Lipschitz partition of unity $\{\chi_j\}_{j=1}^J$ whose chartwise supports have positive distance from the chart edges. On $\mathbb R^2$, use the real subspace of the real-order Bessel-potential completion in [[def-real-order-bessel-potential-sobolev-space]]. Its published norm uses the weight $(1+|\xi|^2)^{1/2}$. Fix here the equivalent Hilbert norm
$$q(g)^2=\int_{\mathbb R^2}(1+4\pi^2|\xi|^2)^{1/2}|\widehat g(\xi)|^2d\xi.$$
The inequalities $(1+|\xi|^2)^{1/2}\le(1+4\pi^2|\xi|^2)^{1/2}\le2\pi(1+|\xi|^2)^{1/2}$ identify the same completion and classes under the negative-sign $2\pi$ Fourier convention of [[thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]]. Define the real space $H^{1/2}(\Gamma)$ by requiring every localized chart pullback $g_j=(\chi_jg)\circ\Phi_j$, extended by zero outside its chart, to belong to that Euclidean space, and fix the **square-sum chart norm**
$$\|g\|_{H^{1/2}(\Gamma)}^2=\sum_{j=1}^J q(g_j)^2.$$
Its inner product is the sum of the real weighted Fourier inner products. The following fixed-data norm and completeness assertions use only Countable Choice and the supplied compatible measure with bounded positive chart densities; they make no geometry-existence or atlas-compatibility assertion under that weaker axiom. This Hilbert norm is equivalent to the finite sum of chart norms: $(\sum_jq(g_j)^2)^{1/2}\le\sum_jq(g_j)\le\sqrt J(\sum_jq(g_j)^2)^{1/2}$. It controls $L^2(\Gamma)$, because graph surface Jacobians are bounded above and below and $g=\sum_j\chi_jg$. It is complete: a chart-norm Cauchy sequence has a global $L^2$ limit by that bound; its localized pullbacks converge in $L^2$ to the pullbacks of this limit, while completeness of each Euclidean weighted space gives convergence in each $q$ norm. The two limits agree, so the limit belongs to the defined chart space and convergence holds in the finite square sum.

Let real $H^{-1/2}(\Gamma)$ be the continuous real dual, with its operator norm and pairing $\langle\cdot,\cdot\rangle_\Gamma$; the dual of this real Hilbert space is Hilbert by [[thm-riesz-representation-for-hilbert-space]]. The interior and exterior traces of an $H^1$ function are denoted $\gamma^-u$ and $\gamma^+u$; their common chartwise trace space is $H^{1/2}(\Gamma)$ once the applicable trace theorem is proved. This fixed-atlas chart-space convention applies to the stated Lipschitz geometry, including its polyhedral and $C^2$ subclasses. It defines the Hilbert and dual norms; no boundary trace or lifting theorem is assumed by that convention.

The complex space is the Hilbert complexification of the real space: $\|g_1+ig_2\|^2=\|g_1\|^2+\|g_2\|^2$. Its $H^{-1/2}$ is the continuous conjugate dual, with pairing linear in the density and conjugate-linear in the trace, extending the real pairing. A complex density is a distribution via the **bilinear** test action $T_\lambda(v)=\langle\lambda,\overline v\rangle_\Gamma$. For either scalar field the continuous realization $H^{1/2}(\Gamma)\subset L^2(\Gamma)\subset H^{-1/2}(\Gamma)$ uses $\langle f,g\rangle_\Gamma=\int_\Gamma f\overline g\,dS$ in the complex case and $\int_\Gamma fg\,dS$ in the real case. These inclusions follow from the just-proved $H^{1/2}\to L^2$ bound and Cauchy–Schwarz.

No smoothness at edges or vertices is included in this definition. The normal is only used almost everywhere. On every Lipschitz boundary use the intrinsic graph surface measure just specified, with the chart partition; on a polyhedral boundary it equals the sum of planar face-area measures. The general Lipschitz class and its $C^2$ subclass therefore use the same measure and orientation conventions.
