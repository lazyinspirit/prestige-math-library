---
id: "lem-afem-localized-galerkin-refinement-estimate"
kind: "lemma"
title: "Localized energy estimate for nested Galerkin solutions"
status: draft
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
      locator: "§§4.1–4.3, closure complexity, localized upper bound, and restricted P1 Laplace complexity, PDF pp. 1–4."
    - title: "Bonito, Canuto, Nochetto & Veeser, Adaptive Finite Element Methods (2024)"
      url: "https://people.tamu.edu/~bonito/Publications/Preprints/2024_afem_acta.pdf"
      locator: "§§3.5–3.6 on 2D newest-vertex bisection and §8.1.1–8.1.3 on chains and cumulative closure complexity."
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

1.1 Put $d=U_*-U$. The fine Galerkin equation and coarse equation imply $a(u-U_*,d)=0$ and $a(u-U,I_{\mathcal T}d)=0$. Since $b$ is constant, $\int(b\cdot\nabla d)d=0$, so $a(d,d)=\|\nabla d\|_2^2$. Also $a(u-U,d)=a(d,d)$ because $u-U=d+(u-U_*)$ and the first term is paired with $d$ by fine orthogonality. Hence $\|\nabla d\|_2^2=a(u-U,d-I_{\mathcal T}d)$ using coarse orthogonality for $I_{\mathcal T}d\in V(\mathcal T)$. [A1, F3, given, algebra]

2.1 If a coarse cell and all its vertex-star neighbors are unchanged in $\mathcal T_*$, then $d$ is affine on that patch, so reproduction gives $I_{\mathcal T}d=d$ on the cell. Thus $d-I_{\mathcal T}d$ is supported in $\omega(\mathcal R)$. Apply [F1] to the right side of step 1.1. The local interpolation estimates [F2] bound each cell residual pairing by $h_K\|R_K(U)\|_2\|\nabla d\|_{L^2(\omega_K)}$ and each edge term by $h_E^{1/2}\|J_E(U)\|_2\|\nabla d\|_{L^2(\omega_K\cup\omega_{K'})}$. Cauchy–Schwarz and bounded vertex-star overlap give $\|\nabla d\|_2^2\le C\left(\sum_{K\in\mathcal R}\eta_K(U)^2\right)^{1/2}\|\nabla d\|_2.$ If $d=0$ the claim is immediate; otherwise divide by $\|\nabla d\|_2$ and square. [A1, F1, F2, step 1.1, algebra] ∎
