---
id: "thm-afem-p1-residual-reliability-and-local-efficiency"
kind: "theorem"
title: "Residual reliability and local efficiency for P1 AFEM"
status: draft
origin: pipeline
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 2
deps:
  - "def-afem-p1-residual-estimator-and-data-oscillation"
  - "def-afem-nvb-labelled-triangulation-family"
  - "alg-dorfler-marking-and-conforming-nvb-refinement"
  - "lem-afem-nvb-shape-regularity-and-three-generation-properties"
  - "lem-afem-p1-residual-representation"
  - "thm-afem-local-moment-interpolation-estimates"
  - "thm-polynomial-inverse-and-discrete-trace-estimates"
  - "def-countable-choice"
  - "lem-shape-regular-affine-simplex-scaling"
proof_strategy: direct
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Ricardo H. Nochetto, Adaptive Finite Element Methods, Lecture 2"
      url: "https://www.math.umd.edu/~rhn/lectures/lecture2.pdf"
      locator: "§2.1, residual representation, reliability, and bubble lower bound,
        PDF pp. 1–5."
    - title: "Cascón, Kreuzer, Nochetto & Siebert, Quasi-optimal convergence rate for
        an AFEM"
      url: "https://math.umd.edu/~rhn/papers/pdf/optimality.pdf"
      locator: "§§2.1–2.7, 3.2–3.3, Theorem 4.1, and §5."
    - title: "Bonito, Canuto, Nochetto & Veeser, Adaptive Finite Element Methods
        (2024)"
      url: "https://people.tamu.edu/~bonito/Publications/Preprints/2024_afem_acta.pdf"
      locator: "§§3.5–3.6 on 2D newest-vertex bisection and §8.1.1–8.1.3 on chains and
        cumulative closure complexity."
verification:
  precheck: pass
---
## Statement

Assume Countable Choice, as in the Sobolev trace and inverse-estimate suppliers.

Let $\mathcal T$ be a conforming shape-regular triangular mesh, let $u\in H_0^1(\Omega)$ solve the model of [[def-afem-p1-residual-estimator-and-data-oscillation]], and let $U\in V(\mathcal T)$ be its exact P1 Galerkin solution. There are constants $C_{\rm rel},C_{\rm eff}$ depending only on the shape bound and $|b|h_{\max}$ such that
$$\|\nabla(u-U)\|_2^2\le C_{\rm rel}\eta(U,\mathcal T)^2,$$
and for every $K\in\mathcal T$,
$$\eta_K(U)^2\le C_{\rm eff}\left(\|\nabla(u-U)\|_{L^2(\omega_K)}^2+ \operatorname{osc}(U,\omega_K)^2\right),$$
where $\omega_K$ is the union of $K$ and its edge neighbors. If $\mathcal T_*\ge\mathcal T$ contains the uniform three-generation subdivision of every cell in the original edge-neighbor patch $\omega(M)$ of $M\subset\mathcal T$ (in particular, every complete call of [[alg-dorfler-marking-and-conforming-nvb-refinement]] has this property) and $U_*$ is the exact fine Galerkin solution, then
$$\eta(U,\ M)^2\le C_{\rm eff}\left(\|\nabla(U_*-U)\|_{L^2(\omega(M))}^2+ \operatorname{osc}(U,\omega(M))^2\right),$$
with $\omega(M)$ the union of edge-neighbor patches of marked cells. All constants are independent of the refinement level.

## Facts & Assumptions

[A1] Countable Choice is assumed in the cited Sobolev and reference-simplex suppliers ([[def-countable-choice]]).

**Given:** Countable Choice, the exact weak solution, conforming P1 Galerkin solution, shape-regular matching mesh, residual estimator, and three-generation refinement of the bulk marks and their original edge neighbors.

[F1] The error pairs with an arbitrary $H_0^1$ test function as the sum of cell residuals and negative outward flux jumps ([[lem-afem-p1-residual-representation]]).

[F2] The moment interpolant has local $L^2$, gradient, edge-trace bounds, maps into the conforming zero-boundary P1 space, and reproduces P1 functions ([[thm-afem-local-moment-interpolation-estimates]]).

[F3] Polynomial inverse and affine-scaling estimates on shape-regular triangles give uniform norm bounds for fixed-degree barycentric bubbles and P1 hats ([[thm-polynomial-inverse-and-discrete-trace-estimates]], [[lem-shape-regular-affine-simplex-scaling]]).

[F4] Three generations place an interior median midpoint in each requested triangle, with the eight explicit leaves of the reference pattern, and a midpoint in each original edge; the refined family is uniformly shape regular ([[lem-afem-nvb-shape-regularity-and-three-generation-properties]]).

[F5] Continuous matching piecewise polynomials with zero boundary trace belong to $H_0^1$ ([[thm-matching-continuous-piecewise-polynomials-are-wkp]], [[thm-zero-boundary-piecewise-polynomials-in-w10p]]).

## Proof

1.1 Put $e=u-U$ and write $a(w,v)=\int_\Omega\nabla w\cdot\nabla v+(b\cdot\nabla w)v$. By the exact Galerkin equation, $a(U,v_h)=\int_\Omega fv_h$ for every $v_h\in V(\mathcal T)$; subtracting from the weak equation gives $a(e,v_h)=0$. For $w\in C_c^\infty(\Omega)$, constancy of $b$ gives $\int(b\cdot\nabla w)w=\frac12\int b\cdot\nabla(w^2)=0$. The map $w\mapsto\int(b\cdot\nabla w)w$ is continuous in $H^1$, so density extends this identity to all $w\in H_0^1$. Hence $a(e,e)=\|\nabla e\|_2^2$ and, since $I_{\mathcal T}e\in V(\mathcal T)$, $\|\nabla e\|_2^2=a(e,e-I_{\mathcal T}e)$. Apply [F1] to $e-I_{\mathcal T}e$. Cauchy–Schwarz, the cell and edge interpolation bounds [F2], and finite overlap of vertex patches give $\|\nabla e\|_2^2\le C\eta(U,\mathcal T)\|\nabla e\|_2.$ If $\|\nabla e\|_2=0$ reliability is immediate; otherwise divide by it and square. This proves the global upper bound. [A1, F1, F2, given, algebra]

1.2 For each cell let $\bar R_K=\Pi_K^0R_K$, and let $\lambda_1,\lambda_2,\lambda_3$ be its barycentric coordinates. The polynomial $\psi_K=27\lambda_1\lambda_2\lambda_3$, extended by zero outside $K$, has zero trace on $\partial K$, satisfies $0\le\psi_K\le1$, and has $\int_K\psi_K=(9/20)|K|$. Thus $v_K=\bar R_K\psi_K$ is an admissible $H_0^1$ test by [F5]. By affine scaling and [F3], $\|v_K\|_{L^2(K)}\le C\|\bar R_K\|_{L^2(K)}$ and $\|\nabla v_K\|_{L^2(K)}\le Ch_K^{-1}\|\bar R_K\|_{L^2(K)}$. The residual identity has no edge term for this test, so $\bar R_K\int_K v_K=a(e,v_K)+\int_K(\bar R_K-R_K(U))v_K$. The left side is at least $c\|\bar R_K\|_{L^2(K)}^2$, while the two terms on the right are bounded by $C(1+|b|h_K)h_K^{-1}\|\nabla e\|_{L^2(K)}\|\bar R_K\|_{L^2(K)}$ and $C\|R_K-\bar R_K\|_{L^2(K)}\|\bar R_K\|_{L^2(K)}$, respectively. If $\bar R_K\ne0$, division and multiplication by $h_K$ give $h_K\|\bar R_K\|_{L^2(K)}\le C(1+|b|h_K)\|\nabla e\|_{L^2(K)}+Ch_K\|R_K-\bar R_K\|_{L^2(K)}$; if it is zero, the same bound for $h_K\|R_K\|_{L^2(K)}$ follows from $R_K=R_K-\bar R_K$. Hence in all cases $h_K\|R_K\|_{L^2(K)}\le C(1+|b|h_K)\|\nabla e\|_{L^2(K)}+C\operatorname{osc}_K(U)$. [A1, F1, F3, F5, given, algebra]

2.1 On an interior edge $E=K^+\cap K^-$ write $\omega_E=K^+\cup K^-$, and let $\lambda_i^\pm,\lambda_j^\pm$ be the barycentric coordinates of its endpoints on the two incident cells. Define $\psi_E=4\lambda_i^+\lambda_j^+$ on $K^+$, $\psi_E=4\lambda_i^-\lambda_j^-$ on $K^-$, and zero outside their union. These traces agree on $E$, vanish on the other edges of the patch, and satisfy $\int_E\psi_E=(2/3)h_E$, $\|\psi_E\|_{L^2(K^+\cup K^-)}\le Ch_E$, and $\|\nabla\psi_E\|_{L^2(K^+\cup K^-)}\le C$ by [F3]. The function $\psi_E$ is an admissible $H_0^1$ test by [F5]. Put $J=J_E(U)$, which is constant for P1 with $A=I$, and test [F1] with $v_E=J\psi_E$. All edge terms other than the one on $E$ vanish. Its magnitude is $(2/3)h_EJ^2$. The cell terms are bounded by $Ch_E|J|(\|R_{K^+}(U)\|_2+\|R_{K^-}(U)\|_2)$, and the form term by $C(1+|b|h_E)|J|\|\nabla e\|_{L^2(K^+\cup K^-)}$. Use step 1.2, $h_E\asymp h_{K^\pm}$, and the definitions of the oscillations to obtain $h_E|J|\le C(1+|b|h_{\max})(\|\nabla e\|_{L^2(K^+\cup K^-)}+\operatorname{osc}(U,K^+\cup K^-))$; the bound is trivial if $J=0$. Since $h_E^{1/2}\|J_E(U)\|_{L^2(E)}=h_E|J|$, summing with bounded patch overlap and the cell estimate of step 1.2 proves the local efficiency assertion. [A1, F1, F3, F5, step 1.2, algebra]

2.2 Set $d=U_*-U$. For every original cell $L$ in $\omega(M)$, use its fixed uniform-three-generation pattern from [F4]. Its P1 hat $\phi_L$ at the interior median midpoint is zero on $\partial L$. Exactly four of the eight equal-area leaves meet that midpoint, so $\int_L\phi_L=4(|L|/8)/3=|L|/6$. Reference scaling gives $\|\phi_L\|_{L^2(L)}\le Ch_L$ and $\|\nabla\phi_L\|_{L^2(L)}\le C$. Extend by zero and prolong to $\mathcal T_*$: containment of the fixed pattern makes this a fine P1 function even after arbitrary additional closure or refinement. For every fine test $v_*$, fine Galerkin orthogonality gives $a(u-U,v_*)=a(d,v_*)$. Testing with $v_*=\bar R_L\phi_L$, where $\bar R_L=\Pi_L^0R_L$, yields the cell estimate by exactly the residual splitting and zero-mean remainder argument of step 1.2, now with $\int_L\phi_L=|L|/6$: $$h_L\|R_L(U)\|_{L^2(L)}\le C(1+|b|h_{\max})\|\nabla d\|_{L^2(L)}+C\operatorname{osc}_L(U).$$ The case $\bar R_L=0$ uses only the oscillation remainder, so no zero quantity is divided by. This bound is now available on every neighbor needed below. [F1, F3, F4, F5, step 1.2, algebra]

3.1 For each interior edge $E$ incident to a cell of $M$, both original incident cells belong to $\omega(M)$. Define a common trace tent $t_E$ on $E$: it is zero at its two endpoints, one at its midpoint, and affine on each half. On each incident cell's fixed three-generation pattern, prescribe nodal values $t_E(z)$ at nodes on $E$ and zero at every pattern node off $E$, then interpolate P1. In particular any quarter points on a reference edge have value $1/2$, rather than zero. The traces from the two cells equal the same full tent even when their reference labels differ; all other original edge traces are zero. Thus the two pieces glue to a continuous function $\psi_E$ supported on $\omega_E$, zero on its boundary, with $$\int_E\psi_E=h_E/2,\qquad \|\psi_E\|_{L^2(\omega_E)}\le Ch_E,\qquad \|\nabla\psi_E\|_{L^2(\omega_E)}\le C.$$ Indeed each cell uses eight fixed-shape leaves, nodal values in $[0,1]$, and affine scaling; shape regularity gives $h_L\asymp h_E$ for the two cells. Prolong these reference functions to $\mathcal T_*$, retaining their values, support, integrals and bounds; do not replace them by nodal hats on the possibly much finer actual mesh. For $J=J_E(U)$, test with $J\psi_E$. The only original edge term is $J^2h_E/2$, so the residual identity and local form bound give $$h_E|J|\le C(1+|b|h_E)\|\nabla d\|_{L^2(\omega_E)}+Ch_E\sum_{L\subset\omega_E}\|R_L(U)\|_{L^2(L)}.$$ For $J=0$ this is immediate. Applying step 2.2 on both incident cells yields the desired edge estimate in terms of correction energy and oscillation on $\omega_E$. Summing squared cell and edge estimates over $M$ has bounded overlap: each triangle belongs to at most its own and its three neighbors' patches. This proves the marked estimate with precisely $\omega(M)$ on the right and constants independent of all extra refinement. [F1, F3, F4, F5, step 2.1, step 2.2, algebra] ∎

