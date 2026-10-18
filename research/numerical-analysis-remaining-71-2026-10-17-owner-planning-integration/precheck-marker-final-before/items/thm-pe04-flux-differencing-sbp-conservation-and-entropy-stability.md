---
id: thm-pe04-flux-differencing-sbp-conservation-and-entropy-stability
kind: theorem
title: Flux-differencing SBP is conservative and semidiscretely entropy stable
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-pe04-flux-differencing-sbp-systems
  - def-pe04-diagonal-norm-sbp-element-data
  - def-pe03-system-entropy-pair-and-potential
  - def-pe03-tadmor-entropy-conservative-flux
  - lem-oriented-facet-cancellation-on-matching-meshes
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Travis C. Fisher and Mark H. Carpenter, High-Order Entropy Stable Finite Difference Schemes for Nonlinear Conservation Laws: Finite Domains, NASA/TM-2013-217971"
      url: "https://ntrs.nasa.gov/api/citations/20130011028/downloads/20130011028.pdf"
      locator: "§§3.1–3.2 and §4.2.3, printed pp. 13–20 and 31–35: SBP entropy contraction, entropy-conservative two-point fluxes, and spatial entropy stability."
    - title: "Eitan Tadmor, Entropy Stable Schemes, Handbook of Numerical Methods for Hyperbolic Problems, Vol. 17 (2016)"
      url: "https://math.umd.edu/~tadmor/references/files/Tadmor%20entropy%20stable%20schemes-r%20handbook2016.pdf"
      locator: "§§4.1–4.3, printed pp. 477–485: entropy variables, jump identity, semidiscrete dissipation, and the separate forward-time entropy-production term."
---

## Statement

Assume the affine-element method and all directional entropy/SBP data of [[def-pe04-flux-differencing-sbp-systems]]. Suppose all nodal states remain in $\mathcal A$. Define the discrete entropy and the boundary contribution by
$$E_h(t)=\sum_{K\in\mathcal T_h}\mathbf1^TH_K\eta(U^K),\qquad \mathcal B_h(t)=\sum_{F\subset\partial\Omega}\sum_q\omega_{F,q}\bigl(v(U_{F,q})^T\widehat F_{n_F}^*-\psi_{n_F}(U_{F,q})\bigr).$$
If $\mathcal B_h(t)\ge0$, then
$$\frac{d}{dt}E_h(t)+\sum_{F\text{ interior}}\sum_q\omega_{F,q}\frac{\alpha_{F,q}}2\lVert[v]_{F,q}\rVert^2+\mathcal B_h(t)=0,$$
so $E_h$ is nonincreasing. Here $\widehat F_{n_F,q}^*$ is the explicitly defined normal flux of [[def-pe04-flux-differencing-sbp-systems]]. On a periodic mesh the boundary contribution cancels with its identified periodic partner. The same semidiscretization conserves the quadrature-weighted total state on a periodic mesh. No fully discrete entropy statement follows.

## Facts & Assumptions

**Given:** The flux-differencing SBP equations, positive diagonal volume and face norms, exact affine SBP identities, paired face nodes and weights, common directional entropy pairs, symmetric entropy-conservative volume fluxes, nonnegative interface coefficients $\alpha_{F,q}$, and boundary flux data with $\mathcal B_h\ge0$.

[F1] [[def-pe04-flux-differencing-sbp-systems]]: the interior normal flux is the entropy-conservative normal flux minus $\alpha_{F,q}[v]/2$, and the semidiscrete residual is the displayed flux-differencing volume term plus the face SAT.

[F2] [[def-pe04-diagonal-norm-sbp-element-data]]: $Q_{K,\ell}+Q_{K,\ell}^T=\sum_F n_{K,F,\ell}R_{K,F}^TM_{K,F}R_{K,F}$ and $Q_{K,\ell}\mathbf1=0$.

[F3] [[def-pe03-system-entropy-pair-and-potential]]: $v=\nabla\eta$ and $\psi_\ell=v^TF_\ell-q_\ell$ for each directional entropy pair.

[F4] [[def-pe03-tadmor-entropy-conservative-flux]]: each symmetric consistent directional two-point flux satisfies $[v]^TF_\ell^{ec}=[\psi_\ell]$.

[F5] [[lem-oriented-facet-cancellation-on-matching-meshes]]: every interior facet occurs twice with opposite induced orientations.

[A1] The boundary flux data satisfy the displayed nonnegative boundary entropy contribution.

## Proof

1.1 For a fixed cell and direction write $F_{ij}^{ec}=F_\ell^{ec}(U_i,U_j)$ and $\psi_i=\psi_\ell(U_i)$. Symmetry of $F_\ell^{ec}$ from [F4] gives $2\sum_{i,j}Q_{ij}v_i^TF_{ij}^{ec}=\sum_{i,j}Q_{ij}(v_i-v_j)^TF_{ij}^{ec}+\sum_{i,j}(Q_{ij}+Q_{ji})v_j^TF_{ij}^{ec}$. By [F4] the first sum is $\sum_{i,j}Q_{ij}(\psi_i-\psi_j)=-\sum_j\psi_j(Q^T\mathbf1)_j=-\sum_F\sum_q\omega_{F,q}\psi_{n_F}(U_{F,q})$, since $Q\mathbf1=0$ and $Q^T\mathbf1=(Q+Q^T)\mathbf1$ by [F2]. The second sum is $\sum_F\sum_q\omega_{F,q}v(U_{F,q})^TF_{n_F}(U_{F,q})$ by [F2], diagonal face selection, and consistency from [F4]. Summing directions and the potential identity in [F3] proves the volume entropy boundary identity. [F2, F3, F4, algebra]

2.1 The chain rule gives $\frac{d}{dt}\sum_iH_{ii}\eta(U_i)=\sum_iH_{ii}v(U_i)^T\dot U_i$. Since the semidiscrete equation is $H\dot U+V+SAT=0$, the entropy rate is the negative of the volume and SAT contractions. Combining the volume contraction from step 1.1 with $-v^TR^TM(\widehat F_n^*-F_n)$ cancels the physical flux and leaves, on each cell face, $\sum_q\omega_{F,q}(\psi_{n_F}(U_{F,q})-v(U_{F,q})^T\widehat F_{n_F,q}^*)$. [F1, F2, F3, step 1.1, algebra]

3.1 Sum the cell entropy rates from step 2.1. By [F5] the two cell contributions at an interior face can be written in one orientation as $-[\psi_n]+[v]^T\widehat F_{n,F,q}^*$. Substitution of the flux definition in [F1] and the directional jump identity [F4] makes this $-\alpha_{F,q}\lVert[v]\rVert^2/2$. The boundary-cell contributions are $-\mathcal B_h$ by definition. Moving these terms to the left gives the asserted identity, and [A1] gives nonincrease. [F1, F4, F5, A1, step 2.1, algebra]

4.1 For each component, the constant-vector contraction of the volume term is $2\sum_{i,j}Q_{ij}F^{ec}(U_i,U_j)=\sum_{i,j}(Q_{ij}+Q_{ji})F^{ec}(U_i,U_j)$. The SBP identity and diagonal face selection [F2] reduce this to the physical normal-flux quadrature on the cell boundary, since consistency of the directional fluxes in [F4] gives $F^{ec}(U_i,U_i)=F(U_i)$. The constant-vector contraction of the SAT [F1] subtracts that physical flux and leaves only the numerical normal-flux quadrature. Its interior contributions cancel by normal reversal from the interface formula [F1]; identified periodic boundary partners cancel in the same way. Therefore the periodic quadrature-weighted total state is constant. [F1, F2, F4, algebra] ∎

## Remarks

The argument is semidiscrete. Tadmor's complete entropy analysis includes a separate positive forward-time entropy-production term, so the displayed bound does not transfer to an arbitrary time integrator. The degree-zero scalar forward-Euler and SSPRK branch is proved separately in this pair; it is not a fully discrete result for this high-order nonlinear method.
