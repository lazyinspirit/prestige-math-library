---
id: cor-bem-p0-galerkin-rate-for-h1-density
kind: corollary
title: An H1-density rate for P0 single-layer Galerkin BEM
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 7
deps: [thm-bem-single-layer-galerkin-wellposed-and-quasioptimal, lem-bem-p0-negative-half-order-approximation, def-axiom-of-choice, def-countable-choice]
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

Assume the Axiom of Choice and Countable Choice. Under the mesh and coercivity hypotheses of [[thm-bem-single-layer-galerkin-wellposed-and-quasioptimal]], suppose each mesh triangle is contained in one planar face and the exact density $\lambda\in L^2(\Gamma)$ is continuously differentiable on each face with $\nabla_\Gamma\lambda\in L^2(\Gamma)$. Then the P0 Galerkin solution obeys
$$\|\lambda-\lambda_h\|_{H^{-1/2}(\Gamma)}\le C h^{3/2}\|\nabla_\Gamma\lambda\|_{L^2(\Gamma)},$$
where $C$ is independent of $h$ for a shape-regular mesh family. More generally, the same estimate holds whenever $\lambda|_T\in H^1(T)$ on every mesh triangle, with the gradient norm taken elementwise. No agreement of density traces across mesh edges is required.

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice, the exact and P0 Galerkin solutions, the shape-regular mesh family, and $\lambda|_T\in H^1(T)$ on every triangle; the facewise version assumes that every triangle lies in a single face.

[A1] Assume the Axiom of Choice and Countable Choice ([[def-axiom-of-choice]], [[def-countable-choice]]); these supply the foundational hypotheses of both analytical suppliers.

[F1] The Galerkin error is bounded by a mesh-independent constant times best approximation in $H^{-1/2}$ ([[thm-bem-single-layer-galerkin-wellposed-and-quasioptimal]]).

[F2] Element averages satisfy $\|\lambda-\Pi_h\lambda\|_{H^{-1/2}}\le Ch^{3/2}\|\nabla_\Gamma\lambda\|_{L^2}$ for densities whose restrictions to every mesh triangle belong to $H^1(T)$, using the elementwise gradient norm ([[lem-bem-p0-negative-half-order-approximation]]).

## Proof

1.1 In [F1], choose the admissible comparison density $\mu_h=\Pi_h\lambda\in X_h$. Then the best-approximation infimum is at most $\|\lambda-\Pi_h\lambda\|_{H^{-1/2}}$. [A1, F1, given, choose]

2.1 In the facewise version, face alignment and the stated regularity give $\lambda|_T\in H^1(T)$ for every triangle; otherwise this is assumed directly. Apply [F2] to the right-hand side of step 1.1 and absorb the mesh-independent quasi-optimality factor into $C$. This gives the displayed $h^{3/2}$ estimate. [F2, step 1.1, given, algebra] ∎

