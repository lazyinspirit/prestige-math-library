---
id: thm-periodic-sbp-compressible-viscous-conservation-and-entropy
kind: theorem
title: Conservation and entropy dissipation of the periodic SBP scheme
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
aliases: []
deps:
  - def-periodic-sbp-compressible-viscous-scheme
  - lem-ideal-gas-entropy-conservative-flux-properties
  - lem-compressible-viscous-flux-entropy-variable-factorization
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Eitan Tadmor, Entropy Stable Schemes, Chapter 18, Handbook of Numerical Methods for Hyperbolic Problems: Basic and Fundamental Issues, 2016, complete chapter"
      url: "https://math.umd.edu/~tadmor/references/files/Tadmor%20entropy%20stable%20schemes-r%20handbook2016.pdf"
      locator: "Printed pp. 482–490, Sections 4.6–6: entropy-conservative flux differencing and entropy stability of high-order schemes."
    - title: "Pablo Fernandez, Ngoc-Cuong Nguyen, and Jaime Peraire, Entropy-stable hybridized discontinuous Galerkin methods for the compressible Euler and Navier-Stokes equations, complete author preprint"
      url: "https://arxiv.org/pdf/1808.05066"
      locator: "Sections 3.3 and 4.4–4.5, PDF pp. 6 and 11–12. The present proof uses its own nodal SBP identities."
---

## Statement

Let $U_i(t)\in\mathcal G$, $i\in\mathcal I$, be any differentiable solution of [[def-periodic-sbp-compressible-viscous-scheme]]. Then every component of the weighted conservative state $\sum_iH_{ii}U_i(t)$ is constant, and

$$\frac{d}{dt}\sum_{i\in\mathcal I}H_{ii}\eta(U_i(t)) =-\sum_{i\in\mathcal I}H_{ii}\sum_{j,k=1}^d(D_jv_i)^TK_{jk}(U_i)(D_kv_i)\le0.$$

The exact entropy production is the finite nodal sum displayed above.

## Facts & Assumptions

**Given:** The finite periodic node set, diagonal matrix $H$, derivative matrices $D_j$, and semidiscrete equation of [[def-periodic-sbp-compressible-viscous-scheme]], with all nodal states remaining in $\mathcal G$.

[F1] [[def-periodic-sbp-compressible-viscous-scheme]]: $H$ is positive diagonal, $HD_j+D_j^TH=0$, $D_j\mathbf1=0$, and the semidiscrete residual is the sum of the symmetric two-point Euler flux differencing term and the divergence of $K_{jk}(U_i)(D_kv)_i$.

[F2] [[lem-ideal-gas-entropy-conservative-flux-properties]]: $F_j^{\mathrm{ec}}(U_i,U_\ell)=F_j^{\mathrm{ec}}(U_\ell,U_i)$ and $(v_\ell-v_i)^TF_j^{\mathrm{ec}}(U_i,U_\ell)=\psi_j(U_\ell)-\psi_j(U_i)$.

[F3] [[lem-compressible-viscous-flux-entropy-variable-factorization]]: the full spatial-state block matrix $K(U)$ is symmetric positive semidefinite.

## Proof


1.1 For each direction set $Q_j=HD_j$. Then [F1] gives $Q_j^T=-Q_j$ and $Q_j\mathbf1=HD_j\mathbf1=0$. Skew-symmetry also gives $\mathbf1^TQ_j=-(Q_j\mathbf1)^T=0$. [F1, algebra]

2.1 Multiply the semidiscrete equation by $H_{ii}$ and sum in $i$. For the Euler term, each component of $\sum_{i,\ell}(Q_j)_{i\ell}F_j^{\mathrm{ec}}(U_i,U_\ell)$ is zero: swapping $i$ and $\ell$ changes the sign of $Q_j$ by step 1.1 and leaves the flux unchanged by [F2]. The viscous term sums to $\mathbf1^THD_jW=\mathbf1^TQ_jW=0$ for each nodal flux array $W$. Thus the weighted sum of each conservative component has derivative zero. [F1, F2, step 1.1, algebra]

2.2 By the chain rule, the Euler contribution to the entropy derivative is $-2\sum_{j,i,\ell}(Q_j)_{i\ell}v_i^TF_j^{\mathrm{ec}}(U_i,U_\ell)$. Skew-symmetry and flux symmetry [F2], after swapping the two indices in one copy of the sum, rewrite this as $-\sum_{j,i,\ell}(Q_j)_{i\ell}(v_i-v_\ell)^TF_j^{\mathrm{ec}}(U_i,U_\ell)$. The entropy-potential identity [F2] changes the summand to $(Q_j)_{i\ell}(\psi_j(U_i)-\psi_j(U_\ell))$. Both its row sum and column sum vanish by step 1.1, so the total Euler contribution is zero. [F1, F2, step 1.1, algebra]

3.1 For each viscous direction, $v^THD_jW=-(D_jv)^THW$ by $D_j^TH=-HD_j$. Applying this to $W_i=\sum_kK_{jk}(U_i)(D_kv)_i$ shows that the remaining entropy derivative is exactly the negative sum in the Statement. Each nodal quadratic form is nonnegative by [F3], and each weight $H_{ii}$ is positive; hence the derivative is nonpositive. [F1, F3, algebra] ∎
