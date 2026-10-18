---
id: lem-crouzeix-raviart-consistency-defect
kind: lemma
title: Consistency bounds for the Crouzeix–Raviart Poisson method
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-countable-choice
  - def-crouzeix-raviart-fractional-sobolev-regularity
  - def-crouzeix-raviart-face-average-interpolant
  - def-crouzeix-raviart-global-space
  - def-crouzeix-raviart-poisson-method
  - lem-crouzeix-raviart-simplex-traces-and-green-identity
  - lem-crouzeix-raviart-face-jump-estimate
  - lem-crouzeix-raviart-local-interpolation-estimates
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Part VIII, Chapter 36, Crouzeix–Raviart approximation
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap36.pdf
      locator: "Lemma 36.10 and its proof, PDF pp. 9–10: consistency defect, cancellation of face means, and regularity-dependent residual bounds."
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 25, Non-conforming Finite Element Methods
      url: https://jschoeberl.github.io/iFEM/FEM/nonconforming.html
      locator: "§25.2, lines 314–350: elementwise integration by parts, face-mean cancellation, and consistency estimates."
---

## Statement

Assume Countable Choice. Let $1/2<r\le1$, let $u\in H^1_0(\Omega)\cap H^{1+r}(\Omega)$ solve
$-\Delta u=f\in L^2(\Omega)$ distributionally, and let $h$ be the maximum
cell diameter of a finite matching shape-regular mesh. With the method of
[[def-crouzeix-raviart-poisson-method]], define
$$\mathcal R_h(u;v_h):=\widetilde a_h(u,v_h)-F_h(v_h),\qquad v_h\in V_h^{CR,0},$$
where $\widetilde a_h$ is the cellwise extension in [[def-crouzeix-raviart-poisson-method]]. Then
$$|\mathcal R_h(u;v_h)|\le C h^r|u|_{H^{1+r}(\Omega)} \|\nabla_hv_h\|_{L^2(\Omega)}.$$
If also $1/2<s\le1$ and $\zeta\in H^1_0(\Omega)\cap H^{1+s}(\Omega)$,
then
$$|\mathcal R_h(u;I_h^{CR}\zeta)|\le C h^{r+s} |u|_{H^{1+r}(\Omega)}|\zeta|_{H^{1+s}(\Omega)}.$$
The constants depend only on $d$, the shape-regularity bound, $r$, and $s$.

## Facts & Assumptions

**Given:** Countable Choice, a bounded connected Lipschitz polyhedral domain, a finite matching shape-regular simplicial mesh, $u,f,r,s,\zeta$ as in the Statement, and the definitions of [[def-crouzeix-raviart-poisson-method]] and [[def-crouzeix-raviart-face-average-interpolant]].

[A1] Countable Choice is assumed by the trace/Green, jump, interpolation, and CR-method interfaces used below. ([[def-countable-choice]], [[lem-crouzeix-raviart-simplex-traces-and-green-identity]], [[lem-crouzeix-raviart-face-jump-estimate]], [[lem-crouzeix-raviart-local-interpolation-estimates]], [[def-crouzeix-raviart-poisson-method]])

[F1] Cellwise Green's identity holds for $u$ and every $H^1(K)$ test, and traces of global $H^1_0$ functions vanish on boundary facets. ([[lem-crouzeix-raviart-simplex-traces-and-green-identity]])

[F2] The normal traces of $\nabla u\in H^r(\Omega)$ agree across shared facets; all CR interior jumps and boundary traces have zero face mean. ([[lem-crouzeix-raviart-simplex-traces-and-green-identity]], [[def-crouzeix-raviart-global-space]])

[F3] The mean fluctuation of a normal trace of $\nabla u$ on a facet is bounded by $C h_K^{r-1/2}|\nabla u|_{H^r(K)}$. ([[lem-crouzeix-raviart-simplex-traces-and-green-identity]])

[F4] The scaled face-jump norm of $v_h\in V_h^{CR,0}$ is bounded by $C\|\nabla_hv_h\|_2$. ([[lem-crouzeix-raviart-face-jump-estimate]])

[F5] The face-average interpolant has matching interior face means, zero boundary face means, and $h_F^{-1/2}\|\gamma_F(\zeta-I_K^{CR}\zeta)\|_2\le C h_K^s|\zeta|_{H^{1+s}(K)}$. ([[lem-crouzeix-raviart-local-interpolation-estimates]])

## Proof
1.1 Apply [F1] on each cell and sum. For an interior facet $F=K^+\cap K^-$, [F2] identifies both traces of $\nabla u$, and the two outward normals are opposite. The boundary terms therefore combine to $\mathcal R_h(u;v_h)=\sum_{F\in\mathcal F^\circ}\int_F(\gamma_F\nabla u\cdot n_{K^+,F})[v_h]_F\,dS +\sum_{F\in\mathcal F^\partial}\int_F(\gamma_F\nabla u\cdot n_{K,F})v_h\,dS.$ The sign follows from $-\Delta u=f$ in the Green identity. [A1, F1, F2, given, algebra]

1.2 On an interior facet the trace of $\zeta$ is common, so $[I_h^{CR}\zeta]_F$ is the difference of the two local interpolation errors. On a boundary facet its trace is the local interpolation error because $\zeta$ has zero trace. Applying [F5], summing over the at most $d+1$ facets of each cell, and using nonnegativity of the local fractional seminorm integrals gives $\sum_F h_F^{-1}\|[I_h^{CR}\zeta]_F\|_{L^2(F)}^2 \le C h^{2s}|\zeta|_{H^{1+s}(\Omega)}^2.$ The face mean of each such jump is zero by [F5]. [A1, F1, F2, F5, given, algebra]

2.1 Each jump in step 1.1 has zero face mean by [F2], so subtract the mean of its normal-gradient factor. By Cauchy–Schwarz with weights $h_F$ and $h_F^{-1}$, $|\mathcal R_h(u;v_h)|\le \left(\sum_F h_F\|q_F-\operatorname{avg}_Fq_F\|_{L^2(F)}^2\right)^{1/2} \left(\sum_F h_F^{-1}\|[v_h]_F\|_{L^2(F)}^2\right)^{1/2},$ where $q_F$ denotes the corresponding outward normal trace (and the boundary jump is $v_h$). By [F3], the first factor is at most $C h^r|u|_{H^{1+r}(\Omega)}$: each cell contributes at most $d+1$ facet terms, and the sum of the cell Gagliardo seminorms is bounded by the global seminorm because the integrands are nonnegative and $K\times K\subset\Omega\times\Omega$. The second factor is at most $C\|\nabla_hv_h\|_2$ by [F4]. This proves the general bound. [A1, F2, F3, F4, step 1.1, given, algebra]

3.1 Use the same face representation as step 1.1 with $v_h=I_h^{CR}\zeta$. Subtract the normal-trace means as in step 2.1. The first weighted factor is bounded by $C h^r|u|_{H^{1+r}(\Omega)}$ by [F3], and the second by $C h^s|\zeta|_{H^{1+s}(\Omega)}$ by step 1.2. Their product is the sharper asserted bound. [A1, F3, step 1.1, step 2.1, step 1.2, algebra] ∎
