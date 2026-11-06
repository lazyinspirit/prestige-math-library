---
id: lem-r2-source-current-pairs-with-transverse-dual-cycle
kind: lemma
title: "A source-cycle current pairs with a transverse dual cycle by intersection number"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
dependency_level: 4
deps:
  - def-r2-compact-de-rham-current-of-a-source-cycle
  - def-r2-current-compatible-intersection-number
  - lem-r2-current-intersection-number-is-well-defined
  - lem-r2-normal-approximation-converges-to-source-current
  - lem-r2-transverse-complementary-cycles-have-finite-intersection
  - thm-poincare-duality-for-oriented-topological-manifolds
  - def-axiom-of-choice
  - lem-smooth-orientation-sign-is-the-local-integral-homology-multiplier
  - thm-local-homology-detects-interior-points-boundary-points-and-dimension
  - thm-universal-coefficient-theorem-for-homology-over-a-pid
  - def-fundamental-class-of-a-compact-oriented-manifold
  - def-relative-singular-homology
  - prop-relative-homology-is-functorial-for-maps-of-pairs
  - def-smooth-manifold
  - def-oriented-smooth-manifold-and-oriented-chart
  - def-embedded-smooth-submanifold-with-boundary
  - thm-boundary-submanifolds-of-a-boundaryless-manifold-have-half-slice-charts
  - thm-smooth-inverse-function-theorem-on-manifolds
  - thm-compact-subset-of-a-hausdorff-space-is-closed
dependency_roles:
  def-r2-compact-de-rham-current-of-a-source-cycle: mathematical-premise
  def-r2-current-compatible-intersection-number: mathematical-premise
  lem-r2-current-intersection-number-is-well-defined: mathematical-premise
  lem-r2-normal-approximation-converges-to-source-current: mathematical-premise
  lem-r2-transverse-complementary-cycles-have-finite-intersection: mathematical-premise
  thm-poincare-duality-for-oriented-topological-manifolds: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  lem-smooth-orientation-sign-is-the-local-integral-homology-multiplier: mathematical-premise
  thm-local-homology-detects-interior-points-boundary-points-and-dimension: mathematical-premise
  thm-universal-coefficient-theorem-for-homology-over-a-pid: mathematical-premise
  def-fundamental-class-of-a-compact-oriented-manifold: mathematical-premise
  def-relative-singular-homology: mathematical-premise
  prop-relative-homology-is-functorial-for-maps-of-pairs: mathematical-premise
  def-smooth-manifold: mathematical-premise
  def-oriented-smooth-manifold-and-oriented-chart: mathematical-premise
  def-embedded-smooth-submanifold-with-boundary: mathematical-premise
  thm-boundary-submanifolds-of-a-boundaryless-manifold-have-half-slice-charts: mathematical-premise
  thm-smooth-inverse-function-theorem-on-manifolds: mathematical-premise
  thm-compact-subset-of-a-hausdorff-space-is-closed: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  scraped: []
  references:
    - title: "Joel W. Robbin and Dietmar A. Salamon, Introduction to Differential Topology, §§4.3 and 7.2.3"
      url: "https://umutvg.github.io/difftop.pdf"
    - title: "Victor Guillemin and Peter J. Haine, Differential Forms, MIT 18.952 course book, §5.5"
      url: "https://math.mit.edu/classes/18.952/2018SP/files/18.952_book.pdf"
    - title: "Tien-Cuong Dinh and Nessim Sibony, Introduction to the Theory of Currents, §4.4"
      url: "https://people.math.harvard.edu/~demarco/Math274/DinhSibony_Introduction.pdf"
---

## Statement

Assume the Axiom of Choice. Let $X$ be a compact oriented smooth $n$-manifold without boundary, and let $C^p,D^{n-p}\subseteq X$ be compact oriented embedded smooth submanifolds without boundary that meet transversely. In positive dimension, an orientation is a smooth choice of a ray in each determinant line $\det(T_xM)$, and a chart is positive when its coordinate frame lies in that ray; in dimension zero the orientation is the supplied sign at each point, which the empty frame does not determine. For each $M\in\{C,X\}$, use positive charts in positive dimension and the point sign in dimension zero to determine integral local-homology generators; their images under $\mathbb Z\to\mathbb R$ are the real local orientations, and let $[M]_{\mathbb R}\in H_{\dim M}(M;\mathbb R)$ denote the fundamental class with those local restrictions. Let $i_C:C\hookrightarrow X$ be inclusion and set $[C]_X:=(i_C)_*[C]_{\mathbb R}\in H_p(X;\mathbb R)$. Topological Poincaré duality then supplies the unique class $u_C\in H^{n-p}(X;\mathbb R)$ with $u_C\cap[X]_{\mathbb R}=[C]_X$. The local current pairing below is defined separately by a normalized normal-coordinate regularization. If $\alpha_\epsilon$ is the regularization of $\delta_C$ constructed in [[lem-r2-normal-approximation-converges-to-source-current]], define
$$\langle\delta_C,D\rangle_{\mathrm{reg}}:=\lim_{\epsilon\downarrow0}\int_D\alpha_\epsilon.$$
Then this limit exists, is independent of the regularization choices, and equals $C\mathbin{\cdot_{\mathrm{cur}}}D$, the current-compatible signed intersection number of [[def-r2-current-compatible-intersection-number]]. In particular it is $1$ when the transverse intersection has current-compatible sign $+1$ at exactly one point and no other points.

## Statement references

[[lem-r2-normal-approximation-converges-to-source-current]]

[[def-r2-current-compatible-intersection-number]]

[[thm-poincare-duality-for-oriented-topological-manifolds]]

[[lem-smooth-orientation-sign-is-the-local-integral-homology-multiplier]]

[[thm-local-homology-detects-interior-points-boundary-points-and-dimension]]

[[thm-universal-coefficient-theorem-for-homology-over-a-pid]]

[[def-fundamental-class-of-a-compact-oriented-manifold]]

[[def-oriented-smooth-manifold-and-oriented-chart]]

[[def-relative-singular-homology]]

[[prop-relative-homology-is-functorial-for-maps-of-pairs]]

[[thm-boundary-submanifolds-of-a-boundaryless-manifold-have-half-slice-charts]]

## Facts & Assumptions

**Given:** The manifolds and orientations in the statement, the Axiom of Choice, and the normalized regularization family.

[A1] The Axiom of Choice is the statement that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]). It is included because the required topological Poincaré duality supplier states this hypothesis; the local current/intersection calculation itself is choice-free.

[F1] [[def-r2-compact-de-rham-current-of-a-source-cycle]] defines $\delta_C(\eta)=\int_C\eta$ and the smooth-form current convention $T_\alpha(\eta)=\int_X\alpha\wedge\eta$.

[F2] [[def-r2-current-compatible-intersection-number]] defines $C\cdot_{\mathrm{cur}}D=(-1)^{p(n-p)}\sum_x\sigma_x(C,D)$, where $\sigma_x$ compares the determinant-line image of the tensor orientation ray of $(T_xC,T_xD)$ with the ambient orientation ray.

[F3] [[lem-r2-current-intersection-number-is-well-defined]] proves the finite signed sum in [F2] is independent of positive tangent bases.

[F4] [[lem-r2-normal-approximation-converges-to-source-current]] constructs smooth normal-coordinate forms $\alpha_\epsilon$ with $\lim_{\epsilon\downarrow0}\int_X\alpha_\epsilon\wedge\eta=\int_C\eta$ for every test $p$-form. Its chart term includes the orientation factor $\kappa=\epsilon_X\epsilon_C$ when the ambient or tangential coordinate determinant generator is not positive, including the zero-dimensional point-sign cases.

[F5] [[lem-r2-transverse-complementary-cycles-have-finite-intersection]] proves $C\cap D$ is finite.

[F6] [[thm-poincare-duality-for-oriented-topological-manifolds]] states that, assuming AC, cap product with the compact orientation class gives the isomorphism $H^r(X;\mathbb R)\to H_{n-r}(X;\mathbb R)$; for compact $X$, compactly supported cohomology is ordinary cohomology.

[F7] [[thm-compact-subset-of-a-hausdorff-space-is-closed]] states that compact subsets of a Hausdorff space are closed and that two disjoint compact subsets of a Hausdorff space have disjoint open neighborhoods.

[F8] [[thm-smooth-inverse-function-theorem-on-manifolds]] states that a smooth map with invertible differential at a point is a diffeomorphism between suitable neighborhoods of that point and its image.

[F9] [[lem-smooth-orientation-sign-is-the-local-integral-homology-multiplier]] states that positive smooth charts determine a chart-independent integral local-homology generator in positive dimension, using a fixed Euclidean local generator in each dimension; in dimension zero the supplied point sign determines it.

[F10] [[thm-local-homology-detects-interior-points-boundary-points-and-dimension]] gives $H_m(M,M\setminus\{x\};\mathbb Z)\cong\mathbb Z$ and $H_{m-1}(M,M\setminus\{x\};\mathbb Z)=0$ at every point of a boundaryless $m$-manifold; for $m=0$, the negative-degree group is zero.

[F11] [[thm-universal-coefficient-theorem-for-homology-over-a-pid]] states, under AC, for a chain complex of free right modules over a PID $R$ and a left $R$-module $G$, the natural exact sequence $0\to H_m(C)\otimes_R G\to H_m(C\otimes_R G)\to\operatorname{Tor}^R_1(H_{m-1}(C),G)\to0$.

[F12] [[def-fundamental-class-of-a-compact-oriented-manifold]] defines the fundamental class of a compact boundaryless manifold with an $R$-orientation as the class in $H_m(M;R)$ whose local restrictions are the prescribed orientation generators.

[F13] [[def-relative-singular-homology]] uses quotient singular-chain complexes, and [[prop-relative-homology-is-functorial-for-maps-of-pairs]] sends a continuous map of pairs to its induced relative-homology map; for pairs $(M,\varnothing)$ this is the ordinary homology map.

[F14] [[thm-boundary-submanifolds-of-a-boundaryless-manifold-have-half-slice-charts]] supplies ordinary slice coordinates at interior points; every point of $C$ is interior because $\partial C=\varnothing$.

## Proof

**Given:** Put $q=n-p$. By [A1] the exact hypothesis of [F6] is available.

1.1 For $M=C$ and $M=X$, if $M$ is empty then [F12] gives its zero fundamental class and there are no local generators to extend. Otherwise [F9] identifies the integral local generator fixed by every positive smooth chart, or by the supplied point sign when $\dim M=0$. The relative singular chain groups $C_*(M,M\setminus\{x\};\mathbb Z)$ are free abelian, with basis the singular simplices not contained in $M\setminus\{x\}$; tensoring these basis groups with $\mathbb R$ gives the relative chain complex with real coefficients. Thus [F11] applies with PID $\mathbb Z$ and left coefficient module $\mathbb R$ under the usual integer action. By [F10], its tensor term is $\mathbb Z\otimes_{\mathbb Z}\mathbb R\cong\mathbb R$ and its Tor term is $\operatorname{Tor}^{\mathbb Z}_1(0,\mathbb R)=0$. Naturality of [F11] under chart restrictions makes the coefficient images of these local generators a continuous real local orientation. By [F12] this gives $[C]_{\mathbb R}\in H_p(C;\mathbb R)$ and $[X]_{\mathbb R}\in H_n(X;\mathbb R)$; applying [F13] to $(i_C,\varnothing):(C,\varnothing)\to(X,\varnothing)$ gives $[C]_X=(i_C)_*[C]_{\mathbb R}$. Now [F6], with the stated AC hypothesis and real coefficients, gives the unique $u_C\in H^{n-p}(X;\mathbb R)$ satisfying $u_C\cap[X]_{\mathbb R}=[C]_X$. This records topological duality only; no identification of current cohomology with singular cohomology is inferred. [A1, F6, F9, F10, F11, F12, F13, given, algebra]

1.2 By [F5], list the finite intersection as $C\cap D=\{x_1,\ldots,x_m\}$ and choose pairwise disjoint adapted neighborhoods $U_j$ of these points. The set $K=C\setminus\bigcup_jU_j$ is compact and disjoint from the compact set $D$. By [F7], $K$ and $D$ have disjoint open neighborhoods; together with $\bigcup_jU_j$ this gives an open neighborhood of all of $C$ whose part away from the $U_j$ misses $D$. Since the supports of $\alpha_\epsilon$ shrink to $C$ by [F4], for sufficiently small $\epsilon$ only the neighborhoods $U_j$ contribute, so $$\int_D\alpha_\epsilon=\sum_{j=1}^m\int_{D\cap U_j}\alpha_\epsilon.$$ The finite chart sum defining $\alpha_\epsilon$ can be evaluated termwise on these neighborhoods. [F4, F5, F7, given]

2.1 Fix $x_j$. A chart term from [F4] whose base support omits $x_j$ vanishes near it; for every term whose base support contains $x_j$, [F14] gives ordinary slice coordinates $(u_a,v_a)$ with $C=\{v_a=0\}$ near $x_j$, and choose local coordinates $s_a$ on $D$. Terms with $\chi_a(x_j)=0$ are included in the calculation below and have zero local limit. Let $\epsilon_{C,a},\epsilon_{D,a},\epsilon_{X,a}\in\{+1,-1\}$ be the signs of the $u_a$, $s_a$, and $(u_a,v_a)$ coordinate determinant generators relative to the orientations of $C,D,X$, respectively, using point signs for zero-dimensional factors. Put $\gamma_a=\operatorname{sgn}\det D_{s_a}(v_a|_D)$ and set the determinant of a $0\times0$ matrix equal to $1$. The differential of $v_a|_D$ is injective because its kernel is $T_{x_j}C\cap T_{x_j}D=\{0\}$; source and target both have dimension $q$, so it is an isomorphism by transversality. By [F8], $v_a|_D$ is a local diffeomorphism, so it supplies coordinates on $D$ near $x_j$. The block matrix for the addition map $T_{x_j}C\oplus T_{x_j}D\to T_{x_j}X$ is $$\begin{pmatrix}I&*\\0&D_{s_a}(v_a|_D)\end{pmatrix},$$ so the determinant-line definition [F2] gives $\sigma_{x_j}(C,D)=\epsilon_{C,a}\epsilon_{D,a}\epsilon_{X,a}\gamma_a$. The normal factor in [F4] is $\kappa_a=\epsilon_{X,a}\epsilon_{C,a}$, and pulling $dv_a^1\wedge\cdots\wedge dv_a^q$ back to the oriented $D$ chart contributes $\epsilon_{D,a}\gamma_a$. Changing variables $v_a=\epsilon z$ cancels the absolute determinant and gives local limit $(-1)^{pq}\kappa_a\epsilon_{D,a}\gamma_a\chi_a(x_j)\int_{\mathbb R^q}\rho(z)\,dz=(-1)^{pq}\sigma_{x_j}(C,D)\chi_a(x_j)$. The normalized bump has integral $1$, and $\sum_a\chi_a(x_j)=1$, so summing all chart terms gives $(-1)^{pq}\sigma_{x_j}(C,D)$ at this point. The factor $(-1)^{pq}$ comes from the current convention $T_\alpha(\eta)=\int_X\alpha\wedge\eta$ in [F1]. [F1, F2, F4, F5, F8, F14, step 1.2, algebra]

3.1 Summing the finitely many local limits in step 2.1 gives $$\lim_{\epsilon\downarrow0}\int_D\alpha_\epsilon=(-1)^{pq}\sum_{x\in C\cap D}\sigma_x(C,D)=C\mathbin{\cdot_{\mathrm{cur}}}D$$ by [F2]. The normalized partition on $C$ sums to one at every intersection, and every normal bump has integral one, so changing charts, cutoffs, or normalized bumps leaves the same sum. This proves existence and independence of the regularized pairing. If there is exactly one current-positively oriented intersection, the sum is $1$. [F2, F3, step 2.1, algebra] ∎

## Statement references

[[def-r2-current-compatible-intersection-number]]

[[lem-r2-normal-approximation-converges-to-source-current]]

[[thm-poincare-duality-for-oriented-topological-manifolds]]

[[thm-smooth-inverse-function-theorem-on-manifolds]]

[[thm-compact-subset-of-a-hausdorff-space-is-closed]]

## Remarks

For the common C-first geometric convention, the regularized current pairing is $(-1)^{p(n-p)}$ times that signed intersection. In particular, for two three-cycles the sign is reversed. The local argument proves the distributional pairing directly; it does not claim that the regularizing forms are closed representatives of a Thom cohomology class.

