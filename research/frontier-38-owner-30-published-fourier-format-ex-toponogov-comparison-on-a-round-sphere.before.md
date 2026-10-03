---
id: ex-toponogov-comparison-on-a-round-sphere
kind: example
title: Toponogov comparison on a round sphere
status: published
origin: pipeline
deps:
  - thm-toponogov-hinge-comparison
  - thm-toponogov-triangle-comparison
  - def-comparison-triangle-in-the-two-dimensional-space-form
  - def-countable-choice
  - prop-round-sphere-model-geometry
  - ex-the-round-sphere-has-positive-constant-sectional-curvature
  - def-constant-sectional-curvature-and-space-form
  - def-pointwise-norm-and-angle-from-a-riemannian-metric
  - def-riemannian-distance-on-a-connected-manifold
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-sine-and-cosine-addition-formulas
  - def-principal-inverse-sine-and-cosine
  - thm-existence-uniqueness-and-smooth-dependence-of-geodesics
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - def-riemannian-isometry-and-local-isometry
  - cor-riemannian-isometries-preserve-length-and-distance
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
    - title: "U. Lang, Riemannian and Metric Geometry (lecture notes)"
      url: https://people.math.ethz.ch/~lang/RG.pdf
      locator: "Chapter 5, Lemmas 5.1–5.2 and Theorem 5.15: the model cosine law, monotonicity of the hinge side, and Toponogov comparison"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§6, Theorem 6.1 and Corollary 6.3, printed pp.21–25: the distance and angle comparisons, with the constant-curvature model attaining equality"
---

## Example

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Fix
$k>0$, put $R:=1/\sqrt k$, let $n\ge2$, and give the round sphere
$$S_R^n:=\{x\in\mathbb R^{n+1}:\langle x,x\rangle=R^2\}$$
the Riemannian metric $g$ induced by the Euclidean inner product
([[def-euclidean-inner-product]]). By
[[prop-round-sphere-model-geometry]] and
[[ex-the-round-sphere-has-positive-constant-sectional-curvature]], the
manifold $(S_R^n,g)$ is complete, connected and boundaryless with constant
sectional curvature $k=1/R^2$; realize the model surface $M^2_k$ of
[[def-comparison-triangle-in-the-two-dimensional-space-form]] as a round
two-sphere of radius $R$. Then, for data satisfying the hypotheses of the
comparison theorems of [[thm-toponogov-hinge-comparison]] and
[[thm-toponogov-triangle-comparison]]:

1. **Hinge equality.** If $\sigma_1,\sigma_2$ are unit-speed minimizing
   geodesics of lengths $a,b>0$ starting at a common point $p$, with included
   angle $\theta\in[0,\pi]$, endpoints $x,y$ and $c:=d_g(x,y)$, and if the
   hinge datum is admissible, then $c=c_k(a,b,\theta)$: the hinge comparison
   is an equality.
2. **Self-comparison and angle equality.** If $x,y,z\in S_R^n$ are joined by
   minimizing geodesic segments with admissible side lengths $(a,b,c)$, then
   each actual vertex angle equals the corresponding comparison angle, and the
   triangle is its own comparison triangle: its vertices lie in a round
   two-sphere of radius $R$ inside $S_R^n$, and an isometry of that two-sphere
   onto the model $M^2_k$ carries the triangle, together with its three
   minimizing sides, to a comparison triangle with side lengths $(a,b,c)$.
3. **Side-point equality (diagnostic).** For admissible hinge data and the
   points $u=\sigma_1(s)$, $v=\sigma_2(t)$ with $s\in[0,a]$, $t\in[0,b]$, one
   has $d_g(u,v)=d_k(\bar u,\bar v)$ for the corresponding points
   $\bar u,\bar v$ of a model hinge with the same lengths and included angle:
   the model attains equality in the corresponding-side-point comparison.
   This is a direct computation for the model and is not used as a proof of
   the general comparison theorem.

Here **admissible** means that the hypotheses of the respective comparison
theorem are satisfied: for a hinge, $\sigma_1,\sigma_2$ are unit-speed
minimizing geodesics with positive lengths and, since $k>0$,
$$a,b,c<\pi R,\qquad a+b+c<2\pi R;$$
for a triangle, the three positive side lengths satisfy the strict triangle
inequalities and the same two displayed bounds, so that a comparison triangle
in $M^2_k$ exists. In general the two theorems give only the inequality
$c\le c_k(a,b,\theta)$ and the angle inequality; the example shows that on the
round sphere both are equalities, and it identifies the actual triangle with a
comparison triangle through the standard isometry between a great two-sphere
and the model.

## Facts & Assumptions

**Given:** The inherited $\mathrm{AC}_\omega$ of [A1]; the curvature $k>0$ and the radius $R=1/\sqrt k$; the dimension $n\ge2$; the round sphere $S_R^n$ with its induced metric $g$; the model $M^2_k$ realized as a round two-sphere of radius $R$; and, for the three claims, the data: hinge geodesics $\sigma_1,\sigma_2$ with common initial point $p$, lengths $a,b>0$, unit initial directions $v_1,v_2$, included angle $\theta\in[0,\pi]$ and endpoints $x,y$ at distance $c$; triangle vertices $x,y,z$ joined by minimizing geodesic segments with side lengths $a,b,c>0$; and the side points $u=\sigma_1(s)$, $v=\sigma_2(t)$, $s\in[0,a]$, $t\in[0,b]$, all data assumed admissible in the sense of the Example.

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$ ([[def-countable-choice]]), carried here by the exponential-map, cut-locus and comparison interfaces cited below. The example selects no family of objects: the only selections below are single selections from the nonempty finite-dimensional sets specified in step 3.1.

[F1] Round-sphere geometry ([[prop-round-sphere-model-geometry]], [[ex-the-round-sphere-has-positive-constant-sectional-curvature]], [[def-constant-sectional-curvature-and-space-form]], [[def-riemannian-distance-on-a-connected-manifold]]): $S_R^n$ is a nonempty, connected, boundaryless embedded $n$-manifold in $\mathbb R^{n+1}$ with $T_xS_R^n=x^\perp$, the induced metric is the restriction of the Euclidean inner product, it makes $S_R^n$ geodesically complete and hence metrically complete, and the Riemannian distance is the metric distance on this connected manifold. Its sectional curvature is constantly $1/R^2=k$, so $(S_R^n,g)$ is a complete, connected, boundaryless manifold with $K\ge k$, and the two-dimensional model $M^2_k$ is the round two-sphere of radius $R$.

[F2] Explicit geodesics and the distance formula ([[prop-round-sphere-model-geometry]], [[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]], [[def-principal-inverse-sine-and-cosine]]): for $p\in S_R^n$ and a unit vector $v\in T_pS_R^n$, the maximal geodesic with $\gamma(0)=p$, $\gamma'(0)=v$ is $$\gamma_{p,v}(t)=\cos(t/R)\,p+R\sin(t/R)\,v,\qquad t\in\mathbb R,$$ and it has unit speed. For all $p,q\in S_R^n$, $$d_g(p,q)=R\arccos\!\Big(\frac{\langle p,q\rangle}{R^2}\Big),$$ the argument lying in $[-1,1]$ by Cauchy–Schwarz ([[thm-cauchy-schwarz-in-an-inner-product-space]]); in particular $d_g(p,\gamma_{p,v}(t))=t$ for $0\le t\le\pi R$, and for every real $\delta$ with $0<\delta<2\pi$ one has $\arccos(\cos\delta)=\min\{\delta,\,2\pi-\delta\}$, because for $\delta\in(0,\pi]$ this is the inverse property of the principal inverse cosine and for $\delta\in[\pi,2\pi)$ one uses $\cos(2\pi-\delta)=\cos\delta$ with $2\pi-\delta\in(0,\pi]$.

[F3] Unique maximal geodesics ([[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]]): for every $(p,v)\in TS_R^n$ there is exactly one maximal geodesic with initial data $(p,v)$, and every geodesic segment with those initial data is its restriction.

[F4] Model comparison data ([[def-comparison-triangle-in-the-two-dimensional-space-form]], [[thm-toponogov-hinge-comparison]], [[thm-toponogov-triangle-comparison]]): $c_k(A,B,\theta)$ denotes the distance in $M^2_k$ between the endpoints of unit-speed geodesics of lengths $A,B>0$ issuing from a common point with included angle $\theta$; the number is independent of the choices made. For fixed $A,B>0$ with $A,B<\pi R$ the map $c_k(A,B,\cdot)$ is continuous and strictly increasing on $[0,\pi]$, it is the inverse of the comparison-angle function, $$c_k\bigl(A,B,\Phi_{A,B}(C)\bigr)=C\qquad\text{for }|A-B|<C<m(A,B),$$ where $m(A,B):=\min\{A+B,\,2\pi R-A-B\}$, and its endpoint values are $c_k(A,B,0)=|A-B|$ and $c_k(A,B,\pi)=m(A,B)$. The comparison angle at the vertex opposite the side $C$ between the sides $A$ and $B$ is the unique $\bar\alpha\in(0,\pi)$ with $$\cos\bar\alpha=F_{A,B}(C):=\frac{\cos(C/R)-\cos(A/R)\cos(B/R)}{\sin(A/R)\sin(B/R)},$$ and a comparison triangle with side lengths $(A,B,C)$ exists, uniquely up to the isometries of $M^2_k$, exactly when the positive side lengths satisfy the strict triangle inequalities and $A,B,C<\pi R$, $A+B+C<2\pi R$. Under their stated hypotheses the hinge comparison gives $C\le c_k(A,B,\theta)$ and the triangle comparison gives that each actual vertex angle is at least the corresponding comparison angle.

[F5] Angles ([[def-pointwise-norm-and-angle-from-a-riemannian-metric]]): for nonzero tangent vectors in one tangent space, the angle is the unique $\theta\in[0,\pi]$ with $\cos\theta=g(u,w)/(|u|_g|w|_g)$; in particular for unit vectors $\cos\theta=g(u,w)$.

[F6] Euclidean bilinearity, Cauchy–Schwarz and addition formulas ([[def-euclidean-inner-product]], [[thm-cauchy-schwarz-in-an-inner-product-space]], [[thm-sine-and-cosine-addition-formulas]]): the Euclidean inner product is bilinear and symmetric, $|\langle u,w\rangle|\le|u|\,|w|$ with equality only for linearly dependent $u,w$, and $\cos(x\pm y)=\cos x\cos y\mp\sin x\sin y$.

[F7] Isometries and orthonormal bases ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]], [[def-riemannian-isometry-and-local-isometry]], [[cor-riemannian-isometries-preserve-length-and-distance]]): every finite-dimensional real inner product space has an orthonormal basis. A Riemannian isometry $F$ is a diffeomorphism with $F^*h=g$, hence for tangent vectors $\xi,\eta$ one has $g_x(\xi,\eta)=h_{F(x)}(dF_x\xi,dF_x\eta)$, so isometries preserve angles as defined in [F5]; they also preserve the lengths of curves and the distances between points. A linear isometry $L:V\to\mathbb R^3$ of a three-dimensional subspace $V\subseteq\mathbb R^{n+1}$ satisfies $\langle Lu,Lv\rangle=\langle u,v\rangle$, so its restriction $L|_{V\cap S_R^n}$ is a Riemannian isometry onto the round sphere $S_R^2$.

## Verification

**Proof technique:** direct: the round sphere has explicit geodesics and an explicit distance formula, so each comparison quantity is computed on both sides from the same two formulas and the values are identified; an explicit linear isometry between a great two-sphere containing the triangle and the model realizes the triangle as its own comparison triangle.

1.1 Setup and explicit sides.
By [F1] the sphere $(S_R^n,g)$ is complete, connected and boundaryless with constant curvature $k$, so it satisfies the curvature hypothesis $K\ge k$ of both comparison theorems of [F4]. The two hinge legs and the three triangle sides have positive lengths below $\pi R$ by admissibility; the hinge endpoint distance $c$ may be zero. Let $\sigma$ be such a segment, with starting point $p:=\sigma(0)$ and initial unit vector $v:=\sigma'(0)$; by [F3] it is the restriction to its interval of the maximal geodesic $\gamma_{p,v}$, so [F2] gives $$\sigma(t)=\cos(t/R)\,p+R\sin(t/R)\,v,\qquad 0\le t\le L,$$ where $L$ is the length of $\sigma$, and $\langle p,p\rangle=R^2$, $\langle p,v\rangle=0$, $\langle v,v\rangle=1$. In particular every endpoint of the given hinge and triangle data is of this form, and, for two points $x,y$ obtained this way from a common base point, the distance $d_g(x,y)$ is computed from the Euclidean inner product $\langle x,y\rangle$ by the distance formula of [F2].
[A1, F1, F2, F3, F4, given]

2.1 Hinge equality.
Write $v_1:=\sigma_1'(0)$ and $v_2:=\sigma_2'(0)$. By [F5] the included angle satisfies $\cos\theta=\langle v_1,v_2\rangle$, since $g$ is the Euclidean inner product. Step 1.1 gives $$x=\cos(a/R)\,p+R\sin(a/R)\,v_1,\qquad y=\cos(b/R)\,p+R\sin(b/R)\,v_2,$$ so bilinearity and $\langle p,p\rangle=R^2$, $\langle p,v_i\rangle=0$, $\langle v_i,v_i\rangle=1$ give $$\langle x,y\rangle=R^2\bigl(\cos(a/R)\cos(b/R)+\sin(a/R)\sin(b/R)\cos\theta\bigr).$$ The distance formula of [F2] therefore yields $$c=d_g(x,y)=R\arccos\bigl(\cos(a/R)\cos(b/R)+\sin(a/R)\sin(b/R)\cos\theta\bigr).$$ On the model side, [F4] says that $c_k(a,b,\theta)$ is independent of the choices made; choose a model hinge in the realization $M^2_k=S_R^2$, i.e. a point $\bar p\in S_R^2$ and unit-speed geodesics $\bar\sigma_1,\bar\sigma_2$ from $\bar p$ of lengths $a,b$ with included angle $\theta$, and write $\bar v_i:=\bar\sigma_i'(0)$, so that $\langle\bar v_1,\bar v_2\rangle=\cos\theta$ by [F5]. The formulas of [F2] hold on $S_R^2$ as well (they are stated for every $n\ge2$), so the same computation with $\bar p,\bar v_1,\bar v_2$ in place of $p,v_1,v_2$ gives $$c_k(a,b,\theta)=R\arccos\bigl(\cos(a/R)\cos(b/R)+\sin(a/R)\sin(b/R)\cos\theta\bigr).$$ The two displayed values are equal, so $c=c_k(a,b,\theta)$: the hinge comparison of [F4], which asserts $c\le c_k(a,b,\theta)$ for these data, is an equality. The computation makes no use of the strictness of the inequalities $a,b,c<\pi R$ and $a+b+c<2\pi R$ beyond the well-definedness of the model hinge, which [F4] supplies.
[F2, F3, F4, F5, F6, step 1.1, given]

2.2 Minimizing segments below the diameter are unique.
Let $\sigma,\tau$ be unit-speed minimizing geodesics in $S_R^n$ from a point $p$ to a point $q$ with $0<L:=d_g(p,q)<\pi R$. By [F3] and the explicit formula of [F2], $\sigma(t)=\cos(t/R)p+R\sin(t/R)\sigma'(0)$ and $\tau(t)=\cos(t/R)p+R\sin(t/R)\tau'(0)$ for $0\le t\le L$. Evaluating at $t=L$, where both curves meet $q$, gives $$\cos(L/R)\,p+R\sin(L/R)\,\sigma'(0)=\cos(L/R)\,p+R\sin(L/R)\,\tau'(0).$$ Since $0<L/R<\pi$, one has $\sin(L/R)>0$, so $\sigma'(0)=\tau'(0)$ and hence $\sigma=\tau$. Consequently, in admissible triangle data the minimizing geodesic segment between two vertices at distance $<\pi R$ is unique, and the actual angles of the Example are independent of the choice of minimizing sides.
[F2, F3, step 1.1, given]

2.3 Angle equality by the spherical law of cosines.
At the vertex $x$ of the triangle let the sides to $y$ and $z$ have lengths $c$ and $b$, so that the opposite side is $a=d_g(y,z)$, and let $\alpha\in[0,\pi]$ be the angle at $x$, between the unit directions $v:=\sigma_{xy}'(0)$ and $w:=\sigma_{xz}'(0)$. By [F5], $\cos\alpha=\langle v,w\rangle$, and step 1.1 gives $$y=\cos(c/R)\,x+R\sin(c/R)\,v,\qquad z=\cos(b/R)\,x+R\sin(b/R)\,w.$$ Bilinearity and $\langle x,x\rangle=R^2$, $\langle x,v\rangle=\langle x,w\rangle=0$, $\langle v,v\rangle=\langle w,w\rangle=1$ yield $$\langle y,z\rangle=R^2\bigl(\cos(b/R)\cos(c/R)+\sin(b/R)\sin(c/R)\cos\alpha\bigr).$$ On the other hand $a=d_g(y,z)<\pi R$, so the distance formula of [F2] gives $\langle y,z\rangle=R^2\cos(a/R)$. Equating the two expressions and dividing by $\sin(b/R)\sin(c/R)$, which is nonzero because $0<b,c<\pi R$, gives $$\cos\alpha=\frac{\cos(a/R)-\cos(b/R)\cos(c/R)}{\sin(b/R)\sin(c/R)}=F_{b,c}(a),$$ the model expression of [F4] with $(A,B,C)=(b,c,a)$. By [F4] the comparison angle $\bar\alpha\in(0,\pi)$ opposite the side $a$ is the unique element of $(0,\pi)$ with $\cos\bar\alpha=F_{b,c}(a)$, while $\alpha\in[0,\pi]$ by [F5]; cosine is injective on $[0,\pi]$, so $\alpha=\bar\alpha$. Cycling the roles of the vertices gives the equality at $y$ and at $z$ as well, with $\beta=\bar\beta$ and $\gamma=\bar\gamma$.
[F2, F4, F5, step 1.1, given]

3.1 The triangle is its own comparison triangle.
Let $W:=\operatorname{span}\{x,y,z\}\subseteq\mathbb R^{n+1}$. The distinct vertices $x,y$ are not antipodal because $0<d_g(x,y)<\pi R$, so they are linearly independent; hence $2\le\dim W\le3$. There is a three-dimensional subspace $V$ with $W\subseteq V$: if $\dim W=3$ take $V=W$; otherwise $W^\perp$ is nonzero because $\dim W^\perp=n+1-\dim W\ge3-2>0$, and we take $V=W\oplus\mathbb R\,u$ for one nonzero $u\in W^\perp$. Then $x,y,z\in V$, and each of the three minimizing sides lies in $V$: by step 1.1 the side from a vertex $r$ to the other endpoint with unit direction $v$ is $t\mapsto\cos(t/R)r+R\sin(t/R)v$, and this lies in $\operatorname{span}\{r,v\}\subseteq V$, since $v$ is determined by the two endpoints. By [F7] choose an orthonormal basis $(e_1,e_2,e_3)$ of $V$ and define $L:V\to\mathbb R^3$ by $L(\alpha_1e_1+\alpha_2e_2+\alpha_3e_3)=(\alpha_1,\alpha_2,\alpha_3)$; then $L$ is a linear isometry, $\langle Lu,Lw\rangle=\langle u,w\rangle$ for $u,w\in V$. Its restriction $\Phi:=L|_{V\cap S_R^n}$ maps the round two-sphere $V\cap S_R^n$ of radius $R$ bijectively onto $S_R^2$ and is a Riemannian isometry by [F7], because on both spheres the metric is the restriction of the ambient Euclidean inner product. Hence $\Phi$ preserves distances, lengths and angles.
For a minimizing side $\sigma$ of the triangle, with unit direction $v$ at its startpoint $r$ and length $L_0$, the curve $\Phi\circ\sigma$ satisfies $$\Phi\circ\sigma(t)=\cos(t/R)\,\Phi(r)+R\sin(t/R)\,L(v),\qquad 0\le t\le L_0,$$ where $L(v)$ is a unit tangent vector of $S_R^2$ at $\Phi(r)$. By [F2] applied to $S_R^2$, this is the unit-speed geodesic of the model with those initial data, so its length is $L_0$; and its endpoints have model distance $L_0$ because $\Phi$ preserves distances. It is therefore a minimizing geodesic segment of the model. Applying this to the three sides, the triple $(\Phi(x),\Phi(y),\Phi(z))$, together with their image segments, has pairwise model distances $a,b,c$ and is thus a comparison triangle with side lengths $(a,b,c)$ in the model $M^2_k$. Since $\Phi$ preserves angles, its angles are the actual angles $\alpha,\beta,\gamma$, which by step 2.3 are the comparison angles; and comparison triangles with these side lengths are unique up to isometries of $M^2_k$ by [F4]. Hence, under the identification of the great two-sphere $V\cap S_R^n$ with the model by the isometry $\Phi$, the actual triangle is its own comparison triangle.
[F1, F2, F4, F7, step 1.1, step 2.3, given]

3.2 Side-point equality.
Write $u=\sigma_1(s)=\cos(s/R)p+R\sin(s/R)v_1$ and $v=\sigma_2(t)=\cos(t/R)p+R\sin(t/R)v_2$ by step 1.1, with $v_1,v_2$ unit and $\langle v_1,v_2\rangle=\cos\theta$. The bilinear computation of step 2.1 with $s,t$ in place of $a,b$ gives $$\langle u,v\rangle=R^2\bigl(\cos(s/R)\cos(t/R)+\sin(s/R)\sin(t/R)\cos\theta\bigr),$$ so the distance formula of [F2] gives $$d_g(u,v)=R\arccos\bigl(\cos(s/R)\cos(t/R)+\sin(s/R)\sin(t/R)\cos\theta\bigr).$$ On the model side choose any point $\bar p\in S_R^2=M^2_k$ and unit vectors $\bar v_1,\bar v_2\in T_{\bar p}S_R^2$ with $\langle\bar v_1,\bar v_2\rangle=\cos\theta$; such vectors exist because the tangent plane is two-dimensional. Put $\bar u:=\cos(s/R)\bar p+R\sin(s/R)\bar v_1$ and $\bar v:=\cos(t/R)\bar p+R\sin(t/R)\bar v_2$, the model points at distances $s$ and $t$ along model geodesics of lengths $a$ and $b$ enclosing the angle $\theta$. The same computation in $S_R^2$ gives $$d_k(\bar u,\bar v)=R\arccos\bigl(\cos(s/R)\cos(t/R)+\sin(s/R)\sin(t/R)\cos\theta\bigr),$$ an expression depending only on $s,t,\theta$ and hence independent of the choices made. Therefore $d_g(u,v)=d_k(\bar u,\bar v)$ for every $s\in[0,a]$ and $t\in[0,b]$, including the endpoint choices $s=0$, $t=0$, $s=a$ and $t=b$; the case $s=a$, $t=b$ reduces to step 2.1. This is the equality case of the corresponding-side-point comparison in the model, verified by direct computation; it is recorded as a diagnostic of the model geometry and is not used to prove the general corresponding-side-point comparison.
[F2, F4, step 1.1, step 2.1, given]

4.1 Conclusion and boundary cases. [A1, F2, F4, F6, step 1.1, step 2.1, step 2.2, step 2.3, step 3.1, step 3.2, given]
Steps 2.1, 2.3 and 3.2 show that on the round sphere of curvature $k$ the hinge, angle and side-point comparisons are equalities whenever their data are admissible, and step 3.1 exhibits the admissible triangle as its own comparison triangle under the isometry $\Phi$; step 2.2 shows that the minimizing sides used are unique. The endpoint angles are covered by the same formula: if $\theta=0$ then $v_2=v_1$ by [F5] and [F6], and step 2.1 gives $c=R\arccos(\cos((a-b)/R))=|a-b|=c_k(a,b,0)$ by [F2] and the endpoint value of [F4]; if $\theta=\pi$ then $v_2=-v_1$ and step 2.1 gives $c=R\arccos(\cos((a+b)/R))=\min\{a+b,\,2\pi R-a-b\}=c_k(a,b,\pi)$, because $0<a+b<2\pi R$ and by the arccos identity of [F2] and the addition formulas of [F6]. The endpoint parameters $s,t\in\{0,a\}\times\{0,b\}$ were included in step 3.2. Triangle admissibility includes strict triangle inequalities and excludes collinear configurations. Hinge admissibility permits $\theta=0$ or $\theta=\pi$ and hence collinear model hinges; these are covered by the endpoint formulas above, including $c=0$ when $a=b$ and $\theta=0$. Both kinds of data exclude sides equal to $\pi R$ and perimeter equal to $2\pi R$. No compactness of anything is assumed and no iff statement is made. On choice: the only selections are the single vector $u\in W^\perp$ and the single orthonormal basis of the three-dimensional space $V$ in step 3.1, each a selection from one nonempty set and not from a family; the inherited $\mathrm{AC}_\omega$ of [A1] suffices, and no full choice principle is used. Thus every admissible minimizing triangle of the round sphere is its own constant-$k$ comparison triangle, and all hinge, angle and side-point inequalities of the two comparison theorems become equalities. [A1, F2, F4, F6, step 1.1, step 2.1, step 2.2, step 2.3, step 3.1, step 3.2, given] ∎

## Source locator

Lang, *Riemannian and Metric Geometry*, Chapter 5, Lemmas 5.1–5.2 and Theorem 5.15 (printed pp.64–70, PDF pp.67–73), gives the model cosine law, hinge monotonicity and Toponogov comparison whose equality case is exhibited here; Eschenburg, *Comparison Theorems in Riemannian Geometry*, §6, Theorem 6.1 and its Corollary 6.3, printed pp.21–25, proves the distance and angle comparisons for $K\ge k$, the inequality directions used above. The computations are local: the geodesics and the distance formula are those of [[prop-round-sphere-model-geometry]], the model comparison data are those of [[def-comparison-triangle-in-the-two-dimensional-space-form]], and the equality statements are verified on the explicit formulas rather than imported from the sources.
