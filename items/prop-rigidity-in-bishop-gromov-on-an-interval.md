---
id: prop-rigidity-in-bishop-gromov-on-an-interval
kind: proposition
title: Rigidity in bishop gromov on an interval
status: published
origin: pipeline
deps:
  - cor-cut-time-does-not-exceed-first-conjugate-time
  - thm-bishop-gromov-volume-comparison
  - thm-relative-volume-density-comparison
  - def-radial-volume-jacobian
  - def-model-space-radial-area-and-ball-volume
  - def-comparison-sine-cosine-and-cotangent-functions
  - prop-model-functions-solve-the-constant-curvature-jacobi-equation
  - def-radial-jacobi-tensor
  - def-radial-riccati-operator
  - thm-radial-riccati-equation
  - lem-radial-jacobi-tensor-is-invertible-before-the-first-conjugate-point
  - lem-logarithmic-derivative-of-the-radial-volume-jacobian-is-the-distance-laplacian
  - thm-bonnet-myers
  - cor-polar-integration-may-discard-the-cut-locus
  - def-cut-time-in-a-unit-tangent-direction
  - lem-minimizing-along-a-geodesic-is-an-initial-interval-property
  - thm-exp-p-is-a-diffeomorphism-from-the-open-tangent-cut-domain-onto-m-minus-the-cut-locus-and-p
  - thm-differential-of-the-exponential-map-in-terms-of-jacobi-fields
  - thm-the-differential-of-exp-p-at-zero-is-the-identity
  - prop-tangential-jacobi-fields-are-affine-multiples-of-the-velocity
  - prop-curvature-tensor-of-constant-sectional-curvature
  - thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data
  - prop-round-sphere-model-geometry
  - ex-the-round-sphere-has-positive-constant-sectional-curvature
  - thm-higher-dimensional-spheres-are-simply-connected
  - ex-euclidean-space-has-zero-curvature
  - prop-half-space-model-geometry
  - thm-euclidean-space-complete
  - thm-cartan-hadamard
  - cor-simply-connected-complete-nonpositively-curved-manifolds-have-unique-geodesics-between-points
  - thm-hopf-rinow
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
  - def-ricci-curvature
  - def-sectional-curvature
  - def-riemann-curvature-four-tensor
  - def-cut-point-and-cut-locus-of-a-point
  - prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density
  - def-riemannian-volume-density
  - cor-convex-subsets-of-rn-are-contractible
  - lem-contractibility-implies-trivial-fundamental-group
  - def-simply-connected
  - def-countable-choice
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
      locator: "§§24.0–24.3 and 28.1–28.2, pp.172–180 and 205–212: the model polar metric in geodesic normal coordinates (Prop. 24.1.1, Cor. 24.1.2, Thm. 24.3.1) and the equality case of the Bishop–Gromov volume comparison (Thm. 28.1.1, Thm. 28.2.1)"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§§4–5 and 12, printed pp.15–20 and 45–47: the radial density quotient q(t)=j(t)/\bar j(t), its monotonicity, and the equality case of the volume comparison in the Myers–Cheng rigidity theorem"
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Proposition 10.9 and Chapter 11 (metric comparison): the constant-curvature polar metric dr^2 + sn_k(r)^2 g_{S^{n-1}}"
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let
$(M,g)$ be a complete, connected, boundaryless Riemannian manifold of
dimension $n\ge2$ whose Ricci curvature satisfies
$\operatorname{Ric}\ge(n-1)k\,g$ for a real number $k$, let $p\in M$, and let
$R>0$ with $R<\pi/\sqrt k$ when $k>0$. Suppose that the Bishop–Gromov ratio
$R_p(r)=\operatorname{vol}_g(B(p,r))/V^\star_k(r)$ of
[[thm-bishop-gromov-volume-comparison]] takes equal values at two radii,
$$R_p(r)=R_p(R)\qquad\text{for some }0<r<R .$$
Then:

1. **Density equality.** $J_p(t,v)=\operatorname{sn}_k(t)^{n-1}$ for every
   $t\in(0,R)$ and $\sigma_p$-almost every $v\in S_pM$; in particular
   $c_p(v)\ge R$ for almost every $v$. Equality of the ratio alone therefore
   forces radial density equality almost everywhere up to $R$.
2. **Riccati and curvature rigidity.** For almost every $v\in S_pM$ and every
   $t\in(0,R)$: the radial Riccati operator satisfies
   $S_v(t)=\operatorname{ct}_k(t)\operatorname{id}$, the radial Jacobi tensor
   satisfies $A_v(t)=\operatorname{sn}_k(t)P_t$ on $N_0$, the curvature
   operator satisfies $R_{\gamma_v}(t)=k\operatorname{id}$ on the
   parallel-trivialized space $N_0$ (equivalently
   $R(W,\dot\gamma_v)\dot\gamma_v=kW$ on $N_{\gamma_v(t)}$), and every tangent two-plane containing
   $\dot\gamma_v(t)$ has sectional curvature $k$.
3. **Model metric on the ball.** Suppose in addition that no radial geodesic
   from $p$ has a cut point at distance $<R$, that is $c_p(v)\ge R$ for every
   $v\in S_pM$, equivalently $\operatorname{Cut}(p)\cap B(p,R)=\varnothing$.
   Then $\exp_p$ is a diffeomorphism from the open tangent ball
   $B_0(R)=\{x\in T_pM:|x|<R\}$ onto $B(p,R)$, and for every $x=tv\in B_0(R)$
   with $0<t<R$ and $|v|=1$ and every $a,b\in T_pM$,
   $$(\exp_p^*g)_x(a,b)=\langle a,b\rangle+\Bigl(\frac{\operatorname{sn}_k(t)^2}{t^2}-1\Bigr)\langle a^\perp,b^\perp\rangle,$$
   with the continuous value $g_p$ at $x=0$,
   where $a^\perp=a-\langle a,v\rangle v$ and
   $b^\perp=b-\langle b,v\rangle v$. Equivalently the metric in geodesic polar
   coordinates about $p$ is
   $g=dr^2+\operatorname{sn}_k(r)^2\sigma$, where $\sigma$ is
   the round metric of the unit sphere of $(T_pM,g_p)$ carried along.
4. **Isometry with the model ball.** Under the additional hypothesis of
   part 3, let $M_k$ be the model space form of curvature $k$ realized as the
   round sphere $S^n_{1/\sqrt k}$ for $k>0$, as Euclidean $\mathbb R^n$ for
   $k=0$, and as the upper half-space $U^n=\{y>0\}$ with metric
   $\bigl((-k)y^2\bigr)^{-1}\sum_{a=1}^n dx^a\otimes dx^a$ for $k<0$; let $o$
   be its pole (a point of the sphere, the origin, or $e_n$). Then for every
   linear isometry $L:T_pM\to T_oM_k$ the map
   $\exp_o^{M_k}\circ L\circ\exp_p^{-1}$ is an isometry from $B(p,R)$ onto the
   open metric ball $B_{M_k}(o,R)$; in particular $B(p,R)$ is isometric to the
   open radius-$R$ ball of the simply connected space form of constant
   sectional curvature $k$.

The equality hypothesis is a genuine equality case: without it only
$\operatorname{vol}_g(B(p,r))\le V^\star_k(r)$ holds, and the ratio can be below one. A constant value below one can occur on
the saturated positive-curvature range, not on the nonsaturated interval
covered by the equality hypothesis here. No compactness of $M$ is assumed; for $k>0$ the manifold
is compact by Bonnet–Myers. No choice beyond the inherited
$\mathrm{AC}_\omega$ is used.

## Facts & Assumptions

**Given:** The inherited $\mathrm{AC}_\omega$ of [A1]; a complete, connected, boundaryless Riemannian manifold $(M,g)$ of dimension $n\ge2$ with $\operatorname{Ric}\ge(n-1)k\,g$ for a real number $k$; a point $p\in M$; a radius $R>0$ with $R<\pi/\sqrt k$ when $k>0$; radii $0<r<R$ with $R_p(r)=R_p(R)$; the unit sphere $S_pM$ with its polar surface measure $\sigma_p$; the cut time $c_p$ and the cut locus $\operatorname{Cut}(p)$; the radial geodesics $\gamma_v(t)=\exp_p(tv)$; the radial volume Jacobian $J_p(t,v)$; the radial Jacobi tensor $A_v$ with parallel-frame matrix $\bar A_v$ and the radial Riccati operator $S_v$; the model functions $\operatorname{sn}_k$, $\operatorname{ct}_k$, $W_k=\operatorname{sn}_k^{n-1}$; and the model space $M_k$ of part 4.

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$ ([[def-countable-choice]]), carried by the cut-time, curvature, polar-integration and convergence suppliers below; no further selection is made.

[F1] Bishop–Gromov comparison ([[thm-bishop-gromov-volume-comparison]]): $R_p$ is well defined on $(0,\infty)$, nonincreasing, satisfies $\lim_{s\downarrow0}R_p(s)=1$, and $\operatorname{vol}_g(B(p,s))\le V^\star_k(s)$ for every $s>0$; when $k>0$ it is constant on $[\pi/\sqrt k,\infty)$.

[F2] Relative volume density comparison ([[thm-relative-volume-density-comparison]], [[def-radial-volume-jacobian]]): $J_p(t,v)=\det a_v(t)>0$ for $0<t<c_p(v)$ with $J_p(t,v)/t^{n-1}\to1$, and with $$q_v(t):=\frac{J_p(t,v)}{\operatorname{sn}_k(t)^{n-1}}$$ defined on $I_v:=(0,\min(c_p(v),\pi/\sqrt k))$ when $k>0$ and on $I_v:=(0,c_p(v))$ when $k\le0$, the function $q_v$ is differentiable, nonincreasing and satisfies $q_v\le1$ and $q_v(0+)=1$ on $I_v$.

[F3] Polar integration ([[cor-polar-integration-may-discard-the-cut-locus]]): $\sigma_p$ is a finite Borel measure on $S_pM$ with $\sigma_p(S_pM)=\omega_{n-1}$, and for every Borel $f:M\to[0,\infty]$, $\int_Mf\,d\operatorname{vol}_g=\int_{S_pM}\int_0^{c_p(v)}f(\gamma_v(t))\det a_v(t)\,dt\,d\sigma_p(v)$.

[F4] Model functions and model volumes ([[def-comparison-sine-cosine-and-cotangent-functions]], [[def-model-space-radial-area-and-ball-volume]], [[prop-model-functions-solve-the-constant-curvature-jacobi-equation]]): $\operatorname{sn}_k(0)=0$, $\operatorname{sn}_k'(0)=1$, $\operatorname{sn}_k>0$ on $(0,\pi/\sqrt k)$ for $k>0$ and on $(0,\infty)$ for $k\le0$; $\operatorname{ct}_k=\operatorname{sn}_k'/\operatorname{sn}_k$ satisfies $\operatorname{ct}_k'+\operatorname{ct}_k^2=-k$ and $\operatorname{ct}_k(t)=t^{-1}+O(t)$; and $V^\star_k(s)=V_k(s)=\omega_{n-1}\int_0^sW_k$ for $0<s\le\pi/\sqrt k$.

[F5] Radial Jacobi tensor and Riccati equation ([[def-radial-jacobi-tensor]], [[def-radial-riccati-operator]], [[thm-radial-riccati-equation]]): $A_v(t)w=J_w(t)$ is the Jacobi field with $J_w(0)=0$, $D_tJ_w(0)=w$; $\bar A_v=P_t^{-1}A_v$ has $\bar A_v(0)=0$, $\bar A_v'(0)=\operatorname{id}$; $S_v=\bar A_v'\bar A_v^{-1}$ is defined, smooth and self-adjoint for $0<t<\tau_v$, where $\tau_v$ is the first conjugate instant of $p$ along $\gamma_v$; and on that interval $$S_v'+S_v^2+R_{\gamma_v}=0,\qquad R_{\gamma_v}=P_t^{-1}\circ R(\cdot,\dot\gamma_v)\dot\gamma_v\circ P_t .$$

[F6] Cut time and minimizing rays ([[def-cut-time-in-a-unit-tangent-direction]], [[lem-minimizing-along-a-geodesic-is-an-initial-interval-property]], [[def-cut-point-and-cut-locus-of-a-point]]): $c_p(v)=\sup\{t>0:d_g(p,\gamma_v(t))=t\}$ and $d_g(p,\gamma_v(t))=t$ for every $0<t<c_p(v)$; when $c_p(v)<+\infty$ the cut point $\gamma_v(c_p(v))$ lies at distance $c_p(v)$ from $p$; and $\operatorname{Cut}(p)=\{\gamma_v(c_p(v)):c_p(v)<+\infty\}$. By [[thm-bonnet-myers]], when $k>0$ one has $c_p(v)\le\pi/\sqrt k$ for every $v$.

[F7] Exponential map on the cut domain ([[thm-exp-p-is-a-diffeomorphism-from-the-open-tangent-cut-domain-onto-m-minus-the-cut-locus-and-p]]): $D_p:=\{tv:v\in S_pM,\ 0<t<c_p(v)\}$ is open in $T_pM$ and $\exp_p|_{D_p}:D_p\to M\setminus(\{p\}\cup\operatorname{Cut}(p))$ is a diffeomorphism; moreover $\exp_p$ is smooth and $d(\exp_p)_0=\operatorname{id}_{T_pM}$ in the canonical identification ([[thm-the-differential-of-exp-p-at-zero-is-the-identity]]).

[F8] Differential of the exponential map ([[thm-differential-of-the-exponential-map-in-terms-of-jacobi-fields]]): for $v\in S_pM$, $t>0$ and $a\in T_pM$, if $Y_a$ is the Jacobi field along the unit-speed geodesic $\gamma_v$ with $Y_a(0)=0$ and $D_tY_a(0)=a$, then $d(\exp_p)_{tv}(a)=\frac1tY_a(t)$; the identity holds in the canonical identification $T_{tv}(T_pM)\cong T_pM$.

[F9] Tangential Jacobi fields ([[prop-tangential-jacobi-fields-are-affine-multiples-of-the-velocity]]): along the unit-speed geodesic $\gamma_v$, the unique Jacobi field with $J(0)=0$ and $D_tJ(0)=\lambda v$ is $J(t)=t\lambda P_tv$; in particular it is tangential and orthogonal to every normal Jacobi field along $\gamma_v$.

[F10] Spectral calculus for self-adjoint endomorphisms ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]): a self-adjoint endomorphism $S$ of an $m$-dimensional real inner product space has real eigenvalues $\lambda_1,\dots,\lambda_m$ and $\operatorname{tr}S=\sum_i\lambda_i$, $\operatorname{tr}(S^2)=\sum_i\lambda_i^2$; consequently $m\operatorname{tr}(S^2)-(\operatorname{tr}S)^2=\sum_{i<j}(\lambda_i-\lambda_j)^2\ge0$, with equality if and only if $S$ is a scalar multiple of the identity.

[F11] Vanishing of a nonnegative integrand ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]): if $f\ge0$ is measurable with $\int f\,d\mu=0$, then $f=0$ $\mu$-almost everywhere.

[F12] Model Jacobi tensor ([[prop-model-functions-solve-the-constant-curvature-jacobi-equation]], [[def-radial-jacobi-tensor]], [[prop-curvature-tensor-of-constant-sectional-curvature]], [[thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data]]): on a Riemannian manifold of constant sectional curvature $k$ the curvature endomorphism acts on normal vectors as $k$ times the identity ($R(X,T)T=kX$ for $X\perp T$), so the field $t\mapsto\operatorname{sn}_k(t)P_tE$ solves the Jacobi equation with $J(0)=0$, $D_tJ(0)=E$ by the model differential identities, and by uniqueness it is that normal Jacobi field; consequently the radial Jacobi tensor is $\operatorname{sn}_k(t)\operatorname{id}$ in any parallel normal frame.

[F13] Model realizations ([[ex-the-round-sphere-has-positive-constant-sectional-curvature]], [[prop-round-sphere-model-geometry]], [[thm-higher-dimensional-spheres-are-simply-connected]], [[ex-euclidean-space-has-zero-curvature]], [[thm-euclidean-space-complete]], [[cor-convex-subsets-of-rn-are-contractible]], [[prop-half-space-model-geometry]], [[lem-contractibility-implies-trivial-fundamental-group]], [[def-simply-connected]]): the sphere $S^n_{1/\sqrt k}$ ($k>0$) has constant sectional curvature $k$, cut time $c_o(v)=\pi/\sqrt k$ at every unit $v$ and cut locus $\{-o\}$, and is metrically complete, hence geodesically complete; it is simply connected by the higher-dimensional-spheres theorem; Euclidean $\mathbb R^n$ has zero curvature, is metrically complete and is contractible because it is a nonempty convex subset of itself; and for $k<0$ the metric $g_k=\bigl((-k)y^2\bigr)^{-1}\sum_a dx^a\otimes dx^a$ on $U^n=\{y>0\}$, $y=x^n$, is the case $a=\sqrt{-k}$ of the half-space model proposition and is complete, connected and of constant sectional curvature $k$.

[F14] Cartan–Hadamard, unique minimizing geodesics and Hopf–Rinow ([[thm-cartan-hadamard]], [[cor-simply-connected-complete-nonpositively-curved-manifolds-have-unique-geodesics-between-points]], [[thm-hopf-rinow]]): a complete, connected, simply connected manifold with $K\le0$ has global exponential diffeomorphisms and unique minimizing geodesics, so $d(o,\exp_o y)=|y|$; and on a complete connected Riemannian manifold every pair of points is joined by a minimizing geodesic, and every closed bounded subset is compact (so a connected Riemannian manifold is metrically complete exactly when its closed bounded subsets are compact).

## Proof

**Proof technique:** direct: extend the radial volume Jacobian and the model density by zero, write the ball volume as the spherical integral of the model-weighted means of the extended relative density, and read off from monotonicity plus the limit one at the origin that equality of the ratio at two radii forces the extended density to be one almost everywhere; the traced Riccati equation and equality in the Cauchy–Schwarz step then force the Riccati operator, the curvature and the radial Jacobi tensor to their model values, which determine the metric in geodesic normal coordinates by the Jacobi-field formula for the differential of the exponential map; continuity of the metric extends the formula from almost every direction to the whole ball, and the same computation for the model, together with the diffeomorphism property of the two exponential maps, gives the isometry.

1.1 The extended relative density and the weighted means. [F2, F3, F4, F6, given]
Define $W_k(t):=\operatorname{sn}_k(t)^{n-1}$ on the positive domain of $\operatorname{sn}_k$ and $W_k(t):=0$ for $t\ge\pi/\sqrt k$ when $k>0$, and extend the radial volume Jacobian by zero past the cut time, $$\tilde J_v(t):=J_p(t,v)\ \ (0<t<c_p(v)),\qquad \tilde J_v(t):=0\ \ (t\ge c_p(v)),$$ and then $Q_v(t):=\tilde J_v(t)/W_k(t)$ where $W_k(t)>0$, $Q_v(t):=0$ where $W_k(t)=0$. By [F4] and [F6] the identity $Q_vW_k=\tilde J_v$ holds on all of $(0,\infty)$: where $W_k>0$ it is the definition, and for $k>0$ and $t\ge\pi/\sqrt k\ge c_p(v)$ both sides vanish. On $(0,\min(c_p(v),\pi/\sqrt k))$ or $(0,c_p(v))$ according as $k>0$ or $k\le0$, the function $Q_v$ equals $q_v$, so by [F2] it is nonincreasing, satisfies $0\le Q_v\le1$ and $Q_v(t)\to1$ as $t\downarrow0$. For $0<s\le R$ define $$A_v(s):=\frac{\int_0^sQ_vW_k}{\int_0^sW_k},\qquad \text{so }0\le A_v(s)\le1,$$ a measurable function of $v$ because $Q_v$ is [F3, F2]. The inner integral is positive: $\int_0^sW_k>0$ for every $s>0$ by [F4]. For $0<s_1<s_2$ the two-interval estimate for a nonincreasing profile gives $A_v(s_2)\le A_v(s_1)$: with $N=\int_0^{s_1}Q_vW_k$, $D=\int_0^{s_1}W_k$, $M=\int_{s_1}^{s_2}Q_vW_k$, $E=\int_{s_1}^{s_2}W_k$ one has $Q_v(t)W_k(t)D\le W_k(t)N$ for $t\in(s_1,s_2)$ after integrating $Q_v(t)\le Q_v(s)$ against $W_k(s)\ge0$ over $s\in(0,s_1)$, and integration over $t\in(s_1,s_2)$ gives $DM\le NE$, that is $A_v(s_2)\le A_v(s_1)$. Moreover $A_v(s)\to1$ as $s\downarrow0$: given $\varepsilon>0$ choose $\delta>0$ with $|Q_v-1|\le\varepsilon$ on $(0,\delta)$ by [F2], then for $0<s<\delta$, $|A_v(s)-1|\le\sup_{0<t<s}|Q_v(t)-1|\le\varepsilon$. [F2, F3, F4, F6, given]

1.2 The three model spaces. [F13, F14, given]
For the model of part 4: (i) for $k>0$, $M_k=S^n_{1/\sqrt k}$ has constant sectional curvature $k$ and cut time $c_o(v)=\pi/\sqrt k>R$ at every unit $v$, so $B_0(R)\setminus\{0\}\subseteq D_o$; [F7] applies off zero.
At zero its differential is the identity, and no other vector of $B_0(R)$
maps to $o$, so it extends to a diffeomorphism onto $B_{M_k}(o,R)$; also $S^n_{1/\sqrt k}$ is simply connected and geodesically complete, hence metrically complete by Hopf–Rinow [F13, F14]; (ii) for $k=0$, $M_k=\mathbb R^n$ is complete and contractible, hence simply connected, with zero curvature [F13]; (iii) for $k<0$, the half-space $(U^n,g_k)$ has constant sectional curvature $k$ [F13], is convex and therefore contractible and simply connected, and is complete by the half-space model proposition [F13]; it has $K=k<0$ and is simply connected, so Cartan–Hadamard [F14] makes $\exp_o:T_oM_k\to M_k$ a global diffeomorphism. In the spherical case, [F7] and the explicit round-sphere distance formula give $d(o,\exp_o y)=|y|$ for $|y|<R$. In the Euclidean case this is the Euclidean distance formula; in the nonpositive-curvature case, the cited unique-minimizing-geodesic result gives the same radial distance identity. Thus in all cases $\exp_o$ maps $B_0(R)\subseteq T_oM_k$ diffeomorphically onto $B_{M_k}(o,R)$, with the pole included. [F13, F14, given]

1.3 The exponential is a diffeomorphism onto the ball. [F6, F7, F14, given]
Assume $c_p(v)\ge R$ for every $v\in S_pM$. Then $B_0(R)\setminus\{0\}\subseteq D_p$, and [F7] makes $\exp_p|_{D_p}$ a diffeomorphism onto $M\setminus(\{p\}\cup\operatorname{Cut}(p))$; restricted to $B_0(R)\setminus\{0\}$ it is injective with nonsingular
differential. At zero, [F7] gives the identity differential and image $p$;
all other vectors of $B_0(R)$ map to points at positive distance from $p$. Its image is exactly $B(p,R)$: it is contained in $B(p,R)$ because $d_g(p,\exp_p(x))\le|x|<R$, and conversely every $q\in B(p,R)$ with $q\ne p$ is $\exp_p(w)$ for a minimizing geodesic $[0,1]\ni s\mapsto\exp_p(sw)$ of length $d_g(p,q)<R$, by Hopf–Rinow ([F14]); while $p=\exp_p(0)$. Hence $\exp_p:B_0(R)\to B(p,R)$ is a bijective local diffeomorphism, i.e. a diffeomorphism. [F6, F7, F14, given]

2.1 Ball volume as a spherical integral of weighted means. [F1, F2, F3, F4, F6, step 1.1, given]
Fix $0<s\le R$ and apply the polar formula [F3] to $f:=\mathbf 1_{B(p,s)}$. For $0<t<c_p(v)$ one has $d_g(p,\gamma_v(t))=t$ by [F6], hence $\mathbf 1_{B(p,s)}(\gamma_v(t))=\mathbf 1_{\{t<s\}}$ and $$\operatorname{vol}_g\bigl(B(p,s)\bigr)=\int_{S_pM}\int_0^{\min(c_p(v),s)}J_p(t,v)\,dt\,d\sigma_p(v)=\int_{S_pM}\Bigl(\int_0^s\tilde J_v\Bigr)d\sigma_p(v),$$ the last identity by the extension by zero of $\tilde J_v$ in step 1.1 (for $k>0$ one has $c_p(v)\le\pi/\sqrt k$ by [F6], so the truncation is consistent with the vanishing of $W_k$ beyond the model pole). Since $\tilde J_v=Q_vW_k$ [step 1.1] and $V^\star_k(s)=V_k(s)=\omega_{n-1}\int_0^sW_k$ by [F1, F4] for $s\le R<\pi/\sqrt k$ or $k\le0$, division gives the identity of finite real numbers $$R_p(s)=\frac1{\omega_{n-1}}\int_{S_pM}A_v(s)\,d\sigma_p(v),\qquad 0<s\le R .$$ [F1, F2, F3, F4, F6, step 1.1, given]

2.2 The model pullback metric. [F4, F8, F9, F12, step 1.2, given]
Fix $y=tv\in B_0(R)$ in the model, $|v|=1$, and $a=a^\perp+\lambda v$ in $T_oM_k$. The model has constant sectional curvature $k$, so by [F12] the normal part of the Jacobi field $Y_a$ with initial data $(0,a)$ is $\operatorname{sn}_k(t)P_ta^\perp$, while its tangential part is $t\lambda P_tv$ by [F9]; hence, applying [F8] to this model Jacobi field, $$(\exp_o^*g_k)_y(a,b)=\frac{\operatorname{sn}_k(t)^2}{t^2}\langle a^\perp,b^\perp\rangle+\langle a,v\rangle\langle b,v\rangle$$ for all $a,b\in T_oM_k$, where the inner products are those of $g_k$ at $o$, identified with those of $T_pM$ through the linear isometry $L$. [F4, F8, F9, F12, step 1.2, given]

3.1 Equality of the ratio forces the extended density to be one. [F1, F11, step 1.1, step 2.1, given]
Since $R_p$ is nonincreasing [F1] and $R_p(r)=R_p(R)$, one has $R_p(s)=R_p(R)$ for every $s\in[r,R]$; in particular $$\int_{S_pM}\bigl(A_v(r)-A_v(R)\bigr)d\sigma_p(v)=\omega_{n-1}\bigl(R_p(r)-R_p(R)\bigr)=0$$ by step 2.1. The integrand is nonnegative because $A_v$ is nonincreasing in the radius [step 1.1], so $A_v(r)-A_v(R)=0$ for $\sigma_p$-almost every $v$ by [F11]. Fix such a $v$ and put $c:=A_v(r)=A_v(R)\in[0,1]$. Set $\phi:=Q_v-c$, which is nonincreasing [step 1.1]. The two equal averages give $\int_0^r\phi W_k=0$ and $\int_r^R\phi W_k=0$. Put $D_1:=\int_0^rW_k>0$ and $D_2:=\int_r^RW_k>0$. Monotonicity yields $$0=D_2\int_0^r\phi(s)W_k(s)\,ds-D_1\int_r^R\phi(t)W_k(t)\,dt =\int_0^r\int_r^R(\phi(s)-\phi(t))W_k(s)W_k(t)\,dt\,ds,$$ whose integrand is nonnegative. Thus $\phi(s)=\phi(t)$ for almost every cross-pair, so Fubini implies that $\phi$ is constant almost everywhere on $(0,R)$. Its average on $(0,r)$ is zero, so that constant is zero. Thus $Q_v=c$ almost everywhere on $(0,R)$, and therefore $A_v(s)=c$ for every $0<s\le R$, because $Q_v-c$ vanishes almost everywhere on each interval $(0,s)$. Passing to the limit $s\downarrow0$ and using $A_v(0+)=1$ [step 1.1] gives $c=1$. Hence $Q_v=1$ almost everywhere on $(0,R)$; since $Q_v$ is nonincreasing, $Q_v\equiv1$ on $(0,R)$: if $Q_v(t_0)<1$ for some $t_0\in(0,R)$, then $Q_v(t)\le Q_v(t_0)<1$ for every $t\in(t_0,R)$, contradicting $Q_v=1$ almost everywhere. On $(0,R)$ one has $Q_v=q_v=J_p/\operatorname{sn}_k^{n-1}$ by step 1.1 and [F2, F4], so $$J_p(t,v)=\operatorname{sn}_k(t)^{n-1}\qquad(0<t<R)$$ for $\sigma_p$-almost every $v$; and $c_p(v)\ge R$ for such $v$, since $Q_v$ vanishes on $[c_p(v),\infty)$ by step 1.1 and equals $1$ on $(0,R)$. [F1, F11, step 1.1, step 2.1, given]

4.1 The traced Riccati equation forces $S_v=\operatorname{ct}_k\operatorname{id}$. [F2, F4, F5, F10, step 3.1, given]
Fix $v$ with $J_p(t,v)=\operatorname{sn}_k(t)^{n-1}$ on $(0,R)$ [step 3.1]. For $0<t<\min(c_p(v),\tau_v)$ the logarithmic-derivative identity ([[lem-logarithmic-derivative-of-the-radial-volume-jacobian-is-the-distance-laplacian]]) gives $$h(t):=\operatorname{tr}S_v(t)=\frac{d}{dt}\log J_p(t,v)=(n-1)\frac{d}{dt}\log\operatorname{sn}_k(t)=(n-1)\operatorname{ct}_k(t)$$ on $(0,R)$, since $\operatorname{ct}_k=\operatorname{sn}_k'/\operatorname{sn}_k$ and $J_p$ is positive there [F2, F4]; and $(0,R)$ lies inside the domain of definition of $S_v$ because $R\le c_p(v)\le\tau_v$ ([[cor-cut-time-does-not-exceed-first-conjugate-time]], [F5, F6]). Taking traces in the Riccati equation of [F5] on $(0,R)$ gives the exact identity $$h'(t)+\operatorname{tr}\bigl(S_v(t)^2\bigr)+\operatorname{Ric}_{\gamma_v(t)}\bigl(\dot\gamma_v(t),\dot\gamma_v(t)\bigr)=0,$$ where $\operatorname{tr}R_{\gamma_v}=\operatorname{Ric}(\dot\gamma_v,\dot\gamma_v)$ by the trace definition of the Ricci curvature ([[def-ricci-curvature]]) in a parallel orthonormal frame, and $S_v(t)$ is self-adjoint [F5]. Substituting $h=(n-1)\operatorname{ct}_k$, $h'=(n-1)\operatorname{ct}_k'$ and $\operatorname{ct}_k'+\operatorname{ct}_k^2=-k$ [F4], and using $\operatorname{Ric}(\dot\gamma_v,\dot\gamma_v)\ge(n-1)k$, gives $$\operatorname{tr}\bigl(S_v^2\bigr)=(n-1)\bigl(k+\operatorname{ct}_k^2\bigr)-\operatorname{Ric}_{\gamma_v}(\dot\gamma_v,\dot\gamma_v)\le(n-1)\operatorname{ct}_k(t)^2=\frac{h(t)^2}{n-1}.$$ By [F10] applied to the self-adjoint $S_v(t)$ on the $(n-1)$-dimensional normal space, $(n-1)\operatorname{tr}(S_v^2)-h^2=\sum_{i<j}(\lambda_i-\lambda_j)^2\ge0$, so equality holds and all eigenvalues of $S_v(t)$ are equal. Hence $S_v(t)$ is a scalar multiple of the identity with trace $h(t)$, that is $$S_v(t)=\operatorname{ct}_k(t)\operatorname{id}_{N_0}\qquad(0<t<R),$$ and equality in the displayed chain also gives $\operatorname{Ric}_{\gamma_v(t)}(\dot\gamma_v(t),\dot\gamma_v(t))=(n-1)k$; the endpoint $t=0$ and the conjugate endpoint $t=\tau_v$ are excluded by [F5]. [F2, F4, F5, F10, step 3.1, given]

5.1 The curvature and the radial Jacobi tensor. [F4, F5, F9, step 4.1, given]
Fix the same $v$. Substituting $S_v=\operatorname{ct}_k\operatorname{id}$ into the Riccati equation $S_v'+S_v^2+R_{\gamma_v}=0$ [F5] and using $\operatorname{ct}_k'+\operatorname{ct}_k^2=-k$ [F4] gives $$R_{\gamma_v}(t)=\bigl(-(\operatorname{ct}_k'+\operatorname{ct}_k^2)\bigr)(t)\operatorname{id}_{N_0}=k\operatorname{id}_{N_0}\qquad(0<t<R)$$ for the parallel-frame curvature operator; since $P_t$ is isometric ([[def-radial-jacobi-tensor]]), $R(w,\dot\gamma_v(t))\dot\gamma_v(t)=kw$ for every $w\perp\dot\gamma_v(t)$, so every tangent two-plane containing $\dot\gamma_v(t)$ has sectional curvature $k$ ([[def-sectional-curvature]], [[def-riemann-curvature-four-tensor]]). For the Jacobi tensor: $S_v=\bar A_v'\bar A_v^{-1}$ means $\bar A_v'=\operatorname{ct}_k\bar A_v$ on $(0,R)$; every column $c$ of $\bar A_v$ therefore satisfies $c'=\operatorname{ct}_kc$, so $c(t)=\lambda_c\operatorname{sn}_k(t)$ for a constant $\lambda_c$ because $\operatorname{sn}_k>0$ and $\frac{d}{dt}\bigl(c/\operatorname{sn}_k\bigr)=\bigl(\operatorname{ct}_kc-\operatorname{ct}_kc\bigr)/\operatorname{sn}_k=0$ [F4]. Evaluating the one-sided derivative at $0$ using $\bar A_v(0)=0$, $\bar A_v'(0)=\operatorname{id}$ and $\operatorname{sn}_k(t)/t\to1$ [F4, F5] gives $\lambda_c=c'(0)=e_c$, hence $$\bar A_v(t)=\operatorname{sn}_k(t)\operatorname{id}_{N_0},\qquad A_v(t)=\operatorname{sn}_k(t)P_t\quad(0<t<R),$$ and therefore $A_v(t)w=\operatorname{sn}_k(t)P_tw$ for every $w\in N_0$. [F4, F5, F9, step 4.1, given]

6.1 The metric in normal coordinates on the good directions. [F8, F9, step 3.1, step 5.1, given]
Let $G\subseteq S_pM$ be the set of directions $v$ satisfying the conclusions of steps 3.1 and 5.1; it has full $\sigma_p$-measure. Fix $v\in G$, $t\in(0,R)$ and $a\in T_pM$, and decompose $a=a^\perp+\lambda v$ with $a^\perp\in N_0$ and $\lambda=\langle a,v\rangle$. Let $Y_a$ be the Jacobi field along the unit-speed geodesic $\gamma_v$ with $Y_a(0)=0$, $D_tY_a(0)=a$. The field $t\mapsto\operatorname{sn}_k(t)P_ta^\perp+t\lambda P_tv$ is a sum of two Jacobi fields: the first is $A_v(t)a^\perp$ by step 5.1 ([[def-radial-jacobi-tensor]]), and the second is the tangential field of [F9] with the same initial data $(0,\lambda v)$; the sum has initial data $(0,a^\perp+\lambda v)=(0,a)$, so by uniqueness of Jacobi fields with prescribed initial data the two fields agree: $$Y_a(t)=\operatorname{sn}_k(t)P_ta^\perp+t\lambda P_tv .$$ By [F8], $d(\exp_p)_{tv}(a)=\frac1tY_a(t)$, and therefore, using that parallel transport is isometric and that normal and tangential fields are orthogonal, $$(\exp_p^*g)_{tv}(a,b)=\frac1{t^2}\bigl\langle Y_a(t),Y_b(t)\bigr\rangle_g=\frac{\operatorname{sn}_k(t)^2}{t^2}\langle a^\perp,b^\perp\rangle+\langle a,v\rangle\langle b,v\rangle$$ for all $a,b\in T_pM$ and every $v\in G$. Equivalently, with $\langle a,b\rangle=\langle a^\perp,b^\perp\rangle+\langle a,v\rangle\langle b,v\rangle$, $$(\exp_p^*g)_{tv}(a,b)=\langle a,b\rangle+\Bigl(\frac{\operatorname{sn}_k(t)^2}{t^2}-1\Bigr)\langle a^\perp,b^\perp\rangle .$$ [F8, F9, step 3.1, step 5.1, given]

7.1 The formula extends to the whole ball. [F4, F7, step 6.1, given]
Define on $B_0(R)$ the tensor field $F_x(a,b):=\langle a,b\rangle+\bigl(\operatorname{sn}_k(t)^2/t^2-1\bigr)\langle a^\perp,b^\perp\rangle$ for $x=tv$, $|v|=1$, $t>0$, and $F_0:=\langle\cdot,\cdot\rangle$; the coefficient $\operatorname{sn}_k(t)^2/t^2$ extends smoothly to $t=0$ with value $1$, as the explicit branch formulas $\operatorname{sn}_k(t)=\sin(\sqrt k\,t)/\sqrt k$, $t$, $\sinh(\sqrt{-k}\,t)/\sqrt{-k}$ show ([[def-comparison-sine-cosine-and-cotangent-functions]]), so $F$ is a smooth tensor field on $B_0(R)$; and $(\exp_p^*g)_0=\langle\cdot,\cdot\rangle=F_0$ because $d(\exp_p)_0=\operatorname{id}$ [F7]. By step 6.1 the identity $\exp_p^*g=F$ holds at every $x=tv$ with $v\in G$, $0<t<R$. The set of such $x$ is dense in $B_0(R)$: every nonempty open subset of $S_pM$ has positive surface measure, so the full-measure set $G$ meets each such subset and is dense; a dense set of directions is dense in every sphere of radius $t<R$ under the diffeomorphism $v\mapsto tv$ of the unit sphere onto itself. Both sides of the identity are continuous tensor fields on $B_0(R)$: the left side because $\exp_p$ is smooth [F7] and $g$ is smooth, the right side because it is given by smooth formulas, has the normal-coordinate expression defining $F$. Hence $\exp_p^*g=F$ on all of $B_0(R)$, which is the displayed formula of part 3. In polar coordinates,
an angular tangent vector $\xi\in T_vS_pM$ maps under $(t,v)\mapsto tv$
to $t\xi$, so its squared metric length is
$\operatorname{sn}_k(t)^2|\xi|^2$; this converts the normal-coordinate
factor $\operatorname{sn}_k(t)^2/t^2$ into the angular factor
$\operatorname{sn}_k(t)^2$. [F4, F7, step 6.1, given]

8.1 The isometry. [step 6.1, step 7.1, step 1.3, step 1.2, step 2.2, given]
Assume the additional hypothesis of part 3 and let $L:T_pM\to T_oM_k$ be a linear isometry. By steps 1.3 and 1.2 both $\exp_p^{-1}:B(p,R)\to B_0(R)$ and $\exp_o:B_0(R)\to B_{M_k}(o,R)$ are diffeomorphisms, so $\Phi:=\exp_o\circ L\circ\exp_p^{-1}$ is a diffeomorphism from $B(p,R)$ onto $B_{M_k}(o,R)$. For $x\in B(p,R)$, $y=\exp_p^{-1}(x)=tv$ and $u\in T_xM$ put $a:=d(\exp_p^{-1})_xu\in T_pM$; then $d\Phi_xu=d(\exp_o)_{Ly}(La)$, and by step 2.2 applied to $La$, $$(\Phi^*g_k)_x(u,u') = \frac{\operatorname{sn}_k(t)^2}{t^2}\bigl\langle (La)^\perp,(La')^\perp\bigr\rangle+\langle La,Lv\rangle\langle La',Lv\rangle .$$ Since $L$ is an isometry, $(La)^\perp=L(a^\perp)$, $\langle La,Lv\rangle=\langle a,v\rangle$ and $\langle a,b\rangle=\langle a^\perp,b^\perp\rangle+\langle a,v\rangle\langle b,v\rangle$; comparing with step 7.1 (with $a=d(\exp_p^{-1})_xu$ and $b=d(\exp_p^{-1})_xu'$) gives $(\Phi^*g_k)_x(u,u')=g_x(u,u')$ for all $u,u'\in T_xM$ and all $x\in B(p,R)$. Hence $\Phi$ is an isometry from $B(p,R)$ onto $B_{M_k}(o,R)$, and $B(p,R)$ is isometric to the open radius-$R$ ball of the simply connected space form of curvature $k$. In each of the three realizations the named model is the simply connected space form of curvature $k$ by step 1.2 and the cited curvature statements, and the ball $B_{M_k}(o,R)$ is its open radius-$R$ ball; the case $n=2$ enters only through $n-1=1$, and for $k>0$ the strict hypothesis $R<\pi/\sqrt k$ keeps the ball inside the injectivity radius of the pole. No step selects a direction, a frame, a chart or a subsequence from a family: every per-direction statement is made for a fixed $v\in S_pM$, the exceptional set is the $\sigma_p$-null complement of $G$, and the only choice principle used is the inherited $\mathrm{AC}_\omega$ of [A1] carried by the cut-time, Jacobi, polar and convergence suppliers. [step 6.1, step 7.1, step 1.3, step 1.2, step 2.2, given] ∎

## Source locator

Datar's Lecture 24 (Prop. 24.1.1, Cor. 24.1.2 and Thm. 24.0.1 with its proof, pp.172–180) contains the model polar metric in geodesic normal coordinates, the model Jacobi fields and the local-isometry construction from the constant curvature of the pullback metrics; Thm. 28.1.1 and Thm. 28.2.1 (pp.205–212) contain the Bishop–Gromov comparison and its equality case, where equality forces the density quotient to be one and the radial curvature to be the model curvature. Eschenburg §§4–5 and 12 (pp.15–20, 45–47) uses the same quotient $q(t)=j(t)/\bar j(t)$ and the same equality discussion in the Myers–Cheng rigidity theorem. Lee's Prop. 10.9 and Chapter 11 supply the constant-curvature normal form $dr^2+\operatorname{sn}_k(r)^2g_{S^{n-1}}$. The proof above is carried out from the in-library polar integration formula, the relative density comparison, the traced Riccati equation, the Jacobi-field formula for the differential of the exponential map and the Cauchy–Schwarz equality case for a self-adjoint operator; the passage from almost every direction to the whole ball is the density of the full-measure set $G$ together with the continuity of both sides of the metric identity.
