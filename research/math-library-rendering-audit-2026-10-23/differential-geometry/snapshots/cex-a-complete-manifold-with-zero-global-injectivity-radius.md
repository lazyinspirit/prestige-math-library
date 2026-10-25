---
id: cex-a-complete-manifold-with-zero-global-injectivity-radius
kind: counterexample
title: A complete manifold with zero global injectivity radius
status: published
origin: pipeline
pipeline_run: phase-2-next-17
deps:
  - def-countable-choice
  - def-circle-as-real-line-mod-integers
  - prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure
  - prop-coordinate-criterion-for-a-riemannian-metric
  - thm-derivative-of-exponential
  - thm-exponential-limits-and-range
  - prop-real-line-mod-integers-is-compact-and-path-connected
  - thm-path-connected-implies-connected
  - cor-connected-subsets-of-the-line
  - thm-product-of-connected-spaces
  - thm-fundamental-theorem-of-riemannian-geometry
  - thm-existence-uniqueness-and-smooth-dependence-of-geodesics
  - def-geodesically-complete-riemannian-manifold
  - prop-geodesics-have-constant-speed-for-a-metric-compatible-connection
  - cor-mean-value-theorem
  - thm-heine-borel-rn
  - thm-compactness-under-continuous-maps
  - lem-geodesics-can-be-continued-while-their-velocity-lifts-remain-in-a-compact-subset
  - thm-hopf-rinow
  - def-riemannian-speed-and-length
  - def-riemannian-distance-on-a-connected-manifold
  - def-injectivity-radius-at-a-point-and-of-a-manifold
  - cor-local-formula-for-distance-from-the-center-of-a-normal-neighborhood
  - def-standard-integer-loops-in-the-circle
  - thm-fundamental-group-of-the-circle
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Bruno Martelli, Hyperbolic Geometry, Chapter 3 Section 2.2, Example 2.5 and Proposition 2.6, printed pages 58--59
      url: https://people.dm.unipi.it/martelli/didattica/matematica/2014/Hyperbolic_geometry.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: explicit cusp and contradiction
---

## Statement refuted

Completeness does not force a positive global injectivity radius. Assume
$\mathrm{AC}_\omega$, put
$$M=(\mathbb R/\mathbb Z)\times\mathbb R,$$
and, in the period-one coordinate $\theta$ and the real coordinate $u$, give
$M$ the cusp metric
$$g=4\pi^2e^{-2u}\,d\theta^2+du^2.$$
Equivalently, in the angular coordinate $\phi=2\pi\theta$, this is
$g=e^{-2u}d\phi^2+du^2$. The resulting connected boundaryless hyperbolic
surface is geodesically and metrically complete, but
$$\operatorname{inj}(M)=0.$$
More precisely, for $p_u=([0],u)$ one has
$$0<\operatorname{inj}(p_u)\leq\pi e^{-u},$$
so the positive pointwise radii have infimum zero.

## Facts & Assumptions

**Given:** The quotient circle, product, metric, and points displayed in the statement.

[A1] [[def-countable-choice]] is the assumed $\mathrm{AC}_\omega$.

[F1] [[def-circle-as-real-line-mod-integers]] gives the quotient map $q:\mathbb R\to\mathbb R/\mathbb Z$. It is open because $q^{-1}q(U)=\bigcup_{m\in\mathbb Z}(U+m)$ for open $U$. On any interval of length less than one it is injective, so its restriction is a quotient chart; overlaps differ by integer translations with derivative one. Distinct orbits have disjoint sufficiently small chart intervals, and images of rational intervals form a countable basis. Thus these charts give the quotient circle a smooth boundaryless structure and the local tensor $d\theta^2$ agrees on all overlaps.

[F2] [[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]] supplies the product smooth structure.

[F3] [[prop-coordinate-criterion-for-a-riemannian-metric]] reduces the metric check to its coordinate matrix.

[F4] The exponential is smooth by [[thm-derivative-of-exponential]].

[F5] [[thm-exponential-limits-and-range]] supplies positivity of the exponential and the limit $e^{-u}\to0$ as $u\to+\infty$ by applying its negative-infinity limit to $-u$.

[F6] [[prop-real-line-mod-integers-is-compact-and-path-connected]] makes $\mathbb R/\mathbb Z$ path connected.

[F7] [[thm-path-connected-implies-connected]] makes every path-connected space connected.

[F8] The real line is connected by [[cor-connected-subsets-of-the-line]].

[F9] [[thm-product-of-connected-spaces]] preserves connectedness.

[F10] [[thm-fundamental-theorem-of-riemannian-geometry]] supplies the metric-compatible Levi--Civita connection.

[F11] Under [A1], [[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]] supplies the unique maximal geodesic for every initial vector.

[F12] Under [A1], [[def-geodesically-complete-riemannian-manifold]] gives the all-real maximal-domain criterion.

[F13] [[prop-geodesics-have-constant-speed-for-a-metric-compatible-connection]] makes the speed of each geodesic constant.

[F14] [[cor-mean-value-theorem]] turns a derivative bound on $u$ into a finite-time position bound.

[F15] [[thm-heine-borel-rn]] makes each closed box in $\mathbb R^4$ compact.

[F16] [[thm-compactness-under-continuous-maps]] preserves compactness under a continuous image.

[F17] Under [A1], [[lem-geodesics-can-be-continued-while-their-velocity-lifts-remain-in-a-compact-subset]] extends a geodesic past either finite maximal endpoint when its velocity lift stays in a compact subset of $TM$ on the corresponding tail.

[F18] Under [A1], [[thm-hopf-rinow]] says that a nonempty connected boundaryless Riemannian manifold is metrically complete once it is geodesically complete. It then supplies, from $p$ to every $q$, a vector $v$ with $\exp_p(v)=q$ and $|v|=d_g(p,q)$.

[F19] [[def-riemannian-speed-and-length]] computes curve lengths from speeds.

[F20] [[def-riemannian-distance-on-a-connected-manifold]] makes $d_g(p,q)$ no larger than the length of any piecewise $C^1$ curve from $p$ to $q$.

[F21] Under [A1], [[def-injectivity-radius-at-a-point-and-of-a-manifold]] defines the admissible radii $\mathcal R_p$, their positive pointwise supremum, and the global infimum.

[F22] For an admissible $\rho$, [[cor-local-formula-for-distance-from-the-center-of-a-normal-neighborhood]] gives $d_g(p,\exp_pv)=|v|$ for $|v|<\rho$.

[F23] [[def-standard-integer-loops-in-the-circle]] defines $\omega_1(s)=[s]$, and [[thm-fundamental-group-of-the-circle]] sends its class to $1$ under the displayed isomorphism with $\mathbb Z$; hence $\omega_1$ is not based-null-homotopic.

## Counterexample

**Proof technique:** explicit cusp and contradiction.

1.1 Periodic coordinate changes have the form $\theta\mapsto\theta+k$ and derivative one, so the displayed tensor is globally well defined. In every product chart its matrix is $\operatorname{diag}(4\pi^2e^{-2u},1)$, which is smooth, symmetric, and positive definite by [F1]--[F5]. Thus $M$ is a nonempty boundaryless Riemannian two-manifold. Moreover, with $x=2\pi\theta$ and $y=e^u$, one has $$\frac{dx^2+dy^2}{y^2}=4\pi^2e^{-2u}d\theta^2+du^2.$$ Hence this metric is the quotient of the upper-half-plane hyperbolic metric by the translation $x\mapsto x+2\pi$, so it is the complete-cusp candidate asserted in the statement; completeness itself is proved below, not inferred from the quotient picture. [F1, F2, F3, F4, F5, algebra]

1.2 The circle is connected by [F6] and [F7], the real line is connected by [F8], and their product $M$ is connected by [F9]. [F6, F7, F8, F9]

1.3 Let $\gamma:(a,b)\to M$ be any maximal geodesic, supplied by [F10] and [F11]. The periodic coordinate vector $\partial_\theta$ and $\partial_u$ form a global frame, because the quotient-coordinate transitions are translations. Write $$\gamma'(t)=\alpha(t)\partial_\theta+\beta(t)\partial_u,\qquad \beta(t)=u'(t).$$ By [F13] its speed is a constant $c\geq0$, and therefore $$c^2=4\pi^2e^{-2u(t)}\alpha(t)^2+\beta(t)^2.$$ In particular $|u'(t)|\leq c$ and $|\alpha(t)|\leq ce^{u(t)}/(2\pi)$. [F1, F10, F11, F13, algebra]

1.4 Fix $u\in\mathbb R$ and let $p=p_u$. The based loop $$\ell_u(s)=([s],u),\qquad 0\leq s\leq1,$$ has constant speed $2\pi e^{-u}$ and hence length $L_u=2\pi e^{-u}$ by [F19]. Its projection to the first factor is the standard degree-one loop. If $\ell_u$ were based-null-homotopic in $M$, composing such a homotopy with that projection would make the degree-one loop null-homotopic in $\mathbb R/\mathbb Z$, contrary to [F23]. Thus $\ell_u$ is not null-homotopic. [F19, F23, algebra]

2.1 Suppose $b<+\infty$ and fix $t_0\in(a,b)$. Put $D=b-t_0$, $A=u(t_0)-cD$, $B=u(t_0)+cD$, and $V=ce^B/(2\pi)$. The mean-value theorem [F14] and step 1.3 give $$A\leq u(t)\leq B,\qquad |\alpha(t)|\leq V,\qquad |\beta(t)|\leq c\quad(t_0<t<b).$$ The closed box $Q=[0,1]\times[A,B]\times[-V,V]\times[-c,c]$ is compact by [F15]. The map $$\Psi(s,r,\xi,\eta)=\xi\partial_\theta|_{([s],r)}+\eta\partial_u|_{([s],r)}$$ from $Q$ to $TM$ is smooth and hence continuous, so $K=\Psi[Q]$ is compact by [F16]. The displayed bounds put the velocity lift $(\gamma(t),\gamma'(t))$ in $K$ for every $t_0<t<b$. The right-endpoint clause of [F17] extends $\gamma$ past $b$, contradicting maximality. Thus $b=+\infty$. [F14, F15, F16, F17, step 1.3, assume-contra, discharge-contradiction]

2.2 For $q=\ell_u(s)$, the forward subarc has length $sL_u$, while the reverse of the subarc from $s$ to $1$ has length $(1-s)L_u$. The length and distance definitions [F19] and [F20] therefore give $$d_g(p,q)\leq L_u\min\{s,1-s\}\leq\frac{L_u}{2}=\pi e^{-u}.$$ Thus the whole loop lies in the closed metric ball of radius $L_u/2$ about $p$. [F19, F20, step 1.4]

3.1 If $a>-\infty$, fix $t_0\in(a,b)$ and repeat step 2.1 with $D=t_0-a$ on the tail $a<t<t_0$. The same compact-box argument and the left-endpoint clause of [F17] extend $\gamma$ past $a$, again contradicting maximality. Hence $a=-\infty$. Since the maximal geodesic was arbitrary, every maximal domain is $\mathbb R$, and [F12] makes $(M,g)$ geodesically complete. This also includes $c=0$: then the box has $V=c=0$ and the geodesic is stationary. [F12, F17, step 1.3, step 2.1, assume-contra, discharge-contradiction]

4.1 Steps 1.1, 1.2, and 3.1 verify the nonempty, connected, boundaryless, and geodesically complete hypotheses of [F18]. Hopf--Rinow therefore proves that $(M,d_g)$ is complete and supplies a minimizing radial geodesic between every two points. [A1, F18, step 1.1, step 1.2, step 3.1]

5.1 Suppose for contradiction that $\operatorname{inj}(p)>L_u/2$. By the supremum convention in [F21], there is $\rho\in\mathcal R_p$ with $\rho>L_u/2$. Put $U=\exp_p(B_\rho(0_p))$; the definition of $\mathcal R_p$ makes $\exp_p:B_\rho(0_p)\to U$ a diffeomorphism. The local distance formula [F22] gives $U\subseteq B_{d_g}(p,\rho)$. Conversely, if $q\in B_{d_g}(p,\rho)$, the minimizing-vector conclusion of [F18] supplies one $v\in T_pM$ with $\exp_p(v)=q$ and $|v|=d_g(p,q)<\rho$, so $q\in U$. Hence $$U=B_{d_g}(p,\rho).$$ This is a pointwise existential use of Hopf--Rinow, not a simultaneous choice of vectors. [F18, F21, F22, step 4.1, assume-contra]

6.1 By step 2.2 and $L_u/2<\rho$, the image of $\ell_u$ lies in $U$. Since $B_\rho(0_p)$ is star-shaped and $\exp_p$ is a diffeomorphism there, $$H(s,t)=\exp_p\!\left((1-t)\exp_p^{-1}(\ell_u(s))\right)$$ is well defined in $U$. It equals $\ell_u$ at $t=0$. At $t=1$ its argument is $0_p$, so its value is $p$. Moreover, if $v=\exp_p^{-1}(p)$, then [F22] gives $|v|=d_g(p,p)=0$, hence $v=0_p$; because $\ell_u(0)=\ell_u(1)=p$, the same calculation keeps $s=0,1$ fixed at $p$ throughout the homotopy. Thus $H$ is a based null-homotopy of $\ell_u$ in $U$, contradicting step 1.4. Therefore $$\operatorname{inj}(p_u)\leq\frac{L_u}{2}=\pi e^{-u}.$$ [F22, step 1.4, step 2.2, step 5.1, discharge-contradiction]

7.1 Pointwise injectivity radii are positive by [F21], while their global infimum is nonnegative and no larger than any $\operatorname{inj}(p_u)$. Since $e^{-u}\to0$ as $u\to+\infty$ by [F5], step 6.1 gives $$0\leq\operatorname{inj}(M)\leq\inf_{u\in\mathbb R}\pi e^{-u}=0.$$ Thus $\operatorname{inj}(M)=0$, although $(M,d_g)$ is complete by step 4.1. [F5, F21, step 4.1, step 6.1]

8.1 This witness is explicitly nonempty and two-dimensional, so empty-, zero-dimensional-, and one-dimensional-manifold variants are not being asserted. The numerical zero case is the proved global infimum in step 7.1, not a zero pointwise radius. Zero-speed geodesics were retained in step 3.1, both finite maximal endpoints were excluded in steps 2.1 and 3.1, and both endpoints of the loop and its based homotopy were checked in steps 1.4 and 6.1. Assumption [A1] is used only through maximal-geodesic existence [F11], the current geodesic-completeness convention [F12], compact-lift continuation [F17], Hopf--Rinow [F18], and the injectivity-radius and local-normal-distance interfaces [F21] and [F22]. The metric, compact-box, loop-length, noncontractibility, and infimum calculations make no further choices. This is a counterexample, not an iff assertion. [A1, F11, F12, F17, F18, F21, F22, step 2.1, step 3.1, step 1.4, step 6.1, step 7.1] ∎

## Source qualification

Martelli, Chapter 3, Section 2.2, Remark 2.3, Example 2.5, and Proposition 2.6, printed pp. 58--59 (PDF pp. 64--65), gives the quotient-cusp model, the tensor $e^{-2u}g_{S^1}+du^2$, the assertion that the full cusp is complete, and the parabolic-displacement proof that its global injectivity radius is zero. The text prints $e^{-2u}$ as the **length** of the horizontal circle immediately after displaying $e^{-2u}$ as its metric coefficient; those two statements are inconsistent. The length scale forced by the displayed tensor is $e^{-u}$, and the period-$2\pi$ circumference is the locally calculated $2\pi e^{-u}$ in step 1.4. The source also does not prove completeness at Example 2.5. Steps 1.3, 2.1, 3.1, and 4.1 therefore supply the full compact-velocity-lift proof, and steps 1.4, 2.2, and 5.1--7.1 replace the source's quotient-displacement shortcut by the explicit shrinking noncontractible loop and normal-ball contradiction.
