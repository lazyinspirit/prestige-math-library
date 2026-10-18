---
id: thm-hp-galerkin-energy-error-on-fixed-mesh
kind: theorem
title: Cea transfers the fixed-mesh analytic p rate to the energy error
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-hp-variable-degree-spaces-on-matching-meshes
  - lem-variable-degree-polynomial-spaces-are-h1-conforming
  - thm-hp-analytic-p-convergence-on-fixed-tensor-mesh
  - thm-cea-quasi-optimality-for-conforming-galerkin-approximations
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "Countable Choice is required only through the cited Céa theorem."
verification:
  precheck: pass
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Part VI, Basic error analysis
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap26.pdf
      locator: "§26.3.1–26.3.2, printed pp. 28–30: Galerkin orthogonality and the M/alpha Céa factor."
    - title: Martin Vohralík, Finite Element Methods
      url: https://who.rocq.inria.fr/Martin.Vohralik/Enseig/FEM/FEM.pdf
      locator: "Chapter 6, Theorem 6.2.1: p-dependent approximation-rate context; the local proof required for that result is not supplied there."
---

## Statement

Assume Countable Choice. On a fixed finite matching affine tensor-box mesh, let $V=H^1(\Omega)$ with its standard norm, let $a(v,w)=\int_\Omega(\nabla v\cdot\nabla w+vw)$, and let $F$ be a bounded linear functional on $V$. Let $u\in V$ solve $a(u,w)=F(w)$ for all $w\in V$, and let $u_p$ be its conforming Galerkin solution in the common-degree trace-matching tensor space of [[def-hp-variable-degree-spaces-on-matching-meshes]]. If the analytic hypotheses of [[thm-hp-analytic-p-convergence-on-fixed-tensor-mesh]] hold with constants $M,R$ and $R^{-1}<q<1$, then
$$
\|u-u_p\|_{H^1(\Omega)}\le C_{\mathcal T,d,R,q}M q^p.
$$
This is the fixed-mesh analytic branch; it does not assert an h-dependent estimate or an ordinary Sobolev p-rate on simplices.

## Facts & Assumptions

**Given:** Countable Choice; the finite matching affine tensor mesh; $a,F,u,V$ as in the Statement; integer $p\ge1$; and the analytic derivative bound and $q$ of the fixed-mesh projector theorem.

[F1] [[lem-variable-degree-polynomial-spaces-are-h1-conforming]]: the trace-matching tensor space is a finite-dimensional subspace of $H^1(\Omega)$.

[F2] [[thm-hp-analytic-p-convergence-on-fixed-tensor-mesh]]: there is a trace-matching $u_p^*\in V_p$ with $\|u-u_p^*\|_{H^1}\le C_{\mathcal T,d,R,q}Mq^p$.

[F3] [[thm-cea-quasi-optimality-for-conforming-galerkin-approximations]]: under Countable Choice, a bounded coercive form on a Hilbert space and a finite-dimensional conforming subspace have a Galerkin solution satisfying $\|u-u_p\|_V\le(M_a/\alpha_a)\inf_{v_p\in V_p}\|u-v_p\|_V$.

[A1] For the form in the Statement, Cauchy–Schwarz gives $|a(v,w)|\le\|v\|_{H^1}\|w\|_{H^1}$ and $a(v,v)=\|v\|_{H^1}^2$.

## Proof

1.1 By [F1], $V_p$ is finite-dimensional and contained in the Hilbert space $V$. The form in [A1] is bounded with $M_a=1$ and coercive with $\alpha_a=1$. The exact solution and bounded functional are among the hypotheses in Given, so [F3] applies and yields $\|u-u_p\|_{H^1}\le\inf_{v_p\in V_p}\|u-v_p\|_{H^1}$. Its only axiom beyond classical real analysis is Countable Choice, stated in Given. [A1, F1, F3, given]

2.1 The approximant $u_p^*$ in [F2] belongs to $V_p$, so the infimum in step 1.1 is no greater than $\|u-u_p^*\|_{H^1}$. Substituting its bound from [F2] proves the stated energy estimate. [F2, step 1.1, algebra] ∎
