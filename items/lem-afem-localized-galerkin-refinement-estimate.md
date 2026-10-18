---
id: "lem-afem-localized-galerkin-refinement-estimate"
kind: "lemma"
title: "Localized energy estimate for nested Galerkin solutions"
status: published
origin: pipeline
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 2
deps:
  - "def-afem-p1-residual-estimator-and-data-oscillation"
  - "def-afem-nvb-labelled-triangulation-family"
  - "lem-afem-p1-residual-representation"
  - "thm-afem-local-moment-interpolation-estimates"
  - "lem-galerkin-orthogonality-for-conforming-galerkin-approximations"
  - "thm-matching-continuous-piecewise-polynomials-are-wkp"
  - "thm-zero-boundary-piecewise-polynomials-in-w10p"
  - "def-countable-choice"
proof_strategy: direct
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Ricardo H. Nochetto, Adaptive Finite Element Methods, Lecture 4"
      url: "https://www.math.umd.edu/~rhn/lectures/lecture4.pdf"
      locator: "§§4.1–4.3, closure complexity, localized upper bound, and restricted
        P1 Laplace complexity, PDF pp. 1–4."
    - title: "Bonito, Canuto, Nochetto & Veeser, Adaptive Finite Element Methods
        (2024)"
      url: "https://people.tamu.edu/~bonito/Publications/Preprints/2024_afem_acta.pdf"
      locator: "§§3.5–3.6 on 2D newest-vertex bisection and §8.1.1–8.1.3 on chains and
        cumulative closure complexity."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---
## Statement

Assume Countable Choice, as in the Sobolev interpolation suppliers.

Let $\mathcal T\le\mathcal T_*$ be conforming P1 meshes with exact Galerkin solutions $U,U_*$. Let $\mathcal R=\{K\in\mathcal T:K\text{ is subdivided in }\mathcal T_*\}$ and let $\omega(\mathcal R)$ be the union of the vertex stars of cells in $\mathcal R$. Then
$$\|\nabla(U_*-U)\|_{L^2(\Omega)}^2\le C\sum_{K\in\mathcal R}\eta_K(U)^2,$$
where $C$ depends on shape regularity, $|b|h_{\max}$, and the local interpolant constants.

## Facts & Assumptions

[A1] Countable Choice is assumed in the cited Sobolev and reference-simplex suppliers ([[def-countable-choice]]).

**Given:** Countable Choice, a nested matching refinement, exact conforming P1 Galerkin solutions, and the constant-convection model.

[F1] The coarse residual pairs the weak error with any $H_0^1$ function as the cell residual sum minus the outward flux jump sum ([[lem-afem-p1-residual-representation]]).

[F2] The local moment interpolant is P1-reproducing and satisfies local volume, gradient and edge estimates ([[thm-afem-local-moment-interpolation-estimates]]).

[F3] Galerkin orthogonality holds on both nested conforming spaces ([[lem-galerkin-orthogonality-for-conforming-galerkin-approximations]]).

## Proof

1.1 Define an auxiliary coarse moment map $J:H_0^1(\Omega)\to V(\mathcal T)$ for this nested pair. At each interior vertex $z$, choose the least-index incident coarse cell $L_z\notin\mathcal R$ if one exists, otherwise the original selected cell $K_z$, and use its dual affine moment $q_z(w)=\int_{L_z}w\psi_{z,L_z}$; at boundary vertices use zero. Set $Jw=\sum_{z\ {\rm interior}}q_z(w)\varphi_z$. The same conforming zero-boundary membership argument as in [F2] applies. Its bounds are uniform: on a cell $K$ use the patch mean $c$ when $K$ misses the boundary and $c=0$ otherwise. Then $q_z(w)-c=\int_{L_z}(w-c)\psi_{z,L_z}$ for interior vertices, while boundary coefficient differences are zero. Because $L_z\subset\omega_K$ and $h_{L_z}\asymp h_K$, the scaled dual bound gives $|q_z(w)-c|\le Ch_K^{-1}\|w-c\|_{L^2(L_z)}$. The hat bounds and patch Poincaré argument in the proof of [F2] therefore give $\|w-Jw\|_{L^2(K)}\le Ch_K\|\nabla w\|_{L^2(\omega_K)}$ and $\|\nabla Jw\|_{L^2(K)}\le C\|\nabla w\|_{L^2(\omega_K)}$. Applying the same scaled trace inequality as in [F2] gives its edge bound as well. All these operations have input $w\in H_0^1(\Omega)$; shifted functions enter only the local integrals. [A1, F2, given, construct, algebra]

2.1 Put $d=U_*-U$. The fine Galerkin equation and coarse equation imply $a(u-U_*,d)=0$ and $a(u-U,Jd)=0$. Since $b$ is constant and $d\in H_0^1(\Omega)$, $\int(b\cdot\nabla d)d=0$, so $a(d,d)=\|\nabla d\|_2^2$. Also $a(u-U,d)=a(d,d)$ because $u-U=d+(u-U_*)$ and fine orthogonality kills the latter term paired with $d$. Hence $\|\nabla d\|_2^2=a(u-U,d-Jd)$. [A1, F3, step 1.1, given, algebra]

3.1 If $K\notin\mathcal R$, then $d$ is affine on $K$. At every interior vertex $z$ of $K$, the selected $L_z$ is also unchanged, so $d|_{L_z}$ is affine and its dual moment equals the common nodal value $d(z)$; boundary coefficients equal $d(z)=0$. Consequently $Jd=d$ on every unchanged cell. The trace of $d-Jd$ also vanishes on every edge incident to an unchanged cell. Thus [F1] applied to step 2.1 contains only volume residuals on $\mathcal R$ and interior edges with both incident cells in $\mathcal R$. Use the volume and edge estimates proved in step 1.1. The surviving squared residual weights are bounded by $C\sum_{K\in\mathcal R}\eta_K(U)^2$, since each surviving edge contribution occurs in the indicators of its incident refined cells. Cauchy–Schwarz and uniformly bounded overlap of the coarse vertex patches bound the other factor by $C\|\nabla d\|_2$, giving $\|\nabla d\|_2^2\le C\left(\sum_{K\in\mathcal R}\eta_K(U)^2\right)^{1/2}\|\nabla d\|_2$. If this gradient norm is zero the claim is immediate; otherwise divide by it and square. [A1, F1, F2, step 1.1, step 2.1, algebra] ∎

