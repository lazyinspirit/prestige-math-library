---
id: cor-bem-p0-galerkin-rate-for-h1-density
kind: corollary
title: An H1-density rate for P0 single-layer Galerkin BEM
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps: [thm-bem-single-layer-galerkin-wellposed-and-quasioptimal, lem-bem-p0-negative-half-order-approximation]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Francisco-Javier Sayas, First Steps in the Boundary Element Method (2015 lecture notes)"
      url: https://team-pancho.github.io/teaching/math838/BEM.pdf
      locator: "Chapter 1 §1.3, PDF pp. 6–8: Galerkin approximation with piecewise-constant surface elements."
    - title: "Martin Costabel, Boundary Integral Operators on Lipschitz Domains: Elementary Results (1988)"
      url: https://costabel.perso.math.cnrs.fr/publis/Co88_Lip.pdf
      locator: "§4, printed pp. 620–622: energy-norm quasi-optimality of Galerkin boundary operators."
---

## Statement

Under the mesh and coercivity hypotheses of [[thm-bem-single-layer-galerkin-wellposed-and-quasioptimal]], suppose the exact density $\lambda$ is continuously differentiable on each planar face with $\nabla_\Gamma\lambda\in L^2(\Gamma)$. Then the P0 Galerkin solution obeys
$$\|\lambda-\lambda_h\|_{H^{-1/2}(\Gamma)}\le C h^{3/2}\|\nabla_\Gamma\lambda\|_{L^2(\Gamma)},$$
where $C$ is independent of $h$ for a shape-regular mesh family.

## Facts & Assumptions

**Given:** The exact and P0 Galerkin solutions, the shape-regular mesh family, and the stated facewise regularity of $\lambda$.

[F1] The Galerkin error is bounded by a mesh-independent constant times best approximation in $H^{-1/2}$ ([[thm-bem-single-layer-galerkin-wellposed-and-quasioptimal]]).

[F2] Element averages satisfy $\|\lambda-\Pi_h\lambda\|_{H^{-1/2}}\le Ch^{3/2}\|\nabla_\Gamma\lambda\|_{L^2}$ for piecewise $C^1$ data ([[lem-bem-p0-negative-half-order-approximation]]).

## Proof

1.1 In [F1], choose the admissible comparison density $\mu_h=\Pi_h\lambda\in X_h$. Then the best-approximation infimum is at most $\|\lambda-\Pi_h\lambda\|_{H^{-1/2}}$. [F1, given, choose]

2.1 Apply [F2] to the right-hand side of step 1.1 and absorb the mesh-independent quasi-optimality factor into $C$. This gives the displayed $h^{3/2}$ estimate. [F2, step 1.1, algebra] ∎

