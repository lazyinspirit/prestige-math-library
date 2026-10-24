---
id: lem-compressible-viscous-flux-entropy-variable-factorization
kind: lemma
title: Positive-semidefinite entropy-variable factorization of viscous flux
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
aliases: []
deps:
  - def-compressible-navier-stokes-fourier-model
  - lem-compressible-ideal-gas-entropy-pair-and-variables
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
    - title: "Pablo Fernandez, Ngoc-Cuong Nguyen, and Jaime Peraire, Entropy-stable hybridized discontinuous Galerkin methods for the compressible Euler and Navier-Stokes equations, complete author preprint"
      url: "https://arxiv.org/pdf/1808.05066"
      locator: "Sections 2.2–2.3 and 3.3, equations (3)–(12), (18)–(19), PDF pp. 3–4 and 6."
    - title: "Eitan Tadmor, Entropy Stable Schemes, Chapter 18, Handbook of Numerical Methods for Hyperbolic Problems: Basic and Fundamental Issues, 2016, complete chapter"
      url: "https://math.umd.edu/~tadmor/references/files/Tadmor%20entropy%20stable%20schemes-r%20handbook2016.pdf"
      locator: "Printed pp. 477–483, Sections 4.1–4.6: entropy variables, entropy potentials, and the discrete entropy production framework."
---

## Statement

For $U\in\mathcal G$, let $Z=(Z_1,\ldots,Z_d)$ and $W=(W_1,\ldots,W_d)$ be arrays of entropy-variable gradients, with $Z_k,W_k\in\mathbb R^{d+2}$. Write $Z_{k,m_\ell}$ for the momentum-variable component and $Z_{k,E}$ for the energy-variable component. Define

$$G_{k\ell}(Z)=Z_{k,m_\ell}+u_\ell Z_{k,E},\qquad c_k(Z)=Z_{k,E},$$

and $G^0(Z)=\operatorname{sym}G(Z)-(\operatorname{tr}G(Z)/d)I$. Define the linear map

$$\mathcal R_U Z=\bigl(\sqrt{2\mu T}\,G^0(Z),\ \sqrt{\zeta T}\,\operatorname{tr}G(Z),\ \sqrt{\kappa}\,T c(Z)\bigr).$$

The bilinear form

$$\mathcal B_U(Z,W)=2\mu T\,G^0(Z):G^0(W)+\zeta T\,\operatorname{tr}G(Z)\operatorname{tr}G(W)+\kappa T^2\sum_{k=1}^d c_k(Z)c_k(W)$$

has the factorization $\mathcal B_U(Z,W)=(\mathcal R_UZ)\cdot(\mathcal R_UW)=\sum_{j,k}Z_j^TK_{jk}(U)W_k$, so $K(U)=\mathcal R_U^*\mathcal R_U$ is a symmetric positive-semidefinite block matrix. For $Z_k=\partial_kv(U)$, its blocks give exactly the model viscous flux $F_j^{\mathrm{visc}}=\sum_kK_{jk}(U)\partial_kv$, and

$$\sum_{j,k}(\partial_jv)^TK_{jk}(U)(\partial_kv)=\frac{\tau:\nabla u}{T}+\frac{\kappa|\nabla T|^2}{T^2}\ge0.$$

## Facts & Assumptions

**Given:** $U\in\mathcal G$, the constants $\mu>0$, $\zeta\ge0$, $\kappa>0$, and arbitrary arrays $Z,W\in(\mathbb R^{d+2})^d$.

[F1] [[def-compressible-navier-stokes-fourier-model]]: $D=\operatorname{sym}\nabla u$, $D^0=D-(\operatorname{tr}D/d)I$, $\tau=2\mu D^0+\zeta(\operatorname{tr}D)I$, and $F_j^{\mathrm{visc}}=(0,\tau_{j1},\ldots,\tau_{jd},u\cdot\tau_{j\cdot}+\kappa\partial_jT)$.

[F2] [[lem-compressible-ideal-gas-entropy-pair-and-variables]]: $v_m=\beta u$, $v_E=-\beta$, and $\beta=1/T$.

## Proof


1.1 For any entropy-variable gradient array $Z$, set $G_{k\ell}=Z_{k,m_\ell}+u_\ell Z_{k,E}$ and $c_k=Z_{k,E}$. The formula for $v$ in [F2] gives, when $Z_k=\partial_kv$, $G_{k\ell}=T^{-1}\partial_ku_\ell$ and $c_k=T^{-2}\partial_kT$, since $\partial_k(\beta u_\ell)+u_\ell\partial_k(-\beta)=\beta\partial_ku_\ell$ and $\partial_k(-1/T)=T^{-2}\partial_kT$. [F2, algebra]

2.1 For a general array $Z$, define $\tau_{k\ell}(Z)=2\mu T G^0(Z)_{k\ell}+\zeta T\operatorname{tr}G(Z)\delta_{k\ell}$. The displayed bilinear form expands to $\mathcal B_U(Z,W)=\sum_{k,\ell}(W_{k,m_\ell}+u_\ell W_{k,E})\tau_{k\ell}(Z)+\kappa T^2\sum_kW_{k,E}Z_{k,E}$. Thus the linear functional in $W$ is pairing against the flux with zero mass row, momentum entries $\tau_{k\ell}(Z)$, and energy entry $u\cdot\tau_{k\cdot}(Z)+\kappa T^2Z_{k,E}$. By step 1.1 this is precisely the physical viscous flux when $Z=\nabla v$. [F1, F2, step 1.1, algebra]

3.1 The linear map $\mathcal R_U$ in the Statement gives $\mathcal B_U(Z,W)=(\mathcal R_UZ)\cdot(\mathcal R_UW)$ term by term. Its adjoint therefore defines the block matrix $K(U)=\mathcal R_U^*\mathcal R_U$, which is symmetric and positive semidefinite because $Z^TK(U)Z=|\mathcal R_UZ|^2\ge0$. In particular, for $W=Z$ the quadratic form equals $2\mu T|G^0(Z)|^2+\zeta T(\operatorname{tr}G(Z))^2+\kappa T^2\sum_k Z_{k,E}^2\ge0$, using $T>0$, $\mu>0$, $\zeta\ge0$, and $\kappa>0$. [F1, step 2.1, algebra]

4.1 Take $Z=\nabla v$. Then $\nabla u=T G(Z)$ and $\nabla T=T^2c(Z)$ by step 1.1. Since $\tau$ is symmetric, $\tau:\nabla u=2\mu T^2|G^0(Z)|^2+\zeta T^2(\operatorname{tr}G(Z))^2$. Dividing by $T$ and adding $\kappa|\nabla T|^2/T^2=\kappa T^2|c(Z)|^2$ gives exactly $\mathcal B_U(Z,Z)$, proving the production identity and its nonnegativity. [F1, F2, step 1.1, step 3.1, algebra] ∎
