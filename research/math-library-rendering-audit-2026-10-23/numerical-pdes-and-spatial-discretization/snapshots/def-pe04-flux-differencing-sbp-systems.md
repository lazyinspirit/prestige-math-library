---
id: def-pe04-flux-differencing-sbp-systems
kind: definition
title: Conservative flux-differencing SBP method for nonlinear systems
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-pe04-upwind-dg-transport-discretization
  - def-pe04-diagonal-norm-sbp-element-data
  - def-pe03-system-entropy-pair-and-potential
  - def-pe03-tadmor-entropy-conservative-flux
  - def-matching-affine-simplicial-meshes
  - def-broken-and-conforming-polynomial-spaces
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Travis C. Fisher and Mark H. Carpenter, High-Order Entropy Stable Finite Difference Schemes for Nonlinear Conservation Laws: Finite Domains, NASA/TM-2013-217971"
      url: "https://ntrs.nasa.gov/api/citations/20130011028/downloads/20130011028.pdf"
      locator: "§§3.1–3.2, printed pp. 13–20: semidiscrete entropy analysis, SBP flux differencing, and two-point entropy-consistent flux conditions."
    - title: "Eitan Tadmor, Entropy Stable Schemes, Handbook of Numerical Methods for Hyperbolic Problems, Vol. 17 (2016)"
      url: "https://math.umd.edu/~tadmor/references/files/Tadmor%20entropy%20stable%20schemes-r%20handbook2016.pdf"
      locator: "§§4.1–4.2, printed pp. 477–479: entropy variables/potentials and the two-point entropy-conservative jump identity."
---

## Definition

Let $d\ge2$, let $\mathcal T_h$ be a finite matching affine simplicial mesh, and consider $U_t+\sum_{\ell=1}^d\partial_{x_\ell}F_\ell(U)=0$ with state domain $\mathcal A\subseteq\mathbb R^m$. Assume a common convex entropy $\eta$ and, for each direction $\ell$, an entropy flux $q_\ell$ so that $(\eta,q_\ell)$ satisfies [[def-pe03-system-entropy-pair-and-potential]] for the directional flux $F_\ell$. Write $v=\nabla\eta$ and $\psi_\ell=v^TF_\ell-q_\ell$. For every direction, supply a symmetric consistent two-point flux $F_\ell^{ec}$ satisfying [[def-pe03-tadmor-entropy-conservative-flux]], namely
$$\bigl(v(U_R)-v(U_L)\bigr)^TF_\ell^{ec}(U_L,U_R)=\psi_\ell(U_R)-\psi_\ell(U_L).$$

On each cell use diagonal-norm SBP data from [[def-pe04-diagonal-norm-sbp-element-data]]. Put $Q_{K,\ell}=H_KD_{K,\ell}$; let $U_i^K\in\mathcal A$ be the nodal states; and let the face restrictions select paired face nodes with matching positive weights on the two incident cells. For an oriented interior face node with normal $n$ from the minus trace to the plus trace, set $F_n(U)=\sum_\ell n_\ell F_\ell(U)$ and $\psi_n(U)=\sum_\ell n_\ell\psi_\ell(U)$. Given any fixed coefficient $\alpha_{F,q}\ge0$, define the normal interface flux
$$\widehat F_{n,F,q}^*(U^-,U^+)=\sum_{\ell=1}^d n_\ell F_\ell^{ec}(U^-,U^+)-\frac{\alpha_{F,q}}2\bigl(v(U^+)-v(U^-)\bigr).$$
The coefficient is the same when the face orientation is reversed. Thus the flux is conservative and consistent, and its entropy contraction is
$$[v]^T\widehat F_{n,F,q}^*=[\psi_n]-\frac{\alpha_{F,q}}2\lVert[v]\rVert^2\le[\psi_n],$$
by the directional Tadmor identities in [[def-pe03-tadmor-entropy-conservative-flux]]. On physical boundary faces supply a consistent normal flux and require the boundary entropy contribution below to be nonnegative.

Write $\omega_{F,q}$ for the $q$th diagonal entry of $M_F$. Define the boundary entropy contribution
$$\mathcal B_h(t)=\sum_{F\subset\partial\Omega}\sum_q\omega_{F,q}\bigl(v(U_{F,q})^T\widehat F_{n_F}^*-\psi_{n_F}(U_{F,q})\bigr).$$
The selected boundary flux is entropy admissible when $\mathcal B_h(t)\ge0$. The **flux-differencing SBP semidiscretization** on each element is
$$H_K\dot U^K+2\sum_{\ell=1}^d\bigl(Q_{K,\ell}\circ F_\ell^{ec}(U^K,U^K)\bigr)\mathbf1+\sum_{F\subset\partial K}R_{K,F}^TM_{K,F}\bigl(\widehat F_{n_{K,F}}^*-F_{n_{K,F}}(U_{K,F})\bigr)=0,$$
where $\circ$ is entrywise matrix multiplication and $F_\ell^{ec}(U^K,U^K)$ is the matrix with $(i,j)$ entry $F_\ell^{ec}(U_i^K,U_j^K)$. These are conditional method data: compatible SBP data and directional entropy-conservative fluxes are hypotheses, not asserted to exist for every mesh or entropy pair. The interior numerical flux is explicitly defined once those data and $\alpha_{F,q}$ are supplied. Curved elements are excluded.
