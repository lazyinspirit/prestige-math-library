---
id: cor-squared-distance-is-strictly-convex-along-geodesics-in-a-hadamard-manifold
kind: corollary
title: Squared distance is strictly convex along geodesics in a hadamard manifold
status: draft
origin: pipeline
deps:
  - thm-cartan-hadamard
  - cor-simply-connected-complete-nonpositively-curved-manifolds-have-unique-geodesics-between-points
  - thm-no-conjugate-points-under-nonpositive-sectional-curvature
  - thm-characterization-of-a-cut-point
  - thm-hessian-comparison-for-distance-under-sectional-curvature-bounds
  - prop-gradient-of-the-distance-is-the-outward-unit-radial-field-off-the-cut-locus
  - prop-gradient-hessian-and-divergence-connection-formulas
  - prop-the-riemannian-hessian-is-symmetric
  - def-levi-civita-connection
  - prop-geodesics-have-constant-speed-for-a-metric-compatible-connection
  - def-convex-and-strictly-convex-functions-on-euclidean-sets
  - cor-second-derivative-characterises-convexity
  - def-sectional-curvature
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "§§20.1 and 24.3, printed pp.147–149 and 178–179: the Hessian of the squared distance and the Cartan–Hadamard convexity consequences, including strict convexity of the squared distance along geodesics"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§5, printed pp.17–19: the Cartan–Hadamard setup in which the exponential map is a diffeomorphism and the radial distance has the flat Hessian bound"
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let
$(M,g)$ be a **Hadamard manifold**: a complete, connected, boundaryless,
finite-dimensional Riemannian manifold that is simply connected and whose
sectional curvature satisfies $K\le0$ at every tangent two-plane
([[def-sectional-curvature]]). Fix a point $p\in M$ and put
$$f:M\to\mathbb R,\qquad f(x):=\tfrac12\,d_g(p,x)^2 .$$
Then:

1. $f$ is smooth on all of $M$, its covariant Hessian
   $\operatorname{Hess}f$ is a smooth symmetric two-tensor field, and the
   operator inequality
   $$\operatorname{Hess}f\ge g\qquad\text{on }M$$
   holds, meaning $\operatorname{Hess}f(X,X)\ge g(X,X)$ for every $x\in M$ and
   every $X\in T_xM$. At the base point there is equality:
   $\operatorname{Hess}f(p)=g_p$.
2. For every nonconstant affinely parametrized geodesic
   $\gamma:I\to M$ — that is, $\nabla_{\dot\gamma}\dot\gamma=0$ on the open
   interval $I$ — the function
   $$I\ni t\longmapsto d_g\bigl(p,\gamma(t)\bigr)^2=2f(\gamma(t))$$
   is **strictly convex** in the sense of
   [[def-convex-and-strictly-convex-functions-on-euclidean-sets]]: for
   $s,t\in I$ with $s\ne t$ and every $\lambda\in(0,1)$,
   $$d_g\bigl(p,\gamma((1-\lambda)s+\lambda t)\bigr)^2 <(1-\lambda)\,d_g\bigl(p,\gamma(s)\bigr)^2 +\lambda\,d_g\bigl(p,\gamma(t)\bigr)^2 .$$

Constant geodesics are excluded from assertion 2, and are the only excluded
case: for a constant $\gamma$ the restricted function is constant, so it is
convex but not strictly convex. Affine parametrization is essential; the
assertion need not survive reparametrization. The manifold is not assumed to
be noncompact or of dimension $n\ge2$: the case $n=1$ is covered by a separate
computation inside the proof, and for $n=0$ there is no nonconstant geodesic
and assertion 2 is vacuous. The only choice used is the inherited
$\mathrm{AC}_\omega$; no completeness hypothesis is added beyond the one
already contained in the word Hadamard.

## Facts & Assumptions

**Given:** The inherited $\mathrm{AC}_\omega$ of [A1]; a Hadamard manifold $(M,g)$; a point $p\in M$; the function $f=\tfrac12r_p^2$ with $r_p=d_g(p,\cdot)$; and a nonconstant affinely parametrized geodesic $\gamma:I\to M$.

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$ ([[def-countable-choice]]), carried by the Hopf–Rinow, exponential, cut-locus and geodesic-existence suppliers quoted below; no further selection is made.

[F1] Cartan–Hadamard ([[thm-cartan-hadamard]]): since $(M,g)$ is complete, connected, simply connected and has $K\le0$, for every point $x\in M$ the exponential map $\exp_x:T_xM\to M$ is a diffeomorphism. In particular $\exp_p$ is bijective and smooth with smooth inverse.

[F2] Unique minimizing segments ([[cor-simply-connected-complete-nonpositively-curved-manifolds-have-unique-geodesics-between-points]]): every two points $x,y\in M$ are joined by exactly one affinely parametrized geodesic segment $[0,1]\to M$ sending $0$ to $x$ and $1$ to $y$; that segment minimizes length and $d_g(x,y)$ equals its length. Consequently, for every $w\in T_pM$, the affinely parametrized geodesic segment $[0,1]\ni t\mapsto\exp_p(tw)$ is the unique such segment from $p$ to $\exp_p(w)$ and is minimizing, so $$d_g\bigl(p,\exp_p(w)\bigr)=|w|_p\qquad(w\in T_pM),$$ where $|w|_p=\sqrt{g_p(w,w)}$.

[F3] No conjugate points under $K\le0$ ([[thm-no-conjugate-points-under-nonpositive-sectional-curvature]]): no unit-speed geodesic of $M$ contains a pair of conjugate points; equivalently, there is no nonzero Jacobi field along a geodesic vanishing at two distinct parameters.

[F4] Characterization of cut points ([[thm-characterization-of-a-cut-point]]): for $v\in S_pM$ with finite cut time $c_p(v)<+\infty$, either $\gamma_{p,v}(0)$ and $\gamma_{p,v}(c_p(v))$ are conjugate along the segment, or two distinct minimizing unit-speed geodesics join $p$ to $\gamma_{p,v}(c_p(v))$. Hence, if neither alternative can occur, the cut time is $+\infty$.

[F5] Gradient of distance ([[prop-gradient-of-the-distance-is-the-outward-unit-radial-field-off-the-cut-locus]]): for $0<t<c_p(v)$ one has $\operatorname{grad}r_p(\gamma_{p,v}(t)) =\dot\gamma_{p,v}(t)$, a unit vector; along the minimizing radial segment the gradient of the distance is the outward unit radial field.

[F6] Hessian comparison in the nonpositive direction ([[thm-hessian-comparison-for-distance-under-sectional-curvature-bounds]]): let $q\in M\setminus(\{p\}\cup\operatorname{Cut}(p))$, put $t_0:=r_p(q)>0$, let $\gamma_q$ be the minimizing unit-speed geodesic from $p$ to $q$ and $N:=\{\dot\gamma_q(t_0)\}^\perp=\{\operatorname{grad}r_p(q)\}^\perp$. Then (a) $\operatorname{Hess}r_p(\operatorname{grad}r_p,\cdot)=0$ at $q$, and (b) if $\operatorname{Rm}(X,\dot\gamma_q(s),\dot\gamma_q(s),X)\le k|X|^2$ for every $s\in(0,t_0]$ and every $X\perp\dot\gamma_q(s)$, then $\operatorname{Hess}r_p(X,X)\ge\operatorname{ct}_k(t_0)\,g_q(X,X)$ for all $X\in N$. Here the sectional curvature of $M$ satisfies $K\le0$, so the hypothesis of (b) holds with $k=0$, where $\operatorname{ct}_0(t_0)=1/t_0$.

[F7] Covariant Hessian ([[prop-gradient-hessian-and-divergence-connection-formulas]], [[prop-the-riemannian-hessian-is-symmetric]], [[def-levi-civita-connection]]): for smooth $u$ the Hessian $\operatorname{Hess}u(X,Y)=g(\nabla_X\operatorname{grad}u,Y) =X(Yu)-(\nabla_XY)u$ is a smooth two-tensor field and is symmetric, $\operatorname{Hess}u(X,Y)=\operatorname{Hess}u(Y,X)$, and the Levi–Civita connection is metric compatible, $Xg(Y,Z)=g(\nabla_XY,Z)+g(Y,\nabla_XZ)$.

[F8] Constant speed ([[prop-geodesics-have-constant-speed-for-a-metric-compatible-connection]]): along a geodesic of the Levi–Civita connection the speed $t\mapsto|\dot\gamma(t)|_g$ is constant, so for a nonconstant geodesic $c:=|\dot\gamma(t)|_g^2$ is a positive constant independent of $t$.

[F9] Strict convexity of quadratic functions ([[def-convex-and-strictly-convex-functions-on-euclidean-sets]], [[cor-second-derivative-characterises-convexity]]): a twice-differentiable function $\psi$ on an open interval with $\psi''\ge0$ is convex; and for $c>0$ the function $t\mapsto\tfrac c2t^2$ is strictly convex, because for $x\ne y$ and $\lambda\in(0,1)$, $$(1-\lambda)x^2+\lambda y^2-\bigl((1-\lambda)x+\lambda y\bigr)^2 =\lambda(1-\lambda)(x-y)^2>0 .$$

## Proof

**Proof technique:** direct: identify $f$ in exponential coordinates using the uniqueness of minimizing segments, verify the product rule for Hessians of squares of smooth functions, apply the Hessian comparison in the nonpositive direction to obtain $\operatorname{Hess}f\ge g$, and integrate the resulting second-derivative bound along the geodesic.

1.1 The distance formula and the absence of cut points. [F1, F2, F3, F4]
By [F2], for every $w\in T_pM$ the segment $t\mapsto\exp_p(tw)$, $t\in[0,1]$, is the unique affinely parametrized geodesic segment from $p$ to $\exp_p(w)$, and it minimizes; hence $d_g(p,\exp_p(w))=|w|_p$. Suppose now that $v\in S_pM$ has finite cut time $c:=c_p(v)<+\infty$. By [F4] either $\gamma_{p,v}(0)$ and $\gamma_{p,v}(c)$ are conjugate along $\gamma_{p,v}$, which [F3] forbids, or two distinct minimizing unit-speed geodesics join $p$ to $\gamma_{p,v}(c)$, which contradicts the uniqueness in [F2] (a minimizing unit-speed geodesic on $[0,c]$ reparametrized affinely to $[0,1]$ is an affinely parametrized geodesic segment from $p$ to the same point, and there is exactly one). Both alternatives are impossible, so $c_p(v)=+\infty$ for every unit $v$: the cut locus of $p$ is empty, and $r_p(\exp_p w)=|w|_p$ for every $w\in T_pM$.

1.2 The product rule for a squared smooth function. [F7, algebra]
Let $u>0$ be smooth near a point $x$ and set $F:=\tfrac12u^2$. Then $\operatorname{grad}F=u\operatorname{grad}u$, so for vector fields $X,Y$, $$\operatorname{Hess}F(X,Y) =g\bigl(\nabla_X(u\operatorname{grad}u),Y\bigr) =X(u)\,g(\operatorname{grad}u,Y)+u\,g(\nabla_X\operatorname{grad}u,Y),$$ i.e. $$\operatorname{Hess}\bigl(\tfrac12u^2\bigr)(X,Y) =du(X)du(Y)+u\operatorname{Hess}u(X,Y),$$ both sides being smooth and symmetric by [F7].

1.3 The second derivative of a smooth function along a geodesic. [F7, F8]
Let $h$ be smooth and let $\sigma$ be a geodesic with $\nabla_{\dot\sigma}\dot\sigma=0$. Then $$(h\circ\sigma)'=dh(\dot\sigma)=g(\operatorname{grad}h,\dot\sigma),$$ and differentiating again with metric compatibility and $\nabla_{\dot\sigma}\dot\sigma=0$ gives $$(h\circ\sigma)''=g\bigl(\nabla_{\dot\sigma}\operatorname{grad}h,\dot\sigma\bigr) =\operatorname{Hess}h(\dot\sigma,\dot\sigma).$$ The identity is local in the parameter and holds at every time of $I$.

2.1 Smoothness of $f$ and its Hessian at the base point. [F1, F7, step 1.1, step 1.3]
By step 1.1, $(f\circ\exp_p)(w)=\tfrac12|w|_p^2$ for every $w\in T_pM$, a smooth quadratic form on the vector space $T_pM$; since $\exp_p$ is a diffeomorphism by [F1], $f$ is smooth on $M$. For $X\in T_pM$ the curve $s\mapsto\exp_p(sX)$ is an affinely parametrized geodesic, so step 1.1 and step 1.3 give $$\operatorname{Hess}f(p)(X,X)=(f\circ\gamma_X)''(0) =\left.\frac{d^2}{ds^2}\right|_{s=0}\tfrac12 s^2|X|_p^2=|X|_p^2=g_p(X,X).$$ As $\operatorname{Hess}f(p)$ is symmetric ([F7]), the polarization identity recovers all mixed values, so $\operatorname{Hess}f(p)=g_p$.

2.2 The lower bound $\operatorname{Hess}f\ge g$ off the base point, in dimension $n\ge2$. [F5, F6, step 1.1, step 1.2]
Fix $q\ne p$ and let $t_0:=r_p(q)>0$. By step 1.1 the cut locus of $p$ is empty, so $q\notin\{p\}\cup\operatorname{Cut}(p)$: $r_p$ is smooth near $q$, $|{\operatorname{grad}r_p}|=1$ and $\operatorname{grad}r_p$ is the terminal velocity of the minimizing geodesic from $p$ to $q$ ([F5]). By step 1.2 applied to $u=r_p$, $$\operatorname{Hess}f=\operatorname{Hess}\bigl(\tfrac12r_p^2\bigr) =dr_p\otimes dr_p+r_p\operatorname{Hess}r_p \qquad\text{near }q .$$ Write an arbitrary $X\in T_qM$ as $X=a\operatorname{grad}r_p+X^\perp$ with $a:=dr_p(X)$ and $X^\perp\perp\operatorname{grad}r_p$. By [F6](a) $\operatorname{Hess}r_p(\operatorname{grad}r_p,\cdot)=0$, so $$\operatorname{Hess}r_p(X,X)=\operatorname{Hess}r_p(X^\perp,X^\perp).$$ Since $K\le0$ everywhere, the hypothesis of [F6](b) holds with $k=0$ along the minimizing geodesic from $p$ to $q$, and [F6](b) yields $\operatorname{Hess}r_p(X^\perp,X^\perp)\ge(1/t_0)|X^\perp|^2$. Therefore $$\operatorname{Hess}f(X,X)=a^2+t_0\operatorname{Hess}r_p(X^\perp,X^\perp) \ge a^2+|X^\perp|^2=g_q(X,X),$$ using that $X\mapsto(a,X^\perp)$ is a $g_q$-orthogonal decomposition.

2.3 The lower bound in dimension $n=1$. [F5, F7, step 1.1, step 1.2]
If $\dim M=1$ then at every $q\ne p$ the tangent space is spanned by the unit vector $\operatorname{grad}r_p$, so $X^\perp=0$ and the bound $\operatorname{Hess}r_p(X^\perp,X^\perp)\ge(1/t_0)|X^\perp|^2$ holds with both sides equal to $0$; the gradient is a unit geodesic field by [F5], so $\nabla_{\operatorname{grad}r_p}\operatorname{grad}r_p=0$ and $\operatorname{Hess}r_p(\operatorname{grad}r_p,\operatorname{grad}r_p) =\tfrac12\operatorname{grad}r_p(|{\operatorname{grad}r_p}|^2)=0$ by [F7]. Hence, by step 1.2, $\operatorname{Hess}f=dr_p\otimes dr_p=g$ off $p$, and the computation of step 2.2 applies verbatim without invoking the dimension-$n\ge2$ comparison bound.

3.1 The bound $\operatorname{Hess}f\ge g$ on all of $M$. [step 2.1, step 2.2, step 2.3]
Off $p$ the pointwise inequality was proved in step 2.2 for $n\ge2$ and in step 2.3 for $n=1$, and at $p$ the equality $\operatorname{Hess}f(p)=g_p$ of step 2.1 gives the bound as well. In dimension zero $M$ is a point and the tensor inequality is vacuous. In positive dimension the inequality was checked on a decomposition spanning each tangent space, so $\operatorname{Hess}f\ge g$ holds on $M$.

4.1 The second-derivative bound along a geodesic. [F8, step 1.3, step 3.1]
For the nonconstant affinely parametrized geodesic $\gamma$, put $\varphi(t):=f(\gamma(t))=\tfrac12d_g(p,\gamma(t))^2$. By step 1.3, $$\varphi''(t)=\operatorname{Hess}f(\dot\gamma(t),\dot\gamma(t)) \ge g(\dot\gamma(t),\dot\gamma(t))=c>0,$$ where $c=|\dot\gamma|^2$ is a positive constant by [F8]. In particular $\varphi$ is twice differentiable on the open interval $I$ with $\varphi''\ge c$ everywhere.

5.1 Strict convexity. [F9, step 4.1]
Define $\psi(t):=\varphi(t)-\tfrac c2t^2$ on $I$. Then $\psi''=\varphi''-c\ge0$, so $\psi$ is convex by [F9]; and $t\mapsto\tfrac c2t^2$ is strictly convex by [F9], since $c>0$. For distinct $s,t\in I$ and $\lambda\in(0,1)$, put $m:=(1-\lambda)s+\lambda t$ and $q(z):=\tfrac c2z^2$; convexity of $\psi$ and strict convexity of $q$ give, one of the two summed inequalities being strict, $$\varphi(m)=\psi(m)+q(m) <\bigl[(1-\lambda)\psi(s)+\lambda\psi(t)\bigr] +\bigl[(1-\lambda)q(s)+\lambda q(t)\bigr] =(1-\lambda)\varphi(s)+\lambda\varphi(t),$$ the strict inequality because $s\ne t$ in [F9]. Multiplying by $2$, the function $t\mapsto d_g(p,\gamma(t))^2$ is strictly convex on $I$, as claimed. A constant geodesic has $\varphi''=0$ and $\varphi$ constant, so no strict convexity can be asserted there; this is the only case excluded, and the affine parametrization was used only to identify $c=|\dot\gamma|^2$ as a positive constant in step 4.1. The proof selects no object of its own: the geodesics and the minimizing segments it uses are those supplied one pair at a time by the cited consequences of completeness, and the inherited $\mathrm{AC}_\omega$ of [A1] is consumed exactly through them. ∎

## Source locator

Datar §20.1 (printed pp.147–149) contains the Hessian of the squared distance and §24.3 (printed pp.178–179) the Cartan–Hadamard consequences; the proof above realizes the route through the in-run Hessian comparison ([[thm-hessian-comparison-for-distance-under-sectional-curvature-bounds]]) in the $K\le0$ direction $k=0$, whose model cotangent is $\operatorname{ct}_0(t_0)=1/t_0$. Eschenburg §5 (printed pp.17–19) uses the same Cartan–Hadamard setup; the pointwise inequality $\operatorname{Hess}(\tfrac12r_p^2)\ge g$ and the resulting strict convexity along nonconstant geodesics are the standard convexity theorem for Hadamard manifolds. The cut-locus emptiness in step 1.1 is proved inside the item from the in-run characterization of cut points and the uniqueness of minimizing segments.
