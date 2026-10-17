---
id: cor-shape-regular-fe-strang-error-bound
kind: corollary
title: Shape-regular affine finite elements supply the Strang approximation term
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps: [def-variational-crime-error-framework, thm-first-strang-lemma-for-conforming-perturbed-galerkin, def-matching-affine-simplicial-meshes, def-reference-finite-element-and-unisolvent-dofs, def-broken-and-conforming-polynomial-spaces, thm-local-finite-element-interpolation-estimates, def-countable-choice, def-sobolev-space-wkp-and-its-norm, thm-graphs-of-continuous-functions-have-content-zero, thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content, thm-lebesgue-measure-is-a-complete-measure, thm-finite-and-countable-subadditivity-of-measures, thm-indefinite-integral-of-a-nonnegative-function-is-a-measure, cor-integral-over-a-null-set-vanishes]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 11, Local interpolation on affine meshes
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap11.pdf
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 4
      url: https://jschoeberl.github.io/iFEM/_downloads/900feda304f95ee42fd24abe742d7564/numpde.pdf
---

## Statement

Assume Countable Choice and let $d\in\{2,3\}$. Let $\mathcal T_h$ be a matching shape-regular affine simplicial mesh as in [[def-matching-affine-simplicial-meshes]]. Set $h:=\max(\{0\}\cup\{\operatorname{diam}(K):K\in\mathcal T_h\})$, so $h=0$ for an empty mesh. Let $V_h$ be a conforming zero-boundary P1 Lagrange subspace of a Hilbert space $V$, with $V_h\subseteq V$, and let $I_hu\in V_h$ be the global nodal interpolant of $u\in H^2(\Omega)\cap C(\overline\Omega)$ whose boundary nodal values vanish. Assume $\|z\|_V\le C_V|z|_{H^1(\Omega)}$ for $z=u-I_hu$. The reference nodal functionals are bounded on $W^{2,2}$, and the exact/discrete variational problems satisfy the hypotheses of [[thm-first-strang-lemma-for-conforming-perturbed-galerkin]], with exact solution $u$ and discrete coercivity $\alpha_h>0$. Then a constant $C_I$ depending only on the reference P1 element and shape-regularity bound satisfies

$$\|u-u_h\|_V\le(1+M/\alpha_h)C_VC_Ih|u|_{H^2(\Omega)}+\frac{\delta_{a,h}(I_hu)+\delta_{F,h}}{\alpha_h}.$$

If $\alpha_h\ge\alpha_*>0$ uniformly, the displayed approximation contribution is $O(h)$; the geometry, quadrature, and load defects remain separate terms and require their own estimates.

## Facts & Assumptions

**Given:** Countable Choice; $d=2$ or $3$; a matching shape-regular affine simplicial mesh with $h=\max(\{0\}\cup\{h_K:K\in\mathcal T_h\})$; a conforming P1 Lagrange family in $V$; $u\in H^2\cap C(\overline\Omega)$ with zero boundary nodal values; a global interpolant $I_hu\in V_h$; and the bounded/coercive exact and discrete forms and loads of the first Strang theorem.

[F1] [[def-matching-affine-simplicial-meshes]]: cells are nondegenerate affine simplices, their interiors are disjoint, and intersections are whole matching faces; shape regularity bounds diameter divided by inradius.

[F2] [[def-reference-finite-element-and-unisolvent-dofs]]: an unisolvent reference element defines its interpolation operator from its degrees of freedom.

[F3] [[def-broken-and-conforming-polynomial-spaces]]: conformity means matching polynomial traces on each interior facet, and the zero-boundary subspace has zero polynomial trace on every boundary facet.

[F4] [[thm-local-finite-element-interpolation-estimates]]: for the P1 Lagrange element, $p=2$, $\ell=r=2$, $m=1$, and $\ell>d/p$, $|u-I_Ku|_{H^1(K)}\le C h_K|u|_{H^2(K)}$ uniformly on the shape-regular affine mesh.

[F5] [[thm-first-strang-lemma-for-conforming-perturbed-galerkin]]: the conforming error is bounded by its best-approximation term and the actual discrete form/load defects.

[F6] Under Countable Choice, a bounded piece of an affine hyperplane is contained in the graph of an affine function over a closed nondegenerate rectangle. Such a graph has Jordan content zero ([[thm-graphs-of-continuous-functions-have-content-zero]]) and is Lebesgue measurable of measure zero ([[thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content]], [[thm-lebesgue-measure-is-a-complete-measure]]); its subsets are measurable null sets by completeness. Finite unions of facets are null by finite subadditivity ([[thm-finite-and-countable-subadditivity-of-measures]]).

[F7] For every nonnegative measurable $q$, $E\mapsto\int_Eq\,d\lambda$ is a measure and its integral over a null set is zero ([[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]], [[cor-integral-over-a-null-set-vanishes]]).

[A1] The global nodal interpolant has matching traces and zero boundary nodal values, and it belongs to $V_h\subseteq V$ as stipulated in the Statement.

[A2] The reference P1 nodal functionals are bounded on $W^{2,2}$, as assumed in the Statement; no point-evaluation theorem or stronger choice principle is used to infer this hypothesis here.

## Proof

1.1 By [A2], the reference nodal degrees of freedom are bounded on $W^{2,2}$; together with unisolvence [F2], this gives the local Lagrange interpolants required by [F4]. Unisolvence also identifies each restriction $I_hu|_K$ with the local interpolant $I_Ku$. Apply [F4] with $p=2$, $\ell=r=2$, $m=1$, and $\ell>d/p$ on every cell $K$. [A2, F1, F2, F4, given]

1.2 On a shared facet, both neighboring P1 traces are affine and have the same values at every facet vertex, so the traces agree. Every boundary facet has zero values at all its vertices, so its affine trace is zero. Thus the assembled function has the conformity and boundary traces in [F3]; its membership in $V$ is the explicit hypothesis [A1]. [F1, F2, F3, A1, algebra]

1.3 Let $\Sigma$ be the union of the mesh facets. Each facet lies in an affine hyperplane; choosing a coordinate with nonzero normal coefficient writes that hyperplane as the graph of an affine function over the other coordinates. A closed nondegenerate rectangle containing the facet's projection gives a bounded graph containing the facet, so [F6] makes each facet, and hence $\Sigma$, a Lebesgue null set. By [F7], for every nonnegative measurable $q$ the integral over $\Omega$ is the sum of its integrals over the disjoint cell interiors $K^\circ$, since $\Omega\setminus\Sigma=\bigsqcup_K K^\circ$ and $\int_\Sigma q=0$. Applying this to the squared first derivatives of $u-I_hu$ and the squared second derivatives of $u$ gives the global seminorm decompositions used next. [F1, F6, F7, given, construct]

2.1 Square the cell estimate in [F4] and sum over the cells using step 1.3. Their interiors are disjoint and $h_K\le h$, so $|u-I_hu|_{H^1(\Omega)}^2\le C_I^2h^2|u|_{H^2(\Omega)}^2$, hence $|u-I_hu|_{H^1(\Omega)}\le C_Ih|u|_{H^2(\Omega)}$. [F4, step 1.3, given, algebra]

3.1 Apply [F5] with $v_h=I_hu$ and use $\|u-I_hu\|_V\le C_V|u-I_hu|_{H^1}$ from the stated norm bound and step 2.1. This gives the displayed error estimate without absorbing the form, geometry, quadrature, or load defects. [F5, step 2.1, given, algebra] ∎
