---
id: cor-shape-regular-fe-strang-error-bound
kind: corollary
title: Shape-regular affine finite elements supply the Strang approximation term
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps: [def-variational-crime-error-framework, thm-first-strang-lemma-for-conforming-perturbed-galerkin, def-matching-affine-simplicial-meshes, def-reference-finite-element-and-unisolvent-dofs, def-broken-and-conforming-polynomial-spaces, thm-local-finite-element-interpolation-estimates, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 11, Local interpolation on affine meshes
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap11.pdf
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 4
      url: https://jschoeberl.github.io/iFEM/_downloads/900feda304f95ee42fd24abe742d7564/numpde.pdf
---

## Statement

Assume Countable Choice and let $d\in\{2,3\}$. Let $\mathcal T_h$ be a matching shape-regular affine simplicial mesh as in [[def-matching-affine-simplicial-meshes]]. Let $V_h$ be a conforming zero-boundary P1 Lagrange subspace of a Hilbert space $V$, with $V_h\subseteq V$, and let $I_hu\in V_h$ be the global nodal interpolant of $u\in H^2(\Omega)\cap C(\overline\Omega)$ whose boundary nodal values vanish. Assume $\|z\|_V\le C_V|z|_{H^1(\Omega)}$ for $z=u-I_hu$. The reference nodal functionals are bounded on $W^{2,2}$, and the exact/discrete variational problems satisfy the hypotheses of [[thm-first-strang-lemma-for-conforming-perturbed-galerkin]], with discrete coercivity $\alpha_h>0$. Then a constant $C_I$ depending only on the reference P1 element and shape-regularity bound satisfies

$$\|u-u_h\|_V\le(1+M/\alpha_h)C_VC_Ih|u|_{H^2(\Omega)}+\frac{\delta_{a,h}(I_hu)+\delta_{F,h}}{\alpha_h}.$$

If $\alpha_h\ge\alpha_*>0$ uniformly, the displayed approximation contribution is $O(h)$; the geometry, quadrature, and load defects remain separate terms and require their own estimates.

## Facts & Assumptions

**Given:** Countable Choice; $d=2$ or $3$; a matching shape-regular affine simplicial mesh; a conforming P1 Lagrange family in $V$; $u\in H^2\cap C(\overline\Omega)$ with zero boundary nodal values; a global interpolant $I_hu\in V_h$; and the bounded/coercive exact and discrete forms and loads of the first Strang theorem.

[F1] [[def-matching-affine-simplicial-meshes]]: cells are nondegenerate affine simplices, their interiors are disjoint, and intersections are whole matching faces; shape regularity bounds diameter divided by inradius.

[F2] [[def-reference-finite-element-and-unisolvent-dofs]]: an unisolvent reference element defines its interpolation operator from its degrees of freedom.

[F3] [[def-broken-and-conforming-polynomial-spaces]]: conformity means matching polynomial traces on each interior facet, and the zero-boundary subspace has zero polynomial trace on every boundary facet.

[F4] [[thm-local-finite-element-interpolation-estimates]]: for the P1 Lagrange element, $p=2$, $\ell=r=2$, $m=1$, and $\ell>d/p$, $|u-I_Ku|_{H^1(K)}\le C h_K|u|_{H^2(K)}$ uniformly on the shape-regular affine mesh.

[F5] [[thm-first-strang-lemma-for-conforming-perturbed-galerkin]]: the conforming error is bounded by its best-approximation term and the actual discrete form/load defects.

[A1] The global nodal interpolant has matching traces and zero boundary nodal values, and it belongs to $V_h\subseteq V$ as stipulated in the Statement.

[A2] The reference P1 nodal functionals are bounded on $W^{2,2}$, as assumed in the Statement; no point-evaluation theorem or stronger choice principle is used to infer this hypothesis here.

## Proof

1.1 By [A2], the reference nodal degrees of freedom are bounded on $W^{2,2}$; together with unisolvence [F2], this gives the local Lagrange interpolants required by [F4]. Apply [F4] with $p=2$, $\ell=r=2$, $m=1$, and $\ell>d/p$ on every cell $K$. [A2, F1, F2, F4, given]

1.2 On a shared facet, both neighboring P1 traces are affine and have the same values at every facet vertex, so the traces agree. Every boundary facet has zero values at all its vertices, so its affine trace is zero. Thus the assembled function has the conformity and boundary traces in [F3]; its membership in $V$ is the explicit hypothesis [A1]. [F1, F2, F3, A1, algebra]

1.3 Square the cell estimate in [F4] and sum over the cells. Their interiors are disjoint, $h_K\le h$, and the sum of cellwise $H^2$ seminorm squares is $|u|_{H^2(\Omega)}^2$, hence $|u-I_hu|_{H^1(\Omega)}\le C_Ih|u|_{H^2(\Omega)}$. [F1, F4, given, algebra]

2.1 Apply [F5] with $v_h=I_hu$ and use $\|u-I_hu\|_V\le C_V|u-I_hu|_{H^1}$ from the stated norm bound and step 1.3. This gives the displayed error estimate without absorbing the form, geometry, quadrature, or load defects. [F5, step 1.3, given, algebra] ∎
