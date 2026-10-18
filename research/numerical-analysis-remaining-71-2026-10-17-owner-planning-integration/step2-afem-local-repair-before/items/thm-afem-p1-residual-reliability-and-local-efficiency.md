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
where $\omega_K$ is the union of $K$ and its edge neighbors. If $\mathcal T_*\ge\mathcal T$ refines every cell in $M\subset\mathcal T$ by three generations and $U_*$ is the exact fine Galerkin solution, then
$$\eta(U,\ M)^2\le C_{\rm eff}\left(\|\nabla(U_*-U)\|_{L^2(\omega(M))}^2+ \operatorname{osc}(U,\omega(M))^2\right),$$
with $\omega(M)$ the union of edge-neighbor patches of marked cells. All constants are independent of the refinement level.

## Facts & Assumptions

[A1] Countable Choice is assumed in the cited Sobolev and reference-simplex suppliers ([[def-countable-choice]]).

**Given:** Countable Choice, the exact weak solution, conforming P1 Galerkin solution, shape-regular matching mesh, residual estimator, and three-generation marked refinement.

[F1] The error pairs with an arbitrary $H_0^1$ test function as the sum of cell residuals and negative outward flux jumps ([[lem-afem-p1-residual-representation]]).

[F2] The moment interpolant has local $L^2$, gradient, edge-trace bounds, maps into the conforming zero-boundary P1 space, and reproduces P1 functions ([[thm-afem-local-moment-interpolation-estimates]]).

[F3] Polynomial inverse and discrete trace inequalities on a shape-regular affine mesh have constants uniform in the mesh level ([[thm-polynomial-inverse-and-discrete-trace-estimates]], [[lem-shape-regular-affine-simplex-scaling]]).

[F4] Three generations place an interior vertex in each marked triangle and a midpoint in each original edge; the refined family is uniformly shape regular ([[lem-afem-nvb-shape-regularity-and-three-generation-properties]]).

## Proof

1.1 Put $e=u-U$. Galerkin orthogonality gives $a(e,I_{\mathcal T}e)=0$, and the convection term is skew on $H_0^1$, so $\|\nabla e\|_2^2=a(e,e)=a(e,e-I_{\mathcal T}e)$. Apply the residual representation [F1] to $e-I_{\mathcal T}e$. Cauchy–Schwarz, the cell and edge interpolation bounds [F2], and finite overlap of vertex patches give $\|\nabla e\|_2^2\le C\eta(U,\mathcal T)\|\nabla e\|_2.$ If $\|\nabla e\|_2=0$ reliability is immediate; otherwise divide by it and square. This proves the global upper bound. [A1, F1, F2, given, algebra]

1.2 For each cell let $\bar R_K=\Pi_K^0R_K$. By [F4] there is a fine P1 hat $\phi_K$ supported in $K$, zero on $\partial K$, with $0\le\phi_K\le1$ and $\int_K\phi_K\ge c|K|$. Test the residual representation with $v_K=\bar R_K\phi_K$. Scaling and the inverse inequality [F3] give $\|\nabla v_K\|_2\le Ch_K^{-1}\|\bar R_K\|_2$ and $\int_K\bar R_Kv_K\ge c\|\bar R_K\|_2^2$. In the residual representation, move the cell-data remainder to the right and bound it by $\|R_K-\bar R_K\|_2\|v_K\|_2\le C\|R_K-\bar R_K\|_2\|\bar R_K\|_2$. The form term is at most $C(1+|b|h_K)\|\nabla e\|_{L^2(K)}h_K^{-1}\|\bar R_K\|_2$, because the cell bubble has zero trace and its local Poincare bound controls $\|v_K\|_2$. Divide by $\|\bar R_K\|_2$ when it is nonzero and multiply by $h_K$ to get $h_K\|\bar R_K\|_2\le C\big(\|\nabla e\|_{L^2(K)}+h_K\|R_K-\bar R_K\|_2\big).$ Thus the volume residual term is bounded by the cell error and oscillation. [A1, F1, F3, F4, given, algebra]

2.1 For an interior edge $E=K^+\cap K^-$, [F4] supplies a fine P1 hat $\phi_E$ supported in $K^+\cup K^-$, vanishing on the patch boundary and with positive edge mean. Test [F1] with $v_E=J_E(U)\phi_E$. Since $J_E(U)$ is constant for P1 with $A=I$, the absolute value of the edge term in the residual identity is $J_E(U)^2\int_E\phi_E\ge c h_EJ_E(U)^2$. The two cell terms are at most $C|J_E(U)|(h_E\|R_K(U)\|_2+h_E\|R_{K\prime}(U)\|_2)$ because $\|v_E\|_{L^2(K^+\cup K^-)}\le Ch_E|J_E(U)|$. By step 1.2 these terms are bounded by $C|J_E(U)|(\|\nabla e\|_{L^2(K^+\cup K^-)}+\operatorname{osc}(U,K^+\cup K^-))$. The absolute value of the form term is bounded by $C(1+|b|h_E)\|\nabla e\|_{L^2(K^+\cup K^-)}\|\nabla v_E\|_2$, since $v_E$ vanishes on the patch boundary and local Poincare controls its $L^2$ norm. Scaling and [F3] yield $h_E^{1/2}\|J_E(U)\|_{L^2(E)}\le C(\|\nabla e\|_{L^2(K^+\cup K^-)}+\operatorname{osc}(U,K^+\cup K^-))$. Summing the cell and edge bounds and using bounded patch overlap proves local efficiency. [A1, F1, F3, F4, step 1.2, algebra]

3.1 For the marked correction set $d=U_*-U$. On each marked cell and each of its edges use the same fine bubble tests as in steps 1.2 and 2.1. For any such test $v_*$, fine Galerkin orthogonality gives $a(u-U_*,v_*)=0$, so the coarse residual functional on $v_*$ equals $a(d,v_*)$. Its absolute value is at most $C\|\nabla d\|_{L^2(\operatorname{supp}v_*)}$, since $|b|\|d\|_2$ is bounded by Poincare on that patch. The cell-data remainder is exactly the stated oscillation. Since each bubble vanishes on the patch boundary, its local Poincare inequality bounds its $L^2$ norm by the patch diameter times its gradient norm. The bubble scaling from steps 1.2 and 2.1 therefore bounds every marked contribution by the correction plus oscillation; bounded overlap proves the displayed marked estimate. [F1, F3, F4, step 1.2, step 2.1, algebra] ∎
