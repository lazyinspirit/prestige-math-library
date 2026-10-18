---
id: thm-maxwell-yee-cartesian-dispersion-and-cfl
kind: theorem
title: Cartesian Yee symbol, numerical dispersion, and grid CFL bound
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 7
deps:
  - def-maxwell-discrete-cochain-and-yee-grid
  - alg-maxwell-yee-leapfrog-update
  - thm-maxwell-yee-strict-cfl-modified-energy
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: John B. Schneider, Understanding the Finite-Difference Time-Domain Method
      url: https://eecs.wsu.edu/~schneidj/ufdtd/ufdtd.pdf
      locator: "Chapter 7 §7.4, printed pp. 164–168, derives the 1D dispersion relation; Chapter 9 §§9.3 and 9.7, printed pp. 246–249 and 281–286, fixes the 3D Yee locations and unequal-step notation. The 3D symbol and maximum are derived locally."
verification:
  precheck: pass
---

## Statement

Consider a homogeneous isotropic periodic Yee grid with $\epsilon,\mu>0$, wave speed $c=(\epsilon\mu)^{-1/2}$, spacings $h_x,h_y,h_z$, and $N_x,N_y,N_z$ cells. Its allowed wave angles are $\theta_j=2\pi m_j/N_j$. On a mode with wave vector $k_j=\theta_j/h_j$, the transverse curl-curl eigenvalue is
$$\lambda(\theta)=c^2\sum_{j\in\{x,y,z\}}\frac{4}{h_j^2}\sin^2\left(\frac{\theta_j}{2}\right),$$
and the lossless Yee leapfrog dispersion relation is
$$\sin^2\left(\frac{\omega\Delta t}{2}\right)=c^2\Delta t^2\sum_{j\in\{x,y,z\}}\frac{\sin^2(\theta_j/2)}{h_j^2}.$$
The exact finite-grid strict condition is $\Delta t^2\max_{\theta}\lambda(\theta)<4$, as in [[thm-maxwell-yee-strict-cfl-modified-energy]]. The rectangular sufficient bound is
$$\Delta t<\frac{1}{c\sqrt{h_x^{-2}+h_y^{-2}+h_z^{-2}}};$$
it is exact when every $N_j$ is even. For a cubic grid this bound is $\Delta t<h/(c\sqrt3)$. Odd cell counts may have a smaller finite-grid maximum, so the finite-grid eigenvalue is the exact criterion.

## Facts & Assumptions


**Given:** A homogeneous isotropic periodic Cartesian Yee grid and a lossless, source-free leapfrog update.

[F1] Edge cochains are oriented line integrals, face cochains are oriented fluxes, and the homogeneous Cartesian Hodge weights are the stated diagonal dual-volume weights. ([[def-maxwell-discrete-cochain-and-yee-grid]])

[F2] The positive-energy criterion is the strict generalized spectral condition $\Delta t^2\lambda_{\max}<4$. ([[thm-maxwell-yee-strict-cfl-modified-energy]])

[F3] The Yee rows use the half-step magnetic update and integer-step electric update. ([[alg-maxwell-yee-leapfrog-update]])

## Proof

1.1 On a periodic Fourier mode, a forward edge difference in direction $j$ has multiplier $e^{i\theta_j}-1=2i e^{i\theta_j/2}\sin(\theta_j/2)$. The half-cell phase in the edge and face cochain locations is removed by a unitary diagonal change of Fourier basis, so the scaled directional symbol is $i d_j$ with $d_j=2\sin(\theta_j/2)/h_j$. The Cartesian curl symbol is therefore $i\boldsymbol d\times$. [F1, algebra]

2.1 The cross-product matrix $\boldsymbol d\times$ is real skew-symmetric. The identity $-(\boldsymbol d\times)^2=|\boldsymbol d|^2I-\boldsymbol d\boldsymbol d^T$ follows by expanding the vector triple product. Thus the curl-curl symbol is zero on the longitudinal vector $\boldsymbol d$ and equals $|\boldsymbol d|^2$ on its two-dimensional orthogonal complement. The Hodge weights in [F1] scale this eigenvalue by $c^2$, giving the stated $\lambda(\theta)$. [F1, step 1.1, algebra]

3.1 For a transverse mode $e^n=q^n v$ with this eigenvalue, subtracting the electric row in [F3] at consecutive time indices and using its magnetic row gives $q^{n+1}-2q^n+q^{n-1}+\Delta t^2\lambda(\theta)q^n=0$. Substitution of $q^n=e^{-i\omega n\Delta t}$ yields $4\sin^2(\omega\Delta t/2)=\Delta t^2\lambda(\theta)$, which is the displayed dispersion relation. [F3, step 2.1, algebra]

4.1 Since $0\le\sin^2(\theta_j/2)\le1$, $\lambda(\theta)\le4c^2(h_x^{-2}+h_y^{-2}+h_z^{-2})$. When every $N_j$ is even, the allowed tuple $\theta=(\pi,\pi,\pi)$ attains equality; otherwise the exact maximum is the maximum over the finite allowed tuples. Applying [F2] gives the rectangular strict bound and its cubic specialization, while preserving the finite-grid endpoint distinction. [F1, F2, step 3.1, algebra] ∎
