---
id: thm-hp-corner-exponential-energy-convergence
kind: theorem
title: Exponential hp energy convergence for weighted-analytic polygon corners
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-hp-variable-degree-spaces-on-matching-meshes
  - lem-hp-triangle-degree-uniform-strong-edge-lift
  - lem-hp-analytic-polynomial-approximation-on-a-triangle
  - lem-hp-weighted-analytic-corner-pointwise-control
  - lem-hp-corner-uniform-degree-dof-count
  - lem-variable-degree-polynomial-spaces-are-h1-conforming
  - thm-cea-quasi-optimality-for-conforming-galerkin-approximations
  - thm-cauchy-schwarz-in-an-inner-product-space
  - def-countable-choice
justified_by: []
proof_strategy: direct
axiom_use: Countable Choice is the only choice principle. It is inherited
  through the weighted pointwise lemma, shape-regular scaling, variable-degree
  conformity, and Céa; neither the corner caps nor the finite assembly use full
  Choice.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Yanchen He, Paul Houston, Christoph Schwab, and Thomas P. Wihler,
        Exponential Convergence of hp-ILGFEM, version 1
      url: https://arxiv.org/pdf/2404.18569
      locator: "§2.3, Definition 1; §4.1, equations (29)–(31), and Theorem 2, PDF pp.
        5–11. The article invokes prior approximation results; the local layer
        construction is proved here."
    - title: "Martin Vohralík, Finite Element Methods, Chapter 6: hp finite elements"
      url: https://who.rocq.inria.fr/Martin.Vohralik/Enseig/FEM/FEM.pdf
      locator: "Theorems 6.2.1, 6.3.1, and 6.4.1, printed pp. 55–58: hp rates and
        corner comparison context; the relevant approximation developments are
        omitted there and supplied locally here."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Let $\Omega\subset\mathbb R^2$ be a bounded polygonal open domain with finite corner set $\mathcal C=\{c_1,\ldots,c_m\}$ and weights $0\le\beta_i<1$. For $\gamma\in[0,\infty)^m$ define $\Phi_\gamma(x)=\prod_i|x-c_i|^{\gamma_i}$; $\beta+j-2$ means componentwise addition. For integer $k\ge2$, define

$$
\|v\|_{H^{k,2}_\beta(\Omega)}^2=\|v\|_{H^1(\Omega)}^2+\sum_{j=2}^k\sum_{|\alpha|=j}\|\Phi_{\beta+j-2}D^\alpha v\|_2^2.
$$

Let $B^2_\beta(\Omega)$ consist of real-valued functions in every $H^{k,2}_\beta(\Omega)$ for which some $C_u,d_u>0$ satisfy

$$
\left\|\Phi_{\beta+k-2}\sum_{|\alpha|=k}|D^\alpha u|\right\|_2\le C_ud_u^{k-2}(k-2)!\qquad(k\ge2).
$$

Let $(\mathcal T_k)_{k\ge1}$ be nested finite matching shape-regular affine triangulations of $\Omega$, with at most $C_0k$ triangles. Write $h_T=\operatorname{diam}(T)$ and $\operatorname{dist}(T,\mathcal C)=\inf_{x\in T,c\in\mathcal C}|x-c|$. Assume a fixed $0<\sigma<1$ and $C_1>0$ satisfy

$$
\sigma\le\frac{h_T}{\operatorname{dist}(T,\mathcal C)}\le\sigma^{-1}\quad(\overline T\cap\mathcal C=\varnothing),\qquad h_T\le C_1\sigma^k\quad(\overline T\cap\mathcal C\ne\varnothing).
$$

Let $p_k\in\mathbb N$ be uniform total polynomial degrees with $c_0k\le p_k\le c_1k$ for fixed $0<c_0\le c_1$. For a fixed union $\Gamma_D$ of polygon edges, let $V_k$ be the space of broken piecewise-$\mathbb P_{p_k}$ functions whose polynomial traces agree on every interior edge and vanish on the boundary edges in $\Gamma_D$; put $N_k=\dim V_k$. This is the corresponding subspace of the variable-degree space in [[def-hp-variable-degree-spaces-on-matching-meshes]].
For this smoother class, the boundary condition means that the unique continuous representative supplied by [[lem-hp-weighted-analytic-corner-pointwise-control]] vanishes pointwise on the edges in $\Gamma_D$; no zero condition is imposed on the other edges. If $u\in B^2_\beta(\Omega)$ satisfies this boundary condition, then constants $C,b>0$, independent of $k$, satisfy

$$
\inf_{v_k\in V_k}\|\nabla(u-v_k)\|_{L^2(\Omega)}\le Ce^{-bN_k^{1/3}}.
$$

For a bounded coercive conforming Galerkin problem on a Hilbert space $V\subset H^1(\Omega)$, assume $u\in V$ is its exact variational solution: $a(u,v)=F(v)$ for every $v\in V$, with bounded load $F$. If $V_k\subset V$ and the norm on $V$ is equivalent to the gradient seminorm, Céa's estimate gives the same exponential rate for the energy error, with its actual $M/\alpha$ and norm-equivalence factors included. The constants may depend on the polygon, weights, weighted analytic bounds, mesh shape and grading constants, degree constants, $\Gamma_D$, and the Galerkin coercivity and norm-equivalence constants.

## Facts & Assumptions

**Given:** Countable Choice; the polygon, corners and weights; the full weighted-analytic hypotheses; a nested shape-regular matching mesh sequence with the exact grading and count assumptions; uniform total degrees $c_0k\le p_k\le c_1k$; and the fixed boundary-edge set $\Gamma_D$.

[A1] Countable Choice is assumed explicitly; no full Choice is used in this proof. ([[def-countable-choice]])

[F1] The weighted corner estimates give a continuous representative, corner decay $|u-u(c_i)|\le Cr^a$, pointwise derivative bounds, and analytic scaled bounds on regular triangles. ([[lem-hp-weighted-analytic-corner-pointwise-control]])

[F2] The analytic polynomial supplier gives exponential $W^{1,\infty}$ approximation on a reference triangle and an endpoint-preserving interval projector whose derivative is an $L^2$ contraction with exponential $H^1$ error. ([[lem-hp-analytic-polynomial-approximation-on-a-triangle]])

[F3] The degree-uniform strong-edge lift extends an endpoint-zero polynomial from one edge, vanishes on the other edges, preserves degree, and has seminorm at most $C\ell_E^{1/2}\|\partial_\tau q\|_2$. ([[lem-hp-triangle-degree-uniform-strong-edge-lift]])

[F4] The variable-degree space is the finite matching polynomial space with trace equality; the conformity lemma glues matching polynomial traces into $H^1$; and the corner count gives $N_k\le C_Nk^3$. ([[def-hp-variable-degree-spaces-on-matching-meshes]], [[lem-variable-degree-polynomial-spaces-are-h1-conforming]], [[lem-hp-corner-uniform-degree-dof-count]])

[F5] Céa's theorem gives $\|u-u_k\|_V\le(M/\alpha)\inf_{v_k\in V_k}\|u-v_k\|_V$ for the exact variational solution $u$ and its Galerkin solution $u_k$, under its stated bounded-load, boundedness, coercivity, conformity, and Countable Choice hypotheses. ([[thm-cea-quasi-optimality-for-conforming-galerkin-approximations]])

[F6] Cauchy–Schwarz controls one-dimensional trace errors and the area estimates on the regular triangles. ([[thm-cauchy-schwarz-in-an-inner-product-space]])

## Proof

1.1 Fix $0<a<\min_i(1-\beta_i)$ as in [F1]. Call a cell a cap when its closure contains a corner. Since the corner set is finite and distinct corners have positive separation, for all sufficiently large $k$ each cap contains at most one corner; its diameter is at most $C_1\sigma^k$. On a noncap cell $T$ with $d_T=\operatorname{dist}(T,\mathcal C)<R$, the mesh condition gives $\sigma\le h_T/d_T\le\sigma^{-1}$, so [F1] gives uniform scaled analytic derivative bounds after subtracting a suitable constant. If $d_T\ge R$, the compact-away-from-corners bounds in [F1], together with bounded $h_T$ and the fixed $r_T=R$, give the same conclusion after enlarging constants. Thus each noncap reference pullback has derivative bounds $C r_T^a A_1^{|\alpha|}|\alpha|!$, where $r_T=\min(R,d_T)$. [A1, F1, given, algebra]

2.1 For every mesh edge incident to a polygon corner, prescribe the linear interpolant of the two endpoint values of the continuous representative of $u$. All cells sharing such an edge are caps. On every other edge $E$, prescribe the single common endpoint-preserving derivative-projection polynomial $g_E$ from [F2], in one globally fixed edge orientation. The edge lies a distance comparable to its length from any nearby corner: for an edge opposite a cap corner this follows from shape regularity and the altitude bound, and for a noncap neighbor it also follows from the mesh ratio condition. Thus [F1]–[F2] give, on each noncap edge, $\|u-g_E\|_{L^\infty(E)}+\ell_E^{1/2}\|\partial_\tau(u-g_E)\|_{L^2(E)}\le C r_T^a e^{-bp_k}$ for each adjoining noncap cell, with comparable scales on both sides. Here the sup bound follows from the endpoint identity and $\|e\|_\infty\le\|e'\|_{L^1}\le\|e'\|_{L^2}$ for the endpoint-zero reference error; [F6] justifies the last inequality. On an edge incident to a corner, both adjacent cells are caps, its prescribed linear polynomial shares the exact continuous vertex values, and no tangential regularity of $u$ at the corner is used. Every edge polynomial takes the value of $u$ at both endpoints. If $E\subset\Gamma_D$, these endpoint values and the entire prescribed edge polynomial are zero. [F1, F2, F6, step 1.1, given, construct]

3.1 Let $T$ be a noncap triangle and choose $q_T\in\mathbb P_{p_k}(T)$ by transporting the analytic approximation [F2] for the scaled pullback, then adding back its subtracted constant. Thus $\|u-q_T\|_\infty+h_T\|\nabla(u-q_T)\|_\infty\le Cr_T^ae^{-bp_k}$. Correct its three vertex values by an affine polynomial to obtain $\widetilde q_T$ matching the prescribed $g_E$ at all vertices; the correction has $H^1$ seminorm at most $Cr_T^ae^{-bp_k}$. On each edge, $g_E-\widetilde q_T|_E$ has zero endpoints, degree at most $p_k$, and strong edge derivative norm at most $Cr_T^ae^{-bp_k}$. Lift these three residuals separately by [F3]. Their sum does not change the other edge traces, so the resulting $v_T\in\mathbb P_{p_k}(T)$ has all three prescribed traces and $|u-v_T|_{H^1(T)}\le Cr_T^ae^{-bp_k}\le Ce^{-bp_k}.$ [F2, F3, step 1.1, step 2.1, algebra]

3.2 Let $T$ be a cap at corner $c_i$, with diameter $h_T$; for large $k$ it contains no other corner. Start with the affine interpolant $a_T$ of the three exact vertex values. By [F1], $|u-a_T|_{H^1(T)}\le Ch_T^a$. Its two edges incident to $c_i$ already have the prescribed linear traces. On the opposite edge $E$, every point has distance comparable to $h_T$ from $c_i$, so the gradient bound in [F1] and Cauchy–Schwarz [F6] give $\ell_E^{1/2}\|\partial_\tau u\|_{L^2(E)}\le Ch_T^a$. The interval derivative projection in [F2] is contractive, and the vertex estimate in [F1] gives the same bound for $g_E-a_T|_E$. This discrepancy vanishes at both endpoints; add its lift from [F3]. The resulting polynomial has all prescribed traces and $|u-v_T|_{H^1(T)}\le Ch_T^a\le C\sigma^{ak}$. No $H^2$ regularity is used on a cap. [F1, F2, F3, F6, step 1.1, step 2.1, algebra]

4.1 Every pair of adjacent local polynomials has common trace $g_E$; the boundary traces vanish on $\Gamma_D$. Thus they assemble to $v_k\in V_k$ by [F4]. Summing squared cell errors from steps 3.1 and 3.2 over at most $C_0k$ cells gives $\|\nabla(u-v_k)\|_2\le C\sqrt{k}\left(e^{-bp_k}+\sigma^{ak}\right)\le C'e^{-\eta k}$ for some $\eta>0$, because $p_k\ge c_0k$ and $0<\sigma<1$. The finitely many earlier meshes are handled by $v_k=0$ and an increase of $C'$. Since $N_k\le C_Nk^3$ by [F4], $k\ge C_N^{-1/3}N_k^{1/3}$ and therefore $\inf_{v\in V_k}\|\nabla(u-v)\|_2\le C e^{-bN_k^{1/3}}$. [F4, step 3.1, step 3.2, given, algebra]

5.1 Under the additional Galerkin hypotheses, $u$ satisfies $a(u,v)=F(v)$ for every $v\in V$, and the Galerkin solution $u_k\in V_k$ satisfies $a(u_k,v_k)=F(v_k)$ for every $v_k\in V_k$. Thus Céa [F5] applies to this same $u$ and $u_k$. Apply it to the best-approximation estimate of step 4.1. Norm equivalence between $\|\cdot\|_V$ and the gradient seminorm changes only the stated constant, and the actual $M/\alpha$ factor is retained. This proves the energy-error conclusion. [F5, step 4.1, given, algebra] ∎
