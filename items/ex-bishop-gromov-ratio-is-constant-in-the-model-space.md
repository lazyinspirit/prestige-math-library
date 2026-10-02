---
id: ex-bishop-gromov-ratio-is-constant-in-the-model-space
kind: example
title: Bishop gromov ratio is constant in the model space
status: draft
origin: pipeline
deps:
  - thm-bishop-gromov-volume-comparison
  - def-model-space-radial-area-and-ball-volume
  - def-radial-volume-jacobian
  - def-countable-choice
  - cor-polar-integration-may-discard-the-cut-locus
  - def-polar-surface-measure-on-the-unit-sphere
  - def-borel-sigma-algebra
  - def-radial-jacobi-tensor
  - ex-model-jacobi-fields-in-positive-zero-and-negative-curvature
  - prop-model-functions-solve-the-constant-curvature-jacobi-equation
  - def-comparison-sine-cosine-and-cotangent-functions
  - def-constant-sectional-curvature-and-space-form
  - def-cut-time-in-a-unit-tangent-direction
  - lem-minimizing-along-a-geodesic-is-an-initial-interval-property
  - thm-cartan-hadamard
  - thm-hopf-rinow
  - prop-round-sphere-model-geometry
  - ex-the-round-sphere-has-positive-constant-sectional-curvature
  - ex-distance-hessian-and-laplacian-in-space-forms
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
      locator: "§§27.2 and 28.1, pp.200–209: the polar volume element, the model density sn_k^(n-1) and the model ball volume"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§§4–5, pp.15–20: the model radial density and its integral"
---

## Example

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let
$n\ge2$ and $k\in\mathbb R$, and let $(M,g)$ be a complete, connected,
simply connected Riemannian $n$-manifold of constant sectional curvature $k$;
when $k>0$ take $(M,g)$ to be the round sphere $S^n_{1/\sqrt k}$, the simply
connected space form of positive curvature $k$. Then for every $p\in M$ and
every radius $r>0$ the open metric ball $B(p,r)$ has the saturated model
volume
$$\operatorname{vol}_g\bigl(B(p,r)\bigr)=V^\star_k(r),$$
and consequently the Bishop–Gromov ratio
$R_p(r)=\operatorname{vol}_g(B(p,r))/V^\star_k(r)$ is equal to $1$ at every
positive radius. The ratio is thus constant in $r$; for $k>0$ this constancy
continues past the spherical endpoint $r=\pi/\sqrt k$, where the numerator and
the saturated denominator both saturate. The standard realizations are the
round sphere for $k>0$, Euclidean $n$-space for $k=0$ and hyperbolic
$n$-space for $k<0$; for $k\le0$ the computation below applies to every
complete, connected, simply connected constant-curvature-$k$ manifold, not
only to the named realization.

## Facts & Assumptions

**Given:** The inherited $\mathrm{AC}_\omega$ of [A1]; the dimension $n\ge2$;
the curvature $k\in\mathbb R$; a complete, connected, simply connected
Riemannian $n$-manifold $(M,g)$ of constant sectional curvature $k$, equal to
the round sphere $S^n_{1/\sqrt k}$ when $k>0$; a point $p\in M$; a radius
$r>0$; the unit sphere $S_pM=\{v\in T_pM:|v|_{g_p}=1\}$; the polar surface
measure $\sigma_p$; the radial geodesics
$\gamma_v(t)=\exp_p(tv)$ with cut times $c_p(v)$; the radial Jacobi tensor
$A(t)$ of $\gamma_v$ and the radial volume Jacobian $J_p(t,v)$; and the model
functions $\operatorname{sn}_k$, $A_k$, $V_k$ and $V^\star_k$.

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$
([[def-countable-choice]]), carried by the cut-time, polar-integration,
Cartan–Hadamard and Hopf–Rinow interfaces below; no further selection is made.

[F1] Polar integration ([[cor-polar-integration-may-discard-the-cut-locus]]):
$(M,g)$ is complete, connected and boundaryless, $\sigma_p$ is the finite Borel
measure on $S_pM$ obtained by transporting the polar surface measure of the
unit sphere, and for every Borel $f:M\to[0,\infty]$,
$$\int_Mf\,d\operatorname{vol}_g=\int_{S_pM}\int_0^{c_p(v)}f(\gamma_v(t))\det a_v(t)\,dt\,d\sigma_p(v),$$
where $a_v(t)$ is the matrix of the radial Jacobi fields in a parallel
orthonormal frame, with $\det a_v(t)>0$ for $0<t<c_p(v)$.

[F2] Radial Jacobi tensor and radial volume Jacobian
([[def-radial-jacobi-tensor]], [[def-radial-volume-jacobian]]): for $w$ in the
normal space $N_0=\{X\in T_pM:g_p(X,v)=0\}$ the map $t\mapsto A(t)w$ is the
unique Jacobi field along $\gamma_v$ with $A(0)w=0$ and $D_t(Aw)(0)=w$; in the
parallel identification $\bar A_v(t)=P_t^{-1}\circ A(t)$ one has
$J_p(t,v)=\det\bar A_v(t)>0$ for $0<t<c_p(v)$, and $\det a_v(t)=J_p(t,v)$ in
the notation of [F1]. Moreover $\dim N_0=n-1$.

[F3] Model fields and comparison functions
([[ex-model-jacobi-fields-in-positive-zero-and-negative-curvature]],
[[prop-model-functions-solve-the-constant-curvature-jacobi-equation]],
[[def-comparison-sine-cosine-and-cotangent-functions]],
[[def-constant-sectional-curvature-and-space-form]]): on a Riemannian
manifold of constant sectional curvature $k$, the Jacobi field with
$J(0)=0$, $D_tJ(0)=E\in N_0$ satisfies $J(t)=\operatorname{sn}_k(t)P_tE$ for
every $t$, so the radial Jacobi tensor is
$A(t)=\operatorname{sn}_k(t)P_t$ and its parallel-frame matrix is
$\bar A_v(t)=\operatorname{sn}_k(t)\cdot\mathrm{id}_{N_0}$. The comparison
sine is given by $\operatorname{sn}_0(t)=t$,
$\operatorname{sn}_{-a^2}(t)=\sinh(at)/a$ for $a>0$ and
$\operatorname{sn}_k(t)=\sin(\sqrt k\,t)/\sqrt k$ for $k>0$, it is positive on
its positive domain $(0,\pi/\sqrt k)$ for $k>0$ and $(0,\infty)$ for
$k\le0$, and it satisfies $\operatorname{sn}_k''+k\operatorname{sn}_k=0$.

[F4] Cut time and minimizing initial intervals
([[def-cut-time-in-a-unit-tangent-direction]],
[[lem-minimizing-along-a-geodesic-is-an-initial-interval-property]]):
$c_p(v)=\sup\{t>0:d_g(p,\gamma_v(t))=t\}\in(0,+\infty]$, the set
$A_p(v)=\{t\ge0:d_g(p,\gamma_v(t))=t\}$ is an initial interval, and if
$c_p(v)$ is finite then $c_p(v)\in A_p(v)$. Hence
$d_g(p,\gamma_v(t))=t$ for every $0<t<c_p(v)$: if $t<c_p(v)=\sup A_p(v)$
there is $t'\in A_p(v)$ with $t'>t$, and the initial-interval property gives
$t\in A_p(v)$.

[F5] Cartan–Hadamard ([[thm-cartan-hadamard]]): a connected, boundaryless,
finite-dimensional Riemannian manifold that is complete and has sectional
curvature $K\le0$ everywhere has $\exp_p:T_pM\to M$ a smooth covering map,
and if it is in addition simply connected then $\exp_p$ is a diffeomorphism
for every $p$; in particular $\exp_p$ is then injective.

[F6] Hopf–Rinow ([[thm-hopf-rinow]]): for a nonempty, connected, boundaryless
Riemannian manifold, metric completeness, geodesic completeness and
$\mathcal E_p=T_pM$ are equivalent, and then every $x,y\in M$ are joined by a
minimizing geodesic: there is $w\in T_xM$ with $\exp_x(w)=y$ and
$|w|_{g_x}=d_g(x,y)$.

[F7] The round sphere
([[ex-the-round-sphere-has-positive-constant-sectional-curvature]],
[[prop-round-sphere-model-geometry]]): for $k>0$ and
$R=1/\sqrt k$, the round sphere $S^n_R$ with its induced metric is complete,
has constant sectional curvature $1/R^2=k$, and for every $p\in S^n_R$ and
every unit $v\in T_pS^n_R$ the cut time is $c_p(v)=\pi R=\pi/\sqrt k$.

[F8] Model volumes and the sphere measure
([[def-model-space-radial-area-and-ball-volume]],
[[def-polar-surface-measure-on-the-unit-sphere]]): with $\omega_{n-1}$ the
total surface measure of the unit sphere $S^{n-1}\subseteq\mathbb R^n$, the
model radial area is $A_k(s)=\omega_{n-1}\operatorname{sn}_k(s)^{n-1}$, the
model ball volume is $V_k(r)=\int_0^rA_k(t)\,dt$, and the saturated model
volume is $V^\star_k(r)=V_k(\min\{r,\pi/\sqrt k\})$ for $k>0$ and
$V^\star_k(r)=V_k(r)$ for $k\le0$. The measure $\sigma_p$ of [F1] is the
transport of the polar surface measure of $S^{n-1}$ by a linear isometry,
hence $\sigma_p(S_pM)=\omega_{n-1}$, the total surface measure being
preserved by the bijection.

[F9] Borel indicator ([[def-borel-sigma-algebra]]): the open ball $B(p,r)$ is
an open subset of $M$, hence a Borel set, and the indicator of a Borel set is
a Borel function: the preimage of an open subset of $\mathbb R$ under
$\mathbf 1_{B(p,r)}$ is one of $\varnothing$, $B(p,r)$, $M\setminus B(p,r)$ or $M$,
according to whether the open set contains neither, only $1$, only $0$,
or both of the values $0,1$. All four sets are Borel.

[F10] Ricci curvature of a space form of curvature $k$
([[ex-distance-hessian-and-laplacian-in-space-forms]]): such a manifold
satisfies $\operatorname{Ric}=(n-1)k\,g$; in particular the Ricci lower bound
$\operatorname{Ric}\ge(n-1)k\,g$ holds with equality.

[F11] Bishop–Gromov comparison ([[thm-bishop-gromov-volume-comparison]]): for
a complete, connected, boundaryless $(M,g)$ of dimension $n\ge2$ with
$\operatorname{Ric}\ge(n-1)k\,g$, the ratio
$R_p(r)=\operatorname{vol}_g(B(p,r))/V^\star_k(r)$ is nonincreasing on
$(0,\infty)$ with $\lim_{r\downarrow0}R_p(r)=1$, it is constant on
$[\pi/\sqrt k,\infty)$ when $k>0$, and
$\operatorname{vol}_g(B(p,r))\le V^\star_k(r)$ for every $r>0$.

## Verification

**Proof technique:** direct: the radial Jacobi tensor of a constant-curvature
$k$ manifold is $\operatorname{sn}_k(t)$ times parallel transport, so the
polar integration formula writes the ball volume as $\omega_{n-1}$ times the
integral of the model density cut off at the cut time; the cut time is
$+\infty$ for $k\le0$ by Cartan–Hadamard and $\pi/\sqrt k$ for the round
sphere, and the saturated model volume reproduces exactly this cutoff.

1.1 The radial density of the model. [F2, F3, given]
Fix $v\in S_pM$. By [F3], for every $w\in N_0$ the radial field is
$A(t)w=\operatorname{sn}_k(t)P_tw$, so the parallel-frame matrix of $A(t)$ is
the scalar matrix $\bar A_v(t)=\operatorname{sn}_k(t)\cdot\mathrm{id}_{N_0}$.
Since $\dim N_0=n-1$ by [F2], its determinant is
$$\det\bar A_v(t)=\operatorname{sn}_k(t)^{n-1},\qquad 0<t<c_p(v),$$
and [F2] identifies this determinant with the radial volume Jacobian,
$\det a_v(t)=J_p(t,v)=\operatorname{sn}_k(t)^{n-1}$, in the notation of [F1].
[F2, F3, given]

1.2 The cut time of the model in each curvature regime. [F4, F5, F6, F7, given]
Let $v\in S_pM$. Suppose first that $k\le0$. Then $(M,g)$ is complete,
connected, boundaryless and simply connected with constant sectional
curvature $k\le0$, so [F5] makes $\exp_p:T_pM\to M$ a diffeomorphism, in
particular injective. Let $t>0$ and $q:=\gamma_v(t)=\exp_p(tv)$. By [F6]
there is $w\in T_pM$ with $\exp_p(w)=q$ and $|w|_{g_p}=d_g(p,q)$.
Injectivity gives $w=tv$, so $d_g(p,q)=|w|_{g_p}=t$; since $t>0$ was
arbitrary, the set $A_p(v)$ of [F4] contains every positive time, hence
$c_p(v)=+\infty$. Suppose now that $k>0$, so that $(M,g)=S^n_{1/\sqrt k}$ by
the hypothesis of the example; then [F7] gives $c_p(v)=\pi/\sqrt k$ for every
unit $v$. Consequently $\min\{c_p(v),r\}=r$ when $k\le0$ and
$\min\{c_p(v),r\}=\min\{r,\pi/\sqrt k\}$ when $k>0$, for every $r>0$.
[F4, F5, F6, F7, given]

2.1 The ball volume as the model integral. [F1, F4, F8, F9, step 1.1, step 1.2, given]
Fix the point $p$ and the radius $r>0$. By [F9] the ball $B(p,r)$ is Borel
and $\mathbf 1_{B(p,r)}$ is a Borel function, so the polar formula [F1]
applies to $f=\mathbf 1_{B(p,r)}$:
$$\operatorname{vol}_g\bigl(B(p,r)\bigr)=\int_{S_pM}\int_0^{c_p(v)}\mathbf 1_{B(p,r)}(\gamma_v(t))\det a_v(t)\,dt\,d\sigma_p(v).$$
For $0<t<c_p(v)$ the minimizing property of [F4] gives
$d_g(p,\gamma_v(t))=t$, hence
$\mathbf 1_{B(p,r)}(\gamma_v(t))=\mathbf 1_{\{t<r\}}$, while step 1.1 gives
$\det a_v(t)=\operatorname{sn}_k(t)^{n-1}$. Therefore the inner integral
equals the extended nonnegative integral
$$\int_0^{\min\{c_p(v),r\}}\operatorname{sn}_k(t)^{n-1}\,dt,$$
a finite real number. By step 1.2 this number depends on $v$ only through the
case distinction: it equals $\int_0^r\operatorname{sn}_k(t)^{n-1}dt$ when
$k\le0$ and $\int_0^{\min\{r,\pi/\sqrt k\}}\operatorname{sn}_k(t)^{n-1}dt$
when $k>0$. Write $I(r)$ for this common value. The outer integrand of the
polar formula is then the constant $I(r)$, and $\sigma_p$ is a finite measure
with $\sigma_p(S_pM)=\omega_{n-1}$ by [F8], so
$$\operatorname{vol}_g\bigl(B(p,r)\bigr)=\omega_{n-1}I(r).$$
[F1, F4, F8, F9, step 1.1, step 1.2, given]

3.1 The volume is the saturated model volume. [F8, step 1.2, step 2.1, given]
Put
$$m:=\begin{cases}r,&k\le0,\\[2pt] \min\{r,\pi/\sqrt k\},&k>0.\end{cases}$$
By step 2.1 the ball volume is $\omega_{n-1}I(r)$, and by step 1.2 the inner
integral $I(r)$ is exactly $\int_0^m\operatorname{sn}_k(t)^{n-1}dt$ in both
cases. Since $A_k(t)=\omega_{n-1}\operatorname{sn}_k(t)^{n-1}$ by [F8],
$$\operatorname{vol}_g\bigl(B(p,r)\bigr)=\int_0^mA_k(t)\,dt=V_k(m)=V^\star_k(r),$$
the last equality being the case distinction defining the saturated model
volume in [F8]. Moreover $V^\star_k(r)>0$: the integrand $A_k$ is continuous
and positive on the nondegenerate interval $(0,m)$, by the positivity of
$\operatorname{sn}_k$ on its positive domain. The value $r=\pi/\sqrt k$ for
$k>0$ is included, since the definition of $V^\star_k$ cuts off at that
endpoint. [F8, step 1.2, step 2.1, given]

4.1 Unit ratio, saturation and sharpness of the comparison. [F8, F10, F11, step 1.2, step 3.1, given]
By step 3.1, $\operatorname{vol}_g(B(p,r))=V^\star_k(r)>0$ for every $p\in M$
and every $r>0$, so the Bishop–Gromov ratio is $R_p(r)=1$ at every positive
radius: it is a constant function of $r$. When $k>0$ and $r\ge\pi/\sqrt k$,
step 1.2 makes the cutoff $m=\pi/\sqrt k$ independent of $r$, so both
$\operatorname{vol}_g(B(p,r))$ and $V^\star_k(r)=V_k(\pi/\sqrt k)$ are
constant there; this is the saturation clause of [F8] and of the comparison
[F11]. Finally, by [F10] the model space satisfies
$\operatorname{Ric}=(n-1)k\,g$, so the hypotheses of the Bishop–Gromov
comparison [F11] hold, and its general conclusion $R_p(r)\le1$ with limit $1$
at the origin is attained with equality at every radius: the model space is an
equality case of the comparison, and the comparison is sharp. The cases
$n=2$, where $A_k=2\pi\operatorname{sn}_k$, and $r$ below, equal to, or above
$\pi/\sqrt k$ (for $k>0$) are all covered by the single cutoff $m$; the value
$r=0$ is excluded, as in the definition of $R_p$. No choice beyond the
inherited [A1] is used: the point, the radial direction $v$, the minimizing
geodesic of [F6] and the sphere realization of [F7] are fixed or explicit, and
the polar, cut-time, Jacobi, Cartan–Hadamard and Hopf–Rinow interfaces carry
exactly $\mathrm{AC}_\omega$. [F8, F10, F11, step 1.2, step 3.1, given] ∎

## Source locator

Datar §§27.2 and 28.1, pp.200–209, computes the polar volume element with the
model radial density $\operatorname{sn}_k^{n-1}$ and the model ball volume
that the Bishop–Gromov quotient compares with; Eschenburg §§4–5, pp.15–20,
introduces the model radial density and its integral. The computation above
is carried out on the model space itself: the radial Jacobi tensor is
$\operatorname{sn}_k(t)$ times parallel transport, the cut time is $+\infty$
in nonpositive curvature by Cartan–Hadamard and $\pi/\sqrt k$ on the round
sphere, and the polar formula turns the ball volume into the saturated model
volume $V^\star_k(r)$.
