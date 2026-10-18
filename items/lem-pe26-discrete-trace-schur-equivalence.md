---
id: lem-pe26-discrete-trace-schur-equivalence
kind: lemma
title: Discrete Schur energy and the fractional trace norm
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [def-pe26-scalar-substructuring-model, def-pe26-discrete-harmonic-extension-and-schur-complement, thm-pe26-harmonic-extension-minimizes-energy]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "None; the constructions use a finite boundary chart cover and finite nodal functionals."
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olof B. Widlund, Introduction to the Design and Theory of Domain Decomposition Algorithms, DD20 Tutorial, pp. 24–26"
      url: "https://cs.nyu.edu/~widlund/SD_rev_tutorial.pdf"
    - title: "Oliver Rheinbach, Parallel Scalable Iterative Substructuring, Chapter 1 §1.7 and Chapter 2 §2.4"
      url: "https://d-nb.info/983219192/34"
---

## Statement

Let $\Omega_i$ be one of the shape-regular polygonal subdomains in [[def-pe26-scalar-substructuring-model]], with a matching quasiuniform $P_1$ mesh. For any continuous piecewise-linear boundary trace $g$, let $S_i^{\rm fl}$ be the Schur complement of the floating local stiffness matrix, before outer Dirichlet values are fixed, formed by the same interior elimination as in [[def-pe26-discrete-harmonic-extension-and-schur-complement]]. Define

$$|g|_{1/2,\partial\Omega_i}^2:=\int_{\partial\Omega_i}\int_{\partial\Omega_i}\frac{|g(s)-g(t)|^2}{|s-t|^2}\,ds\,dt.$$

This seminorm is taken modulo constants. The floating local Schur energy satisfies

$$c\rho_i|g|_{1/2,\partial\Omega_i}^2\le g^TS_i^{\rm fl} g\le C\rho_i|g|_{1/2,\partial\Omega_i}^2,$$

where $c,C>0$ depend only on the fixed scaled polygon-shape parameters (including boundary-chart and mean-zero Poincaré bounds), mesh shape-regularity and quasiuniformity. The upper bound is realized by a boundary-preserving finite-element lifting; the minimum-energy lifting is the floating discrete harmonic extension. For an admissible trace $g$, whose outer Dirichlet values are zero, $g^TS_i^{\rm fl}g=g^TS_i g$ for the Dirichlet-restricted Schur matrix of [[def-pe26-discrete-harmonic-extension-and-schur-complement]], so the same inequalities hold for that matrix on its domain.

## Facts & Assumptions

**Given:** A fixed polygonal subdomain, a shape-regular quasiuniform matching affine triangulation, an arbitrary $P_1$ boundary trace $g$, and the floating local stiffness matrix.

[F1] [[def-pe26-scalar-substructuring-model]]: the local energy is $\rho_i\int_{\Omega_i}|\nabla v_h|^2$, and all geometric constants are uniform over the specified family.

[F2] [[def-pe26-discrete-harmonic-extension-and-schur-complement]]: the Schur complement is formed by eliminating the invertible interior block; on admissible traces its harmonic lift has energy $g^TS_i g$.

[F3] [[thm-pe26-harmonic-extension-minimizes-energy]]: for an admissible trace $g$, its harmonic extension minimizes energy among all local finite-element lifts of $g$.

## Proof

1.1 On the upper half-plane, Fourier transformation in the tangential variable gives, for a smooth lift $V$ with trace $g$, $$|\xi||\widehat g(\xi)|^2\le\int_0^\infty\bigl(|\partial_t\widehat V(\xi,t)|^2+|\xi|^2|\widehat V(\xi,t)|^2\bigr)\,dt.$$ Indeed, integrate $-\partial_t|\widehat V|^2$ and apply $2ab\le a^2+b^2$. Integration in $\xi$ proves the trace seminorm bound. Conversely, $\widehat V(\xi,t)=e^{-t|\xi|}\widehat g(\xi)$ has gradient energy $\int |\xi||\widehat g(\xi)|^2\,d\xi$. In a bounded chart, multiply the half-plane extension by a fixed cutoff in the inward coordinate; the added gradient term is controlled by the localized $L^2$ boundary norm, hence by the full H1/2 norm after constants are removed. A finite collection of Lipschitz graph charts covers the polygon boundary, including its corners. Flattening each chart is bi-Lipschitz, so it changes the $H^1$ gradient and boundary Gagliardo seminorm by bounded factors. Applying a partition of unity and the half-plane trace inequality to arbitrary chart-localized lifts gives $|g|_{1/2,\partial\Omega_i}\le C\|V\|_{H^1(\Omega_i)}$. Subtract the domain mean of $V$ and use scaled Poincar\'e to replace the full $H^1$ norm by $\|\nabla V\|_{L^2}$. In the other direction, apply a partition of unity to boundary data, use the half-plane extensions, and sum to obtain a right inverse of the trace. First subtract a boundary constant; the fractional Poincaré bound on the whole boundary controls the localized full norms: for the boundary mean $c$, $\|g-c\|_{L^2(\partial\Omega_i)}^2\le H_i^2|g|_{1/2,\partial\Omega_i}^2/(2|\partial\Omega_i|)$, by integrating $|s-t|\le H_i$. Add that constant back as a constant lift, which has zero gradient. The chart count, scaled radii, Lipschitz constants and mean-zero Poincaré bounds are precisely the fixed shape parameters in [F1]; a pointwise interior-cone condition alone would not justify this uniformity. [given, F1, construct, algebra]

1.2 Construct an interpolant $I_h:H^1(\Omega_i)\to V_h$ as follows. For each interior mesh vertex choose one incident triangle and set its coefficient to the average of $V$ on that triangle. For each boundary vertex choose one incident boundary edge and set its coefficient to the integral of the trace of $V$ against the $L^2$-dual function to the endpoint nodal basis on that edge. These dual functionals reproduce every affine edge trace, so the trace of $I_hV$ is exactly $g$ whenever the trace of $V$ is $g$. All coefficients reproduce constants. For a triangle $K$, the chosen elements and edges for its vertices lie in a connected patch $\omega_K$ of diameter at most $Ch$ containing a uniformly bounded number of triangles; these patches have bounded overlap. Let $c_K$ be the mean of $V$ on $\omega_K$. Scaled Poincaré gives $\|V-c_K\|_{L^2(\omega_K)}\le Ch\|\nabla V\|_{L^2(\omega_K)}$, and the scaled trace inequality gives $\|V-c_K\|_{L^2(e)}\le Ch^{1/2}\|\nabla V\|_{L^2(\omega_K)}$ on a selected boundary edge $e$. Thus each interior average coefficient of $V-c_K$ is bounded by $C\|\nabla V\|_{L^2(\omega_K)}$. A boundary dual function has $L^2(e)$ norm at most $Ch^{-1/2}$, so its coefficient has the same bound. Since $I_hc_K=c_K$ and the affine basis functions have uniformly bounded $L^2(K)$ gradient norms in two dimensions, $\|\nabla I_hV\|_{L^2(K)}\le C\|\nabla V\|_{L^2(\omega_K)}$. Summing and using bounded overlap proves $\|\nabla I_hV\|_{L^2(\Omega_i)}\le C\|\nabla V\|_{L^2(\Omega_i)}$. [given, F1, construct, algebra]

2.1 For any finite-element lift $v_h$ of $g$, step 1.1 gives $|g|_{1/2,\partial\Omega_i}^2\le C\|\nabla v_h\|_{L^2(\Omega_i)}^2$. For the floating matrix, put $H^{\rm fl}g=(-K_{II}^{-1}K_{I\Gamma}g,g)^T$. Symmetry of the local Poisson form and its zero interior row give $a_i(H^{\rm fl}g+(z,0),H^{\rm fl}g+(z,0))=g^TS_i^{\rm fl}g+z^TK_{II}z$. The positive interior block from [F2] therefore makes $g^TS_i^{\rm fl}g$ the unique fixed-trace minimum, by the same identity as [F3]. Taking that minimum gives the lower Schur bound. For the upper bound, step 1.1 supplies a continuous lift $V$ with gradient energy at most $C|g|_{1/2,\partial\Omega_i}^2$, and step 1.2 gives a boundary-preserving finite-element lift $I_hV$ with the same bound up to a uniform factor. The just-proved floating minimality bounds its energy by this lift. Multiplication by $\rho_i$ proves both inequalities. If $g$ is admissible, the fixed-trace feasible lifts already vanish on the outer Dirichlet portion; [F2]–[F3] identify the same minimum with $g^TS_i g$. [F1, F2, F3, step 1.1, step 1.2, algebra] ∎

