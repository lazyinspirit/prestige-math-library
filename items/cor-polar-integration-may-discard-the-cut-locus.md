---
id: cor-polar-integration-may-discard-the-cut-locus
kind: corollary
title: Polar integration may discard the cut locus
status: published
origin: pipeline
deps:
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - cor-determinant-is-a-polynomial-in-the-matrix-entries
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - cor-integral-over-a-null-set-vanishes
  - cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps
  - cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus
  - cor-the-space-of-jacobi-fields-along-a-geodesic-has-dimension-two-n
  - def-borel-sigma-algebra
  - def-countable-chart-gluing-of-a-nonnegative-density-measure
  - def-countable-choice
  - def-conjugate-points-along-a-geodesic-and-their-multiplicity
  - def-covariant-derivative-along-a-curve
  - def-cut-point-and-cut-locus-of-a-point
  - def-cut-time-in-a-unit-tangent-direction
  - def-derivative
  - def-determinant-of-a-square-matrix
  - def-differential-of-a-smooth-map
  - def-diffeomorphism-and-local-diffeomorphism-of-manifolds
  - def-geodesic-of-an-affine-connection
  - def-gram-matrix-and-gram-determinant
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-integral-over-a-measurable-set
  - def-jacobi-field
  - def-linear-isometry-and-isometric-isomorphism
  - def-measure
  - def-measure-null-set-and-almost-everywhere
  - def-metric-compatible-connection-on-a-riemannian-vector-bundle
  - def-orthogonal-vectors-sets-and-orthonormal-bases
  - def-parallel-section-along-a-curve
  - def-pointwise-norm-and-angle-from-a-riemannian-metric
  - def-polar-surface-measure-on-the-unit-sphere
  - def-riemannian-metric-and-riemannian-manifold
  - def-riemannian-volume-density
  - def-smooth-manifold
  - def-vector-field-and-section-along-a-smooth-curve
  - lem-algebra-of-continuous-real-maps-on-a-space
  - lem-isometry-is-an-embedding
  - lem-the-riemannian-volume-density-is-coordinate-independent
  - prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure
  - prop-closure-properties-of-measurable-functions-used-by-the-integral
  - prop-countable-subsets-of-rn-are-lebesgue-null
  - prop-geodesics-have-constant-speed-for-a-metric-compatible-connection
  - prop-levi-civita-parallel-transport-preserves-lengths-angles-and-volume
  - prop-measure-monotonicity
  - prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density
  - prop-smooth-maps-are-continuous
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - thm-algebra-of-function-limits
  - thm-borel-products-of-euclidean-spaces-are-euclidean-borel
  - thm-borel-sigma-algebra-of-a-subspace-is-the-trace
  - thm-chain-rule-for-differentials-of-smooth-maps
  - thm-characterization-of-a-cut-point
  - thm-componentwise-limits-and-continuity
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-cut-locus-of-a-point-has-riemannian-volume-zero
  - thm-cut-locus-of-a-point-is-closed
  - thm-density-measure-integration-agrees-with-smooth-density-integration
  - thm-density-measure-is-independent-of-the-chart-gluing
  - thm-determinant-multiplicative
  - thm-determinant-of-transpose
  - thm-differential-of-the-exponential-map-in-terms-of-jacobi-fields
  - thm-exp-p-is-a-diffeomorphism-from-the-open-tangent-cut-domain-onto-m-minus-the-cut-locus-and-p
  - thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data
  - thm-existence-and-uniqueness-of-parallel-sections
  - thm-finite-and-countable-subadditivity-of-measures
  - thm-gauss-lemma
  - thm-gram-determinant-detects-linear-independence
  - thm-hopf-rinow
  - thm-intermediate-value
  - thm-monotone-convergence-for-the-integral
  - thm-nonnegative-measurable-functions-admit-increasing-simple-approximations
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - thm-the-lebesgue-integral-respects-almost-everywhere-equality
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Section 27.2, 'The volume element in polar coordinates', printed pp.200-202 (PDF labels P208-P210): display (27.1) and Lemma 27.2.1 with its proof express the polar density of exp_p as the determinant of normal Jacobi fields in a parallel frame; Section 23.2 printed pp.167-170 (cut locus and the diffeomorphism property of exp_p on the tangent cut domain) and Section 23.3 printed pp.171-172 (differentiability of the distance); Section 22.3 printed pp.163-164 (conjugate points)."
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Chapter 10, printed pp.173-190 (Jacobi fields, conjugate points, the differential of the exponential map, and the cut locus)."
    - title: "Gerald B. Folland, Real Analysis, 2nd ed."
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
      locator: "Theorem 2.49 (polar coordinates) and Proposition 2.23 (countable additivity of indefinite integrals)."
---

## Statement

Assume exactly the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]), carried by the declared completeness, exponential,
cut-time, cut-locus, density and polar-coordinate suppliers. Let $(M,g)$ be a
complete, connected, boundaryless, finite-dimensional Riemannian manifold, let
$p\in M$, let $\operatorname{vol}_g$ be the Riemannian volume measure of
[[def-riemannian-volume-density]], and let $\operatorname{Cut}(p)$ be the cut
locus of [[def-cut-point-and-cut-locus-of-a-point]]. Write
$S_pM=\{v\in T_pM:|v|_g=1\}$, let $c_p:S_pM\to(0,+\infty]$ be the cut time of
[[def-cut-time-in-a-unit-tangent-direction]], and write
$\gamma_v(t)=\exp_p(tv)$ for the radial geodesic.

**(a) Discarding the cut locus.** For every Borel $f:M\to[0,\infty]$,
$$\int_M f\,d\operatorname{vol}_g=\int_{M\setminus\operatorname{Cut}(p)}f\,d\operatorname{vol}_g,$$
and the same identity holds for every real or complex Borel
$f\in L^1(\operatorname{vol}_g)$, the right-hand side being the integral over
the Borel set $M\setminus\operatorname{Cut}(p)$. In dimension zero
$\operatorname{Cut}(p)=\varnothing$ and the identity is trivial.

**(b) The exponential polar formula.** Suppose $n:=\dim M\ge1$. Fix
$v\in S_pM$, let $e_1,\dots,e_{n-1}$ be an orthonormal basis of the hyperplane
$v^\perp=\{w\in T_pM:g_p(v,w)=0\}$, let $E_1,\dots,E_{n-1}$ be the parallel
sections along $\gamma_v$ with $E_i(0)=e_i$, and let $J_1,\dots,J_{n-1}$ be
the Jacobi fields along $\gamma_v$ with $J_i(0)=0$ and $D_tJ_i(0)=e_i$. Put
$$a_v(t):=\bigl(g_{\gamma_v(t)}(J_i(t),E_j(t))\bigr)_{1\le i,j\le n-1},\qquad t\ge0.$$
Then $\det a_v(t)$ does not depend on the choice of the orthonormal basis
$e_1,\dots,e_{n-1}$ of $v^\perp$, the inequality $\det a_v(t)>0$ holds for
every $0<t<c_p(v)$, and for $n=1$ the matrix is empty with
$\det a_v(t)=1$ by the empty-determinant convention. Let $\sigma_p$ be the
polar surface measure transported to $S_pM$ from the unit sphere
$S^{n-1}\subseteq\mathbb R^n$ by a linear isometry
$(T_pM,g_p)\to\mathbb R^n$ ([[def-polar-surface-measure-on-the-unit-sphere]]);
$\sigma_p$ is a finite Borel measure on $S_pM$ and does not depend on the
chosen isometry. Then for every Borel $f:M\to[0,\infty]$,
$$\int_M f\,d\operatorname{vol}_g=\int_{S_pM}\int_0^{c_p(v)}f(\gamma_v(t))\det a_v(t)\,dt\,d\sigma_p(v),$$
where the inner integral is the extended nonnegative integral over the open
interval $(0,c_p(v))$, and in particular the right-hand side is the integral
of $f$ over $M\setminus(\{p\}\cup\operatorname{Cut}(p))$. For $n=1$ the empty
determinant is $1$, so the formula reads
$\int_Mf\,d\operatorname{vol}_g=\int_{S_pM}\int_0^{c_p(v)}f(\gamma_v(t))\,dt\,d\sigma_p(v)$.
The polar identity is asserted only for $n\ge1$: in dimension zero
$S_pM=\varnothing$, so its right-hand side is $0$, while $\operatorname{vol}_g$
is counting measure and need not vanish on $M$; that counting case is recorded
separately (part (a) above is still valid there, since
$\operatorname{Cut}(p)=\varnothing$).

## Facts & Assumptions

**Given:** The Axiom of Countable Choice $\mathrm{AC}_\omega$; a complete, connected, boundaryless, finite-dimensional Riemannian manifold $(M,g)$ of dimension $n$; a point $p\in M$; the Riemannian volume measure $\operatorname{vol}_g$; and the cut time $c_p$, the unit sphere $S_pM$ and the cut locus $\operatorname{Cut}(p)$.

[F1] [[def-countable-choice]]: The Axiom of Countable Choice is the assumed choice principle; it is inherited through the declared suppliers and is spent only where those suppliers spend it.

[F2] [[def-riemannian-metric-and-riemannian-manifold]] and [[def-pointwise-norm-and-angle-from-a-riemannian-metric]]: Each tangent space $T_xM$ carries the positive definite inner product $g_x$, and $|w|_g=\sqrt{g_x(w,w)}$ is the associated norm, so that $S_pM=\{w\in T_pM:|w|_g=1\}$ consists of the unit vectors.

[F3] [[def-cut-time-in-a-unit-tangent-direction]] and [[def-cut-point-and-cut-locus-of-a-point]]: $\gamma_v(t)=\exp_p(tv)$ for $v\in S_pM$; $c_p(v)=\sup\{t>0:d_g(p,\exp_p(tv))=t\}\in(0,+\infty]$; $\operatorname{Cut}(p)=\{\exp_p(c_p(v)v):v\in S_pM,\ c_p(v)<+\infty\}$; and $D_p=\{tv:v\in S_pM,\ 0<t<c_p(v)\}$. In dimension zero $S_pM=\varnothing$ and $\operatorname{Cut}(p)=\varnothing$.

[F4] [[thm-cut-locus-of-a-point-has-riemannian-volume-zero]]: $\operatorname{vol}_g(\operatorname{Cut}(p))=0$. No compactness of $M$ is needed for this.

[F5] [[thm-cut-locus-of-a-point-is-closed]] and [[def-borel-sigma-algebra]]: $\operatorname{Cut}(p)$ is closed in $M$, hence a Borel set, because the Borel sigma-algebra is generated by the open sets and is closed under complements; consequently $M\setminus\operatorname{Cut}(p)$ is Borel as well.

[F6] [[thm-exp-p-is-a-diffeomorphism-from-the-open-tangent-cut-domain-onto-m-minus-the-cut-locus-and-p]]: $D_p$ is open in $T_pM$, the set $U:=M\setminus(\{p\}\cup\operatorname{Cut}(p))$ is an open submanifold of $M$, and $\exp_p|_{D_p}:D_p\to U$ is a diffeomorphism onto $U$. No compactness is assumed.

[F7] [[thm-hopf-rinow]]: On the complete connected manifold $(M,g)$ the exponential domain of every fibre is all of $T_pM$, so every vector $tv$ with $t\ge0$ and $v\in S_pM$ lies in the exponential domain.

[F8] [[def-geodesic-of-an-affine-connection]] and [[prop-geodesics-have-constant-speed-for-a-metric-compatible-connection]]: $D_t\dot\gamma_v=0$ along $\gamma_v$ and $|\dot\gamma_v(t)|_g=1$ for all $t$, so $\gamma_v$ is a unit-speed geodesic.

[F9] [[thm-existence-and-uniqueness-of-parallel-sections]], [[def-parallel-section-along-a-curve]] and [[prop-levi-civita-parallel-transport-preserves-lengths-angles-and-volume]]: For every initial vector $e\in T_pM$ there is exactly one parallel section $E$ along $\gamma_v$ with $E(0)=e$ on the whole interval $[0,\infty)$, and parallel transport preserves inner products. Hence if $e_1,\dots,e_{n-1}$ is an orthonormal basis of $v^\perp$ and $E_i$ is the parallel section with $E_i(0)=e_i$, then $E_1(t),\dots,E_{n-1}(t)$ is an orthonormal frame of $\dot\gamma_v(t)^\perp$: it is orthonormal because $\dot\gamma_v$ is parallel of unit length by [F8] and $g_p(e_i,v)=0$, and it spans the $(n-1)$-dimensional orthogonal complement.

[F10] [[thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data]], [[def-jacobi-field]] and [[cor-the-space-of-jacobi-fields-along-a-geodesic-has-dimension-two-n]]: For every $a\ge0$ and every $x,y\in T_{\gamma_v(a)}M$ there is exactly one Jacobi field along $\gamma_v$ with $J(a)=x$ and $D_tJ(a)=y$, and the set $\mathcal J(\gamma_v)$ of Jacobi fields along $\gamma_v$ is a real vector space of dimension $2n$. In particular the fields $J_i$ with $J_i(0)=0$ and $D_tJ_i(0)=e_i$ exist and are unique, and a Jacobi field with vanishing initial value and vanishing initial derivative is identically zero.

[F11] [[thm-differential-of-the-exponential-map-in-terms-of-jacobi-fields]]: For $v\in\mathcal E_p$ and $w\in T_pM$, the Jacobi field $J$ along $s\mapsto\exp_p(sv)$ with $J(0)=0$ and $D_sJ(0)=w$ satisfies $J(s)=d(\exp_p)_{sv}(sw)$ for $0\le s\le1$; in particular $d(\exp_p)_v(w)=J(1)$. By [F7] this applies to every $v\in T_pM$.

[F12] [[thm-gauss-lemma]]: For $w\in T_pM$ (with $w\in\mathcal E_p$, which by [F7] is automatic) and $z\in T_pM$, $$g_{\exp_p(w)}\bigl(d(\exp_p)_w(w),d(\exp_p)_w(z)\bigr)=g_p(w,z).$$

[F13] [[def-riemannian-volume-density]], [[lem-the-riemannian-volume-density-is-coordinate-independent]] and [[prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density]]: $\operatorname{vol}_g$ is the Borel measure $\mu_g$ of the Riemannian volume density, which is a compact-finite, locally finite and sigma-finite Radon measure; in any chart $x$ with metric matrix $G$ the coordinate coefficient of the density is $\sqrt{\det G}$, a positive smooth function, and in dimension zero this coefficient is $1$, so that $\operatorname{vol}_g$ is counting measure.

[F14] [[thm-density-measure-is-independent-of-the-chart-gluing]]: For a nonnegative Borel density $r$ and every chart $y:V\to y(V)$, the associated Borel measure $\mu_r$ satisfies $$\mu_r(E)=\int_{y(E)}r_y\,d\lambda_n$$ for every Borel $E\subseteq V$, and all chart-gluing constructions give the same measure.

[F15] [[thm-density-measure-integration-agrees-with-smooth-density-integration]] and [[def-countable-chart-gluing-of-a-nonnegative-density-measure]]: For a nonnegative Borel density $r$ and any chart partition $(x_i,\varphi_i)$, $$\int_M f\,d\mu_r=\sum_i\int_{x_i(U_i)}(\varphi_i f r)_{x_i}\,d\lambda_n$$ for every nonnegative Borel $f:M\to[0,\infty]$ and, through real and imaginary positive and negative parts, for every Borel $f\in L^1(\mu_r)$. The gluing data of the definition consist of a countable locally finite chart cover $(U_i,x_i)$ and a subordinate smooth partition $(\varphi_i)$ with $\varphi_i\ge0$, $\operatorname{supp}\varphi_i\subseteq U_i$ and $\sum_i\varphi_i=1$; a one-member family consisting of a single chart and the constant function $1$ satisfies these conditions, its support condition and local finiteness being immediate.

[F16] [[prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure]], [[def-smooth-manifold]] and [[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]: Every point of $M$ lies in a smooth chart, an open subset of a smooth manifold carries a canonical structure of smooth manifold making it an open submanifold, and a diffeomorphism is a bijective smooth map with smooth inverse.

[F17] [[thm-polar-coordinates-formula-for-lebesgue-measure]] and [[def-polar-surface-measure-on-the-unit-sphere]]: For $n\ge1$ the set function $\sigma(E)=n\lambda_n(\{r\omega:\omega\in E,\ 0<r\le1\})$ is a finite Borel measure on $S^{n-1}$, and for every nonnegative Borel $h:\mathbb R^n\to[0,\infty]$, $$\int_{\mathbb R^n}h\,d\lambda_n=\int_0^\infty\int_{S^{n-1}}h(t\omega)t^{n-1}\,d\sigma(\omega)\,dt.$$

[F18] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]], [[def-orthogonal-vectors-sets-and-orthonormal-bases]], [[def-linear-isometry-and-isometric-isomorphism]] and [[lem-isometry-is-an-embedding]]: Every finite-dimensional inner product space has an orthonormal basis; a linear isometry between inner product spaces is injective, and a bijective linear isometry is a homeomorphism onto its target. In particular the coefficient map of an orthonormal basis of $(T_pM,g_p)$ is a linear isometric isomorphism $\varphi:T_pM\to\mathbb R^n$ with $\varphi(S_pM)=S^{n-1}$ and $\varphi^{-1}(S^{n-1})=S_pM$.

[F19] [[cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps]] and [[cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus]]: Lebesgue measure is invariant under every orthogonal operator on $\mathbb R^n$, and composites of orthogonal operators are orthogonal. Therefore the polar surface measure $\sigma$ of [F17] is also invariant under orthogonal operators: $\sigma(OE)=\sigma(E)$, because $\{r\omega:\omega\in OE,\ 0<r\le1\}=O\{r\omega:\omega\in E,\ 0<r\le1\}$.

[F20] [[def-measure]], [[prop-measure-monotonicity]] and [[thm-finite-and-countable-subadditivity-of-measures]]: A measure is nonnegative, vanishes on the empty set, is countably additive on pairwise disjoint measurable families, is monotone, and is finitely subadditive.

[F21] [[cor-integral-over-a-null-set-vanishes]], [[def-measure-null-set-and-almost-everywhere]], [[def-integral-over-a-measurable-set]] and [[prop-closure-properties-of-measurable-functions-used-by-the-integral]]: For a measurable $f\ge0$ and a measurable null set $E$ one has $\int_Ef\,d\mu=0$; the integral over a measurable set is $\int f\chi_E\,d\mu$; and sums, scalar multiples, positive parts and products with indicator functions of measurable nonnegative functions are measurable.

[F22] [[cor-additivity-of-the-nonnegative-lebesgue-integral]]: For measurable $f,g:X\to[0,+\infty]$ on a measure space, $\int(f+g)\,d\mu=\int f\,d\mu+\int g\,d\mu$, with values in $[0,+\infty]$.

[F23] [[thm-the-lebesgue-integral-respects-almost-everywhere-equality]] and [[def-integrable-real-and-complex-functions-and-their-integrals]]: For $f,g\in L^1(\mu)$, if $f=g$ almost everywhere then $\int_Af\,d\mu=\int_Ag\,d\mu$ for every measurable $A$; integrability is defined through the positive and negative parts of the real and imaginary parts.

[F24] [[prop-countable-subsets-of-rn-are-lebesgue-null]]: For $n\ge1$ every at most countable subset of $\mathbb R^n$ is Lebesgue measurable and $\lambda_n$-null; in particular every singleton is null.

[F25] [[thm-chain-rule-for-differentials-of-smooth-maps]], [[def-differential-of-a-smooth-map]] and [[prop-smooth-maps-are-continuous]]: The differential of a composite is the composite of the differentials, the differential is linear in its vector argument, and smooth maps are continuous.

[F26] [[thm-determinant-multiplicative]], [[thm-determinant-of-transpose]], [[def-determinant-of-a-square-matrix]], [[def-gram-matrix-and-gram-determinant]], [[thm-gram-determinant-detects-linear-independence]] and [[cor-determinant-is-a-polynomial-in-the-matrix-entries]]: For square real matrices $\det(AB)=\det A\det B$ and $\det(A^{\mathsf T})=\det A$; the determinant is the finite Leibniz sum of products of the entries, hence a polynomial function of them; the Gram matrix of a finite list of vectors has entries $g(v_i,v_j)$ and its determinant vanishes exactly when the list is linearly dependent and is positive exactly when the list is independent; the empty determinant and the empty Gram determinant are $1$.

[F27] [[def-metric-compatible-connection-on-a-riemannian-vector-bundle]], [[def-covariant-derivative-along-a-curve]], [[def-derivative]] and [[def-vector-field-and-section-along-a-smooth-curve]]: The metric pairing along a smooth curve satisfies the product rule $(g(V,W))'=g(D_tV,W)+g(V,D_tW)$, the coefficients of smooth fields along a curve in a pulled-back frame are smooth functions of the parameter, and differentiability of a real function at a point is the existence of its difference-quotient limit.

[F28] [[thm-algebra-of-function-limits]]: Limits of real functions at a point respect finite sums, finite products and products by constants.

[F29] [[thm-characterization-of-a-cut-point]] and [[def-conjugate-points-along-a-geodesic-and-their-multiplicity]]: The points $\gamma_v(0)$ and $\gamma_v(t)$ are conjugate along $\gamma_v|_{[0,t]}$ exactly when there is a nonzero Jacobi field along $\gamma_v$ that vanishes at both parameters $0$ and $t$; and if $t>0$ and this conjugacy holds, then $c_p(v)\le t$.

[F30] [[thm-intermediate-value]]: A continuous real function on an interval whose values at two points have opposite signs has a zero between them.

[F31] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: For sigma-finite measure spaces and a nonnegative product-measurable function, the product integral equals both iterated integrals, and the section integrals are measurable.

[F32] [[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]], [[thm-borel-sigma-algebra-of-a-subspace-is-the-trace]], [[thm-continuous-preimages-of-borel-sets-are-borel]], [[lem-algebra-of-continuous-real-maps-on-a-space]] and [[thm-componentwise-limits-and-continuity]]: The product Borel sigma-algebra of $\mathbb R^m\times\mathbb R^k$ is the Borel sigma-algebra of $\mathbb R^{m+k}$; the Borel sigma-algebra of a subspace is the trace; a continuous map pulls Borel sets back to Borel sets; finite products of continuous real functions are continuous; and a map into $\mathbb R^m$ is continuous exactly when its components are. In particular the map $(\omega,t)\mapsto t\omega$ is continuous on $S^{n-1}\times(0,\infty)$ and the product Borel structure there agrees with the trace of $\mathcal B(\mathbb R^{n+1})$.

[F33] [[thm-nonnegative-measurable-functions-admit-increasing-simple-approximations]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]] and [[thm-monotone-convergence-for-the-integral]]: Every nonnegative measurable function is an increasing limit of nonnegative simple functions, the integral of a simple function is its simple integral, and the nonnegative integral commutes with increasing limits.

## Proof

**Proof technique:** direct. The cut-locus nullity lets the integral be taken over $M\setminus(\{p\}\cup\operatorname{Cut}(p))$; the exponential map is a diffeomorphism there and the Riemannian density in the resulting normal chart is $\sqrt{\det G}$; the Euclidean polar decomposition of Lebesgue measure factors that integral into radial and spherical parts, and Gauss's lemma computes the Gram matrix in an adapted frame so that the radial factor $t^{n-1}$ cancels and the density becomes the Jacobi determinant $\det a_v(t)$.

1.1 **Dimension zero.** If $n=0$ then $S_pM=\varnothing$ and $\operatorname{Cut}(p)=\varnothing$ by [F3], so $M\setminus\operatorname{Cut}(p)=M$ and both sides of the identity of (a) are literally the same integral, for $[0,\infty]$-valued and for integrable Borel $f$ alike; and $\operatorname{vol}_g$ is counting measure by [F13], which is why the polar identity of (b) is not asserted for $n=0$: there $S_pM=\varnothing$ makes its right-hand side $0$, while $\int_Mf\,d\operatorname{vol}_g$ can be nonzero. Assume $n\ge1$ from here on. [F3, F13, given, cases]

1.2 **A linear isometry, the transported sphere measure, and its integral transformation.** By [F18] choose an orthonormal basis $(e^0_1,\dots,e^0_n)$ of $(T_pM,g_p)$ and let $\varphi:T_pM\to\mathbb R^n$ be its coefficient map $\varphi(\sum_ix_ie^0_i)=(x_1,\dots,x_n)$. This is a single existential instantiation. By [F18], $\varphi$ is a linear isometric isomorphism and therefore a homeomorphism with $\varphi(S_pM)=S^{n-1}$. Define $\sigma_p(E):=\sigma(\varphi(E))$ for Borel $E\subseteq S_pM$, where $\sigma$ is the polar surface measure of [F17]; since $\varphi$ is a bijection, this is the image of $\sigma$ under $\varphi^{-1}$, so $\sigma_p$ is a Borel measure with $\sigma_p(S_pM)=\sigma(S^{n-1})<\infty$ by [F17], and the defining formula of an image measure gives, for every nonnegative Borel $g:S_pM\to[0,\infty]$, $$\int_{S_pM}g\,d\sigma_p=\int_{S^{n-1}}(g\circ\varphi^{-1})\,d\sigma.$$ Indeed, for $g=\mathbf 1_E$ with Borel $E\subseteq S_pM$ both sides are $\sigma(\varphi(E))$, for nonnegative simple $g$ the identity is finite additivity of $\sigma$, and for general nonnegative Borel $g$ it follows by increasing simple approximation and monotone convergence [F33]. If $\varphi':T_pM\to\mathbb R^n$ comes from a second orthonormal basis, then $\varphi'\circ\varphi^{-1}$ is orthogonal by [F19], so for every Borel $E\subseteq S_pM$ the orthogonal invariance of $\sigma$ recorded in [F19] gives $\sigma(\varphi'(E))=\sigma((\varphi'\circ\varphi^{-1})(\varphi(E)))=\sigma(\varphi(E))$; thus $\sigma_p$ does not depend on the chosen isometry. Consequently, for every nonnegative Borel $G:S^{n-1}\to[0,\infty]$, $$\int_{S^{n-1}}G\,d\sigma=\int_{S_pM}(G\circ\varphi)\,d\sigma_p,$$ the case $g=G\circ\varphi$ of the displayed identity. [F17, F18, F19, F33, algebra]

1.3 **The normal chart and its metric matrix.** Put $\Omega:=\varphi(D_p)\subseteq\mathbb R^n\setminus\{0\}$ and $U:=M\setminus(\{p\}\cup\operatorname{Cut}(p))$. By [F6] the set $D_p$ is open and $\exp_p|_{D_p}:D_p\to U$ is a diffeomorphism onto the open submanifold $U$, so $x:=\varphi\circ(\exp_p|_{D_p})^{-1}:U\to\Omega$ is a diffeomorphism onto the open set $\Omega$ with inverse $x^{-1}(\xi)=\exp_p(\varphi^{-1}(\xi))$ for $\xi\in\Omega$ [F16, F25]. Write $c_\varphi(\omega):=c_p(\varphi^{-1}(\omega))$ for $\omega\in S^{n-1}$; then $$\Omega=\varphi(D_p)=\{t\omega:\omega\in S^{n-1},\ 0<t<c_\varphi(\omega)\},$$ because $\varphi$ is linear and $\varphi(S_pM)=S^{n-1}$ by [F18]. For $\xi\in\Omega$ with $w:=\varphi^{-1}(\xi)$ let $G(\xi)$ be the metric matrix of the chart $x$ at $\xi$, $$G_{ij}(\xi)=g_{x^{-1}(\xi)}\bigl(d(\exp_p)_w(e^0_i),d(\exp_p)_w(e^0_j)\bigr),\qquad1\le i,j\le n;$$ this is the matrix of the Riemannian metric in this chart, since by the chain rule [F25] the coordinate frame is $\partial_i|_\xi=d(x^{-1})_\xi(e_i^{\mathrm{std}})=d(\exp_p)_w(e^0_i)$. The coefficient of the Riemannian volume density in this chart is $\sqrt{\det G(\xi)}$, positive and smooth on the open set $\Omega$, by [F13]. [F6, F13, F16, F18, F25, given, algebra]

1.4 **The Jacobi fields, the frame, and the matrix $a_v$.** Fix $v\in S_pM$. The Jacobi fields $J_i$ with $J_i(0)=0$, $D_tJ_i(0)=e_i$ and the parallel sections $E_i$ with $E_i(0)=e_i$ exist, are unique on all of $[0,\infty)$, and are smooth in $t$, by [F9] and [F10]; moreover $E_1(t),\dots,E_{n-1}(t)$ is an orthonormal frame of $\dot\gamma_v(t)^\perp$ by [F8] and [F9]. Define $a_{ij}(t):=g_{\gamma_v(t)}(J_i(t),E_j(t))$ for $t\ge0$. Since $E_1(t),\dots,E_{n-1}(t)$ is an orthonormal basis of $\dot\gamma_v(t)^\perp$ and each $J_i(t)$ lies in that subspace by the Gauss lemma [F12] applied with $w=tv$ and $z=te_i$, the expansion in an orthonormal basis gives $J_i(t)=\sum_ja_{ij}(t)E_j(t)$; hence the Gram matrix $A(t):=(g_{\gamma_v(t)}(J_i(t),J_j(t)))_{i,j}$ satisfies $A(t)=a(t)a(t)^{\mathsf T}$ and therefore $$\det A(t)=\det(a(t))^2$$ by [F26]. The entries $a_{ij}$ are smooth in $t$ by [F27], and the metric product rule [F27] evaluated at $t=0$, where $D_tJ_i(0)=e_i$, $J_i(0)=0$, $E_j(0)=e_j$ and $D_tE_j=0$ by [F9] and [F10], gives $$a_{ij}'(0)=g_p(e_i,e_j)+g_p(0,0)=\delta_{ij}.$$ Consequently $a(t)=tI+o(t)$ as $t\to0^+$ by the definition of the derivative [F27], so $t^{-1}a(t)\to I$ entrywise; the determinant is a finite sum of products of the entries [F26], so the limit rules [F28] give $\det(t^{-1}a(t))\to\det I=1$, and therefore $$\det a(t)=t^{n-1}\det(t^{-1}a(t))>0$$ for every sufficiently small $t>0$ (for $n=1$ the matrix $a(t)$ is empty and $\det a(t)=1>0$ for all $t$ by the empty-determinant convention [F26]). Next, $\det a(t)\ne0$ for every $0<t<c_p(v)$: if $\det a(t)=0$, then $\det A(t)=0$, so the list $J_1(t),\dots,J_{n-1}(t)$ is linearly dependent by [F26]; choose a nonzero coefficient vector $(c_i)$ with $\sum_ic_iJ_i(t)=0$. The combination $J:=\sum_ic_iJ_i$ is a Jacobi field along $\gamma_v$ because $\mathcal J(\gamma_v)$ is a real vector space [F10], it satisfies $J(0)=0$ and $J(t)=0$, and it is not the zero field because $D_tJ(0)=\sum_ic_ie_i\ne0$ by the independence of the $e_i$ and the uniqueness in [F10]. Hence $p=\gamma_v(0)$ and $\gamma_v(t)$ are conjugate along $\gamma_v|_{[0,t]}$ by [F29], and the conjugacy clause of [F29] gives $c_p(v)\le t$, contradicting $t<c_p(v)$. Since $t\mapsto\det a(t)$ is continuous on $(0,\infty)$ (its entries are smooth [F27]) and has no zero on the interval $(0,c_p(v))$, while it is positive near $0$, the intermediate value theorem [F30] shows that $\det a(t)>0$ for every $0<t<c_p(v)$. Finally, $\det a(t)$ does not depend on the choice of the orthonormal basis of $v^\perp$: if $e'_i=\sum_kO_{ik}e_k$ with $O$ orthogonal, then uniqueness in [F9] and [F10] gives $J'_i=\sum_kO_{ik}J_k$ and $E'_i=\sum_kO_{ik}E_k$, hence $a'=OaO^{\mathsf T}$ and $\det a'=\det a$ by [F26]. [F8, F9, F10, F12, F26, F27, F28, F29, F30, algebra, cases]

1.5 **The complement of $U$ is $\operatorname{vol}_g$-null.** The set $\operatorname{Cut}(p)$ is closed by [F5] and $\operatorname{vol}_g(\operatorname{Cut}(p))=0$ by [F4]. For the singleton, choose a smooth chart $(V,y)$ of $M$ with $p\in V$, which exists by [F16], and let $r$ be the coefficient of the Riemannian volume density in this chart; then $\{p\}$ is Borel (singletons are closed in the Hausdorff manifold and closed sets are Borel [F5, F16]), and the chart-restriction formula [F14] applied to the measure $\operatorname{vol}_g=\mu_g$ of [F13] gives $$\operatorname{vol}_g(\{p\})=\int_{y(\{p\})}r\,d\lambda_n=\int_{\{y(p)\}}r\,d\lambda_n=0,$$ the last equality because $\{y(p)\}$ is a singleton, hence $\lambda_n$-null by [F24], and integrals of nonnegative functions over null sets vanish by [F21]. Therefore $\operatorname{vol}_g\bigl(\{p\}\cup\operatorname{Cut}(p)\bigr)\le\operatorname{vol}_g(\{p\})+\operatorname{vol}_g(\operatorname{Cut}(p))=0$ by finite subadditivity [F20], so $M\setminus U=\{p\}\cup\operatorname{Cut}(p)$ is a Borel set of $\operatorname{vol}_g$-measure zero. [F4, F5, F13, F14, F16, F20, F21, F24, algebra]

1.6 **Part (a) for nonnegative integrands.** Let $C:=\operatorname{Cut}(p)$, a Borel null set by [F4, F5]. For Borel $f:M\to[0,\infty]$, the functions $f\chi_C$ and $f\chi_{M\setminus C}$ are nonnegative Borel [F21] and $f=f\chi_C+f\chi_{M\setminus C}$ pointwise, so additivity of the nonnegative integral [F22] gives $$\int_Mf\,d\operatorname{vol}_g=\int_Mf\chi_C\,d\operatorname{vol}_g+\int_Mf\chi_{M\setminus C}\,d\operatorname{vol}_g.$$ The first term equals $\int_Cf\,d\operatorname{vol}_g=0$ by the definition of the integral over a measurable set and the null-set theorem [F21], and the second is $\int_{M\setminus\operatorname{Cut}(p)}f\,d\operatorname{vol}_g$ by the same definition. This is the asserted identity. [F4, F5, F21, F22, algebra]

1.7 **Part (a) for integrable integrands.** Let $f\in L^1(\operatorname{vol}_g)$ be real or complex and Borel, and put $C:=\operatorname{Cut}(p)$ and $g:=f\chi_{M\setminus C}$. Then $g$ is Borel with $|g|\le|f|$, so $g\in L^1(\operatorname{vol}_g)$ [F21, F23]; $f$ and $g$ agree outside the null set $C$, so $f=g$ almost everywhere [F21]; and $\int_Mg\,d\operatorname{vol}_g=\int_{M\setminus\operatorname{Cut}(p)}f\,d\operatorname{vol}_g$ by the definition of the integral over a measurable set [F21]. The almost-everywhere equality theorem [F23], applied with $A=M$, gives $\int_Mf\,d\operatorname{vol}_g=\int_Mg\,d\operatorname{vol}_g$, which is the asserted identity. [F4, F5, F21, F23, algebra]

1.8 **The chart formula on $U$.** By [F16] the open set $U$ carries the structure of a smooth manifold and $x:U\to\Omega$ is a smooth chart of it; the restricted Riemannian metric makes it a Riemannian manifold whose volume density is the restriction of $\mu_g$, because for a Borel set $E\subseteq U$ the chart-restriction formula [F14] applied in $M$ and in the open submanifold $U$ gives in both cases the value $\int_{x(E)}\sqrt{\det G}\,d\lambda_n$, the coefficient of the Riemannian density being the same positive function $\sqrt{\det G}$ by [F13]. The one-member family consisting of the chart $x$ and the constant function $1$ is admissible chart-partition gluing data [F15], so the density-integration theorem [F15] applied to the manifold $U$ with this chart partition gives, for every nonnegative Borel $F:U\to[0,\infty]$, $$\int_U F\,d\operatorname{vol}_g=\int_\Omega F\bigl(x^{-1}(\xi)\bigr)\sqrt{\det G(\xi)}\,d\lambda_n(\xi).$$ [F13, F14, F15, F16, algebra]

2.1 **The determinant identity.** Fix $\omega\in S^{n-1}$ and $0<t<c_\varphi(\omega)$, and put $v:=\varphi^{-1}(\omega)$ and $w:=tv$. Then $w\in D_p$ with $x^{-1}(t\omega)=\exp_p(w)=\gamma_v(t)$ by 1.3, and $e_n:=v$ together with an orthonormal basis $(e_1,\dots,e_{n-1})$ of $v^\perp$ is an orthonormal basis $(e_1,\dots,e_n)$ of $T_pM$ [F18]. The Gram matrix of the vectors $d(\exp_p)_w(e_1),\dots,d(\exp_p)_w(e_n)$ differs from $G(t\omega)$ by conjugation with the orthogonal change-of-basis matrix, so it has the same determinant by [F26]. Its entries are computed as follows. For $i,j\le n-1$, linearity of the differential [F25] and the Jacobi identification [F11] give $$d(\exp_p)_w(te_i)=d(\exp_p)_{tv}\bigl(t\,e_i\bigr)=J_i(t),$$ where the last equality uses [F11] for the base vector $tv\in T_pM$ (which lies in the exponential domain by [F7]) and the initial vector $te_i$, together with the uniqueness in [F10] which identifies the resulting field with $s\mapsto J_i(st)$; hence $g(d(\exp_p)_w(e_i),d(\exp_p)_w(e_j))=t^{-2}g(J_i(t),J_j(t))=t^{-2}A(t)_{ij}$ with $A(t)=a(t)a(t)^{\mathsf T}$ as in 1.4. For $i\le n-1$ the Gauss lemma [F12] with base vector $tv$ and second vector $te_i$ gives $g(d(\exp_p)_{tv}(tv),d(\exp_p)_{tv}(te_i))=g_p(tv,te_i)=t^2g_p(v,e_i)=0$, and $d(\exp_p)_{tv}(tv)=t\,d(\exp_p)_{tv}(v)$ by linearity [F25], so $g(d(\exp_p)_w(v),d(\exp_p)_w(e_i))=0$; taking the pair $(tv,tv)$ gives $g(d(\exp_p)_w(v),d(\exp_p)_w(v))=1$ in the same way. Therefore the Gram matrix in the adapted basis is block diagonal with blocks $1$ and $t^{-2}A(t)$, so $$\det G(t\omega)=t^{-2(n-1)}\det A(t)=t^{-2(n-1)}\bigl(\det a(t)\bigr)^2$$ by [F26]; since $\det a(t)>0$ on $(0,c_p(v))$ by 1.4, taking square roots gives $$\sqrt{\det G(t\omega)}\,t^{n-1}=\det a(t).$$ For $n=1$ the basis $(e_1,\dots,e_{n-1})$ is empty, $G(t\omega)$ is the $1\times1$ matrix with entry $1$, and both sides are $1$ by the empty-determinant convention [F26]. [F7, F10, F11, F12, F18, F25, F26, step 1.3, step 1.4, algebra, cases]

3.1 **Reduction to a Euclidean polar integral.** Let $f:M\to[0,\infty]$ be Borel and let $F:=f|_{U}$. Since $M\setminus U=\{p\}\cup\operatorname{Cut}(p)$ is null by 1.5, additivity [F22] and the null-set theorem [F21] give $\int_Mf\,d\operatorname{vol}_g=\int_Uf\,d\operatorname{vol}_g$. Inserting the chart formula of 1.8, the integral becomes $\int_\Omega f(x^{-1}(\xi))\sqrt{\det G(\xi)}\,d\lambda_n(\xi) =\int_{\mathbb R^n}h\,d\lambda_n$ for the function $h$ which equals $f(x^{-1}(\xi))\sqrt{\det G(\xi)}$ on the open set $\Omega$ and $0$ elsewhere; this $h$ is nonnegative and Borel, because $f$ is Borel, $x^{-1}$ is smooth hence continuous [F16, F25], $\sqrt{\det G}$ is continuous on $\Omega$ by [F13], and $\Omega$ is open [F6, F18]. Since by 1.3 the ray through $\omega\in S^{n-1}$ meets $\Omega$ exactly in $\{t\omega:0<t<c_\varphi(\omega)\}$, the polar formula [F17] gives $$\int_{\mathbb R^n}h\,d\lambda_n=\int_0^\infty\int_{S^{n-1}}\mathbf 1_{\{t<c_\varphi(\omega)\}}f\bigl(\gamma_{\varphi^{-1}(\omega)}(t)\bigr)\sqrt{\det G(t\omega)}\,t^{n-1}\,d\sigma(\omega)\,dt,$$ and by the determinant identity of 2.1 the two integrands $\mathbf 1_{\{t<c_\varphi(\omega)\}}f(\gamma_{\varphi^{-1}(\omega)}(t))\sqrt{\det G(t\omega)}t^{n-1}$ and $\mathbf 1_{\{t<c_\varphi(\omega)\}}f(\gamma_{\varphi^{-1}(\omega)}(t))\det a_{\varphi^{-1}(\omega)}(t)$ agree at every point of $S^{n-1}\times(0,\infty)$: on $0<t<c_\varphi(\omega)$ by 2.1, and off that set because both carry the indicator and $\det a_v$ is defined for all $t\ge0$ by 1.4. Hence $$\int_Mf\,d\operatorname{vol}_g=\int_0^\infty\int_{S^{n-1}}\mathbf 1_{\{t<c_\varphi(\omega)\}}f\bigl(\gamma_{\varphi^{-1}(\omega)}(t)\bigr)\det a_{\varphi^{-1}(\omega)}(t)\,d\sigma(\omega)\,dt.$$ [F6, F13, F16, F17, F18, F21, F22, F25, step 1.3, step 1.5, step 1.8, step 2.1, algebra]

4.1 **Tonelli's theorem, transport back to $S_pM$, and the polar identity.** Put $$K(\omega,t):=\mathbf 1_{\{t<c_\varphi(\omega)\}}f\bigl(\gamma_{\varphi^{-1}(\omega)}(t)\bigr)\det a_{\varphi^{-1}(\omega)}(t),\qquad(\omega,t)\in S^{n-1}\times(0,\infty).$$ This is product-measurable: by 2.1 and 1.3 it equals $k(t\omega)$, where $$k(\xi):=\mathbf 1_\Omega(\xi)\,f\bigl(x^{-1}(\xi)\bigr)\sqrt{\det G(\xi)}\,|\xi|^{n-1}$$ is a Borel function on $\mathbb R^n$ (indicator of the open set $\Omega$, the Borel function $f\circ x^{-1}$, the continuous function $\sqrt{\det G}$ on $\Omega$, and the continuous function $|\xi|^{n-1}$, with value $0$ off $\Omega$), and the map $(\omega,t)\mapsto t\omega$ is continuous, hence Borel for the product Borel structure, which is the trace of $\mathcal B(\mathbb R^{n+1})$ by [F32]. The measure $\sigma$ is finite by [F17] and Lebesgue measure on $(0,\infty)$ is sigma-finite, so Tonelli's theorem [F31] applies and gives $$\int_0^\infty\int_{S^{n-1}}K\,d\sigma\,dt=\int_{S^{n-1}}\int_0^\infty K\,dt\,d\sigma=\int_{S^{n-1}}\int_0^{c_\varphi(\omega)}f\bigl(\gamma_{\varphi^{-1}(\omega)}(t)\bigr)\det a_{\varphi^{-1}(\omega)}(t)\,dt\,d\sigma(\omega),$$ the last equality because $K$ vanishes for $t\ge c_\varphi(\omega)$; moreover the function $$G(\omega):=\int_0^{c_\varphi(\omega)}f\bigl(\gamma_{\varphi^{-1}(\omega)}(t)\bigr)\det a_{\varphi^{-1}(\omega)}(t)\,dt$$ is Borel on $S^{n-1}$ by the measurability clause of [F31]. Since $G$ is nonnegative and Borel, the integral transformation of 1.2 applied to $G\circ\varphi$ gives $$\int_{S^{n-1}}G\,d\sigma=\int_{S_pM}G(\varphi(v))\,d\sigma_p(v).$$ For $v\in S_pM$ one has $\varphi(v)\in S^{n-1}$, $c_\varphi(\varphi(v))=c_p(v)$ and $\gamma_{\varphi^{-1}(\varphi(v))}=\gamma_v$ by 1.3, so $G(\varphi(v))=\int_0^{c_p(v)}f(\gamma_v(t))\det a_v(t)\,dt$. Combining this with 3.1 proves $$\int_M f\,d\operatorname{vol}_g=\int_{S_pM}\int_0^{c_p(v)}f(\gamma_v(t))\det a_v(t)\,dt\,d\sigma_p(v).$$ [F17, F31, F32, step 1.2, step 1.3, step 2.1, step 3.1, algebra]

5.1 **Audit of degenerate, boundary, and choice cases.** Dimension zero is discharged in 1.1; the empty manifold carries no point $p$ and is excluded by the hypothesis $p\in M$. For $n=1$ the hyperplane $v^\perp$ is the zero subspace, the basis $(e_1,\dots,e_{n-1})$ and the matrix $a_v(t)$ are empty, and $\det a_v(t)=1$ for every $t$ by the empty-determinant convention, so the identity of (b) reduces to the sum of the two radial integrals over the two points of $S_pM$; the transported measure $\sigma_p$ is then counting measure with $\sigma_p(S_pM)=\sigma(S^0)=2$, consistently with [F17]. The zero vector is never used: $S_pM$ consists of unit vectors by [F2], $t=0$ is excluded from the integration domain $(0,c_p(v))$ and is a single point of the parameter interval, and $\Omega\subseteq\mathbb R^n\setminus\{0\}$ by 1.3. The endpoint $t=c_p(v)$ is excluded; the inner integral is the extended nonnegative integral over the open interval, so any blow-up of $\det a_v(t)$ at the excluded endpoint is irrelevant, and when $c_p(v)=+\infty$ the inner integral is over $(0,\infty)$. Values $f(q)=+\infty$ are allowed: $f$ is $[0,\infty]$-valued and the right-hand side of (b) is an extended nonnegative integral. Degenerate data are covered: $f\equiv0$ gives the identity $0=0$; the zero Jacobi field is excluded from the vanishing combination of 1.4 because its initial derivative would vanish; and in 1.4 the conjugacy argument uses the Gram determinant criterion in the direction "vanishing determinant implies dependence" only. The argument contains no biconditional: (a) and (b) are identities, and the only equivalence invoked, the conjugacy characterization of [F29], is used in the direction conjugacy $\Rightarrow c_p(v)\le t$. Assumption [F1] is inherited exactly through the declared suppliers that carry it (the completeness and exponential statements [F6, F7], the cut-locus nullity [F4], the density gluing and integration theorems [F13, F14, F15], the polar formula [F17], the countable-null-set statement [F24], and Tonelli [F31]); the only selections made in the proof are the single existential instantiation of an orthonormal basis in 1.2 and the choice of a chart at $p$ in 1.5, and the independence of $\sigma_p$ from the first of these is proved, not assumed. [F1, F2, F4, F6, F7, F9, F10, F11, F12, F13, F14, F15, F17, F24, F26, F29, F31, step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 2.1, step 3.1, step 4.1, given, cases]

$\square$

## Source locator

Datar, *Lectures on Riemannian Geometry*, Section 27.2, printed pp.200-202 (PDF labels P208-P210), display (27.1) and Lemma 27.2.1 with its proof, writes the volume element as $A(r,\vec\theta)\,dr\,d\sigma^{n-1}$ with $A=t^{n-1}\det(d\exp_p)_{t\vec\theta}$ and computes $\det G=t^{-2(n-1)}\det\langle J_i,J_j\rangle$, so that $A=|\dot\gamma\wedge J_2\wedge\cdots\wedge J_n|$; Sections 22.3 and 23.2-23.3, printed pp.163-172, supply the conjugate-point, cut-locus and exponential diffeomorphism statements. Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 10, printed pp.173-190, contains the corresponding Jacobi-field, conjugacy, exponential-differential and cut-locus material; Folland, *Real Analysis*, Theorem 2.49 and Proposition 2.23, gives the polar decomposition of Lebesgue measure and countable additivity of indefinite integrals. No source text is quoted; the argument above is routed through the published suppliers of this library.
