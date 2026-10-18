---
id: thm-bem-calderon-mapping-and-jump-identities
kind: theorem
title: Bounded Calderon maps and signed jump identities
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps: [lem-bem-polyhedral-edge-kernel-representation, def-bem-calderon-boundary-operators, thm-bem-single-layer-transmission-mapping-and-coercivity, thm-bem-double-layer-transmission-jumps-and-bounds, lem-bem-lipschitz-trace-and-lifting, def-axiom-of-choice, def-countable-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Martin Costabel, Boundary Integral Operators on Lipschitz Domains: Elementary Results (1988)"
      url: https://costabel.perso.math.cnrs.fr/publis/Co88_Lip.pdf
      locator: "§§2–4, printed pp. 615–622: bounded layer traces, conormal traces, Calderon operators, and weak jump relations."
    - title: "Francisco-Javier Sayas, First Steps in the Boundary Element Method (2015 lecture notes)"
      url: https://team-pancho.github.io/teaching/math838/BEM.pdf
      locator: "Chapter 2 §§2.1–2.2, printed pp. 23–28, and Chapter 3 §§3.1–3.3, printed pp. 40–46: signed trace jumps, transmission conventions, and averaged operators."
---

## Statement

Assume the Axiom of Choice and Countable Choice, as in the single- and double-layer transmission theorems. For $\lambda\in H^{-1/2}(\Gamma)$ and $\phi\in H^{1/2}(\Gamma)$, the operators in [[def-bem-calderon-boundary-operators]] are bounded as
$$V:H^{-1/2}\to H^{1/2},\quad K:H^{1/2}\to H^{1/2},\quad K':H^{-1/2}\to H^{-1/2},\quad W:H^{1/2}\to H^{-1/2}.$$
Their weak traces satisfy
$$\gamma^-S\lambda=\gamma^+S\lambda=V\lambda,\qquad \partial_n^-S\lambda=K'\lambda+\tfrac12\lambda,\quad \partial_n^+S\lambda=K'\lambda-\tfrac12\lambda,$$
$$\gamma^-D\phi=K\phi-\tfrac12\phi,\qquad \gamma^+D\phi=K\phi+\tfrac12\phi,\qquad \partial_n^-D\phi=\partial_n^+D\phi=-W\phi.$$
All equalities are in the stated Sobolev trace or dual spaces and use the outward normal orientation fixed on the A page.

## Facts & Assumptions

**Given:** The Axiom of Choice, Countable Choice, the real trace spaces and orientation, the weak layer-potential conventions, and the single- and double-layer transmission theorems.

[F1] The single layer has a bounded common trace, energy bound, and conormal jump $\partial_n^-S\lambda-\partial_n^+S\lambda=\lambda$ ([[thm-bem-single-layer-transmission-mapping-and-coercivity]]).

[F2] The double layer has bounded average trace, common conormal, and jump $\gamma^-D\phi-\gamma^+D\phi=-\phi$ ([[thm-bem-double-layer-transmission-jumps-and-bounds]]).

[F3] The averaged operators are defined by the trace and conormal averages, with $W$ equal to minus the common double-layer conormal ([[def-bem-calderon-boundary-operators]]).

[F4] Interior and exterior trace lifts are bounded from $H^{1/2}(\Gamma)$ into their local $H^1$ spaces ([[lem-bem-lipschitz-trace-and-lifting]]).

## Proof

1.1 The bounds for $V$ and $K$ are respectively the trace bound in [F1] and the average-trace bound in [F2]. The bound for $W$ is the common-conormal bound in [F2] and the definition in [F3]. For $K'$, harmonicity of $S\lambda$ and the weak conormal definition give, for every $g\in H^{1/2}(\Gamma)$, $|\langle\partial_n^-S\lambda,g\rangle|\le\|\nabla S\lambda\|_{L^2(\Omega^-)}\|\nabla L^-g\|_{L^2(\Omega^-)}\le C\|\lambda\|_{H^{-1/2}}\|g\|_{H^{1/2}},$ and the exterior estimate is identical with an exterior local lift. Thus both conormals, and their average $K'\lambda$, lie in $H^{-1/2}$ with the claimed bound. [F1, F2, F3, F4, given, algebra]

2.1 The first common-trace identity and the single-layer conormal difference are [F1]. By [F3], $K'\lambda$ is the arithmetic mean of those two conormals; solving the sum-and-difference equations gives the displayed $K'\pm\tfrac12 I$ formulas. The double-layer jump and average-trace definition [F2]–[F3] similarly give $K\mp\tfrac12 I$ for the interior/exterior traces. The common double-layer conormal equals $-W\phi$ by [F3]. These algebraic identities establish every signed formula. [F1, F2, F3, step 1.1, given, algebra] ∎

## Remarks

The double-layer transmission theorem identifies the weak double layer with its off-surface kernel integral for every global $H^{1/2}(\Gamma)$ density, including compatible facewise smooth densities reaching polyhedral edges. For those facewise smooth densities, [[lem-bem-polyhedral-edge-kernel-representation]] also computes the face-interior kernel realization of $K$ and the signed half-jumps. The single-layer transmission theorem identifies the weak single layer with its kernel for bounded densities, including discontinuous P0 densities. The common double-layer conormal defines the hypersingular operator weakly; no ordinary absolutely convergent hypersingular boundary integral or pointwise half-jump at edges or vertices is asserted.
