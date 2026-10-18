---
id: thm-hp-gll-strang-error-with-aliasing-defect
kind: theorem
title: GLL spectral-element energy error retains the quadrature defect
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-hp-variable-degree-spaces-on-matching-meshes
  - lem-variable-degree-polynomial-spaces-are-h1-conforming
  - thm-hp-gll-top-mode-and-puniform-energy-equivalence
  - def-variational-crime-error-framework
  - thm-first-strang-lemma-for-conforming-perturbed-galerkin
  - thm-cauchy-schwarz-in-an-inner-product-space
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "Countable Choice is required through the cited first Strang theorem."
verification:
  precheck: pending
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Part VI, Chapter 27, Error analysis with variational crimes
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap27.pdf
      locator: "§§27.1–27.3, printed pp. 1–8: the first Strang estimate and exact consistency defects."
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations
      url: https://jschoeberl.github.io/iFEM/FEM/nonconforming.html
      locator: "Chapter 25: variational crimes, stability, and consistency-defect context."
---

## Statement

Assume Countable Choice. Let $\Omega$ have a fixed finite matching affine tensor-box mesh with cell degrees $p_K\ge1$, and let $V_p$ be its trace-matching hp space. On $V=H^1(\Omega)$ use $a(v,w)=\int_\Omega(\nabla v\cdot\nabla w+vw)$ and a bounded load $F$. Let $u$ solve the exact variational problem and let $u_p\in V_p$ solve the cellwise GLL quadrature problem with the same load exactly restricted to $V_p$. Define the form defect $\delta_{a,p}$ by [[def-variational-crime-error-framework]]. Then
$$\|u-u_p\|_{H^1(\Omega)} \le \inf_{v_p\in V_p}\bigl(2\|u-v_p\|_{H^1(\Omega)}+\delta_{a,p}(v_p)\bigr).$$
The stability factor is uniform in all cell degrees. The defect is retained as stated; no aliasing or p-decay estimate is asserted, and GLL assembly is not identified with exact Galerkin assembly.

## Facts & Assumptions

**Given:** Countable Choice; the finite matching affine tensor-box mesh and $p_K\ge1$; exact $a,F,u$; the GLL form $a_p$; and its discrete solution $u_p$.

[F1] [[lem-variable-degree-polynomial-spaces-are-h1-conforming]]: the trace-matching hp space is finite-dimensional and contained in $H^1(\Omega)$.

[F2] [[thm-hp-gll-top-mode-and-puniform-energy-equivalence]]: on each affine box the GLL quadrature H1 form is bounded above by $3^d$ times and below by $1$ times the exact local H1 form, uniformly in its degree.

[F3] [[def-variational-crime-error-framework]]: $\delta_{a,p}(v_p)=\sup_{w_p\ne0}|a(v_p,w_p)-a_p(v_p,w_p)|/\|w_p\|_{H^1}$, while the load defect is defined analogously.

[F4] [[thm-first-strang-lemma-for-conforming-perturbed-galerkin]]: under Countable Choice, a coercive exact and discrete form on a finite-dimensional conforming subspace satisfy the first Strang estimate with the form and load defects from [F3].

[F5] [[thm-cauchy-schwarz-in-an-inner-product-space]]: a positive weighted finite sum obeys Cauchy–Schwarz.

## Proof

1.1 Sum [F2] over cells. For every $v_p\in V_p$, $a(v_p,v_p)=\|v_p\|_{H^1}^2$ and $a_p(v_p,v_p)\ge\|v_p\|_{H^1}^2$; Cauchy–Schwarz [F5] for the positive quadrature weights gives $|a_p(v_p,w_p)|\le3^d\|v_p\|_{H^1}\|w_p\|_{H^1}$. Thus the discrete form is bounded and coercive with $\alpha_p\ge1$, and the exact form has $M=1$. The exact load is unchanged on $V_p$, so $\delta_{F,p}=0$. [F1, F2, F3, F5, given, algebra]

2.1 Apply [F4] with $V=H^1(\Omega)$, the finite-dimensional conforming subspace from [F1], exact bounded coercive form $a$, GLL form $a_p$, and the restricted load. Its bound is $\inf_{v_p\in V_p}((1+M/\alpha_p)\|u-v_p\|+(\delta_{a,p}(v_p)+\delta_{F,p})/\alpha_p)$. Substituting $M=1$, $\alpha_p\ge1$, and $\delta_{F,p}=0$ from step 1.1 yields the stated inequality. Countable Choice is the only axiom used by [F4]. [F1, F3, F4, step 1.1, given, algebra] ∎
