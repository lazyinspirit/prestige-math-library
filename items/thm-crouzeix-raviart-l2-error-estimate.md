---
id: thm-crouzeix-raviart-l2-error-estimate
kind: theorem
title: L2 error estimate under a Dirichlet Poisson smoothing index
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps:
  - def-crouzeix-raviart-fractional-sobolev-regularity
  - def-crouzeix-raviart-face-average-interpolant
  - def-crouzeix-raviart-global-space
  - def-crouzeix-raviart-poisson-method
  - def-crouzeix-raviart-poisson-smoothing-index
  - lem-crouzeix-raviart-simplex-traces-and-green-identity
  - lem-crouzeix-raviart-face-jump-estimate
  - lem-crouzeix-raviart-local-interpolation-estimates
  - lem-crouzeix-raviart-consistency-defect
  - thm-crouzeix-raviart-energy-error-estimate
  - thm-holder-inequality-for-integrals
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Part VIII, Chapter 36, Crouzeix–Raviart approximation
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap36.pdf
      locator: "Theorem 36.13 and proof, PDF pp. 12–13: duality argument and the $h^{r+s}$ L2 estimate, with $r,s>1/2$."
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 25, Non-conforming Finite Element Methods
      url: https://jschoeberl.github.io/iFEM/FEM/nonconforming.html
      locator: "§25.2, lines 314–350: cellwise consistency and the H2 energy estimate for the Crouzeix–Raviart method."
---

## Statement

Assume the hypotheses of the energy estimate with $1/2<r\le1$, and suppose
the domain has Dirichlet Poisson smoothing index $s$ with $1/2<s\le1$ and
constant $C_{\rm reg}$. Then
$$\|u-u_h\|_{L^2(\Omega)}\le C C_{\rm reg}h^{r+s} |u|_{H^{1+r}(\Omega)}.$$
The constant $C$ depends only on $d$, the mesh shape-regularity bound, $r$,
and $s$. No smoothing index is asserted for every bounded domain.

## Facts & Assumptions

**Given:** Countable Choice; the method, regular exact solution, and mesh of [[thm-crouzeix-raviart-energy-error-estimate]]; and a Dirichlet Poisson smoothing index $s\in(1/2,1]$.

[F1] For each $g\in L^2(\Omega)$, the smoothing index supplies a unique $\zeta_g\in H^1_0(\Omega)\cap H^{1+s}(\Omega)$ with $-\Delta\zeta_g=g$ weakly and $\|\zeta_g\|_{H^{1+s}}\le C_{\rm reg}\|g\|_2$. ([[def-crouzeix-raviart-poisson-smoothing-index]])

[F2] The local Green identity holds for cellwise $H^1$ tests and the normal-gradient trace fluctuation is bounded by $C h_K^{s-1/2}|\zeta|_{H^{1+s}(K)}$. ([[lem-crouzeix-raviart-simplex-traces-and-green-identity]])

[F3] The face-average interpolant has $\|\nabla_h(w-I_hw)\|_2\le Ch^t|w|_{H^{1+t}}$ and the matching local face-trace error bound for $1/2<t\le1$. ([[lem-crouzeix-raviart-local-interpolation-estimates]])

[F4] CR face jumps have $\sum_Fh_F^{-1}\|[v_h]_F\|_2^2\le C\|\nabla_hv_h\|_2^2$ for $v_h\in V_h^{CR,0}$. ([[lem-crouzeix-raviart-face-jump-estimate]])

[F5] The energy estimate's proof gives $\|u-u_h\|_{\sharp,h}\le C_Eh^r|u|_{H^{1+r}}$ with $C_E$ depending only on $d$, shape regularity, and $r$: its actual error constant is built from the jump, interpolation, residual, extension, and coercivity constants in its proof, while the domain-dependent Poincare constants there are used only to establish completeness and bounded loads. ([[thm-crouzeix-raviart-energy-error-estimate]])

[F6] The consistency defect at the dual interpolant satisfies $|\widetilde a_h(u,I_h\zeta)-F_h(I_h\zeta)|\le Ch^{r+s}|u|_{H^{1+r}}|\zeta|_{H^{1+s}}$. ([[lem-crouzeix-raviart-consistency-defect]])

[F7] The method defines $\widetilde a_h(z,w_h)=\sum_K\int_K\nabla(z|_K)\cdot\nabla w_h$ and this extension agrees with $a_h$ when $z\in V_h^{CR,0}$. ([[def-crouzeix-raviart-poisson-method]])

[F8] Holder's inequality with exponents $2,2$ bounds the volume and face pairings by the corresponding $L^2$ norms; on a finite disjoint union of facets it also gives the weighted sum Cauchy--Schwarz bound. ([[thm-holder-inequality-for-integrals]])

## Proof
1.1 Put $e:=u-u_h$. If $e=0$ in $L^2$, the conclusion holds. Otherwise apply [F1] with $g=e$ to obtain $\zeta\in H^1_0(\Omega)\cap H^{1+s}(\Omega)$ with $\|\zeta\|_{H^{1+s}}\le C_{\rm reg}\|e\|_2$. Testing its weak equation on $C_c^\infty(\Omega)\subset H^1_0(\Omega)$ gives $-\Delta\zeta=e$ distributionally. [F1, given, algebra]

1.2 Let $I_hu$ be the global interpolant and put $w_h:=I_hu-u_h\in V_h^{CR,0}$. The jump of $e$ decomposes as $[e]=[u-I_hu]+[w_h]$. The local face estimate in [F3], using the common trace of $u$ on interior facets and its zero boundary trace, gives $\sum_Fh_F^{-1}\|[u-I_hu]_F\|_2^2\le Ch^{2r}|u|_{H^{1+r}}^2.$ By [F4] and the triangle inequality (which follows for the finite direct sum of face $L^2$ spaces by expanding squares and applying [F8]), $\left(\sum_Fh_F^{-1}\|[w_h]_F\|_2^2\right)^{1/2} \le C\|\nabla_hw_h\|_2 \le C\bigl(\|\nabla_h(I_hu-u)\|_2+\|\nabla_he\|_2\bigr) \le Ch^r|u|_{H^{1+r}},$ where [F3] bounds the first term and [F5] the second. Combining these estimates yields $\left(\sum_Fh_F^{-1}\|[e]_F\|_2^2\right)^{1/2} \le Ch^r|u|_{H^{1+r}}.$ Each $[e]_F$ has zero face mean: on interior facets the means of $u$ and $u_h$ match, and on boundary facets both are zero. [F2, F3, F4, F5, F8, given, algebra]

2.1 Apply [F2] on every cell with $w=e|_K$ and sum. Write $[e]_F$ for the difference of its two traces on an interior facet and its trace on a boundary facet. Since $-\Delta\zeta=e$, $\|e\|_2^2=\sum_K\int_K\nabla e\cdot\nabla\zeta\,dx -\sum_F\int_F(\gamma_F\nabla\zeta\cdot n_F)[e]_F\,dS.$ For interior $F$, $n_F$ is the outward normal of either fixed plus cell; for a boundary facet it is the outward cell normal. The global traces of $\nabla\zeta$ match across interior facets by [F2]. [F2, step 1.1, given, algebra]

2.2 By the trace fluctuation bound [F2], Holder [F8] on the disjoint union of facets gives $\left|\sum_F\int_F(\gamma_F\nabla\zeta\cdot n_F)[e]_F\,dS\right| \le\left(\sum_Fh_F\|q_F-\operatorname{avg}_Fq_F\|_2^2\right)^{1/2} \left(\sum_Fh_F^{-1}\|[e]_F\|_2^2\right)^{1/2} \le Ch^s|\zeta|_{H^{1+s}}\,h^r|u|_{H^{1+r}},$ where $q_F$ is the corresponding normal trace. The last inequality uses that each cell has $d+1$ facets, $h_F\le h$, and the cell Gagliardo seminorms sum to at most the global seminorm. [F2, F8, step 1.2, algebra]

3.1 Split the volume term in step 2.1 as $\sum_K\int_K\nabla e\cdot\nabla(\zeta-I_h\zeta) +\widetilde a_h(e,I_h\zeta).$ By [F7], linearity, and the discrete equation $a_h(u_h,I_h\zeta)=F_h(I_h\zeta)$, the second term is $\widetilde a_h(u,I_h\zeta)-F_h(I_h\zeta)$, the consistency residual in [F6]. Holder [F8] on the cells bounds the first term, and [F3] applied with exponent $s$ together with [F5] gives $\|\nabla_he\|_2\|\nabla_h(\zeta-I_h\zeta)\|_2 \le Ch^r|u|_{H^{1+r}}h^s|\zeta|_{H^{1+s}}.$ Together with [F6], its magnitude is at most $Ch^{r+s}|u|_{H^{1+r}}|\zeta|_{H^{1+s}}$. [F3, F5, F6, F7, F8, step 2.1, algebra]

4.1 Substitute the bounds from steps 2.2 and 3.1 in the identity of step 2.1. This gives $\|e\|_2^2\le Ch^{r+s}|u|_{H^{1+r}}|\zeta|_{H^{1+s}} \le CC_{\rm reg}h^{r+s}|u|_{H^{1+r}}\|e\|_2$ by step 1.1. Since $e\ne0$, divide by $\|e\|_2$ to obtain the stated result. [F1, step 1.1, step 2.1, step 2.2, step 3.1, algebra] ∎
