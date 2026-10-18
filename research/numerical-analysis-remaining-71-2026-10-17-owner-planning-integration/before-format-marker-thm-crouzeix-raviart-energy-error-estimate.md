---
id: thm-crouzeix-raviart-energy-error-estimate
kind: theorem
title: Energy error estimate for the Crouzeix–Raviart Poisson method
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - def-countable-choice
  - def-crouzeix-raviart-fractional-sobolev-regularity
  - def-crouzeix-raviart-face-average-interpolant
  - def-crouzeix-raviart-poisson-method
  - lem-crouzeix-raviart-comparison-norm
  - thm-crouzeix-raviart-discrete-poincare
  - lem-crouzeix-raviart-face-jump-estimate
  - lem-crouzeix-raviart-global-face-basis
  - lem-crouzeix-raviart-local-interpolation-estimates
  - lem-crouzeix-raviart-consistency-defect
  - thm-crouzeix-raviart-discrete-well-posedness
  - thm-second-strang-lemma-for-nonconforming-galerkin
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
      locator: "Theorem 36.11 and proof, PDF pp. 10–11: second-Strang application and the CR energy estimate."
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 25, Non-conforming Finite Element Methods
      url: https://jschoeberl.github.io/iFEM/FEM/nonconforming.html
      locator: "§25.2, lines 247–350: second Strang framework, CR interpolation, and H2 energy error proof."
---

## Statement

Assume Countable Choice. Let $1/2<r\le1$, and let $u\in H^1_0(\Omega)\cap
H^{1+r}(\Omega)$ solve $-\Delta u=f\in L^2(\Omega)$ on a bounded connected
Lipschitz polyhedral domain. On any finite matching shape-regular mesh, the
solution $u_h$ of the Crouzeix–Raviart method satisfies
$$\|u-u_h\|_{\sharp,h}\le C h^r|u|_{H^{1+r}(\Omega)}.$$
In particular, $\|\nabla_h(u-u_h)\|_{L^2(\Omega)}$ obeys the same bound.
The constant is independent of the mesh size and may depend on $\Omega$, $d$,
the shape-regularity bound, and $r$.

## Facts & Assumptions

**Given:** Countable Choice; the Poisson method of [[def-crouzeix-raviart-poisson-method]]; a finite shape-regular mesh; and the regular exact solution $u$ and datum $f$ in the Statement.

[F1] The exact and discrete solutions exist uniquely; the exact branch uses Countable Choice, while the finite discrete branch is solved by a face-basis matrix. ([[thm-crouzeix-raviart-discrete-well-posedness]])

[F2] The comparison expression is induced by an inner product on $X_h=H^1_0(\Omega)+V_h^{CR,0}$, and it restricts to the gradient norm on $H^1_0(\Omega)$. ([[lem-crouzeix-raviart-comparison-norm]])

[F3] The local face-average interpolant has $\|\nabla_h(u-I_h^{CR}u)\|_2\le Ch^r|u|_{H^{1+r}}$ and its facet trace errors are bounded by $h_F^{-1/2}\|u-I_K^{CR}u\|_{L^2(F)}\le Ch_K^r|u|_{H^{1+r}(K)}$. ([[lem-crouzeix-raviart-local-interpolation-estimates]])

[F4] The scaled CR face-jump norm is bounded by the broken gradient. ([[lem-crouzeix-raviart-face-jump-estimate]])

[F5] The consistency residual obeys $|\widetilde a_h(u,w_h)-F_h(w_h)|\le Ch^r|u|_{H^{1+r}}\|\nabla_hw_h\|_2$. ([[lem-crouzeix-raviart-consistency-defect]])

[F6] The second Strang estimate for a nonconforming method with bounded form extension is
$$\|u-u_h\|_h\le(1+M_h/\alpha_h)\inf_{v_h}\|u-v_h\|_h+\delta_h^{\rm nc}(u)/\alpha_h.$$
Its hypotheses include Countable Choice, a Hilbert exact space, a finite-dimensional test space, a common comparison norm, bounded extension, coercivity, and bounded loads. ([[thm-second-strang-lemma-for-nonconforming-galerkin]])

[F7] The discrete space is finite-dimensional with the explicit face basis, and its $L^2$ norm is controlled by the broken-gradient norm. ([[lem-crouzeix-raviart-global-face-basis]], [[thm-crouzeix-raviart-discrete-poincare]])

## Proof
1.1 The interpolant $I_h^{CR}u$ belongs to $V_h^{CR,0}$. Summing the local gradient estimates in [F3] over cells gives $\sum_K\|\nabla(u-I_K^{CR}u)\|_{L^2(K)}^2\le Ch^{2r}\sum_K|u|_{H^{1+r}(K)}^2 \le Ch^{2r}|u|_{H^{1+r}(\Omega)}^2,$ since the cell-pair domains $K\times K$ are disjoint subsets of $\Omega\times\Omega$ for each gradient component. [F3, given, algebra]

1.2 By the extension defined in [[def-crouzeix-raviart-poisson-method]], $\widetilde a_h$ agrees with $a_h$ on the discrete space, and Cauchy–Schwarz gives $|\widetilde a_h(z,w_h)|\le\|z\|_{\sharp,h}\|w_h\|_{\sharp,h}$, so its extension bound is $M_h=1$. The load is bounded on $V_h$ because [F7] and Cauchy–Schwarz give $|F_h(w_h)|\le C\|f\|_2\|w_h\|_{\sharp,h}$. [F2, F7, given, algebra]

1.3 By [F4], choose a constant $C_J$ such that $\|v_h\|_{\sharp,h}^2=\|\nabla_hv_h\|_2^2+\sum_Fh_F^{-1}\|[v_h]_F\|_2^2 \le(1+C_J)\|\nabla_hv_h\|_2^2=(1+C_J)a_h(v_h,v_h).$ Thus $a_h$ is coercive in the comparison norm with $\alpha_h=(1+C_J)^{-1}>0$, uniformly in the mesh. [F2, F4, algebra]

1.4 The residual in [F6] is $\delta_h^{\rm nc}(u)=\sup_{w_h\ne0}\frac{|F_h(w_h)-\widetilde a_h(u,w_h)|}{\|w_h\|_{\sharp,h}}\le Ch^r|u|_{H^{1+r}(\Omega)},$ because [F5] gives the numerator bound and $\|w_h\|_{\sharp,h}\ge\|\nabla_hw_h\|_2$. [F2, F5, F6, algebra]

2.1 On an interior facet, $[u-I_h^{CR}u]=-[I_h^{CR}u]$ because $u$ has a common trace; on a boundary facet its trace is $-I_h^{CR}u$ because $u$ has zero trace. The face terms in [F3], squared and summed over facets with each cell incident to at most $d+1$ facets, give $\sum_F h_F^{-1}\|[u-I_h^{CR}u]_F\|_{L^2(F)}^2 \le Ch^{2r}|u|_{H^{1+r}(\Omega)}^2.$ Together with step 1.1, this proves $\|u-I_h^{CR}u\|_{\sharp,h}\le Ch^r|u|_{H^{1+r}(\Omega)}$, hence the same upper bound for the infimum in [F6]. [F2, F3, F6, step 1.1, algebra]

3.1 Apply [F6] using steps 2.1, 1.2, 1.3, and 1.4. The constants $M_h=1$ and $\alpha_h=(1+C_J)^{-1}$ are uniform, so its estimate gives $\|u-u_h\|_{\sharp,h}\le Ch^r|u|_{H^{1+r}(\Omega)}$. The broken-gradient term is one of the nonnegative terms in the squared comparison norm, yielding the final assertion. [F1, F2, F6, step 2.1, step 1.2, step 1.3, step 1.4, algebra] ∎
