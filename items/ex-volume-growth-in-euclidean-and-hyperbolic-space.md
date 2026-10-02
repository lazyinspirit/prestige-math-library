---
id: ex-volume-growth-in-euclidean-and-hyperbolic-space
kind: example
title: Volume growth in euclidean and hyperbolic space
status: published
origin: pipeline
deps:
  - def-model-space-radial-area-and-ball-volume
  - thm-bishop-gromov-volume-comparison
  - prop-model-functions-solve-the-constant-curvature-jacobi-equation
  - def-countable-choice
  - def-comparison-sine-cosine-and-cotangent-functions
  - cor-polar-integration-may-discard-the-cut-locus
  - def-polar-surface-measure-on-the-unit-sphere
  - def-borel-sigma-algebra
  - def-radial-jacobi-tensor
  - def-radial-volume-jacobian
  - ex-model-jacobi-fields-in-positive-zero-and-negative-curvature
  - def-cut-time-in-a-unit-tangent-direction
  - lem-minimizing-along-a-geodesic-is-an-initial-interval-property
  - thm-cartan-hadamard
  - thm-hopf-rinow
  - thm-ftc-second-part
  - lem-derivative-of-a-power
  - thm-continuous-implies-integrable
  - def-hyperbolic-functions
  - cor-exponential-reciprocal-and-positivity
  - thm-exponential-is-strictly-increasing
  - cor-two-less-than-e-less-than-three
  - thm-monotonicity-of-the-integral
  - thm-additivity-over-subintervals
  - ex-euclidean-space-has-zero-curvature
  - thm-euclidean-space-complete
  - prop-half-space-model-geometry
  - ex-distance-hessian-and-laplacian-in-space-forms
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
      locator: "§§27.2 and 28.1, pp.200–209: the model radial density and the ball volume in the flat and hyperbolic models"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§§4–5, pp.15–20: the model radial density and its integral"
---

## Example

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let
$n\ge2$ and $a>0$, and let $(M,g)$ be a complete, connected, simply connected
Riemannian $n$-manifold of constant sectional curvature $k\le0$. We compute
the two cases $k=0$ and $k=-a^2$, the flat model and the hyperbolic model.
Then for every $p\in M$ and every radius $r>0$:

1. **Flat case.** If $k=0$ then
   $\operatorname{vol}_g(B(p,r))=V_0(r)=\omega_{n-1}r^n/n$; the standard
   realization is Euclidean $n$-space, and $V_0$ grows polynomially.
2. **Hyperbolic case.** If $k=-a^2$ then
   $$\operatorname{vol}_g(B(p,r))=V_{-a^2}(r)=\omega_{n-1}\int_0^r\left(\frac{\sinh(at)}{a}\right)^{n-1}dt,$$
   and for every $r\ge2/a$ the volume obeys the explicit lower bound
   $$V_{-a^2}(r)\ge\frac{\omega_{n-1}\,r}{2\,(4a)^{n-1}}\,e^{a(n-1)r/2},$$
   so it grows at least exponentially in $r$ at rate $a(n-1)/2>0$; the
   standard realization is hyperbolic $n$-space of curvature $-a^2$. The
   exponential rate degenerates exactly when $n=1$, which is why the
   statement is made for $n\ge2$.

## Facts & Assumptions

**Given:** The inherited $\mathrm{AC}_\omega$ of [A1]; the dimension $n\ge2$;
a real number $a>0$; a complete, connected, simply connected Riemannian
$n$-manifold $(M,g)$ of constant sectional curvature $k\le0$; a point $p\in M$;
a radius $r>0$; the unit sphere $S_pM$, the polar surface measure $\sigma_p$,
the radial geodesics $\gamma_v(t)=\exp_p(tv)$ with cut times $c_p(v)$, the
radial Jacobi tensor $A(t)$ and radial volume Jacobian $J_p(t,v)$; and the
model functions $\operatorname{sn}_k$, $A_k$, $V_k$ and $V^\star_k$.

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$
([[def-countable-choice]]), carried by the cut-time, polar-integration,
Cartan–Hadamard and Hopf–Rinow interfaces below; no further selection is made.

[F1] Comparison functions
([[def-comparison-sine-cosine-and-cotangent-functions]],
[[prop-model-functions-solve-the-constant-curvature-jacobi-equation]]):
$\operatorname{sn}_0(t)=t$, and for $k<0$,
$\operatorname{sn}_k(t)=\sinh\bigl(\sqrt{-k}\,t\bigr)/\sqrt{-k}$; in
particular $\operatorname{sn}_{-a^2}(t)=\sinh(at)/a$ because
$\sqrt{a^2}=a$. Moreover $\operatorname{sn}_k(0)=0$,
$\operatorname{sn}_k'(0)=1$, and $\operatorname{sn}_k(t)>0$ for every $t>0$
when $k\le0$.

[F2] Model volumes ([[def-model-space-radial-area-and-ball-volume]]): the
model radial area is
$A_k(t)=\omega_{n-1}\operatorname{sn}_k(t)^{n-1}$ on the positive domain of
$\operatorname{sn}_k$, which is all of $(0,\infty)$ for $k\le0$; the model
ball volume is $V_k(r)=\int_0^rA_k(t)\,dt$, and for $k\le0$ the saturated
model volume is $V^\star_k(r)=V_k(r)$. Here $\omega_{n-1}$ is the total
surface measure of the unit sphere $S^{n-1}\subseteq\mathbb R^n$.

[F3] Radial density in constant curvature
([[def-radial-jacobi-tensor]], [[def-radial-volume-jacobian]],
[[ex-model-jacobi-fields-in-positive-zero-and-negative-curvature]]): on a
manifold of constant sectional curvature $k$ the radial Jacobi tensor of a
unit-speed geodesic is $A(t)=\operatorname{sn}_k(t)P_t$, its parallel-frame
matrix is the scalar matrix $\operatorname{sn}_k(t)\cdot\mathrm{id}_{N_0}$
with $\dim N_0=n-1$, and the radial volume Jacobian equals
$$\det a_v(t)=J_p(t,v)=\operatorname{sn}_k(t)^{n-1},\qquad 0<t<c_p(v).$$

[F4] Polar integration ([[cor-polar-integration-may-discard-the-cut-locus]],
[[def-polar-surface-measure-on-the-unit-sphere]]): $(M,g)$ is complete,
connected and boundaryless; $\sigma_p$ is the finite Borel measure on $S_pM$
obtained by transporting the polar surface measure of the unit sphere by a
linear isometry, so $\sigma_p(S_pM)=\omega_{n-1}$ by [F2]; and for every Borel
$f:M\to[0,\infty]$,
$$\int_Mf\,d\operatorname{vol}_g=\int_{S_pM}\int_0^{c_p(v)}f(\gamma_v(t))\det a_v(t)\,dt\,d\sigma_p(v).$$

[F5] Cut time and minimizing initial intervals
([[def-cut-time-in-a-unit-tangent-direction]],
[[lem-minimizing-along-a-geodesic-is-an-initial-interval-property]]):
$c_p(v)=\sup\{t>0:d_g(p,\gamma_v(t))=t\}\in(0,+\infty]$, the minimizing-time
set $A_p(v)$ is an initial interval, and $d_g(p,\gamma_v(t))=t$ for every
$0<t<c_p(v)$.

[F6] Cartan–Hadamard and Hopf–Rinow ([[thm-cartan-hadamard]],
[[thm-hopf-rinow]]): a complete, connected, boundaryless manifold with
$K\le0$ and simply connected has $\exp_p$ a diffeomorphism for every $p$;
Hopf–Rinow says that on a metrically complete connected manifold every
$x,y$ are joined by a minimizing geodesic: there is $w\in T_xM$ with
$\exp_x(w)=y$ and $|w|_{g_x}=d_g(x,y)$.

[F7] Borel indicator ([[def-borel-sigma-algebra]]): the open ball $B(p,r)$ is
a Borel set and $\mathbf 1_{B(p,r)}$ is a Borel function, its preimages of
open subsets of $\mathbb R$ being one of $\varnothing$, $B(p,r)$, $M\setminus B(p,r)$ or $M$,
according to whether the open set contains neither, only $1$, only $0$,
or both of the values $0,1$. All four sets are Borel.

[F8] Power integral ([[thm-ftc-second-part]],
[[lem-derivative-of-a-power]], [[thm-continuous-implies-integrable]]): for
every integer $m\ge0$ and every $0\le s\le r$,
$$\int_s^rt^m\,dt=\frac{r^{m+1}-s^{m+1}}{m+1} ;$$
indeed $t\mapsto t^{m+1}/(m+1)$ has derivative $t^m$ by the power rule, and
$t^m$ is continuous hence integrable on $[s,r]$, so the second fundamental
theorem applies.

[F9] Hyperbolic and exponential data ([[def-hyperbolic-functions]],
[[cor-exponential-reciprocal-and-positivity]],
[[thm-exponential-is-strictly-increasing]],
[[cor-two-less-than-e-less-than-three]]): $\sinh x=\bigl(e^x-e^{-x}\bigr)/2$
with $e^{-x}=1/e^x>0$; the exponential function is strictly increasing and
$e>2$. Hence for $x\ge1$ one has $e^{-x}\le e^0=1$ and $e^x\ge e>2$, so
$\sinh x\ge(e^x-1)/2\ge\bigl(e^x-e^x/2\bigr)/2=e^x/4$.

[F10] Integral estimates ([[thm-monotonicity-of-the-integral]],
[[thm-additivity-over-subintervals]]): for integrable $f\le g$ on $[s,t]$ one
has $\int_s^tf\le\int_s^tg$, and for $s<c<t$,
$\int_s^tf=\int_s^cf+\int_c^tf$; in particular a nonnegative integrand
satisfies $\int_s^tf\ge\int_c^tf$.

[F11] Realizations ([[ex-euclidean-space-has-zero-curvature]],
[[thm-euclidean-space-complete]], [[prop-half-space-model-geometry]]):
Euclidean $\mathbb R^n$ has identically zero Riemann curvature and is
metrically complete by the Euclidean-completeness theorem, so it is the flat
case $k=0$; the upper-half-space metric of the half-space model proposition with parameter $a>0$ has constant
sectional curvature $-a^2$ for $n\ge2$, realizing the hyperbolic curvature
normalization.

[F12] Bishop–Gromov and Ricci of space forms
([[thm-bishop-gromov-volume-comparison]],
[[ex-distance-hessian-and-laplacian-in-space-forms]]): a Riemannian manifold
of constant sectional curvature $k$ has $\operatorname{Ric}=(n-1)k\,g$; and a
complete, connected, boundaryless $n$-manifold with
$\operatorname{Ric}\ge(n-1)k\,g$ has ratio
$R_p(r)=\operatorname{vol}_g(B(p,r))/V^\star_k(r)$ nonincreasing on
$(0,\infty)$ with limit $1$ as $r\downarrow0$ and
$\operatorname{vol}_g(B(p,r))\le V^\star_k(r)$ for every $r>0$.

## Verification

**Proof technique:** direct: in nonpositive constant curvature the radial
Jacobi tensor is $\operatorname{sn}_k(t)$ times parallel transport and
Cartan–Hadamard removes all cut points, so the polar formula integrates the
model density to the model volume; inserting $\operatorname{sn}_0(t)=t$ and
$\operatorname{sn}_{-a^2}(t)=\sinh(at)/a$ gives the two closed forms, and the
lower bound $\sinh x\ge e^x/4$ for $x\ge1$ converts the hyperbolic integral
into an exponential lower bound.

1.1 The radial density of the nonpositively curved model. [F3, given]
Let $v\in S_pM$ and let $\gamma_v(t)=\exp_p(tv)$ be the radial geodesic, a
unit-speed geodesic along which the sectional curvature is constantly $k\le0$.
By [F3] the radial Jacobi tensor is $A(t)=\operatorname{sn}_k(t)P_t$ and the
radial volume Jacobian is
$$\det a_v(t)=J_p(t,v)=\operatorname{sn}_k(t)^{n-1},\qquad 0<t<c_p(v).$$
[F3, given]

1.2 There are no cut points in nonpositive curvature. [F5, F6, given]
The manifold is complete, connected, boundaryless and simply connected with
sectional curvature $K=k\le0$, so by [F6] the exponential map
$\exp_p:T_pM\to M$ is a diffeomorphism, in particular injective. Let
$v\in S_pM$, $t>0$ and $q:=\gamma_v(t)=\exp_p(tv)$. By [F6] (Hopf–Rinow)
there is $w\in T_pM$ with $\exp_p(w)=q$ and $|w|_{g_p}=d_g(p,q)$; injectivity
forces $w=tv$, so $d_g(p,q)=|w|_{g_p}=t$. As $t>0$ was arbitrary, the
minimizing-time set $A_p(v)$ of [F5] contains every positive time, so its
supremum is $c_p(v)=+\infty$. [F5, F6, given]

2.1 The ball volume is the model volume. [F2, F4, F5, F7, step 1.1, step 1.2, given]
Fix $p\in M$ and $r>0$. The ball $B(p,r)$ is open, hence Borel, so by [F7]
the polar formula [F4] applies to $f=\mathbf 1_{B(p,r)}$:
$$\operatorname{vol}_g\bigl(B(p,r)\bigr)=\int_{S_pM}\int_0^{c_p(v)}\mathbf 1_{B(p,r)}(\gamma_v(t))\det a_v(t)\,dt\,d\sigma_p(v).$$
For $0<t<c_p(v)$ the minimizing property in [F5] gives
$d_g(p,\gamma_v(t))=t$, so $\mathbf 1_{B(p,r)}(\gamma_v(t))=\mathbf 1_{\{t<r\}}$,
while step 1.1 gives $\det a_v(t)=\operatorname{sn}_k(t)^{n-1}$. By step 1.2
the cut time is infinite, so the inner integral equals
$$\int_0^{\min\{c_p(v),r\}}\operatorname{sn}_k(t)^{n-1}\,dt=\int_0^r\operatorname{sn}_k(t)^{n-1}\,dt,$$
a finite number independent of $v$. Therefore the outer integral is the
constant inner value times $\sigma_p(S_pM)=\omega_{n-1}$ by [F4, F2], and
$$\operatorname{vol}_g\bigl(B(p,r)\bigr)=\omega_{n-1}\int_0^r\operatorname{sn}_k(t)^{n-1}\,dt=\int_0^rA_k(t)\,dt=V_k(r)=V^\star_k(r),$$
using $A_k=\omega_{n-1}\operatorname{sn}_k^{n-1}$ and $V^\star_k=V_k$ for
$k\le0$ from [F2]. [F2, F4, F5, F7, step 1.1, step 1.2, given]

3.1 The flat case. [F1, F8, F11, step 2.1]
Let $k=0$. Then $\operatorname{sn}_0(t)=t$ by [F1], so step 2.1 gives
$$\operatorname{vol}_g\bigl(B(p,r)\bigr)=V_0(r)=\omega_{n-1}\int_0^rt^{n-1}\,dt .$$
The power integral [F8] with $m=n-1\ge1$ and $s=0$ evaluates this as
$\omega_{n-1}r^n/n$. This is the polynomial flat volume $V_0$; Euclidean
$n$-space, of identically zero curvature and metrically complete, realizes
the case $k=0$ [F11]. [F1, F8, F11, step 2.1]

3.2 The hyperbolic case, closed form. [F1, step 2.1]
Let $k=-a^2$. Then $\sqrt{-k}=a$, so $\operatorname{sn}_{-a^2}(t)=\sinh(at)/a$
by [F1], and step 2.1 gives
$$\operatorname{vol}_g\bigl(B(p,r)\bigr)=V_{-a^2}(r)=\omega_{n-1}\int_0^r\left(\frac{\sinh(at)}{a}\right)^{n-1}dt .$$
[F1, step 2.1]

4.1 Exponential growth in negative curvature. [F9, F10, step 3.2, given]
Write $f(t):=\bigl(\sinh(at)/a\bigr)^{n-1}\ge0$ for $t\ge0$. If $t\ge1/a$
then $at\ge1$, and [F9] gives
$\sinh(at)\ge e^{at}/4$, hence
$$f(t)\ge\frac{e^{a(n-1)t}}{(4a)^{n-1}} .$$
Now let $r\ge2/a$ and $t\in[r/2,r]$. Then $t\ge1/a$ and $t\ge r/2$, so
$e^{a(n-1)t}\ge e^{a(n-1)r/2}$ because $n-1\ge1$ and the exponential is
strictly increasing by [F9]; consequently
$f\ge e^{a(n-1)r/2}/(4a)^{n-1}$ on the whole interval $[r/2,r]$. Since $f$
is nonnegative, the additivity and monotonicity of the integral [F10] give
$$\int_0^rf\ge\int_{r/2}^rf\ge\frac r2\cdot\frac{e^{a(n-1)r/2}}{(4a)^{n-1}} ,$$
and multiplying by $\omega_{n-1}>0$ and combining with step 3.2 yields
$$V_{-a^2}(r)\ge\frac{\omega_{n-1}\,r}{2\,(4a)^{n-1}}\,e^{a(n-1)r/2},\qquad r\ge\frac2a .$$
The exponent rate $a(n-1)/2$ is strictly positive because $n\ge2$, so the
hyperbolic volume grows at least exponentially, in contrast with the
polynomial flat volume of step 3.1; the constants $n$, $a$ and $\omega_{n-1}$
are fixed by the model. [F9, F10, step 3.2, given]

5.1 Realizations, Bishop–Gromov consistency and edge cases. [F11, F12, step 2.1, step 3.1, step 4.1, given]
Euclidean $n$-space has zero curvature and the upper-half-space metric of
parameter $a$ has curvature $-a^2$, by [F11], so the two computed cases
carry the flat and hyperbolic curvature normalizations (the general statement
is proved for every $(M,g)$ satisfying the hypotheses). By [F12] a space form
of curvature $k$ has $\operatorname{Ric}=(n-1)k\,g$, so both cases satisfy
the hypotheses of the Bishop–Gromov comparison [F12], whose
conclusion $\operatorname{vol}_g(B(p,r))\le V^\star_k(r)$ is attained with
equality by step 2.1. Thus the comparison is sharp on the model, and step 4.1
shows that on the negative-curvature side the volume is allowed to grow
exponentially, whereas the flat volume $V_0(r)=\omega_{n-1}r^n/n$ of step 3.1
is polynomial: a Ricci lower bound $\operatorname{Ric}\ge-(n-1)a^2g$ does not
force polynomial volume growth. The degenerate cases are excluded or
explained: $a>0$ and $r>0$ are fixed positive numbers; the threshold
$r=2/a$ is finite; $n\ge2$ makes $n-1\ge1$, which is exactly what the
exponential rate needs (for $n=1$ the integrand is constant and the growth is
linear); and $k=0$, $k<0$ exhaust the stated nonpositive curvature. The
lower bound is stated only for $r\ge2/a$, while the closed formula of
step 3.2 holds for every $r>0$; no upper bound and no exact asymptotic is
claimed. No choice beyond the inherited [A1] is used: the radial direction,
the minimizing geodesic and the model functions are fixed or explicit, and
the cut-time, polar-integration, Cartan–Hadamard and Hopf–Rinow interfaces
carry exactly $\mathrm{AC}_\omega$.
[F11, F12, step 2.1, step 3.1, step 4.1, given] ∎

## Source locator

Datar §§27.2 and 28.1, pp.200–209, records the model radial density
$\operatorname{sn}_k^{n-1}$, the polar volume element and the model ball
volume in the flat and hyperbolic cases; Eschenburg §§4–5, pp.15–20,
introduces the same model radial density and its integral. The computation
above evaluates the model volume functions $V_0$ and $V_{-a^2}$ from the
comparison functions, identifies them with the ball volumes of the flat and
hyperbolic space forms by the polar formula and Cartan–Hadamard, and derives
the explicit exponential lower bound for the hyperbolic volume from
$\sinh x\ge e^x/4$ for $x\ge1$.
