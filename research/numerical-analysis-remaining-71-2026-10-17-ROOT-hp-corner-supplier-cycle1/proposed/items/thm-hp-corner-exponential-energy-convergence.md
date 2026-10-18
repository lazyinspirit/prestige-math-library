---
id: thm-hp-corner-exponential-energy-convergence
kind: theorem
title: Exponential hp energy convergence for weighted-analytic polygon corners
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps:
  - def-hp-variable-degree-spaces-on-matching-meshes
  - lem-hp-triangle-degree-uniform-strong-edge-lift
  - lem-hp-analytic-polynomial-approximation-on-a-triangle
  - lem-hp-weighted-analytic-corner-pointwise-control
  - lem-hp-corner-uniform-degree-dof-count
  - lem-variable-degree-polynomial-spaces-are-h1-conforming
  - thm-cea-quasi-optimality-for-conforming-galerkin-approximations
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance: {statement: literature-derived, proof: ai-altered}
axiom_use: Countable Choice is used through the Sobolev conformity and Cea suppliers.
sources:
  references:
    - title: He, Houston, Schwab, and Wihler, Exponential Convergence of hp-ILGFEM
      url: https://arxiv.org/pdf/2404.18569
      locator: "Section 2.3 Definition 1; Section 4.1 (29)-(31), Theorem 2. The local proof below supplies rather than assumes the approximation step imported there."
---

## Statement

Assume Countable Choice. Let $\Omega\subset\mathbb R^2$ be a bounded polygon with corners $\mathcal C=\{c_i\}_{i=1}^m$ and weights $\beta_i\in[0,1)$. For a nonnegative vector $\gamma$ put $\Phi_\gamma(x)=\prod_i|x-c_i|^{\gamma_i}$, and let $\beta+j-2$ mean addition to each component. Define
$$\|v\|_{H^{k,2}_\beta(\Omega)}^2=\|v\|_{H^1(\Omega)}^2+\sum_{j=2}^k\sum_{|\alpha|=j}\|\Phi_{\beta+j-2}D^\alpha v\|_2^2.$$
The class $B^2_\beta(\Omega)$ consists of functions in these spaces for all $k\ge2$ such that some $C_u,d_u>0$ satisfy
$$\left\|\Phi_{\beta+k-2}\sum_{|\alpha|=k}|D^\alpha u|\right\|_2\le C_ud_u^{k-2}(k-2)!\qquad(k\ge2).$$
Let $\mathcal T_k$ be nested matching uniformly shape-regular triangulations with at most $C_0k$ triangles and, for fixed $0<\sigma<1$,
$$\sigma\le\frac{\operatorname{diam}(T)}{\operatorname{dist}(T,\mathcal C)}\le\sigma^{-1}\quad(\overline T\cap\mathcal C=\varnothing),\qquad\operatorname{diam}(T)\le C_1\sigma^k\quad(\overline T\cap\mathcal C\ne\varnothing).$$
Let $c_0k\le p_k\le c_1k$, with $c_0>0$, be uniform total polynomial degrees, and let $V_k$ be the continuous piecewise-$\mathbb P_{p_k}$ space with zero trace on any fixed union $\Gamma_D$ of polygon edges. For $u\in B^2_\beta(\Omega)$ with zero trace on $\Gamma_D$, and $N_k=\dim V_k$, constants $C,b>0$ independent of $k$ satisfy
$$\inf_{v\in V_k}\|\nabla(u-v)\|_2\le Ce^{-bN_k^{1/3}}.$$
For a bounded coercive conforming Galerkin problem on a Hilbert space with norm equivalent to this gradient seminorm and exact solution $u$, Céa gives the same exponential bound for its Galerkin energy error. The constants may depend on the polygon, shape regularity, grading, degree constants, weights, analytic constants, and coercivity/norm-equivalence constants.

## Facts & Assumptions

**Given:** Countable Choice and all the polygon, regularity, mesh, degree, and trace hypotheses in the statement.

[F1] [[lem-hp-weighted-analytic-corner-pointwise-control]] supplies continuity, $|u-u(c_i)|\le Cr^a$, $|\nabla u|\le Cr^{a-1}$, and scaled analytic derivative bounds on noncorner cells, for fixed $0<a<\min_i(1-\beta_i)$.

[F2] [[lem-hp-analytic-polynomial-approximation-on-a-triangle]] gives reference-cell $W^{1,\infty}$ errors $CM e^{-bp}$ and endpoint-preserving edge polynomials with derivative projection, exponential error on analytic edges, and derivative norm at most that of the function.

[F3] [[lem-hp-triangle-degree-uniform-strong-edge-lift]] gives a degree-preserving polynomial extension, zero on the other two edges, of an endpoint-zero edge polynomial $q$; its $H^1$ seminorm is at most $C\ell_E^{1/2}\|\partial_\tau q\|_{L^2(E)}$. The constant is independent of degrees.

[F4] [[lem-variable-degree-polynomial-spaces-are-h1-conforming]] supplies conformity; [[lem-hp-corner-uniform-degree-dof-count]] gives $N_k\le C_Nk^3$; [[thm-cea-quasi-optimality-for-conforming-galerkin-approximations]] gives the final Galerkin estimate.

## Proof

1.1 Fix $a$ as in [F1]. Call a cell a cap if its closure contains a corner. For all sufficiently large $k$, caps contain at most one corner, and their diameters are at most $C\sigma^k$. On any noncap cell $T$, put $r_T=\min(R,\operatorname{dist}(T,\mathcal C))$ with the fixed small $R$ in [F1]. The grading hypotheses and shape regularity give the uniform scaled analytic bounds in [F1]. By [F2], choose $q_T\in\mathbb P_{p_k}(T)$ with $\|u-q_T\|_\infty+h_T\|\nabla(u-q_T)\|_\infty\le Cr_T^ae^{-bp_k}$. On each edge not incident to a corner, define a single common polynomial $g_E$ by the endpoint-preserving derivative projection in [F2]. Such an edge belongs to a noncap cell, or is opposite the corner of a cap; in either case all its points are a distance comparable to its length from any nearby corner, by shape regularity and the grading of the adjoining noncap cell. The scaled analytic bounds therefore give $\|u-g_E\|_\infty+\ell_E^{1/2}\|\partial_\tau(u-g_E)\|_2\le Cr_T^ae^{-bp_k}$ on each noncap cell edge, with comparable scales on shared edges. On an edge incident to a corner use the linear interpolant of its endpoint values. Both cells sharing such an edge are caps. All edge polynomials share the exact continuous vertex values of $u$. On $\Gamma_D$ they vanish, including their endpoints, by [F1] and the zero trace. [F1, F2, given, construct]

2.1 On a noncap triangle correct $q_T$ by the affine polynomial matching its three vertex errors; this changes its scaled $W^{1,\infty}$ error by at most $Cr_T^ae^{-bp_k}$. Call the result $\widetilde q_T$. For each of its three edges the polynomial $g_E-\widetilde q_T|_E$ has zero endpoints and degree at most $p_k$, with $\ell_E^{1/2}\|\partial_\tau(g_E-\widetilde q_T)\|_2\le Cr_T^ae^{-bp_k}$. Apply [F3] separately to these three discrepancies and add the lifts. They do not change the other two traces. The resulting $v_T\in\mathbb P_{p_k}(T)$ has all the prescribed traces and $|u-v_T|_{H^1(T)}\le Cr_T^ae^{-bp_k}\le Ce^{-bp_k}$. [F2, F3, step 1.1, algebra]

3.1 On a cap $T$ at corner $c$, start with the affine interpolant $a_T$ of the vertex values. By [F1], $|u-a_T|_{H^1(T)}\le Ch_T^a$. Its two edges meeting $c$ already have the prescribed linear traces. On the opposite edge $E$, every point has distance comparable to $h_T$ from $c$, so $\ell_E^{1/2}\|\partial_\tau u\|_{L^2(E)}\le Ch_T^a$ by [F1]. The derivative projection contraction in [F2] gives the same bound for $g_E$, and the vertex decay gives it for $a_T|_E$. Thus $\ell_E^{1/2}\|\partial_\tau(g_E-a_T)\|_2\le Ch_T^a$. Add the lift in [F3] of this endpoint-zero opposite-edge discrepancy. The resulting polynomial $v_T$ has the prescribed three traces and $|u-v_T|_{H^1(T)}\le Ch_T^a\le C\sigma^{ak}$. For large $k$ a triangle cannot be a cap at two corners; the finitely many earlier meshes will be covered at the end. No $H^1$ tangential regularity is required on an edge ending at the singular corner. [F1, F2, F3, step 1.1, algebra]

4.1 Every pair of adjacent polynomials has trace $g_E$, so they define $v_k\in V_k$ by [F4]. Summing squared cell errors from steps 2.1 and 3.1 over at most $C_0k$ triangles gives $\|\nabla(u-v_k)\|_2\le C\sqrt{k}(e^{-bp_k}+\sigma^{ak})\le C'e^{-\eta k}$ for some $\eta>0$, because $p_k\ge c_0k$. This explicitly accounts for every regular layer and every cap; the coarser factor $\sqrt{k}$ is harmless. For the finitely many excluded small $k$, use $v_k=0$ and increase $C'$. [F4, step 2.1, step 3.1, given, algebra]

5.1 Since $N_k\le C_Nk^3$, $k\ge C_N^{-1/3}N_k^{1/3}$, so step 4.1 proves the asserted best-approximation estimate. Apply Céa in [F4] with its actual $M/\alpha$ factor and the stipulated equivalence of the Hilbert and gradient norms to obtain the Galerkin energy estimate. This uses no unstated regularity of a PDE solution and no assumption that an affine box projector is conforming on triangles. [F4, step 4.1, algebra] ∎
