---
id: def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface
kind: definition
title: "Hermitian metric and $L^2$ pairing on a compact Riemann surface"
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 1
deps:
  - def-borel-measurable-nonnegative-density-on-a-manifold
  - def-complex-l-two-inner-product
  - def-complex-lp-and-euclidean-test-function-conventions
  - def-countable-choice
  - def-dual-and-hom-vector-bundles
  - def-hilbert-space
  - def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface
  - def-integral-of-a-compactly-supported-smooth-density
  - def-oriented-smooth-manifold-and-oriented-chart
  - def-pointwise-norm-and-angle-from-a-riemannian-metric
  - def-riemannian-hodge-star
  - def-riemannian-metric-and-riemannian-manifold
  - def-riemannian-volume-density
  - def-riemannian-volume-of-a-compactly-supported-smooth-density
  - def-smooth-bundle-metric
  - def-smooth-partition-of-unity-subordinate-to-an-open-cover
  - def-tangent-bundle-as-a-disjoint-union
  - lem-complex-lp-completeness-density-and-inner-product
  - lem-the-riemannian-volume-density-is-coordinate-independent
  - prop-hodge-star-squared-sign
  - prop-riemannian-metrics-induce-metrics-on-dual-tensor-and-exterior-bundles
  - prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density
  - thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure
  - thm-change-of-coordinate-formula-for-tangent-bases
  - thm-completion-of-an-inner-product-space-is-hilbert
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann
  - thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz
  - thm-every-smooth-manifold-admits-a-riemannian-metric
  - thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric
  - thm-hodge-star-is-a-smooth-bundle-isomorphism
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
  - thm-smooth-partitions-of-unity-exist-on-manifolds
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry (author manuscript, Universite Grenoble Alpes)"
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Ch. VI §3.1, (3.1)–(3.6), printed pp. 291–292: determinant-normalized exterior metric, the complex-linear scalar star, and the conjugate-linear bundle-valued # map into E*; Ch. VI §4, (4.1)–(4.2), printed pp. 296–297: Hermitian metrics and the volume form"
    - title: "Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)"
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 3 §4, Properties 3.25 and Proposition 3.28, printed pp. 36–38: the conjugate-linear Hodge map on complex 1-forms and the first-variable-linear Hodge pairing"
    - title: "Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)"
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 6, printed pp. 59–60: the real Hodge star on 1-forms and the Hodge norm on a compact Riemann surface"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Definition

Let $X$ be a compact Riemann surface and $E\to X$ a holomorphic line bundle ([[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]]). Its complex structure $J:TX\to TX$ is defined in a holomorphic coordinate $z=x+iy$ by $J\partial_x=\partial_y$ and $J\partial_y=-\partial_x$. The complex orientation is the orientation for which $dx\wedge dy$ is positive. The complexified cotangent bundle splits into the $i$ and $-i$ eigenspaces of $J^*$:
$$T^*X\otimes_{\mathbb R}\mathbb C=\Lambda^{1,0}T^*X\oplus\Lambda^{0,1}T^*X.$$
The type $(p,q)$ of a form records its holomorphic and antiholomorphic factors; on a curve $q=0,1$ for $(0,q)$-forms.

A Riemannian metric $g$ is **compatible** with $J$ when $g(Jv,Jw)=g(v,w)$. In every holomorphic coordinate this is equivalent to
$$g=\rho\,(dx^2+dy^2),\qquad \rho>0,$$
and such metrics exist: if $g_0$ is any Riemannian metric, then $g(v,w)=\tfrac12(g_0(v,w)+g_0(Jv,Jw))$ is compatible. The two type summands of complexified one-forms are orthogonal. The oriented Riemannian volume form and its associated density are, respectively,
$$dV_g=\rho\,dx\wedge dy=\frac{i\rho}{2}\,dz\wedge d\bar z,\qquad \mu_g=\rho\,|dx\,dy|.$$

A **Hermitian metric** $h$ on $E$ is a smooth positive-definite Hermitian form on each fibre, complex-linear in the first argument and conjugate-linear in the second. Such a metric exists: average a smooth real bundle metric $b$ by the fibre complex structure $J_Ev:=iv$ to make it $J_E$-invariant, and set $h(v,w)=b(v,w)-i b(J_Ev,w)$. In a holomorphic frame $e$, its weight is the smooth positive function $\psi=h(e,e)$. Equip the complex-linear dual $E^*$ with the dual Hermitian metric, so $h^*(e^*,e^*)=\psi^{-1}$.

For $q=0,1$, the bundles $\Lambda^{0,q}T^*X\otimes E$ carry the pointwise Hermitian pairing induced by $g$ on forms and $h$ on $E$, still linear in the first argument. Write $(\alpha,\beta)_{\mathbb C}$ for the complex-bilinear extension of the real exterior metric. The scalar Hodge star $\star$ is the real Hodge star of [[def-riemannian-hodge-star]], extended $\mathbb C$-linearly; it satisfies $\alpha\wedge\star\beta=(\alpha,\beta)_{\mathbb C}dV_g$ and $\star^2=(-1)^{k(2-k)}$ on complex $k$-forms ([[thm-hodge-star-is-a-smooth-bundle-isomorphism]], [[prop-hodge-star-squared-sign]]).

The **bundle-valued Hodge map**
$$\star_F:C^\infty(X,\Lambda^kT^*X\otimes F)\longrightarrow C^\infty(X,\Lambda^{2-k}T^*X\otimes F^*)$$
for a Hermitian line bundle $F$ is the unique conjugate-linear map satisfying
$$s\wedge\star_Ft=\langle s,t\rangle\,dV_g,$$
where the $F$-factor is paired with $F^*$ by evaluation. On $(0,q)$-forms it has the type-correct target $\Lambda^{1,1-q}T^*X\otimes F^*$. In a holomorphic coordinate and frame with $h(e,e)=\psi$,
$$\star_E(f e)=\frac{i\rho\psi}{2}\,\bar f\,dz\wedge d\bar z\otimes e^*,\qquad \star_E(u\,d\bar z\otimes e)=-i\psi\bar u\,dz\otimes e^*.$$
For $q=1$, $\star_E$ is an isomorphism from $\Lambda^{0,1}T^*X\otimes E$ to $K\otimes E^*$ and $\star_E^{-1}=-\star_{E^*}$ on that target. With the flat metric $dx^2+dy^2$ and trivial weight, $\star_E(u\,d\bar z\otimes e)=-i\bar u\,dz\otimes e^*$.

For smooth compactly supported $E$-valued $(0,q)$-forms $s,t$, define
$$\langle s,t\rangle_{L^2}:=\int_X\langle s,t\rangle\,dV_g.$$
The integral is the density integral of the corresponding complex-valued density, computed on real and imaginary parts. This is the complex $L^2$ pairing in the library's first-variable-linear convention ([[def-complex-l-two-inner-product]], [[def-complex-lp-and-euclidean-test-function-conventions]]). Its completion is denoted $L^2(X,\Lambda^{0,q}T^*X\otimes E)$; the compactly supported smooth forms are dense there, and the completion is a complex Hilbert space.

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). It is used only through the declared interfaces for existence of Riemannian and bundle metrics, partitions and density integration, Euclidean smooth $L^2$-density, and the Hilbert completion; this item uses no full Axiom of Choice.

## Facts & Assumptions

**Given:** A compact connected Riemann surface $X$, its holomorphic line bundle $E$, compatible metrics $g$ and $h$, and $\mathrm{AC}_\omega$.

[F1] Holomorphic coordinate changes have complex-linear derivative, nonzero real determinant, and the tangent coordinate bases transform by the chain rule. The holomorphic charts give the connected smooth surface and the complex line-bundle data ([[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]], [[def-tangent-bundle-as-a-disjoint-union]], [[thm-change-of-coordinate-formula-for-tangent-bases]], [[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]]).

[F2] Under countable choice every smooth manifold admits a Riemannian metric and every smooth vector bundle admits a smooth bundle metric; smooth partitions of unity exist under the same assumption ([[thm-every-smooth-manifold-admits-a-riemannian-metric]], [[thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric]], [[def-smooth-bundle-metric]], [[def-smooth-partition-of-unity-subordinate-to-an-open-cover]], [[thm-smooth-partitions-of-unity-exist-on-manifolds]]).

[F3] The induced metric on exterior powers is determinant-normalized, so for $g=\rho(dx^2+dy^2)$ one has $\langle dz,dz\rangle_g=\langle d\bar z,d\bar z\rangle_g=2/\rho$ and $\langle dz,d\bar z\rangle_g=0$. The real Hodge star is characterized by its wedge identity and has square sign $(-1)^{k(2-k)}$ ([[def-pointwise-norm-and-angle-from-a-riemannian-metric]], [[def-riemannian-hodge-star]], [[prop-riemannian-metrics-induce-metrics-on-dual-tensor-and-exterior-bundles]], [[thm-hodge-star-is-a-smooth-bundle-isomorphism]], [[prop-hodge-star-squared-sign]]).

[F4] The Riemannian volume density is coordinate-independent; under the complex orientation its local volume form is $dV_g=\rho dx\wedge dy$. Its smooth density integral is the integral for a locally finite Radon measure ([[def-borel-measurable-nonnegative-density-on-a-manifold]], [[def-integral-of-a-compactly-supported-smooth-density]], [[def-oriented-smooth-manifold-and-oriented-chart]], [[def-riemannian-metric-and-riemannian-manifold]], [[def-riemannian-volume-density]], [[def-riemannian-volume-of-a-compactly-supported-smooth-density]], [[lem-the-riemannian-volume-density-is-coordinate-independent]], [[prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density]], [[thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure]]).

[F5] The complex $L^2$ pairing is linear in the first variable, obeys Cauchy–Schwarz, and agrees with $\int f\bar g$ in local scalar coefficients. Under countable choice, Euclidean smooth compact-support functions are dense in $L^2$, and the completion of an inner-product space is Hilbert ([[def-complex-l-two-inner-product]], [[def-complex-lp-and-euclidean-test-function-conventions]], [[lem-complex-lp-completeness-density-and-inner-product]], [[def-hilbert-space]], [[thm-completion-of-an-inner-product-space-is-hilbert]], [[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]]).

[F6] The complex-linear dual $E^*$ is defined fibrewise; its metric in the dual frame satisfies $h^*(e^*,e^*)=\psi^{-1}$ ([[def-dual-and-hom-vector-bundles]]).

[F7] Every finite-dimensional Hermitian space satisfies Cauchy–Schwarz ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

[F8] A compact set inside an open set admits a smooth cutoff equal to one near the compact set and supported in the open set ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

## Proof

**Proof technique:** direct local calculation and completion.

1.1 If $z_j=\phi(z_i)$ is a holomorphic change of coordinate, its real Jacobian is multiplication by the complex derivative $\phi'$, so it commutes with multiplication by $i$ and has determinant $|\phi'|^2>0$. Thus the local rotations defining $J$ agree on overlaps and the charts orient $X$ consistently. The complexified cotangent eigenbundles are consequently well-defined, with $\Lambda^{0,1}T^*X=\overline K$ and $\Lambda^{0,0}T^*X$ trivial. [F1, given]

1.2 By [F2] choose a Riemannian metric $g_0$ and average it with $J$; the result is positive and satisfies $g(Jv,Jw)=g(v,w)$. In a chart, writing $g=a\,dx^2+2b\,dx\,dy+c\,dy^2$, this identity gives $a=c$ and $b=0$, hence $g=\rho(dx^2+dy^2)$ with $\rho=a>0$. Its determinant is $\rho^2$, so the Riemannian density and complex-oriented volume form have the displayed local formulas. The determinant metric on covectors makes $dz,d\bar z$ orthogonal with squared norms $2/\rho$, establishing the type orthogonality. [F2, F3, F4, given, algebra]

1.3 By [F2] the underlying real bundle of $E$ has a smooth positive real fibre metric $b$. Its average $b_J(v,w)=\tfrac12(b(v,w)+b(J_Ev,J_Ew))$ is smooth, positive and $J_E$-invariant. Invariance makes $J_E$ orthogonal and skew-adjoint, so $b_J(J_Ev,v)=0$; direct substitution then shows that $h(v,w)=b_J(v,w)-i b_J(J_Ev,w)$ is complex-linear in $v$, conjugate-linear in $w$, Hermitian, and satisfies $h(v,v)=b_J(v,v)>0$ for $v\ne0$. Hence it is a smooth Hermitian bundle metric, and a holomorphic frame has smooth positive weight $\psi$. [F1, F2, given, algebra]

1.4 In a local frame the Hermitian dual identification sends $e$ to $\psi e^*$. Combining it with the conjugate-linear metric star on complex forms gives the two displayed local formulas for $\star_E$. For $q=0$, $f e\wedge\star_E(g e)=\psi f\bar g\,dV_g$. For $q=1$, $d\bar z\wedge dz=2i\,dx\wedge dy$ and $\langle d\bar z,d\bar z\rangle_g=2/\rho$, so $f d\bar z\otimes e\wedge\star_E(u d\bar z\otimes e)= (2\psi f\bar u)dx\wedge dy=\langle f d\bar z\otimes e,u d\bar z\otimes e\rangle dV_g$. The defining pairing is nondegenerate, so these formulas determine a unique global conjugate-linear map with target bidegree $(1,1-q)$. For $a\,dz\otimes e^*$, the same calculation gives $\star_{E^*}(a\,dz\otimes e^*)=i\psi^{-1}\bar a\,d\bar z\otimes e^{**}$; hence $\star_{E^*}\star_E=-1$ on $(0,1)$-forms and $\star_E^{-1}=-\star_{E^*}$. [F3, F6, given, algebra]

2.1 For compactly supported smooth $s,t$, the pointwise pairing is smooth and the volume density is positive and smooth, so its integral is finite; linearity and conjugate symmetry follow pointwise and from the integral. If $s\ne0$, its pointwise squared norm is positive on a neighborhood of a point where $s$ is nonzero, so the integral is strictly positive. The defining equation for $\star_E$ yields $\langle s,t\rangle_{L^2}=\int_Xs\wedge\star_Et$. Pointwise Cauchy–Schwarz [F7] gives $|\langle s,t\rangle|\le |s||t|$, and scalar $L^2$ Cauchy–Schwarz [F5] then gives $|\langle s,t\rangle_{L^2}|\le\|s\|_{L^2}\|t\|_{L^2}$. [F4, F5, F7, step 1.4, given]

3.1 Choose a finite holomorphic-chart/frame cover and a subordinate smooth partition $(\chi_j)$. For a measurable square-integrable section $s$, each $\chi_js$ has compact support $K_j\subset U_j$. In the chart, its coefficient extended by zero lies in Euclidean $L^2$. By [F8], choose a cutoff $\eta_j$ supported in $U_j$ and equal to one near $K_j$. On the compact support of $\eta_j$, the smooth positive metric and volume weights are bounded above and below. Approximate the coefficient by Euclidean $C_c^\infty$ functions from [F5], multiply those approximants by $\eta_j$, convert them back to sections, and extend by zero; the norm equivalence on $\operatorname{supp}(\eta_j)$ makes the resulting sections converge to $\chi_js$. Summing over the finite cover proves density of compactly supported smooth sections in the measurable realization. The countable-choice completion interface in [F5] makes the completion a complex Hilbert space. The only choice assumption is $\mathrm{AC}_\omega$ through the metric, partition, density-integral and completion suppliers listed in [F2], [F4], and [F5]. [F2, F4, F5, F8, step 2.1]

4.1 The completion of the dense inner-product space is the stated $L^2$ Hilbert space, and its norm is the completion of the bundle norm. The smooth compactly supported forms are dense by construction and by step 3.1, so the two descriptions agree. [F5, step 3.1] ∎
