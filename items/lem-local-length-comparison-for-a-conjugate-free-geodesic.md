---
id: lem-local-length-comparison-for-a-conjugate-free-geodesic
kind: lemma
title: Local length comparison for a conjugate-free geodesic
status: draft
origin: pipeline
deps:
  - def-conjugate-points-along-a-geodesic-and-their-multiplicity
  - def-countable-choice
  - def-geodesic-of-an-affine-connection
  - def-jacobi-field
  - def-levi-civita-connection
  - lem-compactness-is-intrinsic
  - thm-the-riemannian-distance-topology-is-the-manifold-topology
  - def-metric-compactness
  - def-piecewise-c-one-curve-on-a-manifold
  - def-riemannian-distance-on-a-connected-manifold
  - def-riemannian-metric-and-riemannian-manifold
  - def-riemannian-speed-and-length
  - lem-riemannian-length-is-independent-of-piecewise-c-one-subdivision
  - prop-affine-reparametrization-of-a-geodesic-is-a-geodesic
  - prop-exponential-map-scales-geodesic-time
  - prop-geodesics-have-constant-speed-for-a-metric-compatible-connection
  - prop-length-is-additive-under-concatenation-and-invariant-under-reversal
  - thm-chain-rule
  - thm-chain-rule-for-differentials-of-smooth-maps
  - thm-continuous-image-of-a-compact-space-is-compact
  - thm-differential-of-the-exponential-map-in-terms-of-jacobi-fields
  - thm-every-jacobi-field-is-induced-by-a-geodesic-variation
  - thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data
  - thm-existence-uniqueness-and-smooth-dependence-of-geodesics
  - thm-gauss-lemma
  - thm-lebesgue-number-lemma
  - thm-linearity-of-the-integral
  - thm-monotonicity-of-the-integral
  - thm-newton-leibniz-with-interior-derivative
  - thm-nonnegative-continuous-with-zero-integral-vanishes
  - thm-rank-nullity
  - thm-riemannian-distance-is-a-metric
  - thm-riemannian-length-is-invariant-under-orientation-preserving-piecewise-c-one-reparametrization
  - thm-smooth-inverse-function-theorem-on-manifolds
  - thm-the-differential-of-exp-p-at-zero-is-the-identity
  - thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth
  - thm-variation-field-of-a-geodesic-variation-is-a-jacobi-field
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Zuoqin Wang, Riemannian Geometry (USTC, 2024 Spring), Lecture 20: The index form"
      url: http://staff.ustc.edu.cn/~wangzuoq/Courses/24S-RiemGeom/Notes/Lec20.pdf
      locator: "Theorem 1.1(1) including the 'moreover' clause and its proof, and Lemma 1.3 (radial comparison) with its proof: the finite existence of local inverse branches of exp_p on sub-segments, the pull-back of a nearby curve, the Gauss-lemma estimate |(d exp_p)_phi phi-dot| >= |r-dot| and the equality discussion. Complete relevant passage read."
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Chapter 10, printed pp.173-190 (Jacobi fields, conjugate points, Gauss lemma); the local structure of exp_p and the minimizing property before the first conjugate point are discussed there without the equality clause, which is derived locally here."
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Lectures 18 and 22-23, printed pp.134-135 and 163-169: Gauss lemma and the behaviour below the first conjugate point; the equality analysis is carried out locally here and is not quoted."
---

## Statement

Assume exactly the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$,
propagated through the declared exponential-map, Jacobi-field and conjugacy
suppliers; the finite-dimensional constructions below spend no further choice.
Let $(M,g)$ be a connected finite-dimensional Riemannian manifold without
boundary, let $a<b$, and let $\gamma:[a,b]\to M$ be an affinely parametrized
geodesic of the Levi-Civita connection such that for no $t\in(a,b]$ are
$\gamma(a)$ and $\gamma(t)$ conjugate along $\gamma|_{[a,t]}$. Write
$p:=\gamma(a)$, $v:=\dot\gamma(a)$ and $L:=L_g(\gamma)$.

Then there is a real $\varepsilon>0$ such that every continuous piecewise $C^1$
curve $\bar\gamma:[a,b]\to M$ with
$$\bar\gamma(a)=\gamma(a),\qquad \bar\gamma(b)=\gamma(b),\qquad \sup_{t\in[a,b]}d_g(\bar\gamma(t),\gamma(t))<\varepsilon$$
satisfies $$L_g(\bar\gamma)\ge L_g(\gamma),$$ and equality holds if and only if
there is a continuous nondecreasing surjection $\tau:[a,b]\to[a,b]$, piecewise
$C^1$, with $\tau(a)=a$ and $\tau(b)=b$, such that $\bar\gamma=\gamma\circ\tau$.

Constant geodesics (where any $\tau$ works and $\bar\gamma$ is then constant)
are included; no completeness, unit speed, compactness of $M$, or full Axiom of
Choice is assumed. The $d_g$-closeness is measured in the Riemannian distance of
$M$.

## Facts & Assumptions

**Given:** The connected finite-dimensional Riemannian manifold $(M,g)$, the
affinely parametrized geodesic $\gamma:[a,b]\to M$ with no conjugate instant
$\gamma(t)$, $t\in(a,b]$, and the abbreviations $p=\gamma(a)$, $v=\dot\gamma(a)$.

[A1] The countable-choice premise is $\mathrm{AC}_\omega$
([[def-countable-choice]]), inherited exactly through the declared
exponential-map, Jacobi-field, conjugacy and inverse-function suppliers, whose
statements carry it. No selection from an infinite family occurs below.

[F1] Under [A1], $\mathcal E_p$ is open in $T_pM$ and $\exp_p$ is smooth on it
([[thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth]]), and
for every $z\in T_pM$ and $s\in I_{p,z}$ one has $sz\in\mathcal E_p$ and
$\exp_p(sz)=\gamma_{p,z}(s)$ ([[prop-exponential-map-scales-geodesic-time]]).

[F2] Gauss lemma: for $u\in\mathcal E_p$ and $w\in T_pM$,
$$g_{\exp_p(u)}\bigl(d(\exp_p)_u(u),d(\exp_p)_u(w)\bigr)=g_p(u,w);$$
in particular $|d(\exp_p)_u(u)|_g=|u|_g$, and images of the radial direction $u$
and of any $w\perp_g u$ are orthogonal ([[thm-gauss-lemma]]).

[F3] Under the canonical identification $T_{0_p}(T_pM)\cong T_pM$ one has
$d(\exp_p)_{0_p}=\operatorname{id}_{T_pM}$; in particular the differential at
$0_p$ is invertible ([[thm-the-differential-of-exp-p-at-zero-is-the-identity]]).

[F4] For $z\in\mathcal E_p$ and $\gamma_z(s):=\exp_p(sz)$, $s\in[0,1]$, and any
$w\in T_pM$ there is a unique Jacobi field $J$ along $\gamma_z$ with $J(0)=0$,
$D_sJ(0)=w$, and then $d(\exp_p)_z(w)=J(1)$; the derivative at the included
endpoint $0$ is one-sided ([[thm-differential-of-the-exponential-map-in-terms-of-jacobi-fields]]).

[F5] Transfer apparatus for conjugacy. A smooth field is Jacobi exactly when
$D_t^2J+R(J,\dot\gamma)\dot\gamma=0$
([[def-jacobi-field]]); for every $u,w\in T_{\gamma(a)}M$ there is exactly one
Jacobi field along $\gamma$ with $J(a)=u$, $D_tJ(a)=w$
([[thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data]]); every
Jacobi field along an affinely parametrized geodesic is the variation field of a
smooth variation by affinely parametrized geodesics, which may have moving
endpoints ([[thm-every-jacobi-field-is-induced-by-a-geodesic-variation]]); the
variation field of a smooth variation by affinely parametrized geodesics is a
Jacobi field along the central curve
([[thm-variation-field-of-a-geodesic-variation-is-a-jacobi-field]]); and for
affine $\ell(t)=at+b$ mapping an interval into the domain of a geodesic
$\sigma$, the curve $\sigma\circ\ell$ is again an affinely parametrized geodesic
([[prop-affine-reparametrization-of-a-geodesic-is-a-geodesic]]). Finally
$\gamma(a)$ and $\gamma(t)$, $a<t$, are conjugate along $\gamma|_{[a,t]}$ exactly
when some nonzero Jacobi field along $\gamma|_{[a,t]}$ vanishes at both
endpoints; for constant $\gamma$ no pair is conjugate
([[def-conjugate-points-along-a-geodesic-and-their-multiplicity]]).

[F6] If $F:M\to N$ is smooth and $dF_p$ is an isomorphism, then $F$ is a local
diffeomorphism at $p$ ([[thm-smooth-inverse-function-theorem-on-manifolds]]).

[F7] A compact metric space with an open cover has a Lebesgue number: a
$\delta>0$ such that every subset of diameter $<\delta$ lies in one member
([[thm-lebesgue-number-lemma]], [[def-metric-compactness]]).

[F8] The continuous image of a compact set is compact
([[thm-continuous-image-of-a-compact-space-is-compact]]); consequently every
open cover of such an image has a finite subcover
([[def-metric-compactness]], [[lem-compactness-is-intrinsic]]).
The $d_g$ topology equals the manifold topology
([[thm-the-riemannian-distance-topology-is-the-manifold-topology]]), so smooth
curves and inverse branches are continuous for the metric used below.

[F9] Under [A1], for every $(q,w)\in TM$ there is a unique maximal geodesic
$\gamma_{q,w}:I_{q,w}\to M$ with $\gamma_{q,w}(0)=q$,
$\gamma'_{q,w}(0)=w$, and $I_{q,w}$ is an open interval containing $0$
([[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]]). An
affinely parametrized geodesic is a smooth curve with
$D_t\gamma'=0$, one-sided at included endpoints
([[def-geodesic-of-an-affine-connection]]).

[F10] The length $L_g(\bar\gamma)=\sum_j\int_{t_{j-1}}^{t_j}|\dot{\bar\gamma}|_g\,dt$
of a piecewise $C^1$ curve is independent of the admissible subdivision
([[def-riemannian-speed-and-length]],
[[lem-riemannian-length-is-independent-of-piecewise-c-one-subdivision]]), and
length is additive under finite concatenation and invariant under reversal
([[prop-length-is-additive-under-concatenation-and-invariant-under-reversal]]);
a continuous piecewise $C^1$ curve has coordinate representatives that are $C^1$
on interiors with derivatives extending continuously to the closed pieces
([[def-piecewise-c-one-curve-on-a-manifold]]).

[F11] The Levi-Civita connection is metric compatible
([[def-levi-civita-connection]]). A geodesic of a metric-compatible connection has constant speed
([[prop-geodesics-have-constant-speed-for-a-metric-compatible-connection]]), so
in particular $|\dot\gamma|\equiv|v|_g$ and $L_g(\gamma)=(b-a)|v|_g$ by [F10].

[F12] Chain rules: the differential of a composite of smooth maps is the
composite of the differentials
([[thm-chain-rule-for-differentials-of-smooth-maps]]), and the classical chain
rule handles compositions of real functions such as
$t\mapsto\sqrt{|u(t)|_g^2+\sigma^2}$
([[thm-chain-rule]]).

[F13] Monotonicity and linearity of the Riemann integral
([[thm-monotonicity-of-the-integral]], [[thm-linearity-of-the-integral]]), and
Newton--Leibniz with interior derivative: a continuous $G$ on $[c,d]$ that is
differentiable on $(c,d)$ with $G'=f$ there for an integrable $f$ satisfies
$\int_c^df=G(d)-G(c)$
([[thm-newton-leibniz-with-interior-derivative]]).

[F14] A continuous nonnegative function on $[c,d]$ with vanishing integral is
identically zero ([[thm-nonnegative-continuous-with-zero-integral-vanishes]]).

[F15] If $\tau:[a,b]\to[a,b]$ is a continuous nondecreasing surjection, piecewise
$C^1$, and $\gamma$ is piecewise $C^1$, then $\gamma\circ\tau$ is piecewise $C^1$
and $L_g(\gamma\circ\tau)=L_g(\gamma)$
([[thm-riemannian-length-is-invariant-under-orientation-preserving-piecewise-c-one-reparametrization]]).

[F16] $g$ is a symmetric positive-definite bilinear form on each fibre, so it
is an inner product, and the induced norm is the Riemannian speed norm
([[def-riemannian-metric-and-riemannian-manifold]]); $d_g$ is the Riemannian
distance of a connected manifold, the infimum of lengths of piecewise $C^1$
curves ([[def-riemannian-distance-on-a-connected-manifold]]); and $d_g$ is a
finite metric, so the triangle inequality
$d_g(x,z)\le d_g(x,y)+d_g(y,z)$ holds
([[thm-riemannian-distance-is-a-metric]]).

[F17] An injective linear map between real vector spaces of the same finite
dimension is bijective ([[thm-rank-nullity]]).

## Proof

**Proof technique:** the segment is covered by finitely many tangent balls on which $\exp_p$ is a diffeomorphism; a nearby curve is pulled back to a piecewise $C^1$ curve $\varphi$ with $\exp_p\circ\varphi=\bar\gamma$; the smoothed radius $\sqrt{r^2+\sigma^2}$ with $r=|\varphi|_g$ satisfies the pointwise Gauss-lemma bound $|\bar\gamma'|_g\ge|(\sqrt{r^2+\sigma^2})'|$, and Newton--Leibniz on the strips gives $L_g(\bar\gamma)\ge\sqrt{|X|_g^2+\sigma^2}-\sigma\uparrow|X|_g$. Equality forces $r$ to be nondecreasing, the spherical part of $\varphi'$ to vanish and the direction $\varphi/r$ to be the constant direction of $X$; then $\bar\gamma=\gamma\circ\tau$ with $\tau$ the radial reparametrization, and conversely [F15].

1.1 Set-up and exponential parametrization of $\gamma$. [F1, F9, F10, F11, given]
Put $X:=(b-a)v\in T_pM$ and $\psi(t):=(t-a)v$ for $t\in[a,b]$, so $\psi$ is affine, $\psi(a)=0$ and $\psi(b)=X$. By [F9] the maximal geodesic $\gamma_{p,v}$ has an open interval $I_{p,v}\ni0$ and, by uniqueness in [F9], $s\mapsto\gamma_{p,v}(s)$ and $s\mapsto\gamma(a+s)$ agree for $s\in[0,b-a]$; in particular $t-a\in I_{p,v}$ for every $t\in[a,b]$. Hence by [F1] each $\psi(t)=(t-a)v$ lies in $\mathcal E_p$ and
$$\exp_p(\psi(t))=\gamma_{p,v}(t-a)=\gamma(t)\qquad(a\le t\le b).$$
Finally [F11] with [F10] gives $|\dot\gamma|\equiv|v|_g$, so $L_g(\gamma)=(b-a)|v|_g=|X|_g$. [F1, F9, F10, F11, given]

2.1 The differential of $\exp_p$ is invertible along the segment. [F3, F4, F5, F17, step 1.1, given]
Fix $t\in(a,b]$, put $\tau:=t-a>0$ and $\sigma(s):=\exp_p(s\tau v)$ for $s\in[0,1]$, which by [F1] and step 1.1 equals $\gamma(a+s\tau)$. Let $w\in\ker d(\exp_p)_{\tau v}$ and let $J$ be the Jacobi field along $\sigma$ with $J(0)=0$, $D_sJ(0)=w$; by [F4] it exists uniquely, is nonzero when $w\ne0$, and $J(1)=d(\exp_p)_{\tau v}(w)=0$. If $w\ne0$, [F5] realizes $J$ as the variation field of a smooth variation $F:(-\eta,\eta)\times[0,1]\to M$ by affinely parametrized geodesics with $F(0,s)=\sigma(s)$, and $u\mapsto (u-a)/\tau$ maps $[a,t]$ affinely onto $[0,1]$; hence $\tilde F(r,u):=F(r,(u-a)/\tau)$ is a smooth variation of $\gamma|_{[a,t]}$ whose longitudinal curves are affinely parametrized geodesics by [F5], and its variation field $\tilde J(u)=J((u-a)/\tau)$ is a Jacobi field along $\gamma|_{[a,t]}$ by [F5], with $\tilde J(a)=J(0)=0$, $\tilde J(t)=J(1)=0$ and $\tilde J\ne0$. By [F5] that would make $\gamma(a)$ and $\gamma(t)$ conjugate along $\gamma|_{[a,t]}$, contrary to the hypothesis. Hence $\ker d(\exp_p)_{\tau v}=\{0\}$. Both $T_{\tau v}(T_pM)$ and $T_{\gamma(t)}M$ have the same finite dimension, so [F17] makes $d(\exp_p)_{\tau v}$ invertible. At $t=a$ the differential $d(\exp_p)_{0_p}$ is invertible by [F3]. [F3, F4, F5, F17, given]

3.1 Local diffeomorphism branches over a finite cover of the segment. [F1, F6, F8, step 2.1, given]
For every $s\in[a,b]$, [F6] applies to the smooth map $\exp_p$ at $\psi(s)\in\mathcal E_p$, whose differential is invertible by step 2.1. Consider all pairs $(s,\rho)$ with $s\in[a,b]$, $\rho>0$, and $\exp_p$ a diffeomorphism on $B(\psi(s),4\rho)$ onto its open image. Such a pair exists for each $s$ by [F6], and the family of all smaller balls $B(\psi(s),\rho)$ from these pairs covers the compact set $\psi([a,b])$ (compact as the continuous image of $[a,b]$ by [F8]). Choose a finite subcover with pairs $(s_j,\rho_j)$, put $x_j:=\psi(s_j)$ and $V_j:=B(x_j,4\rho_j)$, and write $O_j:=\exp_p(V_j)$ and $\beta_j:=({\exp_p|_{V_j}})^{-1}:O_j\to V_j$. This makes only the finite subcover choice, not a choice of one inverse neighbourhood for every $s$. [F1, F6, F8, step 2.1]

4.1 A finite strip partition. [F7, F8, step 3.1, given]
The sets $W_j:=\psi^{-1}(B(x_j,\rho_j))$ form an open cover of the compact metric space $[a,b]$. By [F7] let $\delta>0$ be a Lebesgue number, and choose a finite partition $a=t_0<t_1<\dots<t_N=b$ with $t_i-t_{i-1}<\delta/(1+|v|_g)$; then $\operatorname{diam}([t_{i-1},t_i])=t_i-t_{i-1}<\delta$, so $[t_{i-1},t_i]$ lies in one $W_{j(i)}$. Thus for each $i$ there is $j(i)\in\{1,\dots,m\}$ with
$$\psi([t_{i-1},t_i])\subseteq B(x_{j(i)},\rho_{j(i)})\subseteq V_{j(i)}.$$
This uses only finitely many selections. [F7, F8]

5.1 Closeness thresholds. [F8, step 3.1, step 4.1, given]
For each $i$, the compact set $\gamma([t_{i-1},t_i])=\exp_p(\psi([t_{i-1},t_i]))$ is contained in the open set $O_{j(i)}$ by step 4.1. The family of all half-radius balls $B(q,R/2)$ with $q$ in this compact set, $R>0$ and $B(q,R)\subseteq O_{j(i)}$ covers it because $O_{j(i)}$ is open. Choose a finite subcover $B(\gamma(u_k),R_k/2)$. Their corresponding full-radius balls $B(\gamma(u_k),R_k)$ lie in $O_{j(i)}$. Put $\eta_1:=\min_i\min_k R_k/2>0$. For each $i<N$, openness of $O_{j(i)}$ and continuity of $\beta_{j(i)}$ at $\gamma(t_i)$, with $\beta_{j(i)}(\gamma(t_i))=\psi(t_i)$, supply $\mu_i>0$ such that $B(\gamma(t_i),\mu_i)\subseteq O_{j(i)}$ and every $q$ in that ball satisfies $|\beta_{j(i)}(q)-\psi(t_i)|_g<3\rho_{j(i+1)}$; put $\eta_2:=\min_{i<N}\mu_i>0$ (the empty minimum being $+\infty$, and $\eta_2=+\infty$ when $N=1$). Set $\varepsilon:=\min(\eta_1,\eta_2,1)>0$. [F8, given]

6.1 Pull-back of a nearby curve. [F6, F10, step 4.1, step 5.1, given]
Let $\bar\gamma:[a,b]\to M$ be continuous and piecewise $C^1$ with $\bar\gamma(a)=\gamma(a)$, $\bar\gamma(b)=\gamma(b)$ and $\sup_t d_g(\bar\gamma(t),\gamma(t))<\varepsilon$. For $t\in[t_{i-1},t_i]$, choose $k$ with $\gamma(t)\in B(\gamma(u_k),R_k/2)$ as in step 5.1; then, by the triangle inequality for $d_g$ [F16],
$$d_g(\bar\gamma(t),\gamma(u_k))\le d_g(\bar\gamma(t),\gamma(t))+d_g(\gamma(t),\gamma(u_k))<\varepsilon+R_k/2\le R_k,$$
so $\bar\gamma(t)\in O_{j(i)}$. Hence $\varphi_i:=\beta_{j(i)}\circ\bar\gamma$ is defined and continuous on $[t_{i-1},t_i]$ and piecewise $C^1$ there (as $\beta_{j(i)}$ is smooth and $\bar\gamma$ is piecewise $C^1$), with $\exp_p(\varphi_i(t))=\bar\gamma(t)$. At an interior subdivision point $t_i$, $i<N$: with $q:=\bar\gamma(t_i)$ one has $d_g(q,\gamma(t_i))<\varepsilon\le\mu_i$, so $|\varphi_i(t_i)-\psi(t_i)|_g<3\rho_{j(i+1)}$; since $\psi(t_i)\in B(x_{j(i+1)},\rho_{j(i+1)})$, this gives $\varphi_i(t_i)\in B(x_{j(i+1)},4\rho_{j(i+1)})=V_{j(i+1)}$, and so does $\varphi_{i+1}(t_i)$; both are mapped to $q$ by $\exp_p$, which is injective on $V_{j(i+1)}$, hence $\varphi_i(t_i)=\varphi_{i+1}(t_i)$. Therefore the formulas $\varphi|_{[t_{i-1},t_i]}:=\varphi_i$ define a single continuous piecewise $C^1$ curve $\varphi:[a,b]\to T_pM$ with
$$\exp_p(\varphi(t))=\bar\gamma(t)\quad(a\le t\le b),\qquad \varphi(t)\in V_{j(i)}\ \text{for}\ t\in[t_{i-1},t_i].$$
Moreover $\varphi(a)=\beta_{j(1)}(\gamma(a))=\beta_{j(1)}(\exp_p(0))=0$ and $\varphi(b)=\beta_{j(N)}(\gamma(b))=\beta_{j(N)}(\exp_p(X))=X$, because $0\in B(x_{j(1)},\rho_{j(1)})\subseteq V_{j(1)}$ and $X\in B(x_{j(N)},\rho_{j(N)})\subseteq V_{j(N)}$ by step 4.1. [F6, F10, F16, given]

7.1 Pointwise Gauss-lemma comparison. [F2, F12, step 6.1, given]
Let $\sigma>0$, put $r:=|\varphi|_g$ and $f_\sigma:=\sqrt{r^2+\sigma^2}=\sqrt{g_p(\varphi,\varphi)+\sigma^2}$, which is piecewise $C^1$ on $[a,b]$ with
$$f_\sigma'=\frac{g_p(\varphi,\varphi')}{f_\sigma}=\frac{g_p(\varphi,\varphi')}{\sqrt{|\varphi|_g^2+\sigma^2}}$$
by [F12]. At every interior point $t$ of a smooth piece of $\varphi$, [F12] applied to $\exp_p\circ\varphi=\bar\gamma$ gives $\dot{\bar\gamma}(t)=d(\exp_p)_{\varphi(t)}(\varphi'(t))$. If $\varphi(t)=0$, then $f_\sigma'(t)=0$ and the inequality below is trivial. Otherwise decompose $\varphi'(t)=a\,\varphi(t)+w$ with $a:=g_p(\varphi(t),\varphi'(t))/|\varphi(t)|_g^2$ and $w:=\varphi'(t)-a\varphi(t)$, so that $g_p(w,\varphi(t))=0$ by positive definiteness and symmetry of the inner product $g_p$ [F16]. By [F2] the images of $w$ and of the radial direction $\varphi(t)$ are orthogonal in $T_{\bar\gamma(t)}M$, and $|d(\exp_p)_{\varphi(t)}(\varphi(t))|_g=|\varphi(t)|_g$; hence
$$|\dot{\bar\gamma}(t)|_g^2=|d(\exp_p)_{\varphi(t)}(\varphi'(t))|_g^2=a^2|\varphi(t)|_g^2+|d(\exp_p)_{\varphi(t)}(w)|_g^2\ge\frac{g_p(\varphi(t),\varphi'(t))^2}{|\varphi(t)|_g^2}\ge f_\sigma'(t)^2,$$
because $|\varphi(t)|_g^2\le|\varphi(t)|_g^2+\sigma^2$. Thus
$$|\dot{\bar\gamma}(t)|_g\ge|f_\sigma'(t)|\qquad(a<t<b)$$
at all points where the two functions are differentiable, and by continuity the inequality extends to each closed smooth piece. [F2, F12, F16, given]

8.1 Lower bound for the length, and its sub-interval form. [F10, F11, F13, step 6.1, step 7.1, given]
Take the common finite refinement of the strip partition $a=t_0<\dots<t_N=b$ and an admissible piecewise-$C^1$ subdivision of $\bar\gamma$. On each refined closed subinterval, both $\varphi$ and $f_\sigma$ are continuous and $C^1$ in the interior, with one-sided derivatives at its ends. Step 7.1, monotonicity [F13], and Newton--Leibniz [F13] there give the speed integral at least the absolute change of $f_\sigma$. Summing first within each original strip and using the triangle inequality gives
$$\int_{t_{i-1}}^{t_i}|\dot{\bar\gamma}|_g\ge\int_{t_{i-1}}^{t_i}|f_\sigma'|\ge|f_\sigma(t_i)-f_\sigma(t_{i-1})|.$$
Subdivision independence [F10] identifies the sum of speed integrals with $L_g(\bar\gamma)$. Summing over $i$ and using the triangle inequality,
$$L_g(\bar\gamma)\ge|f_\sigma(b)-f_\sigma(a)|=\sqrt{|X|_g^2+\sigma^2}-\sigma .$$
This holds for every $\sigma>0$; the right-hand side increases to $|X|_g$ as $\sigma\downarrow0$ and never exceeds $|X|_g$, so
$$L_g(\bar\gamma)\ge|X|_g=L_g(\gamma),$$
which is the asserted inequality. The same computation applied to a sub-interval $[u,w]\subseteq[t_{i-1},t_i]$ of a single strip (with $r=|\varphi|_g$ and using $f_\sigma\to r$ as $\sigma\downarrow0$) gives, for all $a\le u\le w\le b$ after splitting at the finitely many $t_i$ and adding,
$$L_g(\bar\gamma|_{[u,w]})\ge|r(w)-r(u)|.$$
[F10, F11, F13, given]

9.1 Equality case, I: the radius is bounded, nondecreasing, and has no internal excursion. [F10, step 6.1, step 8.1, given]
Assume from now on that $L_g(\bar\gamma)=|X|_g$, and recall $r(a)=|\varphi(a)|_g=0$ and $r(b)=|X|_g$ from step 6.1.
(i) $r\le|X|_g$ on $[a,b]$: if $r(u)>|X|_g$, then by the sub-interval bound of step 8.1 and additivity [F10],
$$L_g(\bar\gamma)=L_g(\bar\gamma|_{[a,u]})+L_g(\bar\gamma|_{[u,b]})\ge r(u)+(r(u)-|X|_g)>|X|_g,$$
a contradiction.
(ii) $r$ is nondecreasing: if $s<s'$ with $r(s)>r(s')$, then by the sub-interval bound of step 8.1, (i) and additivity,
$$L_g(\bar\gamma)\ge r(s)+\bigl(r(s)-r(s')\bigr)+\bigl(|X|_g-r(s')\bigr)=|X|_g+2(r(s)-r(s'))>|X|_g,$$
a contradiction.
(iii) No component $(u,w)$ of the open set $\{r>0\}$ has $w<b$: for such a component $r(u)=r(w)=0$ (or $u=a$) and, picking $x\in(u,w)$ with $r(x)>0$,
$$L_g(\bar\gamma)\ge 0+r(x)+r(x)+|X|_g>|X|_g$$
by the sub-interval bound of step 8.1 applied to $[a,u]$, $[u,x]$, $[x,w]$, $[w,b]$ and additivity [F10], again a contradiction. Hence, if $X\ne0$, the set $\{r>0\}$ is a single interval $(\alpha,b]$ with $\alpha\in[a,b)$, and $r=0$ on $[a,\alpha]$.
[F10, step 6.1, step 8.1, given]

10.1 Equality case, II: the pull-back is radial. [F2, F13, F14, step 6.1, step 7.1, step 9.1, given]
Assume $X\ne0$, so by step 9.1(iii) $\{r>0\}=(\alpha,b]$. On $(\alpha,b]$ put $e:=\varphi/r$, a continuous piecewise $C^1$ map into the unit sphere of $(T_pM,g_p)$. Recall from step 7.1 the decomposition $\varphi'=a\varphi+w$ with $w=\varphi'-a\varphi$ perpendicular to $\varphi$ and
$$|\dot{\bar\gamma}|_g^2=\Bigl(\frac{g_p(\varphi,\varphi')}{|\varphi|_g}\Bigr)^2+|d(\exp_p)_\varphi(w)|_g^2=|r'|^2+|d(\exp_p)_\varphi(w)|_g^2 .$$
Suppose $w(t_0)\ne0$ at some interior point $t_0$ of a smooth piece contained in $(\alpha,b]$; then $g_1:=|d(\exp_p)_{\varphi(t_0)}(w(t_0))|_g>0$ because $d(\exp_p)_{\varphi(t_0)}$ is injective (step 6.1 places $\varphi(t_0)$ in $V_{j(i)}$, where $\exp_p$ is a diffeomorphism), and by continuity there is a closed interval $J\subseteq(\alpha,b)\cap[t_{i-1},t_i]$ on which $|d(\exp_p)_\varphi(w)|_g\ge g_1/2$. There the continuous function $H:=|\dot{\bar\gamma}|_g-|r'|$ satisfies
$$H=\sqrt{|r'|^2+|d(\exp_p)_\varphi(w)|_g^2}-|r'|>0,$$
so $\int_JH>0$ by [F14]. On the other hand, $|f_\sigma'|\le|r'|$ wherever $r>0$, so for every $\sigma>0$, step 7.1 gives $0\le H\le|\dot{\bar\gamma}|_g-|f_\sigma'|$ on $J$ and $|\dot{\bar\gamma}|_g-|f_\sigma'|\ge0$ on the whole strip, so [F13] yields
$$\int_JH\le\int_{t_{i-1}}^{t_i}\bigl(|\dot{\bar\gamma}|_g-|f_\sigma'|\bigr)\le L_g(\bar\gamma)-|f_\sigma(b)-f_\sigma(a)|=|X|_g-\bigl(\sqrt{|X|_g^2+\sigma^2}-\sigma\bigr)\le\sigma,$$
contradicting $\int_JH>0$ after $\sigma\downarrow0$. Hence $w\equiv0$ on $(\alpha,b]$, so $\varphi'=a\varphi$ and $e'=0$ on the interiors of the pieces; by continuity $e$ is constant on $(\alpha,b]$. Its value is
$$e_0=\frac{\varphi(b)}{|\varphi(b)|_g}=\frac{X}{|X|_g}=\frac{v}{|v|_g},$$
and $\varphi(t)=r(t)e_0$ for $t\in(\alpha,b]$, while $\varphi\equiv0$ on $[a,\alpha]$. Consequently $r(t)=g_p(\varphi(t),e_0)$ for every $t\in[a,b]$, so $r$ is piecewise $C^1$ with $r\ge0$ nondecreasing by step 9.1(ii). [F2, F13, F14, given]

11.1 Equality case, III: the monotone reparametrization. [F1, F9, F11, step 1.1, step 9.1, step 10.1, given]
Assume first $X\ne0$ and define
$$\tau(t):=a+\frac{g_p(\varphi(t),e_0)}{|v|_g}=a+\frac{r(t)}{|v|_g}\qquad(a\le t\le b).$$
Then $\tau$ is continuous, piecewise $C^1$ (as $\varphi$ is), nondecreasing (by step 10.1), and $\tau(t)\in[a,b]$ for all $t$ (by step 9.1(i) and $|X|_g=(b-a)|v|_g$), with $\tau(a)=a$ and $\tau(b)=a+|X|_g/|v|_g=b$. Since $r(t)/|v|_g\in[0,b-a]\subset I_{p,v}$ by step 1.1, [F1] gives
$$\exp_p(\varphi(t))=\exp_p\bigl(r(t)e_0\bigr)=\exp_p\Bigl(\frac{r(t)}{|v|_g}v\Bigr)=\gamma_{p,v}\Bigl(\frac{r(t)}{|v|_g}\Bigr)=\gamma\Bigl(a+\frac{r(t)}{|v|_g}\Bigr)=\gamma(\tau(t)),$$
so $\bar\gamma=\gamma\circ\tau$ as required. If $X=0$ (that is $v=0$ and $\gamma$ constant), then $|X|_g=0=L_g(\gamma)$ and $L_g(\bar\gamma)=0$, so $|\dot{\bar\gamma}|_g\equiv0$ on every smooth piece by [F14] and $\bar\gamma$ is constant with value $\bar\gamma(a)=p=\gamma$; thus $\bar\gamma=\gamma\circ\tau$ for every admissible $\tau$, for instance $\tau=\operatorname{id}$. This proves the forward direction of the equality clause in all cases. [F1, F9, F11, given]

12.1 Converse direction, and the boundary audit. [A1, F5, F15, step 11.1, given]
Conversely, if $\bar\gamma=\gamma\circ\tau$ for a continuous nondecreasing surjection $\tau:[a,b]\to[a,b]$, piecewise $C^1$, with $\tau(a)=a$, $\tau(b)=b$, then [F15] applies to the piecewise $C^1$ curve $\gamma$ and gives $\gamma\circ\tau$ piecewise $C^1$ with $L_g(\gamma\circ\tau)=L_g(\gamma)$; note that $\bar\gamma$ automatically has the two fixed endpoint values $\gamma(\tau(a))=\gamma(a)$ and $\gamma(\tau(b))=\gamma(b)$. This proves the reverse direction of the equality clause.
Boundaries and choice. Dimensions zero: $T_pM=\{0\}$, $\gamma$ is constant and the argument of step 11.1 with $X=0$ applies. Constant geodesics ($v=0$): $\gamma$ is constant and verbatim the same case applies; the equality clause holds because $\bar\gamma$ is then constant and every admissible $\tau$ factors it, which is [F15] applied to constant $\gamma$. Degenerate interval: the statement assumes $a<b$; a singleton interval carries no affine geodesic with $a<b$ and is not an instance. Endpoints: all derivatives at $a$ and $b$ are one-sided, the strips include the endpoints, and $\varphi(a)=0$, $\varphi(b)=X$ are used as values only. Choice: exactly the inherited $\mathrm{AC}_\omega$ is spent, through [F5] and the exponential-map suppliers; the finite cover, the finite partition, the finitely many threshold radii and the junction conditions are finite selections, and no field or direction is chosen from an infinite family. [A1, F5, F15, step 11.1, given] ∎

## Source locator

Zuoqin Wang, Riemannian Geometry (USTC, 2024 Spring), Lecture 20, Theorem 1.1(1) with its "moreover" clause and Lemma 1.3 with proof: the passage covering the finite local inverse branches of $\exp_p$ on sub-segments, the pull-back $\varphi$ of a nearby curve to the tangent space, the Gauss-lemma estimate $|(d\exp_p)_\varphi\dot\varphi|\ge|\dot r|$ and the statement that equality forces a monotone reparametrization. John M. Lee, Riemannian Manifolds: An Introduction to Curvature, Chapter 10 (printed pp.173-190): Jacobi fields, conjugate points and Gauss lemma, and Datar, Lectures on Riemannian Geometry, Lectures 18 and 22-23 (printed pp.134-135, 163-169). The smoothed-radius device, the strip-pull-back consistency argument and the full equality analysis (boundedness, monotonicity of $r$, exclusion of radial excursions, constancy of the direction) are carried out locally here; the sources state the comparison without those details.
