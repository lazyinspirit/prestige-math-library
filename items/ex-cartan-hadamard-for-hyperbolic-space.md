---
id: ex-cartan-hadamard-for-hyperbolic-space
kind: example
title: Cartan hadamard for hyperbolic space
status: published
origin: pipeline
deps:
  - def-jacobi-field
  - thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data
  - thm-existence-and-uniqueness-of-parallel-sections
  - thm-cartan-hadamard
  - prop-model-functions-solve-the-constant-curvature-jacobi-equation
  - def-comparison-sine-cosine-and-cotangent-functions
  - def-countable-choice
  - thm-a-regular-level-set-is-an-embedded-submanifold
  - def-tangent-space-to-a-regular-level-set
  - prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure
  - prop-pullback-of-covariant-tensors-is-smooth-and-functorial
  - def-riemannian-metric-and-riemannian-manifold
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-fundamental-theorem-of-riemannian-geometry
  - prop-coordinate-formula-for-the-lie-bracket
  - thm-clairaut-schwarz-mixed-partials
  - def-sectional-curvature
  - def-riemann-curvature-four-tensor
  - thm-existence-uniqueness-and-smooth-dependence-of-geodesics
  - prop-affine-reparametrization-of-a-geodesic-is-a-geodesic
  - thm-hopf-rinow
  - cor-convex-subsets-of-rn-are-contractible
  - lem-contractibility-implies-trivial-fundamental-group
  - def-simply-connected
  - thm-path-connected-implies-connected
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "§§20.1 and 24.3, pp.147–149, 178–179: Cartan–Hadamard for complete simply connected nonpositively curved manifolds"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§5, pp.17–19: the Cartan–Hadamard setting and the hyperboloid model"
---

## Example

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let
$n\ge2$ and let
$$\langle v,w\rangle=\sum_{i=1}^n v_iw_i-v_{n+1}w_{n+1}$$
be the Lorentz form on $\mathbb R^{n+1}$. The **hyperboloid model** of
hyperbolic $n$-space is the upper sheet
$$H^n=\{x\in\mathbb R^{n+1}:\langle x,x\rangle=-1,\ x_{n+1}>0\}$$
with the Riemannian metric $g^H$ induced by the Lorentz form. Then:

1. $(H^n,g^H)$ is an $n$-dimensional Riemannian manifold of constant
   sectional curvature $K=-1$;
2. it is geodesically and metrically complete;
3. it is simply connected;
4. consequently, for every $p\in H^n$ the exponential map
   $\exp_p:(T_pH^n,\exp_p^*g^H)\to(H^n,g^H)$ is a global diffeomorphism, as
   Cartan–Hadamard predicts.

The model functions of the comparison page are the hyperbolic-sine branch:
the normal Jacobi fields along a unit-speed geodesic of $H^n$,
vanishing at parameter $0$, have the shape
$\operatorname{sn}_{-1}(t)E(t)=\sinh(t)E(t)$ with $E$ parallel normal, which
matches $K=-1$ and the absence of positive zeros.

## Facts & Assumptions

**Given:** The integer $n\ge2$, the Lorentz form $\langle\cdot,\cdot\rangle$ on
$\mathbb R^{n+1}$, the upper sheet $H^n$ with its induced metric $g^H$, and the
inherited $\mathrm{AC}_\omega$ of [A1].

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$
([[def-countable-choice]]), carried by the Hopf–Rinow, geodesic-existence and
Cartan–Hadamard suppliers used below; all manifolds, charts and curves below
are explicit.

[F1] Regular level sets: if $f$ is smooth with $Df(a)\ne0$ at every point of
$f^{-1}(c)$, then $f^{-1}(c)$ is an embedded submanifold of dimension
$\dim-1$, with $T_a(f^{-1}(c))=\ker Df(a)$
([[thm-a-regular-level-set-is-an-embedded-submanifold]],
[[def-tangent-space-to-a-regular-level-set]]); an open subset of a smooth
manifold carries its canonical restricted smooth structure
([[prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure]]).

[F2] Pullbacks: the pullback of a smooth covariant tensor field along a smooth
map is smooth and functorial
([[prop-pullback-of-covariant-tensors-is-smooth-and-functorial]]); a smooth
symmetric positive-definite $(0,2)$-tensor field is a Riemannian metric
([[def-riemannian-metric-and-riemannian-manifold]]), and the Euclidean
Cauchy–Schwarz inequality $|u\cdot v|\le|u|\,|v|$ holds
([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F3] Uniqueness of the Levi-Civita connection: a smooth Riemannian metric has
exactly one torsion-free metric-compatible connection
([[thm-fundamental-theorem-of-riemannian-geometry]]). For the coordinate
directional derivative $D$ on $\mathbb R^{n+1}$ one has
$D_XY-D_YX=[X,Y]$ in the coordinate Lie bracket
([[prop-coordinate-formula-for-the-lie-bracket]]), and $D$ is flat:
$D_XD_YZ-D_YD_XZ-D_{[X,Y]}Z=0$ for smooth ambient fields, by equality of mixed
partial derivatives ([[thm-clairaut-schwarz-mixed-partials]]).

[F4] Geodesics: for every initial datum there is a unique maximal geodesic of a
Riemannian manifold, smooth in its arguments
([[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]]), and an
affine reparametrization of a geodesic is a geodesic
([[prop-affine-reparametrization-of-a-geodesic-is-a-geodesic]]).

[F5] Hopf–Rinow converts geodesic completeness into metric completeness for a
nonempty connected boundaryless Riemannian manifold ([[thm-hopf-rinow]]);
contractible spaces have trivial fundamental group and are simply connected
([[lem-contractibility-implies-trivial-fundamental-group]],
[[def-simply-connected]]); $\mathbb R^n$ is a nonempty convex
subset of itself, hence contractible
([[cor-convex-subsets-of-rn-are-contractible]]), and path connectedness
implies connectedness ([[thm-path-connected-implies-connected]]).

[F6] Cartan–Hadamard: a complete, connected, boundaryless Riemannian manifold
with $K\le0$ that is simply connected has $\exp_p$ a diffeomorphism for every
$p$ ([[thm-cartan-hadamard]]).

[F7] The model functions: $\operatorname{sn}_{-1}(t)=\sinh t$ and
$\operatorname{sn}_{-1}''-\operatorname{sn}_{-1}=0$, with
$\operatorname{sn}_{-1}(0)=0$ and no positive zero
([[prop-model-functions-solve-the-constant-curvature-jacobi-equation]],
[[def-comparison-sine-cosine-and-cotangent-functions]]).

## Verification

**Proof technique:** direct: the hyperboloid is a regular level set; the tangential projection of the flat connection is its Levi-Civita connection; the Gauss expansion gives $K=-1$; explicit hyperbolas are the complete geodesics; the graph projection is a homeomorphism to $\mathbb R^n$.

1.1 $H^n$ is an embedded $n$-submanifold of $\mathbb R^{n+1}$ and $T_pH^n=p^\perp$ for $p\in H^n$. [F1, given]
Put $f(x)=\langle x,x\rangle$, a smooth polynomial function whose differential
at $x$ is $Df(x)v=2\langle x,v\rangle$. At a point of $f^{-1}(-1)$ one has
$x\ne0$, so $Df(x)$ is not the zero functional and $x$ is a regular point; by
[F1] the level set $f^{-1}(-1)$ is an embedded submanifold of dimension $n$
with tangent space $\ker Df(x)=x^\perp$. The upper sheet is
$H^n=f^{-1}(-1)\cap\{x_{n+1}>0\}$, the intersection of that submanifold with an
open subset of $\mathbb R^{n+1}$, so [F1] gives it the structure of an
embedded $n$-submanifold with the same tangent spaces. [F1, given]

2.1 The induced form $g^H$ is a Riemannian metric on $H^n$. [F2, step 1.1]
Let $\iota:H^n\hookrightarrow\mathbb R^{n+1}$ be the inclusion and let
$\langle\cdot,\cdot\rangle$ also denote the ambient covariant two-tensor
$h(X,Y)=\langle X,Y\rangle$, which is smooth, symmetric and
$C^\infty$-bilinear. Then $g^H:=\iota^*h$ is a smooth symmetric $(0,2)$-tensor
field by [F2], and it remains to see that it is positive definite on each
tangent space. Write $p=(u,q)$ with $u\in\mathbb R^n$ and
$q=\sqrt{1+|u|^2}>0$, and let $v=(v_0,v_{n+1})\in T_pH^n=p^\perp$ by step 1.1;
the orthogonality $\langle v,p\rangle=0$ says
$v_0\cdot u=v_{n+1}q$, that is $v_{n+1}=(v_0\cdot u)/q$. Hence
$$g^H_p(v,v)=|v_0|^2-v_{n+1}^2=|v_0|^2-\frac{(v_0\cdot u)^2}{1+|u|^2} \ge|v_0|^2\Bigl(1-\frac{|u|^2}{1+|u|^2}\Bigr)=\frac{|v_0|^2}{1+|u|^2}\ge0,$$
where [F2] (Cauchy–Schwarz) was used for $(v_0\cdot u)^2\le|v_0|^2|u|^2$.
Equality forces $v_0=0$ and then $v_{n+1}=0$, so $v=0$; therefore $g^H$ is
positive definite and, by [F2], a Riemannian metric on $H^n$. [F2, step 1.1]

2.2 The graph map is a homeomorphism onto $H^n$. [F2, F5, step 1.1]
Define $\Phi:\mathbb R^n\to H^n$ by $\Phi(u)=(u,\sqrt{1+|u|^2})$, continuous
because the square root is continuous; its image lies in $H^n$, since
$|u|^2-(1+|u|^2)=-1$ and the last coordinate is positive. Conversely every
$x\in H^n$ equals $\Phi(x_1,\dots,x_n)$, because $x_{n+1}^2=1+\sum_{i\le n}x_i^2$
and $x_{n+1}>0$ force $x_{n+1}=\sqrt{1+\sum_{i\le n}x_i^2}$. The inverse
$\Phi^{-1}$ is the restriction to $H^n$ of the continuous projection
$x\mapsto(x_1,\dots,x_n)$, so $\Phi$ is a homeomorphism. Therefore $H^n$ is
path connected (the image of the path-connected $\mathbb R^n$) and hence
connected by [F5]; being homeomorphic to the contractible space $\mathbb R^n$,
which is contractible by [[cor-convex-subsets-of-rn-are-contractible]] applied
to the nonempty convex set $\mathbb R^n$, it is contractible and so simply
connected by [F5]. [F2, F5, step 1.1]

3.1 The tangential projection of the flat connection is the Levi-Civita connection of $g^H$. [F3, step 1.1, step 2.1]
Write $D$ for the coordinate directional derivative on $\mathbb R^{n+1}$ and
$p$ for the position field, so that $D_Xp=X$ for every smooth ambient field
$X$. Extend tangent fields on $H^n$ smoothly to $\mathbb R^{n+1}$ (locally, by
extending their coordinate expressions). As in step 1.1 the tangent space at
$x\in H^n$ is $x^\perp$, so the metric orthogonal projection of an ambient
vector $w$ onto $T_xH^n=x^\perp$ along the line $\mathbb Rx$ is
$$w-\frac{\langle w,x\rangle}{\langle x,x\rangle}x=w+\langle w,x\rangle x,$$
because $\langle x,x\rangle=-1$. For tangent fields $X,Y$ differentiate the
identically vanishing function $\langle Y,p\rangle$ in the direction $X$:
$$0=X\langle Y,p\rangle=\langle D_XY,p\rangle+\langle Y,D_Xp\rangle =\langle D_XY,p\rangle+\langle X,Y\rangle,$$
using $D_Xp=X$. Hence the tangential projection of $D_XY$ is
$$\nabla^H_XY:=D_XY+\langle D_XY,p\rangle p=D_XY-\langle X,Y\rangle p,$$
which is tangent because $D_XY$ and $p$ are ambient and the correction removes
the normal component. The assignment $\nabla^H$ is a connection on $H^n$:
it is $C^\infty$-linear in $X$, additive in $Y$, and
$\nabla^H_X(fY)=f\nabla^H_XY+(Xf)Y$ for smooth $f$, all read off from the
same properties of $D$. It is torsion-free, since for tangent fields
$$\nabla^H_XY-\nabla^H_YX=D_XY-D_YX=[X,Y]$$
by [F3] (the correction terms cancel because $\langle X,Y\rangle$ is symmetric),
and $[X,Y]$ is tangent to $H^n$ because it is a difference of tangential
derivatives. It is metric compatible, since $X\langle Y,Z\rangle=
\langle D_XY,Z\rangle+\langle Y,D_XZ\rangle$ and
$$\langle\nabla^H_XY,Z\rangle+\langle Y,\nabla^H_XZ\rangle =\langle D_XY,Z\rangle-\langle X,Y\rangle\langle p,Z\rangle +\langle Y,D_XZ\rangle-\langle X,Z\rangle\langle Y,p\rangle =\langle D_XY,Z\rangle+\langle Y,D_XZ\rangle,$$
both correction terms vanishing because $Y,Z\perp p$. By the uniqueness clause
of [F3], $\nabla^H$ is the Levi-Civita connection of the Riemannian metric
$g^H$ of step 2.1. [F3, step 1.1, step 2.1]

4.1 The curvature tensor of $g^H$. [F3, step 3.1]
For tangent fields $X,Y,Z$ on $H^n$ extended as above, use
$\nabla^H_XY=D_XY-\langle X,Y\rangle p$ and $D_Xp=X$ to expand
$$\nabla^H_X\nabla^H_YZ =D_XD_YZ-\langle Y,Z\rangle X-\bigl(X\langle Y,Z\rangle+\langle X,D_YZ\rangle\bigr)p,$$
because the derivative of the function $\langle Y,Z\rangle$ is the function
$X\langle Y,Z\rangle$ and the derivative of $p$ in the direction $X$ is $X$.
Substituting this and the same expression with $X,Y$ interchanged into the
definition of the curvature tensor, and adding the term
$-\nabla^H_{[X,Y]}Z=-D_{[X,Y]}Z+\langle[X,Y],Z\rangle p$, the
$D$-difference is zero by the flatness of $D$ in [F3], and the $p$-coefficient is
$$-X\langle Y,Z\rangle-\langle X,D_YZ\rangle+Y\langle X,Z\rangle +\langle Y,D_XZ\rangle+\langle[X,Y],Z\rangle=0,$$
the four scalar terms expanding, by metric compatibility of
$\langle\cdot,\cdot\rangle$ with $D$, into $-\langle[X,Y],Z\rangle$ and
therefore cancelling the bracket term $+\langle[X,Y],Z\rangle$ contributed by
$-\nabla^H_{[X,Y]}Z$. What remains is the purely tangential identity
$$R^H(X,Y)Z=\langle X,Z\rangle Y-\langle Y,Z\rangle X .$$
[F3, step 3.1]

5.1 Every sectional curvature of $g^H$ equals $-1$. [F3, step 4.1]
For $p\in H^n$ and an orthonormal pair $(X,Y)$ in $T_pH^n=p^\perp$ with
respect to $g^H$, step 4.1 gives
$$\operatorname{Rm}(X,Y,Y,X)=\langle R^H(X,Y)Y,X\rangle =\langle X,Y\rangle\langle Y,X\rangle-\langle Y,Y\rangle\langle X,X\rangle =0-1=-1,$$
where the last two equalities use the orthonormality $(g^H_p(X,X)=1$,
$g^H_p(Y,Y)=1$, $g^H_p(X,Y)=0)$. Since the Gram determinant in the denominator
of the sectional curvature is $1\cdot1-0^2=1$, the sectional curvature of
every tangent two-plane is $K=-1$, so in particular $K\le0$; in dimension
$n\ge2$ every tangent space carries such a pair. [F3, step 4.1]

5.2 The explicit curves are the geodesics, defined for all time. [F3, step 3.1, step 4.1]
Fix $p\in H^n$ and $v\in T_pH^n$ with $g^H_p(v,v)=1$, and define
$\gamma:\mathbb R\to\mathbb R^{n+1}$ by $\gamma(t)=\cosh t\,p+\sinh t\,v$.
Then $\langle\gamma,\gamma\rangle=\cosh^2t\langle p,p\rangle
+2\sinh t\cosh t\langle p,v\rangle+\sinh^2t\langle v,v\rangle
=-\cosh^2t+\sinh^2t=-1$ and $\langle\gamma',\gamma'\rangle
=\sinh^2t(-1)+\cosh^2t(1)=1$, so $\gamma$ is a unit-speed curve in the level
set $f^{-1}(-1)$. Its last coordinate is
$\gamma_{n+1}(t)=\cosh t\,p_{n+1}+\sinh t\,v_{n+1}$; writing
$p=(u,q)$ as in step 2.1 one has $|v_{n+1}|\le|u|<q=p_{n+1}$: indeed
$v_{n+1}=(v_0\cdot u)/q$ and $g^H_p(v,v)=1$ give
$v_{n+1}^2\le|v_0|^2|u|^2/q^2=(1+v_{n+1}^2)|u|^2/q^2$, hence
$v_{n+1}^2(q^2-|u|^2)\le|u|^2$, that is $v_{n+1}^2\le|u|^2$; consequently
$p_{n+1}\pm v_{n+1}\ge q-|u|>0$ and, since
$\cosh t\mp\sinh t>0$ for every $t$, the last coordinate
$\gamma_{n+1}(t)=\frac12\bigl(e^{t}(p_{n+1}+v_{n+1})+e^{-t}(p_{n+1}-v_{n+1})\bigr)$
is positive. Hence $\gamma$ takes values in the upper sheet $H^n$. Its
componentwise second derivative is $\gamma''=\cosh t\,p+\sinh t\,v=\gamma(t)$,
which is
$\langle\cdot,\cdot\rangle$-orthogonal to $T_{\gamma(t)}H^n=\gamma(t)^\perp$;
therefore the tangential component of $\gamma''$ vanishes:
$\nabla^H_{\gamma'}\gamma'=(\gamma'')^\top=0$ by the projection formula of
step 3.1. Thus $\gamma$ is a geodesic of $(H^n,g^H)$, defined on all of
$\mathbb R$, with $\gamma(0)=p$ and $\gamma'(0)=v$. For a general initial
vector $w\in T_pH^n$, $w=0$ gives the constant geodesic and $w\ne0$ is
handled by affine reparametrization [F4] of the unit-speed case with
$v=w/|w|$. [F3, step 3.1, step 4.1]

6.1 Everything is complete and simply connected. [F3, F4, F5, step 2.2, step 5.1, step 5.2]
Every initial datum $(p,w)\in TH^n$ is the initial datum of the geodesic
constructed in step 5.2, which is defined on all of $\mathbb R$; by the
uniqueness clause of [F4] the unique maximal geodesic with those initial data
has domain $\mathbb R$. Hence $(H^n,g^H)$ is geodesically complete, and it is
metrically complete by Hopf–Rinow [F5], the manifold being nonempty,
connected (step 2.2) and boundaryless. By step 2.2 it is simply connected, and
by step 5.1 it has $K=-1\le0$. [F3, F4, F5, step 2.2, step 5.1, step 5.2]

7.1 Cartan–Hadamard gives the global diffeomorphism. [F6, step 6.1]
The manifold $(H^n,g^H)$ is complete, connected, boundaryless, nonpositively
curved and simply connected by step 6.1, so [F6] applies and
$\exp_p:(T_pH^n,\exp_p^*g^H)\to(H^n,g^H)$ is a diffeomorphism for every
$p\in H^n$ — in particular bijective, in accordance with the Cartan–Hadamard
prediction. [F6, step 6.1]

8.1 The model fields and the boundary cases. [F7, step 7.1]
For a unit-speed geodesic, step 4.1 gives $R(J,T)T=-J$ for normal $J$.
Thus its normal Jacobi equation is $D_t^2J-J=0$
([[def-jacobi-field]]). Given $J(0)=0$, let $E$ be the unique parallel
field with $E(0)=D_tJ(0)$
([[thm-existence-and-uniqueness-of-parallel-sections]]); its initial value
is normal by differentiating $g(J,T)=0$, so $E$ stays normal. By [F7],
$\sinh(t)E(t)$ solves the same equation and has the same initial data.
Jacobi uniqueness
([[thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data]]) gives
$J(t)=\sinh(t)E(t)$. Such a field has no positive zero when it is nonzero,
consistent with $K\le0$. For a constant speed $c>0$ the corresponding
formula is $J(t)=\sinh(ct)P_tD_tJ(0)/c$; the factor $c^2$ in the curvature
term explains why the unit-speed qualification is essential. In dimension $n=1$ the hyperboloid has no
tangent two-plane and no sectional curvature to compute, and it is not a
Cartan–Hadamard surface; the case $n\ge2$ is the one stated. The case
$v=0$ of step 5.2 is the constant geodesic; the case $w\ne0$ is reduced to
unit speed by reparametrization; and the two connected components of
$\{x:\langle x,x\rangle=-1\}$ are separated by the sign of $x_{n+1}$, which
is why the upper sheet rather than the whole level set is the model. No
choice beyond the inherited [A1] is used: the charts, the projection formula
and the explicit geodesics are all canonical. [F7, step 7.1] ∎
