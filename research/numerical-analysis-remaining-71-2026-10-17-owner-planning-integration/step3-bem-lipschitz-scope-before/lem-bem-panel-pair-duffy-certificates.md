---
id: lem-bem-panel-pair-duffy-certificates
kind: lemma
title: Certified touching-panel and disjoint-panel quadrature for the Laplace P0
  matrix
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 7
deps:
  [
    def-bem-surface-mesh-and-piecewise-constant-density-space,
    def-axiom-of-choice,
    lem-bem-lipschitz-trace-and-lifting,
    def-bem-newtonian-kernel-in-three-dimensions,
    thm-bem-single-layer-transmission-mapping-and-coercivity,
    def-bem-calderon-boundary-operators,
    def-duffy-reference-triangle-map,
    thm-duffy-weak-singularity-transform,
    alg-duffy-weighted-product-gauss-quadrature,
    cor-duffy-weighted-product-gauss-error,
    thm-gaussian-product-rule-error-bound,
    thm-tonelli-and-fubini-for-completed-product-measures,
    thm-dominated-convergence,
    thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions,
    thm-linear-change-of-variables-for-lebesgue-measure,
    def-countable-choice,
    def-surface-area-and-scalar-surface-integral-of-a-patch
  ]
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice supplies the positive Gaussian rules and is
  inherited through the mesh context. The Axiom of Choice is inherited through
  the trace/lifting and weak single-layer mapping suppliers used for the
  weak-pairing identity. The finite sign decomposition, simplex identities, and
  radial integration are choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Francisco-Javier Sayas, First Steps in the Boundary Element Method (2015
        lecture notes)"
      url: https://team-pancho.github.io/teaching/math838/BEM.pdf
      locator: "Chapter 1 §1.3, PDF pp. 6–8: P0 single-layer panel entries; Chapters
        2–3, PDF pp. 23–46: layer kernels and their weak transmission
        interpretation. The four-dimensional panel-pair construction is proved
        here."
    - title: "Martin Costabel, Boundary Integral Operators on Lipschitz Domains:
        Elementary Results (1988)"
      url: https://costabel.perso.math.cnrs.fr/publis/Co88_Lip.pdf
      locator: "§§2–4, printed pp. 615–622: weak single-layer mapping and energy
        formulation. The paired-panel decomposition and residual proof are
        local."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and Countable Choice, and let $T,S$ be panels of the conforming surface triangulation in [[def-bem-surface-mesh-and-piecewise-constant-density-space]]. For $x\ne y$ put $G_3(x,y)=(4\pi|x-y|)^{-1}$ and define
$$\mathcal I_{TS}=\int_T\int_SG_3(x,y)\,dS_y\,dS_x.$$
The integral is absolutely convergent. If $V$ is the single-layer operator of [[def-bem-calderon-boundary-operators]], then
$$\mathcal I_{TS}=\langle1_T,V1_S\rangle_\Gamma.$$

For coincident panels, panels sharing a full edge, and panels sharing a vertex, the exact affine parameter integral for $\mathcal I_{TS}$ has a finite decomposition into integrals
$$c_m\int_R q_m(z)\,dz,\qquad R=\{(x,y):0\le y\le x\le1\},$$
where $c_m>0$, each $q_m$ is smooth on a neighborhood of $R$, and every integral is the Duffy-transformed case with exponent $\alpha=0<2$. The decomposition includes every singular-face dimension: in each four-simplex of the finite decomposition the zero face may have dimension $0$, $1$, or $2$. If $T$ and $S$ are disjoint, their positive separation instead gives one smooth reference-triangle integral with the same exponent $\alpha=0$.

The constructions supply explicit lower bounds for every denominator and explicit derivative bounds for every required amplitude. Given exact algebraic panel coordinates and any positive absolute tolerance $\varepsilon$, the finite nested Gaussian procedure described in the proof terminates with an outward-certified value $\widetilde{\mathcal I}_{TS}$ satisfying $|\mathcal I_{TS}-\widetilde{\mathcal I}_{TS}|\le\varepsilon$. For other coordinate representations, the procedure has the same guarantee when certified finite incidence, nondegeneracy, separation, and arithmetic bounds are supplied as input. It makes no termination claim for deciding incidences from an uncertified arbitrary-real oracle.

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice, a conforming finite triangular surface mesh, panels $T,S$, the normalized Newton kernel, and the weak single-layer matrix entry.

[A1] [[def-countable-choice]]: Countable Choice is assumed in the mesh and weak single-layer mapping context and supplies the positive Gaussian rules and countable precision-refinement procedures.

[A2] [[def-axiom-of-choice]]: the Axiom of Choice is required by the trace/lifting and weak single-layer mapping suppliers used for the weak-pairing identity.

[F1] [[def-bem-surface-mesh-and-piecewise-constant-density-space]]: each panel is a compact nondegenerate convex triangle; two panels are equal, meet in a common full edge, meet in a common vertex, or are disjoint; and $1_T,1_S\in H^{-1/2}(\Gamma)$.

[F2] [[def-bem-newtonian-kernel-in-three-dimensions]]: $G_3(x,y)=(4\pi|x-y|)^{-1}$.

[F3] [[thm-bem-single-layer-transmission-mapping-and-coercivity]] and [[def-bem-calderon-boundary-operators]]: under the Axiom of Choice and Countable Choice, $V:H^{-1/2}(\Gamma)\to H^{1/2}(\Gamma)$ is bounded, and $V\lambda$ is the common weak trace of the single-layer potential; for bounded $\lambda$ that potential agrees off $\Gamma$ with the normalized Newton-kernel integral.

[F4] [[lem-bem-lipschitz-trace-and-lifting]]: the trace from local $H^1$ functions into the fixed $H^{1/2}(\Gamma)$ space is bounded; a continuous $H^1$ representative has its pointwise restriction as its trace.

[F5] [[def-duffy-reference-triangle-map]] and [[thm-duffy-weak-singularity-transform]]: the reference-triangle Duffy map $D(r,s)=(r,rs)$ sends $|z|^{-\alpha}q(z)$ to $r^{1-\alpha}G(r,s)$, with an absolutely convergent integral for $\alpha<2$.

[F6] [[alg-duffy-weighted-product-gauss-quadrature]] and [[cor-duffy-weighted-product-gauss-error]]: for $\alpha=0$, the positive weighted product rule has the stated derivative error bound for amplitudes with the indicated pure derivatives.

[F7] [[thm-gaussian-product-rule-error-bound]]: the tensor Gaussian remainder is bounded by its pure derivative constants; taking a constant second-coordinate amplitude yields the one-variable midpoint specialization.

[F8] [[thm-tonelli-and-fubini-for-completed-product-measures]], [[thm-dominated-convergence]], [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]], and [[thm-linear-change-of-variables-for-lebesgue-measure]]: nonnegative and dominated product integrals may be interchanged or passed to limits, and the stated injective smooth and affine changes of variables carry their Jacobians.

[F9] For an affine regular panel parametrization $t:\Delta_2\to\mathbb R^3$, surface integration has constant Gram factor $J_T=|\partial_1t\times\partial_2t|$. Thus panel area and panel integrals pull back by $dS=J_T\,du$; the panel edges are parameter-boundary null sets. This surface formula, rather than a three-dimensional volume substitution, supplies the two factors in step 1.1. ([[def-surface-area-and-scalar-surface-integral-of-a-patch]])

## Proof

1.1 Parametrize $T$ and $S$ by affine maps $t(u)$ and $s(v)$ from $\Delta_2=\{(u_1,u_2):u_i\ge0,\ u_1+u_2\le1\}$. Their constant surface Jacobians are $J_T=|(t_1-t_0)\times(t_2-t_0)|$ and $J_S=|(s_1-s_0)\times(s_2-s_0)|$. With $L(u,v)=t(u)-s(v)$ on $P=\Delta_2\times\Delta_2$, the nonnegative change of variables in [F8] gives $\mathcal I_{TS}=(J_TJ_S/(4\pi))\int_P|L(z)|^{-1}dz$, initially allowing an infinite value. The zero set $Z=P\cap L^{-1}(0)$ is the parameterized diagonal of $T\cap S$ and has dimension $2$, $1$, or $0$ for coincident, edge-sharing, or vertex-sharing panels. [A1, F1, F2, F8, F9, given, construct]

2.1 Cut $P$ by each non-identically-zero coordinate hyperplane $L_i=0$. Enumerate each cell’s finitely many vertices by active boundary-hyperplane sets, discarding infeasible intersections. The at most eight resulting full-dimensional sign cells cover $P$ up to their boundaries; those boundaries are contained in finitely many hyperplanes and have four-dimensional measure zero by Fubini in [F8]. For any $z_0\in Z$ and interior point $z$ of a sign cell, $L((1-t)z_0+tz)=tL(z)$ for $0<t\le1$, so every $z_0$ belongs to that cell's closure. The simultaneous zero set of its signed nonnegative affine coordinates is therefore a nonempty face. [F8, step 1.1, given, algebra]

3.1 Triangulate each cell by pulling from a global vertex ordering that lists all vertices in $Z$ first and uses the same induced order on shared faces. The pulling induction is complete: for any point other than the first vertex, extend the segment from that vertex through the point to its last point in the cell; the exit point lies on a facet not containing the first vertex, so cones over those facets cover the cell, and overlaps occur only on their boundaries. Induction triangulates those facets and the common induced ordering makes adjacent cell triangulations agree. Every full-dimensional cell has a vertex in its nonempty face $Z$, hence its first vertex is in $Z$; each resulting four-simplex therefore has a zero vertex. In a simplex with signed affine coordinates nonnegative, their common zero set is exactly the convex hull of the zero vertices, so the zero face has dimension $j\in\{0,1,2\}$, covering all three contact types including coincident panels. [F1, F8, step 2.1, given, construct]

4.1 In a resulting four-simplex $\Sigma=[v_0,\ldots,v_4]$, order the vertices so exactly $v_0,\ldots,v_j$ lie in $Z$, put $d=3-j$ and $D=|\det(v_1-v_0,\ldots,v_4-v_0)|$, and define $B(b)=\sum_{m=j+1}^4b_mL(v_m)$ on the opposite face $\Delta_d$. That face contains no zero of $L$, so compactness gives $c=\min_{\Delta_d}|B|>0$. The join coordinates $z=(1-r)\sum_{i=0}^ja_iv_i+r\sum_{m=j+1}^4b_mv_m$, with $a\in\Delta_j$, $b\in\Delta_d$, and $0\le r\le1$, are one-to-one in the interiors and have absolute Jacobian $D r^{3-j}(1-r)^j$: the $j$ independent $a$ directions scale by $1-r$, the $d$ independent $b$ directions by $r$, and the radial column supplies $D$. Also $L(z)=rB(b)$. [F8, step 3.1, given, algebra, construct]

5.1 The kernel times this Jacobian has radial factor $r^{2-j}(1-r)^j$. For $j=0,1,2$, $\int_0^1r^{2-j}(1-r)^jdr=(2-j)!j!/3!$ and $|\Delta_j|=1/j!$, so $\int_\Sigma|L(z)|^{-1}dz=D(2-j)!/6\int_{\Delta_d}|B(b)|^{-1}db$. This is finite because $|B|\ge c$. For $d=1$, split the unit square into its two triangles and swap coordinates on one to get $\int_0^1g(t)dt=\int_R(g(x)+g(y))dxdy$ with $g=|B|^{-1}$. For $d=2$, $(u,v)=(1-x,y)$ maps $R=\{0\le y\le x\le1\}$ onto $\Delta_2$ with determinant one. For $d=3$, set $u=1-x$, $v=y$, $w=(x-y)t$ on $R\times[0,1]$; the remaining barycentric coordinate is $(x-y)(1-t)$ and the Jacobian is $x-y$. Thus each case is a finite sum of reference-triangle integrals, including all zero-face dimensions, and each transformed amplitude is smooth near $R$ because its denominator is bounded below by $c$. The coefficients $c_m$ include the positive factor $J_TJ_S/(4\pi)$ from step 1.1 and the positive simplex determinants and radial factors above. [F8, step 1.1, step 4.1, algebra]

6.1 The positive bound $c$ is effectively certifiable from the finitely many vectors $L(v_m)$. Enumerate every nonempty face of their convex hull and solve the finite affine normal equations for the point nearest zero on its affine span, retaining feasible barycentric coordinates; a global minimizer lies in the relative interior of a smallest face and has zero tangential derivative there, so this enumeration finds the minimum. Row-reduce degenerate systems and include their lower-dimensional faces. Positivity follows from the zero-face characterization in step 4.1. For algebraic panel coordinates, exact algebraic comparisons and interval refinement yield a rational $0<\underline c<c$. For each polynomial parameterization $B(\xi)$ whose admissible domain lies in a unit cube and whose image lies in the image under $L$ of the opposite face, set $h=|B|^2\ge c^2$ on that admissible domain, $P_{0,0}=1$, out-of-range $P_{\beta,j}=0$, and $P_{\beta+e_i,j}=\partial_iP_{\beta,j}-(j-\tfrac12)P_{\beta,j-1}\partial_i h$. The product and chain rules inductively give $\partial^\beta h^{-1/2}=\sum_{j=0}^{|\beta|}P_{\beta,j}h^{-1/2-j}$; hence $M_\beta=\sum_j\operatorname{coefabs}(P_{\beta,j})\underline c^{-1-2j}$ bounds each required derivative there, since the absolute coefficient sum bounds a polynomial on the containing unit cube. Compose the triangle coordinates with the Duffy map before using a full square as the admissible domain; no positive denominator bound is asserted on an extension outside that image. Apply the finite Leibniz rule to polynomial prefactors such as $x-y$ and add the bounds for finite amplitude sums before using these estimates for $q_m$. Differentiation under the finite $t$ integral in the $d=3$ map is justified by these uniform bounds and the fundamental theorem of calculus. [F8, step 4.1, step 5.1, given, construct, algebra]

7.1 For each smooth reference amplitude $q_m$ in step 5.1, the Duffy map $D(r,s)=(r,rs)$ from [F5] gives $\int_Rq_m=\int_0^1\int_0^1rG_m(r,s)\,ds\,dr$, $G_m(r,s)=q_m(r,rs)$. With $n\ge1$, the positive product rule in [F6] has error at most $K_1\|\partial_r^{2n}G_m\|_\infty+\tfrac12K_0\|\partial_s^{2n}G_m\|_\infty$, since $\int_0^1r\,dr=1/2$. The derivative bounds are computed in step 6.1; add the separately certified node-value, fiber, and outward-arithmetic radii with the coefficients $c_m$. [A1, F5, F6, step 5.1, step 6.1, given, algebra]

8.1 This bound gives effective termination. Fix $n=1$ and subdivide $R$ into similar triangles of maximum diameter $h$; after affine pullback the second pure derivatives of $q_m(A(r,rs))$ are bounded by $C h^2\|D^2q_m\|_\infty$, so the positive-rule errors sum to $O(h^2)$ after multiplying by the affine Jacobians, whose sum is one. Indeed, $D(r,s)=(r,rs)$ has $\partial_r^2D=\partial_s^2D=0$, so the pure second-derivative chain rules contain only the Hessian of $q_m$ and two factors from the affine map, each of size $O(h)$. Its nonzero mixed derivative is not part of the Gaussian remainder used here. In the $d=3$ fiber, composite midpoint quadrature on $M$ equal subintervals has error at most $B_{tt}/(24M^2)$ by the one-variable Gaussian remainder [F7]. Choose $h,M$ so these bounds consume less than half the requested tolerance, then refine outward interval enclosures for the remaining half. Exact algebraic input makes incidence, determinant, and strict-positive denominator decisions finite; every refinement terminates because the certified lower bounds are positive. With other coordinate formats, require supplied certified incidence, nondegeneracy, separation, and arithmetic bounds; absent or failed certificates return uncertified. [A1, F6, F7, step 6.1, step 7.1, given, construct]

8.2 If $T,S$ are disjoint, $d_0=\operatorname{dist}(T,S)>0$. The parameter kernel $g(u,v)=|L(u,v)|^{-1}$ is smooth on $\Delta_2\times\Delta_2$ with denominator at least $d_0$. Compose $L$ with the Duffy parameterizations of both triangles; it is polynomial on a product of unit squares and still has norm at least $d_0$, so the recurrence of step 6.1 with a rational lower bound below $d_0$ supplies explicit uniform derivatives. Integrating over $v$ defines $q(u)=\int_{\Delta_2}g(u,v)dv$; differentiation under this finite integral is justified by those uniform bounds, and the simplex mass is $1/2$. The affine map $(u_1,u_2)=(1-x,y)$ sends the outer triangle to $R$. Evaluate each inner $v$ integral by the positive composite $\alpha=0$ Duffy rule; its error bound is uniform in $u$. Apply the outer rule of step 7.1 to $q$. Subdividing both reference triangles and using their computed second-derivative bounds makes the inner errors $O(h^2)$ uniformly in $u$ and the outer error $O(h^2)$; positivity and bounded total weight let these errors add. Thus the disjoint smooth fallback terminates at every positive tolerance, with its two numerical radii charged separately. [F1, F5, F6, F8, step 1.1, step 6.1, step 7.1, given, algebra]

9.1 To identify the double integral with the weak matrix entry, use barycentric coordinates $(u_1,u_2,1-u_1-u_2)$ and cutoffs $\chi_n=\prod_{i=1}^3\min(1,nu_i)$ on each panel. They are bounded by one and converge almost everywhere and in $L^2$ to the panel indicator. By [F1], each cutoff is an $L^2$ density and the fixed $H^{1/2}$ chart norm controls $L^2$, so these cutoffs converge in $H^{-1/2}$ by duality; boundedness of $V$ in [F3] gives $\langle\chi_n1_T,V(\chi_n1_S)\rangle\to\langle1_T,V1_S\rangle$. For the trace identification, a finite union of planar faces satisfies $|\Gamma\cap B(x,r)|\le Cr^2$; dyadic annuli imply $\int_{\Gamma\cap B(x,\delta)}|x-y|^{-1}dS_y\le C\delta$. Splitting at distance $2\delta$ and using $|\nabla_xG_3|=(4\pi|x-y|^2)^{-1}$ gives continuity modulus $C\delta(1+|\log\delta|)$ for each bounded cutoff potential throughout a bounded neighborhood of $\Gamma$: the area and near-integral bounds are uniform for ambient target points, and the same near/far split applies there. By [F3] the off-surface kernel integral represents its weak potential; by [F4] its continuous restriction is its Sobolev trace, and Fubini [F8] identifies the pairing with the cutoff double integral. Absolute integrability from the touching-panel calculation in step 5.1 and the disjoint case in step 8.2 dominates these integrands, so dominated convergence gives $\langle1_T,V1_S\rangle=\mathcal I_{TS}$ for coincident, edge-sharing, vertex-sharing, and disjoint panels. [A1, A2, F1, F2, F3, F4, F8, step 4.1, step 5.1, step 8.2, given, algebra] ∎
