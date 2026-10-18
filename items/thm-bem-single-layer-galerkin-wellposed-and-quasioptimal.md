---
id: thm-bem-single-layer-galerkin-wellposed-and-quasioptimal
kind: theorem
title: P0 Galerkin BEM for the single layer is well posed and quasioptimal
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps: [def-bem-lipschitz-polyhedral-boundary-and-trace-spaces, def-bem-surface-mesh-and-piecewise-constant-density-space, def-bem-laplace-layer-potentials-and-energy-spaces, thm-bem-single-layer-transmission-mapping-and-coercivity, thm-second-strang-lemma-for-nonconforming-galerkin, thm-lax-milgram, def-countable-choice, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
axiom_use: Countable Choice is used through Lax–Milgram and the imported second Strang lemma; the Axiom of Choice is inherited through the single-layer coercivity theorem.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Martin Costabel, Boundary Integral Operators on Lipschitz Domains: Elementary Results (1988)"
      url: https://costabel.perso.math.cnrs.fr/publis/Co88_Lip.pdf
      locator: "§4, printed pp. 620–622: coercive boundary operators and Galerkin approximation."
    - title: "Francisco-Javier Sayas, First Steps in the Boundary Element Method (2015 lecture notes)"
      url: https://team-pancho.github.io/teaching/math838/BEM.pdf
      locator: "Chapter 1 §1.3, PDF pp. 6–8: the P0 Galerkin method for the single-layer equation."
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $\Gamma$ be as above, let $\mathcal T_h$ be any finite conforming surface triangulation, and let $X_h$ be its P0 space. For every $f\in H^{1/2}(\Gamma)$ there are unique $\lambda\in H^{-1/2}(\Gamma)$ and $\lambda_h\in X_h$ satisfying
$$\langle\mu,V\lambda\rangle_\Gamma=\langle\mu,f\rangle_\Gamma\quad(\mu\in H^{-1/2}(\Gamma)),\qquad \langle\mu_h,V\lambda_h\rangle_\Gamma=\langle\mu_h,f\rangle_\Gamma\quad(\mu_h\in X_h).$$
For constants $c,C>0$ from [[thm-bem-single-layer-transmission-mapping-and-coercivity]],
$$\|\lambda-\lambda_h\|_{H^{-1/2}(\Gamma)}\le(1+C/c)\inf_{\mu_h\in X_h}\|\lambda-\mu_h\|_{H^{-1/2}(\Gamma)}.$$
The method is conforming because $X_h\subset H^{-1/2}(\Gamma)$; this is an exact Galerkin estimate and contains no quadrature or geometry error.

## Facts & Assumptions

**Given:** The Axiom of Choice, Countable Choice, the layer-potential conventions, a finite conforming surface mesh, and $f\in H^{1/2}(\Gamma)$.

[A1] The Axiom of Choice is assumed by the single-layer coercivity theorem, and Countable Choice by Lax–Milgram and Strang ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] The single-layer trace map is bounded and coercive: $V:H^{-1/2}\to H^{1/2}$ and $\langle\mu,V\mu\rangle\ge c\|\mu\|_{H^{-1/2}}^2$ ([[thm-bem-single-layer-transmission-mapping-and-coercivity]]).

[F2] The weak single-layer solution satisfies $\int_{\mathbb R^3}\nabla S\lambda\cdot\nabla v=\langle\lambda,\gamma v\rangle$ for every $v\in\dot H^1(\mathbb R^3)$ ([[def-bem-laplace-layer-potentials-and-energy-spaces]]).

[F3] The P0 space is finite-dimensional and is a subspace of $H^{-1/2}(\Gamma)$; the dual pairing bounds the restricted load ([[def-bem-surface-mesh-and-piecewise-constant-density-space]], [[def-bem-lipschitz-polyhedral-boundary-and-trace-spaces]]).

[F4] The second Strang estimate gives the quasi-optimal bound for a bounded coercive exact problem and a finite-dimensional discrete problem with bounded extension; with the exact form and load on the conforming subspace its consistency defect is zero ([[thm-second-strang-lemma-for-nonconforming-galerkin]]).

## Proof

1.1 Define $a(\lambda,\mu)=\langle\mu,V\lambda\rangle$. Boundedness follows from [F1] and the dual norm. For $u=S\lambda$ and $v=S\mu$, the weak equations [F2] give $a(\lambda,\mu)=\int_{\mathbb R^3}\nabla u\cdot\nabla v=a(\mu,\lambda)$, so $a$ is symmetric; with [F1] it is coercive. The load $F_f(\mu)=\langle\mu,f\rangle$ is bounded by duality. [A1, F1, F2, F3, given, algebra]

2.1 The fixed square-sum chart norm makes $H^{1/2}$ a real Hilbert space, hence its continuous dual $H^{-1/2}$ is Hilbert under the fixed dual norm by the trace-space convention in [F3]. Apply Lax–Milgram using [A1] to obtain the unique exact solution $\lambda$. By [F3], the restriction of $a$ to $X_h$ remains bounded and coercive and the restricted load is bounded, so Lax–Milgram on the finite-dimensional real Hilbert space $X_h$ gives the unique $\lambda_h$. [A1, F1, F3, step 1.1, given, construct]

3.1 Apply [F4] with $V=H^{-1/2}(\Gamma)$, $V_h=X_h$, common norm $\|\cdot\|_{H^{-1/2}}$, extension $\widetilde a_h=a$, and $F_h=F_f|_{X_h}$. The bounded-form constant is at most $C$ and the coercivity constant is at least $c$ by [F1]; the consistency defect is zero because both discrete objects are restrictions of the exact form and load. Its estimate is therefore $\|\lambda-\lambda_h\|\le(1+C/c)\inf_{\mu_h\in X_h}\|\lambda-\mu_h\|$, as stated. [F1, F3, F4, step 2.1, given, algebra] ∎

