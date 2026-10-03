---
id: prop-round-sphere-model-geometry
kind: proposition
title: Round sphere model geometry
status: published
origin: pipeline
deps:
  - def-countable-choice
  - thm-a-regular-level-set-is-an-embedded-submanifold
  - prop-tangent-space-of-a-regular-level-set-is-the-kernel
  - prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions
  - def-riemannian-metric-and-riemannian-manifold
  - thm-fundamental-theorem-of-riemannian-geometry
  - prop-coordinate-formula-for-the-lie-bracket
  - thm-clairaut-schwarz-mixed-partials
  - def-affine-connection-on-a-smooth-manifold
  - prop-connection-laws-in-directional-form
  - thm-existence-uniqueness-and-smooth-dependence-of-geodesics
  - prop-affine-reparametrization-of-a-geodesic-is-a-geodesic
  - prop-geodesics-have-constant-speed-for-a-metric-compatible-connection
  - def-geodesic-of-an-affine-connection
  - thm-hopf-rinow
  - thm-a-length-minimizing-piecewise-smooth-curve-is-a-constant-speed-geodesic-up-to-reparametrization
  - def-riemannian-distance-on-a-connected-manifold
  - thm-riemannian-distance-is-a-metric
  - ex-the-round-sphere-has-positive-constant-sectional-curvature
  - def-sectional-curvature
  - def-cut-time-in-a-unit-tangent-direction
  - def-cut-point-and-cut-locus-of-a-point
  - prop-injectivity-radius-is-the-infimum-of-cut-times
  - def-injectivity-radius-at-a-point-and-of-a-manifold
  - thm-exp-p-is-a-diffeomorphism-from-the-open-tangent-cut-domain-onto-m-minus-the-cut-locus-and-p
  - cor-euclidean-closed-balls-and-spheres-are-compact
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - def-principal-inverse-sine-and-cosine
  - thm-sine-and-cosine-derivatives
  - cor-trigonometric-parity-and-pythagorean-identity
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Example 8.2.7 and Theorem 8.2.3, printed pp.49 and 46–47: sectional curvature of the round sphere; Proposition 15.3.1, pp.117–118: great circles as geodesics"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§1.1, printed pp.1–4: the sphere of radius R as the simply connected space form of curvature 1/R^2, its diameter pi R and its cut time"
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Sectional Curvatures of the Model Spaces, printed pp.148–149; Chapter 10 on the cut locus of the round sphere"
verification:
  precheck: pass
  repair: research/frontier-38-owner-30-published-fourier-format-prop-round-sphere-model-geometry-receipt.json
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let
$R>0$ and $n\ge2$, and give the round sphere
$$S^n_R=\{x\in\mathbb R^{n+1}:\langle x,x\rangle=R^2\}$$
the Riemannian metric $g$ induced from the Euclidean inner product. Then:

1. $(S^n_R,g)$ is a compact, connected, boundaryless Riemannian manifold of
   constant sectional curvature $1/R^2$, and it is metrically complete;
2. for $p\in S^n_R$ and $v\in T_pS^n_R$ the maximal geodesic with
   $\gamma(0)=p$, $\gamma'(0)=v$ is defined on all of $\mathbb R$: it is the
   constant geodesic when $v=0$, and for $v\ne0$ it is
   $$\gamma_{p,v}(t)=\cos\Bigl(\frac{|v|t}{R}\Bigr)p+\frac{R}{|v|}\sin\Bigl(\frac{|v|t}{R}\Bigr)v,$$
   whose image is the entire great circle $S^n_R\cap\operatorname{span}\{p,v\}$;
   moreover $T_pS^n_R=p^\perp=\{w\in\mathbb R^{n+1}:\langle p,w\rangle=0\}$ and
   $\gamma_{p,v}(\pi R/|v|)=-p$;
3. for all $x,y\in S^n_R$,
   $$d_g(x,y)=R\arccos\frac{\langle x,y\rangle}{R^2}\in[0,\pi R],$$
   so $\operatorname{diam}(S^n_R,g)=\pi R$, and $d_g(x,y)=\pi R$ holds
   exactly when $y=-x$;
4. for every unit $v\in T_pS^n_R$ the cut time is $c_p(v)=\pi R$, the cut
   point is $\exp_p(\pi Rv)=-p$, $\operatorname{Cut}(p)=\{-p\}$, the
   injectivity radius at $p$ is $\pi R$, and $\exp_p$ is injective on the
   open tangent ball $B_0(\pi R)=\{w\in T_pS^n_R:|w|_g<\pi R\}$.

In particular $S^n_R$ is the model space of curvature $k=1/R^2$ with
$\pi R=\pi/\sqrt k$, and no choice beyond the inherited
$\mathrm{AC}_\omega$ is used.

## Facts & Assumptions

**Given:** The radius $R>0$, the integer $n\ge2$, the round sphere $S^n_R$
with its induced metric $g$, a point $p\in S^n_R$, and the inherited
$\mathrm{AC}_\omega$ of [A1].

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$
([[def-countable-choice]]), carried by the Hopf–Rinow, exponential and
cut-time suppliers used below. The only selections made here are single
selections of one minimizing geodesic or of one unit vector from a nonempty
set; no countable family is selected.

[F1] Regular level sets
([[thm-a-regular-level-set-is-an-embedded-submanifold]],
[[prop-tangent-space-of-a-regular-level-set-is-the-kernel]]): for
$f(x)=\langle x,x\rangle$ one has $df_x(w)=2\langle x,w\rangle\ne0$ at every
$x\ne0$, so $S^n_R=f^{-1}(R^2)$ is a boundaryless embedded $n$-submanifold of
$\mathbb R^{n+1}$ and $T_pS^n_R=\ker df_p=p^\perp$.

[F2] Induced metrics
([[prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions]],
[[def-riemannian-metric-and-riemannian-manifold]]): the pullback of the
Euclidean metric along an immersion is a Riemannian metric, so the inclusion
$S^n_R\hookrightarrow\mathbb R^{n+1}$ makes $g$ a Riemannian metric on
$S^n_R$; on each tangent space $g_p$ is the restriction of the Euclidean
inner product.

[F3] The ambient derivative and the Levi–Civita connection
([[thm-fundamental-theorem-of-riemannian-geometry]],
[[prop-coordinate-formula-for-the-lie-bracket]],
[[thm-clairaut-schwarz-mixed-partials]],
[[def-affine-connection-on-a-smooth-manifold]],
[[prop-connection-laws-in-directional-form]]): the coordinate directional
derivative $D$ on $\mathbb R^{n+1}$ satisfies $D_XY-D_YX=[X,Y]$ and
$D_XD_YZ-D_YD_XZ=D_{[X,Y]}Z$ for smooth ambient fields; a Riemannian metric
has exactly one torsion-free metric-compatible connection.

[F4] Geodesics
([[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]],
[[prop-affine-reparametrization-of-a-geodesic-is-a-geodesic]],
[[prop-geodesics-have-constant-speed-for-a-metric-compatible-connection]],
[[def-geodesic-of-an-affine-connection]]): every initial datum $(p,v)$ has a
unique maximal geodesic, which is smooth in its arguments; an affine
reparametrization of a geodesic is a geodesic; and geodesics of a
metric-compatible connection have constant speed.

[F5] Hopf–Rinow ([[thm-hopf-rinow]]): for a nonempty connected boundaryless
Riemannian manifold, metric completeness, geodesic completeness and the
global definition of the exponential map are equivalent, and whenever they
hold every pair of points $x,y$ is joined by a minimizing geodesic
$t\mapsto\exp_x(tv)$, $t\in[0,1]$, with $|v|_{g_x}=d_g(x,y)$.

[F6] Distance and minimizing curves
([[def-riemannian-distance-on-a-connected-manifold]],
[[thm-riemannian-distance-is-a-metric]],
[[thm-a-length-minimizing-piecewise-smooth-curve-is-a-constant-speed-geodesic-up-to-reparametrization]]):
$d_g$ is the infimum of lengths of piecewise smooth curves and is a metric on
a connected manifold, and a nonconstant length-minimizing curve between its endpoints is,
after arclength reparametrization, a unit-speed geodesic. A constant minimizer
has length zero and stays constant.

[F7] Curvature of the round sphere
([[ex-the-round-sphere-has-positive-constant-sectional-curvature]],
[[def-sectional-curvature]]): for $n\ge2$ and every radius $r>0$ the metric
induced on $S^n_r$ has constant sectional curvature $1/r^2$, the sectional
curvature being normalized as $\operatorname{Rm}(X,Y,Y,X)$ divided by the
positive Gram determinant.

[F8] The cut machinery
([[def-cut-time-in-a-unit-tangent-direction]],
[[def-cut-point-and-cut-locus-of-a-point]],
[[prop-injectivity-radius-is-the-infimum-of-cut-times]],
[[def-injectivity-radius-at-a-point-and-of-a-manifold]],
[[thm-exp-p-is-a-diffeomorphism-from-the-open-tangent-cut-domain-onto-m-minus-the-cut-locus-and-p]]):
for a complete connected boundaryless manifold, the cut time is
$c_p(v)=\sup\{t>0:d_g(p,\exp_p(tv))=t\}$, the cut locus consists of the points
$\exp_p(c_p(v)v)$ at finite cut times, the injectivity radius satisfies
$\operatorname{inj}(p)=\inf\{c_p(v):|v|_g=1\}$, and $\exp_p$ is a
diffeomorphism from $\{tv:0<t<c_p(v),\ |v|_g=1\}$ onto
$M\setminus(\{p\}\cup\operatorname{Cut}(p))$.

[F9] Compactness of spheres
([[cor-euclidean-closed-balls-and-spheres-are-compact]]).

[F10] Euclidean, trigonometric and inverse-cosine facts
([[thm-cauchy-schwarz-and-the-euclidean-norm]],
[[def-principal-inverse-sine-and-cosine]],
[[thm-sine-and-cosine-derivatives]],
[[cor-trigonometric-parity-and-pythagorean-identity]]): the Euclidean
Cauchy–Schwarz inequality gives $|\langle x,y\rangle|\le R^2$ for
$x,y\in S^n_R$; $\arccos:[−1,1]\to[0,\pi]$ is the inverse of
$\cos|_{[0,\pi]}$, so $\arccos(\cos s)=s$ for $s\in[0,\pi]$ and
$\arccos(\cos s)=2\pi-s$ for $s\in[\pi,2\pi]$; and $\cos'=-\sin$,
$\sin'=\cos$ with $\sin^2+\cos^2=1$.

## Proof

1.1 The tangential projection of the ambient derivative is the Levi-Civita connection. Write $p$ for the position field on $\mathbb R^{n+1}$, so that $D_Xp=X$ for every smooth ambient field $X$, and extend tangent fields on $S^n_R$ smoothly to the ambient space locally. By [F1] the tangent space at $x\in S^n_R$ is $x^\perp$, and the $g$-orthogonal projection of an ambient vector $w$ onto $x^\perp$ along $\mathbb Rx$ is $$w-\frac{\langle w,x\rangle}{\langle x,x\rangle}x=w-\frac{\langle w,x\rangle}{R^2}x .$$ Differentiating the identically vanishing function $\langle Y,p\rangle$ in the direction $X$ gives $0=\langle D_XY,p\rangle+\langle X,Y\rangle$, so the projection of $D_XY$ is $$\nabla^S_XY:=D_XY-\frac{\langle D_XY,p\rangle}{R^2}p=D_XY+\frac{\langle X,Y\rangle}{R^2}p .$$ The assignment $\nabla^S$ is a connection, read off from the corresponding properties of $D$ recorded in [F3]; it is torsion-free because $\nabla^S_XY-\nabla^S_YX=D_XY-D_YX=[X,Y]$ and the correction terms cancel; and it is metric compatible because $$\langle\nabla^S_XY,Z\rangle+\langle Y,\nabla^S_XZ\rangle=\langle D_XY,Z\rangle+\langle Y,D_XZ\rangle=X\langle Y,Z\rangle ,$$ the two correction terms vanishing since $Y,Z\perp p$. By the uniqueness clause of [F3], $\nabla^S$ is the Levi-Civita connection of $g$. [F1, F2, F3, given]

2.1 The geodesic equation on the sphere. Let $\gamma$ be a smooth curve in $S^n_R$. Differentiating the identity $\langle\gamma,\gamma\rangle=R^2$ twice gives $\langle\gamma,\gamma''\rangle=-|\gamma'|^2$. Projecting $\gamma''$ as in step 1.1, the curve $\gamma$ is a geodesic exactly when $$\gamma''-\frac{\langle\gamma'',\gamma\rangle}{R^2}\gamma=0,\qquad\text{that is}\qquad \gamma''=-\frac{|\gamma'|^2}{R^2}\gamma .$$ Since $|\gamma'|$ is constant along a geodesic by [F4], a nonconstant geodesic of $S^n_R$ satisfies $\gamma''=-c^2\gamma/R^2$ with $c=|\gamma'|>0$, and a constant curve is a geodesic by [F4]. [F2, F4, step 1.1]

3.1 The maximal geodesics. Fix $p\in S^n_R$ and $v\in T_pS^n_R$; by [F1], $\langle p,v\rangle=0$. For $v\ne0$ put $\theta(t)=|v|t/R$ and $$\gamma(t)=\cos\theta(t)\,p+\frac{R}{|v|}\sin\theta(t)\,v .$$ Then $\langle\gamma(t),\gamma(t)\rangle=R^2\cos^2\theta+R^2\sin^2\theta=R^2$, so $\gamma$ takes values in $S^n_R$; moreover $\gamma(0)=p$, $\gamma'(0)=v$ and, by [F10], $\gamma''=-(|v|^2/R^2)\gamma$. Step 2.1 therefore makes $\gamma$ a geodesic, and it is defined on all of $\mathbb R$. By uniqueness of the maximal geodesic in [F4], it is the maximal geodesic with initial data $(p,v)$; for $v=0$ the same conclusion holds for the constant curve. Evaluating at $t=\pi R/|v|$ gives $\gamma(\pi R/|v|)=-p$, and the image is $S^n_R\cap\operatorname{span}\{p,v\}$: the orthonormal pair $p/R,v/|v|$ parametrizes that circle, and $|v|t/R$ ranges over all real angles. [F4, F10, step 2.1]

4.1 Path connectedness. Let $x,y\in S^n_R$. If $y=x$, the constant curve joins them. If $y\ne\pm x$, put $\theta=\arccos(\langle x,y\rangle/R^2)\in(0,\pi)$ by [F10] and $u=(y-\cos\theta\,x)/(R\sin\theta)$; then $\langle x,u\rangle=0$ and $$|y-\cos\theta\,x|^2=R^2-2\cos\theta\,\langle x,y\rangle+\cos^2\theta\,R^2=R^2\sin^2\theta ,$$ so $u\in T_xS^n_R$ is a unit vector, and step 3.1 gives $\gamma_{x,u}(R\theta)=y$. If $y=-x$, choose any unit $u\in T_xS^n_R$, which is possible because $x^\perp\cong\mathbb R^n\ne\{0\}$; step 3.1 gives $\gamma_{x,u}(\pi R)=-x=y$. Hence every pair of points is joined by a continuous curve, and $S^n_R$ is path connected, hence connected. [F1, F10, step 3.1]

5.1 Metric completeness and compactness. By step 3.1 every maximal geodesic of $S^n_R$ is defined on all of $\mathbb R$, so $(S^n_R,g)$ is geodesically complete. It is nonempty, connected by step 4.1 and boundaryless by [F1], so Hopf–Rinow [F5] makes it metrically complete. Being a closed and bounded subset of $\mathbb R^{n+1}$, it is also compact by [F9]. [F5, F9, step 3.1, step 4.1]

6.1 The distance formula. Let $x,y\in S^n_R$ and put $\theta=\arccos(\langle x,y\rangle/R^2)\in[0,\pi]$, which is well defined by the Cauchy–Schwarz bound in [F10]. Step 4.1 constructs a curve from $x$ to $y$ of length $R\theta$ — constant in the case $y=x$, an arc $\gamma_{x,u}$ of unit speed over a time interval of length $R\theta$ in the other cases — so $d_g(x,y)\le R\theta$ by [F6]. Conversely, $S^n_R$ is complete by step 5.1, so [F5] provides $v\in T_xS^n_R$ with $\exp_x(v)=y$ and $|v|_{g_x}=d_g(x,y)$; put $c:=|v|_{g_x}$. If $c=0$ then $x=y$ and $\theta=0$, so $c=R\theta$. If $c>0$, step 3.1 applied to the initial datum $(x,v/c)$ describes the unit-speed minimizing geodesic $t\mapsto\exp_x(tv/c)$ on $[0,c]$; evaluating at $t=c$ and comparing with $y=\exp_x(v)$ gives $\langle x,y\rangle=R^2\cos(c/R)$, hence $\cos(c/R)=\cos\theta$. Since $c/R\ge0$ and $\theta\in[0,\pi]$, the solutions of $\cos s=\cos\theta$ on $[0,\infty)$ are $s=\theta+2k\pi$ and $s=2\pi-\theta+2k\pi$, $k\ge0$, whose smallest element is $\theta$; therefore $c\ge R\theta$. Combining both inequalities gives $d_g(x,y)=R\theta=R\arccos(\langle x,y\rangle/R^2)$. [F5, F6, F10, step 3.1, step 5.1]

7.1 Diameter and the antipodal pair. By step 6.1, $d_g(x,y)\le\pi R$ for all $x,y$, with equality $d_g(x,y)=\pi R$ exactly when $\langle x,y\rangle=-R^2$. By the equality case of Cauchy–Schwarz, $|\langle x,y\rangle|=R^2$ holds exactly for linearly dependent $x,y$, that is for $y=\pm x$; the negative sign is precisely $\langle x,y\rangle=-R^2$. Equal points give distance $0$, so $\operatorname{diam}(S^n_R,g)=\pi R$, attained exactly at antipodal pairs. [F10, step 6.1]

8.1 Cut times, cut locus, injectivity radius and injectivity of the exponential. Let $v\in T_pS^n_R$ be a unit vector and $\gamma(t)=\exp_p(tv)$, a unit-speed geodesic by step 3.1. Step 6.1 applied to the pair $(p,\gamma(t))$ gives $$d_g(p,\gamma(t))=R\arccos\frac{\langle p,\gamma(t)\rangle}{R^2}=R\arccos\bigl(\cos(t/R)\bigr),$$ because $\langle p,\gamma(t)\rangle=R^2\cos(t/R)$. For $0<t\le\pi R$ the inverse-cosine identity in [F10] gives $d_g(p,\gamma(t))=t$, so all these $t$ belong to the set defining $c_p(v)$. For $t>\pi R$, write $t=2\pi Rk+s$ with $k\ge0$ and $0\le s<2\pi R$; then $\gamma(t)=\gamma(s)$ and $d_g(p,\gamma(t))\le\pi R<t$. Hence $\{t>0:d_g(p,\exp_p(tv))=t\}=(0,\pi R]$, and the supremum definition of [F8] gives $c_p(v)=\pi R$, with cut point $\exp_p(\pi Rv)=\gamma(\pi R)=-p$ by step 3.1. Consequently $\operatorname{Cut}(p)=\{-p\}$, and $\operatorname{inj}(p)=\inf\{c_p(v):|v|_g=1\}=\pi R$ by [F8]. Since $\{tv:0<t<c_p(v),\ |v|_g=1\}=B_0(\pi R)\setminus\{0\}$ and $\exp_p$ is a diffeomorphism there onto $S^n_R\setminus\{p,-p\}$ by [F8], while $\exp_p(0)=p$ is not in that image, $\exp_p$ is injective on the whole open ball $B_0(\pi R)$. [F8, F10, step 6.1, step 7.1]

9.1 Boundary cases and choice. The cases $y=x$ and $y=-x$ of the distance formula, that is $\theta=0$ and $\theta=\pi$, were treated separately in step 4.1 and are re-derived in step 6.1; the endpoint $t=\pi R$ of the minimizing interval is included, and minimization fails only strictly beyond it. The zero vector and constant geodesics were handled in step 3.1, and the case $n\ge2$ guarantees that the curvature statement of [F7] is not vacuous. The only selections are single minimizing geodesics supplied by [F5] and, in the antipodal case of step 4.1, one unit tangent vector; the inherited $\mathrm{AC}_\omega$ of [A1] is used only through the cited suppliers, and no family of choices is made. [A1, F1, step 6.1, step 8.1] ∎

