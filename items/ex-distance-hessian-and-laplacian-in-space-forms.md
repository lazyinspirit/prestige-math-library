---
id: ex-distance-hessian-and-laplacian-in-space-forms
kind: example
title: Distance hessian and laplacian in space forms
status: draft
origin: pipeline
deps:
  - thm-hessian-comparison-for-distance-under-sectional-curvature-bounds
  - thm-laplacian-comparison-for-distance-under-a-ricci-lower-bound
  - def-comparison-sine-cosine-and-cotangent-functions
  - def-countable-choice
  - def-constant-sectional-curvature-and-space-form
  - thm-hopf-rinow
  - def-sectional-curvature
  - def-riemann-curvature-four-tensor
  - prop-curvature-tensor-of-constant-sectional-curvature
  - thm-exp-p-is-a-diffeomorphism-from-the-open-tangent-cut-domain-onto-m-minus-the-cut-locus-and-p
  - prop-gradient-of-the-distance-is-the-outward-unit-radial-field-off-the-cut-locus
  - def-riemannian-gradient
  - prop-hessian-of-distance-in-terms-of-radial-jacobi-fields
  - cor-hessian-is-symmetric
  - thm-distance-from-p-is-smooth-off-p-and-the-cut-locus
  - def-laplace-beltrami-operator-as-trace-of-the-hessian
  - def-ricci-curvature
  - lem-ricci-curvature-is-symmetric-and-basis-independent
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - ex-the-round-sphere-has-positive-constant-sectional-curvature
  - cor-compact-riemannian-manifolds-are-geodesically-complete
  - prop-round-sphere-model-geometry
  - ex-euclidean-space-has-zero-curvature
  - thm-euclidean-space-complete
  - prop-half-space-model-geometry
  - ex-cartan-hadamard-for-hyperbolic-space
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
      locator: "§§26.1–26.2 and 28.1, pp.191–197, 205–209: the Hessian and Laplacian of the distance in the constant-curvature model"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§§2–4, pp.6–16: Riccati and Hessian comparison, and the constant-curvature equality case"
---

## Example

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let
$n\ge2$ and $k\in\mathbb R$, and let $(M,g)$ be a complete, connected,
boundaryless $n$-dimensional Riemannian manifold of constant sectional
curvature $k$, that is, a space form of curvature $k$ in the sense of
[[def-constant-sectional-curvature-and-space-form]]. Let $p\in M$, let
$r:=r_p=d_g(p,\cdot)$ be the distance from $p$, and let
$q\in M\setminus(\{p\}\cup\operatorname{Cut}(p))$ be a point off $p$ and off
the cut locus of $p$, with $t_0:=r(q)>0$ and
$$t_0<\frac{\pi}{\sqrt k}\qquad\text{when }k>0 .$$
Then:

1. the Hessian of the distance is the projection onto the normal hyperplane,
   $$\operatorname{Hess}r(W,Z)=\operatorname{ct}_k(t_0)\bigl(g_q(W,Z)-dr(W)\,dr(Z)\bigr) \qquad\text{for all }W,Z\in T_qM;$$
2. the Laplace–Beltrami operator of $g$ satisfies
   $$\Delta_gr(q)=(n-1)\operatorname{ct}_k(t_0);$$
3. the space form attains **equality** in both comparison theorems: the two
   curvature hypotheses of the Hessian comparison hold with equality on every
   normal plane, and the Ricci lower bound of the Laplacian comparison holds
   with equality, so the bounds of
   [[thm-hessian-comparison-for-distance-under-sectional-curvature-bounds]]
   and
   [[thm-laplacian-comparison-for-distance-under-a-ricci-lower-bound]] are
   attained with equality in the model geometry.

The explicit comparison cotangent values are
$$\operatorname{ct}_0(t)=\frac1t,\qquad \operatorname{ct}_k(t)=\sqrt k\,\cot\bigl(\sqrt k\,t\bigr)\ (k>0),\qquad \operatorname{ct}_k(t)=\sqrt{-k}\,\coth\bigl(\sqrt{-k}\,t\bigr)\ (k<0),$$
so in particular Euclidean space gives
$\operatorname{Hess}r=r^{-1}(g-dr\otimes dr)$ and
$\Delta_gr=(n-1)/r$. No choice beyond the inherited $\mathrm{AC}_\omega$ is
used; the point $q$ and the geodesic to it are supplied by the cited
interfaces and no family of directions is selected.

## Facts & Assumptions

**Given:** The inherited $\mathrm{AC}_\omega$ of [A1]; a complete, connected, boundaryless $n$-dimensional Riemannian manifold $(M,g)$ of constant sectional curvature $k$ with $n\ge2$; a point $p\in M$; a point $q\in M\setminus(\{p\}\cup\operatorname{Cut}(p))$ with $t_0:=d_g(p,q)>0$ and $t_0<\pi/\sqrt k$ when $k>0$; the distance function $r=r_p$; and the comparison functions $\operatorname{sn}_k$, $\operatorname{cs}_k$, $\operatorname{ct}_k$.

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$ ([[def-countable-choice]]), carried by the exponential, cut-locus, curvature and Riccati interfaces cited below; the Jacobi initial-value construction itself requires no choice; the argument makes no selection of directions, bases or curves from a family.

[F1] Space forms ([[def-constant-sectional-curvature-and-space-form]]): a connected, boundaryless, geodesically complete Riemannian manifold of constant sectional curvature $k$ is a space form of curvature $k$. By [[thm-hopf-rinow]], geodesic completeness of the connected manifold $(M,g)$ is equivalent to metric completeness, and any two points of $M$ are joined by a minimizing geodesic.

[F2] Constant curvature ([[prop-curvature-tensor-of-constant-sectional-curvature]], [[def-sectional-curvature]], [[def-riemann-curvature-four-tensor]]): $(M,g)$ has constant sectional curvature $k$ exactly when $$R(X,Y)Z=k\bigl(g(Y,Z)X-g(X,Z)Y\bigr),\qquad \operatorname{Rm}(X,Y,Z,W)=k\bigl(g(Y,Z)g(X,W)-g(X,Z)g(Y,W)\bigr),$$ and the sectional curvature of the plane spanned by an orthonormal pair $(u,w)$ is $K(u\wedge w)=\operatorname{Rm}(u,w,w,u)$; the four-linear form $\operatorname{Rm}$ is linear in each argument.

[F3] The exponential map off the cut locus ([[thm-exp-p-is-a-diffeomorphism-from-the-open-tangent-cut-domain-onto-m-minus-the-cut-locus-and-p]]): $D_p=\{tv:v\in S_pM,\ 0<t<c_p(v)\}$ is open in $T_pM$ and $\exp_p|_{D_p}$ is a diffeomorphism onto $M\setminus(\{p\}\cup\operatorname{Cut}(p))$.

[F4] Gradient of the distance ([[prop-gradient-of-the-distance-is-the-outward-unit-radial-field-off-the-cut-locus]]): if $v\in S_pM$ and $0<t<c_p(v)$, then with $\gamma(t)=\exp_p(tv)=q$ one has $\operatorname{grad}r(q)=\dot\gamma(t)$, the segment $\gamma|_{[0,t]}$ is the minimizing radial geodesic from $p$ to $q$, and in particular $d_g(p,q)=t$.

[F5] The gradient represents $dr$ ([[def-riemannian-gradient]]): $g_x(\operatorname{grad}f(x),W)=df_x(W)$ for every smooth $f$, every $x\in M$ and every $W\in T_xM$.

[F6] Hessian of the distance off the cut locus ([[prop-hessian-of-distance-in-terms-of-radial-jacobi-fields]], [[cor-hessian-is-symmetric]], [[thm-distance-from-p-is-smooth-off-p-and-the-cut-locus]]): the distance function $r$ is smooth at $q$, its Levi-Civita Hessian $\nabla^2r$ is a symmetric bilinear form there, and for $T:=\dot\gamma(t_0)=\operatorname{grad}r(q)$ one has $\operatorname{Hess}r(T,Y)=0$ for every $Y\in T_qM$.

[F7] Hessian comparison ([[thm-hessian-comparison-for-distance-under-sectional-curvature-bounds]]): let $\gamma$ be the minimizing unit-speed geodesic from $p$ to $q$ with $\dot\gamma(t_0)=\operatorname{grad}r(q)$, and put $N:=\{\dot\gamma(t_0)\}^{\perp}$. If $\operatorname{Rm}(X,\dot\gamma(s),\dot\gamma(s),X)\ge k|X|^2$ for all $s\in(0,t_0]$ and all $X\in\{\dot\gamma(s)\}^{\perp}$, then $\operatorname{Hess}r(X,X)\le\operatorname{ct}_k(t_0)g_q(X,X)$ for all $X\in N$; if the reverse curvature inequality holds, then $\operatorname{Hess}r(X,X)\ge\operatorname{ct}_k(t_0)g_q(X,X)$ there; and $\operatorname{Hess}r(\operatorname{grad}r,\cdot)=0$.

[F8] Laplacian comparison ([[thm-laplacian-comparison-for-distance-under-a-ricci-lower-bound]]): if $\operatorname{Ric}\ge(n-1)k\,g$, then $\Delta_gr(q)\le(n-1)\operatorname{ct}_k(t_0)$.

[F9] Laplace–Beltrami operator ([[def-laplace-beltrami-operator-as-trace-of-the-hessian]]): $\Delta_gf=\operatorname{tr}_g\operatorname{Hess}f =\sum_{i=1}^{n}\operatorname{Hess}f(e_i,e_i)$ in a $g$-orthonormal basis $(e_1,\dots,e_n)$ of the tangent space.

[F10] Ricci curvature ([[def-ricci-curvature]], [[lem-ricci-curvature-is-symmetric-and-basis-independent]]): in an orthonormal basis $(e_1,\dots,e_n)$ of $T_xM$, with $\operatorname{Rm}(A,B,C,D)=g(R(A,B)C,D)$, $\operatorname{Ric}(X,Y)=\sum_{i=1}^n\operatorname{Rm}(e_i,X,Y,e_i)$.

[F11] Comparison functions ([[def-comparison-sine-cosine-and-cotangent-functions]]): $\operatorname{sn}_k=\sin(\sqrt k\,\cdot)/\sqrt k$, $\operatorname{cs}_k =\cos(\sqrt k\,\cdot)$ for $k>0$, $\operatorname{sn}_0(t)=t$, $\operatorname{cs}_0=1$, and $\operatorname{sn}_k=\sinh(\sqrt{-k}\,\cdot)/\sqrt{-k}$, $\operatorname{cs}_k=\cosh(\sqrt{-k}\,\cdot)$ for $k<0$, with $\operatorname{ct}_k=\operatorname{cs}_k/\operatorname{sn}_k$ on the positive domain.

[F12] Orthonormal bases ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]): every finite-dimensional inner product space has an orthonormal basis.

[F13] Standard realizations ([[prop-round-sphere-model-geometry]], [[ex-the-round-sphere-has-positive-constant-sectional-curvature]], [[ex-euclidean-space-has-zero-curvature]], [[thm-euclidean-space-complete]], [[prop-half-space-model-geometry]], [[ex-cartan-hadamard-for-hyperbolic-space]]): the round sphere $S^n_R$ has constant sectional curvature $1/R^2$, is compact hence geodesically complete, and its cut locus at a point is the antipodal singleton, so $S^n_{1/\sqrt k}$ has constant sectional curvature $k$ for $k>0$; Euclidean $\mathbb R^n$ has vanishing curvature tensor and is metrically complete; the upper-half-space metric of the half-space model proposition has constant sectional curvature $-a^2$ for every $a>0$, that is, $-1/r^2$ on the scale $r=1/a$, for $n\ge2$; and the hyperboloid model of hyperbolic $n$-space is an $n$-dimensional, geodesically and metrically complete manifold of constant sectional curvature $-1$.

## Proof

**Proof technique:** direct: since the sectional curvature is identically $k$, both the one-sided curvature hypotheses of the Hessian comparison hold, so the two inequalities collapse to the single normal-Hessian identity; adding the known vanishing on the radial direction gives the full tensor $\operatorname{ct}_k(r)(g-dr\otimes dr)$; tracing it in the orthogonal decomposition $T_qM=N\oplus\mathbb R\operatorname{grad}r$ gives the Laplacian, and tracing the constant-curvature tensor gives the Ricci equality that identifies the space form as an equality case of both comparison theorems.

1.1 The minimizing geodesic, the normal hyperplane and the curvature data. [F1, F2, F3, F4, F5, given]
By [F3] there are a unit vector $v\in S_pM$ and a time $t_1$ with $0<t_1<c_p(v)$ and $\exp_p(t_1v)=q$; let $\gamma(t):=\exp_p(tv)$ for $t\ge0$. By [F4] the segment $\gamma|_{[0,t_1]}$ is minimizing from $p$ to $q$, so $t_1=d_g(p,q)=t_0$; hence $q=\gamma(t_0)$ with $0<t_0<c_p(v)$ and $T:=\dot\gamma(t_0)=\operatorname{grad}r(q)$. Put $N:=T^{\perp}\subseteq T_qM$, the orthogonal complement of $T$. Then $T_qM=N\oplus\mathbb RT$, and by [F5], $$dr(W)=g_q\bigl(\operatorname{grad}r(q),W\bigr)=g_q(T,W)\qquad(W\in T_qM),$$ so $dr(T)=|T|_g^2=1$ and $dr$ vanishes on $N$; moreover $r(q)=t_0>0$ and $t_0<\pi/\sqrt k$ when $k>0$ by hypothesis, so the domain restriction of [F7] and [F8] is satisfied. Finally, for every $s\in(0,t_0]$ and every nonzero $X\in\{\dot\gamma(s)\}^{\perp}$ the vector $u:=X/|X|_g$ is a unit vector with $g(u,\dot\gamma(s))=0$, so $(u,\dot\gamma(s))$ is an orthonormal pair and [F2] gives $$\operatorname{Rm}\bigl(X,\dot\gamma(s),\dot\gamma(s),X\bigr)=|X|_g^2\operatorname{Rm}\bigl(u,\dot\gamma(s),\dot\gamma(s),u\bigr)=|X|_g^2\,K\bigl(u\wedge\dot\gamma(s)\bigr)=k|X|_g^2,$$ the last equality because the sectional curvature is constantly $k$; the equality holds also for $X=0$ by four-linearity. Hence both $\operatorname{Rm}(X,\dot\gamma(s),\dot\gamma(s),X)\ge k|X|_g^2$ and the reverse inequality hold for every such $X$, and the geodesic $\gamma$ is the minimizing unit-speed geodesic from $p$ to $q$ with $\dot\gamma(t_0)=\operatorname{grad}r(q)$ required by [F7]. [F1, F2, F3, F4, F5, given]

2.1 The Hessian on the normal hyperplane. [F6, F7, step 1.1]
By step 1.1 both curvature hypotheses of [F7] hold along $\gamma$, with $X$ ranging over $N$ and $t_0<\pi/\sqrt k$ when $k>0$. Applying the first assertion of [F7] (lower curvature bound) and then the second (upper curvature bound) to the same $X\in N$ gives $$\operatorname{Hess}r(X,X)\le\operatorname{ct}_k(t_0)\,g_q(X,X)\le\operatorname{Hess}r(X,X).$$ The symmetric bilinear forms therefore agree on the diagonal, and polarization gives equality for every $X,Y\in N$. In addition $\operatorname{Hess}r(\operatorname{grad}r,\cdot)=0$ by [F6] (equivalently by the last assertion of [F7]); in particular $\operatorname{Hess}r(T,T)=0$ and, by the symmetry of the Hessian in [F6], $\operatorname{Hess}r(T,Y)=\operatorname{Hess}r(Y,T)=0$ for every $Y\in T_qM$. [F6, F7, step 1.1]

3.1 The full Hessian tensor. [F5, step 1.1, step 2.1]
Let $W,Z\in T_qM$ and decompose $$W=dr(W)\,T+X,\qquad Z=dr(Z)\,T+Y,$$ where $X:=W-dr(W)T$ and $Y:=Z-dr(Z)T$ lie in $N$ because $dr(X)=dr(W)-dr(W)dr(T)=0$ and $dr(Y)=0$ by $dr(T)=1$ and $dr|_N=0$ from step 1.1. Bilinearity of the Hessian, the vanishing of all Hessian entries involving $T$ from step 2.1, and the normal identity of step 2.1 give $$\operatorname{Hess}r(W,Z) =dr(W)dr(Z)\operatorname{Hess}r(T,T)+dr(W)\operatorname{Hess}r(T,Y)+dr(Z)\operatorname{Hess}r(X,T)+\operatorname{Hess}r(X,Y) =\operatorname{ct}_k(t_0)\,g_q(X,Y).$$ Since $T\perp N$, orthogonality gives $g_q(W,Z)=dr(W)dr(Z)+g_q(X,Y)$, hence $g_q(X,Y)=g_q(W,Z)-dr(W)dr(Z)$ and $$\operatorname{Hess}r(W,Z)=\operatorname{ct}_k(t_0)\bigl(g_q(W,Z)-dr(W)dr(Z)\bigr)$$ for all $W,Z\in T_qM$, which is the first displayed conclusion. [F5, step 1.1, step 2.1]

4.1 The trace: the Laplacian. [F9, F12, step 3.1]
By [F12] the finite-dimensional space $N$ has an orthonormal basis $(e_1,\dots,e_{n-1})$, and with $e_n:=T$ this is an orthonormal basis of $T_qM$ because $T_qM=N\oplus\mathbb RT$, $T\perp N$ and $|T|_g=1$ (step 1.1). By the trace definition [F9] and the Hessian identity of step 3.1, $$\Delta_gr(q)=\sum_{i=1}^{n-1}\operatorname{ct}_k(t_0)\bigl(g_q(e_i,e_i)-dr(e_i)^2\bigr)+\operatorname{ct}_k(t_0)\bigl(g_q(T,T)-dr(T)^2\bigr),$$ where $g_q(e_i,e_i)=1$ and $dr(e_i)=0$ for $i\le n-1$ and $g_q(T,T)=1$, $dr(T)=1$. Hence $$\Delta_gr(q)=\operatorname{ct}_k(t_0)\bigl((n-1)-0\bigr)+\operatorname{ct}_k(t_0)(1-1)=(n-1)\operatorname{ct}_k(t_0),$$ which is the second displayed conclusion. [F9, F12, step 3.1]

5.1 Equality in both comparison theorems. [F2, F7, F8, F10, step 2.1, step 4.1]
The Ricci tensor of a manifold of constant sectional curvature $k$ is $\operatorname{Ric}=(n-1)k\,g$: indeed, in an orthonormal basis $(e_1,\dots,e_n)$ of $T_xM$ at an arbitrary point $x$, [F10] and the second display of [F2] give $$\operatorname{Ric}(X,Y)=\sum_{i=1}^{n}\operatorname{Rm}(e_i,X,Y,e_i) =\sum_{i=1}^{n}k\bigl(g(X,Y)g(e_i,e_i)-g(e_i,Y)g(X,e_i)\bigr) =k\bigl(n\,g(X,Y)-g(X,Y)\bigr),$$ that is, $\operatorname{Ric}(X,Y)=(n-1)k\,g(X,Y)$. Thus the hypothesis of [F8] holds with equality, and [F8] gives $\Delta_gr(q)\le(n-1)\operatorname{ct}_k(t_0)$, which step 4.1 upgrades to equality; so the Laplacian comparison bound is attained. Likewise step 2.1 shows that $\operatorname{Hess}r=\operatorname{ct}_k(t_0)g$ on $N$, which is simultaneously the upper bound of the first assertion and the lower bound of the second assertion of [F7]: the model attains equality in both one-sided Hessian comparisons. [F2, F7, F8, F10, step 2.1, step 4.1]

6.1 Conclusion, explicit values and the standard realizations. [F11, F13, step 3.1, step 4.1, step 5.1]
This proves the three displayed conclusions for every point $q$ off $p$ and off the cut locus with $t_0<\pi/\sqrt k$ when $k>0$. The explicit values of the comparison cotangent follow from the piecewise formulas of [F11]: $$\operatorname{ct}_0(t)=\frac{1}{t},\qquad \operatorname{ct}_k(t)=\frac{\sqrt k\,\cos(\sqrt k\,t)}{\sin(\sqrt k\,t)}=\sqrt k\,\cot(\sqrt k\,t)\ (k>0),\qquad \operatorname{ct}_k(t)=\sqrt{-k}\,\coth(\sqrt{-k}\,t)\ (k<0)$$ for $t$ in the positive domain, so in Euclidean space the first conclusion reads $\operatorname{Hess}r=r^{-1}(g-dr\otimes dr)$ and the second reads $\Delta_gr=(n-1)/r$, while on the sphere and in hyperbolic space it reads $\Delta_gr=(n-1)\sqrt k\cot(\sqrt k\,r)$ and $\Delta_gr=(n-1)\sqrt{-k}\coth(\sqrt{-k}\,r)$. By [F13] the round sphere $S^n_{1/\sqrt k}$ for $k>0$, Euclidean $\mathbb R^n$ for $k=0$, and the constant-curvature models of curvature $k<0$ built from the hyperbolic half-space metric and the hyperboloid model are realizations of the hypotheses, so the formulas above are their distance Hessians and Laplacians off the pole and the cut locus. The case $n=2$ is included; the restriction $t_0<\pi/\sqrt k$ is vacuous for $k\le0$ and excludes the spherical pole for $k>0$; the value $t_0=0$ is excluded because $q\ne p$. Every object used is supplied by the cited interfaces and no family of directions, bases or curves is selected from a set, so no choice beyond [A1] is used. [F11, F13, step 3.1, step 4.1, step 5.1] ∎

## Source locator

Datar §§26.1–26.2 and 28.1, pp.191–197 and 205–209, computes the Hessian and Laplacian of the distance function in the constant-curvature model, with the shape operator $\operatorname{ct}_k(r)$ and the saturated comparison at the model pole. Eschenburg §§2–4, pp.6–16, derives the Riccati and Hessian comparison operators whose equality case is the constant-curvature model used here. The two comparison items applied in both directions are the in-run Hessian and Laplacian comparison theorems; the model values are the piecewise comparison functions of [[def-comparison-sine-cosine-and-cotangent-functions]], and the standard realizations cited in [F13] record the curvature and completeness of the round sphere, Euclidean space and hyperbolic space.
