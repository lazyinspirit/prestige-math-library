---
id: prop-half-space-model-geometry
kind: proposition
title: Upper half-space model geometry
status: published
origin: pipeline
deps:
  - def-countable-choice
  - prop-coordinate-criterion-for-a-riemannian-metric
  - prop-christoffel-formula-for-the-levi-civita-connection
  - prop-coordinate-geodesic-equation
  - prop-coordinate-formula-for-the-curvature-tensor
  - thm-curvature-is-a-type-one-three-tensor
  - def-riemann-curvature-four-tensor
  - def-sectional-curvature
  - thm-existence-uniqueness-and-smooth-dependence-of-geodesics
  - prop-affine-reparametrization-of-a-geodesic-is-a-geodesic
  - thm-hopf-rinow
  - def-hyperbolic-functions
  - thm-hyperbolic-identities-and-derivatives
  - cor-convex-subsets-of-rn-are-contractible
  - cor-contractible-spaces-are-path-connected
  - lem-contractibility-implies-trivial-fundamental-group
  - def-simply-connected
  - thm-path-connected-implies-connected
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Example 8.2.6, printed page 49: the upper half-space metric and its constant negative curvature; §24.1, pp.173–176: model space forms and their geodesics"
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Sectional Curvatures of the Model Spaces, printed pp.148–149; geodesics of the hyperbolic metric, printed pp.152–154"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§1.1, printed pp.1–4: the space forms, their curvatures and their geodesics"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let
$n\ge2$ and $a>0$, put
$$U^n=\{x\in\mathbb R^n:x^n>0\},\qquad y:=x^n,\qquad g_a=\frac{1}{a^2y^2}\sum_{i=1}^n dx^i\otimes dx^i .$$
Then $(U^n,g_a)$ is a complete, connected, boundaryless, simply connected
Riemannian $n$-manifold of constant sectional curvature $-a^2$. Equivalently,
for the scale $r=1/a>0$ the metric $r^2y^{-2}\sum_i dx^i\otimes dx^i$ has
constant sectional curvature $-1/r^2$.

Its geodesics consist of the constant curves and, up to nonzero affine
reparametrization, the vertical rays
$$t\mapsto(x_0,y_0e^{at}),\qquad x_0\in\mathbb R^{n-1},\ y_0>0,$$
and the semicircles meeting the boundary hyperplane $\{y=0\}$
orthogonally,
$$t\mapsto\bigl(\bar c-\rho\tanh(at)\,u,\ \rho\operatorname{sech}(at)\bigr), \qquad \bar c\in\mathbb R^{n-1},\ u\in S^{n-2},\ \rho>0,$$
in the coordinates $(x^1,\dots,x^{n-1},y)$, each defined for all
$t\in\mathbb R$ and of constant $g_a$-speed. In particular $U^n$ with $g_a$
is a space form of curvature $k=-a^2$, normalized so that the unit-speed
geodesics exist for all time.

## Facts & Assumptions

**Given:** The integers $n\ge2$, the real number $a>0$, the open half-space $U^n=\{y>0\}$ with its global coordinates $x^1,\dots,x^{n-1},y$, the metric $g_a$, and the inherited $\mathrm{AC}_\omega$ of [A1].

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$ ([[def-countable-choice]]), inherited through the sectional-curvature interface [F3], geodesic existence and uniqueness [F4], and the Hopf–Rinow equivalence [F5]; the metric, the geodesics and the model functions below are explicit and no family is selected.

[F1] Coordinate criterion for Riemannian metrics ([[prop-coordinate-criterion-for-a-riemannian-metric]]): a tensor field $g=\sum_{i,j}g_{ij}\,dx^i\otimes dx^j$ with smooth symmetric coefficients is a Riemannian metric exactly when the matrix $(g_{ij})$ is positive definite at every point, and under a change of coordinates $J=\partial x/\partial\xi$ the matrices transform by $G_\xi=J^{\mathsf T}G_xJ$.

[F2] Christoffel symbols and geodesics ([[prop-christoffel-formula-for-the-levi-civita-connection]], [[prop-coordinate-geodesic-equation]]): the Levi-Civita symbols are $$\Gamma^k{}_{ij}=\tfrac12 g^{kl}\bigl(\partial_i g_{jl}+\partial_j g_{il}-\partial_l g_{ij}\bigr),$$ and a smooth curve is a geodesic exactly when its coordinate expression satisfies $\ddot x^k+\Gamma^k{}_{ij}\dot x^i\dot x^j=0$ in every chart.

[F3] Curvature in coordinates ([[prop-coordinate-formula-for-the-curvature-tensor]], [[thm-curvature-is-a-type-one-three-tensor]], [[def-riemann-curvature-four-tensor]], [[def-sectional-curvature]]): with the page convention, $$R^\ell{}_{kij}=\partial_i\Gamma^\ell{}_{jk}-\partial_j\Gamma^\ell{}_{ik} +\Gamma^m{}_{jk}\Gamma^\ell{}_{im}-\Gamma^m{}_{ik}\Gamma^\ell{}_{jm},$$ the curvature is a smooth tensor, so an identity proved on coordinate frames extends multilinearly; $\operatorname{Rm}(X,Y,Z,W)=g(R(X,Y)Z,W)$; and the sectional curvature of an independent pair $(u,v)$ is $\operatorname{Rm}(u,v,v,u)$ divided by the positive Gram determinant $g(u,u)g(v,v)-g(u,v)^2$.

[F4] Geodesics are unique and affinely reparametrizable ([[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]], [[prop-affine-reparametrization-of-a-geodesic-is-a-geodesic]]): for every initial datum $(p,v)$ there is a unique maximal geodesic, smooth in its arguments; an affine reparametrization $t\mapsto ct+d$, $c\ne0$, of a geodesic is a geodesic.

[F5] Hopf–Rinow ([[thm-hopf-rinow]]): for a nonempty connected boundaryless Riemannian manifold, geodesic completeness and metric completeness are equivalent; in particular a Riemannian manifold on which every maximal geodesic is defined on all of $\mathbb R$ is a complete metric space.

[F6] Hyperbolic functions ([[def-hyperbolic-functions]], [[thm-hyperbolic-identities-and-derivatives]]): $\operatorname{sech}=1/\cosh$, $\tanh=\sinh/\cosh$, $\cosh^2-\sinh^2=1$, $(\tanh)'=\operatorname{sech}^2$ and $(\operatorname{sech})'=-\operatorname{sech}\tanh$; dividing the Pythagorean identity by $\cosh^2$ gives $\operatorname{sech}^2+\tanh^2=1$ as well.

[F7] Convexity and simple connectivity ([[cor-convex-subsets-of-rn-are-contractible]], [[cor-contractible-spaces-are-path-connected]], [[lem-contractibility-implies-trivial-fundamental-group]], [[def-simply-connected]], [[thm-path-connected-implies-connected]]): the open half-space $U^n$ is convex, hence contractible and path connected, and its fundamental group at every basepoint is trivial; a nonempty path connected space with trivial fundamental group is simply connected, and a path connected space is connected.

## Proof

1.1 The metric $g_a$ is Riemannian and $U^n$ is boundaryless. [F1, given]
In the global coordinates $g_{ij}=(a^2y^2)^{-1}\delta_{ij}$ is smooth and symmetric, and for $v\ne0$ $$g_a(v,v)=\frac{1}{a^2y^2}\sum_i(v^i)^2>0$$ because $y>0$. The coordinate criterion [F1] therefore makes $g_a$ a Riemannian metric on the open set $U^n$, which is an $n$-dimensional boundaryless smooth manifold as an open subset of $\mathbb R^n$. [F1, given]

2.1 The Christoffel symbols. [F1, F2, step 1.1]
Write $f=(ay)^{-1}$, so that $g_{ij}=f^2\delta_{ij}$, and put $f_l:=\partial_l f$; since $f$ depends only on $y=x^n$ one has $f_l=f'\delta_{ln}$ with $f'=-1/(ay^2)=-f/y$. Substituting $\partial_l g_{ij}=2ff_l\delta_{ij}$ and $g^{kl}=f^{-2}\delta^{kl}$ in the formula of [F2] gives $$\Gamma^k{}_{ij}=f^{-1}\delta^{kl}\bigl(f_i\delta_{jl}+f_j\delta_{il}-f_l\delta_{ij}\bigr) =\frac{f'}{f}\bigl(\delta_{in}\delta^k_{\ j}+\delta_{jn}\delta^k_{\ i} -\delta^k_{\ n}\delta_{ij}\bigr) =-\frac{1}{y}\bigl(\delta_{in}\delta^k_{\ j}+\delta_{jn}\delta^k_{\ i} -\delta_{kn}\delta_{ij}\bigr),$$ where the second equality contracts $\delta^{kl}f'\delta_{ln}=f'\delta^k_n$ in each of the three terms and the third uses $f'/f=-y^{-1}$ and $\delta^k_{\ n}=\delta_{kn}$. The symbols depend on the point only through the factor $y^{-1}$. [F1, F2, step 1.1]

3.1 The curvature tensor and the sectional curvature $-a^2$. [F2, F3, step 2.1]
Put $\varepsilon_i:=\delta_{in}$ and $$A^\ell{}_{jk}:=\varepsilon_j\delta^\ell_{\ k}+\varepsilon_k\delta^\ell_{\ j} -\delta_{jk}\varepsilon^\ell,$$ so that step 2.1 reads $\Gamma^\ell{}_{jk}=-y^{-1}A^\ell{}_{jk}$ and $\partial_i\Gamma^\ell{}_{jk}=y^{-2}\varepsilon_iA^\ell{}_{jk}$. Substitution in the coordinate formula of [F3] gives $$\partial_i\Gamma^\ell{}_{jk}-\partial_j\Gamma^\ell{}_{ik} =y^{-2}\bigl(\varepsilon_iA^\ell{}_{jk}-\varepsilon_jA^\ell{}_{ik}\bigr) =y^{-2}\bigl(\varepsilon_i\varepsilon_k\delta^\ell_{\ j} -\varepsilon_j\varepsilon_k\delta^\ell_{\ i} -\varepsilon_i\varepsilon^\ell\delta_{jk} +\varepsilon_j\varepsilon^\ell\delta_{ik}\bigr),$$ the second equality expanding the two $A$'s and cancelling the two terms $\varepsilon_i\varepsilon_j\delta^\ell_{\ k}$. Expanding the two quadratic terms likewise gives $$\Gamma^m{}_{jk}\Gamma^\ell{}_{im}-\Gamma^m{}_{ik}\Gamma^\ell{}_{jm} =y^{-2}\bigl(A^m{}_{jk}A^\ell{}_{im}-A^m{}_{ik}A^\ell{}_{jm}\bigr) =y^{-2}\bigl(\delta_{ik}\delta^\ell_{\ j}-\delta_{jk}\delta^\ell_{\ i} -\varepsilon_i\varepsilon_k\delta^\ell_{\ j} +\varepsilon_j\varepsilon_k\delta^\ell_{\ i} +\varepsilon_i\varepsilon^\ell\delta_{jk} -\varepsilon_j\varepsilon^\ell\delta_{ik}\bigr),$$ so that the four $\varepsilon$-terms of the quadratic expansion are exactly the negatives of the four $\varepsilon$-terms of the derivative expansion and cancel them, leaving $$R^\ell{}_{kij}=y^{-2}\bigl(\delta_{ik}\delta^\ell_{\ j} -\delta_{jk}\delta^\ell_{\ i}\bigr).$$ Since $g_{ik}=f^2\delta_{ik}$ with $f^{-2}=a^2y^2$, this is $$R(\partial_i,\partial_j)\partial_k =y^{-2}\bigl(\delta_{ik}\partial_j-\delta_{jk}\partial_i\bigr) =-a^2\bigl(g_{jk}\partial_i-g_{ik}\partial_j\bigr).$$ Tensoriality of $R$ in [F3] upgrades this identity on coordinate frames to $$R(X,Y)Z=-a^2\bigl(g(Y,Z)X-g(X,Z)Y\bigr)$$ for arbitrary tangent vectors. Pairing with $X=u$ after putting $Y=Z=v$ and using [F3] gives $$\operatorname{Rm}(u,v,v,u)=-a^2\bigl(g(u,u)g(v,v)-g(u,v)^2\bigr),$$ so for a basis $(u,v)$ of any tangent two-plane the positive Gram determinant in the denominator cancels and the sectional curvature is $K=-a^2$ at every point of $U^n$. [F2, F3, step 2.1]

3.2 The vertical lines are complete geodesics. [F2, F4, F6, step 2.1]
Let $x_0\in\mathbb R^{n-1}$ and $y_0>0$, and put $\gamma(t)=(x_0,y_0e^{at})$. Then $\gamma$ is smooth, takes values in $U^n$ and is defined on all of $\mathbb R$. Its coordinates are $\gamma^i=x_0^i$ for $i<n$ and $\gamma^n=y_0e^{at}=:y(t)$, so $\dot\gamma^i=0$ for $i<n$ and $\dot\gamma^n=ay$, and $\ddot\gamma^i=0$ for $i<n$, $\ddot\gamma^n=a^2y$. Substituting the symbols of step 2.1, for $k<n$ every term contains the factor $\delta^k_{\ j}$ or $\delta^k_{\ i}$ or $\delta_{kn}$ with $k<n$, so $$\Gamma^k{}_{ij}\dot\gamma^i\dot\gamma^j =-\frac{1}{y}\bigl(\delta_{in}\delta^k_{\ j}+\delta_{jn}\delta^k_{\ i} -\delta_{kn}\delta_{ij}\bigr)\dot\gamma^i\dot\gamma^j=0,$$ while for $k=n$ the bracket is $\dot\gamma^n\dot\gamma^n+\dot\gamma^n\dot\gamma^n-|\dot\gamma|^2_{\mathrm E}=\dot y^2$, so $$\ddot\gamma^n+\Gamma^n{}_{ij}\dot\gamma^i\dot\gamma^j =a^2y-\frac{1}{y}\dot y^2=a^2y-\frac{1}{y}(ay)^2=0 .$$ Hence the geodesic equation of [F2] holds, and $\gamma$ is a geodesic defined on all of $\mathbb R$, of constant speed $g_a(\dot\gamma,\dot\gamma)=(a^2y^2)^{-1}(ay)^2=1$. [F2, F4, F6, step 2.1]

3.3 The semicircles are complete geodesics. [F2, F4, F6, step 2.1]
By a horizontal translation and rotation it suffices to take $\bar c=0$ and $u=e_1$. Put $$\gamma(t)=\bigl(-\rho\tanh(at),\,0,\dots,0,\,\rho\operatorname{sech}(at)\bigr), \qquad y(t)=\rho\operatorname{sech}(at)>0 .$$ Then $\gamma$ takes values in $U^n$; by [F6] it is smooth and defined on all of $\mathbb R$, with $\dot\gamma^1(t)=-\rho a\operatorname{sech}^2(at)$, $\dot\gamma^n(t)=-\rho a\operatorname{sech}(at)\tanh(at)$ and all other components zero. Its acceleration is $\ddot\gamma^1=2\rho a^2\operatorname{sech}^2(at)\tanh(at)$ and $\ddot\gamma^n=\rho a^2\bigl(\operatorname{sech}(at)\tanh^2(at) -\operatorname{sech}^3(at)\bigr)$. By step 2.1 the only nonvanishing symbols with the present velocity are $\Gamma^1{}_{1n}=\Gamma^1{}_{n1}=-1/y$, $\Gamma^n{}_{11}=1/y$ and $\Gamma^n{}_{nn}=-1/y$; the remaining coordinates are constant with vanishing Christoffel contributions, since $A^k{}_{ij}=0$ whenever $k\ne n$ and both $i,j\ne n$. The $x^1$-component of the geodesic equation is therefore $$\ddot\gamma^1-\frac{2}{y}\dot\gamma^1\dot\gamma^n =2\rho a^2\operatorname{sech}^2\tanh -\frac{2\rho^2a^2\operatorname{sech}^3\tanh}{\rho\operatorname{sech}}=0,$$ and the $y$-component is $$\ddot\gamma^n-\frac{1}{y}\bigl((\dot\gamma^n)^2-(\dot\gamma^1)^2\bigr) =\rho a^2\operatorname{sech}\bigl(\tanh^2-\operatorname{sech}^2\bigr) -\frac{\rho^2a^2\operatorname{sech}^2\bigl(\tanh^2-\operatorname{sech}^2\bigr)}{\rho\operatorname{sech}}=0,$$ where the two displays use $\dot\gamma^1=-\rho a\operatorname{sech}^2$, $\dot\gamma^n=-\rho a\operatorname{sech}\tanh$ and $y=\rho\operatorname{sech}$. Hence $\gamma$ satisfies the geodesic equation and is a geodesic defined on all of $\mathbb R$, of constant $g_a$-speed $1$, because $$g_a(\dot\gamma,\dot\gamma) =\frac{\rho^2a^2\operatorname{sech}^2(\operatorname{sech}^2+\tanh^2)} {a^2\rho^2\operatorname{sech}^2}=1$$ by the identity $\operatorname{sech}^2+\tanh^2=1$ of [F6]. [F2, F4, F6, step 2.1]

4.1 Every maximal geodesic is one of these and is defined for all time.
Let $p=(\bar x_0,y_0)\in U^n$ and let $v\in T_pU^n$ be a unit vector with respect to $g_a$, decomposed as $v=(v_H,v_n)$ with $v_H\in\mathbb R^{n-1}$ and $v_n\in\mathbb R$, so that $|v_H|^2+v_n^2=a^2y_0^2$.
If $v_H=0$, then $v=\pm ay_0\partial_n$; the vertical line of step 3.2 passes through $p$ with velocity $ay_0\partial_n$ at $t=0$, and its time reversal $t\mapsto\gamma(-t)$ (an affine reparametrization, [F4]) passes through $p$ with velocity $-ay_0\partial_n$. So in this case the maximal geodesic with initial datum $(p,v)$ is that line, and its domain is $\mathbb R$.
Otherwise $v_H\ne0$. Put $u:=-v_H/|v_H|$, let $s\in\mathbb R$ be the unique solution of $\sinh s=-v_n/|v_H|$ (unique because $\sinh$ is strictly increasing and onto, [F6]), and set $$\rho:=y_0\cosh s>0,\qquad \bar c:=\bar x_0+\rho\tanh(s)\,u .$$ Consider the semicircle of step 3.3 with data $(\bar c,u,\rho)$: $$\gamma(t)=\bigl(\bar c-\rho\tanh(at)\,u,\ \rho\operatorname{sech}(at)\bigr) =:(\gamma_H(t),\gamma^n(t)).$$ At $t_1:=s/a$ its height is $\gamma^n(t_1)=\rho\operatorname{sech}s=y_0\cosh s\operatorname{sech}s=y_0$, so its horizontal part is $\bar c-\rho\tanh(s)u=\bar x_0$, that is, $\gamma(t_1)=p$. Its velocity there is $$\dot\gamma(t_1) =a y_0\bigl(-\operatorname{sech}(s)\,u,\ -\tanh(s)\bigr),$$ because $\rho a\operatorname{sech}^2s=ay_0\operatorname{sech}s$ and $\rho a\operatorname{sech}s\tanh s=ay_0\tanh s$. The identities $\cosh^2s=1+\sinh^2s$ and $\sinh s=-v_n/|v_H|$ give $$|v_H|=ay_0\operatorname{sech}s,\qquad v_n=-|v_H|\sinh s=-ay_0\tanh s,$$ using $\tanh s\cosh s=\sinh s$; together with $u=-v_H/|v_H|$ this shows $\dot\gamma(t_1)=(v_H,v_n)=v$. Hence the parameter-translated curve $t\mapsto\gamma(t+t_1)$ is a geodesic defined on all of $\mathbb R$ with initial datum $(p,v)$, so by uniqueness in [F4] it is the maximal geodesic of that initial datum, and its domain is $\mathbb R$.
For an arbitrary nonzero initial velocity $w$, apply the preceding
construction to $v=w/|w|_{g_a}$ and reparametrize by $t\mapsto |w|_{g_a}t$;
this gives a geodesic on $\mathbb R$ with velocity $w$, which is maximal by
uniqueness. For zero initial velocity the constant curve solves [F2] on
$\mathbb R$ and is maximal by [F4]. Thus every maximal geodesic of
$(U^n,g_a)$ has domain $\mathbb R$: the manifold is geodesically complete, and by Hopf–Rinow [F5] it is a complete metric space.
[F4, F5, F6, step 3.2, step 3.3]

5.1 Simple connectedness and the boundary cases.
The half-space $U^n=\{y>0\}$ is convex: for $x,z\in U^n$ and $t\in[0,1]$ the point $(1-t)x+tz$ has last coordinate $(1-t)x^n+tz^n>0$. Hence $U^n$ is contractible by [F7], so its fundamental group is trivial at every basepoint and it is path connected; by [F7] it is simply connected and connected. Together with completeness from step 4.1 and constant curvature $-a^2$ from step 3.1, $(U^n,g_a)$ is a complete, simply connected space form of curvature $k=-a^2$.
Boundary cases: the degenerate scale $a=0$ is excluded by hypothesis, since $g_0$ is not defined; the limiting boundary hyperplane $y=0$ is not part of $U^n$, and every geodesic of steps 3.2 and 3.3 is finite at every finite time but approaches the boundary only as $t\to\pm\infty$; the case $n=2$ exhibits the semicircles as the only nonvertical geodesics, and for $n>2$ each nonvertical geodesic lies in a two-plane spanned by its initial horizontal direction and $\partial_n$ while the remaining horizontal coordinates stay constant. Every geodesic in steps 3.2 and 3.3 is defined for all real times, so no endpoint of a maximal geodesic is finite. The only choice used is the inherited $\mathrm{AC}_\omega$ of [A1], inherited through sectional curvature in step 3.1, geodesic existence and uniqueness in step 4.1, and Hopf–Rinow in step 4.1; the charts, the geodesics and the reparametrizations are explicit.
[F5, F7, step 4.1] ∎
