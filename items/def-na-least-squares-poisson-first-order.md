---
id: "def-na-least-squares-poisson-first-order"
kind: "definition"
title: "First-order least-squares formulation of the Dirichlet Poisson problem"
status: "draft"
origin: "session"
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 4
deps:
  [
    "def-na-hdiv-space",
    "def-na-simplicial-mesh-rt-bdm-spaces",
    "def-sobolev-space-wkp-and-its-norm",
    "def-wkp-zero-as-a-sobolev-closure",
    "def-countable-choice"
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance: { "statement": "literature-derived", "proof": "not-applicable" }
sources:
  {
    "references":
      [
        {
            "title": "Peter Bochev and Max Gunzburger, Least-squares finite element methods",
            "url": "https://people.sc.fsu.edu/~mgunzburger/files_papers/gunzburger-ls-icm.p\
              df",
            "locator": "Complete 26-page paper; §§2.2.1 and 4.1–4.2 on first-order
              least-squares Poisson and residual norm equivalence."
          },
        {
            "title": "J. Bond, R. Chaudhry, L. Cyr, and L. Olson, A First-Order System
              Least-Squares Finite Element Method for the Poisson-Boltzmann
              Equation",
            "url": "https://lukeo.cs.illinois.edu/files/2010_BoChCyOl_lspbe.pdf",
            "locator": "Complete 11-page paper; Theorem 1 and proof, used comparatively
              because its coefficients and boundary hypotheses differ."
          }
      ]
  }
verification:
  precheck: n/a
---

## Definition

Assume Countable Choice. Let $\Omega\subset\mathbb R^2$ be bounded connected Lipschitz and $f\in L^2(\Omega;\mathbb R)$. Solve $-\Delta u=f$, $u\in H^1_0(\Omega)$; set $\sigma=-\nabla u$, so $\operatorname{div}\sigma=f$. For a finite conforming shape-regular triangular mesh, define $X_h=RT_0(\mathcal T_h)\times(P_1(\mathcal T_h)\cap H^1_0(\Omega))$ and $J_h(\sigma_h,u_h)=\|\sigma_h+\nabla u_h\|_2^2+\|\operatorname{div}\sigma_h-f\|_2^2$. Here $RT_0(K)=P_0(K)^2+xP_0(K)$ and $P_1$ is continuous piecewise affine. The real Sobolev-space and zero-boundary conventions are [[def-sobolev-space-wkp-and-its-norm]] and [[def-wkp-zero-as-a-sobolev-closure]]; H(div), mesh, and RT conventions are [[def-na-hdiv-space]] and [[def-na-simplicial-mesh-rt-bdm-spaces]]. This is the plan-spec PE30 sign convention; negating the design flux converts its residuals to these and preserves the squared objective. Integrals are exact; geometry, quadrature and roundoff errors are excluded.
