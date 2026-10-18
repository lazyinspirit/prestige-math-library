---
id: lem-crouzeix-raviart-conforming-companion
kind: lemma
title: A conforming averaging companion for Crouzeix–Raviart functions
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-countable-choice
  - def-crouzeix-raviart-global-space
  - def-matching-affine-simplicial-meshes
  - def-mollifier-family-generated-by-a-unit-mass-smooth-bump
  - def-sobolev-space-wkp-and-its-norm
  - def-wkp-zero-as-a-sobolev-closure
  - def-the-standard-smooth-step-function
  - cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn
  - cor-components-of-open-subsets-of-rn-are-polygonally-connected
  - lem-affine-simplex-gauss-green-formula
  - lem-crouzeix-raviart-face-jump-estimate
  - lem-compact-support-zero-extension-in-wkp
  - lem-oriented-facet-cancellation-on-matching-meshes
  - lem-shape-regular-affine-simplex-scaling
  - lem-euclidean-balls-have-positive-finite-lebesgue-measure
  - thm-heine-borel-rn
  - lem-test-function-cutoffs-and-euclidean-localization
  - lem-weak-leibniz-rule-with-a-smooth-factor
  - lem-schwartz-cutoffs-from-the-standard-smooth-step
  - thm-continuity-from-above-for-measures
  - thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - prop-measure-monotonicity
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
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
      locator: "Lemma 36.9, PDF pp. 7–8: local averaging and jump control for CR functions."
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 25, Non-conforming Finite Element Methods
      url: https://jschoeberl.github.io/iFEM/FEM/nonconforming.html
      locator: "§25.2, lines 280–350: the CR space, broken norm, and conformity defect."
---

## Statement

Assume Countable Choice. Let $\Omega$ be the bounded connected Lipschitz polyhedral domain and
$\mathcal T_h$ a finite matching shape-regular simplicial mesh of
[[def-crouzeix-raviart-global-space]]. For every $v_h\in V_h^{CR,0}$ there is
a continuous piecewise affine function $E_hv_h$ with zero boundary trace
such that
$$\|\nabla E_hv_h\|_{L^2(\Omega)} \le C\|\nabla_hv_h\|_{L^2(\Omega)},\qquad \|v_h-E_hv_h\|_{L^2(\Omega)} \le C h\|\nabla_hv_h\|_{L^2(\Omega)},$$
where $h=\max_{K\in\mathcal T_h}h_K$. In particular,
$E_hv_h\in H^1_0(\Omega)$.

## Facts & Assumptions

**Given:** Countable Choice and a finite matching shape-regular triangulation of a bounded connected Lipschitz polyhedral domain and $v_h\in V_h^{CR,0}$.

[A1] Countable Choice is required by the affine shape-scaling and simplex Green interfaces used below. ([[def-countable-choice]], [[lem-shape-regular-affine-simplex-scaling]], [[lem-affine-simplex-gauss-green-formula]])

[F1] The affine bounds in [[lem-shape-regular-affine-simplex-scaling]] imply uniform neighboring-cell diameter comparability. At any vertex, the edge matrix of an incident simplex is $A_KR_i$ for one of finitely many fixed invertible reference matrices $R_i$; its largest and smallest singular values are therefore both comparable to $h_K$. Normalize each edge vector to make the columns of $B$ unit vectors. The singular-value bounds make each original edge length comparable to $h_K$ and the determinant magnitude of $A_KR_i$ comparable to $h_K^d$; dividing that determinant by the product of edge lengths gives the absolute determinant of $B$ a positive uniform lower bound. Write $|\det B|\ge\beta>0$ for this uniform bound. Unit column lengths give $|Bu|\le\sum_j|u_j|\le\sqrt d\,|u|$. Let $W=(0,1/d)^d$, a fixed open cube in the positive orthant. Then $|u|<1/\sqrt d$ on $W$, so $BW$ lies in the open physical vertex cone $C=\{Bu:u\in(0,\infty)^d\}$ and in $B(0,1)$. Apply the actual Lebesgue change-of-variables theorem to the linear diffeomorphism $u\mapsto Bu$ and the indicator of $BW$: $\lambda_d(BW)=|\det B|\lambda_d(W)\ge\beta d^{-d}>0$. Both sets are Borel, since $B$ is an invertible continuous linear map, and box volume gives $\lambda_d(W)=d^{-d}$. Thus every physical cone has unit-ball section of volume at least $\beta d^{-d}$. Distinct incident simplices have disjoint open vertex cones: an overlap direction would put a sufficiently short ray from the common vertex inside both simplex interiors, contrary to the matching mesh. Their unit-ball sections are therefore disjoint and lie in a ball of finite volume, so the number of incident cells is at most $\lambda_d(B(0,1))/(\beta d^{-d})$, uniformly over all vertices and meshes. Equivalently the polar formula applied to the indicator of each cone's unit-ball section gives its solid angle as $d$ times this volume, hence a uniform positive lower bound; no spherical-Jacobian formula is assumed. ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]], [[thm-lebesgue-measure-of-a-box-of-every-kind]], [[prop-measure-monotonicity]], [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]], [[thm-polar-coordinates-formula-for-lebesgue-measure]])

[F2] On a shared facet, the two face means of $v_h$ agree; on a boundary facet the face mean is zero. ([[def-crouzeix-raviart-global-space]])

[F3] Cellwise Gauss–Green holds on every affine simplex, and opposite interior facet orientations cancel in a matching mesh. ([[lem-affine-simplex-gauss-green-formula]], [[lem-oriented-facet-cancellation-on-matching-meshes]])

[F4] $H^1_0(\Omega)$ is the norm closure of $C_c^\infty(\Omega)$; compactly supported $W^{1,2}$ functions extend by zero, and compactly supported $W^{1,2}(\mathbb R^d)$ functions admit smooth compactly supported approximants. ([[def-wkp-zero-as-a-sobolev-closure]], [[lem-compact-support-zero-extension-in-wkp]], [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]])

[F5] A decreasing sequence of measurable subsets of a bounded set has measures tending to the measure of its intersection. ([[thm-continuity-from-above-for-measures]])

[F6] Smooth multipliers preserve $W^{1,2}$, a unit-mass mollifier smooths locally integrable functions, and its convolution derivative is obtained by differentiating the kernel. ([[lem-weak-leibniz-rule-with-a-smooth-factor]], [[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]], [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]])

[F7] The cutoff from [[lem-schwartz-cutoffs-from-the-standard-smooth-step]] is nonnegative, compactly supported and equals one on the unit ball. Scaling it to support in the unit ball and dividing by its integral gives a nonnegative unit-mass smooth bump; the integral is finite by compact support and positive because the bump is one on a ball of positive measure. ([[lem-schwartz-cutoffs-from-the-standard-smooth-step]], [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]])

[F8] The standard smooth step $\sigma$ is smooth, takes values in $[0,1]$, is zero for $t\le0$ and is one for $t\ge1$; thus $\theta(t):=\sigma(t-1)$ is zero for $t\le1$ and one for $t\ge2$. ([[def-the-standard-smooth-step-function]])

[F9] Since $\Omega$ is bounded, it is contained in a finite box; box volume and measure monotonicity give $|\Omega|<\infty$. ([[thm-lebesgue-measure-of-a-box-of-every-kind]], [[prop-measure-monotonicity]])

[F10] If $K\subset\Omega$ is compact and $\Omega$ open, there is a smooth cutoff in $C_c^\infty(\Omega)$ equal to one near $K$. ([[lem-test-function-cutoffs-and-euclidean-localization]])

[F11] A closed bounded subset of Euclidean space is compact. ([[thm-heine-borel-rn]])

## Proof
1.1 Vertex stars are facet-connected. Fix a mesh vertex $z$. Finiteness of the mesh lets us choose a ball $B_R(z)$ meeting no closed cell that does not contain $z$; within this ball the union of incident cells is exactly the polyhedral cone obtained by joining $z$ to their opposite facets. Its intersection $L_z$ with a sufficiently small centered sphere is a finite face-to-face spherical triangulation. At an interior vertex $L_z$ is the whole sphere. At a boundary vertex, the Lipschitz polyhedral definition in [given] gives, after a rigid motion and shrinking $R$, an epigraph $C_z=\{(x',t):t>\psi(x')\}$ where $\psi$ is a positively homogeneous piecewise-linear Lipschitz function; this is the local tangent cone, and radial projection maps $C_z\setminus\{0\}$ onto $L_z$. The cone $C_z$ is path-connected: for two points, join each vertically to a height $H$ above the maximum of $\psi$ on the horizontal segment between their base coordinates, then join horizontally at height $H$. Radial projection therefore makes $L_z$ path-connected. Any two interiors of top-dimensional spherical simplices in this link can be joined by a compact path in $L_z$. In spherical charts covering that path, each codimension-two simplex lies in a set of dimension at most $m-2$, where $m=d-1$; for a fixed path endpoint, next endpoints whose straight chart segment meets such a set lie in a cone of dimension at most $m-1$, hence have empty interior. Choose the perturbation balls small enough to remain in $L_z$ and successively avoid the finitely many such cones. The resulting path avoids the codimension-two skeleton and changes simplices only across codimension-one faces. Hence the cells incident to $z$ form a connected graph using facets containing $z$. At a boundary vertex some boundary mesh facet contains $z$, so the star graph reaches a boundary facet. Its number of cells is uniformly bounded by [F1]. [A1, F1, given]

2.1 For an interior mesh vertex $z$, define $(E_hv_h)(z)$ as the arithmetic mean of the values $v_K(z)$ over cells $K$ incident to $z$. For a boundary vertex set $(E_hv_h)(z)=0$. On each cell define $E_hv_h$ as the affine polynomial with these vertex values. Adjacent cell restrictions agree at every vertex of their common facet, hence agree on the whole facet, so $E_hv_h$ is continuous and piecewise affine. Every boundary facet has all its vertices assigned zero, so its polynomial trace is identically zero. [A1, F2, step 1.1, given]

3.1 If cells $K,L$ share a facet $F$ containing a vertex $z$, then the restriction of an affine function $p$ satisfies $p(x)=p(b_F)+\nabla_Fp\cdot(x-b_F)$ on $F$, and $\int_F(x-b_F)\,dS=0$ by the definition of the barycenter; hence its face mean is $p(b_F)$. By [F2] the means of $v_K,v_L$ agree, and therefore $|v_K(z)-v_L(z)|\le h_F(|\nabla v_K|+|\nabla v_L|)$. If $F$ is a boundary facet containing $z$, its mean is zero, so $|v_K(z)|\le h_F|\nabla v_K|$. Following the bounded facet paths of step 1.1 gives, for every cell $K$ and vertex $z\in K$, $|v_K(z)-(E_hv_h)(z)|\le C h_K\sum_{L\ni z}|\nabla v_L|$, where adjacent diameters are comparable by [F1]. The affine barycentric formula on $K$ now gives $\|v_h-E_hv_h\|_{L^2(K)}\le C h_K\sum_{L\cap K\text{ shares a vertex}}\|\nabla v_L\|_{L^2(L)}$ and $\|\nabla(E_hv_h-v_K)\|_{L^2(K)}\le C\sum_{L\cap K\text{ shares a vertex}}\|\nabla v_L\|_{L^2(L)}$. Each patch contains a uniformly bounded number of cells and overlaps only a uniformly bounded number of times by [F1]; summing the squared inequalities proves both displayed norm bounds, except for $H^1_0$ membership. [A1, F1, F2, step 1.1, step 2.1, algebra]

4.1 It remains to prove $E_hv_h\in H^1_0(\Omega)$. Extend $E_hv_h$ by zero to $\widetilde E$ on $\mathbb R^d$. Apply [F3] cellwise to $E_hv_h\,\varphi e_i$ for any $\varphi\in C_c^\infty(\mathbb R^d)$. Interior fluxes cancel because the traces of $E_hv_h$ agree, and boundary fluxes vanish because its boundary-facet trace is zero. Thus the zero extension has the cellwise gradient as its weak gradient and belongs to $W^{1,2}(\mathbb R^d)$. Let $M$ be the maximum of the finitely many cellwise gradient magnitudes. Restricting $\widetilde E$ to any line segment partitions it into finitely many cell/exterior pieces; on each piece it is affine with slope at most $M$, and continuity at piece endpoints gives $|\widetilde E(x)-\widetilde E(y)|\le M|x-y|$. If a segment lies in a mesh face, its restriction is affine there with the same bound. Hence $\widetilde E$ is globally Lipschitz. For $d_\Omega(x)=\operatorname{dist}(x,\mathbb R^d\setminus\Omega)$, the triangle inequality gives $|d_\Omega(x)-d_\Omega(y)|\le|x-y|$; since $\widetilde E$ vanishes on the complement, $|E_hv_h(x)|\le M d_\Omega(x)$. [A1, F3, step 2.1]

5.1 Let $\rho$ be the nonnegative unit-mass smooth bump supplied by [F7], let $\theta$ be supplied by [F8], and set $g_\epsilon(x)=\theta(d_\Omega(x)/\epsilon)$ and $\eta_\epsilon=g_\epsilon*\rho_{\epsilon/4}$. The function $g_\epsilon$ is bounded and $C/\epsilon$-Lipschitz; convolution with the compactly supported smooth bump makes $\eta_\epsilon$ smooth and preserves this Lipschitz bound, so $\|\nabla\eta_\epsilon\|_\infty\le C/\epsilon$. Since $\rho_{\epsilon/4}$ is supported in the radius-$\epsilon/4$ ball, $d_\Omega(x)<3\epsilon/4$ implies $g_\epsilon(x-y)=0$ throughout the convolution neighborhood, while $d_\Omega(x)\ge9\epsilon/4$ implies $g_\epsilon(x-y)=1$ there. Therefore $\operatorname{supp}\eta_\epsilon\subseteq\{d_\Omega\ge3\epsilon/4\}$, a closed bounded subset of $\Omega$ and hence compact by [F11], and $0\le\eta_\epsilon\le1$ with $\eta_\epsilon=1$ on $\{d_\Omega\ge9\epsilon/4\}$. The product rule [F6] shows that $\widetilde E-\eta_\epsilon\widetilde E$ and its weak gradient are supported in $S_\epsilon=\{x\in\Omega:d_\Omega(x)<9\epsilon/4\}$. On this layer $|E_hv_h|\le C M\epsilon$ and $|E_hv_h\nabla\eta_\epsilon|\le CM$, while $|\nabla\widetilde E|\le M$ almost everywhere. Thus $\|\widetilde E-\eta_\epsilon\widetilde E\|_{W^{1,2}(\mathbb R^d)}^2\le C M^2|S_\epsilon|$. The sets $S_{1/n}$ decrease to the empty set and are contained in the finite-measure set $\Omega$ by [F9]; continuity from above [F5] gives $|S_{1/n}|\to0$. For $\epsilon\le1/n$, $S_\epsilon\subseteq S_{1/n}$, so $\eta_\epsilon E_hv_h\to E_hv_h$ in $W^{1,2}(\Omega)$. [F5, F6, F7, F8, F9, F11, step 4.1, algebra]

6.1 Fix $\epsilon>0$. The function $w_\epsilon=\eta_\epsilon\widetilde E$ is a compactly supported $W^{1,2}(\mathbb R^d)$ function whose support $K_\epsilon$ is a compact subset of $\Omega$. By [F10], choose $\chi_\epsilon\in C_c^\infty(\Omega)$ equal to one near $K_\epsilon$. By [F4], choose $\varphi_n\in C_c^\infty(\mathbb R^d)$ converging to $w_\epsilon$ in $W^{1,2}(\mathbb R^d)$. The weak product rule [F6] makes $\chi_\epsilon\varphi_n\to\chi_\epsilon w_\epsilon=w_\epsilon$ in $W^{1,2}$, and each product belongs to $C_c^\infty(\Omega)$. Hence $w_\epsilon|_\Omega\in H^1_0(\Omega)$. By step 5.1, these functions converge to $E_hv_h$ in $W^{1,2}(\Omega)$ as $\epsilon\downarrow0$; the closure definition [F4] proves $E_hv_h\in H^1_0(\Omega)$. [A1, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 2.1, step 3.1, step 4.1, step 5.1] ∎
