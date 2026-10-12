---
id: thm-gr-weak-field-einstein-stress-hierarchy
kind: theorem
title: "The weak-field Einstein hierarchy: linearized Einstein tensor, stress
  components and the Poisson equation"
status: draft
origin: session
domain: mathematics
dependency_level: 12
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - def-gr-stationary-weak-field-data
  - lem-gr-weak-field-admissibility-and-inverse-bounds
  - thm-gr-flat-linearized-curvature-and-gauge
  - def-gr-flat-linearized-perturbation
  - def-gr-minkowski-model-and-inertial-chart
  - def-gr-curvature-tensor-and-derived-tensors
  - def-laplacian-of-a-c2-function
  - thm-clairaut-schwarz-mixed-partials
  - thm-algebra-of-derivatives
  - def-c-r-and-smooth-maps-between-smooth-manifolds
  - def-gr-dust-matter-model
  - prop-gr-dust-and-perfect-fluid-conservation-equations
  - def-gr-observer-and-rest-space
  - lem-gr-observer-relative-velocity-expansions
  - cor-taylor-lagrange-and-cauchy-remainders
  - def-invertible-matrix-and-general-linear-group
  - def-euclidean-spheres-and-closed-balls
  - cor-euclidean-closed-balls-and-spheres-are-compact
  - thm-heine-cantor-metric
  - thm-geometric-series
dependency_roles:
  def-gr-stationary-weak-field-data: mathematical-premise
  lem-gr-weak-field-admissibility-and-inverse-bounds: mathematical-premise
  thm-gr-flat-linearized-curvature-and-gauge: mathematical-premise
  def-gr-flat-linearized-perturbation: mathematical-premise
  def-gr-minkowski-model-and-inertial-chart: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-gr-dust-matter-model: mathematical-premise
  prop-gr-dust-and-perfect-fluid-conservation-equations: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  lem-gr-observer-relative-velocity-expansions: mathematical-premise
  cor-taylor-lagrange-and-cauchy-remainders: mathematical-premise
  def-invertible-matrix-and-general-linear-group: mathematical-premise
  def-euclidean-spheres-and-closed-balls: mathematical-premise
  cor-euclidean-closed-balls-and-spheres-are-compact: mathematical-premise
  thm-heine-cantor-metric: mathematical-premise
  thm-geometric-series: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity,
        arXiv:gr-qc/9712019v1 (1997), Ch. 4: R^{(1)}_{00} = -(1/2)Delta h_{00}
        and the reduction of the field equations to the Poisson equation,
        printed pp. 111-112 (PDF pp. 118-119); Ch. 4: the trace-reversed
        linearized Einstein tensor, printed pp. 108-110 (PDF pp. 115-117)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos,
        Michaelmas 2019), section 5.1.1: the linearized Einstein tensor for the
        stationary weak-field ansatz and the Poisson equation Delta Phi = 4 pi G
        rho, printed pp. 205-208 (PDF pp. 212-215)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong\
        /gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022
        revision), section 4.2: the weak-field Einstein tensor and the Poisson
        equation from G_{00}, printed p. 42 (PDF p. 43), with the Newtonian
        module for the component hierarchy"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk\
        /user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
forward_refs:
  - thm-gr-dust-local-evolution
---

## Statement

Let $(\Omega,K,L,C,\varepsilon_0,\varphi,r)$ be stationary weak-field data
with spatial base $U=\pi(\Omega)$ and compact $K\subseteq U$, and suppose the
data form an Einstein family with coupling $\kappa>0$
([[def-gr-stationary-weak-field-data]] clauses (a)-(c)). Write
$\Phi=\varepsilon c^2\varphi:U\to\mathbb R$,
$\rho_\varepsilon=T_{00}/c^2:U\to\mathbb R$, and let $G^{(1)}$ be the
first-order Einstein coefficient of
[[def-gr-flat-linearized-perturbation]]. Let $c>0$ and
$G_N:=\kappa c^4/(8\pi)$. There are $\varepsilon_*'>0$ and $C_2<\infty$,
depending only on $C$, $L$ and the dimension, such that for every
$0<\varepsilon\le\varepsilon_*'$ the following inequalities hold at every
spacetime point $p\in\Omega$ with $\pi(p)\in K$. Spatial derivatives and
$\Delta$ are taken on $U$ ([[def-laplacian-of-a-c2-function]]), and maxima
are over the free component indices.

**(a) Linearized approximation.** With
$A_{ab}(\varepsilon):=g_{ab}(\varepsilon)-\eta_{ab}$,

$$\bigl|G_{ab}(g(\varepsilon))-G^{(1)}_{ab}(A(\varepsilon))\bigr|\le\frac{C_2\varepsilon^2}{L^2} .$$

**(b) Component hierarchy of the Einstein tensor.**

$$\Bigl|G_{00}(g(\varepsilon))-\frac{2\Delta\Phi}{c^2}\Bigr|\le\frac{C_2\varepsilon^2}{L^2},\qquad |G_{ij}(g(\varepsilon))|\le\frac{C_2\varepsilon^2}{L^2},\qquad |G_{0i}(g(\varepsilon))|\le\frac{C_2\varepsilon^{3/2}}{L^2}.$$

**(c) Stress hierarchy and independent dust source.** The Einstein equation
gives

$$\Bigl|\kappa T_{00}(\varepsilon)-\frac{2\Delta\Phi}{c^2}\Bigr|\le\frac{C_2\varepsilon^2}{L^2},\qquad |\kappa T_{ij}(\varepsilon)|\le\frac{C_2\varepsilon^2}{L^2},\qquad |\kappa T_{0i}(\varepsilon)|\le\frac{C_2\varepsilon^{3/2}}{L^2}.$$

For every Einstein family, the definition $\rho_\varepsilon=T_{00}/c^2$ therefore gives
$$|\Delta\Phi-4\pi G_N\rho_\varepsilon|\le\frac{C_2\varepsilon^2c^2}{2L^2}.$$

For the additional conclusion below, let $\nabla^\varepsilon$ denote the
metric-selected connection of $g(\varepsilon)$ and assume the Einstein source is an
**independent admissible nonnegative dust input**: for each $\varepsilon$,
there are smooth fields $\mathcal E_\varepsilon:\Omega\to[0,\infty)$ and
$u_\varepsilon$ on $\Omega$, with $u_\varepsilon$ future-directed and
$g(\varepsilon)(u_\varepsilon,u_\varepsilon)=-1$, such that
$T_{ab}=\mathcal E_\varepsilon (u_\varepsilon)_a(u_\varepsilon)_b$ and
$$\nabla^\varepsilon_a(\mathcal E_\varepsilon u_\varepsilon^a)=0,\qquad u_\varepsilon^a\nabla^\varepsilon_a u_\varepsilon^b=0 .$$
Where $\mathcal E_\varepsilon>0$, this is the dust model of
[[def-gr-dust-matter-model]]; where it vanishes, the smooth field
$u_\varepsilon$ remains specified and satisfies the geodesic equation by
the explicit hypotheses above. The stress
conservation identity follows from these equations (and agrees on the
positive-density region with [[prop-gr-dust-and-perfect-fluid-conservation-equations]]).
No comoving condition is imposed: the spatial tilt may be nonzero.
Define the independent rest-mass density
$$\mu_\varepsilon:=\mathcal E_\varepsilon/c^2\quad[\mathrm{kg}\,\mathrm m^{-3}],$$
where $\mathcal E_\varepsilon$ has the rest-energy-density unit
$\mathrm J\,\mathrm m^{-3}$ and $\mu_\varepsilon$ is independent of the
coordinate density $\rho_\varepsilon$.
It factors through $\pi$: normalization gives $\mathcal E_\varepsilon=-g^{ab}T_{ab}=-\kappa^{-1}g^{ab}G_{ab}$, whose components factor through the spatial projection by the Einstein-family hypothesis. Thus $\mu_\varepsilon$ also denotes its resulting smooth spatial function on $U$, including on disconnected fibers.
On $K$, assume the explicit weak-source and tilted slow-motion bounds
$$0\le\mathcal E_\varepsilon\le\frac{C\varepsilon c^4}{G_NL^2},\qquad s_\varepsilon\le C\sqrt\varepsilon\,c,$$
where on the region over $K$ the time orientation is chosen so that
$\partial_0$ is future (and $g(u_\varepsilon,\partial_0)<0$), and
$n_\varepsilon:=\partial_0/\sqrt{-g_{00}}$ is the resulting future unit
coordinate observer, $\gamma_\varepsilon:=-g(u_\varepsilon,n_\varepsilon)$,
$h_{n_\varepsilon}(u_\varepsilon):=u_\varepsilon+g(n_\varepsilon,u_\varepsilon)n_\varepsilon$,
and $s_\varepsilon$ is the norm of
$c\,h_{n_\varepsilon}(u_\varepsilon)/\gamma_\varepsilon$ in the observer's
rest space ([[def-gr-observer-and-rest-space]],
[[lem-gr-observer-relative-velocity-expansions]]). Choose
$$\varepsilon_*'\le\min\{\varepsilon_0,1,(128C)^{-1},(4C^2)^{-1}\},$$
also small enough for the two-jet estimate in the proof. This threshold
condition is dimensionless.
Then, for a constant $C_d$ depending only on $C$,

$$|T_{00}(\varepsilon)-\mu_\varepsilon c^2|\le\frac{C_d\varepsilon^2c^4}{G_NL^2},\qquad |\rho_\varepsilon-\mu_\varepsilon|\le\frac{C_d\varepsilon^2c^2}{G_NL^2},$$

and the distinct dust rest-mass density satisfies the Poisson estimate

$$|\Delta\Phi-4\pi G_N\mu_\varepsilon|\le\frac{C_2\varepsilon^2c^2}{L^2} .$$

The energy- and mass-density conventions of [[def-gr-dust-matter-model]]
give the same tensor here:
$T_{ab}=\mathcal E_\varepsilon u_a u_b=c^2\mu_\varepsilon u_a u_b$,
with $\mathcal E_\varepsilon=c^2\mu_\varepsilon$.

**(d) Scaled dust source.** Let $X:=\mathbf x/L$ and
$U_L:=\{X\in\mathbb R^3:LX\in U\}$. Define
$\psi(X):=\varphi(LX)$ and
$R(X):=G_NL^2\mu_\varepsilon(LX)/(\varepsilon c^2)$ on $U_L$, with
$\Delta_X$ the Laplacian in $X$. Then

$$|\Delta_X\psi-4\pi R|\le C_2\varepsilon\qquad\text{on }K/L .$$

## Facts & Assumptions

**Given:** Stationary weak-field data with spatial base $U=\pi(\Omega)$ and
compact $K\subseteq U$, an Einstein family with coupling $\kappa$, its
potential $\Phi=\varepsilon c^2\varphi$, the spatial density
$\rho_\varepsilon=T_{00}/c^2$, and the constants $c>0$ and
$G_N=\kappa c^4/(8\pi)$.

[L1] The component families have the form $g_{00}=-(1+2\varepsilon\varphi)+r_{00}$, $g_{0i}=r_{0i}$ and $g_{ij}=(1-2\varepsilon\varphi)\delta_{ij}+r_{ij}$, pulled back from $U$; on $K$, $|\partial^\alpha\varphi|\le C/L^{|\alpha|}$, $|\partial^\alpha r_{00}|+|\partial^\alpha r_{ij}|\le C\varepsilon^2/L^{|\alpha|}$ and $|\partial^\alpha r_{0i}|\le C\varepsilon^{3/2}/L^{|\alpha|}$ for spatial $|\alpha|\le2$ ([[def-gr-stationary-weak-field-data]] clause (a)).

[L2] The inverse metric is uniformly bounded through two spatial derivatives on $K$, and $g_{00}\le-1/2$ there, whenever $0<\varepsilon\le\min\{\varepsilon_0,1,(128C)^{-1}\}$ ([[lem-gr-weak-field-admissibility-and-inverse-bounds]]).

[L3] In the length-coordinate chart, the metric-selected Einstein tensor is a smooth rational function of the metric components and their first and second derivatives on the open set of nondegenerate metric matrices; its first derivative at $\eta$ is the linear operator
$$G^{(1)}_{ab}(A)=-\tfrac12\Box\bar A_{ab}+\partial^c\partial_{(a}\bar A_{b)c}-\tfrac12\eta_{ab}\partial^c\partial^d\bar A_{cd},$$
with indices raised by $\eta$ ([[thm-gr-flat-linearized-curvature-and-gauge]] clause (c), [[def-gr-flat-linearized-perturbation]] clauses (b)-(c), [[def-gr-curvature-tensor-and-derived-tensors]]).

[L4] All fields are stationary, so time derivatives of the metric components vanish, $\Box=\Delta$ on their stationary component functions, and spatial partial derivatives commute ([[def-gr-stationary-weak-field-data]], [[thm-clairaut-schwarz-mixed-partials]], [[thm-algebra-of-derivatives]]).

[L5] The Einstein-family condition is $G_{ab}(g(\varepsilon))=\kappa T_{ab}(\varepsilon)$ on $\Omega$; all metric and stress component functions are smooth ([[def-gr-stationary-weak-field-data]] clause (c), [[def-gr-curvature-tensor-and-derived-tensors]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

[A1] For each $\varepsilon$, $\mathcal E_\varepsilon\ge0$ and $u_\varepsilon$ are smooth on $\Omega$, $u_\varepsilon$ is future-directed and unit timelike for $g(\varepsilon)$, $T_{ab}=\mathcal E_\varepsilon(u_\varepsilon)_a(u_\varepsilon)_b$, and $\nabla^\varepsilon_a(\mathcal E_\varepsilon u_\varepsilon^a)=0$, $u_\varepsilon^a\nabla^\varepsilon_a u_\varepsilon^b=0$. Set $\mu_\varepsilon=\mathcal E_\varepsilon/c^2$. On $K$, $0\le\mathcal E_\varepsilon\le C\varepsilon c^4/(G_NL^2)$ and the speed relative to $n_\varepsilon=\partial_0/\sqrt{-g_{00}}$ satisfies $s_\varepsilon\le C\sqrt\varepsilon c$.

[L6] For a unit future observer $n$ and unit future timelike $u$, put $\gamma=-g(n,u)$ and $w=c\,h_n(u)/\gamma$, where $h_n(u)=u+g(n,u)n$. Then $s=\sqrt{g(w,w)}<c$ and $\gamma=(1-s^2/c^2)^{-1/2}$ ([[def-gr-observer-and-rest-space]], [[lem-gr-observer-relative-velocity-expansions]]).

[L7] For a positive-density dust model $T_{ab}=\mathcal E u_a u_b$, $\nabla^aT_{ab}=0$ is equivalent to the dust continuity and geodesic equations; the forward identity $\nabla^aT_{ab}=u_b\nabla_a(\mathcal E u^a)+\mathcal E u^a\nabla_a u_b$ also holds at zero density without division by $\mathcal E$ ([[def-gr-dust-matter-model]], [[prop-gr-dust-and-perfect-fluid-conservation-equations]] clause (a)). The same definition supplies the formal energy-to-mass conversion $\mathcal E_\varepsilon=c^2\mu_\varepsilon$, hence $T_{ab}=c^2\mu_\varepsilon u_a u_b$.

[L8] Closed Euclidean balls in finite-dimensional jet space are compact and continuous functions on them are bounded; Taylor's Lagrange remainder gives $|f(1)-f(0)-f'(0)|\le\tfrac12\sup_{[0,1]}|f''|$ for $f\in C^2([0,1])$; and $\sum_{k\ge0}q^k=1/(1-q)$ for $0\le q<1$ ([[cor-euclidean-closed-balls-and-spheres-are-compact]], [[thm-heine-cantor-metric]], [[cor-taylor-lagrange-and-cauchy-remainders]], [[thm-geometric-series]]).


## Proof

**Proof technique:** express the Einstein tensor as a smooth function on the finite-dimensional space of metric two-jets to obtain a uniform quadratic remainder, compute the first-order diagonal term, then estimate the independent dust source using its rest-frame density and tilt.

1.1 (A compact two-jet estimate independent of the spatial compact.) Identify the finite-dimensional vector space of symmetric metric two-jets $(A,L\partial A,L^2\partial^2A)$ with $\mathbb R^N$ and give it its Euclidean norm $\|\cdot\|_2$. In the length-coordinate chart the Christoffel and curvature formulas make $L^2G_{ab}(\eta+A)$ a rational smooth function $F_{ab}(J)$ of the two-jet $J$, wherever $\eta+A$ is invertible; its denominators are powers of $\det(\eta+A)$. Choose $0<\delta<1/16$ and let $Q=\overline B_2(0,\delta)\subset\mathbb R^N$. For $J\in Q$, every entry of $A$ has absolute value at most $\delta$. Put $H=\eta^{-1}A$; since $\eta^{-1}$ is diagonal with entries $\pm1$, $m(H)\le\delta$. Each entry of a product of $4\times4$ matrices is a sum of four products, so the finite-product estimate $m(BD)\le4m(B)m(D)$, $m(H^k)\le4^{k-1}\delta^k\le(4\delta)^k$ for $k\ge1$, so the matrix series $\sum_{k\ge0}(-H)^k$ converges entrywise by [L8]. The finite identity $(I+H)\sum_{k=0}^N(-H)^k=\sum_{k=0}^N(-H)^k(I+H)=I+(-1)^NH^{N+1}$ and $m(H^{N+1})\to0$ show that its sum is $(I+H)^{-1}$. The same argument applies on a neighborhood of $Q$, so $F_{ab}$ is smooth there. By [L8], $Q$ is compact and $D^2F_{ab}$ has a bound $M$ on $Q$ depending only on $\delta$ and the dimension, not on $K$ or on the family. Also $F_{ab}(0)=0$ and $DF_{ab}(0)[J]=L^2G^{(1)}_{ab}$ by [L3]. Applying the Lagrange remainder of [L8] to $t\mapsto F_{ab}(tJ)$ gives $|G_{ab}(\eta+A)-G^{(1)}_{ab}(A)|\le (M/2)\|J\|_2^2/L^2$ whenever $J\in Q$. By [L1], for $\varepsilon\le1$ the jet vector $J_L(A(\varepsilon),p)$ has norm at most $C_0(C)\varepsilon$ on $\pi^{-1}(K)\cap\Omega$, since all time derivatives vanish. Choose $\varepsilon_*'$ small enough that this norm is at most $\delta$. This proves (a) with a constant independent of $K$. [L1, L3, L8, given, algebra]

1.2 (The diagonal first-order term.) Define the stationary symmetric tensor $h$ on $U$ by $h_{00}=-2\varphi$, $h_{ij}=-2\varphi\delta_{ij}$ and $h_{0i}=0$. Then $A(\varepsilon)=\varepsilon h+s(\varepsilon)$, where $s_{00}=r_{00}$, $s_{0i}=r_{0i}$ and $s_{ij}=r_{ij}$. For $h$, its trace is $-4\varphi$, so $\bar h_{00}=-4\varphi$ and all $\bar h_{0i},\bar h_{ij}$ vanish. Formula [L3] and stationarity give $G^{(1)}_{00}(h)=2\Delta\varphi$, $G^{(1)}_{0i}(h)=0$ and $G^{(1)}_{ij}(h)=0$. [L3, L4, algebra]

1.3 (Dust conservation and the coordinate energy component.) First, normalization and the Einstein equation give $\mathcal E_\varepsilon=-g^{ab}T_{ab}=-\kappa^{-1}g^{ab}G_{ab}$; the spatial factorization of the metric, inverse and curvature makes this a spatial function, even across disconnected time fibers. The dust equations in [A1] give, by the product rule and metric compatibility, $\nabla^{\varepsilon a}T_{ab}=u_b\nabla^\varepsilon_a(\mathcal E u^a)+\mathcal E u^a\nabla^\varepsilon_a u_b=0$ on all of $\Omega$, including points where $\mathcal E=0$; no division by density is used. This is the forward conservation implication of [L7], extended to the nonnegative branch. By [L2], $g_{00}\le-1/2$ on $K$, so put $\alpha=\sqrt{-g_{00}}>0$, so $\partial_0=\alpha n$ and $n=n_\varepsilon$ is a future unit observer by the time-orientation condition in the Statement. By [L6], $\gamma^2=(1-s^2/c^2)^{-1}$. Since $s^2/c^2\le C^2\varepsilon\le1/4$, $\gamma^2\le4/3$ and $\gamma^2-1\le(4/3)C^2\varepsilon$. The weak-field coefficient gives $|\alpha^2-1|=|-g_{00}-1|\le2C\varepsilon+C\varepsilon^2\le3C\varepsilon$. Also $(u_\varepsilon)_0=g(u_\varepsilon,\partial_0)=-\alpha\gamma$, whence $T_{00}=\mathcal E_\varepsilon\alpha^2\gamma^2$. It follows that $|\alpha^2\gamma^2-1|\le\gamma^2|\alpha^2-1|+(\gamma^2-1)\le(4C+\tfrac43C^2)\varepsilon$. The energy bound of [A1] now gives $|T_{00}-\mu_\varepsilon c^2|\le C_d\varepsilon^2c^4/(G_NL^2)$ with $C_d:=4C^2+\tfrac43C^3$, and division by $c^2$ gives the stated estimate for $|\rho_\varepsilon-\mu_\varepsilon|$. [A1, L1, L2, L6, L7, algebra]

2.1 (Linear splitting.) The operator $G^{(1)}$ of [L3] is linear in its tensor argument. Thus $G^{(1)}(A(\varepsilon))=\varepsilon G^{(1)}(h)+G^{(1)}(s(\varepsilon))$. Combining this with step 1.1 yields $G(g(\varepsilon))=\varepsilon G^{(1)}(h)+G^{(1)}(s(\varepsilon))+O(C_0^2\varepsilon^2/L^2)$ with a uniform componentwise constant. [step 1.1, step 1.2, L3, algebra]

3.1 (Remainder-component bounds.) The terms in $G^{(1)}(s)$ involve only second derivatives of $s$. By [L1], $|G^{(1)}_{ij}(s)|\le C'\varepsilon^2/L^2$ and $|G^{(1)}_{0i}(s)|\le C'\varepsilon^{3/2}/L^2$. In the $00$ component, $s_{0i}$ contributes only through terms with a time derivative or a contraction by $\eta^{0i}$, both zero by [L4] and $\eta^{0i}=0$; hence $|G^{(1)}_{00}(s)|\le C'\varepsilon^2/L^2$. [step 2.1, L1, L3, L4, algebra]

4.1 (Einstein-tensor hierarchy.) Steps 1.2, 2.1 and 3.1 show $G_{00}=2\varepsilon\Delta\varphi+O(\varepsilon^2/L^2)=2\Delta\Phi/c^2+O(\varepsilon^2/L^2)$, $G_{ij}=O(\varepsilon^2/L^2)$ and $G_{0i}=O(\varepsilon^{3/2}/L^2)$. Taking a sufficiently large constant $C_2^0(C,L)$ proves (b). By the Einstein-family condition and $\rho_\varepsilon=T_{00}/c^2$, the first stress estimate also gives $|\Delta\Phi-4\pi G_N\rho_\varepsilon|\le C_2^0\varepsilon^2c^2/(2L^2)$ for all such families. [step 1.2, step 2.1, step 3.1, L5, algebra]

5.1 (Poisson matching to the independent dust density.) From [L5] and step 4.1, $|\kappa T_{00}-2\Delta\Phi/c^2|\le C_2^0\varepsilon^2/L^2$. Write $T_{00}=\mu_\varepsilon c^2+\eta_\varepsilon$, where step 1.3 gives $|\eta_\varepsilon|\le C_d\varepsilon^2c^4/(G_NL^2)$. Since $\kappa=8\pi G_N/c^4$, multiplication by $c^2/2$ yields $|\Delta\Phi-4\pi G_N\mu_\varepsilon|\le(C_2^0/2+4\pi C_d)\varepsilon^2c^2/L^2$. Enlarge $C_2\ge C_2^0$ to cover this constant and all component bounds. The comparison is with the independent rest-mass density, not with the definitionally read $T_{00}/c^2$. [step 4.1, step 1.3, L5, algebra]

6.1 (Scaled source and conclusion.) For $X\in K/L$, $\Delta_X\psi(X)=L^2\Delta\varphi(LX)$ and $4\pi R(X)=4\pi G_NL^2\mu_\varepsilon(LX)/(\varepsilon c^2)$. Multiplying the estimate of step 5.1 at $LX$ by $L^2/(\varepsilon c^2)$ gives $|\Delta_X\psi-4\pi R|\le C_2\varepsilon$. This proves (d), and steps 1.1, 4.1 and 1.3-5.1 prove (a)-(c). [step 5.1, given, algebra] ∎

## Remarks

- **Two distinct source densities.** Every Einstein family has the component
  estimate for $\rho_\varepsilon=T_{00}/c^2$, which is a coordinate
  energy-density reading divided by $c^2$. Matching the Poisson source to
  the independent dust rest-mass density $\mu_\varepsilon$ requires the
  separately stated dust, energy-size and tilt hypotheses; the density
  estimate is proved from those hypotheses and is not an identity.
- **Admissibility and existence.** The dust continuity and geodesic equations
  make its stress tensor divergence-free, including across smooth zero-density
  regions with the velocity field still specified. The theorem assumes the
  coupled Einstein-dust family; it does not construct one from Newtonian data
  or assert existence for prescribed initial data.
- **Nonlogical comparison with later evolution theory.** The density symbol
  $\rho$ used in [[thm-gr-dust-local-evolution]] is mass-normalized and
  corresponds to $\mu_\varepsilon=\mathcal E_\varepsilon/c^2$ here, so its
  tensor convention $c^2\rho u_a u_b$ matches the energy-density convention
  $\mathcal E_\varepsilon u_a u_b$. This is a notation comparison only;
  the present theorem assumes its coupled family and its smooth velocity
  even at zero density. Its proof uses no existence or evolution conclusion
  from that later theorem.
- **Gauge independence.** No harmonic-gauge condition is used here: the
  component estimates are computed directly in the spatially factored chart,
  and the linearized coefficient is evaluated on the actual perturbation.
  The flat gauge material of [[thm-gr-flat-linearized-curvature-and-gauge]]
  supplies the formula; the uniform two-jet remainder is established here.
